import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const videoPages = [
  "app/(en)/videos/page.tsx",
  "app/(de)/de/videos/page.tsx",
  "app/(vn)/vn/videos/page.tsx",
];

const bossHubPages = [
  "app/(en)/guides/bosses/page.tsx",
  "app/(de)/de/guides/bosses/page.tsx",
  "app/(vn)/vn/guides/bosses/page.tsx",
];

const bossDetailPages = [
  "app/(en)/guides/bosses/boss-detail.tsx",
  "app/(de)/de/guides/bosses/boss-detail.tsx",
  "app/(vn)/vn/guides/bosses/boss-detail.tsx",
];

const pvpComboPages = [
  "app/(en)/tools/pvp-combos/page.tsx",
  "app/(de)/de/tools/pvp-combos/page.tsx",
  "app/(vn)/vn/tools/pvp-combos/page.tsx",
];

const mistPrisonPages = [
  "app/(en)/guides/mist-shrouded-prison/page.tsx",
  "app/(de)/de/guides/mist-shrouded-prison/page.tsx",
  "app/(vn)/vn/guides/mist-shrouded-prison/page.tsx",
];

const quizVideoPages = [
  "app/(en)/guides/murong-yuan-adoptive-father/page.tsx",
  "app/(de)/de/guides/murong-yuan-adoptive-father/page.tsx",
  "app/(vn)/vn/guides/murong-yuan-adoptive-father/page.tsx",
  "app/(en)/guides/who-is-destined-to-face-the-purple-star-catastrophe/page.tsx",
  "app/(de)/de/guides/who-is-destined-to-face-the-purple-star-catastrophe/page.tsx",
  "app/(vn)/vn/guides/who-is-destined-to-face-the-purple-star-catastrophe/page.tsx",
  "app/(en)/guides/which-faction-controls-ghost-revelry-hall/page.tsx",
  "app/(de)/de/guides/which-faction-controls-ghost-revelry-hall/page.tsx",
  "app/(vn)/vn/guides/which-faction-controls-ghost-revelry-hall/page.tsx",
];

const unholyProphecyPages = [
  "app/(en)/guides/unholy-prophecy/page.tsx",
];

test("video galleries defer every YouTube player until the visitor clicks", () => {
  const liteEmbed = read("components/LiteYouTubeEmbed.tsx");

  assert.match(liteEmbed, /isPlaying\s*\?\s*\([\s\S]*?<iframe/);
  assert.match(liteEmbed, /youtube-nocookie\.com/);

  for (const path of videoPages) {
    const page = read(path);
    assert.match(page, /LiteYouTubeEmbed/, `${path} should use the deferred player`);
    assert.match(page, /<LiteYouTubeEmbed/, `${path} should render deferred players`);
    assert.doesNotMatch(page, /<iframe/, `${path} should not render eager YouTube iframes`);
    assert.match(page, /publishedAt/, `${path} should preserve the visible publication date`);
    assert.match(page, /contentUrl/, `${path} should preserve the source URL in VideoObject data`);
  }
});

test("boss galleries do not create eleven autoplaying MP4 players in initial HTML", () => {
  const liteMp4 = read("components/LiteMp4Embed.tsx");

  assert.match(liteMp4, /if \(isPlaying\)[\s\S]*?<video/);
  assert.match(liteMp4, /<FallbackImage/);

  for (const path of bossHubPages) {
    const page = read(path);
    assert.match(page, /LiteMp4Embed/, `${path} should use the click-to-load player`);
    assert.match(page, /<LiteMp4Embed/, `${path} should render a deferred player per boss`);
    assert.doesNotMatch(page, /<video/, `${path} should not render eager MP4 players`);
    assert.doesNotMatch(page, /autoPlay/, `${path} should not autoplay the gallery`);
    assert.match(page, /poster="\/background\/bg4\.webp"/, `${path} should have a local static fallback`);
    assert.match(page, /href=\{boss\.backgroundVideo\}/, `${path} should retain a direct source link`);
  }
});

test("boss detail pages keep remote MP4 files behind an explicit click", () => {
  for (const path of bossDetailPages) {
    const page = read(path);
    assert.match(page, /LiteMp4Embed/, `${path} should use the click-to-load player`);
    assert.match(page, /<LiteMp4Embed/, `${path} should render a deferred player`);
    assert.doesNotMatch(page, /<video/, `${path} should not create an eager MP4 element`);
    assert.match(page, /href=\{boss\.backgroundVideo\}/, `${path} should retain a direct source link`);
  }
});

test("PVP combo tools defer both the third-party database and YouTube clips", () => {
  for (const path of pvpComboPages) {
    const page = read(path);
    assert.match(page, /DeferredIframeEmbed/, `${path} should defer the combo database`);
    assert.match(page, /LiteYouTubeEmbed/, `${path} should defer YouTube clips`);
    assert.doesNotMatch(page, /<iframe/, `${path} should not create eager third-party frames`);
    assert.match(page, /href=\{combosUrl\}/, `${path} should preserve the database source link`);
    assert.match(page, /youtube\.com\/watch\?v=/, `${path} should preserve each video source link`);
  }
});

test("Mist-Shrouded Prison walkthroughs use the local guide cover until clicked", () => {
  for (const path of mistPrisonPages) {
    const page = read(path);
    assert.match(page, /LiteYouTubeEmbed/, `${path} should use the deferred player`);
    assert.doesNotMatch(page, /<iframe/, `${path} should not create an eager YouTube frame`);
    assert.match(page, /poster=\{heroImagePath\}/, `${path} should retain its local guide cover`);
    assert.match(page, /youtube\.com\/watch\?v=dHDy9nzQsd4/, `${path} should retain the walkthrough source`);
  }
});

test("quiz answer pages preserve video evidence without eager YouTube frames", () => {
  const gallery = read("components/DeferredYouTubeGallery.tsx");
  assert.match(gallery, /LiteYouTubeEmbed/);
  assert.match(gallery, /poster="\/background\/bg4\.webp"/);
  assert.match(gallery, /youtube\.com\/watch\?v=/);

  for (const path of quizVideoPages) {
    const page = read(path);
    assert.match(page, /DeferredYouTubeGallery/, `${path} should use the deferred gallery`);
    assert.doesNotMatch(page, /<iframe/, `${path} should not create eager YouTube frames`);
    assert.match(page, /contentUrl/, `${path} should preserve VideoObject source data`);
    assert.match(page, /uploadDate/, `${path} should preserve the evidence date`);
  }
});

test("Unholy Prophecy keeps authorized local clips and YouTube behind click-to-load players", () => {
  for (const path of unholyProphecyPages) {
    const page = read(path);
    assert.match(page, /LiteYouTubeEmbed/, `${path} should defer the long walkthrough`);
    assert.match(page, /LiteMp4Embed/, `${path} should defer the authorized walkthrough clips`);
    assert.match(page, /\/guides\/unholy-prophecy\/game8/, `${path} should retain the authorized Game8 media paths`);
    assert.doesNotMatch(page, /<video/, `${path} should not create eager MP4 elements`);
    assert.doesNotMatch(page, /<iframe/, `${path} should not create eager YouTube frames`);
    assert.match(page, /youtube\.com\/watch\?v=3yLD1u_M5RY/, `${path} should preserve the YouTube source`);
    assert.match(page, /game8\.co\/games\/Where-Winds-Meet\/archives\/569548/);
    assert.match(page, /site owner confirmed reuse authorization on August 29, 2026/i);
  }
});

test("Gift of Gab galleries share the deferred YouTube player and retain captions and sources", () => {
  const player = read("app/(en)/guides/gift-of-gab/EmbeddedVideoPlayer.tsx");
  const gallery = read("app/(en)/guides/gift-of-gab/EmbeddedVideoGallery.tsx");

  assert.match(player, /LiteYouTubeEmbed/);
  assert.doesNotMatch(player, /<iframe/);
  assert.match(player, /poster="\/guides\/gift-of-gab\/gameplay\.jpg"/);
  assert.match(player, /youtube\.com\/watch\?v=/);
  assert.match(gallery, /description=\{video\.description\}/);
});

test("weapon detail showcase waits for a click and falls back to official local art", () => {
  const page = read("app/(en)/guides/weapons/weapon-detail.tsx");
  assert.match(page, /LiteMp4Embed/);
  assert.doesNotMatch(page, /<video/);
  assert.match(page, /poster=\{weapon\.officialArt\}/);
  assert.match(page, /href=\{weapon\.officialVideo\}/);
  assert.doesNotMatch(
    page,
    /ludens\.com\.tw/,
    "weapon guides should not hotlink unattributed third-party screenshots",
  );
  assert.match(
    page,
    /Official weapon identity art; it does not verify the community build rotations below\./,
  );
});

test("original route cards describe their evidence boundary without publishing editorial placeholders", () => {
  const visualChecklistPages = [
    "app/(en)/guides/travel-permit/page.tsx",
    "app/(en)/guides/sunken-city-lake/page.tsx",
    "app/(en)/guides/to-friends-to-the-end/page.tsx",
  ];

  for (const path of visualChecklistPages) {
    const page = read(path);
    assert.doesNotMatch(page, /Replace these cards with our own in-game screenshots later/i);
    assert.match(page, /not an in-game screenshot/i);
    assert.match(page, /does not prove current UI or map state/i);
  }
});

test("app routes contain no eager media elements; deferred utilities and decorative media are explicit exceptions", () => {
  const appFiles = readdirSync(new URL("../app/", import.meta.url), { recursive: true })
    .filter((path) => path.endsWith(".tsx"));

  for (const path of appFiles) {
    const source = read(`app/${path}`);
    assert.doesNotMatch(source, /<(?:iframe|video)\b/, `eager media element remains in app/${path}`);
  }

  const parallax = read("components/ParallaxBackground.tsx");
  assert.doesNotMatch(parallax, /<video/);
  assert.doesNotMatch(parallax, /easebar\.com/);
  assert.doesNotMatch(parallax, /enableVideo/);

  const interactiveMap = read("components/InteractiveMapEmbed.tsx");
  assert.match(interactiveMap, /\{isLoaded\s*\?\s*\([\s\S]*?<iframe/);
  assert.match(interactiveMap, /deferLoad/);
});
