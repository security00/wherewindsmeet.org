import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialGraphicFigure } from "@/components/guides/OfficialGraphicFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { HUB_OG_IMAGE, PAGE_PUBLISHED } from "@/lib/globalAnnouncements";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/hutuo";
const pageUrl = `${baseUrl}${guidePath}`;

const LAST_VERIFIED = "2026-11-10";
const LAST_VERIFIED_LABEL = "2026-11-10 (Asia/Shanghai)";
const PAGE_MODIFIED = "2026-11-10";

const metaTitle = "When Does Hutuo Open in Where Winds Meet? Version 2.4 on Nov 13";
const metaDescription =
  "Hutuo is Where Winds Meet’s announced Version 2.4 anniversary region. Official posts date the opening to November 13. What’s confirmed for Campaign [Hutuo River], Jianghu Legacies, World Bosses, and Dual Spears on November 26 (UTC).";

const SOURCE_URLS = [
  "https://x.com/WhereWindsMeet_/status/2117934891497029783",
  "https://x.com/WhereWindsMeet_/status/2117386268698943563",
  "https://blog.playstation.com/2026/10/27/where-winds-meets-climactic-hutuo-battlefield-narrative-arc-revealed-out-nov-13/",
  "https://x.com/WhereWindsMeet_/status/2115103980996919763",
  "https://x.com/WhereWindsMeet_/status/2115104986929709317",
  "https://www.wherewindsmeetgame.com/news/official/1028devletter.html",
  "https://www.wherewindsmeetgame.com/news/official/1109devletter.html",
  "https://x.com/WhereWindsMeet_/status/2119802839061151868",
  "https://x.com/WhereWindsMeet_/status/2119731727761572141",
  "https://x.com/WhereWindsMeet_/status/2118548827586372057",
] as const;

const sources: { href: string; text: string }[] = [
  {
    href: SOURCE_URLS[0],
    text: "Official X: Hutuo major update / Campaign Hutuo; Dual Spears “arriving soon” (posted 2026-11-04 19:00:02 Asia/Shanghai).",
  },
  {
    href: SOURCE_URLS[1],
    text: "Official X: anniversary rewards; anniversary version November 13 (UTC) (posted 2026-11-03 06:40:00 Asia/Shanghai).",
  },
  {
    href: SOURCE_URLS[2],
    text: "PlayStation Blog: Hutuo narrative arc; Dual Spears previously “late November”; Yuen Woo-ping; Horse Racing Chess / Jianghu Tactics (page dated 2026-10-27; page date only, time zone not stated).",
  },
  {
    href: SOURCE_URLS[3],
    text: "Official X: Campaign [Hutuo River] / Zhongdu Bridge — supporting naming for the same Hutuo anniversary beat.",
  },
  {
    href: SOURCE_URLS[4],
    text: "Official X: 1st Anniversary Special Broadcast — November 2, 14:00 PT.",
  },
  {
    href: SOURCE_URLS[5],
    text: "October 28 Dev Letter — 2026-10-28 (page date only); prior live Version 2.3 / Penglai contrast only.",
  },
  {
    href: SOURCE_URLS[6],
    text: "Official Version 2.4 Dev Letter: Hutuo as the third region of Hidden Mountain; “On November 13, Hutuo, the third region of Hidden Mountain, will officially open” (no time zone or clock time); Campaign [Hutuo River]; three Jianghu Legacies; World Bosses Wayfarer Bingshen and Yelu Abuli (page date 2026-11-09, date only, no time zone or clock time).",
  },
  {
    href: SOURCE_URLS[7],
    text: "Official X Article syncing the Version 2.4 Dev Letter (posted 2026-11-09 22:42:35 Asia/Shanghai); canonical site URL is source [7].",
  },
  {
    href: SOURCE_URLS[8],
    text: "Official X: New World Bosses [Yelu Abuli] and [Wayfarer Bingshen] “arrive soon!” (posted 2026-11-09 18:00:01 Asia/Shanghai). No date or clock time; do not rewrite as November 13.",
  },
  {
    href: SOURCE_URLS[9],
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
    q: "When does Hutuo open?",
    a: "November 13. The Version 2.4 Dev Letter uses November 13 with no time zone or clock time.[7] A rewards announcement specifies November 13 (UTC) without a clock time.[2] This page keeps both labels and does not invent a Beijing midnight start.",
  },
  {
    q: "Is Hutuo live today (2026-11-10)?",
    a: "No. Treat it as a scheduled global anniversary update—Version 2.4—not a completed live claim on this page.[7][1][2][3]",
  },
  {
    q: "Is Dual Spears part of day-one Hutuo on November 13?",
    a: "No. Official copy says Dual Spears officially arrives on November 26 (UTC), with no clock time published. That is not November 13, and it should not be rewritten as Beijing midnight.[10]",
  },
  {
    q: "What is the Campaign [Hutuo River] entrance or unlock requirement?",
    a: "Not published in the cited announcements. This page does not invent UI paths or level gates. The Campaign name is [Hutuo River]; story paths converge at Zhongdu Bridge, which is a narrative battlefield, not a Boss.[7]",
  },
  {
    q: "Are Horse Racing Chess and Jianghu Tactics full board-game guides here?",
    a: "No. Only the announced names tied to the anniversary update are confirmed here.[3]",
  },
  {
    q: "Are Wayfarer Bingshen and Yelu Abuli already live? Do they start on November 13?",
    a: "They are announced World Bosses in the Version 2.4 Dev Letter.[7] A separate official post only says they “arrive soon!” and does not give a date or clock time. This page does not treat “arrive soon!” as November 13, and it does not treat them as already live on 2026-11-10.[9]",
  },
  {
    q: "Are the new World Bosses raids?",
    a: "No. Official copy calls them World Bosses, not raids. Drops, player counts, level gates, and refresh times are not published in the cited sources.[7][9]",
  },
  {
    q: "Does “raid supplies” mean a Hutuo raid dungeon?",
    a: "No. In the Dev Letter, “infiltrated behind enemy lines to raid supplies” is a story beat, not a raid mode or a group-size requirement.[7]",
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
          Hutuo opens on November 13 as Where Winds Meet’s first global anniversary major update—<strong>Version 2.4</strong>—the
          third region of Hidden Mountain, a war-themed narrative arc, and a new Campaign, <strong>[Hutuo River]</strong>,
          framed around a battlefield frontier.
          <Cite n={[7, 8]} />
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          Official posts give the calendar date, but they do not all label it the same way. The official Version 2.4
          Dev Letter says: “On November 13, Hutuo, the third region of Hidden Mountain, will officially open.” That
          sentence has <strong>no time zone and no clock time</strong>.
          <Cite n={7} /> A separate rewards post labels the anniversary version <strong>November 13 (UTC)</strong> and
          also does not publish a clock time.
          <Cite n={2} /> This page keeps <strong>both</strong> wordings. It does <strong>not</strong> rewrite either
          label as a Beijing midnight start, and it does <strong>not</strong> use the Dev Letter date to overwrite the
          rewards post’s UTC label.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          This guide is an announcement hub, not a live walkthrough. Entrance steps, unlock gates, World Boss drop
          tables, player counts, level requirements, and refresh times are <strong>not published</strong> in the sources
          below, so they are not invented here.
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
          <li>
            <strong>What:</strong> Hutuo is announced as <strong>Version 2.4</strong>: the third region of Hidden Mountain,
            a sprawling new region and climactic battlefield narrative arc, including a new Campaign, <strong>[Hutuo River]</strong>,
            tied to the first global anniversary update.
            <Cite n={[7, 8, 1, 3]} />
          </li>
          <li>
            <strong>When:</strong> November 13. The Version 2.4 Dev Letter dates the opening to <strong>November 13</strong> with
            no time zone or clock time.
            <Cite n={7} /> The rewards post says <strong>November 13 (UTC)</strong>.
            <Cite n={2} /> No minute or hour is given in either wording.
          </li>
          <li><strong>Status on 2026-11-10:</strong> global preview / pre-launch. Not treated as already live.</li>
          <li>
            <strong>Dual Spears:</strong> an announced martial art that “officially arrives on <strong>November 26 (UTC)</strong>.”
            That post does not give a clock time, and the date is <strong>not</strong> a November 13 same-day unlock. Do not
            rewrite it as Beijing midnight.
            <Cite n={10} />
          </li>
          <li>
            <strong>Version label:</strong> Official <strong>Version 2.4</strong> Dev Letter on the Global site (page date <strong>2026-11-09</strong>,
            date only, no time zone or clock time) and the matching official X Article (posted 2026-11-09 22:42:35 Asia/Shanghai).
            <Cite n={[7, 8]} />
          </li>
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
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The Version 2.4 Dev Letter now names the new Campaign <strong>[Hutuo River]</strong>. Story paths ultimately
          converge at <strong>Zhongdu Bridge</strong>, which official copy treats as a campaign / narrative battlefield—<strong>not</strong> a
          Boss name.
          <Cite n={[7, 8]} /> An earlier official post already used Campaign [Hutuo River] and “rally at Zhongdu Bridge
          on November 13”; treat that as the same Hutuo anniversary beat, not as an extra dungeon or raid name.
          <Cite n={4} />
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

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">New Campaign [Hutuo River]</h2>
        <p className="text-sm leading-6 text-slate-300">
          The official Version 2.4 Dev Letter calls <strong>[Hutuo River]</strong> the centerpiece of this anniversary
          update: a multi-perspective narrative whose paths ultimately converge at <strong>Zhongdu Bridge</strong>.
          <Cite n={7} /> Zhongdu Bridge is a campaign / narrative scene, not a Boss.
          <Cite n={[7, 4]} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          After the battle, Wanderers can return to the riverbank to gather left-behind relics and retrace the stories
          of fallen comrades.
          <Cite n={7} /> The letter does <strong>not</strong> name those relics, reward items, or quantities, so this
          page does not invent them.
        </p>
        <p className="text-sm leading-6 text-slate-300">
          One Dev Letter sentence describes heroes who “infiltrated behind enemy lines to <strong>raid supplies</strong>.”
          In that official wording, “raid supplies” is a <strong>narrative beat</strong> (raiding enemy provisions as
          part of the story). It is <strong>not</strong> a raid dungeon, a raid mode, or a published group-size or unlock
          requirement. The letter does not give a player count or an entrance gate for that line.
          <Cite n={7} />
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Three new Jianghu Legacies</h2>
        <p className="text-sm leading-6 text-slate-300">
          The same Dev Letter announces three new Jianghu Legacies. Official full titles, named characters, and
          locations are listed below. This page does <strong>not</strong> invent quest steps, puzzle solutions, or
          unlock requirements.
          <Cite n={7} />
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>
            <strong>The Deepest Cut | A Father’s Search for His Son</strong> — Zhao Tie, in occupied Luancheng.
            <Cite n={7} />
          </li>
          <li>
            <strong>Melody Amid Reeds | A Vigil in the Bitter Cold</strong> — Luhua, at Silvereed Shoal on the southern
            banks of the Hutuo River.
            <Cite n={7} />
          </li>
          <li>
            <strong>Kindle the Void | The Final Lesson of Dragonbend Academy</strong> — the concluding Jianghu Legacy
            chapter in Hidden Mountain, involving Elder Crane of Mohist Hill.
            <Cite n={7} />
          </li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">World Bosses: Wayfarer Bingshen and Yelu Abuli</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official Version 2.4 copy names two <strong>World Bosses</strong>—not raids, and not a published player count
          or loot table.
          <Cite n={7} />
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>
            <strong>Wayfarer Bingshen</strong>, once a student at Dragonbend Academy, now stands vigil alone at{" "}
            <strong>Moonveil Knoll</strong>. Official combat notes say frequent red and yellow cues test{" "}
            <strong>parry, deflect, and dodge</strong> timing.
            <Cite n={7} />
          </li>
          <li>
            <strong>Yelu Abuli</strong> is described as a Khitan princess and shaman priestess who has erected an altar
            along the Hutuo River. Official combat notes mention shamanic rituals and shapeshifting, including an eagle,
            a wolf, and ethereal foxfire.
            <Cite n={7} />
          </li>
        </ul>
        <p className="text-sm leading-6 text-slate-300">
          A separate official teaser post says new World Bosses [Yelu Abuli] and [Wayfarer Bingshen] “<strong>arrive soon!</strong>”
          That post does <strong>not</strong> give a date or clock time, and this page does <strong>not</strong> fill
          “arrive soon!” in as November 13.
          <Cite n={9} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Drops, player counts, level gates, and refresh times are <strong>not published</strong> in the cited sources,
          so they are not listed here.
        </p>
      </section>

      <section id="dual-spears" className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">November 13 versus Dual Spears on November 26 (UTC)</h2>
        <p className="text-sm leading-6 text-slate-300">
          Official X sometimes mentions Campaign Hutuo and Dual Spears in one “arriving soon” sentence.
          <Cite n={1} /> For calendar planning, this hub now follows the later official post: “Dual Spears officially
          arrives on <strong>November 26 (UTC)</strong>.” That post does not give a clock time, and this page does not
          rewrite it as Beijing midnight. <strong>November 26 (UTC) is not November 13.</strong>
          <Cite n={10} /> The earlier PlayStation Blog wording was “late November”; the November 26 (UTC) date is the
          more specific official calendar label, not a same-day merge with Hutuo’s opening.
          <Cite n={[3, 10]} />
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
              <tr>
                <td className="px-3 py-3 font-semibold text-slate-50">Hutuo / Version 2.4 / first global anniversary major update</td>
                <td className="px-3 py-3 leading-6">
                  Dev Letter: <strong>November 13</strong> (no time zone or clock time). Rewards post: <strong>November 13 (UTC)</strong>, no clock time.
                </td>
                <td className="px-3 py-3 leading-6 text-slate-300">
                  Both wordings are kept. Pre-launch as of 2026-11-10.
                  <Cite n={[7, 2, 1, 3]} />
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold text-slate-50">Horse Racing Chess / Jianghu Tactics</td>
                <td className="px-3 py-3 leading-6">Named with the November 13 anniversary update</td>
                <td className="px-3 py-3 leading-6 text-slate-300">
                  Mode rules are not published in the cited text.
                  <Cite n={3} />
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold text-slate-50">Dual Spears martial art</td>
                <td className="px-3 py-3 leading-6"><strong>November 26 (UTC)</strong>; no clock time</td>
                <td className="px-3 py-3 leading-6 text-slate-300">
                  <strong>Not November 13.</strong> Do not rewrite as Beijing midnight. Light Spears (offense) and Heavy
                  Spears (stance-break), with Spear Stance loops; choreography credited to Yuen Woo-ping, per the
                  PlayStation Blog.
                  <Cite n={3} /> The November 26 (UTC) post also names the Martial Art Path <strong>[Bellstrike - Bolt]</strong>;
                  it does not mention Spear Stance, and this page does not treat the older Spear Stance note as withdrawn.
                  <Cite n={10} />
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold text-slate-50">First Anniversary Special Broadcast</td>
                <td className="px-3 py-3 leading-6">November 2 (also listed as November 2, 14:00 PT)</td>
                <td className="px-3 py-3 leading-6 text-slate-300">
                  That broadcast date is already past. This page does not claim a transcript of every reveal.
                  <Cite n={[3, 5]} />
                </td>
              </tr>
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
          <li>
            An exact maintenance window or local clock time beyond the published date labels: the Dev Letter’s <strong>November 13</strong> (no time zone) and the rewards post’s <strong>November 13 (UTC)</strong>.
            <Cite n={[7, 2]} />
          </li>
          <li>An in-client entrance path, map pins, or an unlock level.</li>
          <li>
            World Boss <strong>drop tables, player counts, level gates, or refresh times</strong>. Official names and the “arrive soon!” teaser are cited above; this page does not turn “arrive soon!” into a November 13 start clock.
            <Cite n={[7, 9]} />
          </li>
          <li>
            Reward names or quantities for relics gathered after Campaign <strong>[Hutuo River]</strong>.
            <Cite n={7} />
          </li>
          <li>
            Quest-by-quest walkthroughs or unlock gates for the three Jianghu Legacies.
            <Cite n={7} />
          </li>
          <li>Full rules for Horse Racing Chess or Jianghu Tactics.</li>
          <li>China-server and Global same-day confirmation. That comparison is not in the cited Global English sources.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What you can do before November 13</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Catch up on the live Version 2.3 Qingzhou and Penglai guides linked above if you are still in that batch.</li>
          <li>Read the anniversary reward split so the login outfit choice is not confused with the Melody grants: <Link href="/guides/anniversary" className="text-emerald-300 underline underline-offset-4">/guides/anniversary</Link>.</li>
          <li>
            Watch Dual Spears on <Link href="/guides/martial-arts-weapons#dual-spears-announced" className="text-emerald-300 underline underline-offset-4">/guides/martial-arts-weapons</Link>.
            Expect <strong>November 26 (UTC)</strong>, not an automatic November 13 unlock, and not a Beijing midnight rewrite.
            <Cite n={10} />
          </li>
          <li>Re-check official X and the Version 2.4 Dev Letter closer to November 13. This page’s last verified date is an announcement check.</li>
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
          Unofficial fan hub. Not affiliated with NetEase or Everstone. Global English announcements only.
        </p>
      </section>
    </article>
  );
}
