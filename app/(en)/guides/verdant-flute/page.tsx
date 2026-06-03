import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

type Step = { title: string; detail: string };
type Faq = { question: string; answer: string };
type Related = { href: string; label: string };

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
  "slug": "verdant-flute",
  "title": "Where Winds Meet Verdant Flute / Flute of the Tides Guide",
  "metaTitle": "Where Winds Meet Verdant Flute Guide",
  "description": "Where Winds Meet Verdant Flute guide: how this rising query relates to Flute of the Tides, where to start, what the flute mystic skill does, and common unlock blockers.",
  "eyebrow": "Breakout query · Mystic skill",
  "updated": "2026-05-14",
  "quickAnswer": "Players searching Verdant Flute are likely looking for the flute mystic-skill route, commonly surfaced as Flute of the Tides. Start around the Hexi / Peaceward Camp context, look for the relevant monk/NPC prompt, and follow the quest marker rather than searching old launch guides.",
  "facts": [
    {
      "label": "Likely related name",
      "value": "Flute of the Tides"
    },
    {
      "label": "Reward type",
      "value": "Mystic skill / ability"
    },
    {
      "label": "Region context",
      "value": "Hexi-era content"
    },
    {
      "label": "Search trend",
      "value": "Breakout"
    }
  ],
  "steps": [
    {
      "title": "Confirm the exact quest name in your log",
      "detail": "The rising query says Verdant Flute, while current SERP results mostly discuss Flute of the Tides / flute mystic skill. Match the in-game objective first."
    },
    {
      "title": "Travel to the Hexi-era start area",
      "detail": "Search references point to Peaceward Camp / Whitecrown Fortress style routing for the flute questline."
    },
    {
      "title": "Speak with the relevant NPC",
      "detail": "Look for the monk or quest-giver connected to the flute objective, then follow the marker to the performance site."
    },
    {
      "title": "Complete the flute objective and test the skill",
      "detail": "After unlock, add the mystic skill to your combat setup and test its AoE/control value before spending upgrades."
    }
  ],
  "blockers": [
    {
      "title": "Verdant vs Tides naming",
      "detail": "Search terms may differ from the official quest name. Check your quest log for Flute of the Tides or flute mystic skill."
    },
    {
      "title": "Wrong region",
      "detail": "Older launch-region guides may not cover this Hexi-era unlock."
    },
    {
      "title": "Skill not equipped",
      "detail": "After unlocking, verify it is equipped in the correct Mystic Skill slot."
    }
  ],
  "faqs": [
    {
      "question": "Is Verdant Flute the same as Flute of the Tides?",
      "answer": "Search results strongly suggest players use Verdant Flute to find the flute mystic-skill route, while guides commonly call it Flute of the Tides."
    },
    {
      "question": "Where do I start the flute guide?",
      "answer": "Look around the Hexi / Peaceward Camp context and follow the flute-related NPC prompt."
    },
    {
      "question": "What kind of reward is it?",
      "answer": "It is discussed as a mystic skill, useful for area damage/control depending on your build."
    },
    {
      "question": "Should I upgrade it immediately?",
      "answer": "Unlock and test it first, then compare it against your current build and tier-list priorities."
    }
  ],
  "related": [
    {
      "href": "/guides/qinchuan",
      "label": "Qinchuan guide hub"
    },
    {
      "href": "/guides/codes",
      "label": "Palace-era codes"
    },
    {
      "href": "/guides/patch-notes",
      "label": "Patch notes tracker"
    },
    {
      "href": "/tools/interactive-map",
      "label": "Interactive map"
    },
    {
      "href": "/guides/martial-arts-weapons",
      "label": "Martial arts weapons"
    },
    {
      "href": "/guides/tier-list",
      "label": "Tier list"
    }
  ],
  "sources": [
    {
      "label": "Game8 Flute of the Tides reference",
      "href": "https://game8.co/games/Where-Winds-Meet/archives/584566"
    },
    {
      "label": "Games.gg Flute of the Tides reference",
      "href": "https://games.gg/where-winds-meet/guides/where-winds-meet-flute-of-the-tides/"
    }
  ]
};

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

export default function RisingQueryGuidePage() {
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
        <p className="mt-3 text-xs text-slate-500">Updated {guide.updated} · Built to answer rising Google Trends queries without copying full walkthroughs from other sites.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guide.facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
          <h2 className="text-2xl font-bold text-slate-50">Fast walkthrough</h2>
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
            <h2 className="text-lg font-bold text-slate-50">Related guides</h2>
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
        <p className="mt-2">This page is an original summary/checklist. Use the external pages below when you want screenshots, maps, or full route media.</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {guide.sources.map((source) => (
            <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">{source.label}</a></li>
          ))}
        </ul>
      </section>
    </article>
  );
}
