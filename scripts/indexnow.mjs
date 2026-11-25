// Post-deploy: submit every sitemap URL to IndexNow.
// Usage: npm run indexnow
//        node scripts/indexnow.mjs --dry-run
//
// A fetch right after deploy can come back empty, cached, or as an HTML error
// page, so this retries with backoff and bypasses caches. Sitemap indexes are
// expanded to page URLs. Zero page URLs prints FAILED and exits non-zero.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const ORIGIN = process.env.SITE_ORIGIN || "https://wherewindsmeet.org";
const MAX_ATTEMPTS = 6;
const RETRY_DELAYS_MS = [2000, 4000, 8000, 16000, 32000];
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function locPattern() {
  return /<(?:([\w.-]+):)?loc(?:\s[^>]*)?>([\s\S]*?)<\/(?:\1:)?loc>/gi;
}

function mediaBlockPattern() {
  return /<(?:[\w.-]+:)?(?:image|video)\b[^>]*>[\s\S]*?<\/(?:[\w.-]+:)?(?:image|video)>/gi;
}

export function extractLocs(xml) {
  const source = String(xml ?? "").replace(mediaBlockPattern(), "");
  const urls = [];
  for (const match of source.matchAll(locPattern())) {
    const raw = match[2].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
    const value = decodeXml(raw).trim();
    if (value) urls.push(value);
  }
  return urls;
}

export function isSitemapIndex(xml) {
  return /<(?:[\w.-]+:)?sitemapindex(?:\s|>)/i.test(String(xml ?? ""));
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function redact(text) {
  return String(text ?? "").replace(/\b[a-f0-9]{32,128}\b/gi, "[redacted]");
}

function preview(body) {
  return redact(String(body ?? "").replace(/\s+/g, " ").trim()).slice(0, 140);
}

function unique(urls) {
  const seen = new Set();
  const out = [];
  for (const url of urls) {
    if (seen.has(url)) continue;
    seen.add(url);
    out.push(url);
  }
  return out;
}

function sameHost(origin, candidate) {
  try {
    const base = new URL(origin);
    const target = new URL(candidate, origin);
    return (target.protocol === "https:" || target.protocol === "http:") && target.host === base.host;
  } catch {
    return false;
  }
}

function withCacheBust(url, attempt) {
  const next = new URL(url);
  next.searchParams.set("indexnow", `${Date.now()}-${attempt}`);
  return next.toString();
}

function requestInit() {
  return {
    headers: {
      "user-agent": "wherewindsmeet-IndexNow/1.0",
      accept: "application/xml, text/xml;q=0.9, */*;q=0.8",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    cache: "no-store",
    redirect: "follow",
  };
}

async function readResponse(res) {
  const body = await res.text();
  const contentType = typeof res.headers?.get === "function" ? res.headers.get("content-type") || "" : "";
  return { status: res.status, contentType, body };
}

async function fetchDocument(url, fetchImpl, attempt) {
  const busted = withCacheBust(url, attempt);
  const first = await readResponse(await fetchImpl(busted, requestInit()));
  if (first.status !== 404) return { ...first, requestedUrl: busted };
  const plain = await readResponse(await fetchImpl(url, requestInit()));
  return { ...plain, requestedUrl: url };
}

async function loadPages(origin, url, fetchImpl, attempt, seen, depth) {
  const clean = new URL(url, origin);
  clean.search = "";
  clean.hash = "";
  const key = clean.href;
  if (seen.has(key) || depth > 3) {
    return { urls: [], status: 0, contentType: "", body: "", requestedUrl: key };
  }
  seen.add(key);
  const doc = await fetchDocument(clean.href, fetchImpl, attempt);
  if (doc.status !== 200) {
    return {
      urls: [],
      status: doc.status,
      contentType: doc.contentType,
      body: doc.body,
      requestedUrl: doc.requestedUrl,
    };
  }
  if (isSitemapIndex(doc.body)) {
    const pages = [];
    for (const child of extractLocs(doc.body)) {
      if (!sameHost(origin, child)) continue;
      const nested = await loadPages(origin, child, fetchImpl, attempt, seen, depth + 1);
      pages.push(...nested.urls);
    }
    return {
      urls: unique(pages),
      status: doc.status,
      contentType: doc.contentType,
      body: doc.body,
      requestedUrl: doc.requestedUrl,
      index: true,
    };
  }
  const pages = unique(extractLocs(doc.body).filter((loc) => sameHost(origin, loc)));
  return {
    urls: pages,
    status: doc.status,
    contentType: doc.contentType,
    body: doc.body,
    requestedUrl: doc.requestedUrl,
    index: false,
  };
}

function failureMessage(maxAttempts, last) {
  const status = last?.status ?? 0;
  const type = last?.contentType || "unknown";
  const bytes = last?.body?.length ?? 0;
  const body = preview(last?.body || "");
  return `FAILED: Sitemap had no URLs after ${maxAttempts} attempts. Last HTTP ${status} ${type} (${bytes} bytes). Body: ${body || "(empty)"}`;
}

export async function collectSitemapUrls(origin, options = {}) {
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  const sleep = options.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const log = options.log ?? ((message) => console.log(message));
  const maxAttempts = options.maxAttempts ?? MAX_ATTEMPTS;
  const delays = options.retryDelaysMs ?? RETRY_DELAYS_MS;
  const sitemapUrl = new URL("/sitemap.xml", origin).href;
  let last = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const loaded = await loadPages(origin, sitemapUrl, fetchImpl, attempt, new Set(), 0);
      last = loaded;
      log(
        `IndexNow: attempt ${attempt}/${maxAttempts} HTTP ${loaded.status} ${loaded.contentType || "unknown"}, ${loaded.urls.length} URLs`,
      );
      if (loaded.urls.length > 0) return loaded.urls;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      last = { status: 0, contentType: "", body: message, urls: [] };
      log(`IndexNow: attempt ${attempt}/${maxAttempts} error ${redact(message)}`);
    }
    if (attempt < maxAttempts) {
      const wait = delays[Math.min(attempt - 1, delays.length - 1)];
      log(`IndexNow: retrying in ${wait}ms`);
      await sleep(wait);
    }
  }

  throw new Error(failureMessage(maxAttempts, last));
}

function readKey() {
  const fileKey = readFileSync(new URL("../src/lib/indexnow-key.ts", import.meta.url), "utf8").match(
    /"([a-f0-9]{8,128})"/,
  )?.[1];
  return process.env.INDEXNOW_KEY || fileKey;
}

export function isDryRun(argv = process.argv, env = process.env) {
  return argv.includes("--dry-run") || env.INDEXNOW_DRY_RUN === "1";
}

export async function runIndexNow(options = {}) {
  const origin = options.origin || ORIGIN;
  const dryRun = options.dryRun ?? false;
  const log = options.log ?? ((message) => console.log(message));
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  const urls = await collectSitemapUrls(origin, { ...options, fetchImpl, log });
  if (dryRun) {
    log(`IndexNow dry-run: parsed ${urls.length} URLs (not submitted)`);
    return { submitted: false, count: urls.length };
  }
  const host = new URL(origin).host;
  const key = options.key || readKey();
  if (!key) throw new Error("FAILED: No IndexNow key");
  const res = await fetchImpl(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `${origin.replace(/\/$/, "")}/${key}.txt`, urlList: urls }),
  });
  const responseBody = await res.text();
  log(`IndexNow: submitted ${urls.length} URLs -> HTTP ${res.status} ${res.statusText || ""}`.trim());
  if (responseBody) log(redact(responseBody).slice(0, 500));
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`FAILED: IndexNow HTTP ${res.status}`);
  }
  return { submitted: true, count: urls.length, status: res.status };
}

async function main() {
  try {
    await runIndexNow({ dryRun: isDryRun(), origin: ORIGIN });
  } catch (error) {
    console.error(redact(error instanceof Error ? error.message : error));
    process.exit(1);
  }
}

function isCliEntry() {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return import.meta.url === pathToFileURL(entry).href;
  } catch {
    return false;
  }
}

if (isCliEntry()) {
  await main();
}
