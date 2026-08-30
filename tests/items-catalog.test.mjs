import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import itemPolicy from "../app/(en)/guides/items/item-policy.js";

const { buildItemIndex } = itemPolicy;

const FIXTURE_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "../app/(en)/guides/items",
);
const CATALOG_FILES = [
  "materials.json",
  "development.json",
  "consumables.json",
  "common.json",
];

const require = createRequire(import.meta.url);

const renderItemTabs = async (categories, uiText) => {
  const entry = `
    import * as React from "react";
    import { renderToStaticMarkup } from "react-dom/server";
    import ItemTabs from ${JSON.stringify(join(FIXTURE_DIR, "ItemTabs.tsx"))};
    export const render = (categories, uiText) =>
      renderToStaticMarkup(React.createElement(ItemTabs, { categories, uiText }));
  `;
  const result = await build({
    bundle: true,
    format: "cjs",
    platform: "node",
    stdin: { contents: entry, loader: "js", resolveDir: FIXTURE_DIR },
    write: false,
    plugins: [
      {
        name: "item-tabs-test-stubs",
        setup(esbuild) {
          esbuild.onResolve({ filter: /^next\/link$/ }, () => ({
            namespace: "item-tabs-stub",
            path: "link",
          }));
          esbuild.onResolve({ filter: /^@\/components\/CdnImageClient$/ }, () => ({
            namespace: "item-tabs-stub",
            path: "image",
          }));
          esbuild.onLoad({ filter: /.*/, namespace: "item-tabs-stub" }, ({ path }) => ({
            contents:
              path === "link"
                ? 'import * as React from "react"; export default function Link({ href, children, ...props }) { return React.createElement("a", { href, ...props }, children); }'
                : 'export default function Image() { return null; }',
            loader: "js",
            resolveDir: FIXTURE_DIR,
          }));
        },
      },
    ],
  });
  const compiledModule = { exports: {} };
  const evaluate = new Function("require", "module", "exports", result.outputFiles[0].text);
  evaluate(require, compiledModule, compiledModule.exports);
  return compiledModule.exports.render(categories, uiText);
};

const readCatalog = () =>
  CATALOG_FILES.flatMap((file) => {
    const records = JSON.parse(readFileSync(join(FIXTURE_DIR, file), "utf8"));
    return records.map((record) => ({ ...record, catalog: file }));
  });

const normalizeName = (name) => name.trim().replace(/\s+/g, " ").toLocaleLowerCase("en-US");

test("the source catalog contains one record per item name", () => {
  const seen = new Map();
  const duplicates = [];

  for (const item of readCatalog()) {
    const key = normalizeName(item.name);
    const existing = seen.get(key);
    if (existing) {
      duplicates.push(`${item.name} (${existing} and ${item.catalog})`);
    } else {
      seen.set(key, item.catalog);
    }
  }

  assert.deepEqual(duplicates, []);
});

test("only sourced, high-value, verified records with concrete details are published", () => {
  const records = [
    {
      name: "Verified tuning material",
      image: "/items/own/tuning-material.webp",
      use: "Tunes one weapon affix at the blacksmith.",
      location: "",
      verificationStatus: "verified",
      sourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
      highValue: true,
      mediaKind: "own",
    },
    {
      name: "No source",
      image: "/items/own/no-source.webp",
      use: "Tunes one weapon affix at the blacksmith.",
      location: "Rewarded by a named quest.",
      verificationStatus: "verified",
      highValue: true,
      mediaKind: "own",
    },
    {
      name: "Still pending",
      image: "/items/own/pending.webp",
      use: "Used for a known upgrade.",
      location: "Found in a named region.",
      verificationStatus: "pending",
      sourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
      highValue: true,
      mediaKind: "own",
    },
    {
      name: "Placeholder copy",
      image: "/items/common/placeholder.svg",
      use: "Effect details pending",
      location: "Acquisition method pending",
      verificationStatus: "verified",
      sourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
      highValue: true,
      mediaKind: "placeholder",
    },
    {
      name: "Low-value record",
      image: "/items/own/low-value.webp",
      use: "A decorative collectible.",
      location: "Found in a named region.",
      verificationStatus: "verified",
      sourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
      highValue: false,
      mediaKind: "own",
    },
  ];

  const index = buildItemIndex(records);

  assert.deepEqual(index.published.map((item) => item.name), ["Verified tuning material"]);
  assert.deepEqual(index.coverage, {
    catalogued: 5,
    verified: 4,
    pending: 1,
    published: 1,
  });
});

test("only owned or sourced official media receives a publishable image URL", () => {
  const baseRecord = {
    use: "Tunes one weapon affix at the blacksmith.",
    location: "",
    verificationStatus: "verified",
    sourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
    highValue: true,
  };
  const records = [
    {
      ...baseRecord,
      name: "Legacy wiki image",
      image: "/items/materials/legacy-wiki-guide.png",
    },
    {
      ...baseRecord,
      name: "Placeholder image",
      image: "/items/common/placeholder.svg",
      mediaKind: "placeholder",
    },
    {
      ...baseRecord,
      name: "Owned capture",
      image: "/items/own/capture.webp",
      mediaKind: "own",
    },
    {
      ...baseRecord,
      name: "Official press image",
      image: "/items/official/press.webp",
      mediaKind: "official",
      mediaSourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
    },
    {
      ...baseRecord,
      name: "Unproven official image",
      image: "/items/official/unproven.webp",
      mediaKind: "official",
    },
  ];

  const index = buildItemIndex(records);

  assert.deepEqual(
    index.published.map((item) => ({ name: item.name, media: item.media })),
    [
      { name: "Legacy wiki image", media: { kind: "unverified" } },
      { name: "Placeholder image", media: { kind: "placeholder" } },
      {
        name: "Owned capture",
        media: { kind: "own", src: "/items/own/capture.webp" },
      },
      {
        name: "Official press image",
        media: {
          kind: "official",
          src: "/items/official/press.webp",
          sourceUrl: "https://www.wherewindsmeetgame.com/news/example.html",
        },
      },
      { name: "Unproven official image", media: { kind: "unverified" } },
    ],
  );
});

test("the live catalog publishes only the small official-source set and keeps legacy claims pending", () => {
  const index = buildItemIndex(readCatalog());

  assert.deepEqual(index.coverage, {
    catalogued: 186,
    verified: 4,
    pending: 182,
    published: 4,
  });
  assert.deepEqual(
    index.published.map((item) => item.name).sort(),
    ["Horse Gallop Tactic", "Modulating Stone", "Oscillating Jade", "Retuning Stone: Mirage"],
  );

  const historicalReward = index.published.find((item) => item.name === "Oscillating Jade");
  assert.match(historicalReward.location, /historical/i);
  assert.match(historicalReward.location, /April 2026/i);
  assert.match(historicalReward.location, /not evidence of a current permanent farm/i);
  assert.doesNotMatch(historicalReward.location, /is currently available|permanent source/i);

  for (const item of index.published) {
    assert.match(item.sourceUrl, /^https:\/\/www\.wherewindsmeetgame\.com\//);
    assert.equal(item.media.kind, "unverified");
  }
});

test("the initial item tab shows the first category with published facts and safely falls back to the first category", async () => {
  const coverage = (published) => ({
    catalogued: 1,
    verified: published,
    pending: published ? 0 : 1,
    published,
  });
  const verifiedItem = {
    name: "Modulating Stone",
    use: "Resets eligible gear tuning.",
    location: "Recycling eligible gear.",
    sourceUrl: "https://www.wherewindsmeetgame.com/news/official/723update.html",
    media: { kind: "unverified" },
  };
  const categories = [
    { id: "materials", title: "Materials", blurb: "Pending materials", items: [], coverage: coverage(0) },
    {
      id: "development",
      title: "Development Materials",
      blurb: "Verified development facts",
      items: [verifiedItem],
      coverage: coverage(1),
    },
  ];

  const publishedMarkup = await renderItemTabs(categories);
  assert.match(publishedMarkup, /Modulating Stone/);
  assert.match(publishedMarkup, /Verified development facts/);

  const fallbackMarkup = await renderItemTabs([
    { id: "common", title: "Common Items", blurb: "First safe fallback", items: [], coverage: coverage(0) },
    { id: "materials", title: "Materials", blurb: "Second category", items: [], coverage: coverage(0) },
  ]);
  assert.match(fallbackMarkup, /First safe fallback/);
  assert.match(fallbackMarkup, /<button[^>]*bg-emerald-500\/15[^>]*>Common Items<\/button>/);
});

test("item status and pending-retention copy are fully supplied by the locale UI contract", async () => {
  const publishedItem = {
    name: "Modulating Stone",
    use: "Setzt geeignete Ausrüstung zurück.",
    location: "Aus geeigneter Ausrüstung.",
    sourceUrl: "https://www.wherewindsmeetgame.com/news/official/723update.html",
    media: { kind: "unverified" },
  };
  const uiText = {
    verifiedBadge: "Bestätigt",
    cataloguedSuffix: "erfasst",
    pendingSuffix: "offen",
    pendingRetentionTemplate: "{count} {status} Datensätze bleiben für die redaktionelle Prüfung erhalten.",
  };

  const publishedMarkup = await renderItemTabs([
    {
      id: "development",
      title: "Entwicklung",
      blurb: "Belegte Fakten",
      items: [publishedItem],
      coverage: { catalogued: 2, verified: 1, pending: 1, published: 1 },
    },
  ], uiText);
  assert.match(publishedMarkup, />Bestätigt</);
  assert.match(publishedMarkup, /2 erfasst/);
  assert.doesNotMatch(publishedMarkup, />Verified</);
  assert.doesNotMatch(publishedMarkup, /catalogued/);

  const emptyMarkup = await renderItemTabs([
    {
      id: "materials",
      title: "Materialien",
      blurb: "Noch offen",
      items: [],
      coverage: { catalogued: 3, verified: 0, pending: 3, published: 0 },
    },
  ], uiText);
  assert.match(emptyMarkup, /3 offen Datensätze bleiben für die redaktionelle Prüfung erhalten\./);
  assert.doesNotMatch(emptyMarkup, /records are retained for editorial verification/);
});

test("localized item owners translate the verified fact set instead of leaking English guide copy", () => {
  const localizedPages = [
    readFileSync(join(FIXTURE_DIR, "../../../(de)/de/guides/items/page.tsx"), "utf8"),
    readFileSync(join(FIXTURE_DIR, "../../../(vn)/vn/guides/items/page.tsx"), "utf8"),
  ];

  for (const page of localizedPages) {
    assert.match(page, /Modulating Stone/);
    assert.match(page, /Retuning Stone: Mirage/);
    assert.match(page, /Horse Gallop Tactic/);
    assert.match(page, /Oscillating Jade/);
    assert.doesNotMatch(page, /Historical acquisition only/);
    assert.doesNotMatch(page, /Prior materials are not refunded/);
    assert.match(page, /verifiedBadge:/);
    assert.match(page, /cataloguedSuffix:/);
    assert.match(page, /pendingRetentionTemplate:/);
  }
});

test("item publication copy treats media provenance as a display rule, not a fact-publication gate", () => {
  const englishPage = readFileSync(join(FIXTURE_DIR, "page.tsx"), "utf8");
  const germanPage = readFileSync(
    join(FIXTURE_DIR, "../../../(de)/de/guides/items/page.tsx"),
    "utf8",
  );
  const vietnamesePage = readFileSync(
    join(FIXTURE_DIR, "../../../(vn)/vn/guides/items/page.tsx"),
    "utf8",
  );

  assert.match(englishPage, /Media is displayed only when its provenance is clear/);
  assert.match(germanPage, /Medien werden nur angezeigt, wenn ihre Herkunft nachvollziehbar ist/);
  assert.match(vietnamesePage, /Media chỉ được hiển thị khi nguồn gốc rõ ràng/);
});
