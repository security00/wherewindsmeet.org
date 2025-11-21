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
    <article className="space-y-12 bg-ink-wash min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md bg-texture-noise">
        <div className="pointer-events-none absolute inset-0">
          <Image
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
              announcements, launch guides, system instructions, and beta notices.
              Each card links back to the original news source so you can
              double-check details and read the full context when needed.
            </p>
            <p>
              When you simply want to skim{" "}
              <span className="font-semibold text-emerald-400">Where Winds Meet patch notes</span>{" "}
              without reading every bullet, start here.
            </p>
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
