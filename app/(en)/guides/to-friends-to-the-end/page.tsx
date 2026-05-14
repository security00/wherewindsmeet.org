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
  "slug": "to-friends-to-the-end",
  "title": "To Friends, to the End Where Winds Meet Walkthrough: Unlock, Painter, Lettered and Locked",
  "metaTitle": "To Friends, to the End Where Winds Meet Guide",
  "description": "To Friends, to the End Where Winds Meet guide: unlock after Lost Among Ancient Bulwarks, talk to the Unknown Person/Painter, solve Lettered and Locked, free Wen Moshen, and unlock Qinchuan follow-ups.",
  "eyebrow": "Breakout query · Worldly Affairs",
  "updated": "2026-05-14",
  "quickAnswer": "To Friends, to the End is the bridge quest for several Qinchuan searches. It unlocks after Lost Among Ancient Bulwarks. Talk to the Unknown Person, meet the painter at Mustard Hut, investigate Xiao Pass Old Road, complete Lettered and Locked, free Wen Moshen, then report back to the painter.",
  "facts": [
    {
      "label": "Quest type",
      "value": "Worldly Affairs"
    },
    {
      "label": "Region",
      "value": "Qinchuan Path, Hexi"
    },
    {
      "label": "Unlock req.",
      "value": "Lost Among Ancient Bulwarks"
    },
    {
      "label": "Key blocker",
      "value": "Lettered and Locked"
    }
  ],
  "steps": [
    {
      "title": "Complete Lost Among Ancient Bulwarks",
      "detail": "This is the first gate. After it ends, talk to the Unknown Person who gives or discusses the regional map."
    },
    {
      "title": "Follow the Unknown Person to Mustard Hut",
      "detail": "The Unknown Person is revealed as the painter. This conversation introduces the missing friend Fang Bai and starts the practical investigation."
    },
    {
      "title": "Search Xiao Pass Old Road for clues",
      "detail": "The quest points you toward Xiao Pass Old Road. Do not skip this investigation, because it connects into the Lettered and Locked exploration objective."
    },
    {
      "title": "Complete Lettered and Locked at the outpost",
      "detail": "You can sneak around the outpost rather than fully clearing it. Look for the dungeon near the road and wooden-bridge towers."
    },
    {
      "title": "Free Wen Moshen",
      "detail": "Speak with Wen Moshen, then find the cage key. References place the key on the tower closest to the dungeon entrance, on top in a box."
    },
    {
      "title": "Report back to the painter",
      "detail": "Return to the painter at Mustard Hut after Lettered and Locked. This is what makes the chain useful for Sunken City Lake follow-up."
    }
  ],
  "blockers": [
    {
      "title": "Quest missing",
      "detail": "Finish Lost Among Ancient Bulwarks first."
    },
    {
      "title": "Cannot progress at Xiao Pass Old Road",
      "detail": "You probably need Lettered and Locked, not random exploration."
    },
    {
      "title": "Cannot open Wen Moshen cage",
      "detail": "Climb the nearby tower closest to the dungeon entrance and look for the key box."
    }
  ],
  "faqs": [
    {
      "question": "How do I unlock To Friends, to the End?",
      "answer": "Complete Lost Among Ancient Bulwarks, then talk to the Unknown Person who appears afterward."
    },
    {
      "question": "Where is Mustard Hut used?",
      "answer": "The Unknown Person / painter route sends you south to Mustard Hut and later back there after Lettered and Locked."
    },
    {
      "question": "Do I need to clear the outpost?",
      "answer": "References suggest full outpost completion is optional; you can sneak to the dungeon route."
    },
    {
      "question": "Why does this matter for Sunken City Lake?",
      "answer": "Sunken City Lake uses the same painter chain and appears to require progress in this quest."
    }
  ],
  "intentCards": [
    {
      "title": "Unlock intent",
      "summary": "Users ask because the quest does not show.",
      "items": [
        "Lost Among Ancient Bulwarks first",
        "Talk to Unknown Person",
        "Go to Mustard Hut"
      ]
    },
    {
      "title": "Stuck intent",
      "summary": "Most blockers happen at Xiao Pass Old Road.",
      "items": [
        "Lettered and Locked",
        "Dungeon near wooden bridge towers",
        "Tower key for Wen Moshen"
      ]
    },
    {
      "title": "Cluster intent",
      "summary": "This page should pass users to the next Qinchuan page.",
      "items": [
        "Sunken City Lake",
        "Travel Permit",
        "Qinchuan exploration"
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
      "href": "/guides/sunken-city-lake",
      "label": "Sunken City Lake"
    },
    {
      "href": "/guides/travel-permit",
      "label": "Travel Permit"
    }
  ],
  "sources": [
    {
      "label": "Game8 To Friends, to the End reference",
      "href": "https://game8.co/games/Where-Winds-Meet/archives/597677"
    },
    {
      "label": "Fextralife To Friends, to the End reference",
      "href": "https://wherewindsmeet.wiki.fextralife.com/To_Friends,_to_the_End"
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
        <h2 className="text-2xl font-bold text-cyan-50">Visual route: Unknown Person → Mustard Hut → Lettered and Locked</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-cyan-50/80">
          This is an original visual checklist. Replace these cards with our own in-game screenshots later; for now they make the route and answer sequence scannable without copying another site’s images.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">1</div>
            <h3 className="text-base font-semibold text-slate-50">Unknown Person</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Talk after Lost Among Ancient Bulwarks.</p>
          </div>
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">2</div>
            <h3 className="text-base font-semibold text-slate-50">Mustard Hut</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Meet the painter and learn about Fang Bai.</p>
          </div>
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">3</div>
            <h3 className="text-base font-semibold text-slate-50">Xiao Pass Old Road</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Follow clues into Lettered and Locked.</p>
          </div>
          <div className="relative rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-4">
            <div className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-400/20 px-3 text-sm font-bold text-cyan-100">4</div>
            <h3 className="text-base font-semibold text-slate-50">Wen Moshen key</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Find the tower key, free him, report back.</p>
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
