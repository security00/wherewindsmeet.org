import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("IndexNow key is a 32-char hex key hosted at /{key}.txt", () => {
  const source = read("src/lib/indexnow-key.ts");
  const key = source.match(/INDEXNOW_KEY = "([a-f0-9]{32})"/)?.[1];
  assert.ok(key);
  assert.equal(read(`public/${key}.txt`).trim(), key);
  assert.match(source, /wherewindsmeet\.org/);
});

test("indexnow script posts sitemap URLs to the IndexNow API", () => {
  const script = read("scripts/indexnow.mjs");
  const pkg = JSON.parse(read("package.json"));

  assert.equal(pkg.scripts.indexnow, "node scripts/indexnow.mjs");
  assert.match(script, /SITE_ORIGIN \|\| "https:\/\/wherewindsmeet\.org"/);
  assert.match(script, /https:\/\/api\.indexnow\.org\/indexnow/);
  assert.match(script, /\/sitemap\.xml/);
  assert.match(script, /src\/lib\/indexnow-key\.ts/);
  assert.match(script, /keyLocation/);
});

test("production deploy submits IndexNow after a successful deploy and treats failure as non-fatal", () => {
  const workflow = read(".github/workflows/deploy.yml");
  const deployAt = workflow.indexOf("npm run cf:deploy:artifact");
  const indexnowAt = workflow.indexOf("npm run indexnow");

  assert.ok(deployAt > 0);
  assert.ok(indexnowAt > deployAt);
  const step = workflow.slice(workflow.lastIndexOf("- name:", indexnowAt), indexnowAt);
  assert.match(step, /continue-on-error:\s*true/);
  assert.match(step, /github\.event_name != 'pull_request'/);
  assert.match(step, /SITE_ORIGIN: https:\/\/wherewindsmeet\.org/);
});

const urlset = (locs) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locs
    .map((loc) => `<url><loc>${loc}</loc></url>`)
    .join("\n")}\n</urlset>`;

function xmlResponse(body, status = 200, contentType = "application/xml") {
  return new Response(body, { status, headers: { "content-type": contentType } });
}

test("indexnow retries an empty sitemap body, then parses namespaced locs", async () => {
  const { collectSitemapUrls } = await import("../scripts/indexnow.mjs");
  const calls = [];
  const sleeps = [];
  let hits = 0;
  const fetchImpl = async (url, init) => {
    calls.push({ url, cacheControl: init.headers["cache-control"], cache: init.cache });
    hits += 1;
    if (hits === 1) return xmlResponse("", 200);
    if (hits === 2) return xmlResponse("<html>Just a moment...</html>", 403, "text/html");
    return xmlResponse(
      `<urlset xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"><url><sm:loc><![CDATA[https://wherewindsmeet.org/guides]]></sm:loc></url><url><loc>https://wherewindsmeet.org/news?a=1&amp;b=2</loc></url></urlset>`,
    );
  };

  const urls = await collectSitemapUrls("https://wherewindsmeet.org", {
    fetchImpl,
    sleep: async (ms) => {
      sleeps.push(ms);
    },
    log() {},
  });

  assert.deepEqual(urls, [
    "https://wherewindsmeet.org/guides",
    "https://wherewindsmeet.org/news?a=1&b=2",
  ]);
  assert.equal(calls.length, 3);
  assert.deepEqual(sleeps, [2000, 4000]);
  for (const call of calls) {
    const parsed = new URL(call.url);
    assert.equal(parsed.pathname, "/sitemap.xml");
    assert.match(parsed.searchParams.get("indexnow") || "", /^[0-9]+-[0-9]+$/);
    assert.equal(call.cacheControl, "no-cache");
    assert.equal(call.cache, "no-store");
  }
});

test("indexnow prints FAILED when every sitemap attempt has no URLs", async () => {
  const { collectSitemapUrls } = await import("../scripts/indexnow.mjs");
  const sleeps = [];
  let hits = 0;
  const marker = "deadbeefdeadbeefdeadbeefdeadbeef";
  await assert.rejects(
    () =>
      collectSitemapUrls("https://wherewindsmeet.org", {
        fetchImpl: async () => {
          hits += 1;
          return xmlResponse(`<html>${marker}</html>`, 403, "text/html; charset=UTF-8");
        },
        sleep: async (ms) => {
          sleeps.push(ms);
        },
        log() {},
      }),
    (error) => {
      assert.match(error.message, /^FAILED: Sitemap had no URLs after 6 attempts/);
      assert.match(error.message, /Last HTTP 403 text\/html; charset=UTF-8/);
      assert.match(error.message, /\[redacted\]/);
      assert.equal(error.message.includes(marker), false);
      return true;
    },
  );
  assert.equal(hits, 6);
  assert.deepEqual(sleeps, [2000, 4000, 8000, 16000, 32000]);
});

test("indexnow expands a sitemap index and skips image locs", async () => {
  const { collectSitemapUrls } = await import("../scripts/indexnow.mjs");
  const fetchImpl = async (url) => {
    const { pathname } = new URL(url);
    if (pathname === "/sitemap.xml") {
      return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://wherewindsmeet.org/sitemap-en.xml</loc></sitemap>
  <sitemap><sm:loc>https://wherewindsmeet.org/sitemap-de.xml</sm:loc></sitemap>
  <sitemap><loc>https://example.com/offsite.xml</loc></sitemap>
</sitemapindex>`);
    }
    if (pathname === "/sitemap-en.xml") {
      return xmlResponse(
        `${urlset(["https://wherewindsmeet.org/a"])}<xhtml:link rel="alternate" href="https://wherewindsmeet.org/de/a"/>`,
      );
    }
    if (pathname === "/sitemap-de.xml") {
      return xmlResponse(`<urlset>
        <url>
          <image:image><image:loc>https://wherewindsmeet.org/img.png</image:loc></image:image>
          <loc>https://wherewindsmeet.org/de</loc>
        </url>
        <url><video:thumbnail_loc>https://wherewindsmeet.org/thumb.jpg</video:thumbnail_loc><loc>https://wherewindsmeet.org/de/guides</loc></url>
      </urlset>`);
    }
    throw new Error(`unexpected ${pathname}`);
  };

  const urls = await collectSitemapUrls("https://wherewindsmeet.org", {
    fetchImpl,
    sleep: async () => {
      throw new Error("sitemap index should not retry");
    },
    log() {},
  });

  assert.deepEqual(urls, [
    "https://wherewindsmeet.org/a",
    "https://wherewindsmeet.org/de",
    "https://wherewindsmeet.org/de/guides",
  ]);
});

function missingFile() {
  const error = new Error("ENOENT");
  error.code = "ENOENT";
  throw error;
}

test("indexnow dry-run parses URLs and does not submit", async () => {
  const { runIndexNow } = await import("../scripts/indexnow.mjs");
  const logs = [];
  const result = await runIndexNow({
    origin: "https://wherewindsmeet.org",
    dryRun: true,
    key: "not-a-real-key",
    artifactPaths: ["out/sitemap.xml"],
    readFile: missingFile,
    sleep: async () => {},
    log: (message) => logs.push(message),
    fetchImpl: async (url) => {
      assert.equal(String(url).includes("api.indexnow.org"), false);
      return xmlResponse(urlset(["https://wherewindsmeet.org/guides"]));
    },
  });

  assert.deepEqual(result, { submitted: false, count: 1, source: "live fetch" });
  assert.match(logs.at(-1), /IndexNow dry-run: parsed 1 URLs from live fetch \(not submitted\)/);
  assert.equal(logs.join("\n").includes("not-a-real-key"), false);
});

test("indexnow prefers a local build artifact over a live fetch", async () => {
  const { resolveSitemapUrls } = await import("../scripts/indexnow.mjs");
  const logs = [];
  let fetched = 0;
  const result = await resolveSitemapUrls("https://wherewindsmeet.org", {
    artifactPaths: ["out/sitemap.xml", ".next/server/app/sitemap.xml.body"],
    readFile(artifactPath) {
      if (artifactPath === "out/sitemap.xml") return urlset(["https://wherewindsmeet.org/guides"]);
      throw new Error(`unexpected read ${artifactPath}`);
    },
    fetchImpl: async () => {
      fetched += 1;
      throw new Error("live fetch should not run");
    },
    log: (message) => logs.push(message),
  });

  assert.equal(fetched, 0);
  assert.deepEqual(result, {
    urls: ["https://wherewindsmeet.org/guides"],
    source: "build artifact out/sitemap.xml",
  });
  assert.match(logs.join("\n"), /source build artifact out\/sitemap\.xml, 1 URLs/);
});

test("indexnow uses the next build body when out/sitemap.xml is missing", async () => {
  const { resolveSitemapUrls } = await import("../scripts/indexnow.mjs");
  const result = await resolveSitemapUrls("https://wherewindsmeet.org", {
    artifactPaths: ["out/sitemap.xml", ".next/server/app/sitemap.xml.body"],
    readFile(artifactPath) {
      if (artifactPath === "out/sitemap.xml") missingFile();
      if (artifactPath === ".next/server/app/sitemap.xml.body") {
        return urlset(["https://wherewindsmeet.org/news"]);
      }
      missingFile();
    },
    fetchImpl: async () => {
      throw new Error("live fetch should not run");
    },
    log() {},
  });

  assert.deepEqual(result.urls, ["https://wherewindsmeet.org/news"]);
  assert.equal(result.source, "build artifact .next/server/app/sitemap.xml.body");
});

test("indexnow falls back to a live fetch when the build artifact is missing", async () => {
  const { resolveSitemapUrls } = await import("../scripts/indexnow.mjs");
  const logs = [];
  const result = await resolveSitemapUrls("https://wherewindsmeet.org", {
    artifactPaths: ["out/sitemap.xml", ".next/server/app/sitemap.xml.body"],
    readFile: missingFile,
    sleep: async () => {
      throw new Error("a successful live sitemap should not retry");
    },
    log: (message) => logs.push(message),
    fetchImpl: async () => xmlResponse(urlset(["https://wherewindsmeet.org/tools"])),
  });

  assert.deepEqual(result, {
    urls: ["https://wherewindsmeet.org/tools"],
    source: "live fetch",
  });
  const text = logs.join("\n");
  assert.match(text, /Build artifact not found \(out\/sitemap\.xml, \.next\/server\/app\/sitemap\.xml\.body\)/);
  assert.match(text, /Falling back to live fetch/);
  assert.match(text, /source live fetch, 1 URLs/);
});

test("indexnow falls back to a live fetch when the build artifact has no URLs", async () => {
  const { resolveSitemapUrls } = await import("../scripts/indexnow.mjs");
  const logs = [];
  let fetched = 0;
  const result = await resolveSitemapUrls("https://wherewindsmeet.org", {
    artifactPaths: ["out/sitemap.xml"],
    readFile() {
      return "<urlset></urlset>";
    },
    sleep: async () => {
      throw new Error("a successful live sitemap should not retry");
    },
    log: (message) => logs.push(message),
    fetchImpl: async () => {
      fetched += 1;
      return xmlResponse(urlset(["https://wherewindsmeet.org/guides/codes"]));
    },
  });

  assert.equal(fetched, 1);
  assert.deepEqual(result.urls, ["https://wherewindsmeet.org/guides/codes"]);
  assert.equal(result.source, "live fetch");
  assert.match(logs.join("\n"), /Build artifact out\/sitemap\.xml had 0 URLs/);
});
