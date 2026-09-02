import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

test("consent state defaults to opted-in, versioned, and falls back to default for malformed values", async () => {
  const consent = await import("../lib/consent.mjs");

  assert.deepEqual(consent.DEFAULT_CONSENT, {
    necessary: true,
    analytics: true,
    ads: true,
  });
  assert.deepEqual(consent.parseStoredConsent(null), {
    necessary: true,
    analytics: true,
    ads: true,
  });
  assert.deepEqual(consent.parseStoredConsent("not-json"), {
    necessary: true,
    analytics: true,
    ads: true,
  });
  assert.deepEqual(
    consent.parseStoredConsent(JSON.stringify({ version: 0, analytics: true, ads: true })),
    { necessary: true, analytics: true, ads: true },
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

test("the locale shell does not render ConsentManager (no banner UI)", () => {
  const layout = readFileSync(resolve(root, "components/LocaleRootLayout.tsx"), "utf8");

  assert.doesNotMatch(layout, /<ConsentManager\s*\/>/);
  assert.doesNotMatch(layout, /ConsentManager/);
});


test("privacy pages disclose default-on analytics and advertising providers", () => {
  for (const file of [
    "app/(en)/privacy/page.tsx",
    "app/(de)/de/privacy/page.tsx",
    "app/(vn)/vn/privacy/page.tsx",
  ]) {
    const page = readFileSync(resolve(root, file), "utf8");
    for (const provider of ["Google Analytics", "Microsoft Clarity", "Plausible", "Google AdSense"]) {
      assert.match(page, new RegExp(provider), `${file} must disclose ${provider}`);
    }
    assert.match(page, /default|standardmäßig|mặc định/i, `${file} must mention default/enabled state`);
    assert.match(page, /advertising|Werbe|quảng cáo/i, `${file} must mention advertising`);
    assert.doesNotMatch(page, /Privacy settings.*button/i, `${file} must not reference Privacy settings button`);
    assert.doesNotMatch(page, /explicitly consent/i, `${file} must not claim opt-in requirement`);
  }
});
