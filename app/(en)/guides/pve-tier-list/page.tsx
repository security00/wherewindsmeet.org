import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  currentWeaponRoster,
  getWeaponSources,
  weaponTierMeta,
} from "@/lib/weaponTierData";
import { weapons } from "@/lib/weapons";

const baseUrl = "https://wherewindsmeet.org";

const pveChecks = [
  {
    name: "Patch and gear",
    detail: "Record game version, Martial Arts, Inner Ways, gear tier, and any recent respec before comparing clears.",
  },
  {
    name: "Encounter set",
    detail: "Use repeatable bosses, dungeons, or open-world targets—not a one-off story fight—so results can be compared.",
  },
  {
    name: "Clear metrics",
    detail: "Track clear time, death count, consumable spend, and whether the route stayed solo or needed co-op help.",
  },
  {
    name: "Decision threshold",
    detail: "Only publish a comparative placement when the same result holds across a useful sample—not one highlight clear.",
  },
];

const faqs = [
  {
    question: "What is the Where Winds Meet PvE tier list right now?",
    answer:
      "There is no defensible universal PvE S/A/B order in the stored evidence set. Official sources confirm the roster and selected balance changes, but comparative boss and dungeon ranks still need matched-gear Version 2.1 tests.",
  },
  {
    question: "Are Gauntlets ranked for PvE?",
    answer:
      "Gauntlets are officially confirmed as live, including follow-up September 5 animation fixes for Skystrike Gauntlets skills, but that does not establish a comparative PvE letter tier.",
  },
  {
    question: "Should I copy a community PvE tier image?",
    answer:
      "Not as current fact. Undated images often mix patches, gear, and encounter types. Use the roster cards here, then verify one repeatable route on your build.",
  },
  {
    question: "Where should I go for arena rankings?",
    answer:
      "Use the PvP tier-list page. PvE clear speed does not prove arena matchup strength.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet PvE Tier List: Version 2.1 Evidence Review",
  description:
    "Where Winds Meet PvE tier list for Version 2.1: all 8 weapon families, Gauntlets coverage, boss/dungeon review status, and official sources—no invented S/A/B ranks.",
  alternates: buildHreflangAlternates("/guides/pve-tier-list"),
  openGraph: {
    title: "Where Winds Meet PvE Tier List: Version 2.1 Evidence Review",
    description:
      "A PvE-focused evidence review that separates confirmed roster facts from unsupported letter grades.",
    url: `${baseUrl}/guides/pve-tier-list`,
  },
};

export default function PVETierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/pve-tier-list`,
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
            alt="Where Winds Meet PvE review background"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-emerald-950/45" />
        </div>
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            {weaponTierMeta.gameVersion} · PvE evidence checked {weaponTierMeta.updatedAt}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-slate-50 sm:text-5xl">
            Where Winds Meet PvE tier list: what is confirmed for bosses and clears.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Players searching for a <strong>where winds meet pve tier list</strong> want a best-weapon answer for
            bosses, dungeons, and open-world farming. Official sources do not publish that S/A/B order, and this page
            will not invent one. It reuses the shared weapon roster, marks every comparative PvE placement as review
            required, and links you to weapon guides and the broader tier matrix.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="#pve-evidence" className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-300">
              Review all weapons
            </Link>
            <Link href="/guides/weapons/tier-list#pve" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              Weapon tier-list PvE section
            </Link>
            <Link href="/guides/tier-list" className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-300/60">
              Full evidence matrix
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-5 text-sm leading-6 text-slate-200">
        Related hubs:{" "}
        <Link href="/guides/tier-list" className="font-semibold text-cyan-100 underline underline-offset-4">
          /guides/tier-list
        </Link>
        ,{" "}
        <Link href="/guides/weapons/tier-list#pve" className="font-semibold text-cyan-100 underline underline-offset-4">
          /guides/weapons/tier-list#pve
        </Link>
        , and{" "}
        <Link href="/guides/pvp-tier-list" className="font-semibold text-cyan-100 underline underline-offset-4">
          /guides/pvp-tier-list
        </Link>{" "}
        for arena-only evidence.
      </section>

      <section id="pve-retest" className="rounded-3xl border border-emerald-400/25 bg-emerald-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">PvE retest protocol</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Four checks before you trust a PvE letter grade.</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {pveChecks.map((field, index) => (
            <div key={field.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-100">{index + 1}</span>
                <h3 className="font-semibold text-slate-100">{field.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{field.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pve-evidence" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">PvE coverage</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">Current PvE status for every weapon family.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {currentWeaponRoster.map((weapon) => {
            const guideWeapon = weapons.find((entry) => entry.id === weapon.id);
            const sources = getWeaponSources(weapon);

            return (
              <article key={weapon.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
                <div className="flex gap-4">
                  {guideWeapon ? (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                      <CdnImage
                        src={guideWeapon.officialArt}
                        alt={`${guideWeapon.name} official artwork`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-50">{weapon.name}</h3>
                        <p className="mt-1 text-xs text-slate-400">{weapon.role}</p>
                      </div>
                      <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-100">
                        Review required
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{weapon.pve.note}</p>
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

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6">
        <h2 className="text-xl font-bold text-slate-50">PvE tier-list FAQ</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">{faq.question}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs leading-5 text-slate-400">
        Methodology: {weaponTierMeta.methodology}
      </p>
    </article>
  );
}
