import type { Metadata } from "next";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const pageUrl = `${baseUrl}/guides/beta`;

export const metadata: Metadata = {
  title: "Where Winds Meet Beta Status: Still in Beta, Final Test & Launch",
  description:
    "Is Where Winds Meet still in beta? Short answer based on official global-launch posts, how beta differs from the November 14, 2025 release, and what to check before you download or link accounts.",
  alternates: buildHreflangAlternates("/guides/beta"),
  openGraph: {
    title: "Where Winds Meet Beta Status: Still in Beta, Final Test & Launch",
    description:
      "Is Where Winds Meet still in beta? Official global materials describe a full worldwide launch, not an ongoing beta.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Where Winds Meet Beta Status: Still in Beta, Final Test & Launch",
    description:
      "Is Where Winds Meet still in beta? November 14, 2025 worldwide launch per NetEase and Steam.",
  },
};

const faqs = [
  {
    question: "Is Where Winds Meet still in beta?",
    answer:
      "Official NetEase Games copy for November 14, 2025 describes a worldwide launch. Steam lists a release date of Nov 14, 2025. Treat the live global game as released unless an official regional notice still says beta.",
  },
  {
    question: "When did Where Winds Meet leave beta?",
    answer:
      "Pending official confirmation for a single 'beta ended' timestamp. Use the global launch date (November 14, 2025) from NetEase / Steam as the clear public milestone, and link /guides/release-date.",
  },
  {
    question: "Was there a Where Winds Meet final test or open beta?",
    answer:
      "Pending official confirmation in available sources. If you have access to an official final-test or open-beta post, verify dates before planning around beta-specific windows.",
  },
  {
    question: "Do I need a beta code to play now?",
    answer:
      "For the live global release on listed storefronts, official launch materials point players to normal free-to-play downloads (Steam, PS5, Epic, official site). Region or store edge cases: verify on the store page. Do not invent active beta keys.",
  },
  {
    question: "Does beta progress transfer to the live game?",
    answer:
      "Pending official confirmation. Check official account / FAQ posts before assuming cross-save from any test client. See also cross-progression notes on /guides/platforms.",
  },
  {
    question: "Where do I read release and platform details?",
    answer:
      "Use /guides/release-date for when it released and on which platforms, and /guides/platforms for Xbox, PS5, PC, mobile, and cross-play details.",
  },
];

const statusTable = [
  {
    item: "Current global status (post–Nov 14, 2025)",
    status: "Launched worldwide",
    notes: "NetEase Games and Steam show a release date, not a beta tag",
  },
  {
    item: "Still in closed beta (global)?",
    status: "No indication",
    notes: "Launch materials describe launch / release",
  },
  {
    item: "Exact beta / final-test end date",
    status: "Pending official confirmation",
    notes: "Use November 14, 2025 global launch as the clear milestone",
  },
  {
    item: "Open beta / final test signup window",
    status: "Pending official confirmation",
    notes: "Do not invent signup URLs or deadlines",
  },
  {
    item: "Beta rewards / progress carry-over",
    status: "Pending official confirmation",
    notes: "Link only official FAQ if found",
  },
  {
    item: "Relation to release date",
    status: "See /guides/release-date",
    notes: "Global launch November 14, 2025",
  },
];

const sources = [
  {
    label: "NetEase Games — Global launch announcement",
    href: "https://www.neteasegames.com/news/20251114/37000_1271123.html",
  },
  {
    label: "NetEase IR — Where Winds Meet set to launch November 14th",
    href: "https://ir.netease.com/news-releases/news-release-details/open-world-wuxia-arpg-where-winds-meet-set-launch-november-14th",
  },
  {
    label: "Steam — Where Winds Meet store page",
    href: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
  },
];

export default function BetaPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: pageUrl,
      dateModified: "2026-09-28",
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
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Beta Status", item: pageUrl },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHubBacklink language="en" />

      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Guides</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Is Where Winds Meet still in beta?
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            <strong>No — official global materials describe a full worldwide launch, not an ongoing beta.</strong> According to the NetEase Games launch post, Where Winds Meet <strong>launched worldwide</strong> with Season 1: Blade Out on <strong>November 14, 2025 (2pm PST)</strong>, available on Steam, PlayStation 5, Epic Games Store, and the official website. Steam lists <strong>Release Date: Nov 14, 2025</strong>. Exact dates for any earlier closed/open/final tests, and whether a specific region still labels a client as &quot;beta,&quot; remain <strong>Pending official confirmation</strong> unless you have a primary source.
          </p>
        </div>
      </header>

      <section className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Beta status table</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Beta and launch status</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {statusTable.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-semibold text-slate-50">{row.item}</td>
                  <td className="px-4 py-3 leading-6">{row.status}</td>
                  <td className="px-4 py-3 leading-6 text-slate-300">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4" open={index === 0}>
              <summary className="cursor-pointer font-semibold text-slate-100">{faq.question}</summary>
              <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Related</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Next steps</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link
            href="/guides/release-date"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Release date &gt;
          </Link>
          <Link
            href="/guides/platforms"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Platforms guide &gt;
          </Link>
          <Link
            href="/guides/npc-list"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            NPC list &gt;
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 text-xs leading-relaxed text-slate-400 sm:p-8">
        <p className="font-semibold text-slate-300">Last checked: 2026-09-28</p>
        <p className="mt-2 font-semibold text-slate-300">Sources</p>
        <ul className="mt-2 space-y-1 list-disc pl-5">
          {sources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-slate-500">
          Unofficial Where Winds Meet fan hub. All trademarks are the property of their respective owners. Beta and launch status can differ by region—verify on official store and news pages.
        </p>
      </section>
    </article>
  );
}
