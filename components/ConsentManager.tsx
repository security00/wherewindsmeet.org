"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useConsentPreferences } from "@/components/useConsentPreferences";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import type { LocaleCode } from "@/i18n/messages";

type DraftConsent = {
  analytics: boolean;
  ads: boolean;
};

const REJECTED_OPTIONAL: DraftConsent = { analytics: false, ads: false };
const ACCEPTED_ALL: DraftConsent = { analytics: true, ads: true };

export function ConsentManager() {
  const t = useTranslations("consent");
  const locale = useLocale() as LocaleCode;
  const { consent, isReady, saveConsent } = useConsentPreferences();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<DraftConsent>(REJECTED_OPTIONAL);

  const privacyHref = buildLocalizedPath("/privacy", locale) ?? "/privacy";
  const showBanner = isReady && consent === null && !isSettingsOpen;

  const openSettings = () => {
    setDraft({
      analytics: consent?.analytics ?? false,
      ads: consent?.ads ?? false,
    });
    setIsSettingsOpen(true);
  };

  const applyConsent = (next: DraftConsent) => {
    const changedExistingChoice =
      consent !== null &&
      (consent.analytics !== next.analytics || consent.ads !== next.ads);
    saveConsent(next);
    setIsSettingsOpen(false);
    // A reload cleanly tears down already-running vendor SDKs on withdrawal and
    // lets Next Script load a newly allowed SDK after a previous withdrawal.
    if (changedExistingChoice) window.location.reload();
  };

  useEffect(() => {
    if (!isSettingsOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSettingsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSettingsOpen]);

  if (!isReady) return null;

  return (
    <>
      {showBanner ? (
        <section
          aria-label={t("title")}
          className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-4xl rounded-2xl border border-emerald-400/30 bg-slate-950/95 p-5 shadow-2xl shadow-black/70 backdrop-blur sm:bottom-5 sm:p-6"
        >
          <h2 className="text-lg font-semibold text-slate-50">{t("title")}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            {t("summary")} {" "}
            <Link className="text-emerald-300 underline hover:text-emerald-200" href={privacyHref}>
              {t("privacyLink")}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              onClick={() => applyConsent(ACCEPTED_ALL)}
              type="button"
            >
              {t("acceptAll")}
            </button>
            <button
              className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-slate-400"
              onClick={() => applyConsent(REJECTED_OPTIONAL)}
              type="button"
            >
              {t("rejectOptional")}
            </button>
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-slate-800"
              onClick={openSettings}
              type="button"
            >
              {t("customize")}
            </button>
          </div>
        </section>
      ) : null}

      {consent !== null && !isSettingsOpen ? (
        <button
          className="fixed bottom-3 left-3 z-[70] rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-lg hover:border-emerald-400/50 hover:text-emerald-200"
          onClick={openSettings}
          type="button"
        >
          {t("openSettings")}
        </button>
      ) : null}

      {isSettingsOpen ? (
        <div
          aria-labelledby="privacy-settings-title"
          aria-modal="true"
          className="fixed inset-0 z-[90] grid place-items-center bg-black/75 p-4"
          role="dialog"
        >
          <section className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950 p-5 shadow-2xl sm:p-6">
            <h2 id="privacy-settings-title" className="text-xl font-semibold text-slate-50">
              {t("settingsTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {t("settingsDescription")}
            </p>

            <div className="mt-5 space-y-3">
              <ConsentOption
                checked
                description={t("necessaryDescription")}
                disabled
                label={t("necessaryLabel")}
                onChange={() => undefined}
              />
              <ConsentOption
                checked={draft.analytics}
                description={t("analyticsDescription")}
                label={t("analyticsLabel")}
                onChange={(analytics) => setDraft((current) => ({ ...current, analytics }))}
              />
              <ConsentOption
                checked={draft.ads}
                description={t("adsDescription")}
                label={t("adsLabel")}
                onChange={(ads) => setDraft((current) => ({ ...current, ads }))}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                onClick={() => applyConsent(draft)}
                type="button"
              >
                {t("save")}
              </button>
              <button
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-500"
                onClick={() => setIsSettingsOpen(false)}
                type="button"
              >
                {t("cancel")}
              </button>
              <Link className="ml-auto self-center text-sm text-emerald-300 underline" href={privacyHref}>
                {t("privacyLink")}
              </Link>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

function ConsentOption({
  checked,
  description,
  disabled = false,
  label,
  onChange,
}: {
  checked: boolean;
  description: string;
  disabled?: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-400">
      <input
        checked={checked}
        className="mt-1 size-4 accent-emerald-400"
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        type="checkbox"
      />
      <span>
        <span className="block text-sm font-semibold text-slate-100">{label}</span>
        <span className="mt-1 block text-xs leading-relaxed text-slate-400">{description}</span>
      </span>
    </label>
  );
}
