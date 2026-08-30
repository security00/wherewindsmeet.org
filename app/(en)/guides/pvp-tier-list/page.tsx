import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  currentWeaponRoster,
  getWeaponSources,
  weaponTierMeta,
} from "@/lib/weaponTierData";

const baseUrl = "https://wherewindsmeet.org";

const arenaTestFields = [
  {
    name: "Patch and build",
    detail: "Record game version, Martial Arts, Inner Ways, gear tier, attunements, and any recent respec.",
  },
  {
    name: "Match context",
    detail: "Record rank band, opponent weapon pair, map or mode, platform, and approximate latency.",
  },
  {
    name: "Repeatable outcomes",
    detail: "Track several games: wins, losses, time to first punish, escape success, and the matchup that failed.",
  },
  {
    name: "Decision threshold",
    detail: "Only recommend a tier move when the same result persists across players or a useful sample—not one highlight clip.",
  },
];

const faqs = [
  {
    question: "What is the best PvP weapon in Where Winds Meet Version 2.1?",
    answer:
      "This evidence set cannot support a universal best weapon yet. Official sources confirm the roster and selected balance changes, but a current PvP order requires matchup, rank-band, latency, build, and sample-size records.",
  },
  {
    question: "Does Gauntlets have a confirmed PvP tier?",
    answer:
      "No. Gauntlets are officially confirmed as a live weapon, but the official description of fast combos and burst does not establish comparative arena strength.",
  },
  {
    question: "Why can an old PvP tier list be misleading?",
    answer:
      "It may mix different patches, ranks, gear, latency, regions, or weapon pairs. Without that context, a letter grade cannot be reproduced or compared fairly.",
  },
  {
    question: "What should I change first when arena results drop?",
    answer:
      "Check latency and matchup quality, then review the latest patch and your rotation. Change a secondary weapon or a small build component before paying for a full reset unless the evidence identifies the weapon itself as the problem.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet PvP Tier List: Version 2.1 Arena Evidence",
  description:
    "Version 2.1 Where Winds Meet PvP tier-list review for all 8 weapons, with arena test criteria, current evidence status, Gauntlets coverage, and official sources.",
  alternates: buildHreflangAlternates("/guides/pvp-tier-list"),
  openGraph: {
    title: "Where Winds Meet PvP Tier List: Version 2.1 Arena Evidence",
    description:
      "A mode-specific arena evidence review that separates confirmed roster facts from rankings that still need testing.",
    url: `${baseUrl}/guides/pvp-tier-list`,
  },
};

export default function PVPTierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/pvp-tier-list`,
      dateModified: weaponTierMeta.updatedAt,
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

      <section className="relative overflow-hidden rounded-3xl border border-red-400/25 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt="Where Winds Meet arena review background"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-red-950/45" />
        </div>
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-200">
            {weaponTierMeta.gameVersion} · PvP evidence checked {weaponTierMeta.updatedAt}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-5xl">
            Where Winds Meet PvP tier list and arena evidence review.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            A current arena ranking needs more than weapon names and highlight clips. The site now tracks all eight
            weapon families from one versioned source, but withholds letter grades until matchup, rank-band, build,
            latency, and sample-size evidence is recorded. Use this page to review what is known and run a useful test
            before spending reset materials.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="#pvp-evidence" className="rounded-full bg-red-300 px-4 py-2 font-semibold text-slate-950 hover:bg-red-200">
              Review all weapons
            </Link>
            <Link href="/guides/tier-list#tier-data" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-red-300/60">
              Full evidence matrix
            </Link>
          </div>
        </div>
      </section>

      <section id="arena-rank-checklist" className="rounded-3xl border border-orange-400/25 bg-orange-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-200">Arena retest protocol</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Four checks before you call a weapon S tier—or reset your build.</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {arenaTestFields.map((field, index) => (
            <div key={field.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-400/15 text-xs font-bold text-orange-100">{index + 1}</span>
                <h3 className="font-semibold text-slate-100">{field.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{field.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-300">
          If the result still points to your loadout, use the{" "}
          <Link href="/guides/builds#post-patch-build-check" className="font-semibold text-orange-100 underline underline-offset-4">
            post-patch build check
          </Link>{" "}
          before committing to a full respec.
        </p>
      </section>

      <section id="pvp-evidence" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">PvP coverage</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">Current arena status for every weapon family.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            “Review required” means the roster fact is known, but the current comparative arena placement is not yet supported by the stored evidence.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {currentWeaponRoster.map((weapon) => {
            const sources = getWeaponSources(weapon);

            return (
              <article key={weapon.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-50">{weapon.name}</h3>
                    <p className="mt-1 text-xs text-slate-400">{weapon.role}</p>
                  </div>
                  <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-100">
                    Review required
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{weapon.pvp.note}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {sources.map((source) => (
                    <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                      Evidence
                    </a>
                  ))}
                  {weapon.guide.href ? (
                    <Link href={weapon.guide.href} className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                      Weapon guide
                    </Link>
                  ) : (
                    <span className="font-semibold text-slate-500">Guide planned</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-cyan-400/25 bg-cyan-500/10 p-6">
          <h2 className="text-xl font-bold text-slate-50">What the official sources prove</h2>
          <div className="mt-4 space-y-3">
            {weaponTierMeta.provenance.map((source) => (
              <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-300/50">
                <p className="text-sm font-semibold text-cyan-100">{source.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{source.supports}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6">
          <h2 className="text-xl font-bold text-slate-50">PvP tier-list FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="text-sm font-semibold text-slate-100">{faq.question}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-5 text-slate-400">
        Methodology: {weaponTierMeta.methodology}
      </p>
    </article>
  );
}
