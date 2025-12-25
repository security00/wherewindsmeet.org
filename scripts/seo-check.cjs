'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require("node:child_process");
const { existsSync } = require("node:fs");
const { setTimeout: delay } = require("node:timers/promises");

const DEFAULT_PORT = 3100;
const DEFAULT_MAX_PAGES = 600;
const DEFAULT_ORIGIN = null;
const SITE_ORIGIN = "https://wherewindsmeet.org";

const parseArgValue = (args, key) => {
  const index = args.indexOf(key);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) return null;
  return value;
};

const isSkippableHref = (href) => {
  const lower = href.toLowerCase();
  return (
    lower.startsWith("#") ||
    lower.startsWith("mailto:") ||
    lower.startsWith("tel:") ||
    lower.startsWith("javascript:") ||
    lower.startsWith("data:")
  );
};

const stripHashAndQuery = (path) => path.split("#")[0].split("?")[0];

const isNonHtmlAssetPath = (path) => {
  if (!path) return true;
  if (path.startsWith("/_next/")) return true;
  if (path.startsWith("/api/")) return true;
  if (path === "/favicon.ico") return true;
  const cleaned = stripHashAndQuery(path);
  return /\.(png|jpe?g|gif|webp|avif|svg|ico|css|js|mjs|map|json|xml|txt|woff2?|ttf|eot)$/i.test(
    cleaned,
  );
};

const toInternalPath = (href, baseUrl) => {
  if (!href) return null;
  if (isSkippableHref(href)) return null;

  if (href.startsWith("/")) return stripHashAndQuery(href);

  if (href.startsWith(SITE_ORIGIN)) {
    try {
      return stripHashAndQuery(new URL(href).pathname);
    } catch {
      return null;
    }
  }

  if (href.startsWith(baseUrl)) {
    try {
      return stripHashAndQuery(new URL(href).pathname);
    } catch {
      return null;
    }
  }

  return null;
};

const extractHrefs = (html) => {
  const hrefs = new Set();
  const regex = /\bhref\s*=\s*(\"([^\"]+)\"|'([^']+)'|([^\s>]+))/gi;
  let match;
  while ((match = regex.exec(html))) {
    const href = match[2] || match[3] || match[4];
    if (!href) continue;
    hrefs.add(href.trim());
  }
  return [...hrefs];
};

const fetchWithTimeout = async (url, options = {}, timeoutMs = 15000) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

const waitForServer = async (baseUrl, timeoutMs = 30000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetchWithTimeout(`${baseUrl}/`, { redirect: "manual" }, 5000);
      if (response.status >= 200 && response.status < 500) return;
    } catch {
      // ignore until ready
    }
    await delay(250);
  }
  throw new Error(`Timeout waiting for server at ${baseUrl}`);
};

const isSitemapAvailable = async (baseUrl) => {
  try {
    const response = await fetchWithTimeout(`${baseUrl}/sitemap.xml`, { redirect: "follow" }, 5000);
    if (!response.ok) return false;
    const text = await response.text();
    return text.includes("<urlset") && text.includes("<loc>");
  } catch {
    return false;
  }
};

const fetchSitemapPaths = async (baseUrl) => {
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const response = await fetchWithTimeout(sitemapUrl, { redirect: "follow" }, 15000);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapUrl} (${response.status})`);
  }
  const xml = await response.text();
  const locRegex = /<loc>([^<]+)<\/loc>/gi;
  const paths = new Set();
  let match;
  while ((match = locRegex.exec(xml))) {
    const loc = match[1]?.trim();
    if (!loc) continue;
    try {
      const url = new URL(loc);
      paths.add(url.pathname);
    } catch {
      // ignore invalid loc
    }
  }
  return [...paths];
};

const crawl = async (baseUrl, maxPages) => {
  const queue = [];
  const queued = new Set();
  const visited = new Set();
  const broken = [];
  const redirectHops = [];

  const seedPaths = await fetchSitemapPaths(baseUrl);
  for (const path of seedPaths) {
    if (isNonHtmlAssetPath(path)) continue;
    if (queued.has(path)) continue;
    queue.push(path);
    queued.add(path);
  }

  while (queue.length && visited.size < maxPages) {
    const path = queue.shift();
    queued.delete(path);
    if (!path || visited.has(path)) continue;
    visited.add(path);

    const url = `${baseUrl}${path}`;
    let response;
    try {
      response = await fetchWithTimeout(url, { redirect: "manual" }, 20000);
    } catch (error) {
      broken.push({ path, status: "FETCH_ERROR", details: String(error) });
      continue;
    }

    if (response.status >= 400) {
      broken.push({ path, status: response.status, details: null });
      continue;
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      redirectHops.push({ from: path, status: response.status, to: location });
      if (location) {
        const nextPath = toInternalPath(location, baseUrl);
        if (nextPath && !visited.has(nextPath) && !queued.has(nextPath) && !isNonHtmlAssetPath(nextPath)) {
          queue.push(nextPath);
          queued.add(nextPath);
        }
      }
      continue;
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) continue;

    const html = await response.text();
    const hrefs = extractHrefs(html);

    for (const href of hrefs) {
      const internalPath = toInternalPath(href, baseUrl);
      if (!internalPath) continue;
      if (isNonHtmlAssetPath(internalPath)) continue;
      if (visited.has(internalPath) || queued.has(internalPath)) continue;
      queue.push(internalPath);
      queued.add(internalPath);
    }
  }

  return { visitedCount: visited.size, broken, redirectHops };
};

const main = async () => {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log(`SEO smoke check (internal links)

Usage:
  node scripts/seo-check.cjs [--origin https://wherewindsmeet.org] [--port 3100] [--max-pages 600]

Notes:
  - If scanning localhost, requires a production build (run \`npm run build\` first).
  - Fails on internal 4xx/5xx.
  - Prints internal redirects (3xx) as warnings.

Examples:
  # Scan a live deployment
  node scripts/seo-check.cjs --origin https://wherewindsmeet.org

  # Scan a local production server (will auto-start if needed)
  npm run build
  node scripts/seo-check.cjs --port 3100
`);
    return;
  }

  const port = Number(parseArgValue(args, "--port") || process.env.SEO_CHECK_PORT || DEFAULT_PORT);
  const maxPages = Number(
    parseArgValue(args, "--max-pages") || process.env.SEO_CHECK_MAX_PAGES || DEFAULT_MAX_PAGES,
  );
  const originArg = parseArgValue(args, "--origin") || process.env.SEO_CHECK_ORIGIN || DEFAULT_ORIGIN;
  const baseUrl = (originArg ? String(originArg) : `http://localhost:${port}`).replace(/\/+$/, "");
  const isLocalOrigin = (() => {
    try {
      const url = new URL(baseUrl);
      return url.hostname === "localhost" || url.hostname === "127.0.0.1";
    } catch {
      return false;
    }
  })();

  if (isLocalOrigin && !existsSync(".next/BUILD_ID")) {
    console.error("Missing production build. Run `npm run build` before running this check.");
    process.exitCode = 2;
    return;
  }

  const spawnPort = (() => {
    if (!isLocalOrigin) return port;
    try {
      const url = new URL(baseUrl);
      return Number(url.port) || port;
    } catch {
      return port;
    }
  })();

  const alreadyRunning = isLocalOrigin ? await isSitemapAvailable(baseUrl) : true;

  if (!isLocalOrigin) {
    const sitemapAvailable = await isSitemapAvailable(baseUrl);
    if (!sitemapAvailable) {
      console.error(`Sitemap not available at ${baseUrl}/sitemap.xml`);
      process.exitCode = 2;
      return;
    }
  }

  const server =
    isLocalOrigin && !alreadyRunning
      ? spawn(process.execPath, ["./scripts/run-with-baseline-env.cjs", "start", "-p", String(spawnPort)], {
          stdio: "inherit",
          env: process.env,
        })
      : null;

  const stopServer = async () => {
    if (!server) return;
    if (server.killed) return;
    server.kill("SIGTERM");
    await delay(250);
    if (!server.killed) server.kill("SIGKILL");
  };

  try {
    if (server) await waitForServer(baseUrl);
    const { visitedCount, broken, redirectHops } = await crawl(baseUrl, maxPages);

    console.log(`\nSEO check: scanned ${visitedCount} pages (limit ${maxPages}).`);

    if (redirectHops.length) {
      console.warn(
        `\nWarnings: ${redirectHops.length} internal redirects (ideally update links to point directly).`,
      );
      for (const hop of redirectHops.slice(0, 50)) {
        console.warn(` - ${hop.from} -> (${hop.status}) ${hop.to}`);
      }
      if (redirectHops.length > 50) {
        console.warn(` - ... and ${redirectHops.length - 50} more`);
      }
    }

    if (broken.length) {
      console.error(`\nFAIL: ${broken.length} broken internal pages/links (4xx/5xx).`);
      for (const item of broken.slice(0, 50)) {
        console.error(` - ${item.path} -> ${item.status}${item.details ? ` (${item.details})` : ""}`);
      }
      if (broken.length > 50) {
        console.error(` - ... and ${broken.length - 50} more`);
      }
      process.exitCode = 1;
    } else {
      console.log("\nOK: no internal 4xx/5xx found.");
    }
  } finally {
    await stopServer();
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
