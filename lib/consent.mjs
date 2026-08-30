export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "wwm:privacy-consent";
export const CONSENT_CHANGE_EVENT = "wwm:consent-change";

export const DEFAULT_CONSENT = Object.freeze({
  necessary: true,
  analytics: false,
  ads: false,
});

/**
 * @param {string | null} raw
 * @returns {{necessary: true, analytics: boolean, ads: boolean} | null}
 */
export function parseStoredConsent(raw) {
  if (!raw) return null;

  try {
    const value = JSON.parse(raw);
    if (
      !value ||
      value.version !== CONSENT_VERSION ||
      typeof value.analytics !== "boolean" ||
      typeof value.ads !== "boolean"
    ) {
      return null;
    }

    return {
      necessary: true,
      analytics: value.analytics,
      ads: value.ads,
    };
  } catch {
    return null;
  }
}

/**
 * @param {{analytics: boolean, ads: boolean}} consent
 */
export function serializeConsent(consent) {
  return JSON.stringify({
    version: CONSENT_VERSION,
    necessary: true,
    analytics: consent.analytics === true,
    ads: consent.ads === true,
    updatedAt: new Date().toISOString(),
  });
}

/**
 * @param {Storage} storage
 */
export function readConsent(storage) {
  return parseStoredConsent(storage.getItem(CONSENT_STORAGE_KEY));
}

/**
 * @param {{analytics: boolean, ads: boolean}} consent
 * @param {Storage} storage
 */
export function persistConsent(consent, storage) {
  const normalized = {
    necessary: true,
    analytics: consent.analytics === true,
    ads: consent.ads === true,
  };

  storage.setItem(CONSENT_STORAGE_KEY, serializeConsent(normalized));
  return normalized;
}
