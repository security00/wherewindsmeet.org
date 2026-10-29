import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

const requiredPaths = [
  "/",
  "/guides",
  "/guides/codes",
  "/tools/interactive-map",
  "/guides/patch-notes",
  "/guides/qingzhou",
  "/guides/penglai",
  "/news",
  "/privacy",
  "/terms",
  "/de",
  "/vn",
];

test("llms.txt is a force-static text route beside robots and sitemap", () => {
  const route = read("app/llms.txt/route.ts");
  const robots = read("app/robots.ts");
  const sitemap = read("app/sitemap.ts");

  assert.match(robots, /export const dynamic = "force-static"/);
  assert.match(sitemap, /export const dynamic = "force-static"/);
  assert.match(route, /export const dynamic = "force-static"/);
  assert.match(route, /llmsTxt/);
  assert.match(route, /Content-Type": "text\/plain; charset=utf-8"/);
  assert.doesNotMatch(route, /runtime\s*=\s*["']edge["']/);
});

test("llms.txt states the unofficial fan-hub boundary and points at published pages", () => {
  const body = read("lib/llms-txt.ts");
  const sitemap = read("app/sitemap.ts");
  const freshness = read("lib/contentFreshness.json");

  assert.match(body, /unofficial fan hub/i);
  assert.match(body, /not affiliated with NetEase or Everstone/i);
  assert.match(body, /not owned, operated, or endorsed by the publisher or developers/i);
  assert.match(body, /https:\/\/wherewindsmeet\.org\/sitemap\.xml/);
  assert.match(body, /https:\/\/wherewindsmeet\.org\/robots\.txt/);
  assert.match(body, /support@wherewindsmeet\.org/);
  assert.doesNotMatch(body, /\]\(\//);

  const sitemapLists = (pathname) => {
    if (pathname === "/de") return /entry\.path === "\/" \? "\/de"/.test(sitemap);
    const escaped = pathname.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`path:\\s*"${escaped}"`).test(sitemap);
  };

  for (const path of requiredPaths) {
    const absolute = `https://wherewindsmeet.org${path === "/" ? "/" : path}`;
    assert.match(body, new RegExp(absolute.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.equal(sitemapLists(path), true, `${path} missing from sitemap source`);
  }

  const links = [...body.matchAll(/\]\((https:\/\/[^)\s]+)\)/g)].map((match) => match[1]);
  assert.ok(links.length >= requiredPaths.length);
  for (const url of links) {
    const parsed = new URL(url);
    if (parsed.hostname === "wherewindsmeet.org") {
      if (parsed.pathname === "/sitemap.xml" || parsed.pathname === "/robots.txt") continue;
      assert.equal(sitemapLists(parsed.pathname), true, `${url} must already be a sitemap path`);
      continue;
    }
    assert.ok(
      parsed.hostname === "www.wherewindsmeetgame.com" || parsed.hostname === "store.steampowered.com",
      `unexpected host ${parsed.hostname}`,
    );
    assert.match(freshness, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});
