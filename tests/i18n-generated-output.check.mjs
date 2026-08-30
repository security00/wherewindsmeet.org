import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = resolve(root, "out");

const readOutput = (path) => {
  const target = resolve(out, path);
  assert.equal(existsSync(target), true, `missing generated output: ${target}; run npm run build:static first`);
  return readFileSync(target, "utf8");
};

test("generated sitemap excludes locale variants that have no reviewed translation", () => {
  const sitemap = readOutput("sitemap.xml");
  for (const locale of ["de", "vn"]) {
    assert.doesNotMatch(sitemap, new RegExp(`/${locale}/guides/imperial-decree`));
    assert.doesNotMatch(sitemap, new RegExp(`/${locale}/guides/travel-permit`));
  }
  assert.doesNotMatch(sitemap, /\/vn\/guides\/one-leaf-one-life/);
  assert.doesNotMatch(sitemap, /\/vn\/guides\/unholy-prophecy/);
});

test("generated hreflang advertises only real translations", () => {
  const englishOnly = readOutput("guides/imperial-decree.html");
  assert.match(englishOnly, /hrefLang\\?"?:\\?"en-US/);
  assert.doesNotMatch(englishOnly, /hrefLang\\?"?:\\?"de-DE/);
  assert.doesNotMatch(englishOnly, /hrefLang\\?"?:\\?"vi-VN/);

  const translated = readOutput("guides/bosses.html");
  assert.match(translated, /hrefLang\\?"?:\\?"de-DE/);
  assert.match(translated, /hrefLang\\?"?:\\?"vi-VN/);
});
