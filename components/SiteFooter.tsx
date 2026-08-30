'use client';

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { buildLocalizedPath } from "@/i18n/routing.mjs";

type LocaleCode = "en" | "vi" | "de";

const FOOTER_LINKS = [
  { path: "/", key: "home" },
  { path: "/guides", key: "guides" },
  { path: "/tools", key: "tools" },
  { path: "/guides/bosses", key: "bosses" },
  { path: "/guides/weapons", key: "weapons" },
  { path: "/news", key: "news" },
  { path: "/videos", key: "videos" },
  { path: "/privacy", key: "privacy" },
  { path: "/terms", key: "terms" },
] as const;

const asLocale = (value: string): LocaleCode =>
  value === "vi" || value === "de" ? value : "en";

export function SiteFooter() {
  const t = useTranslations("siteFooter");
  const locale = asLocale(useLocale());

  return (
    <footer className="border-t border-slate-700/45 bg-slate-950/38 py-6 text-xs text-slate-300 shadow-sm shadow-slate-950/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>{t("description")}</p>
        <div className="flex flex-wrap items-center gap-3">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.path}
              href={buildLocalizedPath(item.path, locale) || item.path}
              className="whitespace-nowrap transition-colors hover:text-emerald-400"
            >
              {t(`links.${item.key}`)}
            </Link>
          ))}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="whitespace-nowrap transition-colors hover:text-emerald-400"
          >
            support@wherewindsmeet.org
          </a>
        </div>
      </div>
    </footer>
  );
}
