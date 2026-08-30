'use client';

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { buildLocalizedPath, stripLocalePrefix } from "@/i18n/routing.mjs";

type SuggestedLocale = "vi" | "de";

type LanguageSite = {
  countryCodes: string[];
  locale: SuggestedLocale;
};

type PromptSite = LanguageSite & {
  targetPath: string;
};

const LANGUAGE_SITES: LanguageSite[] = [
  { countryCodes: ["VN"], locale: "vi" },
  { countryCodes: ["DE", "AT", "CH", "LI", "LU"], locale: "de" },
];

const STORAGE_KEY = "wwm-lang-choice";

export function LanguageSwitchPrompt({ geoApiEndpoint }: { geoApiEndpoint?: string }) {
  const t = useTranslations("languagePrompt");
  const locale = useLocale();
  const pathname = usePathname();
  const [promptSite, setPromptSite] = useState<PromptSite | null>(null);
  const geoEndpoint = useMemo(
    () => geoApiEndpoint || process.env.NEXT_PUBLIC_GEOIP_ENDPOINT || "",
    [geoApiEndpoint],
  );

  useEffect(() => {
    if (typeof window === "undefined" || locale !== "en" || !geoEndpoint) return;

    const storedChoice = window.localStorage.getItem(STORAGE_KEY);
    if (storedChoice === "dismiss" || storedChoice?.startsWith("switched:")) return;

    const controller = new AbortController();
    const basePath = stripLocalePrefix(pathname || window.location.pathname);

    const fetchCountry = async () => {
      try {
        const response = await fetch(geoEndpoint, { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        const countryCodeRaw =
          data?.country_code || data?.countryCode || data?.country || data?.countryCodeIso2;
        const countryCode = typeof countryCodeRaw === "string" ? countryCodeRaw.toUpperCase() : "";
        const site = LANGUAGE_SITES.find((entry) => entry.countryCodes.includes(countryCode));
        if (!site) return;

        const targetPath = buildLocalizedPath(basePath, site.locale);
        if (!targetPath) return;
        setPromptSite({ ...site, targetPath });
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
      }
    };

    const fallbackTimeoutId = window.setTimeout(fetchCountry, 1500);
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(
            () => {
              window.clearTimeout(fallbackTimeoutId);
              fetchCountry();
            },
            { timeout: 3000 },
          )
        : null;

    return () => {
      controller.abort();
      window.clearTimeout(fallbackTimeoutId);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [geoEndpoint, locale, pathname]);

  if (!promptSite) return null;

  const messageKey = `suggestions.${promptSite.locale}`;

  const handleSwitch = () => {
    window.localStorage.setItem(STORAGE_KEY, `switched:${promptSite.locale}`);
    window.location.assign(promptSite.targetPath);
  };

  const handleStay = () => {
    window.localStorage.setItem(STORAGE_KEY, "dismiss");
    setPromptSite(null);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[70] px-4 sm:bottom-6">
      <div
        role="dialog"
        aria-label={t("dialogAria")}
        className="pointer-events-auto mx-auto max-w-xl rounded-2xl border border-amber-400/50 bg-amber-50/10 p-4 text-sm text-amber-50 shadow-lg shadow-amber-900/30 backdrop-blur"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-base font-semibold text-amber-100">
              {t(`${messageKey}.available`)} {t(`${messageKey}.label`)}
            </p>
            <p className="text-xs text-amber-100/80">{t(`${messageKey}.message`)}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleSwitch}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-amber-950 shadow-md shadow-amber-900/30 transition hover:bg-amber-300"
            >
              {t(`${messageKey}.cta`)}
            </button>
            <button
              type="button"
              onClick={handleStay}
              className="inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-amber-100/10 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:border-amber-200/80 hover:text-amber-100"
            >
              {t(`${messageKey}.stayCta`)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
