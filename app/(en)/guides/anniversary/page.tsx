import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialGraphicFigure } from "@/components/guides/OfficialGraphicFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { HUB_OG_IMAGE, PAGE_PUBLISHED } from "@/lib/globalAnnouncements";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/anniversary";
const pageUrl = `${baseUrl}${guidePath}`;

const LAST_VERIFIED = "2026-11-10";
const LAST_VERIFIED_LABEL = "2026-11-10 (Asia/Shanghai)";
const PAGE_MODIFIED = "2026-11-10";

const metaTitle = "Where Winds Meet 1st Anniversary Rewards: Login, Melodies, and Top-Up Events";
const metaDescription =
  "Official Hutuo anniversary split: free login pick 1 of 12 outfits is not the same as Lingering Melody ×42 and Resonating Melody ×27, and not the paid top-up events that begin Nov 13 at 23:00 (UTC+8).";

const SOURCE_URLS = [
  "https://x.com/WhereWindsMeet_/status/2117386268698943563",
  "https://x.com/WhereWindsMeet_/status/2117934891497029783",
  "https://blog.playstation.com/2026/10/27/where-winds-meets-climactic-hutuo-battlefield-narrative-arc-revealed-out-nov-13/",
  "https://x.com/WhereWindsMeet_/status/2118357684911042887",
  "https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html",
  "https://x.com/WhereWindsMeet_/status/2119761940117332319",
  "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
  "https://x.com/WhereWindsMeet_/status/2118548827586372057",
] as const;

const sources: { href: string; text: string }[] = [
  {
    href: SOURCE_URLS[0],
    text: "Official X: anniversary rewards — 2026-11-03 06:40:00 Asia/Shanghai; November 13 (UTC); login pick 1 of 12 outfits; Lingering Melody ×42 + Resonating Melody ×27.",
  },
  {
    href: SOURCE_URLS[1],
    text: "Official X: Hutuo major update — 2026-11-04 19:00:02 Asia/Shanghai.",
  },
  {
    href: SOURCE_URLS[2],
    text: "PlayStation Blog: Hutuo narrative arc — 2026-10-27 (page date only; time zone not stated).",
  },
  {
    href: SOURCE_URLS[3],
    text: "Official X: Frostbound Edge and Willow Breeze — 2026-11-05 23:00:03 Asia/Shanghai.",
  },
  {
    href: SOURCE_URLS[4],
    text: "Official October 29 patch notes — official site page date 2026-10-30 (date only); Scarlet Whispers end time.",
  },
  {
    href: SOURCE_URLS[5],
    text: "Official X: paid top-up events — posted 2026-11-09 20:00:04 Asia/Shanghai. Body: start Nov 13 at 23:00 (UTC+8); First Top-Up Reset ([Echo Jade] across all tiers); Flow of Echoes ([Heroic Chimes], anniversary-exclusive Accessories / Back Accessories / Avatars, up to 2,880 [Echo Beads], ends Dec 18 at 04:59:59 (UTC+8)); Soaring Record ([Soaring Points] from all-time top-ups; exclusive Hairstyles, Duo Interaction Toys, the [Crimson Abyss] Set). Graphic-only additions, labeled as such in the page body: unused First Top-Up bonuses will not carry over; after the reset each tier is eligible once; Flow of Echoes names A Game of Stillness and Autumn Ache; Soaring Record graphic labels Abyssal Domain (set) and Autumn Zen (hairstyle).",
  },
  {
    href: SOURCE_URLS[6],
    text: "Official Version 2.4 Dev Letter (page date 2026-11-09, date only); used here only for the Version 2.4 / [Hutuo] label. Campaign and World Boss detail lives on /guides/hutuo.",
  },
  {
    href: SOURCE_URLS[7],
    text: "Official X: “Dual Spears officially arrives on November 26 (UTC)” (posted 2026-11-06 11:39:35 Asia/Shanghai). No clock time; do not rewrite as Beijing midnight.",
  },
];

function Cite({ n }: { n: number | readonly number[] }) {
  const nums = typeof n === "number" ? [n] : n;
  return (
    <>
      {nums.map((num) => (
        <a
          key={num}
          href={SOURCE_URLS[num - 1]}
          className="text-emerald-300 underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          [{num}]
        </a>
      ))}
    </>
  );
}

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
    a: "The rewards post dates the Hutuo anniversary version to November 13 (UTC), without a published clock time. The exact in-client claim start for the free login outfit and Melody grants after that date is not specified in the text we cite.[1] The paid top-up events have a published start of Nov 13 at 23:00 (UTC+8); Flow of Echoes ends on Dec 18 at 04:59:59 (UTC+8). First Top-Up Reset and Soaring Record are not given their own end times in the cited post.[6]",
  },
  {
    q: "Is Dual Spears an anniversary login reward?",
    a: "No. Dual Spears is an announced martial art that officially arrives on November 26 (UTC), with no clock time published. It is not a login outfit grant and not a November 13 same-day unlock. See /guides/martial-arts-weapons.[8]",
  },
  {
    q: "Are First Top-Up Reset, Flow of Echoes, and Soaring Record free login rewards?",
    a: "No. Official copy presents them as paid top-up events, separate from the free “pick 1 of 12 outfits” login line and from Lingering Melody ×42 / Resonating Melody ×27.[6]",
  },
  {
    q: "Did official copy publish top-up prices, tier amounts, or a pity rate?",
    a: "No. Those figures are not in the cited post or on the official event graphic we verified, so this page does not invent them.[6]",
  },
  {
    q: "Do First Top-Up Reset and Soaring Record have published end times?",
    a: "Not in the cited post. Only Flow of Echoes is given an end clock: Dec 18 at 04:59:59 (UTC+8).[6]",
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
          A later official post also announces <strong>paid top-up events</strong> that begin on <strong>Nov 13 at 23:00 (UTC+8)</strong>.
          Those are <strong>not</strong> the free login outfit choice and <strong>not</strong> the in-game Melody grants; they are
          covered in their own section below.
          <Cite n={6} />
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
        <p className="text-sm leading-6 text-slate-300">
          Separately, official copy also announces <strong>paid top-up events</strong>—First Top-Up Reset, Flow of Echoes,
          and Soaring Record—beginning on <strong>Nov 13 at 23:00 (UTC+8)</strong>. Those are <strong>not</strong> free
          login rewards and are <strong>not</strong> the Melody grants.
          <Cite n={6} /> See <strong>Paid top-up events (not free login rewards)</strong> below. The cited post does not
          publish prices, top-up tier amounts, or pity rates, so this page does not invent them.
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
                <td className="px-3 py-3">
                  <strong>Version 2.4</strong> / <strong>[Hutuo]</strong>
                  <Cite n={[7, 1, 2]} />
                </td>
                <td className="px-3 py-3 text-slate-300">Named in the official Version 2.4 Dev Letter (page date 2026-11-09, date only) and in earlier Hutuo posts.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Launch date</td>
                <td className="px-3 py-3">
                  <strong>November 13 (UTC)</strong> on the rewards post. Other official posts also say November 13. The Version 2.4 Dev Letter uses <strong>November 13</strong> with no time zone or clock time.
                </td>
                <td className="px-3 py-3 text-slate-300">
                  No minute or hour on either date label. Not converted to a Beijing midnight. The two wordings are kept side by side; see{" "}
                  <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link> for the longer explanation.
                  <Cite n={[1, 7]} />
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Status on 2026-11-10</td>
                <td className="px-3 py-3">Scheduled / preview</td>
                <td className="px-3 py-3 text-slate-300">Not treated as already claimable live content.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Battlefield context lives on <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>.
          Dual Spears officially arrives on <strong>November 26 (UTC)</strong>, with no clock time published—separate from
          the November 13 anniversary day. Do not rewrite that date as Beijing midnight.
          <Cite n={8} />
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

      <section id="paid-top-up" className="space-y-4 rounded-3xl border border-amber-500/40 bg-amber-500/5 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Paid top-up events (not free login rewards)</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official copy posted on 2026-11-09 announces <strong>paid top-up events</strong>. They are <strong>not</strong> the
          free “pick 1 of 12 outfits” login grant and <strong>not</strong> the Lingering Melody / Resonating Melody in-game
          rewards.
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Start:</strong> “First Top-Up bonuses reset and special top-up events begin on <strong>Nov 13 at 23:00 (UTC+8)</strong>.”
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The cited post does <strong>not</strong> publish prices, top-up tier amounts, or pity rates, so this page does not invent them.
        </p>

        <h3 className="text-xl font-bold text-slate-50">First Top-Up Reset</h3>
        <p className="text-sm leading-6 text-slate-300">
          Official post body: first-purchase bonus <strong>[Echo Jade]</strong> will reset across all tiers.
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The official event <strong>graphic</strong> (not the post body) adds two rules that this page records as graphic-only:
          <Cite n={6} />
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Unused First Top-Up bonuses will not carry over.</li>
          <li>Following the reset, each tier is eligible for the First Top-Up bonus once.</li>
        </ul>
        <p className="text-sm leading-6 text-slate-300">
          First Top-Up Reset itself is <strong>not</strong> given a separate end time in the post body or on the graphic we cite.
          <Cite n={6} />
        </p>

        <h3 className="text-xl font-bold text-slate-50">Flow of Echoes</h3>
        <p className="text-sm leading-6 text-slate-300">
          Top up during the event to accumulate <strong>[Heroic Chimes]</strong> and unlock anniversary-exclusive Accessories,
          Back Accessories, Avatars, and up to <strong>2,880 [Echo Beads]</strong>.
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Event ends on Dec 18 at 04:59:59 (UTC+8).</strong>
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The official event <strong>graphic</strong> (not the post body) also labels that track “Unlocked via Event Top-Up,”
          prints “TOTAL 2880,” and names <strong>A Game of Stillness</strong> and <strong>Autumn Ache</strong>. Those two item
          names are from the graphic only; this page does not treat them as names already printed in the post body.
          <Cite n={6} />
        </p>

        <h3 className="text-xl font-bold text-slate-50">Soaring Record</h3>
        <p className="text-sm leading-6 text-slate-300">
          Earn <strong>[Soaring Points]</strong> from your <strong>all-time</strong> top-ups to claim exclusive Hairstyles,
          Duo Interaction Toys, the <strong>[Crimson Abyss] Set</strong>, and a wide array of premium appearances.
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The official event <strong>graphic</strong> (not the post body) labels a central set <strong>Abyssal Domain</strong> and
          a hairstyle <strong>Autumn Zen</strong>, and prints “Unlocked via Total Top-Up.” This page does <strong>not</strong> merge
          the body-text name <strong>[Crimson Abyss]</strong> and the graphic label <strong>Abyssal Domain</strong> into one set,
          and it does not treat <strong>Abyssal Domain</strong> or <strong>Autumn Zen</strong> as names already printed in the post body.
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Soaring Record itself is <strong>not</strong> given a separate end time in the cited post.
          <Cite n={6} />
        </p>
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
          <li>
            Prices, top-up tier amounts, or pity rates for the paid top-up events.
            <Cite n={6} />
          </li>
          <li>
            An end time for First Top-Up Reset or Soaring Record beyond the shared start time and the Flow of Echoes end clock (<strong>Dec 18 at 04:59:59 (UTC+8)</strong>).
            <Cite n={6} />
          </li>
          <li>
            That graphic-only names (<strong>A Game of Stillness</strong>, <strong>Autumn Ache</strong>, <strong>Abyssal Domain</strong>, <strong>Autumn Zen</strong>) were printed in the official post body, or that <strong>[Crimson Abyss]</strong> and <strong>Abyssal Domain</strong> are the same set.
            <Cite n={6} />
          </li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What you can do now</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Read <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link> for the November 13 Version 2.4 update and Dual Spears on <strong>November 26 (UTC)</strong>.</li>
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
          {sources.map((source) => (
            <li key={source.href}>
              <a className="text-emerald-300 underline underline-offset-4" href={source.href} target="_blank" rel="noreferrer">
                {source.href}
              </a>
              <span className="text-slate-500"> — {source.text}</span>
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
