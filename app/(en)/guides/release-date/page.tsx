import type { Metadata } from "next";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const pageUrl = `${baseUrl}/guides/release-date`;

export const metadata: Metadata = {
  title: "Where Winds Meet Release Date by Platform (PC, PS5 & More)",
  description:
    "When did Where Winds Meet release, and on which platforms? Short answer with an official-sourced platform table, Steam and NetEase cites, and links to platforms, beta status, and download routes.",
  alternates: buildHreflangAlternates("/guides/release-date"),
  openGraph: {
    title: "Where Winds Meet Release Date by Platform (PC, PS5 & More)",
    description:
      "When did Where Winds Meet release? Official global launch November 14, 2025 on PC and PS5, with platform-by-platform release details.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Where Winds Meet Release Date by Platform (PC, PS5 & More)",
    description:
      "When did Where Winds Meet release? November 14, 2025 global launch with platform details.",
  },
};

const faqs = [
  {
    question: "When did Where Winds Meet release?",
    answer:
      "According to NetEase's August/September 2025 IR announcement and the November 2025 NetEase Games launch post, the global launch date is November 14, 2025. Steam lists the same release date.",
  },
  {
    question: "Which platforms got Where Winds Meet at launch?",
    answer:
      "The NetEase Games launch post names Steam, PlayStation 5, Epic Games Store, and the official website. Pre-launch IR messaging highlighted PC and PlayStation 5. Other storefronts (Xbox, mobile) may have different timing—check the platforms guide and your regional store.",
  },
  {
    question: "Is Where Winds Meet free to play at release?",
    answer:
      "Steam lists the game as free-to-play. The NetEase Games launch post also describes it as free-to-play with no pay-to-win mechanics claimed by the publisher. Always confirm current store terms in your region.",
  },
  {
    question: "Does release include cross-play?",
    answer:
      "The NetEase Games launch post states full cross-play and cross-progression at global launch. Steam's About section also describes play across Xbox, PS5, PC, and mobile with full cross-play and cross-progression. Binding rules still matter—see /guides/platforms.",
  },
  {
    question: "Is Where Winds Meet still in beta after the release date?",
    answer:
      "Official launch materials describe a worldwide launch, not an ongoing beta. For beta / final-test history and signup notes, use /guides/beta. Exact beta-end timestamps remain Pending unless an official post states them.",
  },
  {
    question: "Where should I download Where Winds Meet?",
    answer:
      "Use the official storefront for your platform (Steam, PlayStation, Epic, official site, Microsoft Store, or mobile stores where available). Start with /guides/platforms for status and account-linking checks.",
  },
];

const platformReleaseTable = [
  {
    platform: "Global launch date",
    status: "November 14, 2025",
    notes: "Season 1: Blade Out went live at 2pm PST per NetEase Games launch post",
  },
  {
    platform: "PC — Steam",
    status: "November 14, 2025",
    notes: "Free-to-play; cross-platform multiplayer",
  },
  {
    platform: "PC — Epic Games Store",
    status: "Available at global launch",
    notes: "Listed in NetEase Games launch post",
  },
  {
    platform: "PC — official website client",
    status: "Available at global launch",
    notes: "Listed in NetEase Games launch post",
  },
  {
    platform: "PlayStation 5",
    status: "Available at global launch",
    notes: "Free-to-play per NetEase IR and launch post",
  },
  {
    platform: "Cross-play / cross-progression",
    status: "Available at launch",
    notes: "Full cross-play and cross-progression per NetEase Games launch post and Steam About",
  },
  {
    platform: "Xbox Series X|S / Xbox on PC / Xbox Cloud",
    status: "June 8, 2026",
    notes: "Official availability per platforms page sources",
  },
  {
    platform: "iOS",
    status: "Region-dependent",
    notes: "Pending official confirmation for single global App Store date",
  },
  {
    platform: "Android / Google Play",
    status: "Region-dependent",
    notes: "Pending official confirmation for single global Play Store date",
  },
];

const sources = [
  {
    label: "NetEase IR — Where Winds Meet set to launch November 14th",
    href: "https://ir.netease.com/news-releases/news-release-details/open-world-wuxia-arpg-where-winds-meet-set-launch-november-14th",
  },
  {
    label: "NetEase Games — Global launch announcement",
    href: "https://www.neteasegames.com/news/20251114/37000_1271123.html",
  },
  {
    label: "Steam — Where Winds Meet store page",
    href: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
  },
];

export default function ReleaseDatePage() {
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
        { "@type": "ListItem", position: 3, name: "Release Date", item: pageUrl },
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
          When did Where Winds Meet release (and on which platforms)?
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            According to NetEase&apos;s investor news and the NetEase Games global launch post, <strong>Where Winds Meet launched globally on November 14, 2025</strong>, with Season 1: Blade Out going live at <strong>2pm PST</strong> that day. The launch post lists availability on <strong>Steam, PlayStation 5, Epic Games Store, and the official website</strong>, with <strong>full cross-play and cross-progression</strong>. Steam&apos;s store page also shows Release Date: Nov 14, 2025. Later platform rollouts (for example Xbox or region-gated mobile) are summarized on the platforms guide—verify store pages for your region before installing.
          </p>
        </div>
      </header>

      <section className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Platform release table</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-50">Release dates by platform</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Platform / Channel</th>
                <th className="px-4 py-3">Release / Availability</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {platformReleaseTable.map((row) => (
                <tr key={row.platform}>
                  <td className="px-4 py-3 font-semibold text-slate-50">{row.platform}</td>
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
            href="/guides/platforms"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Platforms guide &gt;
          </Link>
          <Link
            href="/guides/beta"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Beta status &gt;
          </Link>
          <Link
            href="/tools/interactive-map"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Interactive map &gt;
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
          Unofficial Where Winds Meet fan hub. All trademarks are the property of their respective owners. Always verify dates and downloads on official store pages.
        </p>
      </section>
    </article>
  );
}
