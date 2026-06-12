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
  title: "Where Winds Meet Tier List - PVE, PVP, Weapons & Arena Ranks",
  description:
    "Where Winds Meet tier list for PVE, PVP, weapons, arena ranks, builds, paths, dual-weapon combos, and Version 1.7 balance checks.",
  alternates: buildHreflangAlternates("/guides/tier-list"),
  openGraph: {
    title: "Where Winds Meet Tier List - PVE, PVP, Weapons & Arena Ranks",
    description:
      "Where Winds Meet tier list for PVE, PVP, weapons, arena ranks, builds, paths, dual-weapon combos, and Version 1.7 balance checks.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "Where Winds Meet Tier List - PVE, PVP, Weapons & Arena Ranks",
    description:
      "Where Winds Meet tier list for PVE, PVP, weapons, arena ranks, builds, paths, dual-weapon combos, and Version 1.7 balance checks.",
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
      <section id="pve-pvp-tier-list" className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 text-sm text-slate-200 shadow-sm shadow-amber-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Search intent: wwm pve tier list</p>
            <h2 className="mt-1 text-xl font-bold text-slate-50">PVE tier list vs PVP tier list: which ranking should you use?</h2>
          </div>
          <Link
            href="/guides/builds"
            className="rounded-full border border-amber-300/60 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-100 hover:border-amber-200"
          >
            Build recommendations
          </Link>
        </div>
        <p className="mt-3 leading-6 text-slate-300">
          If you searched for Where Winds Meet tier list, start broad: PVE rewards stable damage, survival,
          resource comfort, and boss uptime, while PVP rewards mobility, burst, crowd control, and safe reset windows.
          Use this page as the shared ranking hub, then move into the PVP-only page or weapon tier list when your goal is narrower.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "PVE ranking lens",
              detail: "Prefer weapons and paths that clear bosses, dungeons, daily routes, and exploration fights without demanding perfect duel timing.",
              href: "/guides/builds",
              label: "PVE builds",
            },
            {
              title: "PVP ranking lens",
              detail: "Check arena ranks separately because duel strength can shift faster after Path Balance and live maintenance updates.",
              href: "/guides/pvp-tier-list",
              label: "PVP tier list",
            },
            {
              title: "Weapon-only lens",
              detail: "Use the weapon tier list when you want a simpler answer before comparing paths, internal arts, and full loadouts.",
              href: "/guides/weapons/tier-list",
              label: "Weapon rankings",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-amber-300/60"
            >
              <p className="text-sm font-semibold text-slate-50">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.detail}</p>
              <p className="mt-3 text-xs font-semibold text-amber-200">{item.label}</p>
            </Link>
          ))}
        </div>
      </section>
      <TierListClient />
    </>
  );
}
