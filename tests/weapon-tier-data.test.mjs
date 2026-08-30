import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const datasetUrl = new URL("../public/tier-list.json", import.meta.url);

async function loadDataset() {
  return JSON.parse(await readFile(datasetUrl, "utf8"));
}

test("publishes one versioned, sourced methodology for every ranking mode", async () => {
  const data = await loadDataset();

  assert.equal(data.schemaVersion, 2);
  assert.equal(data.meta.gameVersion, "Version 2.1");
  assert.match(data.meta.updatedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(data.meta.modes, ["roster", "pve", "pvp"]);
  assert.match(data.meta.methodology, /no letter or numeric rank/i);
  assert.ok(data.meta.provenance.length >= 2);
  assert.ok(data.meta.provenance.every((source) => source.url.startsWith("https://www.wherewindsmeetgame.com/")));
});

test("covers the complete official current roster, including Gauntlets", async () => {
  const data = await loadDataset();
  const ids = data.weaponCoverage.map((weapon) => weapon.id);

  assert.deepEqual(ids, [
    "dual-blades",
    "sword",
    "spear",
    "mo-blade",
    "fan",
    "umbrella",
    "rope-dart",
    "gauntlets",
  ]);
  assert.equal(new Set(ids).size, ids.length);

  const gauntlets = data.weaponCoverage.find((weapon) => weapon.id === "gauntlets");
  assert.equal(gauntlets.roster.status, "official-confirmed");
  assert.equal(gauntlets.guide.status, "planned");
  assert.ok(gauntlets.sourceIds.includes("official-hidden-mountain-dev-letter"));
});

test("does not publish unverified tier letters as current evidence", async () => {
  const data = await loadDataset();
  const serialized = JSON.stringify(data);

  for (const weapon of data.weaponCoverage) {
    assert.equal(weapon.pve.status, "needs-retest");
    assert.equal(weapon.pvp.status, "needs-retest");
    assert.equal("tier" in weapon, false);
    assert.equal("rank" in weapon, false);
  }

  assert.doesNotMatch(serialized, /"(?:vetRank|pveRank|pvpRank|rankOnStat|pathRank|totalPve|totalPvp)"/);
});

test("keeps provenance and guide coverage internally resolvable", async () => {
  const data = await loadDataset();
  const sourceIds = new Set(data.meta.provenance.map((source) => source.id));

  for (const weapon of data.weaponCoverage) {
    assert.ok(weapon.sourceIds.length > 0, `${weapon.id} has no source`);
    for (const sourceId of weapon.sourceIds) {
      assert.ok(sourceIds.has(sourceId), `${weapon.id} references missing source ${sourceId}`);
    }

    if (weapon.guide.status === "published") {
      assert.match(weapon.guide.href, new RegExp(`^/guides/weapons/${weapon.id}$`));
    } else {
      assert.equal(weapon.guide.href, null);
    }
  }
});
