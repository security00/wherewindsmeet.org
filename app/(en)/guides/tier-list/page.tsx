import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

const quickAnswerRows = [
  {
    label: "Best PVE picks",
    answer:
      "Start with Stormbreaker Spear, Thundercry Blade, Strategic Sword, and stable Sword + Spear routes when you want boss uptime, survivability, and lower-risk clears.",
    href: "/guides/builds",
    cta: "See builds",
  },
  {
    label: "Best PVP picks",
    answer:
      "For arena ranks, prioritize mobility, burst, and crowd control. Stormbreaker Spear, Infernal Twin Blades, Rope Dart pressure, and Umbrella counter setups are the first checks.",
    href: "/guides/pvp-tier-list",
    cta: "PVP ranks",
  },
  {
    label: "Best weapon-only check",
    answer:
      "Use the weapon tier list when you want the cleanest answer before comparing paths, internal arts, and full dual-weapon build context.",
    href: "/guides/weapons/tier-list",
    cta: "Weapon list",
  },
];

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

const tierListFaqs = [
  {
    question: "What is the best weapon in Where Winds Meet right now?",
    answer:
      "For most players, the safest first checks are Stormbreaker Spear, Thundercry Blade, Strategic Sword, and strong Sword + Spear routes. PVE values reliable boss uptime and survival, while PVP values burst, mobility, and crowd control.",
  },
  {
    question: "Should I follow a PVE tier list or a PVP tier list?",
    answer:
      "Use the PVE tier list for bosses, dungeons, farming, and story progress. Use the PVP tier list or arena ranks page when your goal is duels, ranked play, and counter-pick decisions.",
  },
  {
    question: "How often should tier rankings change?",
    answer:
      "Treat tier rankings as stable until official patch notes, Path Balance changes, or major seasonal updates alter damage, control, survivability, or resource costs. Small player opinions should not move rankings by themselves.",
  },
  {
    question: "Where should new players start?",
    answer:
      "New players should start with a comfortable A or S tier weapon, then check builds, weapon guides, patch notes, and the PVP tier list only after they know whether they prefer PVE clears or arena play.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Tier List 2026 - Best PVE/PVP Weapons & Arena Ranks",
  description:
    "Where Winds Meet tier list for 2026 and Version 1.7: best PVE weapons, PVP arena ranks, builds, paths, dual-weapon combos, and balance checks.",
  alternates: buildHreflangAlternates("/guides/tier-list"),
  openGraph: {
    title: "Where Winds Meet Tier List 2026 - Best PVE/PVP Weapons & Arena Ranks",
    description:
      "Where Winds Meet tier list for 2026 and Version 1.7: best PVE weapons, PVP arena ranks, builds, paths, dual-weapon combos, and balance checks.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "Where Winds Meet Tier List 2026 - Best PVE/PVP Weapons & Arena Ranks",
    description:
      "Where Winds Meet tier list for 2026 and Version 1.7: best PVE weapons, PVP arena ranks, builds, paths, dual-weapon combos, and balance checks.",
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
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet tier list quick picks",
      itemListElement: quickAnswerRows.map((row, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: row.label,
        description: row.answer,
        url: `${baseUrl}${row.href}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tierListFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />
      <section id="tier-list-quick-answer" className="mb-6 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-5 text-sm text-slate-200 shadow-sm shadow-cyan-950/40">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Quick answer for search visitors</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-50">Best Where Winds Meet tier list picks for PVE, PVP, and arena ranks.</h2>
            <p className="mt-3 leading-6 text-slate-300">
              If you landed here from Google, start with this short answer before scrolling into the full ranking table.
              The current recommendation is checked against Version 1.7, Path Balance notes, PVE comfort, and PVP arena-rank pressure.
            </p>
          </div>
          <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100">
            Updated June 2026
          </span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {quickAnswerRows.map((row) => (
            <Link
              key={row.label}
              href={row.href}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-300/60"
            >
              <p className="text-sm font-semibold text-slate-50">{row.label}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{row.answer}</p>
              <p className="mt-3 text-xs font-semibold text-cyan-200">{row.cta}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <Link href="#pve-pvp-tier-list" className="rounded-full border border-cyan-300/50 px-3 py-1 font-semibold text-cyan-100 hover:border-cyan-200">
            Jump to PVE vs PVP
          </Link>
          <Link href="#arena-ranks" className="rounded-full border border-cyan-300/50 px-3 py-1 font-semibold text-cyan-100 hover:border-cyan-200">
            Arena ranks
          </Link>
          <Link href="#tier-data" className="rounded-full border border-cyan-300/50 px-3 py-1 font-semibold text-cyan-100 hover:border-cyan-200">
            Ranking table
          </Link>
        </div>
      </section>
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
      <section id="tier-list-faq" className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-200 shadow-sm shadow-slate-950/50">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Tier list FAQ</p>
            <h2 className="mt-1 text-xl font-bold text-slate-50">Fast answers before you choose a weapon.</h2>
          </div>
          <Link href="/guides/patch-notes" className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 hover:border-emerald-300/70">
            Check patch notes
          </Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {tierListFaqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">{faq.question}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <TierListClient />
    </>
  );
}
