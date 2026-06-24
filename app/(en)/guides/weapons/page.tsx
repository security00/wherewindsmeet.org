import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { weapons } from "@/lib/weapons";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/weapons");

const weaponIntentAnswers = [
  {
    title: "All weapons",
    body: "Current roster: Dual Blades, Sword, Spear, Mo Blade, Fan, Umbrella, and Rope Dart. Use the cards below to compare role, tier, and full detail pages.",
  },
  {
    title: "Weapon tier list",
    body: "Use this page for weapon roles and play feel, then open the weapons tier list when you need direct S, A, and B tier ranking context.",
  },
  {
    title: "Best first picks",
    body: "Sword is the safest first weapon. Spear is the best early pick if you want more reach, cleaner spacing, and boss-friendly frontline control.",
  },
];

const weaponFaqs = [
  {
    q: "How many weapons are in Where Winds Meet?",
    a: "This guide tracks seven main weapons: Dual Blades, Sword, Spear, Mo Blade, Fan, Umbrella, and Rope Dart.",
  },
  {
    q: "What is the best weapon for new players?",
    a: "Sword is the safest first pick, while Spear is strong if you want more reach and easier spacing during bosses or packs.",
  },
  {
    q: "Where is the Where Winds Meet weapon tier list?",
    a: "Use the dedicated weapons tier list linked from this page for ranking context, then return here to compare roles, strengths, and play feel.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Weapons Guide - All Weapons, Roles & Tier Links",
  description:
    "All Where Winds Meet weapons in one guide: Spear, Sword, Dual Blades, Mo Blade, Fan, Umbrella, Rope Dart, roles, builds, tier-list links, and playstyle picks.",
  alternates: buildHreflangAlternates("/guides/weapons"),
  openGraph: {
    title: "Where Winds Meet Weapons Guide - All Weapons, Roles & Tier Links",
    description:
      "All Where Winds Meet weapons in one guide: roles, builds, tier-list links, and playstyle picks.",
    url: `${baseUrl}/guides/weapons`,
  },
  twitter: {
    title: "Where Winds Meet Weapons Guide - All Weapons, Roles & Tier Links",
    description:
      "Compare every Where Winds Meet weapon by role, build fit, and tier-list context.",
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
            Where Winds Meet weapons guide: all weapons, roles, and build links.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Updated {freshness?.lastChecked ?? "2026-06-24"} for{" "}
            {freshness?.gameVersion ?? "Version 1.7"}: this guide collects every current Where Winds Meet weapon in one place. Use it to compare Spear, Sword, Dual Blades, Mo Blade, Fan, Umbrella, and Rope Dart by role, tier-list context, build fit, and how each weapon actually feels to play.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            If you need a quick ranking snapshot, open the dedicated{" "}
            <Link
              href="/guides/weapons/tier-list"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Where Winds Meet weapons tier list
            </Link>{" "}
            for tier placements, then jump back here for full context and roles.
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
            to decide which weapon truly fits your pace, not just the current
            meta.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            If you searched for <span className="font-semibold">where winds meet weapons</span>,{" "}
            <span className="font-semibold">where winds meet all weapons</span>, or{" "}
            <span className="font-semibold">wwm weapon tier list</span>, start here first: the cards below explain what each weapon is for, then the linked tier list covers current ranking pressure.
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
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${weapon.tier === "S" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                        weapon.tier === "A" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                          "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}>
                      {weapon.tier} Tier
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
                    Check tier list context
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
