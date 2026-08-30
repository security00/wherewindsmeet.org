import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { latestNewsDate, newsItems } from "../lib/news.ts";

const require = createRequire(import.meta.url);
const { deriveGameVersionFromTitle, updateEntry } = require("../scripts/update-content-freshness.cjs");

test("the public news feed starts with the latest verified official notices", () => {
  assert.deepEqual(
    newsItems.slice(0, 2).map(({ id, date, officialUrl }) => ({ id, date, officialUrl })),
    [
      {
        id: "august-27-version-2-1-update-overview",
        date: "2026-08-26",
        officialUrl: "https://www.wherewindsmeetgame.com/news/official/827update.html",
      },
      {
        id: "account-suspension-july27-august24-2026",
        date: "2026-08-25",
        officialUrl: "https://www.wherewindsmeetgame.com/news/official/Banreport824.html",
      },
    ],
  );
  assert.equal(latestNewsDate, "2026-08-26");
});

test("aggregate official update rows use the latest date shown by their source page", () => {
  const latestForSource = (officialUrl) =>
    newsItems
      .filter((item) => item.officialUrl === officialUrl)
      .toSorted((a, b) => b.date.localeCompare(a.date))[0];

  const unseenApproach = latestForSource("https://www.wherewindsmeetgame.com/news/official/UnseenApproach.html");
  assert.match(unseenApproach?.title ?? "", /August 14/);
  assert.equal(unseenApproach?.date, "2026-08-14");

  const versionTwoPatch = latestForSource("https://www.wherewindsmeetgame.com/news/official/723update.html");
  assert.match(versionTwoPatch?.title ?? "", /August 14/);
  assert.equal(versionTwoPatch?.date, "2026-08-14");

  const versionOneEightPatch = latestForSource("https://www.wherewindsmeetgame.com/news/official/625update.html");
  assert.match(versionOneEightPatch?.title ?? "", /July 17/);
  assert.equal(versionOneEightPatch?.date, "2026-07-17");
});

test("the freshness updater derives the current major version from the latest news title", () => {
  assert.equal(
    deriveGameVersionFromTitle("[Clouded Revelation] Version 2.1 Update Overview - August 27"),
    "Version 2.1 / August 27",
  );
});

test("the freshness updater can advance a page that is still labelled Version 1.7", () => {
  const updated = updateEntry(
    { basePath: "/example", lastChecked: "2026-06-01", gameVersion: "Version 1.7", sourceUrls: [] },
    { lastChecked: "2026-08-26", gameVersion: "Version 2.1 / August 27" },
    null,
    null,
    [],
  );

  assert.equal(updated.lastChecked, "2026-08-26");
  assert.equal(updated.gameVersion, "Version 2.1 / August 27");
});

test("core update surfaces record the latest official Version 2.1 review", () => {
  const registry = JSON.parse(
    readFileSync(new URL("../lib/contentFreshness.json", import.meta.url), "utf8"),
  );
  const byPath = new Map(registry.map((entry) => [entry.basePath, entry]));
  const officialUpdateUrl = "https://www.wherewindsmeetgame.com/news/official/827update.html";

  for (const path of ["/", "/news", "/guides/patch-notes", "/guides/codes", "/guides/bosses"]) {
    const entry = byPath.get(path);
    assert.ok(entry, `missing freshness entry for ${path}`);
    assert.equal(entry.lastChecked, "2026-08-26", `${path} review date`);
    assert.match(entry.gameVersion, /Version 2\.1/, `${path} game version`);
    if (path !== "/guides/codes") {
      assert.ok(entry.sourceUrls.includes(officialUpdateUrl), `${path} should cite the current official update`);
    }
  }
});

test("the freshness CLI accepts the positive locale manifest as its language contract", () => {
  const result = spawnSync(process.execPath, ["scripts/seo-freshness-check.cjs"], {
    cwd: new URL("..", import.meta.url),
    encoding: "utf8",
  });

  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
});

test("current-state page copy does not present superseded releases or elapsed gates as current", () => {
  const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const homepage = read("app/(en)/page.tsx");
  const homeSections = read("components/HomeMainKeywordSections.tsx");
  const videos = read("app/(en)/videos/page.tsx");
  const bosses = read("app/(en)/guides/bosses/page.tsx");
  const newPlayers = read("app/(en)/guides/new-players/page.tsx");
  const mistveil = read("app/(en)/guides/mistveil-city/page.tsx");
  const news = read("app/(en)/news/page.tsx");
  const patchNotes = read("app/(en)/guides/patch-notes/page.tsx");

  assert.doesNotMatch(homepage, /Version 2\.0 <span[^>]*>Guides Hub|Where Winds Meet Version 2\.0 news|Freshness pass: Version 2\.0/);
  assert.doesNotMatch(homeSections, /Version 1\.7/);
  assert.doesNotMatch(videos, /Version 1\.7/);
  assert.doesNotMatch(bosses, /Version 1\.7/);
  assert.doesNotMatch(newPlayers, /Updated for Launch/);
  assert.doesNotMatch(mistveil, /currently time-gated|what you can do now|the moment it opens|As of January 15, 2026|come back when the\s+in-game date gate disappears/i);
  assert.doesNotMatch(news, /August 21 developer letter is the newest|current checked update baseline is <strong>Version 2\.1 \/ August 20|Version 2\.1 \/ August 20 Clouded Revelation patch notes are the current baseline/);
  assert.doesNotMatch(patchNotes, /date: "2026-08-0[27]"|date: "2026-07-09"|current roadmap anchor for Hidden Mountain|current August 7 official patch page/);

  assert.match(homepage, /Version 2\.1/);
  assert.match(news, /827update\.html/);
  assert.match(patchNotes, /827update\.html/);
  assert.match(mistveil, /historical/i);
});

test("German and Vietnamese current-state hubs use the shared Version 2.1 baseline", () => {
  const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const localizedSurfaces = [
    {
      path: "app/(de)/de/page.tsx",
      staleCurrentCopy: /Guide-Hub Deutsch - Version 1\.7|Version 1\.7 <span|Dieser Hub wurde für Version 1\.7|Version 1\.7 \/ Palace/,
    },
    {
      path: "app/(vn)/vn/page.tsx",
      staleCurrentCopy: /Guide Hub Tiếng Việt - Version 1\.7|Version 1\.7 <span|được làm mới cho Version 1\.7|Version 1\.7 \/ Palace/,
    },
    {
      path: "app/(de)/de/news/page.tsx",
      staleCurrentCopy: /Aktualisiert auf Version 1\.8|Version 1\.8 \/ Companions Make Home \(laufend aktualisiert\)|Latest pass: Version 1\.8/,
    },
    {
      path: "app/(vn)/vn/news/page.tsx",
      staleCurrentCopy: /Theo dõi Version 1\.8|Đợt rà soát mới nhất theo Version 1\.8/,
    },
    {
      path: "app/(de)/de/guides/patch-notes/page.tsx",
      staleCurrentCopy: /Patch Notes Heute - Version 1\.8|Patch Notes heute: Version 1\.8|steht jetzt im Kontext von \{freshness\?\.gameVersion \?\? "Version 1\.8/,
    },
    {
      path: "app/(vn)/vn/guides/patch-notes/page.tsx",
      staleCurrentCopy: /Patch Notes Hom Nay - Version 1\.8|patch notes hom nay: Version 1\.8|hien dang o boi canh \{freshness\?\.gameVersion \?\? "Version 1\.8/,
    },
    {
      path: "app/(de)/de/guides/bosses/page.tsx",
      staleCurrentCopy: /Version 1\.7 Boss-Hub|Version 1\.7 Boss- und Dungeon-Hub|Version 1\.7 Watchlist/,
    },
    {
      path: "app/(vn)/vn/guides/bosses/page.tsx",
      staleCurrentCopy: /Version 1\.7 tieng Viet|Version 1\.7 boss va dungeon hub|Version 1\.7 watchlist/,
    },
  ];

  for (const { path, staleCurrentCopy } of localizedSurfaces) {
    const source = read(path);
    assert.doesNotMatch(source, staleCurrentCopy, `${path} should not label Version 1.7/1.8 as current`);
    assert.match(source, /Version 2\.1/, `${path} should expose the reviewed Version 2.1 baseline`);
  }
});

test("guide and build hubs do not reintroduce Version 1.7 or unsupported current rankings", () => {
  const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const guideHubs = [
    read("app/(en)/guides/page.tsx"),
    read("app/(de)/de/guides/page.tsx"),
    read("app/(vn)/vn/guides/page.tsx"),
  ];
  const localizedBuilds = [
    read("app/(de)/de/guides/builds/page.tsx"),
    read("app/(vn)/vn/guides/builds/page.tsx"),
  ];

  for (const hub of guideHubs) {
    assert.doesNotMatch(hub, /Version 1\.7/);
    assert.doesNotMatch(hub, /current meta rankings|aktuellen Meta-Rankings|meta mới nhất/i);
    assert.doesNotMatch(hub, /Jan 22 vs Jan 26|22\. vs 26\. Jan 2026/i);
    assert.match(hub, /Version 2\.1/);
  }
  for (const builds of localizedBuilds) {
    assert.doesNotMatch(builds, /Version 1\.7 build decision/);
    assert.match(builds, /weaponTierMeta\.gameVersion/);
  }
});

test("German and Vietnamese video galleries present older videos as a dated archive", () => {
  const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const galleries = [
    {
      page: read("app/(de)/de/videos/page.tsx"),
      catalog: read("lib/featuredVideos.de.ts"),
      datedLanguage: /datiert|Veroeffentlichungsdatum|historisch/i,
      staleLanguage: /Frische Where Winds Meet Videos fuer Version 1\.7|fuer Version 1\.7 aktualisiert|aktuelles oder update-relevantes Video|Einstieg in Version 1\.7/,
    },
    {
      page: read("app/(vn)/vn/videos/page.tsx"),
      catalog: read("lib/featuredVideos.vi.ts"),
      datedLanguage: /co ngay|ngay dang|lich su/i,
      staleLanguage: /Video Where Winds Meet moi: Version 1\.7|lam moi cho Version 1\.7|con lien quan den update hien tai|bat dau trong Version 1\.7/,
    },
  ];

  for (const { page, catalog, datedLanguage, staleLanguage } of galleries) {
    const surface = `${page}\n${catalog}`;
    assert.doesNotMatch(surface, staleLanguage);
    assert.match(page, datedLanguage);
    assert.match(catalog, /publishedAt: "2026-06-10"/);
  }
});

test("boss detail pages identify the shared background as generic artwork, not fight evidence", () => {
  const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const captions = [
    {
      source: read("app/(en)/guides/bosses/boss-detail.tsx"),
      expected: /generic site artwork, not boss-fight evidence/i,
    },
    {
      source: read("app/(de)/de/guides/bosses/boss-detail.tsx"),
      expected: /generisches Website-Artwork und kein Beleg fuer den Bosskampf/i,
    },
    {
      source: read("app/(vn)/vn/guides/bosses/boss-detail.tsx"),
      expected: /anh minh hoa chung cua trang web, khong phai bang chung ve tran boss/i,
    },
  ];

  for (const { source, expected } of captions) {
    assert.match(source, /src="\/background\/bg4\.webp"/);
    assert.doesNotMatch(source, /thumbnail above uses boss showcase footage|Vorschaubild basiert auf Boss-Showcase-Clips|dựa trên showcase boss/i);
    assert.match(source, expected);
  }
});
