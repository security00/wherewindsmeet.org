import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const untranslatedGuides = {
  de: [
    "bosses/feng-ruzhi",
    "imperial-decree",
    "pvp-tier-list",
    "qinchuan",
    "sunken-city-lake",
    "tier-list",
    "to-friends-to-the-end",
    "travel-permit",
    "unholy-prophecy",
    "verdant-flute",
  ],
  vn: [
    "bosses/feng-ruzhi",
    "imperial-decree",
    "one-leaf-one-life",
    "pvp-tier-list",
    "qinchuan",
    "sunken-city-lake",
    "tier-list",
    "to-friends-to-the-end",
    "travel-permit",
    "unholy-prophecy",
    "verdant-flute",
  ],
};

test("untranslated locale URLs redirect to the English owner instead of publishing duplicate pages", () => {
  const redirects = readFileSync(resolve(root, "public/_redirects"), "utf8");

  for (const [prefix, slugs] of Object.entries(untranslatedGuides)) {
    for (const slug of slugs) {
      const routeFile = resolve(root, `app/(${prefix})/${prefix}/guides/${slug}/page.tsx`);
      assert.equal(
        existsSync(routeFile),
        false,
        `${prefix}/${slug} must not publish English content as a localized page`,
      );
      assert.match(
        redirects,
        new RegExp(`^/${prefix}/guides/${slug}\\s+/guides/${slug}\\s+301$`, "m"),
        `${prefix}/${slug} needs an SEO-preserving redirect to the English owner`,
      );
    }
  }
});

test("runtime and static-host fallback redirects share the same route contract", async () => {
  const redirectsFile = readFileSync(resolve(root, "public/_redirects"), "utf8");
  const { localeFallbackRedirects } = await import("../i18n/locale-fallbacks.mjs");

  for (const redirect of localeFallbackRedirects) {
    assert.equal(redirect.permanent, true);
    assert.match(
      redirectsFile,
      new RegExp(`^${redirect.source}\\s+${redirect.destination}\\s+301$`, "m"),
    );
  }
});

test("locale message packs expose the same UI contract", () => {
  const messagePaths = ["en", "de", "vi"].map((locale) =>
    resolve(root, `i18n/messages/${locale}.json`),
  );

  for (const path of messagePaths) {
    assert.equal(existsSync(path), true, `missing locale message pack: ${path}`);
  }

  const messages = messagePaths.map((path) => JSON.parse(readFileSync(path, "utf8")));
  const flattenKeys = (value, prefix = "") =>
    Object.entries(value).flatMap(([key, child]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      return child && typeof child === "object" && !Array.isArray(child)
        ? flattenKeys(child, path)
        : [path];
    });

  const expectedKeys = flattenKeys(messages[0]).sort();
  for (const messagePack of messages.slice(1)) {
    assert.deepEqual(flattenKeys(messagePack).sort(), expectedKeys);
  }
});

test("route locale availability prevents links and hreflang to missing translations", async () => {
  const routing = await import("../i18n/routing.mjs");

  assert.deepEqual(routing.getAvailableLocales("/guides/imperial-decree"), ["en"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/codes"), ["en", "vi", "de"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/bosses"), ["en", "vi", "de"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/bosses/feng-ruzhi"), ["en"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/brand-new-english-page"), ["en"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/one-leaf-one-life"), ["en", "de"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/unholy-prophecy"), ["en"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/tier-list"), ["en"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/pvp-tier-list"), ["en"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/weapons/tier-list"), ["en", "vi", "de"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/pve-tier-list"), ["en", "vi", "de"]);
  assert.deepEqual(routing.getAvailableLocales("/guides/reflection-temple"), ["en", "vi", "de"]);
  assert.equal(routing.buildLocalizedPath("/guides/imperial-decree", "de"), null);
  assert.equal(routing.buildLocalizedPath("/guides/bosses", "vi"), "/vn/guides/bosses");
  assert.equal(routing.buildLocalizedPath("/news#next-update", "vi"), "/vn/news#next-update");
  assert.equal(routing.buildLocalizedPath("/guides/tier-list#arena-ranks", "vi"), null);
  assert.equal(
    routing.buildLocalizedPath("/guides/codes?source=menu#redeem", "de"),
    "/de/guides/codes?source=menu#redeem",
  );
  assert.equal(
    routing.buildLocalizedPath("/guides/codes?source=menu#redeem", "vi"),
    "/vn/guides/codes?source=menu#redeem",
  );
  assert.equal(
    routing.buildLocalizedPath("/guides/weapons/tier-list", "de"),
    "/de/guides/weapons/tier-list",
  );
  assert.equal(
    routing.buildLocalizedPath("/guides/pve-tier-list", "vi"),
    "/vn/guides/pve-tier-list",
  );
  assert.equal(
    routing.buildLocalizedPath("/guides/codes?source=menu#redeem", "en"),
    "/guides/codes?source=menu#redeem",
  );

  assert.deepEqual(
    routing.buildLocaleUrls("/guides/imperial-decree"),
    {
      "en-US": "https://wherewindsmeet.org/guides/imperial-decree",
      "x-default": "https://wherewindsmeet.org/guides/imperial-decree",
    },
  );
  assert.deepEqual(
    routing.buildLocaleUrls("/news?source=home#next-update"),
    {
      "en-US": "https://wherewindsmeet.org/news?source=home#next-update",
      "vi-VN": "https://wherewindsmeet.org/vn/news?source=home#next-update",
      "de-DE": "https://wherewindsmeet.org/de/news?source=home#next-update",
      "x-default": "https://wherewindsmeet.org/news?source=home#next-update",
    },
  );
  assert.deepEqual(
    routing.buildLocaleUrls("/guides/codes?source=menu#redeem"),
    {
      "en-US": "https://wherewindsmeet.org/guides/codes?source=menu#redeem",
      "vi-VN": "https://wherewindsmeet.org/vn/guides/codes?source=menu#redeem",
      "de-DE": "https://wherewindsmeet.org/de/guides/codes?source=menu#redeem",
      "x-default": "https://wherewindsmeet.org/guides/codes?source=menu#redeem",
    },
  );
});

test("removed localized guide owners cannot be regenerated through the German boss route", () => {
  const dynamicBossRoute = readFileSync(
    resolve(root, "app/(de)/de/guides/bosses/[id]/page.tsx"),
    "utf8",
  );

  assert.doesNotMatch(dynamicBossRoute, /["']feng-ruzhi["']/);
});

test("localized boss recommendation cards fall back to the English owner when needed", () => {
  for (const locale of ["de", "vn"]) {
    const source = readFileSync(
      resolve(root, `app/(${locale})/${locale}/guides/bosses/boss-detail.tsx`),
      "utf8",
    );

    assert.match(source, /buildLocalizedPath\(path, "(?:de|vi)"\) \?\? path/);
    assert.match(source, /href=\{localizedPath\(`\/guides\/bosses\/\$\{other\.id\}`\)\}/);
    assert.doesNotMatch(source, /href=\{`\$\{base\}\/guides\/bosses\/\$\{other\.id\}`\}/);
  }
});

test("shared navigation chrome reads labels from locale JSON instead of parallel hardcoded menus", () => {
  const header = readFileSync(resolve(root, "components/SiteHeader.tsx"), "utf8");
  const footer = readFileSync(resolve(root, "components/SiteFooter.tsx"), "utf8");
  const prompt = readFileSync(resolve(root, "components/LanguageSwitchPrompt.tsx"), "utf8");

  assert.match(header, /useTranslations\(["']siteHeader["']\)/);
  assert.match(header, /CdnImageClient/);
  assert.match(header, /getAvailableLocales/);
  assert.doesNotMatch(
    header,
    /buildLocalizedPath\(basePath,\s*code\)\s*\|\|\s*buildLocalizedPath\("\/"/,
  );
  assert.doesNotMatch(header, /languageTargets\.length\s*>\s*1/);
  assert.match(footer, /useTranslations\(["']siteFooter["']\)/);
  assert.match(prompt, /useTranslations\(["']languagePrompt["']\)/);
  assert.doesNotMatch(header, /const\s+(vnNavLinks|deNavLinks|UI_TEXT)\s*=/);
  assert.doesNotMatch(footer, /const\s+(vietnameseLinks|germanLinks)\s*=/);
  assert.doesNotMatch(prompt, /message:\s*["']Hiện đã có phiên bản tiếng Việt/);
  assert.doesNotMatch(prompt, /https:\/\/ipapi\.co/);
});

test("Jiangnan shared guide localizes visible chrome, schema language, and internal links", () => {
  const source = readFileSync(
    resolve(root, "components/guides/JiangnanHangzhouGuidePage.tsx"),
    "utf8",
  );
  const copyBlock = source.slice(source.indexOf("const copy ="), source.indexOf("export function"));
  const rendered = source.slice(source.indexOf("  return ("));

  assert.match(source, /satisfies Record<Locale, GuideCopy>/);
  for (const key of [
    "heroAlt",
    "harborAlt",
    "harborCaption",
    "cnLaunchLink",
    "regionPreviewLink",
    "showcaseMirrorLink",
    "communitySourceLink",
    "officialPostLink",
    "map17173Link",
    "officialMapLink",
    "compareMapsLink",
    "globalNewsLink",
    "relatedHiddenMountain",
    "relatedQinchuan",
    "relatedUpdates",
    "sourcesNote",
  ]) {
    assert.equal(
      (copyBlock.match(new RegExp(`\\b${key}:`, "g")) ?? []).length,
      3,
      `${key} needs reviewed copy for en, vi, and de`,
    );
  }

  assert.doesNotMatch(rendered, /alt="Official Where Winds Meet Jiangnan/);
  assert.doesNotMatch(rendered, />CN launch announcement|>Official region preview|>YouTube mirror source/);
  assert.doesNotMatch(rendered, />View the original official post|>Open official Global map|>Compare interactive maps/);
  assert.equal((source.match(/inLanguage: t\.inLanguage/g) ?? []).length, 3);
  assert.match(source, /author: siteIdentity/);
  assert.match(source, /publisher: siteIdentity/);
  assert.match(source, /dateModified: freshness\?\.lastChecked \?\? "2026-08-23"/);
  assert.match(source, /buildLocalizedPath\(path, locale\) \?\? path/);
  for (const path of [
    "/tools/interactive-map",
    "/guides/hidden-mountain",
    "/guides/qinchuan",
    "/news",
  ]) {
    assert.match(source, new RegExp(`href=\\{localizedPath\\("${path}"\\)\\}`));
  }
});

test("the shared locale provider supplies static-safe request defaults", () => {
  const layout = readFileSync(resolve(root, "components/LocaleRootLayout.tsx"), "utf8");

  assert.match(layout, /<NextIntlClientProvider/);
  assert.match(layout, /formats=\{\{\}\}/);
  assert.match(layout, /now=\{new Date\(/);
  assert.match(layout, /timeZone="UTC"/);
});

test("localized pages link directly to the English owner when no translation exists", () => {
  const routeOwners = [
    "app/(vn)/vn/page.tsx",
    "app/(vn)/vn/guides/who-is-destined-to-face-the-purple-star-catastrophe/page.tsx",
    "app/(vn)/vn/guides/find-officer-nan/page.tsx",
    "app/(vn)/vn/guides/mist-shrouded-prison/page.tsx",
    "app/(vn)/vn/guides/page.tsx",
  ].map((path) => readFileSync(resolve(root, path), "utf8"));
  const jiangnan = readFileSync(
    resolve(root, "components/guides/JiangnanHangzhouGuidePage.tsx"),
    "utf8",
  );
  const homeSections = readFileSync(
    resolve(root, "components/HomeMainKeywordSections.tsx"),
    "utf8",
  );
  const jianghuMap = readFileSync(resolve(root, "components/JianghuMap.tsx"), "utf8");

  for (const page of routeOwners) {
    assert.doesNotMatch(page, /\/vn\/guides\/(?:one-leaf-one-life|unholy-prophecy)/);
  }
  assert.match(routeOwners[0], /buildLocalizedPath\(path,\s*["']vi["']\)\s*\?\?\s*path/);
  assert.doesNotMatch(routeOwners[0], /`\/vn\$\{path\}`/);
  assert.doesNotMatch(jiangnan, /\$\{t\.prefix\}/);
  assert.match(jiangnan, /buildLocalizedPath\(path, locale\) \?\? path/);
  assert.match(jiangnan, /href=\{localizedPath\("\/guides\/qinchuan"\)\}/);
  assert.match(homeSections, /buildLocalizedPath\(href,\s*locale\)\s*\?\?\s*href/);
  assert.match(jianghuMap, /buildLocalizedPath\(slug,\s*language\)\s*\?\?\s*slug/);

  const collectSourceFiles = (directory) =>
    readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const path = resolve(directory, entry.name);
      return entry.isDirectory()
        ? collectSourceFiles(path)
        : entry.name.endsWith(".tsx")
          ? [path]
          : [];
    });
  const staleTierLink = /\/(?:de|vn)\/guides\/(?:tier-list|pvp-tier-list)(?!\/)/;
  const prefixedTierTemplate = /\$\{[^}]+\}\/guides\/(?:tier-list|pvp-tier-list)(?!\/)/;

  for (const localeRoot of ["app/(de)/de", "app/(vn)/vn"]) {
    for (const sourcePath of collectSourceFiles(resolve(root, localeRoot))) {
      assert.doesNotMatch(
        readFileSync(sourcePath, "utf8"),
        staleTierLink,
        `${sourcePath} must link directly to the English evidence owner`,
      );
      assert.doesNotMatch(
        readFileSync(sourcePath, "utf8"),
        prefixedTierTemplate,
        `${sourcePath} must not reconstruct a removed localized tier URL`,
      );
    }
  }
});

test("reviewed codes and weapon/pve tier-list routes publish same-path DE/VI owners", () => {
  for (const [localeRoot, prefix] of [
    ["app/(de)/de", "de"],
    ["app/(vn)/vn", "vn"],
  ]) {
    for (const slug of ["codes", "pve-tier-list", "weapons/tier-list"]) {
      const routeFile = resolve(root, `${localeRoot}/guides/${slug}/page.tsx`);
      assert.equal(existsSync(routeFile), true, `missing ${prefix}/guides/${slug}`);
      const source = readFileSync(routeFile, "utf8");
      assert.match(source, /canonicalLanguage:\s*["'](?:de|vi)["']/);
      assert.match(source, /language=["'](?:de|vi)["']/);
    }
  }

  const redirects = readFileSync(resolve(root, "public/_redirects"), "utf8");
  for (const slug of ["codes", "weapons/tier-list"]) {
    assert.doesNotMatch(
      redirects,
      new RegExp(`^/(?:de|vn)/guides/${slug.replace("/", "\\/")}\\s+/guides/${slug.replace("/", "\\/")}\\s+301$`, "m"),
      `${slug} must not permanently redirect locale URLs to English after review`,
    );
  }
});

test("localized pages link directly to the English owner for withdrawn guides", () => {
  const collectSourceFiles = (directory) =>
    readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const path = resolve(directory, entry.name);
      return entry.isDirectory()
        ? collectSourceFiles(path)
        : /\.(?:ts|tsx)$/.test(entry.name)
          ? [path]
          : [];
    });
  const staleLocalizedOwner =
    /\/(?:de|vn)\/guides\/(?:bosses\/feng-ruzhi|unholy-prophecy)\b/;

  for (const sourceRoot of ["app", "components"]) {
    for (const sourcePath of collectSourceFiles(resolve(root, sourceRoot))) {
      assert.doesNotMatch(
        readFileSync(sourcePath, "utf8"),
        staleLocalizedOwner,
        `${sourcePath} must link directly to the reviewed English owner`,
      );
    }
  }

  for (const [localeRoot, locale] of [
    ["app/(de)/de/guides/bosses/page.tsx", "de"],
    ["app/(vn)/vn/guides/bosses/page.tsx", "vi"],
  ]) {
    const source = readFileSync(resolve(root, localeRoot), "utf8");
    assert.match(source, /buildLocalizedPath\(bossPath,\s*["'](?:de|vi)["']\)\s*\?\?\s*bossPath/);
    assert.match(source, new RegExp(`buildLocalizedPath\\(bossPath,\\s*["']${locale}["']`));
    assert.doesNotMatch(source, /\/(?:de|vn)\/guides\/bosses\/\$\{boss\.id\}/);
  }
});

test("the codes and P0 tier freshness records claim reviewed EN/VI/DE owners", () => {
  const registry = JSON.parse(
    readFileSync(resolve(root, "lib/contentFreshness.json"), "utf8"),
  );
  for (const basePath of ["/guides/codes", "/guides/weapons/tier-list", "/guides/pve-tier-list"]) {
    const entry = registry.find((row) => row.basePath === basePath);
    assert.ok(entry, `missing freshness record for ${basePath}`);
    assert.deepEqual(entry.languages, ["en", "vi", "de"]);
  }
});

test("freshness language claims exactly match the positive locale manifest", async () => {
  const registry = JSON.parse(
    readFileSync(resolve(root, "lib/contentFreshness.json"), "utf8"),
  );
  const { getAvailableLocales } = await import("../i18n/routing.mjs");

  for (const entry of registry) {
    assert.deepEqual(
      [...entry.languages].sort(),
      getAvailableLocales(entry.basePath).sort(),
      `${entry.basePath} freshness languages must match reviewed locale routes`,
    );
  }
});
