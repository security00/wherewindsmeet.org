'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");

const DEFAULT_ORIGIN = "https://wherewindsmeet.org";
const DEFAULT_TIMEOUT_MS = 20000;
const DEFAULT_RETRIES = 3;

const parseArgValue = (args, key) => {
  const index = args.indexOf(key);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) return null;
  return value;
};

const normalizeOrigin = (origin) => String(origin || "").replace(/\/+$/, "");

const getFetchErrorCode = (error) => error?.cause?.code || error?.code || null;

const isRetryableFetchError = (error) => {
  if (!error) return false;
  if (error.name === "AbortError") return true;
  const code = getFetchErrorCode(error);
  return ["ECONNRESET", "ETIMEDOUT", "ECONNREFUSED", "EAI_AGAIN", "ENOTFOUND", "UND_ERR_CONNECT_TIMEOUT"].includes(code);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const normalizeUrl = (url, fallbackOrigin) => {
  if (!url) return url;
  try {
    const parsed = new URL(url, fallbackOrigin);
    const pathname = parsed.pathname.replace(/\/+$/, "") || "/";
    return `${parsed.protocol}//${parsed.host}${pathname}`;
  } catch {
    return String(url).replace(/\/+$/, "");
  }
};

const fetchWithTimeout = async (
  url,
  options = {},
  timeoutMs = DEFAULT_TIMEOUT_MS,
  retries = DEFAULT_RETRIES,
) => {
  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const headers = {
        "user-agent": "wwm-seo-check/1.0",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        ...options.headers,
      };
      return await fetch(url, { ...options, headers, signal: controller.signal });
    } catch (error) {
      lastError = error;
      const shouldRetry = attempt < retries && isRetryableFetchError(error);
      if (!shouldRetry) break;

      const delayMs = Math.min(2000, 250 * 2 ** attempt);
      console.warn(
        `WARN: fetch failed (${getFetchErrorCode(error) || error.name || "unknown"}), retrying in ${delayMs}ms: ${url}`,
      );
      await sleep(delayMs);
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError || new Error("fetch failed");
};

const readUnionTypeStrings = (filePath, typeName) => {
  const source = readFileSync(filePath, "utf8");
  const match = source.match(new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*([\\s\\S]*?);`));
  if (!match) {
    throw new Error(`Could not find union type "${typeName}" in ${filePath}`);
  }
  const block = match[1];
  return [...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
};

const extractLinks = (html) => {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const head = headMatch ? headMatch[1] : html;

  const canonical = (() => {
    const tagMatch = head.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i);
    if (!tagMatch) return null;
    const hrefMatch = tagMatch[0].match(/\bhref=["']([^"']+)["']/i);
    return hrefMatch ? hrefMatch[1] : null;
  })();

  const alternates = {};
  for (const tag of head.matchAll(/<link\b[^>]*>/gi)) {
    const raw = tag[0];
    const relMatch = raw.match(/\brel=["']([^"']+)["']/i);
    if (!relMatch) continue;
    if (relMatch[1]?.toLowerCase() !== "alternate") continue;

    const hreflangMatch = raw.match(/\bhreflang=["']([^"']+)["']/i);
    const hrefMatch = raw.match(/\bhref=["']([^"']+)["']/i);
    if (!hreflangMatch || !hrefMatch) continue;

    alternates[hreflangMatch[1]] = hrefMatch[1];
  }

  const canonicalFromFlight = (() => {
    const match = html.match(/\\"rel\\":\\"canonical\\",\\"href\\":\\"([^\\"]+)\\"/);
    return match ? match[1] : null;
  })();

  for (const match of html.matchAll(/\\"rel\\":\\"alternate\\",\\"hrefLang\\":\\"([^\\"]+)\\",\\"href\\":\\"([^\\"]+)\\"/g)) {
    alternates[match[1]] = match[2];
  }

  return { canonical: canonical || canonicalFromFlight, alternates };
};

const languagePrefixFromPath = (path) => {
  if (path.startsWith("/de/")) return "/de";
  if (path.startsWith("/vn/")) return "/vn";
  return "";
};

const stripPrefix = (path, prefix) => {
  if (!prefix) return path;
  if (path === prefix) return "/";
  return path.startsWith(prefix) ? path.slice(prefix.length) : path;
};

const buildExpectedHreflang = (origin, normalizedPath) => {
  const base = normalizeOrigin(origin);
  return {
    "en-US": `${base}${normalizedPath}`,
    "vi-VN": `${base}/vn${normalizedPath}`,
    "de-DE": `${base}/de${normalizedPath}`,
    "x-default": `${base}${normalizedPath}`,
  };
};

const checkPage = async (origin, path) => {
  const url = `${origin}${path}`;
  let response;
  try {
    response = await fetchWithTimeout(url, { redirect: "follow" });
  } catch (error) {
    const code = getFetchErrorCode(error);
    const details = code ? `${code}` : error?.name || "FETCH_ERROR";
    return { ok: false, path, url, errors: [`Fetch error: ${details}`], warnings: [] };
  }
  if (!response.ok) {
    return { ok: false, path, url, errors: [`HTTP ${response.status}`], warnings: [] };
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return { ok: false, path, url, errors: [`Unexpected content-type: ${contentType || "unknown"}`], warnings: [] };
  }

  const html = await response.text();
  const { canonical, alternates } = extractLinks(html);

  const prefix = languagePrefixFromPath(path);
  const normalizedPath = stripPrefix(path, prefix) || "/";

  const expectedCanonical = normalizeUrl(`${origin}${prefix}${normalizedPath}`, origin);
  const actualCanonical = normalizeUrl(canonical, origin);

  const errors = [];
  const warnings = [];

  if (!canonical) {
    errors.push("Missing canonical link tag");
  } else if (actualCanonical !== expectedCanonical) {
    errors.push(`Canonical mismatch: expected ${expectedCanonical}, got ${actualCanonical}`);
  }

  const expectedAlternates = buildExpectedHreflang(origin, normalizedPath);
  for (const [lang, expectedHref] of Object.entries(expectedAlternates)) {
    const actual = alternates[lang];
    if (!actual) {
      errors.push(`Missing hreflang alternate: ${lang}`);
      continue;
    }
    const normalizedActual = normalizeUrl(actual, origin);
    const normalizedExpected = normalizeUrl(expectedHref, origin);
    if (normalizedActual !== normalizedExpected) {
      errors.push(`Hreflang ${lang} mismatch: expected ${normalizedExpected}, got ${normalizedActual}`);
    }
  }

  const alternateCount = Object.keys(alternates).length;
  if (alternateCount && alternateCount < 3) {
    warnings.push(`Only ${alternateCount} hreflang alternates found`);
  }

  return { ok: errors.length === 0, path, url, errors, warnings };
};

const main = async () => {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log(`Hreflang/canonical regression check (bosses + weapons)

Usage:
  node scripts/seo-hreflang-regression.cjs [--origin https://wherewindsmeet.org]

Notes:
  - Checks that EN/VN/DE boss + weapon detail pages return 200 and emit expected canonical + hreflang URLs.
  - Reads IDs from \`lib/bosses.ts\` and \`lib/weapons.ts\`.
  - Retries transient network errors up to ${DEFAULT_RETRIES} times per page.
`);
    return;
  }

  const origin = normalizeOrigin(parseArgValue(args, "--origin") || process.env.SEO_HREFLANG_ORIGIN || DEFAULT_ORIGIN);
  if (!origin || !origin.startsWith("http")) {
    throw new Error(`Invalid origin: ${origin}`);
  }

  const bossIds = readUnionTypeStrings(resolve("lib/bosses.ts"), "BossId");
  const weaponIds = readUnionTypeStrings(resolve("lib/weapons.ts"), "WeaponId");

  const paths = [
    ...bossIds.flatMap((id) => [`/guides/bosses/${id}`, `/de/guides/bosses/${id}`, `/vn/guides/bosses/${id}`]),
    ...weaponIds.flatMap((id) => [`/guides/weapons/${id}`, `/de/guides/weapons/${id}`, `/vn/guides/weapons/${id}`]),
  ];

  const results = [];
  for (const path of paths) {
    console.log(`- Checking ${path}`);
    results.push(await checkPage(origin, path));
  }

  const failures = results.filter((r) => !r.ok);
  const warnings = results.flatMap((r) => r.warnings.map((w) => ({ path: r.path, warning: w })));

  console.log(`\nHreflang regression: checked ${results.length} pages (${bossIds.length} bosses, ${weaponIds.length} weapons).`);

  if (warnings.length) {
    console.warn(`\nWarnings: ${warnings.length}`);
    for (const item of warnings.slice(0, 20)) {
      console.warn(` - ${item.path}: ${item.warning}`);
    }
    if (warnings.length > 20) {
      console.warn(` - ... and ${warnings.length - 20} more`);
    }
  }

  if (failures.length) {
    console.error(`\nFAIL: ${failures.length} pages have canonical/hreflang issues.`);
    for (const failure of failures.slice(0, 20)) {
      console.error(` - ${failure.path}`);
      for (const error of failure.errors) {
        console.error(`   - ${error}`);
      }
    }
    if (failures.length > 20) {
      console.error(` - ... and ${failures.length - 20} more`);
    }
    process.exitCode = 1;
  } else {
    console.log("\nOK: all checked pages have expected canonical + hreflang.");
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
