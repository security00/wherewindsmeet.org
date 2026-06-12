'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */

const { existsSync, readFileSync, readdirSync, statSync } = require("node:fs");
const { extname, join, relative } = require("node:path");

const ROOTS_TO_SCAN = ["app", "lib"];
const TEXT_EXTENSIONS = new Set([".ts", ".tsx"]);
const REQUIRED_CORE_PATHS = ["/", "/news", "/guides/patch-notes", "/guides/codes"];
const REQUIRED_LATEST_VERSION = "Version 1.7";

const staleRules = [
  { pattern: /Quick picks \(May 2026 refresh\)/i, reason: "homepage still advertises May 2026 refresh" },
  { pattern: /Version 1\.6 \/ May updates/i, reason: "homepage still labels 1.6 as the latest update" },
  { pattern: /May 2026 active codes/i, reason: "codes CTA is still month-locked to May 2026" },
  { pattern: /Where Winds Meet Codes May 2026/i, reason: "codes metadata/H1 is still month-locked" },
  { pattern: /Updated May 14, 2026/i, reason: "patch notes still use the old May 14 check date" },
  { pattern: /Patch Notes May 2026 & Roadmap/i, reason: "patch notes metadata is still May 2026 focused" },
  { pattern: /Version 1\.6 \/ Flows of Dreams are summarized here/i, reason: "news page still treats 1.6 as the current trail" },
];

const staleScanTargets = [
  "app/(en)/page.tsx",
  "app/(vn)/vn/page.tsx",
  "app/(de)/de/page.tsx",
  "app/(en)/news/page.tsx",
  "app/(vn)/vn/news/page.tsx",
  "app/(de)/de/news/page.tsx",
  "app/(en)/guides/codes/page.tsx",
  "app/(vn)/vn/guides/codes/page.tsx",
  "app/(de)/de/guides/codes/page.tsx",
  "app/(en)/guides/patch-notes/page.tsx",
];

function walkFiles(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(path, files);
    } else if (TEXT_EXTENSIONS.has(extname(path))) {
      files.push(path);
    }
  }
  return files;
}

function routeFromHtmlPath(filePath) {
  const rel = relative("out", filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}`;
  return `/${rel.slice(0, -".html".length)}`;
}

function collectHtmlRoutes(dir = "out", routes = []) {
  if (!existsSync(dir)) return routes;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectHtmlRoutes(path, routes);
    } else if (entry.name.endsWith(".html")) {
      routes.push(routeFromHtmlPath(path));
    }
  }
  return routes;
}

function checkFreshnessRegistry(errors) {
  const registryPath = "lib/contentFreshness.json";
  if (!existsSync(registryPath)) {
    errors.push("Missing lib/contentFreshness.json");
    return;
  }

  const entries = JSON.parse(readFileSync(registryPath, "utf8"));
  const byPath = new Map(entries.map((entry) => [entry.basePath, entry]));

  // Derive a dynamic freshness anchor from the core entries themselves.
  // This removes the need to manually bump a hardcoded date in the checker every patch.
  const coreEntries = REQUIRED_CORE_PATHS.map((p) => byPath.get(p)).filter(Boolean);
  const coreDates = coreEntries.map((e) => e && e.lastChecked).filter((d) => typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d));
  const maxCoreDate = coreDates.length ? coreDates.sort().reverse()[0] : null;

  // Acceptable drift: core pages should be refreshed within ~4 days of each other (or of the newest core signal).
  const DRIFT_DAYS = 4;

  function isStaleComparedToAnchor(dateStr, anchor) {
    if (!dateStr || !anchor) return true;
    const d = new Date(dateStr);
    const a = new Date(anchor);
    if (isNaN(d) || isNaN(a)) return true;
    const diffDays = Math.floor((a - d) / (1000 * 60 * 60 * 24));
    return diffDays > DRIFT_DAYS;
  }

  for (const basePath of REQUIRED_CORE_PATHS) {
    const entry = byPath.get(basePath);
    if (!entry) {
      errors.push(`Freshness registry missing core path: ${basePath}`);
      continue;
    }
    if (!entry.gameVersion.includes(REQUIRED_LATEST_VERSION)) {
      errors.push(`Freshness registry for ${basePath} is not on ${REQUIRED_LATEST_VERSION}`);
    }
    if (!entry.lastChecked) {
      errors.push(`Freshness registry for ${basePath} has missing lastChecked`);
    } else if (maxCoreDate && isStaleComparedToAnchor(entry.lastChecked, maxCoreDate)) {
      errors.push(`Freshness registry for ${basePath} has stale lastChecked: ${entry.lastChecked} (anchor from other core entries is ${maxCoreDate}, drift > ${DRIFT_DAYS} days)`);
    }
    if (!Array.isArray(entry.languages) || !["en", "vi", "de"].every((lang) => entry.languages.includes(lang))) {
      errors.push(`Freshness registry for ${basePath} must cover en/vi/de`);
    }
    if (!Array.isArray(entry.sourceUrls) || entry.sourceUrls.length === 0) {
      errors.push(`Freshness registry for ${basePath} needs at least one source URL`);
    }
  }
}

function checkStalePhrases(errors) {
  const files = staleScanTargets.filter((file) => existsSync(file));
  for (const file of files) {
    const source = readFileSync(file, "utf8");
    for (const rule of staleRules) {
      if (rule.pattern.test(source)) {
        errors.push(`${file}: ${rule.reason}`);
      }
    }
  }
}

function checkSitemapCoverage(errors) {
  const sitemapPath = "out/sitemap.xml";
  if (!existsSync("out") || !existsSync(sitemapPath)) {
    return;
  }

  const sitemap = readFileSync(sitemapPath, "utf8");
  const sitemapRoutes = new Set(
    [...sitemap.matchAll(/<loc>https:\/\/wherewindsmeet\.org(.*?)<\/loc>/g)].map((match) => match[1] || "/"),
  );
  const ignored = new Set(["/_not-found", "/404", "/500"]);
  const missing = collectHtmlRoutes()
    .filter((route) => !ignored.has(route))
    .filter((route) => !sitemapRoutes.has(route));

  if (missing.length) {
    errors.push(`Sitemap missing generated routes: ${missing.slice(0, 20).join(", ")}${missing.length > 20 ? " ..." : ""}`);
  }
}

function checkRedirectRisk(errors) {
  const redirectsPath = "public/_redirects";
  if (!existsSync(redirectsPath)) return;
  const redirects = readFileSync(redirectsPath, "utf8");
  if (/^\/vn\/guides\/\*\s+\/vn\/guides\s+301/m.test(redirects)) {
    errors.push("public/_redirects still has risky /vn/guides/* catch-all redirect");
  }
}

function main() {
  const errors = [];
  checkFreshnessRegistry(errors);
  checkStalePhrases(errors);
  checkSitemapCoverage(errors);
  checkRedirectRisk(errors);

  if (errors.length) {
    console.error(`SEO freshness check failed (${errors.length} issues):`);
    for (const error of errors) console.error(` - ${error}`);
    process.exit(1);
  }

  const scannedFiles = ROOTS_TO_SCAN.flatMap((root) => walkFiles(root)).length;
  const outNote = existsSync("out") && statSync("out").isDirectory() ? "sitemap checked" : "no out/ build found";
  console.log(`SEO freshness check OK (${scannedFiles} source files available, ${outNote}).`);
}

main();
