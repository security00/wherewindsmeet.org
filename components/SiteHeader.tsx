'use client';

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  buildLocalizedPath,
  getAvailableLocales,
  LOCALE_CONFIG,
  stripLocalePrefix,
} from "@/i18n/routing.mjs";

type LocaleCode = "en" | "vi" | "de";

const NAV_ITEMS = [
  { path: "/", key: "home" },
  { path: "/guides", key: "guides" },
  { path: "/tools", key: "tools" },
  { path: "/guides/bosses", key: "bosses" },
  { path: "/guides/weapons", key: "weapons" },
  { path: "/guides/martial-arts-weapons", key: "martialArts" },
  { path: "/guides/tier-list", key: "tierList" },
  { path: "/guides/builds", key: "builds" },
  { path: "/guides/codes", key: "codes" },
  { path: "/guides/items", key: "items" },
  { path: "/news", key: "news" },
  { path: "/videos", key: "videos" },
] as const;

const asLocale = (value: string): LocaleCode =>
  value === "vi" || value === "de" ? value : "en";

export function SiteHeader() {
  const t = useTranslations("siteHeader");
  const locale = asLocale(useLocale());
  const pathname = usePathname();
  const basePath = stripLocalePrefix(pathname || "/");
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  const navWithActive = useMemo(
    () =>
      NAV_ITEMS.map((item) => {
        const href = buildLocalizedPath(item.path, locale) || item.path;
        const active =
          item.path === "/"
            ? basePath === "/"
            : basePath === item.path || basePath.startsWith(`${item.path}/`);
        return { ...item, href, active };
      }),
    [basePath, locale],
  );

  const languageTargets = useMemo(
    () =>
      (getAvailableLocales(basePath) as LocaleCode[]).map((code) => ({
        code,
        href: buildLocalizedPath(basePath, code) || "/",
        active: code === locale,
        label: LOCALE_CONFIG[code].label,
        flag: LOCALE_CONFIG[code].flag,
      })),
    [basePath, locale],
  );

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isLangMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangMenuOpen]);

  const currentLanguage = LOCALE_CONFIG[locale];
  const homeHref = buildLocalizedPath("/", locale) || "/";

  return (
    <header className="relative z-50 border-b border-slate-700/45 bg-slate-950/42 shadow-sm shadow-slate-950/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={homeHref} className="flex items-center gap-2" aria-label={t("homeAria")}>
          <Image
            src="/design/logo.webp"
            alt="Where Winds Meet logo"
            width={32}
            height={32}
            unoptimized
            className="h-8 w-8 rounded-full shadow-lg shadow-emerald-500/40"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-50">
              Where Winds Meet
            </span>
            <span className="text-xs text-slate-400">{t("brandSubtitle")}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 sm:flex">
          <nav className="flex gap-6 text-sm font-medium text-slate-200">
            {navWithActive.map((item) => (
              <Link
                key={item.path}
                href={item.href}
                className={`transition-colors hover:text-emerald-400 ${
                  item.active ? "text-emerald-300" : ""
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {languageTargets.length > 1 ? (
            <div className="relative" ref={languageMenuRef}>
              <button
                type="button"
                onClick={() => setIsLangMenuOpen((open) => !open)}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-100 shadow-sm transition hover:border-emerald-400/70 hover:text-emerald-50"
                aria-label={t("switchLanguageAria")}
                aria-expanded={isLangMenuOpen}
              >
                <span className="text-lg leading-none">{currentLanguage.flag}</span>
                <span>{currentLanguage.label}</span>
                <span
                  className={`ml-1 inline-block h-2 w-2 rotate-45 border-b border-r border-emerald-300 transition ${
                    isLangMenuOpen ? "translate-y-[1px] rotate-[225deg]" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isLangMenuOpen ? (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/82 shadow-xl shadow-slate-950/50 backdrop-blur-md">
                  <div className="divide-y divide-slate-800/80">
                    {languageTargets.map((language) => (
                      <Link
                        key={language.code}
                        href={language.href}
                        onClick={() => setIsLangMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm transition ${
                          language.active
                            ? "bg-emerald-500/10 text-emerald-100"
                            : "text-slate-100 hover:bg-slate-800/70 hover:text-emerald-50"
                        }`}
                      >
                        <span className="text-lg leading-none">{language.flag}</span>
                        <span className="flex-1">{language.label}</span>
                        {language.active ? (
                          <span className="text-[11px] uppercase tracking-wide text-emerald-300">
                            {t("activeLabel")}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center rounded-lg border border-slate-700/60 bg-slate-900/55 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm shadow-slate-900/35 backdrop-blur-md transition sm:hidden"
          aria-label={t("openMenuAria")}
        >
          <span className="sr-only">{t("openMenuSr")}</span>
          <span className="flex flex-col gap-[5px]" aria-hidden>
            <span className="h-0.5 w-5 rounded-full bg-slate-100" />
            <span className="h-0.5 w-5 rounded-full bg-slate-100" />
            <span className="h-0.5 w-5 rounded-full bg-slate-100" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] sm:hidden">
          <button
            type="button"
            aria-label={t("closeMenuAria")}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-3 top-3 z-10">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-700/70 bg-slate-900/75 p-2 text-slate-100 shadow-lg shadow-slate-950/45 backdrop-blur-md"
              aria-label={t("closeNavigationAria")}
            >
              ✕
            </button>
          </div>
          <div className="absolute inset-x-3 top-16 z-10 rounded-2xl border border-slate-700/70 bg-slate-900/82 p-4 shadow-2xl shadow-slate-950/55 backdrop-blur-md">
            <nav className="flex flex-col divide-y divide-slate-800/80">
              {navWithActive.map((item) => (
                <Link
                  key={item.path}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3 text-sm font-semibold transition ${
                    item.active ? "text-emerald-200" : "text-slate-100 hover:text-emerald-200"
                  }`}
                >
                  <span>{t(`nav.${item.key}`)}</span>
                  {item.active ? (
                    <span className="text-[11px] text-emerald-300">{t("activeLabel")}</span>
                  ) : null}
                </Link>
              ))}
            </nav>
            {languageTargets.length > 1 ? (
              <div className="mt-4 rounded-2xl border border-slate-700/70 bg-slate-900/62 p-3 backdrop-blur-md">
                <div className="space-y-2">
                  {languageTargets.map((language) => (
                    <Link
                      key={language.code}
                      href={language.href}
                      onClick={() => {
                        setIsOpen(false);
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                        language.active
                          ? "bg-emerald-500/10 text-emerald-100"
                          : "text-slate-100 hover:bg-slate-800/80 hover:text-emerald-50"
                      }`}
                    >
                      <span className="text-lg leading-none">{language.flag}</span>
                      <span className="flex-1">{language.label}</span>
                      {language.active ? (
                        <span className="text-[11px] uppercase tracking-wide text-emerald-300">
                          {t("activeLabel")}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
