import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);
const read = (path) => readFileSync(projectFile(path), "utf8");

const authorizationRecord = /Reuse authorization confirmed by site owner 2026-08-29\./;

const mistveilAssets = [
  "Screenshot-2026-01-10-100403-1.png",
  "image-1048-1.webp",
  "image-1049-1-1.webp",
  "image-1050.webp",
  "image-1051-1.webp",
  "image-1052-1.webp",
  "image-1053-1.webp",
  "image-1054-1.webp",
  "image-1055-1.webp",
  "image-1056-1.webp",
  "image-1057-1.webp",
  "image-1058-1.webp",
  "image-1059-1.webp",
  "image-1060-1.webp",
  "image-1061-1.webp",
  "image-1062-1.webp",
];

const desktopWidgetAssets = [
  "reddit-daily-assistant-widget.png",
  "reddit-mobile-launch-region.png",
  "reddit-widget-region-availability.png",
  "reddit-widget-screenshot.jpeg",
];

test("owner-authorized AllThings and Reddit media is restored from the tracked archive", () => {
  for (const asset of mistveilAssets) {
    assert.equal(
      existsSync(projectFile(`public/guides/mistveil-city/allthings/${asset}`)),
      true,
      `missing Mistveil asset: ${asset}`,
    );
  }
  for (const asset of desktopWidgetAssets) {
    assert.equal(
      existsSync(projectFile(`public/guides/desktop-widget/${asset}`)),
      true,
      `missing desktop-widget asset: ${asset}`,
    );
  }
});

test("Mistveil City shows the authorized AllThings gallery with publisher, captions, and historical scope", () => {
  const componentPath = "components/guides/MistveilCityAuthorizedMedia.tsx";
  assert.equal(existsSync(projectFile(componentPath)), true, "missing shared Mistveil media component");

  const component = read(componentPath);
  const pages = {
    en: read("app/(en)/guides/mistveil-city/page.tsx"),
    de: read("app/(de)/de/guides/mistveil-city/page.tsx"),
    vi: read("app/(vn)/vn/guides/mistveil-city/page.tsx"),
  };

  for (const [locale, page] of Object.entries(pages)) {
    assert.match(page, /MistveilCityAuthorizedMedia/, `${locale} media component`);
    assert.match(page, new RegExp(`locale="${locale}"`), `${locale} locale`);
    assert.match(page, authorizationRecord, `${locale} visible authorization record`);
    assert.match(page, /AllThings\.How/, `${locale} publisher attribution`);
    assert.match(page, /allthings\.how/i, `${locale} visible publisher source link`);
    assert.match(page, /walkthroughSections\.map/, `${locale} text walkthrough retained`);
    assert.match(page, /"@type": "FAQPage"/, `${locale} FAQ schema retained`);
    assert.match(page, /"@type": "BreadcrumbList"/, `${locale} breadcrumb schema retained`);
  }

  for (const asset of mistveilAssets) {
    assert.match(component, new RegExp(asset.replaceAll(".", "\\.")), asset);
  }
  assert.match(component, /<CdnImage/);
  assert.match(component, /alt=\{/);
  assert.match(component, /<figcaption/);
  assert.match(component, /historical|historisch|lịch sử/i);
  assert.match(component, /not current-build proof|kein Beleg für den aktuellen Build|không phải bằng chứng cho build hiện tại/i);
});

test("Desktop Widget shows all authorized Reddit captures as community evidence, not official documentation", () => {
  const componentPath = "components/guides/DesktopWidgetAuthorizedMedia.tsx";
  assert.equal(existsSync(projectFile(componentPath)), true, "missing shared desktop-widget media component");

  const component = read(componentPath);
  const pages = {
    en: read("app/(en)/guides/desktop-widget/page.tsx"),
    de: read("app/(de)/de/guides/desktop-widget/page.tsx"),
    vi: read("app/(vn)/vn/guides/desktop-widget/page.tsx"),
  };

  for (const [locale, page] of Object.entries(pages)) {
    assert.match(page, /DesktopWidgetAuthorizedMedia/, `${locale} media component`);
    assert.match(page, new RegExp(`locale="${locale}"`), `${locale} locale`);
    assert.match(page, authorizationRecord, `${locale} visible authorization record`);
    assert.match(page, /Publisher:\s*Reddit/, `${locale} publisher attribution`);
    assert.match(page, /reddit\.com\/r\/wherewindsmeet_/i, `${locale} originating discussion`);
    assert.match(page, /href=\{redditThreadUrl\}/, `${locale} visible Reddit link`);
    assert.match(page, /tools\/reset-timer/, `${locale} reset-timer link`);
    assert.match(page, /tools\/checklist/, `${locale} checklist link`);
  }

  for (const asset of desktopWidgetAssets) {
    assert.match(component, new RegExp(asset.replaceAll(".", "\\.")), asset);
  }
  assert.match(component, /<CdnImage/);
  assert.match(component, /alt=\{/);
  assert.match(component, /<figcaption/);
  assert.match(component, /community capture|Community-Aufnahme|ảnh chụp cộng đồng/i);
  assert.match(component, /not official|nicht offiziell|không phải tài liệu chính thức/i);
});
