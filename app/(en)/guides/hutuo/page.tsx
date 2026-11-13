import type { Metadata } from "next";
import Link from "next/link";

import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { OfficialGraphicFigure } from "@/components/guides/OfficialGraphicFigure";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { HUB_OG_IMAGE, PAGE_PUBLISHED } from "@/lib/globalAnnouncements";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/hutuo";
const pageUrl = `${baseUrl}${guidePath}`;

const LAST_VERIFIED = "2026-11-13";
const LAST_VERIFIED_LABEL = "2026-11-13 (Asia/Shanghai)";
const PAGE_MODIFIED = "2026-11-13";

const metaTitle = "When Does Hutuo Open in Where Winds Meet? After the Nov 13 18:00–23:00 (UTC+8) Update";
const metaDescription =
  "Hutuo (Version 2.4) goes live following a non-downtime update on Nov 13 (18:00:00–22:59:59 UTC+8 per the official overview). World Boss first-clear rewards, the Kindle the Void 6,000 exploration requirement, and Campaign [Hutuo River] rewards.";

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
  "https://x.com/WhereWindsMeet_/status/2120532003351048535",
  "https://x.com/WhereWindsMeet_/status/2120637700524904525",
  "https://www.wherewindsmeetgame.com/news/official/AcrossAutumnWaters.html",
  "https://store.steampowered.com/news/app/3564740/view/1849192144183182",
  "https://x.com/WhereWindsMeet_/status/2120894399613677895",
  "https://www.wherewindsmeetgame.com/news/official/1113PathBalance.html",
  "https://x.com/WhereWindsMeet_/status/2120862819897970969",
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
  {
    href: SOURCE_URLS[10],
    text: "Official X: “Where Winds Meet's major 1st Anniversary update: Hutuo will officially go live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8)!” Graphic title: “1ST ANNIVERSARY: HUTUO GLOBAL LAUNCH,” single moment 11PM UTC+8 on November 13 (15:00 UTC); KST / JST 12AM, AEDT 2AM, NZDT 4AM on November 14; CST on the graphic is US Central Time, not Beijing time; the graphic does not print 18:00. Posted 2026-11-11 23:00:01 Asia/Shanghai (2026-11-11T15:00:01Z).",
  },
  {
    href: SOURCE_URLS[11],
    text: "Official X scenery post. Full text: “The Anniversary Version: Hutuo arrives on November 13 (UTC)!” On-timeline display is cut to “November 13,” with no clock. Posted 2026-11-12 06:00:02 Asia/Shanghai (2026-11-11T22:00:02Z). Do not use this post to overwrite source [11].",
  },
  {
    href: SOURCE_URLS[12],
    text: "Official “[Across Autumn Waters] Version 2.4 Update Overview” (Global site; page date 2026-11-12, date only, no time zone or clock; HTTP 200 on 2026-11-13). Image-led page (three long images). Source for the 18:00:00–22:59:59 (UTC+8) live update, the Live Maintenance Schedule (18:01:00 / 23:00:00 / 00:00:00, printed without a restated time zone; the 00:00:00 line has no calendar date), Hutuo access via Enduring Flame, Campaign [Hutuo River], Jianghu Legacy requirements (Kindle the Void: 6,000 Hidden Mountain exploration progress), World Boss first-defeat rewards, and the Radiance Boat.",
  },
  {
    href: SOURCE_URLS[13],
    text: "Official Steam community announcement “Version 2.4 [Across Autumn Waters] Update Overview,” gid 1849192144183182, posted 2026-11-12 22:43:09 Asia/Shanghai (Steam API timestamp). Same three images as source [13].",
  },
  {
    href: SOURCE_URLS[14],
    text: "Official X maintenance notice: “The Eastwind Pavilion will undergo a live update on November 13, 2026, from 18:00:00 to 22:59:59 (UTC+8)…”; links sources [13] and [16]. Posted 2026-11-12 23:00:03 Asia/Shanghai.",
  },
  {
    href: SOURCE_URLS[15],
    text: "Official “Version 2.4 Path Balance Adjustment Announcement (November 13)” (Global site; page date 2026-11-12, date only). Steam copy: https://store.steampowered.com/news/app/3564740/view/1849192144183200 (gid 1849192144183200, posted 2026-11-12 22:46:44 Asia/Shanghai). Numeric balance and system adjustments; no Dual Spears date change.",
  },
  {
    href: SOURCE_URLS[16],
    text: "Official X: creator livestreams starting November 13, “fight alongside Jiang Yan at Zhongdu Bridge” (livestream rally; no clock, gate, or reward; not a Boss announcement). Posted 2026-11-12 20:54:34 Asia/Shanghai.",
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
    q: "When does Hutuo open?",
    a: "Hutuo officially goes live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8).[11] The Version 2.4 overview gives that live update as 18:00:00 to 22:59:59 (UTC+8).[13] That span is the update window: 18:00 is not go-live, and 23:00 / 22:59:59 is the end of the window, not its start. The launch graphic gives a single moment of 11PM UTC+8 on November 13 (15:00 UTC); 12AM KST, 12AM JST, 2AM AEDT, and 4AM NZDT fall on November 14, and CST on the graphic is US Central Time, not Beijing time.[11] Earlier posts that only said November 13, or November 13 (UTC), are kept and marked as superseded.[7][2][12]",
    ld: "Hutuo officially goes live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8). The Version 2.4 overview gives that live update as 18:00:00 to 22:59:59 (UTC+8). That span is the update window: 18:00 is not go-live, and 23:00 / 22:59:59 is the end of the window, not its start. The launch graphic gives a single moment of 11PM UTC+8 on November 13 (15:00 UTC); 12AM KST, 12AM JST, 2AM AEDT, and 4AM NZDT fall on November 14, and CST on the graphic is US Central Time, not Beijing time. Earlier posts that only said November 13, or November 13 (UTC), are kept and marked as superseded.",
  },
  {
    q: "Is Hutuo live today (2026-11-13)?",
    a: "Not as of this page’s check on 2026-11-13 (about 10:10 Asia/Shanghai), which was before the 18:00:00 (UTC+8) start of the live update. Treat it as scheduled for after the update window, not as a completed live claim.[11][13]",
    ld: "Not as of this page's check on 2026-11-13 (about 10:10 Asia/Shanghai), which was before the 18:00:00 (UTC+8) start of the live update. Treat it as scheduled for after the update window, not as a completed live claim.",
  },
  {
    q: "Does Hutuo open at 18:00 (UTC+8) on November 13?",
    a: "No. 18:00–23:00 (UTC+8) is a non-downtime update window. Official copy says Hutuo goes live following that update.[11]",
  },
  {
    q: "Does the update start at 23:00 (UTC+8)?",
    a: "No. 23:00 (UTC+8) is the end of the published non-downtime update window; the Version 2.4 overview writes the end as 22:59:59 (UTC+8), and says the update is expected to become available after 23:00:00.[11][13]",
    ld: "No. 23:00 (UTC+8) is the end of the published non-downtime update window; the Version 2.4 overview writes the end as 22:59:59 (UTC+8), and says the update is expected to become available after 23:00:00.",
  },
  {
    q: "Has Steam published Version 2.4?",
    a: "Yes. The official Steam announcement “Version 2.4 [Across Autumn Waters] Update Overview” (gid 1849192144183182) was posted at 2026-11-12 22:43:09 Asia/Shanghai, and “Version 2.4 Path Balance Adjustment Announcement (November 13)” (gid 1849192144183200) at 2026-11-12 22:46:44 Asia/Shanghai.[14][16]",
    ld: "Yes. The official Steam announcement \"Version 2.4 [Across Autumn Waters] Update Overview\" (gid 1849192144183182) was posted at 2026-11-12 22:43:09 Asia/Shanghai, and \"Version 2.4 Path Balance Adjustment Announcement (November 13)\" (gid 1849192144183200) at 2026-11-12 22:46:44 Asia/Shanghai.",
  },
  {
    q: "When are players forcibly disconnected for the update?",
    a: "The overview says: “At 00:00:00, wanderers who have not relogged will be forcibly disconnected.” It does not say which calendar day that is, so this page does not assign one. It recommends relogging in advance.[13]",
    ld: "The overview says: \"At 00:00:00, wanderers who have not relogged will be forcibly disconnected.\" It does not say which calendar day that is, so this page does not assign one. It recommends relogging in advance.",
  },
  {
    q: "How do I unlock Hutuo?",
    a: "During the Enduring Flame event, reach Lv. 32 and complete the Kaifeng Main Chapter [New Arrival in Kaifeng]. That unlocks the prerequisite quest [Hutuo Memories]; completing it grants access to the Hutuo region.[13]",
    ld: "During the Enduring Flame event, reach Lv. 32 and complete the Kaifeng Main Chapter [New Arrival in Kaifeng]. That unlocks the prerequisite quest [Hutuo Memories]; completing it grants access to the Hutuo region.",
  },
  {
    q: "What about official posts that only say November 13, or November 13 (UTC)?",
    a: "Those earlier labels are still official wording, including a later scenery post whose full text says “Hutuo arrives on November 13 (UTC)!” This page keeps them and treats the 18:00–23:00 (UTC+8) window, plus “go live following,” as the more precise later announcement. It does not use the scenery post to overwrite that window, and it does not rewrite a date-only label as Beijing midnight.[7][2][12]",
  },
  {
    q: "Is Dual Spears part of day-one Hutuo on November 13?",
    a: "No. Official copy says Dual Spears officially arrives on November 26 (UTC), with no clock time published. That is not November 13, and it should not be rewritten as Beijing midnight.[10]",
  },
  {
    q: "What is the Campaign [Hutuo River] requirement, and what is the first-clear reward?",
    a: "The participation requirement is “Unlock the Hutuo region in Hidden Mountain.” The first clear awards the accessory [Winter's Defiance]; later clears offer a chance at the accessory [Direwolf Spine], which can also be exchanged in the Season Shop.[13] Story paths converge at Zhongdu Bridge, which is a narrative battlefield, not a Boss.[7]",
    ld: "The participation requirement is \"Unlock the Hutuo region in Hidden Mountain.\" The first clear awards the accessory [Winter's Defiance]; later clears offer a chance at the accessory [Direwolf Spine], which can also be exchanged in the Season Shop. Story paths converge at Zhongdu Bridge, which is a narrative battlefield, not a Boss.",
  },
  {
    q: "What is the Kindle the Void requirement?",
    a: "Unlock the Hutuo region in Hidden Mountain and reach an exploration progress of 6,000 in Hidden Mountain. The first completion awards the accessory [Dragonbend Token], [Medicinal Tales], [Echo Jade], and other rewards.[13]",
    ld: "Unlock the Hutuo region in Hidden Mountain and reach an exploration progress of 6,000 in Hidden Mountain. The first completion awards the accessory [Dragonbend Token], [Medicinal Tales], [Echo Jade], and other rewards.",
  },
  {
    q: "How many players can build on the Radiance Boat together?",
    a: "The boat owner can invite up to 4 wanderers to dismantle, assemble, and modify components together in Free Build. That is the published co-building limit; the overview does not publish a riding or passenger capacity.[13]",
    ld: "The boat owner can invite up to 4 wanderers to dismantle, assemble, and modify components together in Free Build. That is the published co-building limit; the overview does not publish a riding or passenger capacity.",
  },
  {
    q: "Are Horse Racing Chess and Jianghu Tactics full board-game guides here?",
    a: "No. Only the announced names tied to the anniversary update are confirmed here.[3]",
  },
  {
    q: "Are Wayfarer Bingshen and Yelu Abuli already live? Do they start on November 13?",
    a: "Not as of this page’s check on 2026-11-13, before the update window. The Version 2.4 overview lists both World Bosses with the requirement “Unlock the Hutuo region in Hidden Mountain,” but it does not give either one its own start clock, and the earlier teaser only said they “arrive soon!”[13][9]",
    ld: "Not as of this page's check on 2026-11-13, before the update window. The Version 2.4 overview lists both World Bosses with the requirement \"Unlock the Hutuo region in Hidden Mountain,\" but it does not give either one its own start clock, and the earlier teaser only said they \"arrive soon!\"",
  },
  {
    q: "What are the Hutuo World Boss first-clear rewards?",
    a: "Yelu Abuli: decoration [Fire Offering], special item [Shaman Bell], [Medicinal Tales] ×3, [Inner Way Note: Custom Chest] ×5, and [Echo Jade] ×20. Bingshen (Wayfarer Bingshen): accessory [Lost Wayfarer], [Medicinal Tales] ×3, [Inner Way Note: Custom Chest] ×5, [Echo Jade] ×20, and other rewards. Sword Forge Challenges add avatars and badges for each boss.[13]",
    ld: "Yelu Abuli: decoration [Fire Offering], special item [Shaman Bell], [Medicinal Tales] ×3, [Inner Way Note: Custom Chest] ×5, and [Echo Jade] ×20. Bingshen (Wayfarer Bingshen): accessory [Lost Wayfarer], [Medicinal Tales] ×3, [Inner Way Note: Custom Chest] ×5, [Echo Jade] ×20, and other rewards. Sword Forge Challenges add avatars and badges for each boss.",
  },
  {
    q: "Are the new World Bosses raids?",
    a: "No. Official copy calls them World Bosses, not raids. Their published requirement is unlocking the Hutuo region; level requirements, player counts, refresh times, and full drop tables are not published.[7][13]",
    ld: "No. Official copy calls them World Bosses, not raids. Their published requirement is unlocking the Hutuo region; level requirements, player counts, refresh times, and full drop tables are not published.",
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
          Hutuo opens as Where Winds Meet’s first global anniversary major update—<strong>Version 2.4</strong>—the
          third region of Hidden Mountain, a war-themed narrative arc, and a new Campaign, <strong>[Hutuo River]</strong>,
          framed around a battlefield frontier.
          <Cite n={[7, 8]} />
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          Official copy now gives a clock window. An official X post published on 2026-11-11 says: “Where Winds Meet&apos;s major 1st Anniversary update: Hutuo will officially go live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8)!”
          <Cite n={11} /> The <strong>18:00–23:00 (UTC+8)</strong> span is a <strong>non-downtime update</strong> window.
          Hutuo <strong>goes live following</strong> that update: this page does <strong>not</strong> treat <strong>18:00</strong> as
          the go-live time, and it does <strong>not</strong> treat <strong>23:00</strong> as the start of the update. The
          same post’s graphic is titled “1ST ANNIVERSARY: HUTUO GLOBAL LAUNCH” and shows a <strong>single</strong> moment:{" "}
          <strong>11PM UTC+8 on November 13</strong> (that moment is 15:00 UTC). On that graphic, 12AM KST, 12AM JST, 2AM AEDT,
          and 4AM NZDT fall on <strong>November 14</strong>. The label <strong>CST</strong> on the graphic is <strong>US Central Time</strong>,
          not Beijing time. The graphic does <strong>not</strong> print the 18:00 start of the update window.
          <Cite n={11} />
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          Earlier official wordings that only gave a calendar date—the Version 2.4 Dev Letter’s “On November 13, Hutuo,
          the third region of Hidden Mountain, will officially open” (no time zone and no clock),
          <Cite n={7} /> the rewards post’s <strong>November 13 (UTC)</strong> (also no clock),
          <Cite n={2} /> and a later scenery post whose full text still says “The Anniversary Version: Hutuo arrives on
          November 13 (UTC)!” (the on-timeline display is cut to “November 13”)
          <Cite n={12} />—are <strong>kept</strong> on this page and <strong>marked as superseded</strong> by the more
          precise window above. This page does <strong>not</strong> use the scenery post to overwrite that window, and
          it still does <strong>not</strong> rewrite a date-only label as a Beijing midnight start.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          The official <strong>Version 2.4 [Across Autumn Waters] Update Overview</strong>, published on the Global site
          (page date 2026-11-12, date only) and on Steam (2026-11-12 22:43:09 Asia/Shanghai), adds the details this page
          was waiting for: the live-update window down to the second (<strong>18:00:00 to 22:59:59 (UTC+8)</strong> on
          November 13), participation requirements for the new Campaign, Jianghu Legacies, and World Bosses, and
          first-clear rewards.
          <Cite n={[13, 14]} /> This guide is still an announcement hub, not a live walkthrough. World Boss level
          requirements, player counts, refresh times, and full drop tables are <strong>still not published</strong>, so
          they are not invented here.
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
            <strong>When:</strong> Hutuo officially goes live <strong>following</strong> a non-downtime update on November 13,
            from <strong>18:00 to 23:00 (UTC+8)</strong>.
            <Cite n={11} /> The later Version 2.4 overview gives the same live update to the second: <strong>18:00:00 to 22:59:59 (UTC+8)</strong>,
            and says it “may end early or be extended depending on server conditions.”
            <Cite n={[13, 14, 15]} /> That span is the update window. 18:00 is not the go-live time, and 23:00 / 22:59:59 is the <strong>end</strong> of
            the window, not its start. The launch graphic on source [11] gives a single moment of <strong>11PM UTC+8 on November 13</strong> (15:00 UTC).
            <Cite n={11} /> Earlier date-only labels—<strong>November 13</strong> in the Dev Letter, <strong>November 13 (UTC)</strong> on the rewards
            post and on a later scenery post—are kept and marked as superseded.
            <Cite n={[7, 2, 12]} />
          </li>
          <li><strong>Status on 2026-11-13 (checked about 10:10 Asia/Shanghai, before the update window):</strong> global preview / pre-launch. Not treated as already live.</li>
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
        <h2 className="text-2xl font-bold text-slate-50">When Hutuo goes live on November 13</h2>
        <p className="text-sm leading-6 text-slate-300">
          The governing official wording, from an official X post published 2026-11-11 23:00:01 Asia/Shanghai (2026-11-11T15:00:01Z), is:
        </p>
        <blockquote className="border-l-2 border-amber-400/60 pl-4 text-sm leading-6 text-slate-200">
          Where Winds Meet&apos;s major 1st Anniversary update: Hutuo will officially go live following a non-downtime update on November 13, from 18:00 to 23:00 (UTC+8)!
          <Cite n={11} />
        </blockquote>
        <p className="text-sm leading-6 text-slate-300">Read that sentence in this order:</p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li><strong>18:00–23:00 (UTC+8)</strong> is a <strong>non-downtime update</strong> on November 13. It is not downtime, and it is not the go-live moment.</li>
          <li>Hutuo <strong>goes live following</strong> that update—after the window, not at 18:00.</li>
          <li><strong>23:00 (UTC+8)</strong> is the <strong>end</strong> of the stated update window. It is not the time the update starts.</li>
        </ol>
        <p className="text-sm leading-6 text-slate-300">
          The same post’s graphic is titled <strong>“1ST ANNIVERSARY: HUTUO GLOBAL LAUNCH.”</strong> It prints one moment,{" "}
          <strong>11PM UTC+8 on November 13</strong>, which is <strong>15:00 UTC</strong>. The graphic’s other clocks for
          that same moment, as printed, are: 7AM PST, 9AM CST, 10AM EST, 12PM BRT, 3PM GMT, 4PM CET, 4PM WAT, 5PM EET on{" "}
          <strong>November 13</strong>; and 12AM KST, 12AM JST, 2AM AEDT, and 4AM NZDT on <strong>November 14</strong>. The
          dashed date line on the graphic is labeled <strong>NOVEMBER 13TH | NOVEMBER 14TH</strong>. <strong>CST</strong> on
          this graphic is <strong>US Central Time</strong> (shown over the central United States), not Beijing time. The
          graphic does <strong>not</strong> print 18:00, and this page does not add 18:00 onto the graphic.
          <Cite n={11} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          A later official scenery post, published 2026-11-12 06:00:02 Asia/Shanghai, still says in its full text “The
          Anniversary Version: Hutuo arrives on November 13 (UTC)!” The shortened on-timeline text is “November 13,” with
          no clock. That wording matches the earlier rewards post. This page <strong>does not</strong> use it to overwrite
          or cancel the 18:00–23:00 (UTC+8) window.
          <Cite n={[12, 2]} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Steam has now published Version 2.4. The official Steam community announcement <strong>“Version 2.4 [Across Autumn Waters] Update Overview”</strong> (gid <strong>1849192144183182</strong>) went up at <strong>2026-11-12 22:43:09 Asia/Shanghai</strong>, followed by <strong>“Version 2.4 Path Balance Adjustment Announcement (November 13)”</strong> (gid <strong>1849192144183200</strong>) at <strong>2026-11-12 22:46:44 Asia/Shanghai</strong>.
          <Cite n={[14, 16]} /> The Steam overview carries the same three long images as the Global site’s overview page.
          <Cite n={[13, 14]} /> The earlier note on this page that Steam’s latest announcement was the Version 2.3 patch notes (gid 1847920302233930, 2026-10-29 16:38:17 Asia/Shanghai) is <strong>superseded</strong>.
        </p>
        <h3 className="text-xl font-bold text-slate-50">Live update schedule (Version 2.4 overview)</h3>
        <p className="text-sm leading-6 text-slate-300">
          The overview opens with: “The Eastwind Pavilion will undergo a live update on November 13, 2026, from <strong>18:00:00 to 22:59:59 (UTC+8)</strong>. You can remain logged in and continue playing as usual, although some features and game modes may be temporarily unavailable.” The same wording is in an official X maintenance notice posted 2026-11-12 23:00:03 Asia/Shanghai, which links to both the overview and the Path Balance announcement.
          <Cite n={[13, 14, 15]} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          This matches the earlier official post—go live <strong>following</strong> a non-downtime update on November 13, <strong>18:00 to 23:00 (UTC+8)</strong>—and is more precise about the last second. This page keeps both wordings.
          <Cite n={[11, 13]} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The overview’s <strong>Live Maintenance Schedule</strong> section lists these clock times. That section does <strong>not</strong> restate a time zone after each clock; the only time zone in the document is the <strong>UTC+8</strong> on the opening window. They are quoted as printed:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Clock as printed</th>
                <th className="px-3 py-2">What the overview says</th>
                <th className="px-3 py-2">Limits of evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>After 18:01:00</strong></td>
                <td className="px-3 py-3 leading-6">Live maintenance begins. Most features and modes stay available; some are temporarily unavailable and come back gradually (examples include chat, friends, gifting, Gallery actions, Bounties, Guild management, Guild Parties, Showdown, Breaking Army, Painted Boat construction and travel bidding, Sponsored Firework auctions, and Homestead actions).<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">This is maintenance starting, <strong>not</strong> Hutuo going live.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>After 23:00:00</strong></td>
                <td className="px-3 py-3 leading-6">“This week&apos;s update is expected to become available after 23:00:00, though its availability may be delayed if issues arise. Relog to install it.” After installing, you can no longer play with wanderers who have not updated.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">“Expected,” “may be delayed.” Some features stay unavailable for a while after installing.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>00:00:00</strong></td>
                <td className="px-3 py-3 leading-6">“At 00:00:00, wanderers who have not relogged will be forcibly disconnected.” The overview recommends relogging in advance.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6 text-slate-300">The overview does <strong>not</strong> say which calendar day this 00:00:00 falls on. This page does not assign it a date.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          If a Monthly Pass or Battle Pass gift fails during the live maintenance, the overview says the item returns to your Bag and can be sent again after you install the update.
          <Cite n={13} />
        </p>
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
        <h2 className="text-2xl font-bold text-slate-50">How to unlock Hutuo</h2>
        <p className="text-sm leading-6 text-slate-300">
          The Version 2.4 overview ties Hutuo access to the anniversary event <strong>Enduring Flame</strong> (After the version update on November 13, 2026 to December 10, 2026, 04:59:59 — no time zone is stated for that end time):
          <Cite n={13} />
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li>Reach <strong>Lv. 32</strong>.</li>
          <li>Complete the Kaifeng Main Chapter <strong>[New Arrival in Kaifeng]</strong>.</li>
          <li>This unlocks the prerequisite quest <strong>[Hutuo Memories]</strong>. Completing it grants access to the Hutuo region.<Cite n={13} /></li>
        </ol>
        <p className="text-sm leading-6 text-slate-300">
          The overview also describes <strong>Lost Chapter: Hutuo Memories</strong>, which awards the outfit <strong>[Bleak Nocturne]</strong> on completion.
          <Cite n={13} /> Most new Hutuo content below lists “Unlock the Hutuo region in Hidden Mountain” as its participation requirement.
          <Cite n={13} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Map pins and a click-by-click UI path are not published, so they are not added here.
        </p>
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
          <strong>Requirement and rewards (Version 2.4 overview):</strong> Participation requirement: “Unlock the Hutuo region in Hidden Mountain.” Wanderers who complete <strong>Campaign: Hutuo River</strong> for the first time receive the accessory <strong>[Winter&apos;s Defiance]</strong>. Subsequent clears offer a chance to obtain the accessory <strong>[Direwolf Spine]</strong>, which can also be exchanged in the <strong>Season Shop</strong>.
          <Cite n={13} /> The overview does not publish a drop rate for [Direwolf Spine], a player count, or a level requirement for the Campaign. Its story text names Wang Qing, Du Chongwei, and “The General,” with Zhongdu besieged; those are narrative characters, not new Boss names.
          <Cite n={13} />
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
          locations are listed below.
          <Cite n={7} /> The Version 2.4 overview adds participation requirements and rewards (table after the list).
          <Cite n={13} /> This page does <strong>not</strong> invent quest steps or puzzle solutions.
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
        <div className="overflow-x-auto">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">Jianghu Legacy</th>
                <th className="px-3 py-2">Participation requirement (Version 2.4 overview)</th>
                <th className="px-3 py-2">Rewards as published</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>The Deepest Cut</strong></td>
                <td className="px-3 py-3 leading-6">“Enter the Hidden Mountain Journal to view Jianghu Legacy details.”<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">[Medicinal Tales], [Echo Jade], and other rewards.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Melody Amid Reeds</strong></td>
                <td className="px-3 py-3 leading-6">“Enter the Hidden Mountain Journal to view Jianghu Legacy details.”<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">[Medicinal Tales], [Echo Jade], and other rewards.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Kindle the Void</strong></td>
                <td className="px-3 py-3 leading-6">“Unlock the Hutuo region in Hidden Mountain and reach an exploration progress of <strong>6,000</strong> in Hidden Mountain.”<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">First completion: accessory <strong>[Dragonbend Token]</strong>, [Medicinal Tales], [Echo Jade], and other rewards.<Cite n={13} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          The <strong>6,000</strong> figure is a Hidden Mountain <strong>exploration progress</strong> requirement. It is not a level gate and not a group-size requirement.
          <Cite n={13} />
        </p>
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
          <Cite n={9} /> The Version 2.4 overview now lists both under World Boss in its Major Updates. It does not give either boss its own start clock, so this page does not attach one.
          <Cite n={13} />
        </p>
        <h3 className="text-xl font-bold text-slate-50">What are the Hutuo World Boss first-clear rewards?</h3>
        <p className="text-sm leading-6 text-slate-300">
          Both World Bosses have the same participation requirement: “Unlock the Hutuo region in Hidden Mountain.” Both are “recorded in the Journal.”
          <Cite n={13} />
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-3 py-2">World Boss (heading as printed in the overview)</th>
                <th className="px-3 py-2">First-defeat rewards as published</th>
                <th className="px-3 py-2">Sword Forge Challenges (Trial interface)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Yelu Abuli</strong></td>
                <td className="px-3 py-3 leading-6">Decoration <strong>[Fire Offering]</strong>, special item <strong>[Shaman Bell]</strong>, <strong>[Medicinal Tales] ×3</strong>, <strong>[Inner Way Note: Custom Chest] ×5</strong>, <strong>[Echo Jade] ×20</strong>.<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">Avatar <strong>[Shaman&apos;s Blessing]</strong>, badge <strong>[Trial: Shaman&apos;s Call]</strong>, [Echo Jade], and other rewards.<Cite n={13} /></td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-semibold"><strong>Bingshen</strong></td>
                <td className="px-3 py-3 leading-6">Accessory <strong>[Lost Wayfarer]</strong>, <strong>[Medicinal Tales] ×3</strong>, <strong>[Inner Way Note: Custom Chest] ×5</strong>, <strong>[Echo Jade] ×20</strong>, “and other generous rewards.”<Cite n={13} /></td>
                <td className="px-3 py-3 leading-6">Avatar <strong>[Wayfarer Bingshen]</strong>, badge <strong>[Trial: Inches Apart]</strong>, [Echo Jade], and other rewards.<Cite n={13} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          The overview’s section heading reads <strong>Bingshen</strong>; the Dev Letter and the teaser post call him <strong>Wayfarer Bingshen</strong>.
          <Cite n={[7, 9, 13]} /> This page treats them as the same World Boss and does not read the shorter heading as a rename.
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Still <strong>not published</strong>: level requirements, player counts, refresh times, and full drop tables beyond the first-defeat lists above. These are World Bosses, not raids, and no raid group size appears in the cited sources.
          <Cite n={[7, 13]} />
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Radiance Boat: how many players can build together?</h2>
        <p className="text-sm leading-6 text-slate-300">
          Wanderers who own the <strong>[Mirage Boat]</strong> can consume <strong>[Mirage Stardream Page]</strong> and <strong>[Keel Rebirth Blueprint]</strong> to remodel it into the new <strong>[Radiance Boat]</strong>. You can switch between the two Painted Boats at any time.
          <Cite n={13} />
        </p>
        <p className="text-sm leading-6 text-slate-300">
          The overview says the Radiance Boat “fully supports Free Build. Boat owners can invite <strong>up to 4 wanderers</strong> to dismantle, assemble, and modify components together.”
          <Cite n={13} /> That limit is for <strong>co-building</strong> with the owner. The overview does <strong>not</strong> publish a passenger or riding capacity, so this page does not state one.
        </p>
        <p className="text-sm leading-6 text-slate-300">
          Other points as published: custom boat names, sails, and hull effects; new routes, weather, and docking; build plans shared through the Gallery; <strong>[Crowd&apos;s Favor]</strong> levels that unlock more weather, waterways, and components; new features such as <strong>[Washroom]</strong>, <strong>[Leisure Chair]</strong>, <strong>[Tai Chi Tidecatch]</strong>, <strong>[Ultra Leap of Faith]</strong>, and <strong>[Shared Fortune]</strong>. Owning the boat also unlocks the outfit <strong>[Monarch of Heavens]</strong>, with a [Victory Cutscene], the idle showcase [Mountain Suppressor], a [Scenario Background], a [Player Dynamic Avatar], [Face Makeup], and the title <strong>[Regal: Gilded Cloudpiercer]</strong>.
          <Cite n={13} /> The overview does not give the Radiance Boat a separate clock or a price.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Other Hutuo additions in the Version 2.4 overview</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          <li><strong>New Outpost [Sheathed Passage]:</strong> clearing it for the first time grants the item needed to tame the rare wild mount <strong>[Gem Snow]</strong>, plus [Medicinal Tales], [Constitution], and [Echo Jade].<Cite n={13} /></li>
          <li><strong>Hidden Mountain Exploration [Names That Endure]:</strong> awards the functional item <strong>[Tuo&apos;s Carving Knife]</strong> and unlocks <strong>Stele Inscription</strong>, used to record names on the <strong>Zhongdu Bridge Memorial Stele</strong>. This is an exploration feature, not a Boss.<Cite n={13} /></li>
          <li><strong>Omni-Weapon Skills:</strong> <strong>Sky Tether</strong> (Gauntlets) — acquire [Heavenwill Gauntlets], then complete the Hidden Mountain Wandering Tale [Bound for the Sky]. <strong>Silken Step</strong> (Waist Drum) — acquire [Museflow Waist Drum], then complete the Qingzhou Exploration [Rhythm of the Waves].<Cite n={13} /></li>
          <li><strong>Meow Meow gameplay:</strong> Marching Simulation and Meow Pole.<Cite n={13} /></li>
          <li><strong>New features:</strong> Earth-Listening Urn, Topple Chest, Swallowgram, Shadow Play Tales, and Mounted Archery Challenge.<Cite n={13} /></li>
        </ul>
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
                <td className="px-3 py-3 font-semibold text-slate-50">Hutuo / Version 2.4 [Across Autumn Waters] / first global anniversary major update</td>
                <td className="px-3 py-3 leading-6">
                  Goes live <strong>following</strong> a non-downtime update on November 13, from <strong>18:00 to 23:00 (UTC+8)</strong>.
                  <Cite n={11} /> The Version 2.4 overview gives the live update as <strong>18:00:00 to 22:59:59 (UTC+8)</strong>; the update is “expected to become available after 23:00:00.”
                  <Cite n={[13, 14]} /> Launch graphic: single moment <strong>11PM UTC+8 on November 13</strong> (15:00 UTC); KST / JST 12AM, AEDT 2AM, NZDT 4AM are <strong>November 14</strong>. CST on the graphic is US Central Time.
                  <Cite n={11} />
                </td>
                <td className="px-3 py-3 leading-6 text-slate-300">
                  18:00 is not go-live; 23:00 / 22:59:59 is the end of the window. Earlier date-only labels (Dev Letter November 13; rewards post and scenery post November 13 (UTC)) are kept and marked as superseded.
                  <Cite n={[7, 2, 12]} /> Pre-launch as of 2026-11-13 (checked before the window).
                  <Cite n={[13, 11]} />
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
        <p className="text-sm leading-6 text-slate-300">
          The official <strong>Version 2.4 Path Balance Adjustment Announcement (November 13)</strong> (Global site, page date 2026-11-12; Steam gid 1849192144183200, 2026-11-12 22:46:44 Asia/Shanghai) is a list of <strong>numeric balance and system adjustments</strong>: progression changes for gear (for example Modulated Gear Recovery, free switching between already-unlocked gear sets, and a shorter Reset Tuning / Retuning Correction cooldown), martial-art and Inner Way value changes across paths, Arena / Guild War / Perception Forest tuning, and bug fixes.
          <Cite n={16} /> It does <strong>not</strong> mention Dual Spears or change its date. Dual Spears still officially arrives on <strong>November 26 (UTC)</strong>.
          <Cite n={[10, 16]} />
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
            A go-live minute <strong>other than</strong> what official copy already published: Hutuo goes live <strong>following</strong> a non-downtime update on November 13, <strong>18:00 to 23:00 (UTC+8)</strong>;
            <Cite n={11} /> the Version 2.4 overview gives the live update as <strong>18:00:00 to 22:59:59 (UTC+8)</strong> and says the update is expected to be available after 23:00:00.
            <Cite n={13} /> This page does not invent a go-live time at 18:00 or an update start at 23:00.
          </li>
          <li>
            Map pins or a click-by-click entrance path. The published access route (Lv. 32, [New Arrival in Kaifeng], then [Hutuo Memories]) is in <strong>How to unlock Hutuo</strong> above.
            <Cite n={13} />
          </li>
          <li>
            World Boss <strong>level gates, player counts, refresh times, or full drop tables</strong>. Only the first-defeat rewards and Sword Forge Challenge rewards listed above are published, and the overview does not give either boss its own start clock.
            <Cite n={[13, 9]} />
          </li>
          <li>
            Reward names or quantities for relics gathered after Campaign <strong>[Hutuo River]</strong>.
            <Cite n={7} />
          </li>
          <li>
            Quest-by-quest walkthroughs for the three Jianghu Legacies. Their published participation requirements, including <strong>Kindle the Void</strong>’s 6,000 Hidden Mountain exploration progress, are in the table above.
            <Cite n={13} />
          </li>
          <li>Full rules for Horse Racing Chess or Jianghu Tactics.</li>
          <li>China-server and Global same-day confirmation. That comparison is not in the cited Global English sources.</li>
          <li>
            A calendar date for the overview’s “At 00:00:00 … forcibly disconnected” line. The overview does not say which day that 00:00:00 is.
            <Cite n={13} />
          </li>
          <li>
            A passenger or riding capacity for the <strong>[Radiance Boat]</strong>. Only the co-building limit (the owner can invite up to 4 wanderers) is published.
            <Cite n={13} />
          </li>
          <li>
            New Boss names or a raid. The creator livestream call to “fight alongside Jiang Yan at Zhongdu Bridge” starting November 13 is a livestream rally, not a Boss announcement, and it gives no clock, gate, or reward.
            <Cite n={17} />
          </li>
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
          <li>
            For the opening clock, use the official non-downtime update (18:00–23:00 (UTC+8); 18:00:00–22:59:59 (UTC+8) in the Version 2.4 overview) and the “go live following” wording above, not a Beijing midnight rewrite of an older date-only post.
            <Cite n={[11, 13]} /> This page’s last verified date is an announcement check, not a live-client test.
          </li>
          <li>
            Relog after the update becomes available. The overview says relogging installs it, that you cannot play with wanderers who have not updated, and that wanderers who have not relogged by its 00:00:00 line are disconnected. It recommends relogging in advance.
            <Cite n={13} />
          </li>
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
