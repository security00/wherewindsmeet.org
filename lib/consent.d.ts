export interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
  ads: boolean;
}

export const CONSENT_VERSION: number;
export const CONSENT_STORAGE_KEY: string;
export const CONSENT_CHANGE_EVENT: string;
export const DEFAULT_CONSENT: Readonly<ConsentPreferences>;

export function parseStoredConsent(raw: string | null): ConsentPreferences | null;
export function serializeConsent(
  consent: Pick<ConsentPreferences, "analytics" | "ads">,
): string;
export function readConsent(storage: Storage): ConsentPreferences | null;
export function persistConsent(
  consent: Pick<ConsentPreferences, "analytics" | "ads">,
  storage: Storage,
): ConsentPreferences;
