import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialGraphicFigure } from "@/components/guides/OfficialGraphicFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { HUB_OG_IMAGE, PAGE_PUBLISHED } from "@/lib/globalAnnouncements";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/anniversary";
const pageUrl = `${baseUrl}${guidePath}`;

const LAST_VERIFIED = "2026-11-13";
const LAST_VERIFIED_LABEL = "2026-11-13 (Asia/Shanghai)";
const PAGE_MODIFIED = "2026-11-13";

const metaTitle = "Where Winds Meet 1st Anniversary Rewards: Windtail Express 12-Outfit Pick, Events, and Shop Prices";
const metaDescription =
  "Official Version 2.4 anniversary list: the free Windtail Express pick of 1 of 12 outfits (until Jan 14, 2027, 04:59:59), every anniversary event window, shop prices as published, and the Willow Breeze end-date discrepancy.";

const SOURCE_URLS = [
  "https://x.com/WhereWindsMeet_/status/2117386268698943563",
  "https://x.com/WhereWindsMeet_/status/2117934891497029783",
  "https://blog.playstation.com/2026/10/27/where-winds-meets-climactic-hutuo-battlefield-narrative-arc-revealed-out-nov-13/",
  "https://x.com/WhereWindsMeet_/status/2118357684911042887",
  "https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html",
  "https://x.com/WhereWindsMeet_/status/2119761940117332319",
  "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
  "https://x.com/WhereWindsMeet_/status/2118548827586372057",
  "https://www.wherewindsmeetgame.com/news/official/1113appearance.html",
  "https://x.com/WhereWindsMeet_/status/2120501807055040709",
  "https://x.com/WhereWindsMeet_/status/2120532003351048535",
  "https://x.com/WhereWindsMeet_/status/2120637700524904525",
  "https://www.wherewindsmeetgame.com/news/official/AcrossAutumnWaters.html",
  "https://store.steampowered.com/news/app/3564740/view/1849192144183182",
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
  {
    href: SOURCE_URLS[8],
    text: "Official Version 2.4 New Appearances Overview (page date 2026-11-11, date only, no time zone or clock on the page date; HTTP 200 on 2026-11-12). Source for the new appearance items and for the restated windows, which match the 11-05 to 11-09 official posts and are not a change. This page publishes no prices; prices come from source [13].",
  },
  {
    href: SOURCE_URLS[9],
    text: "Official X: new mount [Peli-can-eat], wording matching the official overview (“available on Nov 13, 2026, at 23:00, with a limited-time discount until Dec 14, 4:59:59 (UTC+8)” in the post’s full text); links the official overview. Posted 2026-11-11 21:00:02 Asia/Shanghai (2026-11-11T13:00:02Z).",
  },
  {
    href: SOURCE_URLS[10],
    text: "Official X: Hutuo “will officially go live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8).” Launch graphic: “1ST ANNIVERSARY: HUTUO GLOBAL LAUNCH,” single moment 11PM UTC+8 on November 13. Posted 2026-11-11 23:00:01 Asia/Shanghai (2026-11-11T15:00:01Z). Longer explanation on /guides/hutuo.",
  },
  {
    href: SOURCE_URLS[11],
    text: "Official X scenery post. Full text: “The Anniversary Version: Hutuo arrives on November 13 (UTC)!” On-timeline display is cut to “November 13.” Posted 2026-11-12 06:00:02 Asia/Shanghai. Do not use this post to overwrite source [11].",
  },
  {
    href: SOURCE_URLS[12],
    text: "Official “[Across Autumn Waters] Version 2.4 Update Overview” (Global site; page date 2026-11-12, date only; HTTP 200 on 2026-11-13). Image-led page. Source for the 18:00:00–22:59:59 (UTC+8) live update, Windtail Express and the other anniversary event windows (printed without a time zone), shop prices, and the Willow Breeze end date of January 28, 2027, 04:59:59 (which differs from sources [4] and [9]).",
  },
  {
    href: SOURCE_URLS[13],
    text: "Official Steam community announcement “Version 2.4 [Across Autumn Waters] Update Overview,” gid 1849192144183182, posted 2026-11-12 22:43:09 Asia/Shanghai (Steam API timestamp). Same images as source [13].",
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

const faqs: { q: string; a: string; ld?: string }[] = [
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
    a: "Hutuo goes live following a non-downtime update on November 13 (18:00–23:00 (UTC+8); 18:00:00–22:59:59 (UTC+8) in the Version 2.4 overview).[11][13] The overview starts most free anniversary events “after the version update on November 13, 2026,” including Windtail Express, which runs to January 14, 2027, 04:59:59 (no time zone stated). Anniversary Reunion runs November 7, 2026, 05:00:00 to November 21, 2026, 04:59:59. Paid top-up events have a published start of Nov 13 at 23:00 (UTC+8).[6][13] Each event has its own end time in the table above.",
    ld: "Hutuo goes live following a non-downtime update on November 13 (18:00–23:00 (UTC+8); 18:00:00–22:59:59 (UTC+8) in the Version 2.4 overview). The overview starts most free anniversary events \"after the version update on November 13, 2026,\" including Windtail Express, which runs to January 14, 2027, 04:59:59 (no time zone stated). Anniversary Reunion runs November 7, 2026, 05:00:00 to November 21, 2026, 04:59:59. Paid top-up events have a published start of Nov 13 at 23:00 (UTC+8). Each event has its own end time in the table above.",
  },
  {
    q: "Which 12 outfits can I pick from Windtail Express?",
    a: "Celestial Knot, Golden Aura, Crimson Sand, Ninth Pawnshop, Celestial Vanguard, Flicker of Faces, Magpie's Nocturne, Dragon Protector, Scorpion's Heart, Moonlit Inquiry, Flower of Youth, and Veil Between, all from the 2,580 [Echo Bead] tier. The pick is free, cannot be changed, and comes without dye variants. If you own all twelve, you get a [Custom Chest] with [Resonance Voucher] ×10 or [Lingering Melody] ×16.[13]",
    ld: "Celestial Knot, Golden Aura, Crimson Sand, Ninth Pawnshop, Celestial Vanguard, Flicker of Faces, Magpie's Nocturne, Dragon Protector, Scorpion's Heart, Moonlit Inquiry, Flower of Youth, and Veil Between, all from the 2,580 [Echo Bead] tier. The pick is free, cannot be changed, and comes without dye variants. If you own all twelve, you get a [Custom Chest] with [Resonance Voucher] ×10 or [Lingering Melody] ×16.",
  },
  {
    q: "When are the anniversary fireworks?",
    a: "At Pearlglow Lake at 19:30 on November 14 and 19:30 on November 15, as printed; the overview does not state a time zone. A mail gift of [Lingering Melody] ×1 and [Resonating Melody] ×1 can be claimed after 05:00 on November 14, 2026.[13]",
    ld: "At Pearlglow Lake at 19:30 on November 14 and 19:30 on November 15, as printed; the overview does not state a time zone. A mail gift of [Lingering Melody] ×1 and [Resonating Melody] ×1 can be claimed after 05:00 on November 14, 2026.",
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
    q: "Did official copy publish top-up tier amounts or a pity rate?",
    a: "No. The Version 2.4 overview gives the Flow of Echoes rate (10 [Heroic Chime] per 10 Echo Beads topped up) and the Soaring Record 1:1 rule, but no top-up tier amounts or pity rates.[6][13]",
    ld: "No. The Version 2.4 overview gives the Flow of Echoes rate (10 [Heroic Chime] per 10 Echo Beads topped up) and the Soaring Record 1:1 rule, but no top-up tier amounts or pity rates.",
  },
  {
    q: "Do First Top-Up Reset and Soaring Record have published end times?",
    a: "No. Flow of Echoes ends on Dec 18 at 04:59:59 (UTC+8) in source [6]; the Version 2.4 overview prints December 18, 2026, 04:59:59 without a time zone. First Top-Up Reset and Soaring Record have no end time in either source.[6][13]",
    ld: "No. Flow of Echoes ends on Dec 18 at 04:59:59 (UTC+8) in the earlier top-up post; the Version 2.4 overview prints December 18, 2026, 04:59:59 without a time zone. First Top-Up Reset and Soaring Record have no end time in either source.",
  },
  {
    q: "Are the new weapon appearances, VFX, the Radiant Charger chest, and the Peli-can-eat mount free login rewards?",
    a: "No. They are listed on the official Version 2.4 New Appearances Overview, separate from the free “pick 1 of 12 outfits” login line and from Lingering Melody ×42 / Resonating Melody ×27. [Silent Voice: Twin Sentinels] is in the Draw Shop, and [Iris Herald] is a Draw set; neither is described as a free grant.[9]",
  },
  {
    q: "What are the Version 2.4 anniversary shop prices?",
    a: "As printed in the Version 2.4 overview: [Plumed Opulence Limited Pack] 2,580 [Echo Bead]; [Whispered Omens] 600 [Echo Bead] at the event discount, later 1,280 [Echo Bead] in the Shop; [Peli-can-eat] 60 [Echo Bead] until the December 14, 2026, 04:59:59 discount end, then 300 [Echo Bead]; [Radiant Charger] 680, then 540, then as low as 320 [Echo Bead] each; [Astral Array: Celestial Drift] [Sound Jade] ×1 (original [Sound Jade] ×2); [Silent Voice: Twin Sentinels], [Wrathful Lord: Masked Fury], [Gale Steed], and [Bound Majesty] [Harmonic Core] ×1 each; [Iris Herald] [Harmonic Core] ×2; [Willow Breeze] $9.99 (original $14.99). No price is published for the [Pentatonic Harmony Pack].[13]",
    ld: "As printed in the Version 2.4 overview: [Plumed Opulence Limited Pack] 2,580 [Echo Bead]; [Whispered Omens] 600 [Echo Bead] at the event discount, later 1,280 [Echo Bead] in the Shop; [Peli-can-eat] 60 [Echo Bead] until the December 14, 2026, 04:59:59 discount end, then 300 [Echo Bead]; [Radiant Charger] 680, then 540, then as low as 320 [Echo Bead] each; [Astral Array: Celestial Drift] [Sound Jade] ×1 (original [Sound Jade] ×2); [Silent Voice: Twin Sentinels], [Wrathful Lord: Masked Fury], [Gale Steed], and [Bound Majesty] [Harmonic Core] ×1 each; [Iris Herald] [Harmonic Core] ×2; [Willow Breeze] $9.99 (original $14.99). No price is published for the [Pentatonic Harmony Pack].",
  },
  {
    q: "Does Willow Breeze end on January 28 or January 29, 2027?",
    a: "Official copy gives both. The November 5 X post and the New Appearances Overview say Jan 29, 2027, 04:59:59 (UTC+8); the Version 2.4 [Across Autumn Waters] overview says January 28, 2027, 04:59:59, with no time zone stated. This page lists both and does not pick one.[4][9][13]",
    ld: "Official copy gives both. The November 5 X post and the New Appearances Overview say Jan 29, 2027, 04:59:59 (UTC+8); the Version 2.4 [Across Autumn Waters] overview says January 28, 2027, 04:59:59, with no time zone stated. This page lists both and does not pick one.",
  },
  {
    q: "Is December 14 the day the Peli-can-eat mount leaves the shop?",
    a: "Not in the cited copy. December 14, 2026, 04:59:59 is when the 60 [Echo Bead] discount ends and the price reverts to 300 [Echo Bead]. That is not written as a delist date.[9][10][13]",
    ld: "Not in the cited copy. December 14, 2026, 04:59:59 is when the 60 [Echo Bead] discount ends and the price reverts to 300 [Echo Bead]. That is not written as a delist date.",
  },
  {
    q: "Does the Radiant Charger chest listing include the items inside?",
    a: "No. The overview gives prices (680, 540, then as low as 320 [Echo Bead] each) and collection bonuses (five for a themed [Nameplate], seven for a themed [Chat Bubble]), but no item-by-item list and no end time. This page does not name graphic-only items as announced products.[13]",
    ld: "No. The overview gives prices (680, 540, then as low as 320 [Echo Bead] each) and collection bonuses (five for a themed [Nameplate], seven for a themed [Chat Bubble]), but no item-by-item list and no end time. This page does not name graphic-only items as announced products.",
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
        acceptedAnswer: { "@type": "Answer", text: item.ld ?? item.a },
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
          Where Winds Meet’s first global anniversary is tied to the major update named Hutuo—<strong>Version 2.4</strong>.
          Official copy now says Hutuo will officially go live <strong>following</strong> a non-downtime update on November 13,
          from <strong>18:00 to 23:00 (UTC+8)</strong>.
          <Cite n={11} /> Earlier official posts, including the rewards post’s <strong>November 13 (UTC)</strong> label, gave
          a date without a clock; this page keeps those wordings and marks them as <strong>superseded</strong> by the more
          precise window. It does <strong>not</strong> treat 18:00 as the go-live time, and it does <strong>not</strong> treat
          23:00 as the start of the update. The longer launch-window explanation lives on{" "}
          <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>.
          <Cite n={[11, 1, 7, 12]} />
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          Use this page for the reward categories, event windows, and shop prices the publisher listed. The official <strong>Version 2.4 [Across Autumn Waters] Update Overview</strong> (Global site, page date 2026-11-12; Steam, 2026-11-12 22:43:09 Asia/Shanghai) now names the free <strong>Windtail Express</strong> outfit pick, lists each anniversary event with its window, and publishes prices for most new shop items.
          <Cite n={[13, 14]} /> Most of those windows are written as “after the version update on November 13, 2026” to an end time <strong>without a time zone</strong>; this page quotes them as printed. A separate official post announces <strong>paid top-up events</strong> that begin on <strong>Nov 13 at 23:00 (UTC+8)</strong>; those are not the free outfit pick and not the in-game Melody grants.
          <Cite n={6} /> The overview’s live update runs <strong>18:00:00 to 22:59:59 (UTC+8)</strong> on November 13; 18:00 is not go-live.
          <Cite n={[13, 11]} />
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
          <li><strong>Login (no requirements) — Windtail Express:</strong> pick 1 of 12 outfits from the 2,580 [Echo Bead] tier, free, from after the November 13, 2026 version update until <strong>January 14, 2027, 04:59:59</strong> (no time zone stated).<Cite n={[13, 1]} /> The 2,580 figure is the price tier of the eligible outfits, not a grant of 2,580 beads.</li>
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
                <td className="px-3 py-3 font-semibold">Launch window</td>
                <td className="px-3 py-3">
                  Hutuo goes live <strong>following</strong> a non-downtime update on November 13, from <strong>18:00 to 23:00 (UTC+8)</strong>.
                  <Cite n={11} /> The Version 2.4 overview gives the live update as <strong>18:00:00 to 22:59:59 (UTC+8)</strong>.
                  <Cite n={[13, 14]} /> Launch graphic: single moment <strong>11PM UTC+8 on November 13</strong> (15:00 UTC); KST / JST 12AM, AEDT 2AM, NZDT 4AM are <strong>November 14</strong>; CST is US Central Time.
                  <Cite n={11} />
                </td>
                <td className="px-3 py-3 text-slate-300">
                  18:00 is not go-live; 22:59:59 / 23:00 is the end of the window. Earlier date-only labels (rewards post November 13 (UTC), Dev Letter November 13, scenery post November 13 (UTC)) are kept and marked as superseded.
                  <Cite n={[1, 7, 12]} /> Most free anniversary events now start “after the version update on November 13, 2026” per the overview, not at a separately printed clock.
                  <Cite n={13} /> See <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Status on 2026-11-13</td>
                <td className="px-3 py-3">Scheduled / preview (checked about 10:10 Asia/Shanghai, before the update window)</td>
                <td className="px-3 py-3 text-slate-300">Not treated as claimable live content yet. The overview dates <strong>Anniversary Reunion</strong> from November 7, 2026, 05:00:00; this page has not checked that event in the client.<Cite n={13} /></td>
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
        <h3 className="text-xl font-bold text-slate-50">Windtail Express: which 12 outfits can you pick?</h3>
        <p className="text-sm leading-6 text-slate-300">
          <strong>Event time:</strong> After the version update on November 13, 2026 to <strong>January 14, 2027, 04:59:59</strong> (no time zone stated).
          <Cite n={13} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Choose <strong>one</strong> complimentary outfit from the <strong>2,580 [Echo Bead]</strong> tier out of these twelve, as listed in the overview:
          <Cite n={13} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Celestial Knot · Golden Aura · Crimson Sand · Ninth Pawnshop · Celestial Vanguard · Flicker of Faces · Magpie&apos;s Nocturne · Dragon Protector · Scorpion&apos;s Heart · Moonlit Inquiry · Flower of Youth · Veil Between
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Once claimed, the choice cannot be changed.</li>
          <li>The outfit comes in its default color style, without dye variants.</li>
          <li>If you already own every eligible outfit, the reward becomes a <strong>[Custom Chest]</strong>: choose <strong>[Resonance Voucher] ×10</strong> or <strong>[Lingering Melody] ×16</strong>.<Cite n={13} /></li>
        </ul>
        <p className="text-sm leading-6 text-slate-300">
          This is the same “pick 1 of 12 outfits” login grant as the earlier rewards post, now with names and a window. It is not twelve extra rewards.
          <Cite n={[1, 13]} />
        </p>
        <h3 className="text-xl font-bold text-slate-50">Anniversary events in the Version 2.4 overview</h3>
        <p className="text-sm leading-6 text-slate-300">
          Times below are quoted as printed. Unless a row says otherwise, <strong>no time zone is stated</strong> for them in the overview. Free events and paid offers are kept separate; paid top-up events are in their own section below.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Event</th>
                <th className="px-3 py-2">Window as printed (no time zone stated)</th>
                <th className="px-3 py-2">Requirement</th>
                <th className="px-3 py-2">Rewards as published</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Windtail Express</strong></td>
                <td className="px-3 py-3 leading-6">After the version update on November 13, 2026 to January 14, 2027, 04:59:59</td>
                <td className="px-3 py-3 leading-6">None stated</td>
                <td className="px-3 py-3 leading-6">Pick 1 of 12 outfits (see above).<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Anniversary Reunion</strong></td>
                <td className="px-3 py-3 leading-6">November 7, 2026, 05:00:00 to November 21, 2026, 04:59:59</td>
                <td className="px-3 py-3 leading-6">Log in 7 days in total</td>
                <td className="px-3 py-3 leading-6">[Echo Jade] and other rewards. After the November 13, 2026 version update, additional sign-up rewards: Lingering Melody ×10, Resonating Melody ×5, Coin ×10,000.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Swallow&apos;s Gifts</strong></td>
                <td className="px-3 py-3 leading-6">After the version update on November 13, 2026 to December 10, 2026, 04:59:59</td>
                <td className="px-3 py-3 leading-6">Log in 7 days in total</td>
                <td className="px-3 py-3 leading-6">[Lingering Melody] ×6, [Resonating Melody] ×4, title [Journey Companion].<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Anniversary Encounter Gift</strong></td>
                <td className="px-3 py-3 leading-6">From the November 13, 2026 version update until December 13, 2026, <strong>05:00:00</strong></td>
                <td className="px-3 py-3 leading-6">Log in; claim via Mail</td>
                <td className="px-3 py-3 leading-6">[Lingering Melody] ×5, [Resonating Melody] ×5.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Anniversary Fireworks Gift</strong></td>
                <td className="px-3 py-3 leading-6">Fireworks at <strong>Pearlglow Lake</strong> at 19:30 on November 14 and 19:30 on November 15. Mail gift: after 05:00 on November 14, 2026</td>
                <td className="px-3 py-3 leading-6">Log in; claim via Mail</td>
                <td className="px-3 py-3 leading-6">[Lingering Melody] ×1, [Resonating Melody] ×1.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Lucky Penny</strong></td>
                <td className="px-3 py-3 leading-6">After the version update on November 13, 2026 to December 5, 2026, <strong>05:00:00</strong>. Meow Bundle exchanges open November 21, 2026 at 12:00:00</td>
                <td className="px-3 py-3 leading-6">Lv. 3 and Qinghe Main Chapter: Another New Wing</td>
                <td className="px-3 py-3 leading-6">Three Vouchers on login (see shop section); [Dried Fish] → Meow Bundles ([Inner Way Note: Rec. Chest], [Echo Jade], and more); [Solo Journey] memories → accessory [Slender Hook Jade]; [Joint Journey] memories → [Echo Jade].<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Winter Treasure-Hunting Meow</strong> (inside Lucky Penny)</td>
                <td className="px-3 py-3 leading-6">After the November 13 version update; mail expires December 5 at 05:00</td>
                <td className="px-3 py-3 leading-6">Lv. 5 or above</td>
                <td className="px-3 py-3 leading-6">Accessory [Cloud Watcher] by mail.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Blades &amp; Bonds</strong></td>
                <td className="px-3 py-3 leading-6">After the version update on November 13, 2026 to January 14, 2027, 04:59:59</td>
                <td className="px-3 py-3 leading-6">Lv. 10 and Qinghe Main Chapter: Another New Wing</td>
                <td className="px-3 py-3 leading-6">Modes Reunion on Board (Horse Racing Chess, teams of two) and Tales on Tiles; accessory [Dolly Folly], inscription [Burnt Rice], [Resonating Melody], [Lingering Melody].<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>A Year Encountered</strong></td>
                <td className="px-3 py-3 leading-6">After the version update on November 13, 2026 to January 14, 2027, 04:59:59</td>
                <td className="px-3 py-3 leading-6">Anniversary Quests</td>
                <td className="px-3 py-3 leading-6">[Encounter Token]s for the Wayfarer&apos;s Anniversary Shop: hair accessory [Peach of Longevity], scenario pose [Joyful Jig], [Lingering Melody] ×5, [Resonating Melody] ×5; later items include outfit [Riverside Ballad], back accessory [Blushing Bough], emote [Sliding Entrance]. Up to [Lingering Melody] ×20 in total can be bought with [Echo Jade] in the Faded Fragrance Shop (no Echo Jade price published).<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Enduring Flame</strong></td>
                <td className="px-3 py-3 leading-6">After the version update on November 13, 2026 to December 10, 2026, 04:59:59</td>
                <td className="px-3 py-3 leading-6">Lv. 32 and Kaifeng Main Chapter [New Arrival in Kaifeng] (unlocks [Hutuo Memories] → Hutuo access)</td>
                <td className="px-3 py-3 leading-6">Accessory [Swallow&apos;s Frame], [Resonating Melody], [Inner Way Note: Random Chest], [Echo Jade], and more from Echo Trail and Drifter&apos;s Tales.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Mid-Season Sprint: Arena</strong></td>
                <td className="px-3 py-3 leading-6">November 19, 2026, 05:00:00 to November 26, 2026, 04:59:59; weekly quests reset every Monday at 05:00:00</td>
                <td className="px-3 py-3 leading-6">Lv. 20</td>
                <td className="px-3 py-3 leading-6">[Arena Talent EXP], [Arena Attunement Stone: Dustless], [Inner Way Note: Random Chest].<Cite n={13} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          The overview does <strong>not</strong> add these Melody counts up to the earlier rewards post’s Lingering Melody ×42 / Resonating Melody ×27, and this page does not try to reconcile the totals.
          <Cite n={[1, 13]} />
        </p>
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
          The Version 2.4 overview words the start as “Following the version update on November 13, 2026” (First Top-Up Reset) and “After the version update on November 13, 2026” (Flow of Echoes). This page keeps both wordings and does not use one to overwrite the other.
          <Cite n={[6, 13]} />
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
          The official event graphic first showed these two rules, and the Version 2.4 overview now states them in its text:
          <Cite n={[6, 13]} />
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
          The Version 2.4 overview gives the window as after the version update on November 13, 2026 to <strong>December 18, 2026, 04:59:59</strong> (no time zone stated in the overview; the same end date carries (UTC+8) in source [6]). Every <strong>10 Echo Beads</strong> topped up accumulates <strong>10 [Heroic Chime]</strong>; Monthly Cards, Battle Passes, and direct Echo Bead top-ups all count, under the same rules as Soaring Record. Milestone rewards named in the overview: accessory <strong>[Maple-Tinged Longing]</strong>, chessboard back accessory <strong>[A Game of Stillness]</strong>, exclusive avatar <strong>[Familiar Clouds]</strong>, [Lingering Melody], and up to <strong>2,880 [Echo Bead]</strong> in total.
          <Cite n={13} /> <strong>Autumn Ache</strong> still appears only on the earlier event graphic, not in the overview text.
          <Cite n={6} />
        </p>

        <h3 className="text-xl font-bold text-slate-50">Soaring Record</h3>
        <p className="text-sm leading-6 text-slate-300">
          Earn <strong>[Soaring Points]</strong> from your <strong>all-time</strong> top-ups to claim exclusive Hairstyles,
          Duo Interaction Toys, the <strong>[Crimson Abyss] Set</strong>, and a wide array of premium appearances.
          <Cite n={6} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The Version 2.4 overview says all-time Echo Beads from top-ups count toward <strong>[Soaring Points]</strong> at <strong>1:1</strong>, and direct purchases of Monthly Cards, Battle Passes, packs, and Steam / Epic / PlayStation Store DLCs count as equivalent Echo Beads at 1:1 (bonus Echo Beads excluded). Milestones named in the overview: hairstyle <strong>[Autumn Zen]</strong>, duo interactive toy <strong>[Heartbound Firework]</strong>, Drapes, Accessories, Scenario Backgrounds, Decorations, the Customizable Hero Title <strong>[Everlasting Echo]</strong>, a Legendary Hero Title, and the outfit <strong>[Abyssal Domain]</strong>.
          <Cite n={13} /> Source [6]’s post body calls the set <strong>[Crimson Abyss]</strong>; this page still does not merge the two names into one set.
          <Cite n={[6, 13]} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Soaring Record itself is <strong>not</strong> given a separate end time in the cited post.
          <Cite n={6} />
        </p>
      </section>

      <section id="version-24-appearances" className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Version 2.4 new appearances</h2>
        <p className="text-sm leading-6 text-slate-300">
          The official <strong>Version 2.4 New Appearances Overview</strong> (page date <strong>2026-11-11</strong>, date only) lists the items below with their windows.
          <Cite n={9} /> An official X post syncs the new mount.
          <Cite n={10} /> The later <strong>Version 2.4 [Across Autumn Waters] Update Overview</strong> (page date 2026-11-12; Steam 2026-11-12 22:43:09 Asia/Shanghai) adds <strong>prices</strong> for these items, quoted exactly below.
          <Cite n={[13, 14]} /> <strong>Draw Shop</strong> items are bought with draw currencies such as [Harmonic Core] or [Sound Jade]; they are <strong>not</strong> free grants.
        </p>
        <p className="text-sm leading-6 text-slate-300">
          These items are <strong>not</strong> the free “pick 1 of 12 outfits” login grant, <strong>not</strong> the Lingering
          Melody / Resonating Melody in-game rewards, and <strong>not</strong> the paid top-up events above.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Item</th>
                <th className="px-3 py-2">Official wording</th>
                <th className="px-3 py-2">Window as announced</th>
                <th className="px-3 py-2">Price as published (Version 2.4 overview)</th>
                <th className="px-3 py-2">Limits of evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Silent Voice: Twin Sentinels]</strong></td>
                <td className="px-3 py-3 leading-6">New Mo Blade weapon appearance, <strong>Draw Shop</strong>, limited time of 360 days.<Cite n={[9, 13]} /></td>
                <td className="px-3 py-3 leading-6">Nov 13, 23:00 to <strong>Nov 9, 2027</strong>, 04:59:59 (UTC+8).<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Default form: <strong>[Harmonic Core] ×1</strong> in the Draw Shop.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">Reforging with [Taiyi Stone] into five set styles (Cloudrest, Windleap, Stardance, Moonspell, Skyrend) is described; Taiyi Stone amounts are not published. No pity rate is published.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Wrathful Lord: Masked Fury]</strong></td>
                <td className="px-3 py-3 leading-6">New Skystrike Gauntlets martial-art VFX.<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Arrives Nov 13, 2026, 23:00 (UTC+8).<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6"><strong>[Harmonic Core] ×1</strong> in the Draw Shop. Also grants the scenario pose [Skystrike: Drunken Fury].<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">No end time is published.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Gale Steed]</strong></td>
                <td className="px-3 py-3 leading-6">New Phalanxbane Blade martial-art VFX.<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Arrives Nov 13, 2026, 23:00 (UTC+8).<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6"><strong>[Harmonic Core] ×1</strong> in the Draw Shop.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">No end time is published.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Astral Array: Celestial Drift]</strong></td>
                <td className="px-3 py-3 leading-6">New Sword weapon appearance; Sound Jade weapon series Astral Array.<Cite n={[9, 13]} /></td>
                <td className="px-3 py-3 leading-6">Nov 13, 23:00 to <strong>May 13, 2027</strong>, 04:59:59 (UTC+8). Discount until <strong>Dec 26, 2026</strong>, 04:59:59 (UTC+8).<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Limited-time discount price <strong>[Sound Jade] ×1</strong> (original price: <strong>[Sound Jade] ×2</strong>) in Draw - Echo Shop; reverts to [Sound Jade] ×2 after the discount ends.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">The discount end is not the appearance’s end; availability runs to May 13, 2027.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Radiant Charger]</strong></td>
                <td className="px-3 py-3 leading-6">Year of the Horse annual zodiac <strong>weapon appearance chest</strong>.<Cite n={[9, 13]} /></td>
                <td className="px-3 py-3 leading-6">Arrives Nov 13, 2026, 23:00 (UTC+8).<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">“Buy More, Save More” in the Shop: first weapon appearance <strong>680 [Echo Bead]</strong>, second <strong>540 [Echo Bead]</strong> after discount, third or more “as low as <strong>320 [Echo Bead]</strong> each.” Five from the series grant a themed [Nameplate]; seven grant a themed [Chat Bubble].<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">No end time and no item-by-item list are published. This page does not name graphic-only items as announced products.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Peli-can-eat]</strong></td>
                <td className="px-3 py-3 leading-6">New mount, with the emote [Big Beak Pelican].<Cite n={[9, 10, 13]} /></td>
                <td className="px-3 py-3 leading-6">“available on Nov 13, 2026, at 23:00, with a limited-time discount until Dec 14, 04:59:59 (UTC+8).”<Cite n={[9, 10]} /></td>
                <td className="px-3 py-3 leading-6">Limited-time discount price <strong>60 [Echo Bead]</strong>; after the discount ends (December 14, 2026 at 04:59:59) the price reverts to <strong>300 [Echo Bead]</strong>.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300"><strong>UTC+8</strong> is written after the discount deadline in [9]/[10]; this page does not add one after 23:00. The discount end is <strong>not</strong> a delist date.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          The same official overview also restates several earlier windows. Those restatements <strong>match</strong> the
          11-05 to 11-09 official posts; they are <strong>not</strong> a change of date. They are listed next, under{" "}
          <strong>Previously announced appearance and event windows</strong>.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Previously announced appearance and event windows (unchanged)</h2>
        <p className="text-sm leading-6 text-slate-300">
          The official Version 2.4 New Appearances Overview restates the windows below. They match earlier official posts
          and are <strong>not</strong> a change.
          <Cite n={9} /> One exception: the later Version 2.4 [Across Autumn Waters] overview prints a <strong>different end date for [Willow Breeze]</strong>; both dates are shown in the table.
          <Cite n={13} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          These are <strong>not</strong> the free login “pick 1 of 12 outfits” grant. Event windows are <strong>not</strong> automatically
          shop delist dates. Draw-shop items are <strong>not</strong> free grants. Prices below are quoted exactly as printed in the Version 2.4 overview.
          <Cite n={13} />
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Item</th>
                <th className="px-3 py-2">Official type</th>
                <th className="px-3 py-2">Window as announced</th>
                <th className="px-3 py-2">Price / cost as published (Version 2.4 overview)</th>
                <th className="px-3 py-2">Limits of evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Flowing Clarity]</strong>, with set <strong>[Luminous Tides]</strong> and hairstyle <strong>[Lucent Ripples]</strong></td>
                <td className="px-3 py-3 leading-6">Limited-time <strong>draw</strong> event.<Cite n={[9, 13]} /></td>
                <td className="px-3 py-3 leading-6">Nov 13 at 23:00 to <strong>Dec 7, 4:59:59 (UTC+8)</strong>.<Cite n={9} /> Overview: to December 7, 2026, 04:59:59 (no time zone stated).<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">Draws use <strong>[Celestial Bloom Sprig]</strong>; the first draw costs none. [Echo Jade] and [Echo Bead] can be exchanged for Sprigs; [Echo Jade] can be exchanged for up to <strong>[Celestial Bloom Sprig] ×18</strong>. Four pools ([Ethereal], [Illusory], [Void], [Bloom]) each cost a different number of Sprigs per draw.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">Exchange rates and per-pool Sprig costs are not published. Drop rates are not published (maxed rewards are redistributed). Unused Sprigs are reclaimed after the event. The set and hairstyle are draw rewards, not free drops.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Plumed Opulence]</strong> (<strong>[Plumed Opulence Limited Pack]</strong>)</td>
                <td className="px-3 py-3 leading-6">Anniversary limited-edition pack; “will not return in the future.”<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">Nov 13, 23:00 to <strong>Dec 18, 4:59:59 (UTC+8)</strong>.<Cite n={9} /> Overview: to December 18, 2026, 04:59:59 (no time zone stated).<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6"><strong>2,580 [Echo Bead]</strong> in the Shop. Up to 5 exclusive Vouchers from Splendid Robes and Flow of Echoes, <strong>10% off each, stackable up to 5</strong>, usable only on the Personal edition. Personal: 1 per wanderer; Gift: up to 20 per account; a Gift pack can be dismantled into [Lingering Melody] ×16.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">Pack contents: outfit set [Plumed Opulence], namecard [A Passing Season], [Advanced Dye] ×10.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Bound Majesty]</strong></td>
                <td className="px-3 py-3 leading-6">Limited-edition hairstyle.<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Nov 13, 23:00 to <strong>Feb 12, 2027, 4:59:59 (UTC+8)</strong>.<Cite n={9} /> Overview: removed from shelves on February 12, 2027 at 04:59:59 (no time zone stated).<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6"><strong>[Harmonic Core] ×1</strong> in the Draw Shop.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">Not free.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Iris Herald]</strong></td>
                <td className="px-3 py-3 leading-6">Draw hairstyle and accessory set.<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Nov 13 at 23:00 to <strong>Mar 22, 2027</strong> at 04:59:59 (UTC+8).<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6"><strong>[Harmonic Core] ×2</strong> in the Draw Shop.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">Not free. Includes bonus [Hat], [VFX Hair Accessory], [Earrings], [Player Dynamic Avatar].</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>[Spectral Scroll]</strong>, with set <strong>[Whispered Omens]</strong></td>
                <td className="px-3 py-3 leading-6">Limited-time event; set purchasable after raising the event reward level.<Cite n={[9, 13]} /></td>
                <td className="px-3 py-3 leading-6">Nov 13 at 23:00 to <strong>Nov 28 at 4:59:59 (UTC+8)</strong>.<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Limited-time discount price <strong>600 [Echo Bead]</strong> (includes player avatar [Whispered Omens]); after the event ends, the set goes to the Shop at its original price of <strong>1,280 [Echo Bead]</strong>.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">The set is a purchase, not a free event drop.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Battle Pass outfit <strong>[Frostbound Edge]</strong></td>
                <td className="px-3 py-3 leading-6">Battle Pass outfit.<Cite n={9} /></td>
                <td className="px-3 py-3 leading-6">Nov 13, 23:00 to <strong>December 10, 4:59:59 (UTC+8)</strong>.<Cite n={9} /> Overview Season Time: to December 10, 2026, 04:59:59 (no time zone stated) — same end date, not a change.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">No Battle Pass price is published. Elite Battle Pass unlocks the set; Premium adds 10 levels immediately and bonus items.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">Unchanged window.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold">Returning Battle Pass appearance <strong>[Willow Breeze]</strong></td>
                <td className="px-3 py-3 leading-6">Returning Battle Pass appearance (“the very first returning Battle Pass appearance”).<Cite n={[4, 9, 13]} /></td>
                <td className="px-3 py-3 leading-6"><strong>Two official end dates, shown side by side:</strong> <strong>Jan 29, 2027, 04:59:59 (UTC+8)</strong> per the November 5 X post <Cite n={4} /> and the New Appearances Overview <Cite n={9} />; <strong>January 28, 2027, 04:59:59</strong> (no time zone stated) per the Version 2.4 [Across Autumn Waters] overview <Cite n={13} />.</td>
                <td className="px-3 py-3 leading-6">First-return discount price <strong>$9.99</strong> in the Battle Pass Limited-Time Shop for players who unlock this season’s Elite or Premium Battle Pass; the price “will revert to the original <strong>$14.99</strong> in future returns.”<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">This page does not pick one end date. Contents: set [Willow Breeze], accessory [Harvest Basket], and three appearance chests that open at Battle Pass Lv. 40 / 35 / 25. Owned items convert to [Echo Jade] at a designated ratio (not published).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-slate-50">Anniversary shop vouchers and packs</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>
            <strong>Lucky Penny Vouchers:</strong> [40 Off 60 Voucher], [1680 Off 3280 Voucher], [3880 Off 6480 Voucher]. They work on cosmetic purchases in the Shop and in the Cart, cannot be stacked with other vouchers or discounted items, and are valid until <strong>December 14, 2026, 04:59:59</strong> (no time zone stated). When the eligible Appearance Shop total is under <strong>6,480 [Echo Bead]</strong>, a <strong>Bundle Shop</strong> unlocks to help reach thresholds. Items added after November 13 do not count toward that total. The overview says outfits at tiers such as 2,580 and 1,280 [Echo Bead] will be listed before the vouchers expire, with dates to be announced.
            <Cite n={13} />
          </li>
          <li>
            <strong>Anniversary Special Pack — [Pentatonic Harmony Pack]:</strong> Shop - Packs, after the version update on November 13, 2026 to <strong>December 17, 2026, 04:59:59</strong> (no time zone stated); sells [Lingering Melody] and [Prime Essence] at discounted prices. <strong>No price or discount amount is published.</strong>
            <Cite n={13} />
          </li>
        </ul>
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
                <td className="px-3 py-3">Nov 13, 23:00 – <strong>Jan 29, 2027, 04:59:59 (UTC+8)</strong> per the November 5 X post and the New Appearances Overview;<Cite n={[4, 9]} /> the Version 2.4 [Across Autumn Waters] overview prints <strong>January 28, 2027, 04:59:59</strong> (no time zone stated).<Cite n={13} /> Both official statements are kept; this page does not pick one.</td>
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
            Top-up tier amounts or pity rates for the paid top-up events. The only rate published is Flow of Echoes’ 10 [Heroic Chime] per 10 Echo Beads.
            <Cite n={[6, 13]} />
          </li>
          <li>
            An end time for First Top-Up Reset or Soaring Record beyond the shared start time and the Flow of Echoes end clock (<strong>Dec 18 at 04:59:59 (UTC+8)</strong>).
            <Cite n={6} />
          </li>
          <li>
            That <strong>Autumn Ache</strong> appears in official body text (it is still graphic-only), or that <strong>[Crimson Abyss]</strong> and <strong>[Abyssal Domain]</strong> are the same set. <strong>A Game of Stillness</strong>, <strong>Abyssal Domain</strong>, and <strong>Autumn Zen</strong> are now in the Version 2.4 overview text.
            <Cite n={[6, 13]} />
          </li>
          <li>
            Prices beyond what the Version 2.4 overview prints, including any price or discount amount for the [Pentatonic Harmony Pack], Battle Pass prices, Echo Jade prices in the Faded Fragrance Shop, Sprig exchange rates, or drop rates.
            <Cite n={13} />
          </li>
          <li>
            A delist date for <strong>[Peli-can-eat]</strong>. Official copy only gives a limited-time discount until Dec 14, 04:59:59 (UTC+8); that is not written as the mount’s end of availability. This page also does not add a time zone immediately after the mount’s “23:00” listing time, because the official sentence places <strong>UTC+8</strong> after the discount deadline.
            <Cite n={[9, 10]} />
          </li>
          <li>
            An end time or a contents list for the Annual Zodiac Weapon Appearance Chest <strong>[Radiant Charger]</strong>, or a claim that items visible only on the promotional graphic are officially announced individual products.
            <Cite n={9} />
          </li>
          <li>
            An end time for <strong>[Wrathful Lord: Masked Fury]</strong> or <strong>[Gale Steed]</strong>, which are announced only as arriving on Nov 13, 2026, at 23:00 (UTC+8).
            <Cite n={9} />
          </li>
          <li>
            That <strong>[Silent Voice: Twin Sentinels]</strong> or <strong>[Iris Herald]</strong> are free grants. Official copy places the first in the Draw Shop and labels the second a Draw set.
            <Cite n={9} />
          </li>
          <li>
            That every anniversary perk starts at 23:00 (UTC+8). Most free events start “after the version update on November 13, 2026” per the overview, which also says the update is expected to become available after 23:00:00; Anniversary Reunion started on November 7, 2026, 05:00:00.
            <Cite n={13} />
          </li>
          <li>Goose Gifts Galore or other events not named on this page. Radiance Boat details live on <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link>.</li>
          <li>
            A time zone for overview times printed without one (for example Windtail Express’s January 14, 2027, 04:59:59, or the fireworks at 19:30 on November 14 and 15).
            <Cite n={13} />
          </li>
          <li>
            A single Willow Breeze end date. Official copy says January 29, 2027, 04:59:59 (UTC+8) in [4] and [9], and January 28, 2027, 04:59:59 in [13].
          </li>
          <li>
            That the event Melody counts in the overview add up to Lingering Melody ×42 / Resonating Melody ×27.
            <Cite n={[1, 13]} />
          </li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What you can do now</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>
            Read <Link href="/guides/hutuo" className="text-emerald-300 underline underline-offset-4">/guides/hutuo</Link> for the November 13 opening window (goes live <strong>following</strong> a non-downtime update from 18:00 to 23:00 (UTC+8)) and for Dual Spears on <strong>November 26 (UTC)</strong>.
            <Cite n={[11, 8]} />
          </li>
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
