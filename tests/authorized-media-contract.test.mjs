import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const manifestPath = resolve(root, "lib/mediaAuthorization.json");

const filesBelow = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? filesBelow(path) : [path];
  });

test("authorized third-party media has an explicit, auditable owner-confirmation contract", () => {
  assert.equal(existsSync(manifestPath), true, "missing media authorization manifest");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

  assert.equal(manifest.confirmedAt, "2026-08-29");
  assert.equal(manifest.authorizationBasis, "site-owner-confirmed");
  assert.equal(manifest.independentLegalDocumentReviewed, false);

  const byPublisher = new Map(manifest.publishers.map((entry) => [entry.publisher, entry]));
  assert.ok(
    byPublisher.get("Game8")?.assetPrefixes.includes("guides/npc-list"),
    "the restored NPC library must be inside the confirmed Game8 scope",
  );
  assert.ok(
    byPublisher.get("IGN")?.assetPrefixes.includes("guides/wall-puzzle/ign"),
    "the Wall Puzzle IGN gallery must be inside its confirmed scope",
  );
  for (const publisher of ["Game8", "AllThings", "Reddit", "GameRant", "IGN"]) {
    const entry = byPublisher.get(publisher);
    assert.ok(entry, `missing ${publisher} authorization record`);
    assert.equal(entry.status, "authorized-for-site-reuse");
    assert.equal(entry.confirmedAt, manifest.confirmedAt);
    assert.ok(entry.sourceDomains.length > 0, `${publisher} needs a source domain`);
    assert.ok(
      entry.assetPrefixes.length + entry.assetPaths.length > 0,
      `${publisher} needs an explicit asset scope`,
    );

    for (const prefix of entry.assetPrefixes) {
      if (publisher !== "IGN") {
        assert.doesNotMatch(prefix, /\/ign(?:\/|$)/i, "IGN media must stay inside the IGN scope");
      }
      const directory = resolve(root, "public", prefix.replace(/^\//, ""));
      assert.equal(existsSync(directory), true, `missing authorized directory ${prefix}`);
      assert.equal(statSync(directory).isDirectory(), true, `${prefix} must be a directory`);
      assert.ok(filesBelow(directory).length > 0, `${prefix} must contain restored media`);
    }

    for (const assetPath of entry.assetPaths) {
      if (publisher !== "IGN") {
        assert.doesNotMatch(assetPath, /\/ign(?:\/|$)/i, "IGN media must stay inside the IGN scope");
      }
      assert.equal(
        existsSync(resolve(root, "public", assetPath.replace(/^\//, ""))),
        true,
        `missing authorized asset ${assetPath}`,
      );
    }
  }
});
