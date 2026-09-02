import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { isMediaShipped } from "./media-helper.mjs";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("decorative backgrounds never auto-load remote video", () => {
  const background = read("components/ParallaxBackground.tsx");
  const wrapper = read("components/BackgroundWrapper.tsx");

  assert.doesNotMatch(background, /easebar\.com/);
  assert.doesNotMatch(background, /<video/);
  assert.doesNotMatch(background, /enableVideo/);
  assert.doesNotMatch(wrapper, /enableVideo/);
});

test("character-code guidance uses authorized Faceologist media only for accurate Appearance navigation", async () => {
  const source = read("components/guides/GrowthOpportunityGuidePage.tsx");
  const branch = source.slice(
    source.indexOf('if (kind === "character-codes")'),
    source.indexOf('if (kind === "commerce-coins")'),
  );

  assert.match(branch, /step-1-open-appearance\.webp/);
  assert.match(branch, /step-2-switch-appearance-tab\.webp/);
  assert.doesNotMatch(branch, /step-[3-9].*\.(?:webp|png|jpe?g)/);
  assert.match(branch, /<LightboxGallery/);
  assert.match(branch, /Publisher:\s*AllThings\.How/);
  assert.match(branch, /Reuse authorization confirmed by site owner 2026-08-29\./);
  assert.match(source, /No verified current import-dialog screenshot is published/i);
  assert.match(source, /did not show the text-code field or QR-import control/i);
  
  const step1Shipped = await isMediaShipped("public/guides/the-great-faceologist/step-1-open-appearance.webp");
  const step2Shipped = await isMediaShipped("public/guides/the-great-faceologist/step-2-switch-appearance-tab.webp");
  assert.equal(step1Shipped, true, "step-1 should be shipped");
  assert.equal(step2Shipped, true, "step-2 should be shipped");
});

test("Great Faceologist typed archive publishes the authorized AllThings screenshot set with historical boundaries", async () => {
  const pages = [
    "app/(en)/guides/the-great-faceologist/page.tsx",
    "app/(de)/de/guides/the-great-faceologist/page.tsx",
    "app/(vn)/vn/guides/the-great-faceologist/page.tsx",
  ];
  const shared = read("components/guides/TheGreatFaceologistGuidePage.tsx");
  const assets = [
    "hero.webp",
    "step-1-open-appearance.webp",
    "step-2-switch-appearance-tab.webp",
    "step-3-edit-face.webp",
    "step-4-choose-preset.webp",
    "step-5-preview.webp",
    "step-6-upload-to-gallery.webp",
    "step-7-title-description.webp",
    "step-8-select-event-tag.webp",
    "step-9-publish.webp",
    "daily-upload-cap.webp",
  ];

  for (const page of pages.map(read)) {
    assert.doesNotMatch(page, /<article|"@type"/);
  }
  for (const asset of assets) {
    assert.match(shared, new RegExp(asset.replaceAll(".", "\\.")), asset);
    const shipped = await isMediaShipped(`public/guides/the-great-faceologist/${asset}`);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
  assert.match(shared, /<CdnImage/);
  assert.match(shared, /alt=\{/);
  assert.match(shared, /<figcaption/);
  assert.match(shared, /Publisher:\s*AllThings\.How/);
  assert.match(shared, /Reuse authorization confirmed by site owner 2026-08-29\./);
  assert.match(shared, /December 2025 historical event archive/i);
  assert.match(shared, /not proof that .*current|kein Beleg.*aktuell|không phải bằng chứng.*hiện tại/i);
  assert.doesNotMatch(shared, /daily cap[^\n]*(?:~?5|five)|(?:~?5|five)[^\n]*daily cap/i);
});

test("Great Faceologist locale routes share one typed archive and one schema source", () => {
  const shared = read("components/guides/TheGreatFaceologistGuidePage.tsx");
  const wrappers = {
    en: read("app/(en)/guides/the-great-faceologist/page.tsx"),
    de: read("app/(de)/de/guides/the-great-faceologist/page.tsx"),
    vi: read("app/(vn)/vn/guides/the-great-faceologist/page.tsx"),
  };

  for (const [locale, source] of Object.entries(wrappers)) {
    assert.match(source, new RegExp(`greatFaceologistContent\\.${locale}`));
    assert.match(source, /buildGreatFaceologistMetadata\(content\)/);
    assert.match(source, /<TheGreatFaceologistGuidePage content=\{content\} \/>/);
    assert.doesNotMatch(source, /<article|"@type"/);
  }

  assert.match(shared, /satisfies Record<GreatFaceologistLanguage, GreatFaceologistContent>/);
  assert.match(shared, /"@type": "WebPage"/);
  assert.match(shared, /"@type": "BreadcrumbList"/);
  assert.match(shared, /"@type": "FAQPage"/);
  assert.match(shared, /name: content\.metadata\.title/);
  assert.match(shared, /description: content\.metadata\.description/);
  assert.match(shared, /mainEntity: content\.faq\.map/);
  assert.match(shared, /\{content\.faq\.map/);
});

test("authorized wall-puzzle and Officer Nan walkthrough media is attributed and locally available", async () => {
  const wallPages = [
    read("app/(en)/guides/wall-puzzle/page.tsx"),
    read("app/(de)/de/guides/wall-puzzle/page.tsx"),
    read("app/(vn)/vn/guides/wall-puzzle/page.tsx"),
  ];
  const officerPages = [
    read("app/(en)/guides/find-officer-nan/page.tsx"),
    read("app/(de)/de/guides/find-officer-nan/page.tsx"),
    read("app/(vn)/vn/guides/find-officer-nan/page.tsx"),
  ];

  for (const source of wallPages) {
    assert.match(source, /\/guides\/wall-puzzle\/game8\//i);
    assert.match(source, /Source publisher: Game8 and GameRant\./);
    assert.match(source, /Reuse authorization confirmed by site owner 2026-08-29\./);
    assert.match(source, /<ZoomableImage/);
    assert.match(source, /<figcaption/);
    assert.match(source, /\/guides\/wall-puzzle\/ign\//i);
    assert.match(source, /Source publisher: IGN\./);
    assert.match(source, /Third-party walkthrough screenshots are not official or current-build evidence\./);
    assert.doesNotMatch(source, /<(?:iframe|video)\b/i);
  }
  for (const source of officerPages) {
    assert.match(source, /const walkthroughSteps = \[/);
    assert.match(source, /const walkthroughImageFiles = \[/);
    assert.match(source, /src=\{`\$\{guidePath\}\/\$\{walkthroughImageFiles\[idx\]\}`\}/);
    assert.match(source, /alt=\{`\$\{step\}/);
    assert.match(source, /Source publisher: Game8\./);
    assert.match(source, /Reuse authorization confirmed by site owner 2026-08-29\./);
    assert.match(source, /<CdnImage/);
    assert.match(source, /<figcaption/);
    assert.doesNotMatch(source, /<(?:iframe|video)\b/i);
  }

  // Check sample assets are shipped (local or CDN)
  const sampleAssets = [
    "public/guides/wall-puzzle/game8/4331075-caa01c4ee0d88da905e52717793aa762.webp",
    "public/guides/wall-puzzle/wall-tiles-right.webp",
    "public/guides/wall-puzzle/ign/1.webp",
    "public/guides/wall-puzzle/ign/6.webp",
    "public/guides/find-officer-nan/hero.webp",
    "public/guides/find-officer-nan/find-nan.webp",
  ];
  for (const asset of sampleAssets) {
    const shipped = await isMediaShipped(asset);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
});

test("deferred YouTube cards use local neutral posters and expose source attribution", () => {
  const growth = read("components/guides/GrowthOpportunityGuidePage.tsx");
  const chapters = read("components/guides/HiddenMountainChapterTwoGuidePage.tsx");
  const jiangnan = read("components/guides/JiangnanHangzhouGuidePage.tsx");

  for (const [name, source] of Object.entries({ growth, chapters, jiangnan })) {
    assert.doesNotMatch(source, /i\.ytimg\.com/, `${name} must not contact YouTube before click`);
  }
  assert.match(growth, /GoGamesGuide/);
  assert.match(growth, /youtube\.com\/watch\?v=5_FI471ah5A/);
  assert.match(chapters, /GameTrailers/);
  assert.match(chapters, /Game Guides Channel/);
  assert.match(chapters, /youtube\.com\/watch\?v=\$\{videoId\}/);
});

test("Jiangnan evidence artwork is served locally while remote video stays click-to-load", () => {
  const jiangnan = read("components/guides/JiangnanHangzhouGuidePage.tsx");

  assert.match(jiangnan, /const harborImage = "\/guides\/jiangnan-hangzhou\/hero-1440\.webp"/);
  assert.doesNotMatch(jiangnan, /const harborImage = "https?:\/\//);
  assert.doesNotMatch(jiangnan, /https:\/\/nie\.res\.netease\.com/);
  assert.doesNotMatch(jiangnan, /https:\/\/i2\.hdslb\.com/);
  assert.match(jiangnan, /thumbnailUrl:\s*\[heroImage\]/);
  assert.match(jiangnan, /<LiteMp4Embed/);
});

test("third-party maps default to no-referrer and disclose post-click data transfer", () => {
  const map = read("components/InteractiveMapEmbed.tsx");
  assert.match(map, /referrerPolicy=\{active\.referrerPolicy \?\? "no-referrer"\}/);
  assert.match(map, /cookies or other data/i);
});

test("authorized Game8 guide media is attributed and kept behind deferred players", () => {
  const feng = read("app/(en)/guides/bosses/feng-ruzhi/page.tsx");
  const unholy = read("app/(en)/guides/unholy-prophecy/page.tsx");

  for (const [name, source] of Object.entries({ feng, unholy })) {
    assert.match(source, /\/guides\/(?:bosses\/feng-ruzhi\/game8|unholy-prophecy\/game8)/, `${name} should reference the authorized local media`);
    assert.match(source, /site owner confirmed reuse authorization on August 29, 2026/i);
    assert.match(source, /LiteMp4Embed/);
    assert.doesNotMatch(source, /<video\b/, `${name} must not eagerly render local MP4 players`);
  }
  assert.match(feng, /game8\.co\/games\/Where-Winds-Meet\/archives\/570793/);
  assert.match(unholy, /game8\.co\/games\/Where-Winds-Meet\/archives\/569548/);
  assert.match(feng, /Third-party creator walkthrough/);
  assert.match(feng, /youtube\.com\/watch\?v=ImGcZ7vtI_g/);
});

test("unused placeholder video gallery cannot be reintroduced accidentally", () => {
  assert.equal(
    existsSync(new URL("../app/(en)/guides/gift-of-gab/VideoGallery.tsx", import.meta.url)),
    false,
  );
});

test("authorized Mist-Shrouded Prison walkthrough images are attributed and deferred video stays private by default", async () => {
  const pages = {
    en: read("app/(en)/guides/mist-shrouded-prison/page.tsx"),
    de: read("app/(de)/de/guides/mist-shrouded-prison/page.tsx"),
    vi: read("app/(vn)/vn/guides/mist-shrouded-prison/page.tsx"),
  };

  for (const [locale, source] of Object.entries(pages)) {
    assert.match(source, /\/guides\/mist-shrouded-prison\/gr\//, `${locale} should reference the authorized GameRant set`);
    assert.match(source, /walkthroughImagePaths\[index\]/);
    assert.match(source, /walkthrough\.map/);
    assert.match(source, /Source publisher: GameRant\./);
    assert.match(source, /Reuse authorization confirmed by site owner 2026-08-29\./);
    assert.match(source, /<figcaption/);
    assert.match(source, /<LiteYouTubeEmbed/);
    assert.match(source, /poster=\{heroImagePath\}/);
    assert.match(source, /youtube\.com\/watch\?v=dHDy9nzQsd4/);
    assert.doesNotMatch(source, /<(?:iframe|video)\b/i);
  }

  // Check sample assets are shipped (local or CDN)
  const sampleAssets = [
    "public/guides/mist-shrouded-prison/gr/final-treasure-wide.jpg",
    "public/guides/mist-shrouded-prison/youtube-cover.jpg",
  ];
  for (const asset of sampleAssets) {
    const shipped = await isMediaShipped(asset);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
});
