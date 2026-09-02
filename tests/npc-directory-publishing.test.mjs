import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { isMediaShipped } from "./media-helper.mjs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const pages = [
  "app/(en)/guides/npc-list/page.tsx",
  "app/(de)/de/guides/npc-list/page.tsx",
  "app/(vn)/vn/guides/npc-list/page.tsx",
].map((path) => [path, read(path)]);

const scopeDisclosures = [
  /not an exhaustive live-game database/i,
  /keine vollständige Live-Spiel-Datenbank/i,
  /không phải cơ sở dữ liệu trò chơi trực tiếp đầy đủ/i,
];

const authorizationDisclosures = [
  /site owner.*Game8.*authorized.*site reuse/i,
  /Game8.*autorisierte.*Wiederverwendung/i,
  /Game8.*được phép.*tái sử dụng/i,
];

test("NPC directories publish authorized visual snapshots without claiming live completeness", () => {
  pages.forEach(([path, page], index) => {
    assert.doesNotMatch(page, /robots:\s*\{\s*index:\s*false/, `${path} indexable`);
    assert.match(page, /2026-06-24/, `${path} snapshot date`);
    assert.match(page, scopeDisclosures[index], `${path} scope disclosure`);
    assert.match(page, authorizationDisclosures[index], `${path} authorization disclosure`);
    assert.match(page, /pins-old-friends\.json/, `${path} dated pin snapshot`);
    assert.match(page, /NpcMapClient/, `${path} interactive snapshot map`);
    assert.doesNotMatch(page, /<NpcImagePreview/, `${path} must not SSR 127 image viewers`);
    assert.match(page, /npcDetailsSorted\.map/, `${path} directory`);

    assert.doesNotMatch(
      page,
      /all current map pins|alle aktuellen Kartenmarkierungen|tất cả ghim bản đồ hiện tại|weekly gifts accumulate/i,
      `${path} current/exhaustive overclaim`,
    );
  });
});

test("authorized NPC media and all three reviewed locale routes ship in the sitemap", async () => {
  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /path:\s*"\/guides\/npc-list"/, "English/base sitemap entry");
  assert.match(sitemap, /path:\s*entry\.path === "\/" \? "\/de" : `\/de\$\{entry\.path\}`/, "German locale expansion");
  assert.match(sitemap, /path:\s*"\/vn\/guides\/npc-list"/, "Vietnamese sitemap entry");
  assert.equal(
    (sitemap.match(/npc-list[^\n]*lastModified:\s*new Date\("2026-08-29"\)/g) ?? []).length,
    2,
    "base and Vietnamese sitemap entries use the page modification date",
  );

  // Check sample NPC assets - they may be on CDN or local
  const sampleAssets = ["map.gif", "pins-old-friends.json", "hero.png", "zhou-yihang.png", "feng-rusong.png"];
  for (const asset of sampleAssets) {
    const publicPath = `public/guides/npc-list/${asset}`;
    const shipped = await isMediaShipped(publicPath);
    assert.equal(shipped, true, `${asset} should be shipped (local or CDN)`);
  }
});

test("NPC pages separate the dated fact snapshot from the page modification date", () => {
  pages.forEach(([path, page]) => {
    assert.match(page, /2026-06-24/, `${path} keeps the factual snapshot date`);
    assert.match(page, /dateModified:\s*"2026-08-29"/, `${path} publishes the page modification date`);
  });
});

test("every rendered NPC name resolves to a checked-in local portrait", async () => {
  const englishPage = pages[0][1];
  const names = [...englishPage.matchAll(/\{ name: "([^"]+)"/g)].map((match) => match[1]);
  assert.ok(names.length > 100, "expected the full editorial snapshot");

  for (const name of names) {
    const slug = name
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const publicPath = `public/guides/npc-list/${slug}.png`;
    const shipped = await isMediaShipped(publicPath);
    assert.equal(shipped, true, `${name} portrait should be shipped (local or CDN)`);
  }
});

test("portrait thumbnails defer the 35 MiB gallery payload", () => {
  const preview = read("app/(en)/guides/npc-list/NpcImagePreview.tsx");
  const explorer = read("app/(en)/guides/npc-list/NpcMapClient.tsx");
  assert.match(preview, /loading="lazy"/);
  assert.match(preview, /decoding="async"/);
  assert.match(explorer, /<NpcImagePreview/);
  assert.match(explorer, /showMap/);
  assert.doesNotMatch(explorer, /getPosition|object-cover/);
});

test("NPC visual explorer exposes labelled controls and a keyboard-aware dialog", () => {
  const preview = read("app/(en)/guides/npc-list/NpcImagePreview.tsx");
  const explorer = read("app/(en)/guides/npc-list/NpcMapClient.tsx");
  assert.match(explorer, /htmlFor=/);
  assert.match(explorer, /aria-live=/);
  assert.match(preview, /role="dialog"/);
  assert.match(preview, /aria-modal="true"/);
  assert.match(preview, /triggerRef/);
  assert.match(preview, /dialogRef/);
});
