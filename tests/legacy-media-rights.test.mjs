import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);
const read = (path) => readFileSync(projectFile(path), "utf8");

test("Qin Caiwei pages publish the owner-authorized AllThings capture with an explicit evidence boundary", () => {
  assert.equal(existsSync(projectFile("public/guides/qin-caiwei/hero.jpg")), true);

  const pages = {
    en: read("app/(en)/guides/qin-caiwei/page.tsx"),
    de: read("app/(de)/de/guides/qin-caiwei/page.tsx"),
    vi: read("app/(vn)/vn/guides/qin-caiwei/page.tsx"),
  };

  for (const [locale, source] of Object.entries(pages)) {
    assert.match(source, /\/guides\/qin-caiwei\/hero\.jpg/, `${locale} image`);
    assert.match(source, /<CdnImage/, `${locale} image component`);
    assert.match(source, /alt=/, `${locale} alt text`);
    assert.match(source, /<figcaption/, `${locale} caption`);
    assert.match(source, /Publisher:\s*AllThings\.How/, `${locale} publisher`);
    assert.match(source, /Reuse authorization confirmed by site owner 2026-08-29\./, `${locale} authorization`);
    assert.match(
      source,
      /not current-build proof|kein Beleg für den aktuellen Build|không phải bằng chứng cho build hiện tại/i,
      `${locale} evidence boundary`,
    );
  }
});
