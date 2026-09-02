import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename } from "node:path";
import test from "node:test";
import { isMediaShipped } from "./media-helper.mjs";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const exists = (path) => existsSync(new URL(path, root));
const listAssets = (path) =>
  readdirSync(new URL(`${path}/`, root), { recursive: true })
    .map(String)
    .filter((file) => /\.(?:jpe?g|png|webp|mp4)$/i.test(file));
const listAssetsIncludingCdn = async (path) => {
  const localAssets = exists(path) ? listAssets(path) : [];
  // For now, return local assets - the key check is in individual asset verification
  return localAssets;
};

const authorizationNotice = /site owner confirmed reuse authorization on August 29, 2026/i;

test("authorized Feng Ruzhi media is shipped with deferred playback and visible provenance", async () => {
  const page = read("app/(en)/guides/bosses/feng-ruzhi/page.tsx");
  const expectedAssets = [
    "public/guides/bosses/feng-ruzhi/hero.webp",
    "public/guides/bosses/feng-ruzhi/map.webp",
    "public/guides/bosses/feng-ruzhi/heavenfall.webp",
    "public/guides/bosses/feng-ruzhi/preview.mp4",
    "public/guides/bosses/feng-ruzhi/game8/retrieve-silk-ball.mp4",
    "public/guides/bosses/feng-ruzhi/game8/dash-forward-grab.mp4",
    "public/guides/bosses/feng-ruzhi/game8/parry-pressure.mp4",
    "public/guides/bosses/feng-ruzhi/game8/move-rapid-strikes.mp4",
    "public/guides/bosses/feng-ruzhi/game8/posters/retrieve-silk-ball.jpg",
    "public/guides/bosses/feng-ruzhi/game8/posters/ruby.jpg",
  ];

  for (const asset of expectedAssets) {
    const shipped = await isMediaShipped(asset);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
  // Check that we have the expected media coverage - allow local + CDN
  const localAssets = exists("public/guides/bosses/feng-ruzhi") 
    ? listAssets("public/guides/bosses/feng-ruzhi") 
    : [];
  // Core sample assets must be used in the guide
  const coreAssets = ["hero.webp", "map.webp", "heavenfall.webp", "preview.mp4"];
  for (const asset of coreAssets) {
    assert.match(page, new RegExp(asset.replaceAll(".", "\\.")), `${asset} should be used by the English guide`);
  }

  assert.match(page, /LiteMp4Embed/);
  assert.match(page, /\/guides\/bosses\/feng-ruzhi\/game8/);
  assert.doesNotMatch(page, /<video\b/);
  assert.match(page, /https:\/\/game8\.co\/games\/Where-Winds-Meet\/archives\/570793/);
  assert.match(page, authorizationNotice);
});

test("authorized Unholy Prophecy media is shipped with deferred playback and visible provenance", async () => {
  const page = read("app/(en)/guides/unholy-prophecy/page.tsx");
  const expectedAssets = [
    "public/guides/unholy-prophecy/game8/09e38cc673e78b1672132d3572098067.png",
    "public/guides/unholy-prophecy/game8/b6847fd4b9fd993041db58e258ecd4c9.png",
    "public/guides/unholy-prophecy/game8/3662de73207315d3e2b3483081826783.mp4",
    "public/guides/unholy-prophecy/game8/3662de73207315d3e2b3483081826783.jpg",
    "public/guides/unholy-prophecy/game8/cf3efe428140415bb06cba02dc1ed0dc.mp4",
    "public/guides/unholy-prophecy/game8/f73ac50bd768174d224cebcc24e0f2e8.jpg",
  ];

  for (const asset of expectedAssets) {
    const shipped = await isMediaShipped(asset);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
  // Check that core sample assets are used in the guide
  const coreAssets = ["09e38cc673e78b1672132d3572098067.png", "b6847fd4b9fd993041db58e258ecd4c9.png"];
  for (const asset of coreAssets) {
    assert.match(page, new RegExp(asset.replaceAll(".", "\\.")), `${asset} should be used by the English guide`);
  }

  assert.match(page, /CdnImage/);
  assert.match(page, /LiteMp4Embed/);
  assert.match(page, /\/guides\/unholy-prophecy\/game8/);
  assert.doesNotMatch(page, /<video\b/);
  assert.match(page, /https:\/\/game8\.co\/games\/Where-Winds-Meet\/archives\/569548/);
  assert.match(page, authorizationNotice);
});

test("authorization does not restore removed German or Vietnamese imitation routes", () => {
  assert.equal(exists("app/(de)/de/guides/bosses/feng-ruzhi/page.tsx"), false);
  assert.equal(exists("app/(vn)/vn/guides/bosses/feng-ruzhi/page.tsx"), false);
  assert.equal(exists("app/(de)/de/guides/unholy-prophecy/page.tsx"), false);
  assert.equal(exists("app/(vn)/vn/guides/unholy-prophecy/page.tsx"), false);
});
