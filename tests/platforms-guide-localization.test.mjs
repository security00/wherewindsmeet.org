import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(
  new URL("../components/PlatformsGuidePage.tsx", import.meta.url),
  "utf8",
);

test("each locale owns translated platform cards and section chrome", () => {
  assert.doesNotMatch(source, /const sharedPlatforms/);
  assert.doesNotMatch(source, /platforms:\s*sharedPlatforms/);
  assert.match(source, /const englishPlatforms/);
  assert.match(source, /const vietnamesePlatforms/);
  assert.match(source, /const germanPlatforms/);
  assert.match(source, /platforms:\s*englishPlatforms/);
  assert.match(source, /platforms:\s*vietnamesePlatforms/);
  assert.match(source, /platforms:\s*germanPlatforms/);

  for (const field of [
    "heroAlt",
    "checkedPrefix",
    "platformKicker",
    "decisionKicker",
    "crossPlayKicker",
    "sourcesKicker",
    "faqKicker",
  ]) {
    assert.match(source, new RegExp(`\\b${field}: string`), `${field} must be locale-owned`);
    assert.match(source, new RegExp(`entry\\.${field}`), `${field} must be rendered`);
  }

  assert.match(source, /Nền tảng của Where Winds Meet/);
  assert.match(source, /Trả lời nhanh/);
  assert.match(source, /Geeignet für Tastatur\/Maus/);
  assert.match(source, /Entscheidungshilfe/);
  assert.doesNotMatch(source, />Platform answer</);
  assert.doesNotMatch(source, />Choice guide</);
  assert.doesNotMatch(source, />Sources</);
});

test("mobile store cards expose region-dependent status in every language", () => {
  assert.match(
    source,
    /statusKind:\s*"confirmed"\s*\|\s*"region-dependent"/,
  );
  assert.match(
    source,
    /statusLabels:\s*Record<PlatformStatus\["statusKind"\], string>/,
  );

  for (const name of ["englishPlatforms", "vietnamesePlatforms", "germanPlatforms"]) {
    const start = source.indexOf(`const ${name}`);
    const end = source.indexOf("\n];", start);
    assert.notEqual(start, -1, `${name} must exist`);
    assert.notEqual(end, -1, `${name} must be a complete platform array`);
    const block = source.slice(start, end);

    assert.equal(
      [...block.matchAll(/statusKind:\s*"confirmed"/g)].length,
      3,
      `${name} should confirm PC, PS5 and Xbox`,
    );
    assert.equal(
      [...block.matchAll(/statusKind:\s*"region-dependent"/g)].length,
      2,
      `${name} should qualify both mobile stores`,
    );
    assert.match(block, /name:\s*"iOS",\s*statusKind:\s*"region-dependent"/);
    assert.match(block, /name:\s*"Android",\s*statusKind:\s*"region-dependent"/);
  }

  assert.match(source, /confirmed:\s*"Confirmed"/);
  assert.match(source, /"region-dependent":\s*"Region-dependent · verify"/);
  assert.match(source, /confirmed:\s*"Đã xác nhận"/);
  assert.match(source, /"region-dependent":\s*"Tùy khu vực · cần kiểm tra"/);
  assert.match(source, /confirmed:\s*"Bestätigt"/);
  assert.match(source, /"region-dependent":\s*"Regionsabhängig · prüfen"/);
  assert.match(source, /data-status-kind=\{platform\.statusKind\}/);
  assert.match(source, /entry\.statusLabels\[platform\.statusKind\]/);
  assert.doesNotMatch(source, />\s*Confirmed\s*</);
});

test("VideoGame sameAs contains identity-equivalent pages while evidence stays visible", () => {
  assert.match(source, /const identityEquivalentUrls = \[/);
  assert.match(source, /sameAs:\s*identityEquivalentUrls/);
  assert.doesNotMatch(source, /sameAs:\s*officialSources\.map/);

  const start = source.indexOf("const identityEquivalentUrls = [");
  const end = source.indexOf("\n];", start);
  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  const sameAsBlock = source.slice(start, end);

  for (const identityKey of ["officialWebsite", "steam", "playStation", "googlePlay"]) {
    assert.match(sameAsBlock, new RegExp(`sourceUrls\\.${identityKey}`));
  }
  assert.doesNotMatch(
    sameAsBlock,
    /officialMobileDownload|xboxAnnouncement|xboxFaq|mobileLaunchPdf|\/news\/|\.pdf/,
  );

  for (const evidenceKey of ["xboxAnnouncement", "xboxFaq", "mobileLaunchPdf"]) {
    assert.match(source, new RegExp(`href: sourceUrls\\.${evidenceKey}`));
  }
  assert.match(source, /entry\.officialSources\.map/);
});

test("decision links fall back to the English owner when a locale route is unavailable", () => {
  assert.match(
    source,
    /import \{ buildLocalizedPath \} from "@\/i18n\/routing\.mjs"/,
  );
  assert.doesNotMatch(source, /function localizedPath\(/);
  assert.match(
    source,
    /href=\{buildLocalizedPath\(row\.href, language\) \?\? row\.href\}/,
  );
});
