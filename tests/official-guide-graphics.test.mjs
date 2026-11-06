import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("Hutuo and anniversary replace pending stills with local full-frame graphics", async () => {
  const hutuo = read("app/(en)/guides/hutuo/page.tsx");
  const anniversary = read("app/(en)/guides/anniversary/page.tsx");

  const figure = read("components/guides/OfficialGraphicFigure.tsx");
  for (const source of [hutuo, anniversary]) {
    assert.doesNotMatch(source, /MediaPlaceholder|Pending official still/);
    assert.doesNotMatch(source, /twimg\.com|pbs\.twimg/);
    assert.match(source, /OfficialGraphicFigure/);
    assert.match(source, /late November/);
  }
  assert.match(figure, /Open the full-size graphic/);

  assert.match(hutuo, /\/guides\/hutuo\/roadmap\.webp/);
  assert.match(hutuo, /2117934891497029783/);
  assert.match(hutuo, /not key art/i);
  assert.match(anniversary, /\/guides\/anniversary\/rewards\.webp/);
  assert.match(anniversary, /2117386268698943563/);
  assert.doesNotMatch(anniversary, /\$150/);

  const roadmap = await sharp(resolve(root, "public/guides/hutuo/roadmap.webp")).metadata();
  const rewards = await sharp(resolve(root, "public/guides/anniversary/rewards.webp")).metadata();
  assert.equal(roadmap.width, 1920);
  assert.equal(roadmap.height, 1414);
  assert.equal(rewards.width, 1920);
  assert.equal(rewards.height, 1080);
  assert.match(read("components/guides/OfficialGraphicFigure.tsx"), /h-auto w-full max-w-full/);
  assert.doesNotMatch(read("components/guides/OfficialGraphicFigure.tsx"), /object-cover/);
});
