import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("NPC directory presents a dated, non-exhaustive editorial snapshot", () => {
  const page = read("app/(en)/guides/npc-list/page.tsx");

  assert.doesNotMatch(page, /All interactable NPCs/i);
  assert.doesNotMatch(page, /all current map pins/i);
  assert.doesNotMatch(page, /weekly gifts accumulate/i);
  assert.match(page, /not an exhaustive live-game database/i);
  assert.match(page, /snapshot/i);
});

test("community Spear examples avoid unverified superlatives and guarantees", () => {
  const page = read("app/(en)/guides/weapons/weapon-detail.tsx");

  assert.match(page, /community-reported starting points/i);
  assert.match(page, /verify names, effects, and balance in your current client/i);
  assert.doesNotMatch(page, /one of the highest ceilings in the game/i);
  assert.doesNotMatch(page, /near-unkillable/i);
  assert.doesNotMatch(page, /PVE [“\"]unkillable[”\"] tank/i);
});

test("Feng Ruzhi timing remains a qualitative community report", () => {
  const page = read("app/(en)/guides/bosses/feng-ruzhi/page.tsx");

  assert.doesNotMatch(page, /(?:≈|~|about |roughly )?15\s*(?:seconds|s\b)/i);
  assert.match(page, /community-reported short recovery window/i);
  assert.match(page, /verify the current build/i);
});
