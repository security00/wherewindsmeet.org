import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const pages = {
  dePatch: read("app/(de)/de/guides/patch-notes/page.tsx"),
  viPatch: read("app/(vn)/vn/guides/patch-notes/page.tsx"),
  deBosses: read("app/(de)/de/guides/bosses/page.tsx"),
  viBosses: read("app/(vn)/vn/guides/bosses/page.tsx"),
};

test("the current German guide copy uses German orthography instead of ASCII stand-ins", () => {
  const german = `${pages.dePatch}\n${pages.deBosses}`;

  assert.doesNotMatch(
    german,
    /\b(?:Aeltere|aeltere|Aenderung(?:en)?|Ankuendigung|bestaetigt|fuegte|fuer|Guenstigerer|geprueft|Gepruefter|koennen|naechsten|noetig|Pruefe|pruefe|Ratschlaege|Rueckblick|Rueckkehrer|staerkeres|Uebersicht|ueberlesen|veraendern|verfuegbar|veroeffentlicht|vollstaendige)\b/,
  );
  assert.match(german, /überprüft/);
  assert.match(german, /Übersicht/);
  assert.match(german, /für/);
});

test("the current Vietnamese guide copy uses natural accented Vietnamese", () => {
  const vietnamese = `${pages.viPatch}\n${pages.viBosses}`;

  assert.doesNotMatch(
    vietnamese,
    /\b(?:Bat dau|Ban cap nhat|Cap nhat|Cac|Chi dung|Dung|Khong|Kiem tra|Lich su|Moc|Nguoi choi|Nguon chinh thuc|Nen|Thong tin|Tong quan|Trang chu|tieng Viet|da kiem tra|da tuyen chon|duoc|hien tai|moi nhat|nguoi choi|va cac|va dungeon)\b/,
  );
  assert.match(vietnamese, /Cập nhật/);
  assert.match(vietnamese, /Tổng quan/);
  assert.match(vietnamese, /người chơi/);
});

test("locale copy edits preserve the Version 2.1 freshness boundary and official sources", () => {
  for (const source of Object.values(pages)) {
    assert.match(source, /Version 2\.1/);
    assert.match(source, /2026-08-26/);
  }

  for (const source of [pages.dePatch, pages.viPatch]) {
    assert.match(source, /https:\/\/www\.wherewindsmeetgame\.com\/news\/official\/827update\.html/);
    assert.match(
      source,
      /https:\/\/www\.wherewindsmeetgame\.com\/news\/official\/CloudedRevelationPatchNotes\.html/,
    );
  }

  for (const source of [pages.deBosses, pages.viBosses]) {
    assert.match(source, /https:\/\/www\.wherewindsmeetgame\.com\/news\/official\/529update\.html/);
    assert.match(source, /https:\/\/www\.wherewindsmeetgame\.com\/news\/official\/527update\.html/);
    assert.match(source, /https:\/\/www\.wherewindsmeetgame\.com\/news\/official\/515update\.html/);
  }
});
