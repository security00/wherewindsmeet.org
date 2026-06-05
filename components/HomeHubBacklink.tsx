"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ContentLanguage } from "@/lib/contentFreshness";

const copy: Record<
  ContentLanguage,
  {
    href: string;
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  }
> = {
  en: {
    href: "/",
    eyebrow: "Main hub",
    title: "Where Winds Meet guide hub",
    body: "Need the latest Where Winds Meet guide hub for platforms, codes, patch notes, tier lists, builds, bosses, and map routes in one place?",
    cta: "Back to latest guides",
  },
  vi: {
    href: "/vn",
    eyebrow: "Hub chính",
    title: "Where Winds Meet guide hub",
    body: "Cần xem tổng quan Where Winds Meet, nền tảng, codes, patch notes, tier list, builds, boss và bản đồ trong một nơi?",
    cta: "Về hub mới nhất",
  },
  de: {
    href: "/de",
    eyebrow: "Haupt-Hub",
    title: "Where Winds Meet guide hub",
    body: "Brauchst du Where Winds Meet Übersicht, Plattformen, Codes, Patch Notes, Tierlisten, Builds, Bosse und Kartenrouten an einem Ort?",
    cta: "Zurück zu aktuellen Guides",
  },
};

export function HomeHubBacklink({ language }: { language: ContentLanguage }) {
  const pathname = usePathname();
  const resolvedLanguage = pathname?.startsWith("/vn")
    ? "vi"
    : pathname?.startsWith("/de")
      ? "de"
      : language;
  const entry = copy[resolvedLanguage];

  return (
    <aside className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-50 shadow-lg shadow-emerald-950/20">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200/90">
        {entry.eyebrow}
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <div className="max-w-3xl">
          <p className="font-semibold text-emerald-50">{entry.title}</p>
          <p className="mt-1 leading-relaxed text-emerald-50/80">{entry.body}</p>
        </div>
        <Link
          href={entry.href}
          className="rounded-full border border-emerald-300/60 bg-slate-950/50 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-emerald-50"
        >
          {entry.title}
        </Link>
      </div>
    </aside>
  );
}
