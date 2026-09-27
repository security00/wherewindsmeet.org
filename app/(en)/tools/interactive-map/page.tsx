import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveMapEmbed } from "@/components/InteractiveMapEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const pageUrl = `${baseUrl}/tools/interactive-map`;
const officialMapUrl = "https://www.wherewindsmeetgame.com/map/en/";
const mapgenieUrl = "https://mapgenie.io/where-winds-meet/maps/world";
const sixFastUrl = "https://yysls-map.6fast.com/yysls/maps/qinghe?lang=en";
const map17173Url = "https://map.17173.com/yysls/maps/qinchuan";

export const metadata: Metadata = {
  title: "Where Winds Meet Map — Interactive Map for Bosses, NPCs & Collectibles",
  description:
    "Looking for a Where Winds Meet map? Use the official interactive map, MapGenie, or a CN map alternative for bosses, NPCs, chests, oddities, teleport points, and collectible routes—plus a short FAQ on map vs CN map coverage.",
  alternates: buildHreflangAlternates("/tools/interactive-map"),
  openGraph: {
    title: "Where Winds Meet Map — Interactive Map for Bosses, NPCs & Collectibles",
    description:
      "Choose the official Where Winds Meet map, an English MapGenie view, or the 6Fast CN map for bosses, NPCs, chests, oddities, and route planning.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Where Winds Meet Map — Interactive Map for Bosses, NPCs & Collectibles",
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
  {
    title: "17173 CN map reference",
    detail:
      "A dense official-partner CN reference for existing regions. The linked page is Qinchuan, not Jiangnan or Hangzhou; no Hangzhou region was listed when checked August 23.",
    href: map17173Url,
    label: "Open 17173 Qinchuan map",
  },
];

const mapComparisonRows = [
  {
    map: "Official map",
    bestFor: "Official pins, broad world reference, and safest first check",
    watchFor: "May be lighter on route notes or community comments",
  },
  {
    map: "CN map",
    bestFor: "Dense route references, alternate pins, Qinghe / Kaifeng cross-checking",
    watchFor: "Names can differ from global English terminology",
  },
  {
    map: "MapGenie",
    bestFor: "English labels, chests, NPCs, teleport points, and checklist planning",
    watchFor: "Third-party coverage can lag behind new patches",
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
  {
    question: "Is there a Where Winds Meet map page separate from the interactive map?",
    answer:
      "No need. Searches for 'Where Winds Meet map' should land here. We intentionally do not maintain a separate thin /map article that would compete with this tool page.",
  },
  {
    question: "Does the Where Winds Meet interactive map show every chest and NPC?",
    answer:
      "Coverage depends on the map provider and patch timing. Treat maps as helpers; confirm critical chests, NPCs, and bosses in the current client.",
  },
  {
    question: "Which map should I use for bosses and collectibles?",
    answer:
      "Start with the official map for authoritative pins, then MapGenie for English checklist planning. Use a CN map when you need a second opinion on dense clusters. Cross-check bosses with /guides/bosses and NPCs with /guides/npc-list.",
  },
  {
    question: "Can I use the map on mobile?",
    answer:
      "Most linked map sites work in a mobile browser, but embeds and third-party scripts vary by device. If an embed fails, use the 'open in new tab' links on this page.",
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
          Where is the Where Winds Meet interactive map (bosses, NPCs, chests & collectibles)?
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            <strong>Short answer:</strong> The fastest Where Winds Meet <strong>map</strong> landing is this page&apos;s interactive tools—not a separate thin article. Start with the <strong>official interactive map</strong> for the safest pins, use <strong>MapGenie</strong> for an English-first checklist of bosses, NPCs, chests, and teleport points, and keep a <strong>CN map</strong> alternative when you need a second source for dense routes. Coverage changes with patches; always verify important pins in-game before spending materials or time gates.
          </p>
        </div>
      </header>

      <section id="map-vs-interactive" className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Map vs interactive map</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Map vs interactive map — same intent</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
          Players searching <strong>where winds meet map</strong>, <strong>where winds meet interactive map</strong>, or <strong>where winds meet cn map</strong> usually want the same thing: a pin layer for exploration. This hub keeps that intent on <strong>one URL</strong> (<code>/tools/interactive-map</code>) so you do not bounce between thin duplicates.
        </p>
        <ul className="mt-3 max-w-4xl space-y-2 text-sm leading-6 text-slate-300 list-disc pl-5">
          <li><strong>Official map</strong> — first check for publisher pins</li>
          <li><strong>MapGenie</strong> — English labels, checklists, community-style planning</li>
          <li><strong>CN map alternatives</strong> — dense route references; names may not match global English exactly</li>
        </ul>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-slate-50">What these maps help you find</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Use filters (when the provider offers them) for common goals:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-300 list-disc pl-5">
            <li>Bosses and elite encounters</li>
            <li>NPCs / Old Friends route planning (pair with <Link href="/guides/npc-list" className="text-emerald-300 hover:text-emerald-200">/guides/npc-list</Link>)</li>
            <li>Chests, oddities, and collectibles</li>
            <li>Teleport / boundary stones and exploration markers</li>
          </ul>
          <p className="mt-2 text-xs text-slate-400">
            Pin completeness is <strong>provider-dependent</strong> and can lag patches. This fan hub does not claim a live total of map markers.
          </p>
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-200">Quick answer</p>
        <h3 className="mt-2 text-xl font-bold text-slate-50">Which Where Winds Meet map should you use?</h3>
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
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Map</th>
                <th className="px-4 py-3">Best for</th>
                <th className="px-4 py-3">Watch for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {mapComparisonRows.map((row) => (
                <tr key={row.map}>
                  <td className="px-4 py-3 font-semibold text-slate-50">{row.map}</td>
                  <td className="px-4 py-3 leading-6">{row.bestFor}</td>
                  <td className="px-4 py-3 leading-6 text-slate-300">{row.watchFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-5 text-amber-100/80">
          Looking for the new CN Jiangnan region? Hangzhou is live in China but not announced for Global. Read the{" "}
          <Link href="/guides/jiangnan-hangzhou" className="font-semibold text-amber-200 hover:text-amber-100">Jiangnan &amp; Hangzhou status guide</Link>{" "}
          before treating a Qinchuan map link as Hangzhou coverage.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-amber-100">The official map opens in a new tab</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              The official site sends X-Frame-Options: SAMEORIGIN, so browsers correctly refuse to display it inside this page. MapGenie is now the default embedded map.
            </p>
          </div>
          <a href={officialMapUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-amber-300/60 px-4 py-2 text-center text-sm font-semibold text-amber-100 hover:border-amber-200">
            Open official map ↗
          </a>
        </div>
        <InteractiveMapEmbed
          deferLoad
          options={[
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
            href="/guides/platforms"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Platforms &gt;
          </Link>
          <Link
            href="/guides/release-date"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Release date &gt;
          </Link>
          <Link
            href="/guides/beta"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Beta status &gt;
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 text-xs leading-relaxed text-slate-400 sm:p-8">
        <p className="font-semibold text-slate-300">Last checked: 2026-09-28</p>
        <p className="mt-2 font-semibold text-slate-300">Sources / map providers to re-verify on publish:</p>
        <ul className="mt-2 space-y-1 list-disc pl-5">
          <li>
            Official map: <a href={officialMapUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200">{officialMapUrl}</a>
          </li>
          <li>
            MapGenie: <a href={mapgenieUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200">{mapgenieUrl}</a>
          </li>
          <li>
            6Fast CN alt: <a href={sixFastUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200">{sixFastUrl}</a>
          </li>
          <li>
            17173 CN reference (Qinchuan): <a href={map17173Url} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200">{map17173Url}</a>
          </li>
        </ul>
        <p className="mt-4 text-slate-500">
          Unofficial Where Winds Meet fan hub. Map embeds are third-party; trademarks belong to their owners.
        </p>
      </section>
    </article>
  );
}
