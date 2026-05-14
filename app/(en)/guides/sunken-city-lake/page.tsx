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
  "slug": "sunken-city-lake",
  "title": "Sunken City Lake Where Winds Meet Guide: Unlock, Dreamtouch Brush, Entrance, and Rewards",
  "metaTitle": "Sunken City Lake Where Winds Meet Guide",
  "description": "Sunken City Lake Where Winds Meet guide: unlock after To Friends, to the End, speak with the painter, get Dreamtouch Brush, dive for the entrance, chase Lan Ao, and claim rewards.",
  "eyebrow": "Breakout query · Qinchuan campaign",
  "updated": "2026-05-14",
  "quickAnswer": "Sunken City Lake is not just a lake location search. It is a Qinchuan campaign quest that unlocks after progress in To Friends, to the End. The practical path is: advance the painter chain, talk to the painter by the large rock near Sunken City Lake, pick up the Dreamtouch Brush, then search underwater for the entrance.",
  "facts": [
    {
      "label": "Region",
      "value": "Qinchuan Path, Hexi"
    },
    {
      "label": "Unlock req.",
      "value": "Progress To Friends, to the End"
    },
    {
      "label": "Key item",
      "value": "Dreamtouch Brush"
    },
    {
      "label": "Rewards",
      "value": "Echo Jade, Hexi EXP, Coins"
    }
  ],
  "steps": [
    {
      "title": "Progress To Friends, to the End first",
      "detail": "If the painter does not trigger Sunken City Lake, return to the Qinchuan Worldly Affairs chain. This is the most important blocker behind the breakout query."
    },
    {
      "title": "Speak with the painter near Sunken City Lake",
      "detail": "After prerequisites, go to the large rock near Sunken City Lake and talk to the painter to unlock the campaign route."
    },
    {
      "title": "Pick up the Dreamtouch Brush",
      "detail": "Follow the waypoint after the painter conversation. The brush is found left from the grass near ruins; treat it as the quest key that moves you into the lake sequence."
    },
    {
      "title": "Search underwater for the entrance",
      "detail": "Use the waypoint and conserve stamina. If you can glide/float over water with Idle Wind, use it until you need to dive directly toward the entrance marker."
    },
    {
      "title": "Follow the city sequence and chase Lan Ao",
      "detail": "Later beats include following scent with Wind Sense, entering the house by the medicine stall, finding a warehouse key, investigating a cliff, and listening to Fang Bai / Lan Ao conversations."
    },
    {
      "title": "Collect rewards and return to Qinchuan cleanup",
      "detail": "After completion, use Qinchuan hub for chests, oddities, and remaining linked quests."
    }
  ],
  "blockers": [
    {
      "title": "Painter does not start the quest",
      "detail": "You are probably too early in To Friends, to the End."
    },
    {
      "title": "Cannot find underwater entrance",
      "detail": "Use the waypoint and manage stamina; glide or float until the final dive if possible."
    },
    {
      "title": "Lost after Dreamtouch Brush",
      "detail": "The brush leads into the underwater entrance step; do not leave the area before checking the water marker."
    }
  ],
  "faqs": [
    {
      "question": "How do I unlock Sunken City Lake?",
      "answer": "Progress To Friends, to the End, then speak with the painter at the large rock near Sunken City Lake."
    },
    {
      "question": "Where is the Dreamtouch Brush?",
      "answer": "After speaking with the painter, follow the waypoint; references place it left from the grass near ruins."
    },
    {
      "question": "What rewards does Sunken City Lake give?",
      "answer": "Reference rewards include Lingering Melody, Medicinal Tales, Oscillating Jade, Echo Jade, Hexi Exploration, Enlightenment Points, Character EXP, and Coins."
    },
    {
      "question": "Is this a Qinchuan quest?",
      "answer": "Yes. It is part of the Qinchuan Path / Hexi content cluster."
    }
  ],
  "intentCards": [
    {
      "title": "Unlock intent",
      "summary": "Most users need to know why the quest is missing.",
      "items": [
        "Check To Friends, to the End progress",
        "Find painter near the lake",
        "Confirm Qinchuan Path access"
      ]
    },
    {
      "title": "Objective intent",
      "summary": "Users who already unlocked it need the route order.",
      "items": [
        "Dreamtouch Brush",
        "Underwater entrance",
        "Lan Ao chase and investigation"
      ]
    },
    {
      "title": "Reward intent",
      "summary": "Players want to know whether it is worth finishing.",
      "items": [
        "Echo Jade and Coins",
        "Hexi Exploration",
        "Quest completion rewards"
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
      "href": "/guides/travel-permit",
      "label": "Travel Permit"
    }
  ],
  "sources": [
    {
      "label": "Game8 Sunken City Lake reference",
      "href": "https://game8.co/games/Where-Winds-Meet/archives/597961"
    },
    {
      "label": "Fextralife Sunken City Lake reference",
      "href": "https://wherewindsmeet.wiki.fextralife.com/Sunken_City_Lake"
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
