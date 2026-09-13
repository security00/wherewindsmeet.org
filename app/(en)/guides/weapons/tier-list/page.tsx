import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  currentWeaponRoster,
  getWeaponSources,
  weaponTierMeta,
} from "@/lib/weaponTierData";
import { weapons } from "@/lib/weapons";

const baseUrl = "https://wherewindsmeet.org";

const faqs = [
  {
    question: "What is the current Where Winds Meet weapon tier list?",
    answer:
      "The current dataset does not assign letter tiers because it has no matched-build Version 2.1 test sample. It confirms all eight weapon families and separates PvE and PvP review status so an old community ranking is not presented as current fact.",
  },
  {
    question: "Are Gauntlets included in the current roster?",
    answer:
      "Yes. The official Hidden Mountain developer letter says Gauntlets arrived in Version 2.0 and introduced Bamboocut Kite, which can pair with Rope Dart.",
  },
  {
    question: "Why are PvE and PvP marked review required?",
    answer:
      "A current rank needs a dated patch, matched gear, documented builds, repeatable encounters or matchups, latency context for PvP, and a useful sample size. Those records are not yet stored in the dataset.",
  },
  {
    question: "How should I choose a weapon before rankings are retested?",
    answer:
      "Choose the role and combat rhythm you want, use the linked weapon guide, and test one repeatable route before spending heavily. Treat convenience, latency, build access, and mode as part of the decision.",
  },
];

export const metadata: Metadata = {
  title: "WWM Weapon Tier List | Where Winds Meet Weapon Tier List (Version 2.1)",
  description:
    "WWM Weapon Tier List and Where Winds Meet Weapon Tier List for Version 2.1: all 8 weapons including Gauntlets, separate PvE/PvP review status, methodology, dates, and official sources—no invented S/A/B ranks.",
  alternates: buildHreflangAlternates("/guides/weapons/tier-list"),
  openGraph: {
    title: "WWM Weapon Tier List | Where Winds Meet Weapon Tier List (Version 2.1)",
    description:
      "A sourced roster and mode-specific evidence matrix that does not invent unsupported weapon tiers.",
    url: `${baseUrl}/guides/weapons/tier-list`,
  },
};

export default function WeaponTierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/weapons/tier-list`,
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

      <section className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt="Where Winds Meet weapon review background"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/55" />
        </div>
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            {weaponTierMeta.gameVersion} · checked {weaponTierMeta.updatedAt}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-5xl">
            What is the current WWM / Where Winds Meet weapon tier list in Version 2.1?
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Searchers looking for a <strong>WWM Weapon Tier List</strong> or{" "}
            <strong>Where Winds Meet Weapon Tier List</strong> usually want a quick best-weapon answer.
            The honest one: official sources confirm the eight-family roster (including Gauntlets) and selected
            balance fixes, but they do <strong>not</strong> publish an official S/A/B order—and this page does not invent one.
            Use the PvE and PvP sections below for review status, then open a weapon guide and run one repeatable test on your build.
          </p>
          <div className="mt-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-50/95">
            Honesty callout: community letter tiers are not treated as current fact here. Until matched-build Version 2.1
            evidence is stored, every comparative placement stays in review.
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="#pve" className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
              Jump to PvE
            </Link>
            <Link href="#pvp" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              Jump to PvP
            </Link>
            <Link href="#weapon-evidence" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              All {currentWeaponRoster.length} weapons
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-5 text-sm leading-6 text-slate-200">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Related tier pages (dedupe)</p>
        <p className="mt-2">
          This page is the weapon-family evidence hub. For the broader matrix use{" "}
          <Link href="/guides/tier-list" className="font-semibold text-cyan-100 underline underline-offset-4">
            /guides/tier-list
          </Link>
          ; for arena-only checks use{" "}
          <Link href="/guides/pvp-tier-list" className="font-semibold text-cyan-100 underline underline-offset-4">
            /guides/pvp-tier-list
          </Link>
          ; for PvE-focused review use{" "}
          <Link href="/guides/pve-tier-list" className="font-semibold text-cyan-100 underline underline-offset-4">
            /guides/pve-tier-list
          </Link>
          .
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Confirmed</p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">Eight current weapon families</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Gauntlets joined the established seven-family roster in Version 2.0.</p>
        </div>
        <div className="rounded-2xl border border-amber-400/25 bg-amber-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Not confirmed</p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">A universal S/A/B order</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Official patch notes document changes, but they do not prove a complete cross-mode ranking.</p>
        </div>
        <div className="rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Next evidence</p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">Matched PvE and PvP retests</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Record build, gear, encounter or matchup, latency, result, and sample size before assigning a tier.</p>
        </div>
      </section>

      <section id="pve" className="space-y-4 rounded-3xl border border-emerald-400/25 bg-emerald-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">PvE review</p>
        <h2 className="text-2xl font-bold text-slate-50">PvE weapon status: roster confirmed, letter tiers withheld.</h2>
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          Every family below is live for bosses, dungeons, and open-world clears, but comparative PvE grades still need
          matched-gear, repeatable encounter records for Version 2.1. Open the dedicated PvE hub or a weapon guide before
          spending upgrade materials on an unverified “meta” claim.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/guides/pve-tier-list" className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
            Open PvE tier-list hub
          </Link>
          <Link href="#weapon-evidence" className="rounded-full border border-emerald-300/50 px-4 py-2 font-semibold text-emerald-50">
            Weapon cards with PvE notes
          </Link>
        </div>
      </section>

      <section id="pvp" className="space-y-4 rounded-3xl border border-red-400/25 bg-red-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-200">PvP review</p>
        <h2 className="text-2xl font-bold text-slate-50">PvP weapon status: arena evidence still under review.</h2>
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          Arena placements need matchup, rank-band, latency, build, and sample-size evidence. Until those records exist,
          this page will not invent duel S/A/B ranks from highlight clips or undated community images.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/guides/pvp-tier-list" className="rounded-full bg-red-300 px-4 py-2 font-semibold text-slate-950 hover:bg-red-200">
            Open PvP tier-list hub
          </Link>
          <Link href="#weapon-evidence" className="rounded-full border border-red-300/50 px-4 py-2 font-semibold text-red-50">
            Weapon cards with PvP notes
          </Link>
        </div>
      </section>

      <section id="weapon-evidence" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Current roster coverage</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">Every weapon, with evidence and review status.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {currentWeaponRoster.map((weaponEvidence) => {
            const guideWeapon = weapons.find((weapon) => weapon.id === weaponEvidence.id);
            const sources = getWeaponSources(weaponEvidence);

            return (
              <article key={weaponEvidence.id} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-slate-950/40">
                <div className="grid grid-cols-[112px,1fr] gap-4 p-5">
                  {guideWeapon ? (
                    <div className="relative h-28 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                      <CdnImage
                        src={guideWeapon.officialArt}
                        alt={`${guideWeapon.name} official weapon artwork`}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-28 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-4xl font-black text-emerald-100" aria-label="Gauntlets artwork not yet stored">
                      G
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-50">{weaponEvidence.name}</h3>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-100">
                        {weaponEvidence.roster.status === "official-confirmed" ? "Officially confirmed" : "Live roster"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{weaponEvidence.role}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{weaponEvidence.roster.note}</p>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-slate-800 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">PvE · review required</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{weaponEvidence.pve.note}</p>
                  </div>
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">PvP · review required</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{weaponEvidence.pvp.note}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-5 py-4 text-xs">
                  <div className="flex flex-wrap gap-3">
                    {sources.map((source) => (
                      <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                        {source.title}
                      </a>
                    ))}
                  </div>
                  {weaponEvidence.guide.href ? (
                    <Link href={weaponEvidence.guide.href} className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                      Open weapon guide →
                    </Link>
                  ) : (
                    <span className="font-semibold text-amber-200">Dedicated guide planned</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Optional gameplay context</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">Unofficial unlock / Draught route video</h2>
          </div>
          <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-100">
            Unofficial
          </span>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-400">
          Community video already referenced elsewhere on this site for Skystrike Gauntlets / Draught Inner Ways unlock context.
          It is not an official tier ranking and does not replace in-game verification.
        </p>
        <LiteYouTubeEmbed
          videoId="3_OMV6jjJtM"
          title="Unofficial: How to Get Drunken Fist Martial Arts and Inner Ways"
        />
      </section>

      <section id="weapon-meta-check" className="rounded-3xl border border-violet-400/25 bg-violet-500/10 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">How the next ranking will be earned.</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-2">
          {weaponTierMeta.reviewProtocol.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-4 text-sm leading-6 text-slate-300">
              <span className="font-bold text-violet-200">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-xs leading-5 text-slate-400">{weaponTierMeta.methodology}</p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Weapon tier-list FAQ</h2>
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
