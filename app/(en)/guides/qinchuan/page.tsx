import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

type Step = { title: string; detail: string };
type Faq = { question: string; answer: string };
type Related = { href: string; label: string };

type ChecklistGroup = {
  title: string;
  summary: string;
  items: string[];
};

type GuideData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  updated: string;
  quickAnswer: string;
  facts: { label: string; value: string }[];
  steps: Step[];
  blockers: Step[];
  faqs: Faq[];
  related: Related[];
  sources: { label: string; href: string }[];
};

const guide: GuideData = {
  slug: "qinchuan",
  title: "Where Winds Meet Qinchuan Path Guide: Unlocks, Quests, Chests, and Exploration",
  metaTitle: "Where Winds Meet Qinchuan Path Guide 2026",
  description:
    "Original Where Winds Meet Qinchuan Path guide for 2026: unlock route, boundary stones, Xiao Pass Old Road, Rustling Meadow, Rivergaze Plateau, quests, chests, oddities, NPCs, and common blockers.",
  eyebrow: "Qinchuan · Rising query hub",
  updated: "2026-05-14",
  quickAnswer:
    "Qinchuan Path is a Hexi subregion and the center of several rising searches: Sunken City Lake, Travel Permit, To Friends, to the End, painter quests, chests, oddities, and region exploration. Use this page as the hub: unlock the boundary-stone route first, clear the Worldly Affairs chain, then sweep collectibles by subregion.",
  facts: [
    { label: "Search intent", value: "Qinchuan unlocks + 100% exploration" },
    { label: "Region context", value: "Hexi → Qinchuan Path" },
    { label: "First checkpoint", value: "Xiao Pass Old Road Boundary Stone" },
    { label: "Best use", value: "Pick the stuck quest, then sweep chests" },
  ],
  steps: [
    {
      title: "Reach the Qinchuan Path gate after Dasan Pass",
      detail:
        "The safest unlock order is to progress the Hexi campaign until you pass through the route that opens Qinchuan Path. If Xiao Pass Old Road is not available yet, keep following the Dasan Pass / Hexi campaign chain instead of searching for collectible pins.",
    },
    {
      title: "Activate Xiao Pass Old Road first",
      detail:
        "Treat Xiao Pass Old Road as your first routing anchor. From there, open nearby boundary stones before collecting chests so you can reset, teleport, and re-check missed points quickly.",
    },
    {
      title: "Split exploration into subregions",
      detail:
        "Do not try to clear the whole map in one pass. Work through Xiao Pass Old Road, Rustling Meadow, Rivergaze Plateau, Lion Barrow, Marsh Plain, Huayin North, and The Huayu Road as separate loops.",
    },
    {
      title: "Clear quest blockers before 100% cleanup",
      detail:
        "Several collectibles and campaign markers are easier after Worldly Affairs quests such as To Friends, to the End and The People’s Wish. If a pin seems inactive, advance nearby quests first.",
    },
    {
      title: "Sweep chests and oddities with the correct tools",
      detail:
        "Qinchuan exploration includes standard chests, camp-clear chests, high-wall chests, oddities, and object-interaction puzzles. Watch for mechanics like Mighty Drop, Reverse, Celestial Seize, and interactable scrolls or jars.",
    },
    {
      title: "Finish by checking NPCs and outposts",
      detail:
        "After the main quest cluster is stable, return to NPCs, outposts, Sentient Beings, and leftover oddities. This order avoids wasting time on pins that are actually locked behind story progress.",
    },
  ],
  blockers: [
    {
      title: "Xiao Pass Old Road is not unlocked",
      detail:
        "You probably have not passed the campaign gate into Qinchuan Path yet. Push the Hexi campaign route before using an exploration checklist.",
    },
    {
      title: "Sunken City Lake will not start",
      detail:
        "That page is tied to the Qinchuan painter chain. Progress To Friends, to the End and related Worldly Affairs objectives first.",
    },
    {
      title: "Travel Permit answers fail",
      detail:
        "Travel Permit is a clue/form objective from The People’s Wish. Re-inspect the room for identity details before filling the permit.",
    },
    {
      title: "A chest marker appears unreachable",
      detail:
        "Check whether the chest requires camp cleanup, a movement skill, a breakable object, a special interaction, or a quest state change.",
    },
  ],
  faqs: [
    {
      question: "Is Qinchuan a single quest?",
      answer:
        "No. Players use “Qinchuan” for the region, exploration route, boundary stones, chests, oddities, NPCs, and several linked quests.",
    },
    {
      question: "What should I do first in Qinchuan Path?",
      answer:
        "Unlock Xiao Pass Old Road and nearby boundary stones, then advance the Worldly Affairs chain before doing a full collectible sweep.",
    },
    {
      question: "Which Qinchuan quests are trending?",
      answer:
        "The strongest rising queries in this cluster are Sunken City Lake, To Friends, to the End, Travel Permit / The People’s Wish, and Verdant Flute-style unlock searches.",
    },
    {
      question: "Should I follow a 100% map before quests?",
      answer:
        "Use a map for pins, but quest progress should come first when a chest, NPC, or campaign marker appears inactive.",
    },
    {
      question: "Can I use this instead of Game8?",
      answer:
        "This is a fast original checklist and routing hub. For exact screenshots or every single pin, use the references at the bottom together with our linked sub-guides.",
    },
    {
      question: "Why do some Qinchuan pins need special skills?",
      answer:
        "Some exploration points use mechanics like Mighty Drop, Reverse, Celestial Seize, destructible objects, or camp-clear states rather than simple walking routes.",
    },
  ],
  related: [
    { href: "/guides/sunken-city-lake", label: "Sunken City Lake walkthrough" },
    { href: "/guides/to-friends-to-the-end", label: "To Friends, to the End" },
    { href: "/guides/travel-permit", label: "Travel Permit / The People’s Wish" },
    { href: "/guides/verdant-flute", label: "Verdant Flute / Flute of the Tides" },
    { href: "/guides/codes", label: "Palace-era codes" },
    { href: "/guides/patch-notes", label: "Patch notes tracker" },
    { href: "/tools/interactive-map", label: "Interactive map" },
  ],
  sources: [
    { label: "Game8 Qinchuan Path exploration reference", href: "https://game8.co/games/Where-Winds-Meet/archives/597557" },
    { label: "Official news feed for current Hexi/Qinchuan update context", href: "https://www.wherewindsmeetgame.com/news/index.html" },
  ],
};

const subregions: ChecklistGroup[] = [
  {
    title: "Xiao Pass Old Road",
    summary:
      "Your entry checkpoint and first cleanup loop. Prioritize the boundary stone, nearby wall-debris chests, and any objective that points back to the outpost.",
    items: [
      "Unlock the boundary stone after entering Qinchuan Path.",
      "Check wall debris northwest of the boundary stone for early chests.",
      "Use this area as the reset point for To Friends, to the End blockers.",
    ],
  },
  {
    title: "Rustling Meadow",
    summary:
      "The densest early collectible area. Expect many chest variants, oddities, camps, ruins, pots, scroll interactions, and nearby Mustard Hut routing.",
    items: [
      "Sweep ruins and house corners before moving to distant pins.",
      "For oddities, read the mechanic hint instead of brute-forcing combat.",
      "Watch for Celestial Seize / Reverse style interactions on unusual objects.",
    ],
  },
  {
    title: "Rivergaze Plateau",
    summary:
      "A mixed traversal area with fence, roof, hut, jar, and runner-style chest interactions around Jing River Crossing.",
    items: [
      "Look up: several chests sit on roofs, fences, or elevated debris.",
      "Try Mighty Drop on suspicious boxes or breakable setups.",
      "Circle huts and jars before assuming a marker is underground.",
    ],
  },
  {
    title: "Lion Barrow / Marsh Plain / Huayin North / The Huayu Road",
    summary:
      "Later cleanup loops. Use these after the core Worldly Affairs chain is moving, because some objectives and NPC routes are easier with quest state unlocked.",
    items: [
      "Clear obvious outposts and boundary stones first.",
      "Return after Travel Permit / The People’s Wish if nearby NPCs or prompts feel incomplete.",
      "Use related quest pages for objective-specific blockers.",
    ],
  },
];

const questCluster: ChecklistGroup[] = [
  {
    title: "Sunken City Lake",
    summary:
      "Campaign-style quest search tied to the painter chain and Qinchuan progression.",
    items: ["Progress To Friends, to the End first.", "Look for the painter near the Sunken City Lake area.", "Use the dedicated page when the painter does not trigger."],
  },
  {
    title: "To Friends, to the End",
    summary:
      "Worldly Affairs bridge around Xiao Pass Old Road that appears to gate several Qinchuan follow-up searches.",
    items: ["Confirm Xiao Pass Old Road is active.", "Finish prerequisite Worldly Affairs objectives.", "Return to Sunken City Lake after this chain advances."],
  },
  {
    title: "Travel Permit / The People’s Wish",
    summary:
      "A clue-form objective where you must collect identity details before submitting the permit.",
    items: ["Inspect the room for clues.", "Fill the permit only after collecting details.", "Deliver the completed permit to the waiter/NPC."],
  },
  {
    title: "Verdant Flute / Flute of the Tides",
    summary:
      "A related rising search in the Hexi-era skill cluster, best handled as a mystic-skill unlock page.",
    items: ["Confirm the exact quest name in your log.", "Check Hexi-era NPC prompts.", "Equip and test the mystic skill after unlock."],
  },
];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.description,
  alternates: buildHreflangAlternates(`/guides/${guide.slug}`),
  openGraph: {
    title: guide.metaTitle,
    description: guide.description,
    url: `${baseUrl}/guides/${guide.slug}`,
    siteName: "Where Winds Meet Hub",
    type: "article",
  },
  twitter: {
    title: guide.metaTitle,
    description: guide.description,
  },
};

export default function QinchuanGuidePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      dateModified: guide.updated,
      mainEntityOfPage: `${baseUrl}/guides/${guide.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/50 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">{guide.eyebrow}</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">{guide.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{guide.quickAnswer}</p>
        <p className="mt-3 text-xs text-slate-500">Updated {guide.updated} · Original checklist based on in-game search intent and external references, rewritten for this site.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guide.facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.66fr_0.34fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
          <h2 className="text-2xl font-bold text-slate-50">Qinchuan unlock and route order</h2>
          <ol className="space-y-4">
            {guide.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Step {index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-50">
            <h2 className="text-lg font-bold text-amber-100">Common blockers</h2>
            <ul className="mt-3 space-y-3">
              {guide.blockers.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-amber-50/85">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-sm text-slate-300">
            <h2 className="text-lg font-bold text-slate-50">Related Qinchuan guides</h2>
            <div className="mt-3 flex flex-col gap-2">
              {guide.related.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-emerald-300 hover:border-emerald-400/60">
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-bold text-slate-50">Subregion checklist</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Use this as a clean sweep order. It is intentionally a checklist, not a copied pin dump: finish the route, then use map screenshots or in-game pins for exact coordinates.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {subregions.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{group.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-400">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-bold text-emerald-50">Qinchuan quest cluster</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-emerald-50/85">
          These are the pages most likely to catch rising Google Trends demand around Qinchuan. Use them when the region guide is too broad and you need one stuck objective.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {questCluster.map((group) => (
            <div key={group.title} className="rounded-2xl border border-emerald-400/30 bg-slate-950/70 p-4">
              <h3 className="text-lg font-semibold text-emerald-50">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50/80">{group.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-emerald-50/75">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {guide.faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="font-semibold text-slate-50">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Reference sources</h2>
        <p className="mt-2">This page is an original routing hub. The references below were used to verify structure and current official/news context; they are not mirrored here.</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {guide.sources.map((source) => (
            <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">{source.label}</a></li>
          ))}
        </ul>
      </section>
    </article>
  );
}
