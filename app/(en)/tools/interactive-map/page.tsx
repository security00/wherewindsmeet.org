import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveMapEmbed } from "@/components/InteractiveMapEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const pageUrl = `${baseUrl}/tools/interactive-map`;
const officialMapUrl = "https://www.wherewindsmeetgame.com/map/en/";
const mapgenieUrl = "https://mapgenie.io/where-winds-meet/maps/world";
const sixFastUrl = "https://yysls-map.6fast.com/yysls/maps/qinghe?lang=en";

export const metadata: Metadata = {
  title: "Where Winds Meet Interactive Map - Official Map, CN Map & Boss Locations",
  description:
    "Use a Where Winds Meet interactive map to find official map pins, CN map routes, NPCs, bosses, chests, oddities, teleport points, collectibles, and farming routes.",
  alternates: buildHreflangAlternates("/tools/interactive-map"),
  openGraph: {
    title: "Where Winds Meet Interactive Map - Official Map, CN Map & Boss Locations",
    description:
      "Choose the official Where Winds Meet map, an English MapGenie view, or the 6Fast CN map for bosses, NPCs, chests, oddities, and route planning.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Where Winds Meet Interactive Map - Official Map, CN Map & Boss Locations",
    description:
      "Official map, CN map alternative, MapGenie, bosses, NPCs, chests, oddities, and farming routes.",
  },
};

const mapChoiceCards = [
  {
    title: "Official map",
    detail:
      "Best first stop for the official Where Winds Meet interactive map and broad open-world exploration reference.",
    href: officialMapUrl,
    label: "Open official map",
  },
  {
    title: "CN map alternative",
    detail:
      "Useful when players search for a CN map, translated route references, or a second check for Qinghe and Kaifeng pins.",
    href: sixFastUrl,
    label: "Open CN map",
  },
  {
    title: "MapGenie global map",
    detail:
      "Good for an English-first interface when you need chests, NPCs, teleport points, and collectible route planning.",
    href: mapgenieUrl,
    label: "Open MapGenie",
  },
];

const faqs = [
  {
    question: "What is the best Where Winds Meet interactive map?",
    answer:
      "Start with the official Where Winds Meet interactive map for official coverage. Use MapGenie for an English-first route planner and the 6Fast CN map when you want a CN alternative or a second source for pins.",
  },
  {
    question: "What is the Where Winds Meet CN map?",
    answer:
      "Players usually mean a Chinese-language or China-server map resource with dense pins and route references. It can be useful for cross-checking locations, but names and labels may not match global English terminology exactly.",
  },
  {
    question: "Can these maps sync my in-game progress?",
    answer:
      "Usually no. Most Where Winds Meet interactive maps help with manual planning and checklist work, but they do not automatically read your character progress.",
  },
  {
    question: "Why does the embedded map show ads or popups?",
    answer:
      "The embedded content is controlled by the map provider. This page does not inject ads, but it also cannot remove ads inside a third-party map.",
  },
];

export default function InteractiveMapPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: pageUrl,
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${baseUrl}/tools` },
        { "@type": "ListItem", position: 3, name: "Interactive Map", item: pageUrl },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Interactive Map</span>: official map, CN map, bosses, NPCs,
          and collectibles.
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            If you are trying to locate a specific NPC, boss, chest, oddity, collectible, teleport point, or activity
            quickly, an interactive map is usually faster than reading a long walkthrough.
          </p>
          <p>
            This page gives you the official map, an English-first MapGenie option, and a CN map alternative so searches
            like &quot;where winds meet interactive map&quot; and &quot;where winds meet cn map&quot; land on the right tool immediately.
          </p>
        </div>
      </header>

      <section id="cn-map" className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Quick answer</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Which Where Winds Meet map should you use?</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
          Start with the official interactive map if you want the safest source, then use MapGenie for English labels or
          the 6Fast CN map when you need an alternate route reference. CN map pages can be especially useful for dense
          pin clusters, but always verify important boss, NPC, and collectible locations in-game.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {mapChoiceCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-emerald-300/60 hover:bg-slate-900"
            >
              <h3 className="text-sm font-semibold text-slate-50">{card.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">{card.detail}</p>
              <span className="mt-3 inline-flex text-xs font-semibold text-emerald-200">{card.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <InteractiveMapEmbed
          deferLoad
          deferMs={2500}
          options={[
            {
              id: "official",
              label: "Official Map",
              src: officialMapUrl,
              title: "Where Winds Meet Official Interactive Map",
              referrerPolicy: "no-referrer",
            },
            {
              id: "mapgenie",
              label: "MapGenie (Global)",
              src: mapgenieUrl,
              title: "Where Winds Meet Interactive Map - MapGenie",
            },
            {
              id: "6fast",
              label: "6Fast (CN alt)",
              src: sixFastUrl,
              title: "Where Winds Meet Interactive Map - 6Fast",
              referrerPolicy: "no-referrer",
            },
          ]}
        />

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          <p>
            These maps are embedded from official and third-party providers. If an embed fails to load because of
            region rules, cookies, or provider downtime, open the map directly:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a
                href={officialMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                Official interactive map (opens in a new tab)
              </a>
            </li>
            <li>
              <a
                href={mapgenieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                MapGenie map (opens in a new tab)
              </a>
            </li>
            <li>
              <a
                href={sixFastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                6Fast CN map (opens in a new tab)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">FAQ</h2>

        <div className="space-y-3">
          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4" open>
            <summary className="cursor-pointer font-semibold text-slate-100">{faqs[0].question}</summary>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>{faqs[0].answer}</p>
              <p className="text-xs text-slate-400">
                Coverage and pin accuracy change over time. Treat every map as a helper and verify important locations
                in-game before you spend materials, time gates, or event attempts.
              </p>
            </div>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">{faqs[1].question}</summary>
            <p className="mt-3 text-sm text-slate-300">{faqs[1].answer}</p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">{faqs[2].question}</summary>
            <p className="mt-3 text-sm text-slate-300">{faqs[2].answer}</p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">{faqs[3].question}</summary>
            <p className="mt-3 text-sm text-slate-300">{faqs[3].answer}</p>
          </details>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8 md:grid-cols-3">
        <div className="space-y-2 md:col-span-2">
          <h2 className="text-xl font-bold text-slate-50">Next: use the map with these guides</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Interactive maps are best when paired with a short checklist. Use the map to find the location fast, then
            use a guide to understand triggers, requirements, and common bugs.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            href="/tools/reset-timer"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Reset timer &gt;
          </Link>
          <Link
            href="/tools/checklist"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Daily & weekly checklist &gt;
          </Link>
          <Link
            href="/guides/npc-list"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            NPC list & Old Friends &gt;
          </Link>
          <Link
            href="/guides/bosses"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Bosses guide hub &gt;
          </Link>
          <Link
            href="/guides/items"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Items & materials &gt;
          </Link>
        </div>
      </section>
    </article>
  );
}
