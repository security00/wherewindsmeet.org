import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialGraphicFigure } from "@/components/guides/OfficialGraphicFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  HUB_OG_IMAGE,
  HUTUO_SOURCES,
  LAST_VERIFIED,
  LAST_VERIFIED_LABEL,
  PAGE_MODIFIED,
  PAGE_PUBLISHED,
} from "@/lib/globalAnnouncements";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/hutuo";
const pageUrl = `${baseUrl}${guidePath}`;

const metaTitle = "When Does Hutuo Open in Where Winds Meet? Nov 13 Battlefield Update";
const metaDescription =
  "Hutuo is Where Winds Meet’s announced Nov 13 global anniversary battlefield arc. What’s confirmed, how Dual Spears timing differs, and what to do before launch.";

const faqs = [
  {
    q: "When does Hutuo open?",
    a: "November 13. A rewards announcement specifies November 13 (UTC) without a clock time.",
  },
  {
    q: "Is Hutuo live today (2026-11-06)?",
    a: "No. Treat it as a scheduled global anniversary update, not a completed live claim on this page.",
  },
  {
    q: "Is Dual Spears part of day-one Hutuo on November 13?",
    a: "Not according to the PlayStation Blog schedule: Dual Spears is late November.",
  },
  {
    q: "What is the Campaign: Hutuo entrance or unlock requirement?",
    a: "Not published in the cited announcements. This page does not invent UI paths or level gates.",
  },
  {
    q: "Are Horse Racing Chess and Jianghu Tactics full board-game guides here?",
    a: "No. Only the announced names tied to the anniversary update are confirmed here.",
  },
];

const related = [
  { href: "/guides/anniversary", label: "Anniversary rewards" },
  { href: "/guides/martial-arts-weapons#dual-spears-announced", label: "Dual Spears on martial arts" },
  { href: "/news#announced-hutuo", label: "Pinned news card" },
  { href: "/guides/patch-notes#announced-november", label: "Patch notes" },
  { href: "/guides/qingzhou", label: "Qingzhou (already live)" },
  { href: "/guides/penglai", label: "Penglai (already live)" },
  { href: "/guides/mount-tai-blizzard", label: "Mount Tai Blizzard (already live)" },
];

const timeline = [
  ["Hutuo / first global anniversary major update", "November 13 (UTC date on the rewards post; no clock time)", "Pre-launch as of 2026-11-06."],
  ["Horse Racing Chess / Jianghu Tactics", "Named with the November 13 anniversary update", "Mode rules are not published in the cited text."],
  ["Dual Spears martial art", "Late November", "Not November 13. Light Spears (offense) and Heavy Spears (stance-break), with Spear Stance loops. Choreography credited to Yuen Woo-ping."],
  ["First Anniversary Special Broadcast", "November 2 (also listed as November 2, 14:00 PT)", "That broadcast date is already past. This page does not claim a transcript of every reveal."],
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildHreflangAlternates(guidePath),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: HUB_OG_IMAGE.url,
        width: HUB_OG_IMAGE.width,
        height: HUB_OG_IMAGE.height,
        alt: HUB_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: HUB_OG_IMAGE.url, alt: HUB_OG_IMAGE.alt }],
  },
};

export default function HutuoGuidePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: metaTitle,
      description: metaDescription,
      url: pageUrl,
      inLanguage: "en-US",
      datePublished: PAGE_PUBLISHED,
      dateModified: PAGE_MODIFIED,
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: metaTitle,
      description: metaDescription,
      url: pageUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      image: HUB_OG_IMAGE.url,
      datePublished: PAGE_PUBLISHED,
      dateModified: PAGE_MODIFIED,
      author: { "@type": "Organization", name: "Where Winds Meet Hub" },
      publisher: {
        "@type": "Organization",
        name: "Where Winds Meet Hub",
        logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.ico` },
      },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Hutuo", item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHubBacklink language="en" />

      <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="text-emerald-300 underline underline-offset-4">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className="text-emerald-300 underline underline-offset-4">Guides</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-200">Hutuo</li>
        </ol>
      </nav>

      <section className="rounded-3xl border border-amber-500/30 bg-slate-950/85 p-6 shadow-2xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
          Guides · Global server · Announced, not live
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          When does Hutuo open in Where Winds Meet?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          <strong>Hutuo opens on November 13</strong> as Where Winds Meet’s first global anniversary major update: a
          war-themed narrative arc and a new Campaign framed around a battlefield frontier. Official posts give the
          calendar date. One rewards post labels it <strong>November 13 (UTC)</strong> and does not publish a clock
          time, so this page does not invent a Beijing midnight start.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          This guide is an announcement hub, not a live walkthrough. Entrance steps, unlock gates, boss names, and
          loot tables are not published in the sources below, so they are not invented here. Official text names the
          anniversary major update “Hutuo.” The cited posts do not give a version number, and this page does not
          assign one.
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Last verified <time dateTime={LAST_VERIFIED}>{LAST_VERIFIED_LABEL}</time>
          {" · "}announcement verification only, not an in-game test.
          {" · "}Page published <time dateTime={PAGE_PUBLISHED}>{PAGE_PUBLISHED}</time>
          {" · "}Page modified <time dateTime={PAGE_MODIFIED}>{PAGE_MODIFIED}</time>
          {" · "}Unofficial fan hub. China-server parity for Hutuo is not verified in these sources.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Direct answer</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li><strong>What:</strong> Hutuo is announced as a sprawling new region and climactic battlefield narrative arc, including a new Campaign: Hutuo, tied to the first global anniversary update.</li>
          <li><strong>When:</strong> November 13. The rewards post says November 13 (UTC). No minute or hour is given.</li>
          <li><strong>Status on 2026-11-06:</strong> global preview / pre-launch. Not treated as already live.</li>
          <li><strong>Dual Spears:</strong> an announced martial art arriving in late November, not confirmed as a November 13 same-day unlock.</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What the announcements confirmed</h2>
        <p className="text-sm leading-6 text-slate-300">
          The PlayStation Blog piece by publishing lead Eric Zheng is dated October 27, 2026. That stamp is a page
          date only, with no time zone.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Hutuo is framed as a war-torn frontier. The story emphasis is the battle of Zhongdu Bridge: northern invasion pressure, fractured defenses, and choices about loyalty versus protecting civilians.</li>
          <li>Anniversary callouts on that page name the board and tactics modes Horse Racing Chess and Jianghu Tactics. Those are names only. Rules are not detailed in the article.</li>
          <li>PS5 and PS5 Pro notes — enhanced PSSR, ray-traced reflections, a 60 FPS framing, DualSense haptics, and streaming or load improvements — are publisher commitments for PlayStation. This site has not measured them.</li>
        </ul>
        <p className="text-sm leading-6 text-slate-300">
          Official X posts call the “1st Anniversary major update Hutuo” for November 13 and call out the new
          Campaign: Hutuo. Anniversary reward categories are on{" "}
          <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>.
          A separate post also says Campaign [Hutuo River] and “rally at Zhongdu Bridge on November 13.” Treat that
          wording as the same Hutuo anniversary beat, not as an extra dungeon name.
        </p>
        <OfficialGraphicFigure
          src="/guides/hutuo/roadmap.webp"
          width={1920}
          height={1414}
          alt="Official Hutuo roadmap graphic from Where Winds Meet. Publisher layout of the announced update, not a photograph and not key art."
          caption="Official roadmap graphic from the Hutuo announcement post, shown complete and uncropped. Printed names, dates, and codes stay inside the graphic. This page does not add them to the written guide."
          sourceHref="https://x.com/WhereWindsMeet_/status/2117934891497029783"
          sourceLabel="Official Hutuo announcement on X"
        />
      </section>

      <section id="dual-spears" className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">November 13 versus late November Dual Spears</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official X sometimes mentions Campaign Hutuo and Dual Spears in one “arriving soon” sentence. For calendar
          planning, this hub follows the PlayStation Blog: Dual Spears continues into late November after the
          November 13 celebration. Late November is not November 13.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Beat</th>
                <th className="px-3 py-2">Timing in cited sources</th>
                <th className="px-3 py-2">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {timeline.map((row) => (
                <tr key={row[0]}>
                  <td className="px-3 py-3 font-semibold text-slate-50">{row[0]}</td>
                  <td className="px-3 py-3 leading-6">{row[1]}</td>
                  <td className="px-3 py-3 leading-6 text-slate-300">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          Unlock quest, vendor, level gate, and damage numbers for Dual Spears are not published here. See{" "}
          <Link href="/guides/martial-arts-weapons#dual-spears-announced" className="text-emerald-300 underline underline-offset-4">
            /guides/martial-arts-weapons#dual-spears-announced
          </Link>.
        </p>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">How Hutuo differs from Qingzhou and Penglai</h2>
        <p className="text-sm leading-6 text-slate-300">
          Live Version 2.3 Friends From Afar content, including the Qingzhou and Penglai batch such as Mount Tai
          Blizzard, is a separate, earlier pass. Hutuo is the announced anniversary beat. It is not a rename of Penglai.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-300">
          <li><Link href="/guides/qingzhou" className="text-emerald-300 underline underline-offset-4">/guides/qingzhou</Link></li>
          <li><Link href="/guides/penglai" className="text-emerald-300 underline underline-offset-4">/guides/penglai</Link></li>
          <li><Link href="/guides/mount-tai-blizzard" className="text-emerald-300 underline underline-offset-4">/guides/mount-tai-blizzard</Link></li>
          <li><Link href="/guides/patch-notes" className="text-emerald-300 underline underline-offset-4">/guides/patch-notes</Link> and <Link href="/news" className="text-emerald-300 underline underline-offset-4">/news</Link></li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Not published, so not invented</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>An exact maintenance window or local clock time beyond the November 13 (UTC) date label.</li>
          <li>An in-client entrance path, map pins, or an unlock level.</li>
          <li>Hutuo boss names, phase guides, or drop tables.</li>
          <li>A version number for this update.</li>
          <li>Full rules for Horse Racing Chess or Jianghu Tactics.</li>
          <li>China-server and Global same-day confirmation. That comparison is not in the cited Global English sources.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What you can do before November 13</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Catch up on the live Version 2.3 Qingzhou and Penglai guides linked above if you are still in that batch.</li>
          <li>Read the anniversary reward split so the login outfit choice is not confused with the Melody grants: <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>.</li>
          <li>Watch Dual Spears on <Link href="/guides/martial-arts-weapons#dual-spears-announced" className="text-emerald-300 underline underline-offset-4">/guides/martial-arts-weapons</Link>. Expect late November, not an automatic November 13 unlock.</li>
          <li>Re-check official X and the PlayStation Blog closer to November 13. This page’s last verified date is an announcement check.</li>
        </ol>
      </section>

      <section id="faq" className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="font-semibold text-slate-50">{faq.q}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{faq.a}</p>
          </div>
        ))}
      </section>

      <nav aria-label="Related guides" className="grid gap-2 sm:grid-cols-2">
        {related.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-emerald-300">
            {link.label} →
          </Link>
        ))}
      </nav>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Sources</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          {HUTUO_SOURCES.map((source) => (
            <li key={source.id}>
              <a className="text-emerald-300 underline underline-offset-4" href={source.url} target="_blank" rel="noreferrer">
                {source.label}
              </a>
              <span className="text-slate-500"> — {source.published}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-slate-500">
          Unofficial fan hub. Not affiliated with NetEase or Everstone. Global English announcements only.
        </p>
      </section>
    </article>
  );
}
