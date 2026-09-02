"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_STORAGE_KEY,
  DEFAULT_CONSENT,
  parseStoredConsent,
  serializeConsent,
} from "@/lib/consent.mjs";

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
};

const SERVER_SNAPSHOT = "__server__";
const MISSING_SNAPSHOT = "__missing__";
let inMemorySnapshot: string | null = null;

function getSnapshot() {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored !== null) {
      inMemorySnapshot = stored;
      return stored;
    }
  } catch {
    // Browser storage unavailable; fall back to in-memory default.
  }
  return inMemorySnapshot ?? MISSING_SNAPSHOT;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

function subscribe(onStoreChange: () => void) {
  const handleConsentChange = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== CONSENT_STORAGE_KEY) return;
    inMemorySnapshot = event.newValue;
    onStoreChange();
  };

  window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function useConsentPreferences() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isReady = snapshot !== SERVER_SNAPSHOT;
  const consent = useMemo<ConsentPreferences | null>(() => {
    if (snapshot === SERVER_SNAPSHOT) return null;
    if (snapshot === MISSING_SNAPSHOT) {
      return { necessary: true, analytics: true, ads: true };
    }
    const parsed = parseStoredConsent(snapshot);
    return { necessary: true, analytics: parsed.analytics === true, ads: parsed.ads === true };
  }, [snapshot]);

  const saveConsent = useCallback(
    (next: Pick<ConsentPreferences, "analytics" | "ads">) => {
      const normalized: ConsentPreferences = {
        necessary: true,
        analytics: next.analytics === true,
        ads: next.ads === true,
      };
      inMemorySnapshot = serializeConsent(normalized);
      try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, inMemorySnapshot);
      } catch {
        // The in-memory choice still applies for this tab and session.
      }
      window.dispatchEvent(
        new CustomEvent<ConsentPreferences>(CONSENT_CHANGE_EVENT, {
          detail: normalized,
        }),
      );
    },
    [],
  );

  return { consent, isReady, saveConsent };
}
