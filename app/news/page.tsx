import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "Where Winds Meet News, Updates & Patch Notes",
  description:
    "Curated Where Winds Meet news with patch notes, balance changes, events and server updates so you quickly understand what changed and why it matters.",
  alternates: {
    canonical: "https://wherewindsmeet.org/news",
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

export default function NewsPage() {
  const sortedNews = [...newsItems].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );

  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/40 p-6 shadow-lg shadow-slate-950/40 sm:p-8 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg6.png"
            alt="Where Winds Meet news background art"
            fill
            className="object-cover opacity-55"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/5" />
        </div>

        <div className="relative space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Latest Where Winds Meet news and official articles.
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            These entries summarize recent official Where Winds Meet
            announcements, launch guides, system instructions, and beta notices.
            Each card links back to the original news source so you can
            double-check details and read the full context when needed.
          </p>
          <div className="mt-4 space-y-3">
            {sortedNews.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 rounded-2xl border border-slate-700/70 bg-slate-950/75 p-4 text-sm shadow-sm shadow-slate-950/40 sm:flex-row sm:items-start sm:justify-between backdrop-blur-sm"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h2>
                    <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {item.date}
                    {item.tags && item.tags.length > 0 && (
                      <>
                        {" "}
                        · {item.tags.join(" · ")}
                      </>
                    )}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-200 sm:text-[13px]">
                    {item.summary}
                  </p>
                </div>
                {item.officialUrl && (
                  <div className="mt-2 flex shrink-0 justify-end sm:mt-0 sm:pl-4">
                    <Link
                      href={item.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                    >
                      Read on official site
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-lg shadow-slate-950/40 sm:p-8 backdrop-blur-sm">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          How this page fits into the rest of the hub.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          This section gathers the most important Where Winds Meet news in one
          calm, readable stream. Instead of racing through raw patch notes or
          scrolling endless social feeds, you can scan concise summaries that
          explain what changed, why it matters, and which players are affected
          most. Whether a surprise balance pass shifts the tier list, a new
          Jianghu region opens, or a collaboration event drops fresh rewards,
          you will find the key details collected here.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
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
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          Each batch of Where Winds Meet news is also woven into the rest of the
          site. When combat changes alter the effectiveness of certain weapons,
          those insights are reflected in updated builds and the Where Winds
          Meet tier list. When events offer codes or long-term account
          advantages, they are flagged and cross-linked to the rewards guide.
          This integrated approach helps you see the full picture instead of
          treating news, guides, and tools as separate islands.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          The three pillars of Where Winds Meet news coverage.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {newsBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {block.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {block.summary}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          By sorting updates into these three pillars, the site makes it easier
          for you to focus on the Where Winds Meet news that actually affects
          your playstyle. Competitive players might care primarily about balance
          tweaks and PVP adjustments. Explorers may focus on seasonal festivals,
          world events, and new storytelling hooks. Performance-minded players
          can jump straight to technical improvements that make Where Winds Meet
          feel smoother on their specific hardware.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-lg shadow-slate-950/40 backdrop-blur-sm">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Making sense of Where Winds Meet patch notes.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Official patch notes can be long and dense, especially when a major
          update touches multiple systems at once. Here, each wave of Where
          Winds Meet news is distilled into a handful of practical takeaways.
          You will see clear labels such as &quot;buff&quot;, &quot;nerf&quot;,
          and &quot;rework&quot;, along with a short explanation of what the
          change feels like in play. If a favorite build becomes slightly more
          demanding, or a struggling archetype finally receives love, that
          context appears up front instead of being buried in a paragraph of
          numbers.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          When Where Winds Meet patch notes introduce entirely new features,
          such as a fresh zone, activity type, or social system, this page
          links to deeper guides created specifically for those mechanics. That
          way, you can decide whether to dive into a detailed article or simply
          note the headline and continue with your current goals. The aim is to
          keep you informed without demanding that you memorize every bullet
          point in every Where Winds Meet news post.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where relevant, patch explanations also describe how long changes are
          likely to last. Some Where Winds Meet updates function as short-term
          experiments that may be reversed quickly if feedback is poor. Others
          signal a new design direction. Highlighting that distinction helps you
          decide whether to restructure your long term plans or simply adapt for
          a single event or season.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Where Winds Meet news that celebrates community stories.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Not every important update comes from official channels. Some of the
          most delightful Where Winds Meet news emerges from the community
          itself: creative photo mode showcases, clever speedrun routes, funny
          co-op mishaps, or heartfelt duel rivalries. This page occasionally
          highlights those stories when they help other players see new
          possibilities in Jianghu or offer a fresh perspective on how flexible
          the game&apos;s systems can be.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          These highlights are always framed with respect for player privacy and
          attribution. When a community discovery leads to a new Where Winds
          Meet build, route, or photo mode trick, you will see a clear link to
          the original creator whenever possible. The goal is to celebrate the
          creativity that keeps Where Winds Meet feeling alive between official
          content drops, not to claim credit for work done by dedicated fans.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          For players who mostly enjoy reading, this blend of official Where
          Winds Meet news and curated community moments can make the world feel
          more vibrant. Even on nights when you cannot log in, skimming this
          page keeps you connected to the broader story unfolding across
          servers, livestreams, and social threads.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Staying informed without burning out on Where Winds Meet news.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Live service games thrive on constant updates, but that same cadence
          can be exhausting. Instead of encouraging you to track every single
          announcement, this site suggests a calmer rhythm. Check the Where
          Winds Meet news page when a patch lands, before a big event, or when
          you are returning after a break. Skim the summaries, note which areas
          touch your favorite activities, and then step back into Jianghu with a
          clear idea of what deserves attention right now.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you ever feel overwhelmed by constant headlines, remember that the
          core of Where Winds Meet remains a beautifully crafted open world
          where you can lose yourself in exploration, duels, and quiet moments
          between storms. Let this page filter the noise, keeping only the most
          meaningful Where Winds Meet news front and center so your time and
          energy go toward experiences that truly matter to you.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Combined with the guides, builds, codes, and tier list sections, this
          page completes a holistic view of the game. Whenever new Where Winds
          Meet news arrives, you know exactly where to find it, how to interpret
          it, and which follow-up articles will help you turn information into
          confident action inside the game world.
        </p>
        <p className="text-xs text-slate-300">
          When you are ready to act on what you have read here, head back to the{" "}
          <Link
            href="/guides"
            className="text-emerald-300 hover:text-emerald-200"
          >
            guides hub
          </Link>{" "}
          to update your plans, tweak your builds, or discover new ways to enjoy
          Where Winds Meet.
        </p>
      </section>
    </article>
  );
}
