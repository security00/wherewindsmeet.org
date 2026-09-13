import type { Metadata } from "next";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { currentWeaponRoster, weaponTierMeta } from "@/lib/weaponTierData";
import TierListClient from "./TierListClient";

const baseUrl = "https://wherewindsmeet.org";

const quickAnswers = [
  {
    label: "Current roster",
    answer: `${currentWeaponRoster.length} weapon families are tracked, including the officially confirmed Gauntlets.`,
    href: "/guides/weapons",
    cta: "Compare roles",
  },
  {
    label: "PvE evidence",
    answer: "No universal letter grade is published until matched-gear boss and dungeon tests are recorded for the current patch.",
    href: "/guides/pve-tier-list",
    cta: "Open PvE tier review",
  },
  {
    label: "PvP evidence",
    answer: "Arena conclusions need dated matchup, rank-band, latency, build, and sample-size evidence—not an undated tier image.",
    href: "/guides/pvp-tier-list",
    cta: "Use PvP checklist",
  },
];

const faqs = [
  {
    question: "What is the best weapon in Where Winds Meet right now?",
    answer:
      "There is no defensible universal answer in the current evidence set. The official sources confirm the roster and selected balance changes, but not a complete ranking. Choose by role, then compare a repeatable PvE or PvP test for your build.",
  },
  {
    question: "Are Gauntlets in Where Winds Meet?",
    answer:
      "Yes. The official Hidden Mountain developer letter introduced Gauntlets in Version 2.0 and described the Bamboocut Kite style with a Rope Dart pairing.",
  },
  {
    question: "Why does this tier list say review required?",
    answer:
      "It means the roster fact is confirmed but a current comparative rank is not. A placement is withheld until the page can cite a dated patch and a reproducible test record.",
  },
  {
    question: "Should PvE and PvP use the same tier order?",
    answer:
      "No. PvE and PvP reward different outcomes and need separate evidence. Boss uptime and repeatable clears do not prove arena matchup strength, and duel results do not prove efficient PvE clears.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Tier List 2026: Version 2.1 Evidence Review",
  description:
    "Version 2.1 Where Winds Meet tier-list evidence: all 8 current weapon families including Gauntlets, separate PvE/PvP review status, methodology, dates, and official sources.",
  alternates: buildHreflangAlternates("/guides/tier-list"),
  openGraph: {
    title: "Where Winds Meet Tier List 2026: Version 2.1 Evidence Review",
    description:
      "A sourced Version 2.1 roster and PvE/PvP evidence matrix that withholds unsupported letter grades.",
    url: `${baseUrl}/guides/tier-list`,
  },
  twitter: {
    title: "Where Winds Meet Tier List 2026: Version 2.1 Evidence Review",
    description:
      "All 8 weapon families, Gauntlets confirmation, separate PvE/PvP review status, and official sources.",
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
      dateModified: weaponTierMeta.updatedAt,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Where Winds Meet ${weaponTierMeta.gameVersion} weapon roster`,
      numberOfItems: currentWeaponRoster.length,
      itemListElement: currentWeaponRoster.map((weapon, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: weapon.name,
        url: weapon.guide.href ? `${baseUrl}${weapon.guide.href}` : `${baseUrl}/guides/weapons`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <article className="space-y-8 pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />

      <section className="rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950/50 p-6 shadow-2xl shadow-slate-950/60 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
          {weaponTierMeta.gameVersion} · evidence checked {weaponTierMeta.updatedAt}
        </p>
        <h1 className="mt-3 max-w-4xl text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Where Winds Meet tier list: what is confirmed, and what still needs testing.
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
          The honest short answer is that official sources do not publish a complete S/A/B order. This page therefore
          separates confirmed roster facts from PvE and PvP claims. It includes all {currentWeaponRoster.length} current
          weapon families—including Gauntlets—and marks unsupported comparisons for review instead of presenting
          community opinion as patch fact.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href="#tier-data" className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
            Open evidence matrix
          </Link>
          <Link href="/guides/pve-tier-list" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
            PvE tier-list hub
          </Link>
          <Link href="/guides/patch-notes" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
            Check patch notes
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {quickAnswers.map((item) => (
          <Link key={item.label} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5 transition hover:border-emerald-300/50">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">{item.label}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            <p className="mt-4 text-xs font-semibold text-emerald-200">{item.cta} →</p>
          </Link>
        ))}
      </section>

      <TierListClient />

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Tier-list FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-semibold text-slate-100">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
