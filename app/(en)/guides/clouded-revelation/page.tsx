import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const pageUrl = `${baseUrl}/guides/clouded-revelation`;
const patchUrl = "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html";

export const metadata: Metadata = {
  title: "Where Winds Meet Clouded Revelation Guide (Version 2.1)",
  description:
    "Where Winds Meet Version 2.1.3 Clouded Revelation guide: September 3 Drunken Fist, Reflection Temple, August 20 patch fixes, and what to retry.",
  alternates: buildHreflangAlternates("/guides/clouded-revelation"),
  openGraph: {
    title: "Where Winds Meet Clouded Revelation Guide (Version 2.1)",
    description:
      "The official August 20 Version 2.1 changes translated into player actions for quests, Vernal Umbrella, Arena, Homestead, and cosmetics.",
    url: pageUrl,
    type: "article",
  },
};

const sept3Url = "https://www.wherewindsmeetgame.com/news/official/903update.html";
const reflectionUrl = "https://www.wherewindsmeetgame.com/news/official/829devletter.html";

const changes = [
  {
    title: "Drunken Fist / Bamboocut - Draught",
    impact:
      "September 3 adds Skystrike Gauntlets, Riven Twinblades, and four Inner Ways. Do not use the Version 2.0 Mohist shop gauntlets guide for this path.",
    href: "/guides/drunken-fist",
  },
  {
    title: "Reflection Temple (Ghost Month)",
    impact:
      "Limited stage from the event page, currently dated through September 27. Taboos, offerings, and the unfinished ritual are the clear condition.",
    href: "/guides/reflection-temple",
  },
  {
    title: "A Flourishing Legacy / Rising Beyond",
    impact:
      "The official notes address multiple Jianghu Legacy quest, co-op, item, and trigger issues, including Rising Beyond. If this chain was blocked before August 20, update first and retry it in your own world.",
    href: "#flourishing-legacy",
  },
  {
    title: "Vernal Umbrella at Tier 96+",
    impact:
      "Attunement affixes were consolidated into Frequent Projectile DMG Boost, with a Light/Heavy/Varied Combo affix added. Recheck high-tier rolls before replacing an umbrella or changing a build.",
    href: "/guides/weapons/tier-list",
  },
  {
    title: "Arena and combat fixes",
    impact:
      "The patch fixes an Everspring Umbrella phantom-position issue near the Arena edge, Strategic Sword charge-cancel blinking, Guardian Palm Rank 3 stutter, and knockdown recovery behavior.",
    href: "/guides/pvp-tier-list",
  },
  {
    title: "Homestead, cosmetics, and UI",
    impact:
      "Build Mode gains better camera controls, Retainer dispatch information is clearer, and the Heaven's Plea makeup issue after acquiring Sweetened Summer is fixed.",
    href: "/guides/free-outfits",
  },
];

const retrySteps = [
  "Install the August 20 Version 2.1 update and restart the game before testing an old blocker.",
  "Leave co-op and retry the affected Jianghu Legacy step in your own world first.",
  "Track A Flourishing Legacy again, complete its current objective, then check the quest list and mail for the Rising Beyond follow-up.",
  "If the trigger still does not appear, advance in-game time once and relog; treat this as a community workaround, not an official guarantee.",
  "Capture the exact objective text and platform/server before reporting the issue so it is not confused with a pre-patch bug.",
];

const faq = [
  {
    q: "What is Clouded Revelation in Where Winds Meet?",
    a: "Clouded Revelation is the Version 2.1 update. The official overview was published August 19, 2026, patch notes landed August 20, and the current playable follow-up is the September 3 Version 2.1.3 intel drop.",
  },
  {
    q: "Did Version 2.1 change the weapon tier list?",
    a: "It changes high-tier Vernal Umbrella and Silkbind Jade attunement affixes and fixes several combat behaviors. That is enough to re-test affected builds, but not enough by itself to declare a full meta reorder.",
  },
  {
    q: "Was A Flourishing Legacy fixed?",
    a: "The August 20 official notes list fixes across A Flourishing Legacy and its Rising Beyond follow-up. Update and retry the exact blocked step; individual save states can still require a relog or a fresh trigger.",
  },
  {
    q: "Where do I unlock Drunken Fist?",
    a: "Use the dedicated Drunken Fist page. Skystrike Gauntlets start at Gasping Cliff; Riven Twinblades start with Li Yangui. That path is not the Version 2.0 Mohist Hill shop gauntlets.",
  },
];

export default function CloudedRevelationPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: metadata.title,
      description: metadata.description,
      datePublished: "2026-08-21",
      dateModified: "2026-09-04",
      mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHubBacklink language="en" />

      <section className="overflow-hidden rounded-3xl border border-sky-400/30 bg-slate-950/85 p-6 shadow-2xl shadow-sky-950/30 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">Official update checked · September 4, 2026</p>
            <h1 className="mt-3 text-balance text-4xl font-bold text-slate-50 sm:text-5xl">Where Winds Meet Clouded Revelation: Version 2.1.3 guide</h1>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              Clouded Revelation is still the Version 2.1 era. The current playable layer is the September 3 follow-up: Drunken Fist, new Inner Ways, and Reflection Temple on top of the August 20 quest, Vernal Umbrella, Arena, Homestead, and cosmetic fixes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={sept3Url} target="_blank" rel="noreferrer" className="rounded-full border border-sky-300/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-100 hover:border-sky-200">Official September 3 overview ↗</a>
              <a href={patchUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-400">August 20 patch notes ↗</a>
              <a href={reflectionUrl} target="_blank" rel="noreferrer" className="rounded-full border border-violet-400/60 px-4 py-2 text-sm font-semibold text-violet-100 hover:border-violet-300">Reflection Temple letter ↗</a>
              <Link href="/guides/drunken-fist" className="rounded-full border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-300">Drunken Fist unlock →</Link>
            </div>
          </div>
          <div className="mx-auto rounded-3xl border border-sky-400/20 bg-sky-500/10 p-8">
            <Image src="/tier-list/icons/weapon-vernal-umbrella.png" alt="Vernal Umbrella affected by the Where Winds Meet Version 2.1 attunement update" width={220} height={220} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Player-impact summary</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-50">What to recheck after Version 2.1</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {changes.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5 transition hover:border-sky-400/60">
              <h3 className="font-semibold text-sky-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.impact}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="flourishing-legacy" className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">New quest-search opportunity</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-50">A Flourishing Legacy or Rising Beyond still not triggering?</h2>
        <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
          {retrySteps.map((step, index) => (
            <li key={step} className="flex gap-3"><span className="font-bold text-amber-200">{index + 1}.</span><span>{step}</span></li>
          ))}
        </ol>
        <p className="mt-5 text-xs leading-5 text-amber-100/75">
          Evidence note: quest-fix scope comes from the official Version 2.1 notes. The time/mail retry is a community-reported workaround and is deliberately labeled as such.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/75 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Version 2.1 FAQ</h2>
        <div className="mt-5 space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="font-semibold text-slate-100">{item.q}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
