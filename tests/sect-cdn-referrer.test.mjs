import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { referrerPolicyForAssetSrc } from "../lib/cdn-referrer-policy.mjs";
import { isMediaShipped } from "./media-helper.mjs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("sect CDN art omits Referer so workers.dev previews are not hotlink-blocked", () => {
  assert.equal(
    referrerPolicyForAssetSrc("https://static.wherewindsmeet.org/sect/tianquan.png"),
    "no-referrer",
  );
  assert.equal(
    referrerPolicyForAssetSrc("https://static.wherewindsmeet.org/sect/mohist-hill.jpg"),
    "no-referrer",
  );
  assert.equal(
    referrerPolicyForAssetSrc("//static.wherewindsmeet.org/sect/qingxi.png"),
    "no-referrer",
  );
  assert.equal(
    referrerPolicyForAssetSrc("https://static.wherewindsmeet.org/background/bg4.webp"),
    undefined,
  );
  assert.equal(
    referrerPolicyForAssetSrc(
      "https://r.res.easebar.com/pic/20261014/0d79a781-0f5d-4530-a654-ddd7882aa3b5.png",
    ),
    undefined,
  );
  // Relative paths are resolved to the CDN before this helper runs.
  assert.equal(referrerPolicyForAssetSrc("/sect/tianquan.png"), undefined);
});

test("CDN probes omit a foreign Referer and still accept the production origin", async () => {
  const helper = read("tests/media-helper.mjs");
  assert.match(helper, /referrerPolicy: "no-referrer"/);
  assert.match(helper, /https:\/\/wherewindsmeet\.org\//);

  const blocked = await fetch("https://static.wherewindsmeet.org/sect/moshandao.png", {
    method: "HEAD",
    referrer: "https://github.com/security00/wherewindsmeet.org",
    referrerPolicy: "unsafe-url",
  });
  assert.equal(blocked.status, 403, "a GitHub Referer is hotlink-blocked");
  await blocked.body?.cancel?.();

  assert.equal(await isMediaShipped("public/sect/moshandao.png"), true);
  assert.equal(await isMediaShipped("public/guides/npc-list/zhang-dazhuang.png"), true);
});

test("CdnImage forwards the sect hotlink referrer policy onto next/image", () => {
  const source = read("components/CdnImage.tsx");
  assert.match(source, /referrerPolicyForAssetSrc/);
  assert.match(source, /referrerPolicy=\{policy\}/);
  assert.doesNotMatch(source, /<img/);
});
