import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename } from "node:path";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const exists = (path) => existsSync(new URL(path, root));
const listAssets = (path) =>
  readdirSync(new URL(`${path}/`, root), { recursive: true })
    .map(String)
    .filter((file) => /\.(?:jpe?g|png|webp|mp4)$/i.test(file));

const authorizationNotice = /site owner confirmed reuse authorization on August 29, 2026/i;

test("authorized Feng Ruzhi media is shipped with deferred playback and visible provenance", () => {
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
    assert.equal(exists(asset), true, `${asset} should be restored from HEAD`);
  }
  const shippedAssets = listAssets("public/guides/bosses/feng-ruzhi");
  assert.equal(shippedAssets.length, 27, "the complete 27-file Feng Ruzhi set should be restored");
  for (const asset of shippedAssets) {
    assert.match(page, new RegExp(basename(asset).replaceAll(".", "\\.")), `${asset} should be used by the English guide`);
  }

  assert.match(page, /LiteMp4Embed/);
  assert.match(page, /\/guides\/bosses\/feng-ruzhi\/game8/);
  assert.doesNotMatch(page, /<video\b/);
  assert.match(page, /https:\/\/game8\.co\/games\/Where-Winds-Meet\/archives\/570793/);
  assert.match(page, authorizationNotice);
});

test("authorized Unholy Prophecy media is shipped with deferred playback and visible provenance", () => {
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
    assert.equal(exists(asset), true, `${asset} should be restored from HEAD`);
  }
  const shippedAssets = listAssets("public/guides/unholy-prophecy/game8");
  assert.equal(shippedAssets.length, 37, "the complete 37-file Unholy Prophecy set should be restored");
  for (const asset of shippedAssets) {
    assert.match(page, new RegExp(basename(asset).replaceAll(".", "\\.")), `${asset} should be used by the English guide`);
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
