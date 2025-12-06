import type { Metadata } from "next";
import Link from "next/link";
import JianghuMapClient from "../components/JianghuMapClient";

export const metadata: Metadata = {
  title: "Where Winds Meet Global Launch Guides Hub",
  description:
    "Global launch hub with the preview stream plus trending Where Winds Meet guides, codes, tier lists, and updates for players on PC, console, and mobile.",
  alternates: {
    canonical: "https://wherewindsmeet.org/",
  },
};

export default function Home() {
  return (
    <div className="space-y-10">
      <JianghuMapClient />

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
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/guides/one-leaf-one-life"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
              >
                🍂 One Leaf, One Life quest — hottest search, full walkthrough
              </Link>
              <Link
                href="/guides/wall-puzzle"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/80 hover:text-sky-100"
              >
                🧩 Wall Puzzle solution
              </Link>
              <Link
                href="/guides/unholy-prophecy"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/60 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:border-purple-300/80 hover:text-purple-100"
              >
                🔮 An Unholy Prophecy quest — fire braziers, Meridian Touch, spike hall
              </Link>
            </div>
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
              title: "One Leaf, One Life",
              href: "/guides/one-leaf-one-life",
              desc: "Most-searched Lost Chapter: start trigger, white-leaf side quests, puzzles, and Gold Leaf epilogue.",
              tag: "Trending",
            },
            {
              title: "Qin Caiwei Friendship",
              href: "/guides/qin-caiwei",
              desc: "Stop the AI Chat loop with sample lines and a five-step playbook to befriend her fast.",
              tag: "AI Chat",
            },
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
              title: "An Unholy Prophecy",
              href: "/guides/unholy-prophecy",
              desc: "Jianghu Legacy 07: rooftop fire arrow braziers, Meridian Touch doors, spike traps, Shi Zhen fight.",
              tag: "Jianghu",
            },
            {
              title: "Wall Puzzle",
              href: "/guides/wall-puzzle",
              desc: "Echoes of Old Battles solution: braziers, Yanyun Oath, 移/百/漂 wall presses.",
              tag: "Puzzle",
            },
            {
              title: "Woven with Malice",
              href: "/guides/woven-with-malice",
              desc: "31-step Lost Chapter walkthrough, time gates, trap, bamboo tail, and bug fixes.",
              tag: "Encounter",
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            {
              title: "NPC List & Old Friends Map",
              href: "/guides/npc-list",
              desc: "Updated NPC portraits, interactive map pins, and click-to-zoom galleries for every Old Friend.",
            },
            {
              title: "Non-interactable NPC Services",
              href: "/guides/npc-list#non-interactable-npcs-no-ai-chat",
              desc: "Qi Sheng, Yao Yaoyao, and other service NPCs without AI Chat—locations and what they offer.",
            },
            {
              title: "Qin Caiwei Chat Guide",
              href: "/guides/qin-caiwei",
              desc: "New AI Chat scripts, loop fixes, and quick combos to befriend Qin Caiwei fast.",
            },
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

      <section className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Fast freebies</p>
          <h2 className="text-2xl font-bold text-slate-50">Grab the latest free outfits and codes.</h2>
          <p className="text-sm leading-relaxed text-slate-200">
            Track zero-cost routes for Where Winds Meet free outfits, cosmetics, and hairstyles, then pair them with the newest redeem codes to fill your wardrobe without spending premium currency.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides/free-outfits"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Free outfits guide
            </Link>
            <Link
              href="/guides/cosmetics"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Cosmetics gallery
            </Link>
            <Link
              href="/news"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              News & roadmap
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Free outfits & sets",
              desc: "Event shop freebies, quest drops, and social shop picks collected in one guide.",
              href: "/guides/free-outfits",
              badge: "0-cost routes",
            },
            {
              title: "Roadmap & updates",
              desc: "Follow news, events, and roadmap beats to time your free cosmetic claims.",
              href: "/news",
              badge: "What’s next",
            },
            {
              title: "Patch notes impact",
              desc: "Check if new updates add free cosmetics or change event drop rates.",
              href: "/guides/patch-notes",
              badge: "Meta shifts",
            },
            {
              title: "Appearance sets",
              desc: "Browse outfits, dyes, and accessories to pair with your freebies.",
              href: "/guides/cosmetics",
              badge: "Style picks",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-emerald-900/20"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-200">{item.title}</h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                  {item.badge}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              <span className="mt-3 text-xs text-emerald-300 group-hover:text-emerald-200">View →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
