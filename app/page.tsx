'use client';

import dynamic from "next/dynamic";
import Link from "next/link";

const JianghuMap = dynamic(() => import("../components/JianghuMap"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-inner shadow-slate-950/40 sm:h-[560px]">
      <div className="flex h-full items-center justify-center text-sm text-slate-400">
        Loading map...
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="space-y-10">
      <JianghuMap />

      <section className="card-wuxia rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Global Launch <span className="text-ink-gold">Preview Stream</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Where Winds Meet is an open-world wuxia action RPG set in a turbulent
                era of ancient China. You roam a living Jianghu, mastering graceful
                martial arts, light-foot movement, and powerful inner cultivation
                while choosing your own path between wandering hero, court intrigue,
                and free exploration.
              </p>
              <p>
                This global launch hub collects guides, builds,
                and codes to help players on PC, console, and mobile get the most out
                of every journey.
              </p>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-800/50 shadow-2xl shadow-black/50 group">
            <div className="absolute inset-0 border-brush opacity-50 z-10 pointer-events-none"></div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/2cxhuAwDFl4?start=5&rel=0&modestbranding=1&playsinline=1"
              title="Where Winds Meet - Global Launch Preview Stream"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Trending now</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Where Winds Meet guides players search for</h2>
          </div>
          <span className="text-xs text-slate-400">Updated with Google Trends keywords</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Gift of Gab",
              href: "/guides/gift-of-gab",
              desc: "Win the dialogue minigame: style picks, Inspiration, card combos, Scholar mastery.",
              tag: "Dialogue",
            },
            {
              title: "Free Morph Mystic",
              href: "/guides/free-morph",
              desc: "Unlock the juggle Mystic by deflecting Tian Ying spins; cost, cooldown, tier bonuses.",
              tag: "Mystic",
            },
            {
              title: "Wall Puzzle",
              href: "/guides/wall-puzzle",
              desc: "Echoes of Old Battles solution: braziers, Yanyun Oath, 移/百/漂 wall presses.",
              tag: "Puzzle",
            },
            {
              title: "Active Codes",
              href: "/guides/codes",
              desc: "Redeem the latest rewards before they expire. Updated frequently.",
              tag: "Rewards",
            },
            {
              title: "Tier Lists",
              href: "/guides/tier-list",
              desc: "PVP/PVE rankings and weapon tiers after balance changes.",
              tag: "Meta",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-300 transition">{item.title}</h3>
                <span className="text-[11px] uppercase tracking-wide text-emerald-200/90 border border-emerald-500/30 rounded-full px-2 py-0.5">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">View guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-300">Latest updates</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Stay ahead of balance changes</h2>
          </div>
          <Link href="/news" className="text-xs text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            View all news →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Builds & Talent Paths",
              href: "/guides/builds",
              desc: "Updated for recent patches: flexible PVE/PVP archetypes with weapon swaps.",
            },
            {
              title: "Patch Notes Summary",
              href: "/guides/patch-notes",
              desc: "Condensed highlights: damage tuning, cooldown tweaks, and meta shifts.",
            },
            {
              title: "Weapons Encyclopedia",
              href: "/guides/weapons",
              desc: "Stats, skills, and unlock routes for every weapon family.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-900/20"
            >
              <h3 className="text-lg font-bold text-slate-50 group-hover:text-blue-200 transition">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-blue-300 group-hover:text-blue-200">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
