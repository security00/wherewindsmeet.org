'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const defaultNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/guides/bosses", label: "Bosses" },
  { href: "/guides/weapons", label: "Weapons" },
  { href: "/guides/martial-arts-weapons", label: "Martial Arts" },
  { href: "/guides/tier-list", label: "Tier List" },
  { href: "/guides/builds", label: "Builds" },
  { href: "/guides/codes", label: "Codes" },
  { href: "/guides/items", label: "Items" },
  { href: "/news", label: "News" },
];

const vnNavLinks: NavLink[] = [
  { href: "/vn", label: "Trang chủ" },
  { href: "/vn/guides", label: "Hướng dẫn" },
  { href: "/vn/guides/bosses", label: "Boss" },
  { href: "/vn/guides/weapons", label: "Vũ khí" },
  { href: "/vn/guides/martial-arts-weapons", label: "Võ học" },
  { href: "/vn/guides/tier-list", label: "Tier List" },
  { href: "/vn/guides/builds", label: "Builds" },
  { href: "/vn/guides/codes", label: "Code" },
  { href: "/vn/guides/items", label: "Vật phẩm" },
  { href: "/vn/news", label: "Tin tức" },
];

const defaultBrandSubtitle = "Guides · Tier List · Codes";
const vnBrandSubtitle = "Hướng dẫn · Xếp hạng · Mã quà";

type LanguageOption = {
  code: string;
  label: string;
  flag: string;
  prefix: string;
};

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇺🇸", prefix: "" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", prefix: "/vn" },
];

const detectLanguage = (pathname?: string | null) => {
  if (!pathname) return LANGUAGES[0];
  const matched = LANGUAGES.find(
    (lang) => lang.prefix && (pathname === lang.prefix || pathname.startsWith(`${lang.prefix}/`))
  );
  return matched || LANGUAGES[0];
};

const buildPathForLanguage = (pathname: string | null, target: LanguageOption, current: LanguageOption) => {
  if (!pathname) return target.prefix || "/";

  const stripCurrentPrefix = () => {
    if (!current.prefix) return pathname;
    if (pathname === current.prefix) return "/";
    if (pathname.startsWith(`${current.prefix}/`)) {
      return pathname.slice(current.prefix.length);
    }
    return pathname;
  };

  const normalizedPath = stripCurrentPrefix();
  if (!target.prefix) return normalizedPath === "/" ? "/" : normalizedPath;
  return normalizedPath === "/" ? target.prefix : `${target.prefix}${normalizedPath}`;
};

type SiteHeaderProps = {
  links?: NavLink[];
  brandSubtitle?: string;
  homeHref?: string;
};

export function SiteHeader({
  links = defaultNavLinks,
  brandSubtitle = defaultBrandSubtitle,
  homeHref = "/",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const isVietnamese = pathname?.startsWith("/vn");
  const currentLanguage = detectLanguage(pathname);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  const resolvedLinks = useMemo(() => {
    if (links !== defaultNavLinks) return links;
    return isVietnamese ? vnNavLinks : defaultNavLinks;
  }, [links, isVietnamese]);

  const resolvedBrandSubtitle =
    brandSubtitle === defaultBrandSubtitle && isVietnamese ? vnBrandSubtitle : brandSubtitle;

  const resolvedHomeHref = homeHref === "/" && isVietnamese ? "/vn" : homeHref;

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const navWithActive = useMemo(
    () =>
      resolvedLinks.map((link) => ({
        ...link,
        active: pathname === link.href || pathname?.startsWith(`${link.href}/`),
      })),
    [pathname, resolvedLinks]
  );

  const languageTargets = useMemo(
    () =>
      LANGUAGES.map((lang) => ({
        ...lang,
        href: buildPathForLanguage(pathname, lang, currentLanguage),
        active: lang.code === currentLanguage.code,
      })),
    [currentLanguage, pathname]
  );

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

  return (
    <header className="relative z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={resolvedHomeHref} className="flex items-center gap-2" aria-label="Where Winds Meet home">
          <Image
            src="/design/logo.png"
            alt="Where Winds Meet logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full shadow-lg shadow-emerald-500/40"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-50">
              Where Winds Meet
            </span>
            <span className="text-xs text-slate-400">
              {resolvedBrandSubtitle}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 sm:flex">
          <nav className="flex gap-6 text-sm font-medium text-slate-200">
            {navWithActive.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-emerald-400 ${
                  link.active ? "text-emerald-300" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              onClick={() => setIsLangMenuOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-100 shadow-sm transition hover:border-emerald-400/70 hover:text-emerald-50"
              aria-label="Switch language"
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
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 shadow-xl shadow-slate-950/70">
                <div className="divide-y divide-slate-800/80">
                  {languageTargets.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      onClick={() => setIsLangMenuOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 text-sm transition ${
                        lang.active
                          ? "bg-emerald-500/10 text-emerald-100"
                          : "text-slate-100 hover:bg-slate-800/70 hover:text-emerald-50"
                      }`}
                    >
                      <span className="text-lg leading-none">{lang.flag}</span>
                      <span className="flex-1">{lang.label}</span>
                      {lang.active ? (
                        <span className="text-[11px] uppercase tracking-wide text-emerald-300">Active</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm shadow-slate-900/50 transition sm:hidden"
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="h-0.5 w-5 rounded-full bg-slate-100" />
            <span className="h-0.5 w-5 rounded-full bg-slate-100" />
            <span className="h-0.5 w-5 rounded-full bg-slate-100" />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] sm:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-3 top-3 z-10">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-700/80 bg-slate-900/90 p-2 text-slate-100 shadow-lg shadow-slate-950/60"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>
          <div className="absolute inset-x-3 top-16 z-10 rounded-2xl border border-slate-800/80 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/70">
            <nav className="flex flex-col divide-y divide-slate-800/80">
              {navWithActive.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3 text-sm font-semibold transition ${
                    link.active
                      ? "text-emerald-200"
                      : "text-slate-100 hover:text-emerald-200"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.active ? <span className="text-[11px] text-emerald-300">Active</span> : null}
                </Link>
            ))}
          </nav>
            <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3">
              <div className="space-y-2">
                {languageTargets.map((lang) => (
                  <Link
                    key={lang.code}
                    href={lang.href}
                    onClick={() => {
                      setIsOpen(false);
                      setIsLangMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                      lang.active
                        ? "bg-emerald-500/10 text-emerald-100"
                        : "text-slate-100 hover:bg-slate-800/80 hover:text-emerald-50"
                    }`}
                  >
                    <span className="text-lg leading-none">{lang.flag}</span>
                    <span className="flex-1">{lang.label}</span>
                    {lang.active ? (
                      <span className="text-[11px] uppercase tracking-wide text-emerald-300">Active</span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
