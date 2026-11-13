import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { isMediaShipped } from "./media-helper.mjs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const shippedStills = [
  "public/guides/official-map/qingzhou-overview.png",
  "public/guides/official-map/mount-tai.png",
  "public/guides/official-map/qingzhou-min-zoom-frame.png",
];

test("official map stills are shipped as local public assets", async () => {
  for (const publicPath of shippedStills) {
    assert.equal(await isMediaShipped(publicPath), true, publicPath);
  }
});

test("guide pages do not ship or cite the URL-bar proof capture", () => {
  const sources = [
    "lib/officialMapCaptures.ts",
    "app/(en)/guides/penglai/page.tsx",
    "app/(en)/guides/cast-in-currents/page.tsx",
    "app/(en)/guides/spirit-of-the-grove/page.tsx",
    "app/(en)/guides/qingzhou/page.tsx",
    "app/(en)/tools/interactive-map/page.tsx",
    "app/(en)/guides/warehouse/page.tsx",
  ];
  for (const path of sources) {
    assert.doesNotMatch(read(path), /00-provenance|provenance-url/i, path);
  }
});

test("filled official-map slots use local stills and do not invent a Penglai layer", () => {
  const penglai = read("app/(en)/guides/penglai/page.tsx");
  assert.match(penglai, /penglaiOfficialMapStill/);
  assert.doesNotMatch(penglai, /MediaPlaceholder/);
  assert.doesNotMatch(penglai, /Penglai layer/);

  const cast = read("app/(en)/guides/cast-in-currents/page.tsx");
  assert.match(cast, /castInCurrentsOfficialMapStill/);
  assert.doesNotMatch(cast, /MediaPlaceholder/);

  const spirit = read("app/(en)/guides/spirit-of-the-grove/page.tsx");
  assert.match(spirit, /spiritOfTheGroveOfficialMapStill/);
  assert.doesNotMatch(spirit, /MediaPlaceholder/);

  const qingzhou = read("app/(en)/guides/qingzhou/page.tsx");
  assert.match(qingzhou, /qingzhouGuideOfficialMapStill/);
  assert.doesNotMatch(qingzhou, /MediaPlaceholder/);
  assert.doesNotMatch(qingzhou, /Qingzhou \/ Penglai map/);

  const map = read("app/(en)/tools/interactive-map/page.tsx");
  assert.match(map, /interactiveMapOfficialQingzhouStill/);
  assert.doesNotMatch(map, /MediaPlaceholder/);
  assert.doesNotMatch(map, /Penglai layers/);
  assert.doesNotMatch(map, /sub-layer/);
  assert.match(map, /deferLoad/);
  assert.match(map, /id: "mapgenie"/);
  assert.match(map, /Open official map/);
  assert.match(map, /target="_blank"/);

  const captions = read("lib/officialMapCaptures.ts");
  assert.match(captions, /Penglai is not a separately labeled layer/);
  assert.match(captions, /not an in-game Journal screenshot/);
  assert.match(captions, /https:\/\/www\.wherewindsmeetgame\.com\/map\//);
  assert.match(captions, /officialMapQingzhouOverviewSrc = "\/guides\/official-map\/qingzhou-overview\.png"/);
  assert.match(captions, /officialMapMountTaiSrc = "\/guides\/official-map\/mount-tai\.png"/);
  assert.match(captions, /officialMapQingzhouFrameSrc = "\/guides\/official-map\/qingzhou-min-zoom-frame\.png"/);
  assert.doesNotMatch(captions, /pin totals? are \d+|marker total of \d+/i);
});

test("warehouse UI slot stays pending", () => {
  const warehouse = read("app/(en)/guides/warehouse/page.tsx");
  assert.match(warehouse, /MediaPlaceholder/);
  assert.match(warehouse, /slot="Warehouse UI"/);
  assert.doesNotMatch(warehouse, /official-map\//);
});
