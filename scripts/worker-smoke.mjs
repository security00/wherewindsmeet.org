import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.CF_SMOKE_PORT || 8792);
const origin = `http://127.0.0.1:${port}`;
const previewBinary = resolve(
  projectRoot,
  "node_modules/.bin/opennextjs-cloudflare",
);
const wranglerBinary = resolve(projectRoot, "node_modules/.bin/wrangler");
const preview = spawn(
  previewBinary,
  ["preview", "--config", "wrangler.toml", "--port", String(port)],
  {
    cwd: projectRoot,
    detached: process.platform !== "win32",
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  },
);

let previewLog = "";
let canonicalPreview;
let canonicalPreviewLog = "";
const capture = (chunk) => {
  previewLog = `${previewLog}${chunk.toString()}`.slice(-20_000);
};
preview.stdout.on("data", capture);
preview.stderr.on("data", capture);

const delay = (milliseconds) =>
  new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds));

async function waitForPreview() {
  const deadline = Date.now() + 90_000;

  while (Date.now() < deadline) {
    if (preview.exitCode !== null) {
      throw new Error(`Worker preview exited early.\n${previewLog}`);
    }
    try {
      const response = await fetch(origin, { redirect: "manual" });
      if (response.status === 200) return;
    } catch {
      // Wrangler is still starting or populating the local cache.
    }
    await delay(250);
  }

  throw new Error(`Timed out waiting for Worker preview.\n${previewLog}`);
}

async function stopChild(child) {
  if (!child || child.exitCode !== null) return;

  if (process.platform === "win32") child.kill("SIGINT");
  else process.kill(-child.pid, "SIGINT");

  await Promise.race([once(child, "exit"), delay(5_000)]);
  if (child.exitCode === null) {
    if (process.platform === "win32") child.kill("SIGKILL");
    else process.kill(-child.pid, "SIGKILL");
  }
}

const stopPreviews = () =>
  Promise.all([stopChild(preview), stopChild(canonicalPreview)]);

async function expectHtml(path, language) {
  const response = await fetch(`${origin}${path}`, { redirect: "manual" });
  assert.equal(response.status, 200, `${path} should return 200`);
  assert.match(response.headers.get("content-type") || "", /text\/html/);
  const html = await response.text();
  assert.match(html, new RegExp(`<html[^>]+lang=["']${language}["']`));
  assert.match(html, /rel=["']canonical["']/);
  assert.doesNotMatch(html, /pagead2\.googlesyndication\.com/);
  return html;
}

async function expectCanonicalHostRedirect() {
  await stopChild(preview);
  canonicalPreview = spawn(
    wranglerBinary,
    [
      "dev",
      "--config",
      "wrangler.toml",
      "--ip",
      "127.0.0.1",
      "--port",
      String(port),
      "--host",
      "www.wherewindsmeet.org",
      "--show-interactive-dev-session",
      "false",
    ],
    {
      cwd: projectRoot,
      detached: process.platform !== "win32",
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const captureCanonical = (chunk) => {
    canonicalPreviewLog = `${canonicalPreviewLog}${chunk.toString()}`.slice(
      -20_000,
    );
  };
  canonicalPreview.stdout.on("data", captureCanonical);
  canonicalPreview.stderr.on("data", captureCanonical);

  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    if (canonicalPreview.exitCode !== null) {
      throw new Error(
        `Canonical-host preview exited early.\n${canonicalPreviewLog}`,
      );
    }
    try {
      const response = await fetch(`${origin}/guides?smoke=1`, {
        redirect: "manual",
      });
      assert.equal(response.status, 301);
      assert.equal(
        response.headers.get("location"),
        "https://wherewindsmeet.org/guides?smoke=1",
      );
      return;
    } catch (error) {
      if (error instanceof assert.AssertionError) throw error;
    }
    await delay(250);
  }

  throw new Error(
    `Timed out waiting for canonical-host preview.\n${canonicalPreviewLog}`,
  );
}

async function run() {
  await waitForPreview();

  const homeHtml = await expectHtml("/", "en-US");
  await expectHtml("/de", "de-DE");
  await expectHtml("/vn", "vi-VN");

  const sitemap = await fetch(`${origin}/sitemap.xml`, { redirect: "manual" });
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers.get("content-type") || "", /(?:xml|text\/plain)/);
  const sitemapXml = await sitemap.text();
  assert.doesNotMatch(
    sitemapXml,
    /\/(?:de|vn)\/guides\/(?:tier-list|pvp-tier-list|weapons\/tier-list)/,
  );

  const fallback = await fetch(`${origin}/vn/guides/one-leaf-one-life`, {
    redirect: "manual",
  });
  assert.equal(fallback.status, 301);
  assert.equal(fallback.headers.get("location"), "/guides/one-leaf-one-life");

  const missing = await fetch(`${origin}/not-a-real-page`, {
    redirect: "manual",
  });
  assert.equal(missing.status, 404);

  const assetPath = homeHtml.match(
    /(?:src|href)=["'](\/_next\/static\/[^"']+)["']/,
  )?.[1];
  assert.ok(assetPath, "home page should reference a Next.js static asset");
  const asset = await fetch(`${origin}${assetPath}`);
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get("cache-control") || "", /immutable/i);

  // OpenNext's local preview fixes the request URL to its local origin. Start
  // the real Wrangler entry once with the legacy production host so the
  // top-level worker.mjs canonical redirect is exercised, not merely inspected.
  await expectCanonicalHostRedirect();

  console.log(
    "Worker smoke OK: pages, locale redirect, www canonical, 404, sitemap, asset cache.",
  );
}

run()
  .catch((error) => {
    console.error(error);
    if (previewLog) console.error(previewLog);
    if (canonicalPreviewLog) console.error(canonicalPreviewLog);
    process.exitCode = 1;
  })
  .finally(stopPreviews);
