import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialGraphicFigure } from "@/components/guides/OfficialGraphicFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import {
  ANNIVERSARY_SOURCES,
  HUB_OG_IMAGE,
  LAST_VERIFIED,
  LAST_VERIFIED_LABEL,
  PAGE_MODIFIED,
  PAGE_PUBLISHED,
} from "@/lib/globalAnnouncements";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/anniversary";
const pageUrl = `${baseUrl}${guidePath}`;

const metaTitle = "Where Winds Meet 1st Anniversary Rewards: Login Outfit vs In-Game Melodies";
const metaDescription =
  "Official Hutuo anniversary reward split: login pick 1 of 12 outfits is not the same as Lingering Melody ×42 and Resonating Melody ×27. Dates and limits as announced.";

const faqs = [
  {
    q: "Do I get all anniversary outfits just by logging in?",
    a: "No. The verified login line is pick 1 of 12 outfits, not every outfit in the anniversary mix.",
  },
  {
    q: "Are Lingering Melody ×42 and Resonating Melody ×27 the login outfit reward?",
    a: "No. They are listed as separate in-game rewards.",
  },
  {
    q: "When can I claim these?",
    a: "The rewards post dates the Hutuo anniversary version to November 13 (UTC), without a published clock time. The exact in-client claim start after that date is not specified in the text we cite.",
  },
  {
    q: "Is Dual Spears an anniversary login reward?",
    a: "No. Dual Spears is an announced martial art for late November. See /guides/martial-arts-weapons.",
  },
];

const related = [
  { href: "/guides/hutuo", label: "Hutuo update" },
  { href: "/guides/free-outfits#anniversary-login-outfit", label: "Free outfits" },
  { href: "/news#announced-anniversary", label: "Pinned news card" },
  { href: "/guides/patch-notes#announced-november", label: "Patch notes" },
  { href: "/guides/martial-arts-weapons#dual-spears-announced", label: "Dual Spears timing" },
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

export default function AnniversaryGuidePage() {
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
        { "@type": "ListItem", position: 3, name: "Anniversary", item: pageUrl },
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
          <li aria-current="page" className="text-slate-200">Anniversary</li>
        </ol>
      </nav>

      <section className="rounded-3xl border border-amber-500/30 bg-slate-950/85 p-6 shadow-2xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
          Guides · Global server · Announced, not live
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          What are the Where Winds Meet 1st anniversary rewards?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Where Winds Meet’s first global anniversary is tied to the major update named <strong>Hutuo</strong>,
          scheduled for <strong>November 13 (UTC)</strong> on the official rewards post. That label is a date only,
          with no clock time. Use this page for the reward categories the publisher listed. It is not a full event
          calendar, and it does not say every anniversary perk shares one start time or one claim deadline.
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Last verified <time dateTime={LAST_VERIFIED}>{LAST_VERIFIED_LABEL}</time>
          {" · "}announcement verification only, not an in-game test.
          {" · "}Page published <time dateTime={PAGE_PUBLISHED}>{PAGE_PUBLISHED}</time>
          {" · "}Page modified <time dateTime={PAGE_MODIFIED}>{PAGE_MODIFIED}</time>
          {" · "}Unofficial fan hub. China-server reward parity is not verified in the cited Global posts.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Direct answer</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official anniversary copy separates at least two grants. They are not the same bucket. Logging in for the
          outfit choice does not mean you automatically receive every Melody listed, and the Melodies are not
          described as “pick any of 12 outfits.”
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li><strong>Login (no requirements):</strong> pick 1 of 12 outfits. The publisher values that choice at 2,580 Echo Beads. That figure is an in-game valuation label, not a cash payout, and it is not a grant of 2,580 beads as the reward itself.</li>
          <li><strong>Easy in-game rewards:</strong> Lingering Melody ×42 and Resonating Melody ×27.</li>
        </ol>
        <p className="text-sm leading-6 text-slate-300">
          The same post adds more perks in November and December: 5 free outfits plus accessories, without outfit
          names or per-item end dates in the text we verified. This page does not invent those five sets or their
          deadlines.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Hutuo anniversary date</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Item</th>
                <th className="px-3 py-2">Announced fact</th>
                <th className="px-3 py-2">Limit of evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold">Anniversary version name</td>
                <td className="px-3 py-3">[Hutuo]</td>
                <td className="px-3 py-3 text-slate-300">Named in the official posts. No separate version number is added here.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Launch date</td>
                <td className="px-3 py-3">November 13 (UTC) on the rewards post. Other official posts also say November 13.</td>
                <td className="px-3 py-3 text-slate-300">No minute or hour on the UTC date label. Not converted to a Beijing midnight.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Status on 2026-11-06</td>
                <td className="px-3 py-3">Scheduled / preview</td>
                <td className="px-3 py-3 text-slate-300">Not treated as already claimable live content.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Battlefield context lives on <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>.
          Dual Spears is late November, separate from the November 13 anniversary day on the PlayStation Blog.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Login choice versus in-game rewards</h2>
        <div className="space-y-3 text-sm leading-6 text-slate-300">
          <p><strong>Login — pick 1 of 12 outfits.</strong> Official wording: “No Requirements, Claim on Login: Pick 1 of 12 Outfits.” The 2,580 Echo Beads figure is the official valuation label on that outfit choice.</p>
          <p><strong>In-game — Melodies.</strong> Lingering Melody ×42 and Resonating Melody ×27 are listed under “Easy In-Game Rewards,” separate from the login outfit line.</p>
          <p><strong>November and December — 5 free outfits plus accessories.</strong> Confirmed only at that summary level. Set names, shop paths, and claim windows are unknown here. Do not assume they all unlock at the Hutuo launch minute.</p>
        </div>
        <OfficialGraphicFigure
          src="/guides/anniversary/rewards.webp"
          width={1920}
          height={1080}
          alt="Official anniversary rewards graphic from Where Winds Meet, with a login outfit choice beside separate in-game melody counts."
          caption="Official rewards graphic from the anniversary post, shown complete and uncropped. Promotional figures and names printed on the graphic are the publisher's layout. They are not restated as claims on this page."
          sourceHref="https://x.com/WhereWindsMeet_/status/2117386268698943563"
          sourceLabel="Official anniversary rewards post on X"
        />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Related Battle Pass windows</h2>
        <p className="text-sm leading-6 text-slate-300">
          These Battle Pass appearance windows were announced separately. They are not the login “12 outfits” grant,
          and this page does not label them as free login outfits.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Appearance</th>
                <th className="px-3 py-2">Window as announced</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold">New Battle Pass outfit [Frostbound Edge]</td>
                <td className="px-3 py-3">Nov 13, 23:00 – Dec 10, 04:59:59 (UTC+8)</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Returning Battle Pass appearance [Willow Breeze]</td>
                <td className="px-3 py-3">Nov 13, 23:00 – Jan 29, 2027, 04:59:59 (UTC+8)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Scarlet Whispers is a current pass end time</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official October 29 fixes adjusted Battle Pass [Scarlet Whispers] from November 14, 04:59:59 to{" "}
          <strong>November 13, 17:59:59 (UTC+8)</strong>. That is a current pass end-time change, not a description
          of Hutuo anniversary Melodies. Older “until November 14” appearance blurbs are superseded for Scarlet’s
          end clock.
        </p>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What this page will not claim</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>That all anniversary activities start together at one undocumented local midnight.</li>
          <li>A single universal claim deadline for every November and December perk.</li>
          <li>Full names, prices, or end dates for the five November and December free outfits.</li>
          <li>That login automatically grants the Lingering Melody or Resonating Melody stacks.</li>
          <li>China-server reward parity. That is not verified in the cited Global posts.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What you can do now</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Read <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link> for the November 13 update and the late-November Dual Spears split.</li>
          <li>Keep <Link href="/guides/free-outfits" className="text-emerald-300 underline underline-offset-4">/guides/free-outfits</Link> for permanent free cosmetics. Use this page for the Hutuo-specific categories.</li>
          <li>After November 13, re-check official X for the live claim UI. This page does not invent button paths.</li>
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
          {ANNIVERSARY_SOURCES.map((source) => (
            <li key={source.id}>
              <a className="text-emerald-300 underline underline-offset-4" href={source.url} target="_blank" rel="noreferrer">
                {source.label}
              </a>
              <span className="text-slate-500"> — {source.published}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-slate-500">
          Unofficial fan hub. Not affiliated with NetEase or Everstone. Global English posts only.
        </p>
      </section>
    </article>
  );
}
