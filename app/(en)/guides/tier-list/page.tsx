import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

const arenaRankNotes = [
  {
    title: "Arena rank climbers",
    detail:
      "Start with mobility, burst windows, and reliable crowd control. If you only have time for one page, compare this main list with the PVP-only arena page before spending reset materials.",
    href: "/guides/pvp-tier-list",
    label: "PVP arena ranks",
  },
  {
    title: "Upcoming nerf checks",
    detail:
      "When players search for upcoming nerfs, the safest answer is to tie tier changes back to official Path Balance and live maintenance notes, then retest weapons in your own build.",
    href: "/guides/patch-notes#upcoming-nerfs",
    label: "Balance watch",
  },
  {
    title: "Weapon-only comparison",
    detail:
      "Use the weapon tier list when you want a cleaner ranking of weapon families without paths, internal arts, and full build context mixed in.",
    href: "/guides/weapons/tier-list",
    label: "Weapon tier list",
  },
];

export const metadata: Metadata = {
  title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
  description:
    "WWM tier list for 2026: Where Winds Meet PVE and PVP rankings, arena-rank links, weapon tiers, paths, dual-weapon combos, and internal arts.",
  alternates: buildHreflangAlternates("/guides/tier-list"),
  openGraph: {
    title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
    description:
      "WWM tier list for 2026: Where Winds Meet PVE and PVP rankings, arena-rank links, weapon tiers, paths, dual-weapon combos, and internal arts.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "WWM Tier List – Where Winds Meet PVE & PVP Rankings",
    description:
      "WWM tier list for 2026: Where Winds Meet PVE and PVP rankings, arena-rank links, weapon tiers, paths, dual-weapon combos, and internal arts.",
  },
};

export default function TierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/tier-list`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${baseUrl}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tier List",
          item: `${baseUrl}/guides/tier-list`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />
      <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/60">
        Updated for WWM tier list and arena-rank searches. Want a PVP-only page? Open the{" "}
        <Link href="/guides/pvp-tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          PVP tier list and arena ranks
        </Link>{" "}
        or browse the{" "}
        <Link href="/guides/weapons/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          weapons tier list
        </Link>{" "}
        or open the{" "}
        <Link href="/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          weapon encyclopedia
        </Link>
        . 
      </section>
      <section id="arena-ranks" className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-slate-200 shadow-sm shadow-emerald-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Search intent: wwm arena ranks</p>
            <h2 className="mt-1 text-xl font-bold text-slate-50">Arena ranks, tier-list changes, and nerf watch.</h2>
          </div>
          <Link
            href="/guides/patch-notes#upcoming-nerfs"
            className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100 hover:border-emerald-300/80"
          >
            Check latest balance notes
          </Link>
        </div>
        <p className="mt-3 leading-6 text-slate-300">
          Players are clustering around WWM arena ranks, PVP ranking, and upcoming nerfs. Treat this page as
          the broad meta view, then use the PVP, weapon, and patch-note links below to verify whether a ranking still
          fits Version 1.7 Path Balance.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {arenaRankNotes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-emerald-300/60"
            >
              <p className="text-sm font-semibold text-slate-50">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.detail}</p>
              <p className="mt-3 text-xs font-semibold text-emerald-300">{item.label}</p>
            </Link>
          ))}
        </div>
      </section>
      <TierListClient />
    </>
  );
}
