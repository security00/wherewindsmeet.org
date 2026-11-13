import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

import { LAST_VERIFIED } from "../lib/globalAnnouncements.ts";
import { newsItems } from "../lib/news.ts";
import { sitemapLastModifiedDay } from "../lib/sitemap-lastmod.ts";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("sitemap lastmod is chosen per path and is not the max official news date", () => {
  const sitemapSource = read("app/sitemap.ts");
  assert.match(sitemapSource, /sitemapLastModifiedDay\(entry\.path, inheritedDay\)/);
  assert.match(sitemapSource, /new Date\(PRIOR_SHARED_LAST_MODIFIED\)/);
  assert.doesNotMatch(sitemapSource, /latestNewsDate/);
});

test("October 29 patch notes keep two official stamps and do not invent a clock", () => {
  const item = newsItems.find((row) => row.id === "october-29-version-2-3-patch-notes");
  assert.ok(item);
  assert.equal(item.date, "2026-10-30");
  assert.deepEqual(item.sourcePublications, [
    { publisher: "official-site", date: "2026-10-30" },
    {
      publisher: "steam",
      date: "2026-10-29",
      dateTime: "2026-10-29T16:38:17+08:00",
      timeZone: "Asia/Shanghai",
    },
  ]);
  assert.equal(item.sourcePublications[0].dateTime, undefined);
  assert.match(item.dateLabel ?? "", /2026-10-30/);
  assert.match(item.dateLabel ?? "", /2026-10-29 16:38:17 UTC\+8/);
  assert.doesNotMatch(item.date, /T/);
});

test("the news feed stays in manual array order instead of official-date order", () => {
  const newsPage = read("app/(en)/news/page.tsx");
  assert.match(newsPage, /const sortedNews = newsItems;/);
  assert.doesNotMatch(newsPage, /\.sort\(/);

  const overview = newsItems.findIndex((row) => row.id === "october-15-version-2-3-update-overview");
  const balance = newsItems.findIndex((row) => row.id === "october-15-version-2-3-path-balance");
  assert.ok(overview >= 0 && balance > overview);
  assert.ok(newsItems[balance].date < newsItems[overview].date);
});

test("English news and patch notes use the 2026-11-06 editorial revision", () => {
  assert.equal(LAST_VERIFIED, "2026-11-06");
  const newsPage = read("app/(en)/news/page.tsx");
  const patchNotes = read("app/(en)/guides/patch-notes/page.tsx");

  assert.doesNotMatch(newsPage, /latestNewsDate/);
  assert.match(newsPage, /Updated \$\{LAST_VERIFIED\}/);
  assert.match(newsPage, /Updated \{NEWS_COPY_MODIFIED\}/);
  assert.match(newsPage, /const NEWS_COPY_MODIFIED = "2026-11-13"/);
  assert.match(newsPage, /dateModified: NEWS_COPY_MODIFIED/);
  assert.doesNotMatch(newsPage, /dateModified: LAST_VERIFIED/);
  assert.match(patchNotes, /dateModified: LAST_VERIFIED/);
  assert.equal(sitemapLastModifiedDay("/news", "2026-10-28"), "2026-11-13");
  assert.equal(sitemapLastModifiedDay("/guides/patch-notes", "2026-10-28"), "2026-11-06");
});

test("translated and unrelated sitemap lastmods stay on their previous stamps", () => {
  const unchanged = {
    "/": "2026-10-28",
    "/de": "2026-10-28",
    "/de/news": "2026-10-28",
    "/vn/news": "2026-10-28",
    "/de/guides/patch-notes": "2026-10-28",
    "/vn/guides/patch-notes": "2026-10-28",
    "/guides/qingzhou": "2026-10-28",
    "/guides/penglai": "2026-10-28",
    "/guides/cast-in-currents": "2026-10-28",
    "/guides/spirit-of-the-grove": "2026-10-28",
    "/guides/warehouse": "2026-10-28",
    "/videos": "2026-09-04",
    "/vn/videos": "2026-09-04",
  };

  for (const [path, expected] of Object.entries(unchanged)) {
    assert.equal(sitemapLastModifiedDay(path, expected), expected, path);
  }

  assert.equal(sitemapLastModifiedDay("/de/guides/bosses"), undefined);
  assert.equal(sitemapLastModifiedDay("/vn/guides/bosses"), undefined);
  assert.equal(sitemapLastModifiedDay("/de/guides/free-outfits"), undefined);
  assert.equal(sitemapLastModifiedDay("/vn/news", "2026-10-28"), "2026-10-28");
  assert.equal(sitemapLastModifiedDay("/de/news", "2026-10-28"), "2026-10-28");
  assert.equal(read("lib/news.de.ts").includes('export const latestNewsDate = "2026-10-28"'), true);
  assert.equal(read("lib/news.vi.ts").includes('export const latestNewsDate = "2026-10-28"'), true);
  assert.match(read("app/(de)/de/news/page.tsx"), /dateModified: latestNewsDate/);
  assert.match(read("app/(vn)/vn/news/page.tsx"), /dateModified: latestNewsDate/);
});

test("only the English pages edited in this batch move to 2026-11-06", () => {
  const revised = [
    "/guides",
    "/guides/patch-notes",
    "/guides/bosses",
    "/guides/martial-arts-weapons",
    "/guides/free-outfits",
    "/guides/jiangnan-hangzhou",
    "/guides/mount-tai-blizzard",
  ];

  for (const path of revised) {
    assert.equal(sitemapLastModifiedDay(path, "2026-10-28"), "2026-11-06", path);
  }

  assert.equal(sitemapLastModifiedDay("/guides/hutuo", "2026-11-06"), "2026-11-13");
  assert.equal(sitemapLastModifiedDay("/guides/anniversary", "2026-11-06"), "2026-11-13");
  assert.equal(sitemapLastModifiedDay("/news", "2026-11-06"), "2026-11-13");

  assert.equal(sitemapLastModifiedDay("/de/guides/jiangnan-hangzhou"), undefined);
  assert.equal(sitemapLastModifiedDay("/vn/guides/jiangnan-hangzhou"), undefined);
  assert.match(
    read("components/guides/JiangnanHangzhouGuidePage.tsx"),
    /dateModified: locale === "en" \? LAST_VERIFIED : \(freshness\?\.lastChecked \?\? "2026-08-23"\)/,
  );
});
