import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

type Step = { title: string; detail: string };
type Faq = { question: string; answer: string };
type Related = { href: string; label: string };
type Card = { title: string; summary: string; items: string[] };

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
  intentCards: Card[];
};

const guide: GuideData = {
  "slug": "travel-permit",
  "title": "Where Winds Meet Travel Permit Answers: The People’s Wish Guide",
  "metaTitle": "Where Winds Meet Travel Permit Answers Guide",
  "description": "Where Winds Meet Travel Permit answers for The People’s Wish: Xu Jian, Flora Expert, Find Poplar Seeds, six clue check, tomb steps, second tomb tribute puzzle, and common form blockers.",
  "eyebrow": "Breakout query · The People’s Wish",
  "updated": "2026-05-14",
  "quickAnswer": "The Travel Permit answer is the exact reason users search this page. In The People’s Wish, after finding all six clues, fill the permit with: Name: Xu Jian; Truly: Flora Expert; Purpose: Find Poplar Seeds. If the form rejects you, you likely missed a clue in the room.",
  "facts": [
    {
      "label": "Quest",
      "value": "The People’s Wish / Jianghu Legacy 06"
    },
    {
      "label": "Region",
      "value": "Qinchuan Path, Hexi"
    },
    {
      "label": "Name",
      "value": "Xu Jian"
    },
    {
      "label": "Purpose",
      "value": "Find Poplar Seeds"
    }
  ],
  "steps": [
    {
      "title": "Enter the first tomb",
      "detail": "The People’s Wish sends you into a tomb sequence and then to an inn-like room."
    },
    {
      "title": "Pick up the Travel Permit",
      "detail": "Take the permit from the floor and place it on the table before investigating the room."
    },
    {
      "title": "Find all six clues",
      "detail": "Do not guess the form immediately. Inspect the room until all identity clues are collected."
    },
    {
      "title": "Fill the Travel Permit answers",
      "detail": "Use Name: Xu Jian; Truly: Flora Expert; Purpose: Find Poplar Seeds."
    },
    {
      "title": "Continue into later tomb puzzles",
      "detail": "The second tomb includes returning items to correct places, checking tributes, and choosing the Auspicious Bronze Horse."
    },
    {
      "title": "Finish the central-platform route",
      "detail": "Later steps return you to the platform and additional clue/tactic puzzles before the quest closes."
    }
  ],
  "blockers": [
    {
      "title": "Permit answer fails",
      "detail": "Find all six clues before submitting. The game may not accept correct text if clues are missing."
    },
    {
      "title": "Wrong quest",
      "detail": "This is The People’s Wish, not general travel unlock or fast travel."
    },
    {
      "title": "Second tomb confusion",
      "detail": "After the permit, you still need item placement, tribute checks, and the Auspicious Bronze Horse choice."
    }
  ],
  "faqs": [
    {
      "question": "What are the Travel Permit answers?",
      "answer": "Name: Xu Jian. Truly: Flora Expert. Purpose: Find Poplar Seeds."
    },
    {
      "question": "How many clues do I need?",
      "answer": "References say to find all six clues in the room before filling the Travel Permit."
    },
    {
      "question": "What quest is this from?",
      "answer": "The People’s Wish, Jianghu Legacy 06 in Qinchuan Path / Hexi."
    },
    {
      "question": "What comes after the permit?",
      "answer": "More tomb-room puzzles, including item placement, tribute investigation, and choosing the Auspicious Bronze Horse."
    }
  ],
  "intentCards": [
    {
      "title": "Answer intent",
      "summary": "This is the exact search demand.",
      "items": [
        "Name: Xu Jian",
        "Truly: Flora Expert",
        "Purpose: Find Poplar Seeds"
      ]
    },
    {
      "title": "Validation intent",
      "summary": "Why correct answers still fail.",
      "items": [
        "Find all six clues",
        "Place permit on table",
        "Re-check inspectables"
      ]
    },
    {
      "title": "Next-step intent",
      "summary": "What users need after the form.",
      "items": [
        "Second tomb",
        "Tribute statues",
        "Auspicious Bronze Horse"
      ]
    }
  ],
  "related": [
    {
      "href": "/guides/qinchuan",
      "label": "Qinchuan hub"
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
      "href": "/guides/to-friends-to-the-end",
      "label": "To Friends, to the End"
    },
    {
      "href": "/guides/sunken-city-lake",
      "label": "Sunken City Lake"
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
  twitter: { title: guide.metaTitle, description: guide.description },
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
        <p className="mt-3 text-xs text-slate-500">Updated {guide.updated} · Original answer-first guide for rising Google Trends queries.</p>
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
          <h2 className="text-2xl font-bold text-slate-50">Answer-first walkthrough</h2>
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
            <h2 className="text-lg font-bold text-amber-100">Why players search this</h2>
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


      <section className="rounded-3xl border border-cyan-400/25 bg-cyan-500/10 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-bold text-cyan-50">Visual answer card: Travel Permit fields</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-cyan-50/80">
          This is an original visual checklist. Replace these cards with our own in-game screenshots later; for now they make the route and answer sequence scannable without copying another site’s images.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">Name</div>
            <h3 className="text-base font-semibold text-slate-50">Xu Jian</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Enter only after all six clues are found.</p>
          </div>
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">Truly</div>
            <h3 className="text-base font-semibold text-slate-50">Flora Expert</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">This is the identity clue, not a title guess.</p>
          </div>
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">Purpose</div>
            <h3 className="text-base font-semibold text-slate-50">Find Poplar Seeds</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Use this exact purpose when filling the permit.</p>
          </div>
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">Next</div>
            <h3 className="text-base font-semibold text-slate-50">Auspicious Bronze Horse</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Second tomb tribute puzzle comes after the permit.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-bold text-emerald-50">Search intent checklist</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {guide.intentCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-emerald-400/30 bg-slate-950/70 p-4">
              <h3 className="text-lg font-semibold text-emerald-50">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50/80">{card.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-emerald-50/75">
                {card.items.map((item) => <li key={item}>{item}</li>)}
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
        <p className="mt-2">Original summary page. External references are listed for verification and screenshots; they are not mirrored here.</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {guide.sources.map((source) => (
            <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">{source.label}</a></li>
          ))}
        </ul>
      </section>
    </article>
  );
}
