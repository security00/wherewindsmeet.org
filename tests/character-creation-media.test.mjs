import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import test from "node:test";

const guideSource = readFileSync(
  new URL("../components/guides/GrowthOpportunityGuidePage.tsx", import.meta.url),
  "utf8",
);

const characterBranch = guideSource.slice(
  guideSource.indexOf('if (kind === "character-codes")'),
  guideSource.indexOf('if (kind === "commerce-coins")'),
);

test("character-code guide uses authorized Faceologist captures only as Appearance navigation context", () => {
  assert.match(characterBranch, /step-1-open-appearance\.webp/);
  assert.match(characterBranch, /step-2-switch-appearance-tab\.webp/);
  assert.doesNotMatch(characterBranch, /step-3-edit-face\.webp/);
  assert.doesNotMatch(characterBranch, /step-4-choose-preset\.webp/);
  assert.doesNotMatch(characterBranch, /step-5-preview\.webp/);
  assert.match(characterBranch, /<LightboxGallery/);
  assert.match(characterBranch, /Publisher:\s*AllThings\.How/);
  assert.match(characterBranch, /Reuse authorization confirmed by site owner 2026-08-29\./);

  assert.match(
    guideSource,
    /did not show the text-code field or QR-import control/i,
  );
  assert.match(guideSource, /No verified current import-dialog screenshot is published/i);
  assert.match(guideSource, /navigation context/i);
});

test("character-code evidence distinguishes official format proof from a versioned walkthrough", () => {
  assert.match(
    characterBranch,
    /https:\/\/www\.wherewindsmeetgame\.com\/2026\/yq\/en\//,
  );
  assert.match(characterBranch, /PC Gamer \(November 2025 PC flow\)/);
  assert.match(characterBranch, /allthings\.how\/how-to-use-the-great-faceologist-event/i);
  assert.match(guideSource, /navigation context, not proof of the import control/i);
  assert.match(guideSource, /no verified current import-dialog screenshot/i);
});
