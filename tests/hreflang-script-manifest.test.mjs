import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(
  new URL("../scripts/seo-hreflang-regression.cjs", import.meta.url),
  "utf8",
);

test("the live hreflang checker derives pages and alternates from the locale manifest", () => {
  assert.match(source, /import\(["']\.\.\/i18n\/routing\.mjs["']\)/);
  assert.match(source, /getAvailableLocales/);
  assert.match(source, /buildLocalizedPath/);
  assert.match(source, /LOCALE_CONFIG/);
  assert.doesNotMatch(
    source,
    /flatMap\(\(id\)\s*=>\s*\[\s*`\/guides\/bosses\/\$\{id\}`,\s*`\/de\/guides\/bosses/,
  );
  assert.doesNotMatch(source, /"vi-VN":\s*`\$\{base\}\/vn/);
  assert.doesNotMatch(source, /"de-DE":\s*`\$\{base\}\/de/);
});
