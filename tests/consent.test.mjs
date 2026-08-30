import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

test("consent state is opt-in, versioned, and rejects malformed stored values", async () => {
  const consent = await import("../lib/consent.mjs");

  assert.deepEqual(consent.DEFAULT_CONSENT, {
    necessary: true,
    analytics: false,
    ads: false,
  });
  assert.equal(consent.parseStoredConsent(null), null);
  assert.equal(consent.parseStoredConsent("not-json"), null);
  assert.equal(
    consent.parseStoredConsent(JSON.stringify({ version: 0, analytics: true, ads: true })),
    null,
  );
  assert.deepEqual(
    consent.parseStoredConsent(
      JSON.stringify({
        version: consent.CONSENT_VERSION,
        necessary: false,
        analytics: true,
        ads: false,
      }),
    ),
    { necessary: true, analytics: true, ads: false },
  );
});

test("analytics and AdSense load only after their explicit consent categories are enabled", () => {
  const analytics = readFileSync(resolve(root, "app/analytics.tsx"), "utf8");

  assert.match(analytics, /useConsentPreferences\(\)/);
  assert.match(analytics, /consent\?\.analytics\s*===\s*true/);
  assert.match(analytics, /consent\?\.ads\s*===\s*true/);
  assert.match(analytics, /id=["']ga4-loader["']/);
  assert.match(analytics, /id=["']plausible-script["']/);
  assert.match(analytics, /id=["']ms-clarity["']/);
  assert.match(analytics, /hasAdsConsent\s*\?/);
  assert.match(analytics, /id=["']adsense-loader["']/);
  assert.match(analytics, /pagead2\.googlesyndication\.com/);
  assert.match(analytics, /ca-pub-1548791648803369/);
});

test("the locale shell exposes a revocable three-category preference UI", () => {
  const layout = readFileSync(resolve(root, "components/LocaleRootLayout.tsx"), "utf8");
  const manager = readFileSync(resolve(root, "components/ConsentManager.tsx"), "utf8");

  assert.match(layout, /<ConsentManager\s*\/>/);
  assert.match(manager, /useTranslations\(["']consent["']\)/);
  assert.match(manager, /necessary/);
  assert.match(manager, /analytics/);
  assert.match(manager, /ads/);
  assert.match(manager, /saveConsent/);
  assert.match(manager, /openSettings/);
});

test("all locale packs contain the same complete consent UI contract", () => {
  const requiredKeys = [
    "title",
    "summary",
    "acceptAll",
    "rejectOptional",
    "customize",
    "settingsTitle",
    "settingsDescription",
    "necessaryLabel",
    "necessaryDescription",
    "analyticsLabel",
    "analyticsDescription",
    "adsLabel",
    "adsDescription",
    "save",
    "cancel",
    "openSettings",
    "privacyLink",
  ];

  for (const locale of ["en", "de", "vi"]) {
    const messages = JSON.parse(
      readFileSync(resolve(root, `i18n/messages/${locale}.json`), "utf8"),
    );
    assert.ok(messages.consent, `${locale} consent namespace is missing`);
    assert.deepEqual(Object.keys(messages.consent).sort(), requiredKeys.sort());
  }
});

test("privacy pages accurately disclose the consent-gated analytics and advertising providers", () => {
  for (const file of [
    "app/(en)/privacy/page.tsx",
    "app/(de)/de/privacy/page.tsx",
    "app/(vn)/vn/privacy/page.tsx",
  ]) {
    const page = readFileSync(resolve(root, file), "utf8");
    for (const provider of ["Google Analytics", "Microsoft Clarity", "Plausible", "Google AdSense"]) {
      assert.match(page, new RegExp(provider), `${file} must disclose ${provider}`);
    }
    assert.match(page, /consent|Einwilligung|đồng ý/i);
    assert.match(page, /localStorage/);
    assert.match(page, /advertising|Werbung|quảng cáo/i);
  }
});
