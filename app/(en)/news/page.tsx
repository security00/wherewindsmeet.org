import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { getContentFreshness } from "@/lib/contentFreshness";
import { MediaPlaceholder } from "@/components/guides/MediaPlaceholder";
import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import { OfficialNewsCard } from "@/components/news/OfficialNewsCard";
import {
  castInCurrentsScholar,
  mountTaiBlizzardInn,
  qingzhouPenglai,
  spiritOfTheGroveHall,
} from "@/lib/officialQingzhouMedia";
import { latestNewsDate, newsItems } from "@/lib/news";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/news");

export const metadata: Metadata = {
  title: "Where Winds Meet Next Update & News: Version 2.3 Live, What Comes Next",
  description:
    "Where Winds Meet update today: October 28 Dev Letter (Penglai, Mount Tai Blizzard, Cast in Currents, Spirit of the Grove) and October 29 fixes, plus the October 15 Version 2.3 Friends from Afar baseline.",
  alternates: buildHreflangAlternates("/news"),
  openGraph: {
    title: "Where Winds Meet Next Update & News: Version 2.3 Live, What Comes Next",
    description:
      "Where Winds Meet update today tracker for Version 2.3 Friends from Afar (October 15), Qingzhou, and the Version 2.2 patch notes.",
    url: `${baseUrl}/news`,
  },
  twitter: {
    title: "Where Winds Meet Next Update & News: Version 2.3 Live, What Comes Next",
    description:
      "Where Winds Meet update today tracker for the official October 15 Version 2.3 overview and the September 16 Version 2.2 patch notes.",
  },
};

const steamVersion23Url = "https://store.steampowered.com/news/app/3564740/view/1846651706675921";
const steamVersion22PatchUrl = "https://store.steampowered.com/news/app/3564740/view/1843481262704696";
const steamVersion22OverviewUrl = "https://store.steampowered.com/news/app/3564740/view/1843481262704691";

const todayStatusCards = [
  {
    title: "CURRENT: Version 2.3 Friends from Afar",
    detail:
      "Official October 15 overview (live update 5:00-12:00 UTC+8): new region Qingzhou - Eastern Peak via the Lost Chapter Away to Qingzhou (Lv. 32 and Qinghe Main Chapter Heaven Has No Pier), the Waist Drum weapon and Silkbind - Wings path (Museflow Waist Drum + Willowbend Fan), the Inkbound Order sect, three world bosses, War of Words Gift of Gab, Tier 100 gear, and season S5: Ever Aflame.",
    href: steamVersion23Url,
    label: "Official Version 2.3 overview",
  },
  {
    title: "Previous: Version 2.2 patch notes",
    detail:
      "September 16 Version 2.2 notes: editable Guild Roster with pinned members, seasonal Guild War stats, boss talent tracking for both Guild Hero's Realm bosses, Guild honorary titles, a Guild Base blacklist, the Hidden Scent outfit fix, and a text-only Nameless Sword Sword Energy description correction.",
    href: steamVersion22PatchUrl,
    label: "Official Version 2.2 patch notes",
  },
  {
    title: "Previous: Version 2.2 Perilous Eminence",
    detail:
      "September 16 overview: Hidden Mountain Main Chapter Bringer of Embers (A Bitter Winter and Sea of Sunfire, after Chapter IV: Gold Crow Fall), the Skyward City Ruins campaign, Golden Colossus Taicu and Goshawk, and the Transdust Ruins extraction match that opened September 23.",
    href: steamVersion22OverviewUrl,
    label: "Official Version 2.2 overview",
  },
  {
    title: "Version 2.3 patch notes: October 15 and 16",
    detail:
      "October 15: Transdust Ruins Solo and Trio open all day, Hero's Realm and Sword Trial AFK detection and Ready Check, Multiplayer Wooden Stake, Warehouse (Lv. 20) and Mount Sack. October 16: 25 fixes, including the PlayStation Echo Bead count, Inkbound Order exam questions, and faster Infernal Twinblades Greed Bane - Soul. New appearances include Aureate Dominion (until November 9) and Path of Youth (October 18).",
    href: "/guides/patch-notes#version-2-3-patch-notes",
    label: "Version 2.3 patch-note summary",
  },
  {
    title: "Next update: what is officially announced",
    detail:
      "No Version 2.4 date has been announced yet. The Version 2.3 overview says new Solo Mode levels, character level caps, gear tiers, and progression systems are coming soon, and that higher Inkbound Order ranks unlock after the Farm Recess. Per the Version 2.2 notes, Reflection Temple reopens when Jiangnan arrives. Season S5: Ever Aflame runs until November 26, 2026 04:59:59 (server time).",
    href: steamVersion23Url,
    label: "Official Version 2.3 overview",
  },
  {
    title: "Reflection Temple status",
    detail:
      "Since the September 16 Version 2.2 patch, the Reflection Temple entrance is temporarily closed. It reopens when Jiangnan arrives, and stage progress is preserved. Version 2.1 history (September 5 fixes, September 3 overview) stays on the official Clouded Revelation patch page.",
    href: "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html",
    label: "Version 2.1 patch history",
  },
  {
    title: "Jiangnan / Hangzhou watch",
    detail:
      "Jiangnan launched on the China server with Hangzhou as its first region on June 26. It is not yet announced as live on Global, so the new visual guide separates confirmed CN content from Global expectations.",
    href: "/guides/jiangnan-hangzhou",
    label: "Jiangnan & Hangzhou status",
  },
];

const newsBlocks = [
  {
    title: "Balance updates and combat tweaks",
    summary:
      "High-impact Where Winds Meet news about combat adjustments, including damage tuning, cooldown changes, and systemic reworks that affect popular builds.",
  },
  {
    title: "Open world events and seasonal stories",
    summary:
      "Coverage of Jianghu-wide celebrations, limited time events, and rotating activities that offer unique rewards and fresh reasons to explore.",
  },
  {
    title: "Technical fixes and server stability",
    summary:
      "Practical Where Winds Meet news focused on bug fixes, performance improvements, and server notes that change how smooth your sessions feel.",
  },
];

const searchIntentWatchlist = [
  {
    title: "Future draw preview and reward previews",
    query: "wwm future draw preview",
    action:
      "Check the official news list first, then route players into cosmetics, free outfits, codes, and event reward pages when the draw is confirmed.",
    href: "/guides/cosmetics",
    cta: "Cosmetics hub",
  },
  {
    title: "Arena ranks and tier-list checks",
    query: "wwm arena ranks",
    action:
      "Keep the main tier list, PVP tier list, weapon tier list, and patch notes linked together so rank climbers can move from search to build decisions quickly.",
    href: "/guides/tier-list#arena-ranks",
    cta: "Arena rank notes",
  },
  {
    title: "Upcoming nerfs and balance watch",
    query: "upcoming nerf wwm",
    action:
      "Do not call a change confirmed until it appears in official notes. Use August 20 for the targeted Version 2.1 umbrella and combat changes, then July 23 for the wider Path Balance baseline.",
    href: "/guides/patch-notes#upcoming-nerfs",
    cta: "Balance watch",
  },
  {
    title: "Mistveil / Mist-Shrouded Prison aliases",
    query: "mistveil prison",
    action:
      "Treat Mistveil Prison as an alias intent for Mist-Shrouded Prison and send players to the chest route, loop markers, and final treasure steps.",
    href: "/guides/mist-shrouded-prison#mistveil-prison",
    cta: "Prison route",
  },
];

export default function NewsPage() {
  const sortedNews = newsItems;
  const latestNews = sortedNews.slice(0, 10);
  const olderNews = sortedNews.slice(10);
  const older2026News = olderNews.filter((item) => item.date.startsWith("2026"));
  const archive2025News = olderNews.filter((item) => item.date.startsWith("2025"));

  const lastUpdatedLabel = `Updated ${latestNewsDate}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/news`,
      dateModified: latestNewsDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "News",
          item: `${baseUrl}/news`,
        },
      ],
    },
  ];

  const roadmapBlock = {
    title: "Where Winds Meet roadmap / upcoming update tracker",
    summary:
      "Use this as the broad WWM roadmap and upcoming update hub. It tracks official news first, then routes players to patch notes, codes, tier lists, builds, bosses, and event pages when a new update changes guide advice.",
    updated: lastUpdatedLabel,
    links: [
      { href: "/guides/tier-list", label: "China tier list & balance notes" },
      { href: "/guides/patch-notes#version-2-3", label: "Version 2.3 patch notes" },
      { href: "/guides/clouded-revelation", label: "Version 2.1 Clouded Revelation" },
      { href: "/guides/jiangnan-hangzhou", label: "Jiangnan / Hangzhou Global watch" },
      { href: "/guides/bosses", label: "Boss list & changes" },
      { href: "/guides/unholy-prophecy", label: "An Unholy Prophecy (quest fixes)" },
      { href: "/guides/woven-with-malice", label: "Woven with Malice (time gates)" },
    ],
  };

  const renderNewsCard = (item: (typeof sortedNews)[number]) => (
    <OfficialNewsCard key={item.id} item={item} />
  );

  return (
    <article className="space-y-12 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md bg-texture-noise">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/6.webp"
            alt="Where Winds Meet news background art"
            fill
            className="object-cover opacity-40"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        </div>

        {/* Vertical Text Accent */}
        <div className="absolute right-8 top-8 hidden text-vertical text-3xl font-bold text-slate-50/10 lg:block font-serif select-none">
          江湖风云
        </div>

        <div className="relative space-y-6 z-10 max-w-3xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl font-serif">
            <span className="text-ink-gold">Where Winds Meet</span> next update: Version 2.3 is live, here is what is officially announced next.
          </h1>
          <div className="space-y-4 text-slate-200/90 font-sans text-lg leading-relaxed">
            <p>
              These entries summarize recent official Where Winds Meet
              announcements, roadmap beats, launch guides, system instructions, and
              beta notices.
              Each card links back to the original news source so you can
              double-check details and read the full context when needed.
            </p>
            <p>
              When you simply want to skim{" "}
              <span className="font-semibold text-emerald-400">Where Winds Meet patch notes</span>{" "}
              or track the latest{" "}
              <span className="font-semibold text-emerald-400">Where Winds Meet roadmap</span>{" "}
              updates without reading every bullet, start here.
            </p>
          </div>

          <div
            id="update-today"
            className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 p-4 text-sm text-cyan-50 shadow-inner shadow-cyan-950/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Answer first: update today</p>
                <h2 className="mt-1 text-xl font-bold text-slate-50">What is the latest Where Winds Meet update today?</h2>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-cyan-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-3 leading-6 text-cyan-50/90">
              The current checked update baseline is the <strong>October 28 Dev Letter</strong> (Penglai plus three experiences) and the <strong>October 29</strong> Guild War / Battle Pass / Zhao Laoliu notes, on top of <strong>Version 2.3 Friends from Afar / October 15</strong>,
              then the September 16 Version 2.2 notes and Version 2.1 Clouded Revelation history. If you searched for
              <span className="font-semibold"> where winds meet update today</span>, use the cards below to jump straight
              to official news, patch notes, and roadmap watch items.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {todayStatusCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-xl border border-cyan-300/30 bg-slate-950/70 p-3 transition hover:border-cyan-200/70"
                >
                  <p className="text-sm font-semibold text-slate-50">{card.title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{card.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-cyan-200">{card.label}</p>
                </Link>
              ))}
            </div>
          </div>

          <div
            id="october-29"
            className="space-y-4 rounded-2xl border border-teal-400/40 bg-teal-500/10 p-4 text-sm text-teal-50"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-200">October 29 · Last checked 2026-10-29</p>
            <h2 className="text-xl font-bold text-slate-50">Penglai batch and the new mystic skills</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
                <OfficialMediaFigure item={qingzhouPenglai} aspectClassName="aspect-[16/9]" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-50"><Link href="/guides/penglai" className="hover:text-emerald-200">Qingzhou: Penglai is open (October 29)</Link></h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">Official Dev Letter confirms Penglai opens October 29 with three new experiences. Unlock Qingzhou first, then read the orientation guide.</p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
                <OfficialMediaFigure item={mountTaiBlizzardInn} aspectClassName="aspect-[16/9]" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-50"><Link href="/guides/mount-tai-blizzard" className="hover:text-emerald-200">Campaign [Mount Tai Blizzard]</Link></h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">Closed-circle detective Campaign: Gong-Note Zither freeze-frames, Case Room, and Reverse. No strategy sheet for the legendary foe yet.</p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
                <OfficialMediaFigure item={castInCurrentsScholar} aspectClassName="aspect-[16/9]" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-50"><Link href="/guides/cast-in-currents" className="hover:text-emerald-200">Jianghu Legacy [Cast in Currents]</Link></h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">Zheng Sheng’s dreamcore spatial Legacy. Movement advances or reverses time. Not Spirits of the Lake.</p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
                <OfficialMediaFigure item={spiritOfTheGroveHall} aspectClassName="aspect-[16/9]" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-50"><Link href="/guides/spirit-of-the-grove" className="hover:text-emerald-200">[Spirit of the Grove]</Link></h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">Looping corridors and a bronze mirror in an abandoned Inkbound study hall. Not Spirits of the Lake.</p>
                </div>
              </article>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <h3 className="font-semibold text-slate-50">New mystic skills: Inkwash Splendor and Dear Sword</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Official social posts, mirrored for English wording, schedule both Mystic Skills for October 29, 05:00 UTC+8. Inkwash: brush lunges in combat and calligraphy out of battle. Dear Sword: solo sword waves, or a synchronized dual attack with a companion. No cooldowns or damage numbers here.
              </p>
              <div className="mt-3">
                <MediaPlaceholder
                  slot="N5 mystic skills"
                  alt="Official mystic skill announcement still for Inkwash Splendor and Dear Sword."
                  expectation="Pending a publisher CDN or official social still. Do not hotlink community-mirror card art."
                />
              </div>
              <Link href="/guides/mystic-arts#inkwash-splendor" className="mt-3 inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4">
                /guides/mystic-arts#inkwash-splendor
              </Link>
            </div>
          </div>

          <div
            id="next-update"
            className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-50 shadow-inner shadow-emerald-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">Next update tracker (refreshes as news drops)</p>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-2 text-emerald-100/90">
              Latest official-news pass: {freshness?.gameVersion ?? "Version 2.3 / October 15 overview + Version 2.2 September 16 patch"}, including Qingzhou, the Waist Drum, the Inkbound Order, the Version 2.2 Guild changes, and the Reflection Temple closure until Jiangnan. The list below follows the current official news trail.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link href="/guides/tier-list" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Tier list (China perspective)
              </Link>
              <Link href="/guides/bosses" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Boss changes
              </Link>
              <Link href="/guides/codes" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Latest codes
              </Link>
            </div>
          </div>

          <div
            id="hidden-mountain-watch"
            className="rounded-2xl border border-violet-400/40 bg-violet-500/10 p-4 text-sm text-violet-50 shadow-inner shadow-violet-950/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-200">Roadmap video watch</p>
                <h2 className="mt-1 text-xl font-bold text-slate-50">
                  Hidden Mountain and fresh Where Winds Meet videos.
                </h2>
              </div>
              <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-violet-100">
                Xbox Showcase 2026
              </span>
            </div>
            <p className="mt-3 leading-6 text-violet-50/90">
              Version 2.3 Friends from Afar is the current playable layer. Version 2.2 continued Hidden Mountain with the Bringer of Embers main chapter and Skyward City Ruins, on top of the Version 2.0 expansion baseline. Use the official overviews first, then the video hub for official footage.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <Link href="/videos" className="rounded-full border border-violet-300/60 px-3 py-1 font-semibold text-violet-50 hover:border-violet-200">
                Watch fresh Where Winds Meet videos
              </Link>
              <Link href="/guides/tier-list#what-changed" className="rounded-full border border-violet-300/60 px-3 py-1 font-semibold text-violet-50 hover:border-violet-200">
                Tier list freshness notes
              </Link>
              <Link href="/tools/interactive-map" className="rounded-full border border-violet-300/60 px-3 py-1 font-semibold text-violet-50 hover:border-violet-200">
                Map route checks
              </Link>
            </div>
          </div>

          <div
            id="roadmap"
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-100 shadow-inner shadow-slate-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">{roadmapBlock.title}</p>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                {roadmapBlock.updated}
              </span>
            </div>
            <p className="mt-2 text-slate-300">{roadmapBlock.summary}</p>
            <div className="mt-3 grid gap-2 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <p className="font-semibold text-slate-100">Current update</p>
                <p className="mt-1">The October 15 Version 2.3 overview is the current update anchor, with the September 16 Version 2.2 patch notes and overview as the previous version. Version 2.1 Clouded Revelation (September 5 and August 20 sections) and Version 2.0 notes remain historical context.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <p className="font-semibold text-slate-100">Next watch</p>
                <p className="mt-1">Watch official news before changing codes, tier lists, builds, boss notes, or event reward pages.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <p className="font-semibold text-slate-100">Player impact</p>
                <p className="mt-1">Prioritize platform, patch-note, code, PVE/PVP tier-list, and roadmap queries over quiet quest tails.</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {roadmapBlock.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-300">
              <p className="font-semibold text-slate-200">New hot searches to watch</p>
              <ul className="mt-2 space-y-1">
                <li>
                  Where Winds Meet codes August 2026 - reported Palace-era entries plus older Qinchuan/Hexi codes and the disabled leaked-code warning:
                  <Link href="/guides/codes" className="ml-1 text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    active codes page
                  </Link>
                </li>
                <li>
                  June 29 account-suspension notice - fair-play enforcement, cheating, speed hacks, macros, leaderboard removal, gameplay restrictions, and ban reports:
                  <Link href="https://www.wherewindsmeetgame.com/news/official/Banreport629.html" target="_blank" rel="noreferrer" className="ml-1 text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    official notice
                  </Link>
                </li>
                <li>
                  Version 2.1 / August 20 patch notes - confirmed fix source for A Flourishing Legacy, Rising Beyond, Vernal Umbrella, Arena, Homestead, and cosmetic searches.
                </li>
                <li>
                  August 20 targeted weapon/combat fixes, then the August 14 aggregate page with its August 7 network section and July 23 Path Balance history - separate targeted fixes from the wider weapon baseline before revising tier lists.
                </li>
                <li>
                  Feng Ruzhi boss (Silk Ball) - location + unlock + mechanic:
                  <Link href="/guides/bosses/feng-ruzhi" className="ml-1 text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    Feng Ruzhi guide
                  </Link>
                </li>
                <li>
                  Mist-Shrouded Prison (tomb) chests — sixth/last chest + spawn fixes:
                  <Link href="/guides/mist-shrouded-prison" className="ml-1 text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    Mist-Shrouded Prison guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            id="organic-search-watch"
            className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-sm text-blue-50 shadow-inner shadow-blue-950/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">Trending player questions</p>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-100">
                Current watch
              </span>
            </div>
            <p className="mt-2 text-blue-100/90">
              Players are currently looking for future draw previews, arena ranks, patch-note nerfs, codes,
              Qinchuan routes, NPCs, map help, and Mist-Shrouded Prison answers. Use this section as a quick router
              before digging through the full news archive.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {searchIntentWatchlist.map((item) => (
                <Link
                  key={item.query}
                  href={item.href}
                  className="rounded-xl border border-blue-300/30 bg-slate-950/70 p-3 transition hover:border-blue-200/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">{item.query}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.action}</p>
                  <p className="mt-2 text-xs font-semibold text-emerald-300">{item.cta}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {latestNews.map(renderNewsCard)}

            {older2026News.length > 0 && (
              <details className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-100 marker:hidden">
                  <span>Older 2026 official news ({older2026News.length})</span>
                  <span className="text-xs text-emerald-300 transition group-open:rotate-180">v</span>
                </summary>
                <div className="mt-4 space-y-4">{older2026News.map(renderNewsCard)}</div>
              </details>
            )}

            {archive2025News.length > 0 && (
              <details className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-100 marker:hidden">
                  <span>2025 launch and beta archive ({archive2025News.length})</span>
                  <span className="text-xs text-emerald-300 transition group-open:rotate-180">v</span>
                </summary>
                <div className="mt-4 space-y-4">{archive2025News.map(renderNewsCard)}</div>
              </details>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg backdrop-blur-sm bg-texture-noise">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif border-brush inline-block pb-2 mb-4">
          How this page fits into the rest of the hub.
        </h2>
        <div className="space-y-4 text-slate-300 font-sans leading-relaxed">
          <p>
            This section gathers the most important Where Winds Meet news in one
            calm, readable stream. Instead of racing through raw patch notes or
            scrolling endless social feeds, you can scan concise summaries that
            explain what changed, why it matters, and which players are affected
            most. Whether a surprise balance pass shifts the tier list, a new
            Jianghu region opens, or a collaboration event drops fresh rewards,
            you will find the key details collected here.
          </p>
          <p>
            The goal is not to cover every minor line item, but to focus on the
            Where Winds Meet news that shapes your daily experience. If a patch
            tweaks camera options, controller aim assist, or UI readability, that
            is highlighted because it changes how comfortable the game feels. If a
            seasonal story arc introduces a new activity that will vanish in a few
            weeks, that appears prominently with plain language scheduling
            reminders. You should be able to glance at this page and know
            instantly whether tonight&apos;s Where Winds Meet session will feel
            different from last week.
          </p>
          <p>
            Each batch of Where Winds Meet news is also woven into the rest of the
            site. When combat changes alter the effectiveness of certain weapons,
            those insights are reflected in updated builds and the Where Winds
            Meet tier list. When events offer codes or long-term account
            advantages, they are flagged and cross-linked to the rewards guide.
            This integrated approach helps you see the full picture instead of
            treating news, guides, and tools as separate islands.
          </p>
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/60 p-8 shadow-xl">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif text-center">
          The three pillars of <span className="text-ink-spirit">Where Winds Meet</span> news coverage.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {newsBlocks.map((block) => (
            <div
              key={block.title}
              className="card-wuxia rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-ink-gold font-serif mb-3">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 font-sans">
                {block.summary}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 font-sans max-w-2xl mx-auto">
          By sorting updates into these three pillars, the site makes it easier
          for you to focus on the Where Winds Meet news that actually affects
          your playstyle.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="space-y-5 rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg backdrop-blur-sm bg-texture-noise">
          <h2 className="text-xl font-bold tracking-tight text-slate-50 sm:text-2xl font-serif border-brush inline-block pb-2">
            Making sense of patch notes.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300 font-sans">
            <p>
              Official patch notes can be long and dense, especially when a major
              update touches multiple systems at once. Here, each wave of Where
              Winds Meet news is distilled into a handful of practical takeaways.
              You will see clear labels such as &quot;buff&quot;, &quot;nerf&quot;,
              and &quot;rework&quot;, along with a short explanation of what the
              change feels like in play.
            </p>
            <p>
              When Where Winds Meet patch notes introduce entirely new features,
              such as a fresh zone, activity type, or social system, this page
              links to deeper guides created specifically for those mechanics.
            </p>
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg backdrop-blur-sm bg-texture-noise">
          <h2 className="text-xl font-bold tracking-tight text-slate-50 sm:text-2xl font-serif border-brush inline-block pb-2">
            Community stories & highlights.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300 font-sans">
            <p>
              Not every important update comes from official channels. Some of the
              most delightful Where Winds Meet news emerges from the community
              itself: creative photo mode showcases, clever speedrun routes, funny
              co-op mishaps, or heartfelt duel rivalries.
            </p>
            <p>
              These highlights are always framed with respect for player privacy and
              attribution. The goal is to celebrate the creativity that keeps Where
              Winds Meet feeling alive between official content drops.
            </p>
          </div>
        </section>
      </div>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif">
          Staying informed without burning out.
        </h2>
        <p className="text-slate-300 font-sans max-w-3xl mx-auto leading-relaxed">
          Live service games thrive on constant updates, but that same cadence
          can be exhausting. Instead of encouraging you to track every single
          announcement, this site suggests a calmer rhythm. Check the Where
          Winds Meet news page when a patch lands, before a big event, or when
          you are returning after a break.
        </p>
        <div className="pt-4">
          <Link
            href="/guides"
            className="btn-seal inline-flex text-sm"
          >
            Return to Guides Hub
          </Link>
        </div>
      </section>
    </article>
  );
}
