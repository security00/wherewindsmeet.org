import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("thin generic boss overviews are noindex until they have sourced encounter data", () => {
  const details = [
    read("app/(en)/guides/bosses/boss-detail.tsx"),
    read("app/(de)/de/guides/bosses/boss-detail.tsx"),
    read("app/(vn)/vn/guides/bosses/boss-detail.tsx"),
  ];

  for (const detail of details) {
    assert.match(detail, /robots:\s*\{\s*index:\s*false,\s*follow:\s*true\s*\}/s);
  }
  assert.match(details[0], /not a sourced mechanics, unlock, or rewards guide/i);
});

test("noindex boss overviews are excluded from the sitemap while Feng keeps its rich owner", () => {
  const sitemap = read("app/sitemap.ts");

  assert.match(sitemap, /bosses\.filter\(\(boss\)\s*=>\s*boss\.id\s*===\s*"feng-ruzhi"\)/);
  assert.doesNotMatch(sitemap, /const bossEntries:[\s\S]{0,100}bosses\.map/);
});
