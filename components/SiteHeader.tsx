'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
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

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      navLinks.map((link) => ({
        ...link,
        active: pathname === link.href || pathname?.startsWith(`${link.href}/`),
      })),
    [pathname]
  );

  return (
    <header className="relative z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Where Winds Meet home">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/40" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-50">
              Where Winds Meet
            </span>
            <span className="text-xs text-slate-400">
              Guides · Tier List · Codes
            </span>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-slate-200 sm:flex">
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
          </div>
        </div>
      )}
    </header>
  );
}
