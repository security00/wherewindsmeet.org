import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { weapons } from "@/lib/weapons";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { currentWeaponRoster, weaponTierMeta } from "@/lib/weaponTierData";

const baseUrl = "https://wherewindsmeet.org";
const weaponIntentAnswers = [
  {
    title: "All weapons",
    body: "Current roster: Dual Blades, Sword, Spear, Mo Blade, Fan, Umbrella, Rope Dart, and Gauntlets. Drunken Fist / Skystrike Gauntlets are on the dedicated September 3 unlock page.",
  },
  {
    title: "Evidence-based tier review",
    body: "The linked tier review separates official roster facts from PvE and PvP placements that still need matched-build testing.",
  },
  {
    title: "Choose by role first",
    body: "Pick the combat rhythm you want—mobility, reach, durability, range, support, or reactive play—then test it in your main mode before investing heavily.",
  },
];

const weaponFaqs = [
  {
    q: "How many weapons are in Where Winds Meet?",
    a: `This ${weaponTierMeta.gameVersion} guide tracks eight current weapon families: Dual Blades, Sword, Spear, Mo Blade, Fan, Umbrella, Rope Dart, and Gauntlets. Use the Drunken Fist page for Skystrike Gauntlets and Riven Twinblades.`,
  },
  {
    q: "What is the best weapon for new players?",
    a: "There is no evidence-backed universal first place. New players should choose a role and control rhythm they can repeat comfortably, then use the linked guide and a consistent practice encounter before spending upgrade materials.",
  },
  {
    q: "Where is the Where Winds Meet weapon tier list?",
    a: "Use the dedicated weapon evidence review linked from this page. It covers roster, PvE, and PvP separately and withholds unsupported letter grades.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Weapons Guide: Best Weapons, Roles & Tier List",
  description:
    "All 8 Where Winds Meet Version 2.1 weapons in one guide: Gauntlets, Dual Blades, Sword, Spear, Mo Blade, Fan, Umbrella, Rope Dart, roles, guides, and sourced tier evidence.",
  alternates: buildHreflangAlternates("/guides/weapons"),
  openGraph: {
    title: "Where Winds Meet Weapons Guide: Best Weapons, Roles & Tier List",
    description:
      "All 8 current Where Winds Meet weapons, with roles, guide coverage, Gauntlets confirmation, and sourced PvE/PvP review status.",
    url: `${baseUrl}/guides/weapons`,
  },
  twitter: {
    title: "Where Winds Meet Weapons Guide: Best Weapons & Roles",
    description:
      "Compare every current Where Winds Meet weapon by role, guide coverage, and sourced review status.",
  },
};

export default function WeaponsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/weapons`,
      dateModified: weaponTierMeta.updatedAt,
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
          name: "Weapons",
          item: `${baseUrl}/guides/weapons`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: weaponFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt="Where Winds Meet weapons background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet weapons guide: best weapons, roles, and tier-list links.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Evidence checked {weaponTierMeta.updatedAt} for {weaponTierMeta.gameVersion}: this guide tracks all{" "}
            {currentWeaponRoster.length} current weapon families—Spear, Sword, Dual Blades, Mo Blade, Fan, Umbrella,
            Rope Dart, and the officially confirmed Gauntlets. Compare role, guide coverage, build fit, and how each
            weapon actually feels to play.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            If you need a current comparison, open the dedicated{" "}
            <Link
              href="/guides/weapons/tier-list"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Where Winds Meet weapons tier list
            </Link>{" "}
            for the versioned evidence matrix, then jump back here for full context and roles. Unsupported S/A/B
            placements are withheld until matched PvE and PvP tests are recorded.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Use this overview alongside the{" "}
            <Link
              href="/guides/tier-list"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Where Winds Meet tier list
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              recommended builds
            </Link>{" "}
            to decide which weapon fits your pace and mode instead of following an undated meta image.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            If you searched for <span className="font-semibold">where winds meet weapons</span>,{" "}
            <span className="font-semibold">where winds meet all weapons</span>, or{" "}
            <span className="font-semibold">where winds meet best weapons</span>, start here first: the cards below explain what each published guide covers, and the linked review states what is confirmed versus what still needs testing.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            If you want the unlock steps and skill names for every martial art
            weapon, open the new{" "}
            <Link
              href="/guides/martial-arts-weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              martial arts weapons table
            </Link>{" "}
            which mirrors the illustrated wiki layout.
          </p>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 md:grid-cols-3">
        {weaponIntentAnswers.map((item) => (
          <div key={item.title} className="rounded-2xl border border-emerald-400/30 bg-slate-950/70 p-4">
            <h2 className="text-sm font-semibold text-emerald-100">{item.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Weapon gallery and quick roles.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {weapons.map((weapon) => (
            <article
              key={weapon.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full bg-slate-900/80">
                <CdnImage
                  src={weapon.officialArt}
                  alt={weapon.name}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {weapon.name}
                  </h3>
                  <div className="flex gap-2">
                    <span className="rounded border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cyan-100">
                      Guide published
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                      {weapon.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">{weapon.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/guides/weapons/${weapon.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    View weapon details
                  </Link>
                  <Link
                    href="/guides/tier-list"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Check evidence status
                  </Link>
                </div>
              </div>
            </article>
          ))}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-emerald-400/40 bg-emerald-500/10 shadow-sm shadow-emerald-950/40">
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-emerald-950/60 to-slate-950 text-6xl font-black text-emerald-100" aria-label="Gauntlets official confirmation; dedicated artwork not stored">
              G
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50">Gauntlets</h3>
                <span className="rounded border border-emerald-400/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-100">
                  Officially confirmed
                </span>
              </div>
              <p className="text-xs leading-5 text-slate-300">
                Version 2.0 introduced Gauntlets for fast close-range combos and explosive burst, alongside the
                Bamboocut Kite Martial Art and an official Rope Dart pairing. A dedicated guide and reliable local
                screenshot set are still planned, so this card does not link to a nonexistent detail route.
              </p>
              <a
                href="https://www.wherewindsmeetgame.com/news/official/719devletter.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-fit rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/50 hover:ring-emerald-300"
              >
                Read the official Gauntlets source →
              </a>
            </div>
          </article>
        </div>
      </section>
    </article>
  );
}
