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
  "slug": "travel-permit",
  "title": "Where Winds Meet Travel Permit Guide",
  "metaTitle": "Where Winds Meet Travel Permit Guide",
  "description": "Where Winds Meet Travel Permit guide for The People’s Wish: where the permit step appears, how to find identity details, and what to do if the form blocks progress.",
  "eyebrow": "Breakout query · Puzzle objective",
  "updated": "2026-05-14",
  "quickAnswer": "The Travel Permit query points to The People’s Wish in Qinchuan Path. The core task is to find the correct identity details, fill in the permit, then deliver it to the waiter; if you cannot fill it out, you probably missed an inspectable clue in the room.",
  "facts": [
    {
      "label": "Related quest",
      "value": "The People’s Wish"
    },
    {
      "label": "Region",
      "value": "Qinchuan Path / Hexi"
    },
    {
      "label": "Objective type",
      "value": "Form / clue puzzle"
    },
    {
      "label": "Common blocker",
      "value": "Missing identity details"
    }
  ],
  "steps": [
    {
      "title": "Start The People’s Wish quest chain",
      "detail": "Travel Permit searches connect to The People’s Wish, listed as Jianghu Legacy 06 in Qinchuan Path."
    },
    {
      "title": "Search the room for identity details",
      "detail": "Before filling the permit, inspect nearby objects and clues. The form expects details from the environment, not guesses."
    },
    {
      "title": "Fill out the Travel Permit",
      "detail": "Use the clue details you collected. If the form rejects your answer, re-check every interactable item in the room."
    },
    {
      "title": "Deliver the permit to the waiter",
      "detail": "After the form is accepted, return to the quest NPC/waiter to continue the Jianghu Legacy route."
    }
  ],
  "blockers": [
    {
      "title": "Form rejects answers",
      "detail": "You likely missed one of the required clue items."
    },
    {
      "title": "No Travel Permit objective",
      "detail": "Confirm you are on The People’s Wish, not a generic travel-system quest."
    },
    {
      "title": "Following travel-method videos",
      "detail": "Those may be about movement unlocks, not the permit puzzle."
    }
  ],
  "faqs": [
    {
      "question": "What quest is the Travel Permit in?",
      "answer": "Search results tie it to The People’s Wish in Qinchuan Path."
    },
    {
      "question": "How do I get the correct permit details?",
      "answer": "Inspect the room for identity clues, then fill the form based on those details."
    },
    {
      "question": "Is Travel Permit about fast travel?",
      "answer": "Usually no. This rising query appears to be the quest-form objective, not a general mount or travel system."
    },
    {
      "question": "What if the waiter will not accept it?",
      "answer": "Re-check the form and make sure all required identity details were found before submitting."
    }
  ],
  "related": [
    {
      "href": "/guides/qinchuan",
      "label": "Qinchuan guide hub"
    },
    {
      "href": "/guides/codes",
      "label": "May 2026 codes"
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
      "href": "/guides/qinchuan",
      "label": "Qinchuan hub"
    },
    {
      "href": "/guides/to-friends-to-the-end",
      "label": "To Friends, to the End"
    }
  ],
  "sources": [
    {
      "label": "Game8 The People’s Wish / Travel Permit reference",
      "href": "https://game8.co/games/Where-Winds-Meet/archives/597982"
    },
    {
      "label": "Fextralife The People’s Wish reference",
      "href": "https://wherewindsmeet.wiki.fextralife.com/The_People%27s_Wish"
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
