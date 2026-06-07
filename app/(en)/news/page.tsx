import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { getContentFreshness } from "@/lib/contentFreshness";
import { latestNewsDate, newsItems } from "@/lib/news";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/news");

export const metadata: Metadata = {
  title: "Where Winds Meet News, Roadmap Updates & Patch Notes",
  description:
    "Curated Where Winds Meet news with roadmap notes, balance updates, and patch notes so you quickly see what changed and why it matters.",
  alternates: buildHreflangAlternates("/news"),
  openGraph: {
    title: "Where Winds Meet News, Roadmap Updates & Patch Notes",
    description:
      "Curated Where Winds Meet news with roadmap notes, balance updates, and patch notes so you quickly see what changed and why it matters.",
    url: `${baseUrl}/news`,
  },
  twitter: {
    title: "Where Winds Meet News, Roadmap Updates & Patch Notes",
    description:
      "Curated Where Winds Meet news with roadmap notes, balance updates, and patch notes so you quickly see what changed and why it matters.",
  },
};

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
      "Do not call a change confirmed until it appears in official notes. Use this watchlist to point players to the June 5 fixes, May 26 Path Balance, May 27 maintenance, and the latest patch-note impact cards.",
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
    title: "Roadmap / Next Updates (watchlist)",
    summary:
      "Updated against the official mobile news index: the June 5 Version 1.7 fixes, pinned unofficial-trading crackdown, May 27 Patch Notes, The Imperial Palace overview, and Version 1.7 Path Balance announcement now mirror the current official trail.",
    updated: lastUpdatedLabel,
    links: [
      { href: "/guides/tier-list", label: "China tier list & balance notes" },
      { href: "/guides/bosses", label: "Boss list & changes" },
      { href: "/guides/unholy-prophecy", label: "An Unholy Prophecy (quest fixes)" },
      { href: "/guides/woven-with-malice", label: "Woven with Malice (time gates)" },
    ],
  };

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
            Latest <span className="text-ink-gold">Where Winds Meet</span> news and official articles.
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
              Latest official-news pass: {freshness?.gameVersion ?? "Version 1.7 / June 5 fixes"} plus the pinned unofficial-trading crackdown, May 27 Patch Notes, The Imperial Palace overview, and Version 1.7 Path Balance announcement. The list below follows the current official news trail.
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
                  Where Winds Meet codes June 2026 — Palace-era reports plus older Qinchuan/Hexi codes and the disabled leaked-code warning:
                  <Link href="/guides/codes" className="ml-1 text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    active codes page
                  </Link>
                </li>
                <li>
                  Version 1.7 / The Imperial Palace — current update anchor for roadmap, event, and returning-player searches.
                </li>
                <li>
                  June 5 patch notes, May 29 historical fixes, and May 26 Path Balance — re-check tier list, builds, weapon pages, and PVP advice against these notes before trusting older meta.
                </li>
                <li>
                  Feng Ruzhi boss (Silk Ball) — location + unlock + mechanic:
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
            {sortedNews.map((item) => (
              <div
                key={item.id}
                className="card-tablet group flex flex-col gap-4 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-bold text-slate-50 group-hover:text-ink-jade transition-colors font-serif">
                      {item.title}
                    </h2>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 font-mono">
                    {item.date}
                    {item.tags && item.tags.length > 0 && (
                      <>
                        <span className="mx-2 text-slate-700">|</span>
                        {item.tags.join(" · ")}
                      </>
                    )}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300/90 font-sans max-w-2xl">
                    {item.summary}
                  </p>
                </div>
                {item.officialUrl && (
                  <div className="mt-2 flex shrink-0 sm:mt-0 sm:pl-4 self-start">
                    <Link
                      href={item.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-seal text-[10px] py-1 px-3"
                    >
                      Read Official
                    </Link>
                  </div>
                )}
              </div>
            ))}
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
