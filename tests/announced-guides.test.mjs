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
    assert.match(source, /2026-11-13 \(Asia\/Shanghai\)/);
    assert.match(source, /PAGE_PUBLISHED/);
    assert.doesNotMatch(source, /x-hutuo-launch-window/);
    assert.match(source, /datePublished: PAGE_PUBLISHED/);
    assert.match(source, /dateModified: PAGE_MODIFIED/);
    assert.doesNotMatch(source, /x-topup-2026-11-09/);
    assert.doesNotMatch(source, /\/(?:de|vn)\/guides\/(?:hutuo|anniversary)/);
  }

  assert.match(hutuo, /When does Hutuo open in Where Winds Meet\?/);
  assert.match(hutuo, /After the Nov 13 18:00–23:00 \(UTC\+8\) Update/);
  assert.doesNotMatch(hutuo, /opens at 18:00|opens at 23:00/);
  assert.match(anniversary, /What are the Where Winds Meet 1st anniversary rewards\?/);
  assert.match(anniversary, /Windtail Express 12-Outfit Pick, Events, and Shop Prices/);
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
  assert.match(anniversary, /does not merge the two names into one set/);
  assert.match(anniversary, /into one set/);
  assert.match(anniversary, /Frostbound Edge/);
  assert.match(anniversary, /17:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /Dec 10, 04:59:59 \(UTC\+8\)/);
  assert.doesNotMatch(anniversary, /\$150|150/);
  assert.match(anniversary, /Flowing Clarity/);
  assert.match(anniversary, /Dec 7, 4:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /Plumed Opulence/);
  assert.match(anniversary, /Dec 18, 4:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /Bound Majesty/);
  assert.match(anniversary, /Feb 12, 2027, 4:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /Iris Herald/);
  assert.match(anniversary, /Mar 22, 2027/);
  assert.match(anniversary, /Spectral Scroll/);
  assert.match(anniversary, /Nov 28 at 4:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /Willow Breeze/);
  assert.match(anniversary, /Jan 29, 2027, 04:59:59 \(UTC\+8\)/);
  assert.match(anniversary, /January 28, 2027, 04:59:59/);
  assert.match(anniversary, /does not add one after 23:00/);
  assert.match(anniversary, /Nov 9, 2027/);
  assert.match(anniversary, /no item-by-item list/);
  assert.equal((anniversary.match(/Radiance Boat/g) ?? []).length, 1);
  assert.equal((anniversary.match(/Goose Gifts Galore/g) ?? []).length, 1);
  assert.match(anniversary, /Goose Gifts Galore or other events not named on this page/);

  const versionRow = anniversary.slice(
    anniversary.indexOf("Anniversary version name"),
    anniversary.indexOf("Launch window"),
  );
  assert.match(versionRow, /\[7,\s*1,\s*2\]/);
  assert.doesNotMatch(versionRow, /\[8\]/);
});

test("existing English pages carry the correction pack and not the old lead", () => {
  const pinned = read("components/news/PinnedAnnouncements.tsx");
  assert.match(news, /PinnedAnnouncements/);
  assert.match(pinned, /id="announced-hutuo"/);
  assert.match(pinned, /Next announced major beat: Hutuo/);
  assert.match(pinned, /Version 2\.4/);
  assert.match(pinned, /18:00–23:00 \(UTC\+8\)/);
  assert.match(pinned, /November 26 \(UTC\)/);
  assert.match(pinned, /page date 2026-11-11/);
  assert.match(pinned, /does not restate a time zone immediately after 23:00/);
  assert.match(pinned, /1849192144183182/);
  assert.match(pinned, /1849192144183200/);
  assert.doesNotMatch(pinned, /remains gid[\s\S]{0,40}1847920302233930/);
  assert.match(pinned, /PINNED_LAST_VERIFIED_LABEL = "2026-11-13 \(Asia\/Shanghai\)"/);
  assert.match(pinned, /Last verified \{PINNED_LAST_VERIFIED_LABEL\}/);
  assert.match(pinned, /scheduled, not live/);
  assert.doesNotMatch(pinned, /late-November martial art|Dual Spears: late November|does not number the update/);
  assert.doesNotMatch(news, /No Version 2\.4 date has been announced yet/);
  assert.doesNotMatch(news, /Version 2\.4 is live|Hutuo is already live/);
  assert.match(news, /Version 2\.3 is live/);
  assert.match(news, /November 26 \(UTC\), not on November 13/);
  assert.match(news, /gid 1849192144183182/);
  assert.match(news, /gid 1849192144183200/);
  assert.doesNotMatch(news, /Steam has not published a Version 2\.4/);

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

test("launch-window citations are appended and 18:00 is not the go-live time", () => {
  const pinned = read("components/news/PinnedAnnouncements.tsx");

  function urlsInOrder(source, urls) {
    let cursor = -1;
    for (const url of urls) {
      const at = source.indexOf(url);
      assert.ok(at > cursor, url);
      cursor = at;
    }
  }

  urlsInOrder(hutuo, [
    "https://x.com/WhereWindsMeet_/status/2117934891497029783",
    "https://x.com/WhereWindsMeet_/status/2117386268698943563",
    "https://blog.playstation.com/2026/10/27/where-winds-meets-climactic-hutuo-battlefield-narrative-arc-revealed-out-nov-13/",
    "https://x.com/WhereWindsMeet_/status/2115103980996919763",
    "https://x.com/WhereWindsMeet_/status/2115104986929709317",
    "https://www.wherewindsmeetgame.com/news/official/1028devletter.html",
    "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
    "https://x.com/WhereWindsMeet_/status/2119802839061151868",
    "https://x.com/WhereWindsMeet_/status/2119731727761572141",
    "https://x.com/WhereWindsMeet_/status/2118548827586372057",
    "https://x.com/WhereWindsMeet_/status/2120532003351048535",
    "https://x.com/WhereWindsMeet_/status/2120637700524904525",
  ]);
  urlsInOrder(anniversary, [
    "https://x.com/WhereWindsMeet_/status/2117386268698943563",
    "https://x.com/WhereWindsMeet_/status/2117934891497029783",
    "https://blog.playstation.com/2026/10/27/where-winds-meets-climactic-hutuo-battlefield-narrative-arc-revealed-out-nov-13/",
    "https://x.com/WhereWindsMeet_/status/2118357684911042887",
    "https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html",
    "https://x.com/WhereWindsMeet_/status/2119761940117332319",
    "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
    "https://x.com/WhereWindsMeet_/status/2118548827586372057",
    "https://www.wherewindsmeetgame.com/news/official/1113appearance.html",
    "https://x.com/WhereWindsMeet_/status/2120501807055040709",
    "https://x.com/WhereWindsMeet_/status/2120532003351048535",
    "https://x.com/WhereWindsMeet_/status/2120637700524904525",
  ]);
  const pinnedSources = pinned.slice(pinned.indexOf("const SOURCE_URLS"), pinned.indexOf("const MOUNT_SYNC_URL"));
  urlsInOrder(pinnedSources, [
    "HUTUO_POST.url",
    "ANNIVERSARY_POST.url",
    "PLAYSTATION_HUTUO_POST.url",
    "BATTLE_PASS_POST.url",
    "PATCH_NOTES_1029.url",
    "APPEARANCES_1029.url",
    "DLSS_POST.url",
    "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
    "https://x.com/WhereWindsMeet_/status/2120532003351048535",
    "https://x.com/WhereWindsMeet_/status/2120637700524904525",
    "https://x.com/WhereWindsMeet_/status/2118548827586372057",
    "https://www.wherewindsmeetgame.com/news/official/1113appearance.html",
  ]);

  assert.match(hutuo, /goes live following/);
  assert.match(hutuo, /23:00 \/ 22:59:59 is the <strong>end<\/strong> of[\s\S]{0,80}not its start/);
  assert.match(hutuo, /US Central Time/);
  assert.match(hutuo, /November 14/);
  assert.match(hutuo, /Steam has now published Version 2\.4/);
  assert.match(hutuo, /1849192144183182/);
  assert.match(hutuo, /1849192144183200/);
  assert.doesNotMatch(hutuo, /does <strong>not<\/strong> write[\s\S]{0,80}that Steam has published Version 2\.4/);
  assert.match(hutuo, /Is Hutuo live today \(2026-11-13\)/);
  assert.match(hutuo, /Not as of this page’s check on 2026-11-13, before the update window/);
  assert.match(hutuo, /<h1[^>]*>\s*When does Hutuo open in Where Winds Meet\?/);
  assert.equal((hutuo.match(/<h1 /g) ?? []).length, 1);
});
