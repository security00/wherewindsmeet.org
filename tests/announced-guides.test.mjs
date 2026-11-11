import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

const hutuo = read("app/(en)/guides/hutuo/page.tsx");
const anniversary = read("app/(en)/guides/anniversary/page.tsx");
const news = read("app/(en)/news/page.tsx");
const patchNotes = read("app/(en)/guides/patch-notes/page.tsx");
const bosses = read("app/(en)/guides/bosses/page.tsx");
const martial = read("app/(en)/guides/martial-arts-weapons/page.tsx");
const outfits = read("app/(en)/guides/free-outfits/page.tsx");
const jiangnan = read("components/guides/JiangnanHangzhouGuidePage.tsx");
const sitemap = read("app/sitemap.ts");
const routing = read("i18n/routing.mjs");

test("Hutuo and anniversary ship English metadata without placeholder copy", () => {
  for (const path of ["/guides/hutuo", "/guides/anniversary"]) {
    assert.match(sitemap, new RegExp(`path:\\s*"${path}"`));
    assert.doesNotMatch(routing, new RegExp(`"${path}"`));
  }

  for (const source of [hutuo, anniversary]) {
    assert.match(source, /buildHreflangAlternates\(guidePath\)/);
    assert.match(source, /openGraph:/);
    assert.match(source, /twitter:/);
    assert.match(source, /datePublished: PAGE_PUBLISHED/);
    assert.match(source, /dateModified: PAGE_MODIFIED/);
    assert.match(source, /aria-label="Breadcrumb"/);
    assert.match(source, /Sources/);
    assert.equal((source.match(/<h1 /g) ?? []).length, 1);
    assert.doesNotMatch(source, /EditorialPlaceholder|data-editorial-placeholder|\[WRITER\]/);
    assert.match(source, /Version 2\.4/);
    assert.match(source, /2026-11-10 \(Asia\/Shanghai\)/);
    assert.match(source, /datePublished: PAGE_PUBLISHED/);
    assert.match(source, /dateModified: PAGE_MODIFIED/);
    assert.doesNotMatch(source, /x-topup-2026-11-09/);
    assert.doesNotMatch(source, /\/(?:de|vn)\/guides\/(?:hutuo|anniversary)/);
  }

  assert.match(hutuo, /When does Hutuo open in Where Winds Meet\?/);
  assert.match(anniversary, /What are the Where Winds Meet 1st anniversary rewards\?/);
  assert.doesNotMatch(anniversary, /\$150|150/);
});

test("Dual Spears use November 26 (UTC) and anniversary rewards stay split from paid top-up", () => {
  assert.match(hutuo, /late November/);
  assert.match(hutuo, /November 26 \(UTC\)/);
  assert.match(hutuo, /a November 13 same-day unlock/);
  assert.match(hutuo, /arrive soon!/);
  assert.match(hutuo, /raid supplies/);
  assert.match(hutuo, /a raid dungeon/);
  assert.match(hutuo, /Yuen Woo-ping/);
  assert.match(hutuo, /2117934891497029783/);
  assert.match(hutuo, /1109devletter\.html/);
  assert.match(hutuo, /Zhongdu Bridge/);
  assert.doesNotMatch(hutuo, /entrance requirement is Lv|Hutuo boss named/);
  assert.doesNotMatch(hutuo, /does not give a version number/);

  assert.match(anniversary, /pick 1 of 12 outfits/i);
  assert.match(anniversary, /Lingering Melody ×42/);
  assert.match(anniversary, /Resonating Melody ×27/);
  assert.match(anniversary, /does not mean you automatically receive every Melody/);
  assert.match(anniversary, /2117386268698943563/);
  assert.match(anniversary, /2119761940117332319/);
  assert.match(anniversary, /Paid top-up events \(not free login rewards\)/);
  assert.match(anniversary, /Nov 13 at 23:00 \(UTC\+8\)/);
  assert.match(anniversary, /Dec 18 at 04:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /November 26 \(UTC\)/);
  assert.match(anniversary, /merge[\s\S]{0,80}body-text name/);
  assert.match(anniversary, /into one set/);
  assert.match(anniversary, /Frostbound Edge/);
  assert.match(anniversary, /17:59:59 \(UTC\+8\)/);
  assert.doesNotMatch(anniversary, /\$150|150/);
  assert.doesNotMatch(anniversary, /Flowing Clarity|Spectral Scroll/);

  const versionRow = anniversary.slice(
    anniversary.indexOf("Anniversary version name"),
    anniversary.indexOf("Launch date"),
  );
  assert.match(versionRow, /\[7,\s*1,\s*2\]/);
  assert.doesNotMatch(versionRow, /\[8\]/);
});

test("existing English pages carry the correction pack and not the old lead", () => {
  const pinned = read("components/news/PinnedAnnouncements.tsx");
  assert.match(news, /PinnedAnnouncements/);
  assert.match(pinned, /id="announced-hutuo"/);
  assert.match(pinned, /Next announced major beat: Hutuo/);
  assert.match(pinned, /late November/);
  assert.doesNotMatch(news, /No Version 2\.4 date has been announced yet/);
  assert.doesNotMatch(pinned, /2\.4/);

  assert.match(patchNotes, /id="announced-november"/);
  assert.match(patchNotes, /Autumn Eve Whimsy/);
  assert.match(patchNotes, /Pristine Grace/);
  assert.match(patchNotes, /Inkwash Splendor/);
  assert.match(patchNotes, /2026-10-30/);
  assert.match(patchNotes, /16:38:17/);
  assert.match(patchNotes, /1029update\.html/);
  assert.match(patchNotes, /does not transcribe a bullet summary/);
  assert.match(patchNotes, /\[superseded\]/);
  assert.match(patchNotes, /late November/);
  assert.doesNotMatch(patchNotes, /2\.4/);

  assert.match(bosses, /Updated 2026-11-06/);
  assert.match(bosses, /Version 2\.3 Friends From Afar/);
  assert.match(bosses, /Version 2\.1\.3 \/ September 2026/);
  assert.match(bosses, /id="hutuo-announced"/);
  assert.match(bosses, /No Hutuo boss names are added here/);

  assert.match(martial, /id="dual-spears-announced"/);
  assert.match(martial, /late November 2026/);
  assert.match(martial, /Yuen Woo-ping/);
  assert.doesNotMatch(martial, /\/guides\/dual-spears/);

  assert.match(outfits, /id="anniversary-login-outfit"/);
  assert.match(outfits, /href="\/guides\/anniversary"/);
  assert.match(outfits, /Swallow/);
  assert.match(outfits, /2114750643663716620/);
  assert.doesNotMatch(outfits, /\$150/);

  const englishJiangnan = jiangnan.slice(0, jiangnan.indexOf("vi: {"));
  assert.doesNotMatch(englishJiangnan, /Version 2\.1 \/ Hidden Mountain/);
  assert.match(englishJiangnan, /2026-11-06/);
  assert.match(englishJiangnan, /June 26, 2026/);
});
