import type { Metadata } from "next";
import Link from "next/link";
import JianghuMapClient from "@/components/JianghuMapClient";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import EventSpotlight from "@/components/EventSpotlight";

export const metadata: Metadata = {
  title: "Where Winds Meet Global Launch Guides Hub",
  description:
    "Global launch hub with the preview stream plus trending Where Winds Meet guides, codes, tier lists, and updates for players on PC, console, and mobile.",
  alternates: buildHreflangAlternates("/"),
  openGraph: {
    title: "Where Winds Meet Global Launch Guides Hub",
    description:
      "Watch the preview stream and dive into trending Where Winds Meet guides: tier lists, codes, bosses, roadmap, and quests like An Unholy Prophecy, One Leaf One Life, and Woven with Malice.",
    url: "https://wherewindsmeet.org/",
    images: [
      {
        url: "https://static.wherewindsmeet.org/background/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Where Winds Meet global launch background art",
      },
    ],
    siteName: "Where Winds Meet Hub",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
  const cdn = (path: string) => `${cdnBase}${path}`;

  return (
    <div className="space-y-10">
      <EventSpotlight
        eyebrow="Hot event · Dec 2025"
        title="The Great Faceologist"
        description="Limited-time face & make-up contest. Follow the correct in-game upload path and tick the event tag so your submission actually counts."
        bullets={[
          "Upload from Appearance → Edit Face (outfit gallery posts don’t count).",
          "Manually tick the [The Great Faceologist] tag before publishing.",
          "Daily upload cap is low (~5/day), so don’t waste slots.",
        ]}
        primaryHref="/guides/the-great-faceologist"
        primaryLabel="Where Winds Meet The Great Faceologist guide"
        secondaryHref="/guides/cosmetics"
        secondaryLabel="Cosmetics & appearance"
        imageSrc={cdn("/guides/the-great-faceologist/hero.webp")}
        imageFallbackSrc="/guides/the-great-faceologist/hero.webp"
        imageAlt="The Great Faceologist event screen in Where Winds Meet"
      />

      <JianghuMapClient />

      <section className="card-wuxia rounded-3xl p-6 sm:p-8 min-h-[520px]">
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
              <Link
                href="/tools/interactive-map"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-300/80 hover:text-amber-100"
              >
                🗺️ Interactive map — MapGenie + CN alt
              </Link>
              <Link
                href="/guides/desktop-widget"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/80 hover:text-sky-100"
              >
                🖥️ Desktop widget (daily assistant) setup
              </Link>
            </div>
          </div>
          </div>

          <LiteYouTubeEmbed
            videoId="2cxhuAwDFl4"
            start={5}
            title="Where Winds Meet - Global Launch Preview Stream"
            poster="/background/bg4.webp"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 shadow-lg shadow-emerald-900/30">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold text-emerald-100">
            Quick picks (high searches)
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/news#next-update"
              className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/70"
            >
              Next update
            </Link>
            <Link
              href="/guides/bosses"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Boss list & weaknesses
            </Link>
            <Link
              href="/guides/qin-caiwei"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Befriend Qin Caiwei
            </Link>
            <Link
              href="/guides/free-morph"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Free Morph unlock
            </Link>
            <Link
              href="/guides/tier-list"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              China tier list view
            </Link>
            <Link
              href="/guides/unholy-prophecy"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              An Unholy Prophecy
            </Link>
            <Link
              href="/guides/one-leaf-one-life"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              One Leaf One Life
            </Link>
            <Link
              href="/guides/woven-with-malice"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Woven with Malice
            </Link>
            <Link
              href="/guides/mist-shrouded-prison"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Mist-Shrouded Prison chests
            </Link>
          </div>
          <p className="mt-3 w-full text-xs text-emerald-50/80">
            Fast path for top queries: Where Winds Meet next update, Where Winds Meet bosses list, Where Winds Meet Qin Caiwei friendship guide, Where Winds Meet Free Morph unlock, and the China tier list perspective to compare weapons and builds.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Tools</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Quick tools for faster sessions</h2>
            <p className="text-sm text-slate-300 mt-2 max-w-3xl">
              Use the interactive map, reset timer, and checklist to plan around daily/weekly windows — then jump into PVP combos
              when you want to practice duel conversions.
            </p>
          </div>
          <Link href="/tools" className="text-xs text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            View all tools →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Interactive map",
              href: "/tools/interactive-map",
              desc: "MapGenie + CN alt embedded with a quick FAQ (NPCs, chests, collectibles).",
              tag: "Map",
            },
            {
              title: "Reset timer",
              href: "/tools/reset-timer",
              desc: "Live daily + weekly reset countdown with time zone display.",
              tag: "Timer",
            },
            {
              title: "Daily & weekly checklist",
              href: "/tools/checklist",
              desc: "Personal routine tracker stored locally in your browser (auto-clears on reset cycles).",
              tag: "Checklist",
            },
            {
              title: "PVP combos",
              href: "/tools/pvp-combos",
              desc: "Embedded combo database + curated duel videos and quick links back into builds.",
              tag: "PVP",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-300 transition">
                  {item.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wide text-emerald-200/90 border border-emerald-500/30 rounded-full px-2 py-0.5">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">Open tool →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Trending now</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Where Winds Meet guides players search for</h2>
            <p className="text-xs text-amber-200 mt-1">New: Mist-Shrouded Prison all chests (final spawn fixes included)</p>
          </div>
          <span className="text-xs text-slate-400">Updated with Google Trends keywords</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "The Great Faceologist",
              href: "/guides/the-great-faceologist",
              desc: "Event guide: how to join, where to upload, how to tag correctly, and fixes for missing tag / daily cap issues.",
              tag: "Event",
            },
            {
              title: "Mist-Shrouded Prison",
              href: "/guides/mist-shrouded-prison",
              desc: "New tomb guide: find the entrance, track loops via the red lady, and secure all six chests plus the final treasure (spawn fixes included).",
              tag: "New",
            },
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
