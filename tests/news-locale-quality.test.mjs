import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  latestNewsDate as officialLatestNewsDate,
  newsItems as officialNewsItems,
} from "../lib/news.ts";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const loadLocalizedNews = async (path) => {
  const source = read(path)
    .replace(
      /^import \{ latestNewsDate, newsItems as officialNewsItems \} from "\.\/news";$/m,
      `const officialNewsItems = ${JSON.stringify(officialNewsItems)}; const latestNewsDate = ${JSON.stringify(officialLatestNewsDate)};`,
    )
    .replace("iso: string", "iso");
  return import(`data:text/javascript,${encodeURIComponent(source)}`);
};

test("localized news feeds preserve official records without presenting English summaries as translations", async () => {
  const { newsItems: germanNewsItems } = await loadLocalizedNews("lib/news.de.ts");
  const { newsItems: vietnameseNewsItems } = await loadLocalizedNews("lib/news.vi.ts");

  for (const [locale, localizedItems, disclosure] of [
    ["de", germanNewsItems, /Offizielle englischsprachige Meldung/],
    ["vi", vietnameseNewsItems, /Thông báo chính thức bằng tiếng Anh/],
  ]) {
    assert.equal(localizedItems.length, officialNewsItems.length, `${locale} item count`);

    localizedItems.forEach((localized, index) => {
      const official = officialNewsItems[index];
      assert.ok(official, `${locale} item ${index} should have an official owner`);
      assert.deepEqual(
        {
          id: localized.id,
          title: localized.title,
          date: localized.date,
          type: localized.type,
          officialUrl: localized.officialUrl,
        },
        {
          id: official.id,
          title: official.title,
          date: official.date,
          type: official.type,
          officialUrl: official.officialUrl,
        },
        `${locale} should preserve the official news record`,
      );
      assert.notEqual(localized.summary, official.summary, `${locale} must not reuse the English summary`);
      assert.match(localized.summary, disclosure, `${locale} should disclose the source language`);
    });
  }
});

test("localized news pages label official English titles and share the current Version 2.1 boundary", () => {
  const germanPage = read("app/(de)/de/news/page.tsx");
  const vietnamesePage = read("app/(vn)/vn/news/page.tsx");

  assert.match(germanPage, /Offizieller englischer Titel/);
  assert.match(vietnamesePage, /Tiêu đề tiếng Anh chính thức/);

  for (const [locale, source, dateBoundary] of [
    ["de", germanPage, /27\. August/],
    ["vi", vietnamesePage, /27\/08/],
  ]) {
    assert.match(source, /Version 2\.1/, `${locale} current version`);
    assert.match(source, dateBoundary, `${locale} August 27 boundary`);
  }
});

test("the German news page contains neither mojibake nor ASCII stand-ins for German text", () => {
  const germanPage = read("app/(de)/de/news/page.tsx");

  assert.doesNotMatch(germanPage, /鈥|盲|眉|脺|脛|姹熸|鈫| 路 /);
  assert.doesNotMatch(
    germanPage,
    /\b(?:geprueft|Geprueft|Uebersicht|Aenderung(?:en)?|Rueckblick|pruefen|fuehren|fuehrt|fuer|bestaetigt)\b/,
  );
  assert.match(germanPage, /江湖风云/);
});
