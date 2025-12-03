'use client';

import { useEffect, useMemo, useState } from "react";

type LanguageSite = {
  countryCodes: string[];
  path: string;
  label: string;
  message: string;
  cta: string;
  stayCta: string;
};

const LANGUAGE_SITES: LanguageSite[] = [
  {
    countryCodes: ["VN"],
    path: "/vn",
    label: "Tiếng Việt",
    message: "Chúng tôi đã có phiên bản Tiếng Việt cho khu vực của bạn.",
    cta: "Chuyển sang Tiếng Việt",
    stayCta: "Tiếp tục dùng bản hiện tại",
  },
];

const STORAGE_KEY = "wwm-lang-choice";

export function LanguageSwitchPrompt({ geoApiEndpoint }: { geoApiEndpoint?: string }) {
  const [promptSite, setPromptSite] = useState<LanguageSite | null>(null);
  const geoEndpoint = useMemo(
    () => geoApiEndpoint || process.env.NEXT_PUBLIC_GEOIP_ENDPOINT || "https://ipapi.co/json/",
    [geoApiEndpoint]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedChoice = window.localStorage.getItem(STORAGE_KEY);
    if (storedChoice === "dismiss") return;
    if (storedChoice?.startsWith("switched:")) return;

    const currentPath = window.location.pathname;
    const alreadyOnSupportedSite = LANGUAGE_SITES.some(
      (site) => currentPath === site.path || currentPath.startsWith(`${site.path}/`)
    );
    if (alreadyOnSupportedSite) return;

    const controller = new AbortController();

    const fetchCountry = async () => {
      try {
        const response = await fetch(geoEndpoint, { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        const countryCodeRaw =
          data?.country_code || data?.countryCode || data?.country || data?.countryCodeIso2;
        const countryCode = typeof countryCodeRaw === "string" ? countryCodeRaw.toUpperCase() : "";
        if (!countryCode) return;

        const site = LANGUAGE_SITES.find((entry) =>
          entry.countryCodes.some((code) => code.toUpperCase() === countryCode)
        );
        if (!site) return;

        const currentPath = window.location.pathname;
        if (currentPath === site.path || currentPath.startsWith(`${site.path}/`)) return;

        setPromptSite(site);
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
      }
    };

    fetchCountry();

    return () => controller.abort();
  }, [geoEndpoint]);

  if (!promptSite) {
    return null;
  }

  const handleSwitch = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, `switched:${promptSite.path}`);
    window.location.assign(promptSite.path);
  };

  const handleStay = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, "dismiss");
    setPromptSite(null);
  };

  return (
    <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/60 p-4 text-sm text-emerald-50 shadow-lg shadow-emerald-900/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-emerald-100">Đã hỗ trợ {promptSite.label}</p>
          <p className="text-xs text-emerald-100/80">{promptSite.message}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleSwitch}
            className="inline-flex items-center justify-center rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-md shadow-emerald-900/30 transition hover:bg-emerald-400"
          >
            {promptSite.cta}
          </button>
          <button
            type="button"
            onClick={handleStay}
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:border-emerald-300/70 hover:text-emerald-100"
          >
            {promptSite.stayCta}
          </button>
        </div>
      </div>
    </div>
  );
}
