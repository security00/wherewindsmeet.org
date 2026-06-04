import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Guides for Beginners & Veterans",
  description:
    "Focused Where Winds Meet guides with news, patch notes, arena ranks, tier lists, builds, maps, codes, beginner tips, and quest routes so you always know what to do next.",
  alternates: buildHreflangAlternates("/guides"),
};

const guideSections = [
  {
    title: "New Player Route",
    slug: "/guides/new-players",
    label: "Start Here",
    icon: "🌱",
    color: "text-emerald-400",
    size: "large", // 占据较大版面
    description:
      "From first launch to your first weekly reset. Smart settings, safe story routes, and daily checklists.",
  },
  {
    title: "PVP Meta Tier List",
    slug: "/guides/pvp-tier-list",
    label: "Competitive",
    icon: "⚔️",
    color: "text-red-400",
    size: "medium",
    description:
      "Dominate duels with the current meta rankings. Updated for the latest patch.",
  },
  {
    title: "Patch Notes / Upcoming Nerfs",
    slug: "/guides/patch-notes",
    label: "Balance",
    icon: "!",
    color: "text-red-300",
    size: "medium",
    description:
      "Version 1.7 patch notes, Path Balance, upcoming nerf watch, arena-rank impact, and build reset checks.",
  },
  {
    title: "Best Builds",
    slug: "/guides/builds",
    label: "PVE & PVP",
    icon: "🔥",
    color: "text-orange-400",
    size: "medium",
    description:
      "Flexible setups for every playstyle. Tank, DPS, and Support archetypes.",
  },
  {
    title: "WWM Weapon Tier List",
    slug: "/guides/weapons/tier-list",
    label: "Best Weapons",
    icon: "🗡️",
    color: "text-blue-400",
    size: "medium",
    description: "Best Where Winds Meet weapons ranked for PVE, PVP, arena, and endgame builds.",
  },
  {
    title: "Weapon Encyclopedia",
    slug: "/guides/weapons",
    label: "All Weapons",
    icon: "📚",
    color: "text-blue-300",
    size: "small",
    description: "Complete stats and lore for every weapon.",
  },
  {
    title: "Martial Arts Weapons",
    slug: "/guides/martial-arts-weapons",
    label: "Unlocks",
    icon: "🥋",
    color: "text-indigo-300",
    size: "medium",
    description: "All 12 martial arts weapons with images, skills, and unlock routes.",
  },
  {
    title: "Skill Theft",
    slug: "/guides/skill-theft",
    label: "Stealth",
    icon: "🕶️",
    color: "text-emerald-300",
    size: "small",
    description: "Unlock the observation mini-game and steal styles cleanly.",
  },
  {
    title: "Wall Puzzle Solution",
    slug: "/guides/wall-puzzle",
    label: "Puzzle",
    icon: "🧱",
    color: "text-cyan-300",
    size: "small",
    description: "Exact wall tile presses and fire contraptions for Echoes of Old Battles.",
  },
  {
    title: "Xiangqi (Chess) Puzzle Guide",
    slug: "/guides/xiangqi",
    label: "Puzzle",
    icon: "♟️",
    color: "text-emerald-300",
    size: "small",
    description: "Chinese chess puzzles: fast checklist, common patterns, and player-friendly tactics to spot winning lines.",
  },
  {
    title: "Desktop Widget (Daily Assistant)",
    slug: "/guides/desktop-widget",
    label: "Utility",
    icon: "🖥️",
    color: "text-sky-300",
    size: "small",
    description:
      "Clarifies the “desktop widget” confusion and shows a clean PC setup: pin a reset timer + checklist window.",
  },
  {
    title: "An Unholy Prophecy",
    slug: "/guides/unholy-prophecy",
    label: "Jianghu Legacy",
    icon: "🔮",
    color: "text-purple-300",
    size: "small",
    description: "Jianghu Legacy 07 at Martial Temple: rooftop fire arrows, Meridian Touch puzzles, spike traps, and Shi Zhen boss fight.",
  },
  {
    title: "Woven with Malice",
    slug: "/guides/woven-with-malice",
    label: "Encounter",
    icon: "🧶",
    color: "text-emerald-300",
    size: "small",
    description: "Lost Chapter route with time gates, trap setup, bamboo trail, and bug fixes.",
  },
  {
    title: "Mist-Shrouded Prison",
    slug: "/guides/mist-shrouded-prison",
    label: "Tomb",
    icon: "🧭",
    color: "text-cyan-300",
    size: "small",
    description: "Mistveil Forest tomb: three-loop route with six chests, final treasure, and spawn fixes.",
  },
  {
    title: "Qinchuan Guide Hub",
    slug: "/guides/qinchuan",
    label: "Rising",
    icon: "🏔️",
    color: "text-emerald-300",
    size: "medium",
    description: "Qinchuan Path hub: unlocks, Sunken City Lake, Travel Permit, To Friends to the End, and exploration priorities.",
  },
  {
    title: "Imperial Decree",
    slug: "/guides/imperial-decree",
    label: "Breakout",
    icon: "📜",
    color: "text-amber-300",
    size: "medium",
    description: "Imperial Palace activity guide: unlock location, Finance S answer meanings, rewards, and blockers.",
  },
  {
    title: "Sunken City Lake",
    slug: "/guides/sunken-city-lake",
    label: "Breakout",
    icon: "🌊",
    color: "text-cyan-300",
    size: "small",
    description: "Breakout quest query: Qinchuan painter chain, unlock blockers, and quick route notes.",
  },
  {
    title: "To Friends, to the End",
    slug: "/guides/to-friends-to-the-end",
    label: "Breakout",
    icon: "🎨",
    color: "text-amber-300",
    size: "small",
    description: "Qinchuan Worldly Affairs walkthrough bridge for Sunken City Lake and painter quest blockers.",
  },
  {
    title: "Travel Permit",
    slug: "/guides/travel-permit",
    label: "Puzzle",
    icon: "🧾",
    color: "text-sky-300",
    size: "small",
    description: "The People's Wish permit form: identity details, waiter delivery, and common stuck steps.",
  },
  {
    title: "Verdant Flute",
    slug: "/guides/verdant-flute",
    label: "Mystic",
    icon: "🎶",
    color: "text-emerald-300",
    size: "small",
    description: "Verdant Flute / Flute of the Tides query guide: start area, unlock logic, and mystic skill notes.",
  },
  {
    title: "Mistveil City (Unlock)",
    slug: "/guides/mistveil-city",
    label: "Region",
    icon: "🏙️",
    color: "text-cyan-300",
    size: "small",
    description: "Why Mistveil City is locked (Jan 22 vs Jan 26) + what to do now: Ephemeral Blight and cures.",
  },
  {
    title: "One Leaf, One Life",
    slug: "/guides/one-leaf-one-life",
    label: "Lost Chapter",
    icon: "🍂",
    color: "text-amber-300",
    size: "medium",
    description: "Kaifeng questline with white-leaf side stories, puzzle answers, and Gold Leaf epilogue rewards.",
  },
  {
    title: "Gift of Gab",
    slug: "/guides/gift-of-gab",
    label: "Dialogue",
    icon: "💬",
    color: "text-amber-300",
    size: "medium",
    description: "Master rhetoric duels and persuasion tactics using dialogue cards.",
  },
  {
    title: "Qin Caiwei Friendship",
    slug: "/guides/qin-caiwei",
    label: "AI Chat",
    icon: "🤝",
    color: "text-emerald-300",
    size: "small",
    description: "Stop her dialogue loop with bracketed actions and clear farewells.",
  },
  {
    title: "Murong Yuan Adoptive Father",
    slug: "/guides/murong-yuan-adoptive-father",
    label: "Quiz / Lore",
    icon: "🎯",
    color: "text-amber-300",
    size: "small",
    description: "Fast quiz answer (Li Jun) + story context (Murong Yanzhao) with name-variant cheat sheet.",
  },
  {
    title: "Purple Star Catastrophe (Quiz Answer)",
    slug: "/guides/who-is-destined-to-face-the-purple-star-catastrophe",
    label: "Quiz / Lore",
    icon: "🟣",
    color: "text-purple-300",
    size: "small",
    description: "Daily Prize Quiz: “Who is destined to face the Purple Star catastrophe?” Answer: The Zhao Brothers.",
  },
  {
    title: "Which Faction Controls Ghost Revelry Hall?",
    slug: "/guides/which-faction-controls-ghost-revelry-hall",
    label: "Quest / Location",
    icon: "👻",
    color: "text-emerald-300",
    size: "small",
    description: "Fast answer: no joinable faction — gangs + haunted forces. Unbound Cavern route with screenshots.",
  },
  {
    title: "Find Officer Nan",
    slug: "/guides/find-officer-nan",
    label: "Quest / NPC",
    icon: "🕵️",
    color: "text-sky-300",
    size: "small",
    description: "The Gilded Chase: Officer Nan at the Harvestfall docks + Mirage Boat location.",
  },
  {
    title: "Free Morph Mystic",
    slug: "/guides/free-morph",
    label: "Mystic",
    icon: "🌀",
    color: "text-cyan-300",
    size: "small",
    description: "Unlock and upgrade Free Morph juggle skill; costs, cooldown, tier bonuses.",
  },
  {
    title: "Items Index",
    slug: "/guides/items",
    label: "Supplies",
    icon: "🎒",
    color: "text-pink-300",
    size: "small",
    description: "Tabbed categories of key materials, consumables, and curios.",
  },
  {
    title: "Cosmetics & Appearance",
    slug: "/guides/cosmetics",
    label: "Customization",
    icon: "✨",
    color: "text-rose-300",
    size: "small",
    description: "Appearance sets, hairstyles, and cosmetics inspired by Mohist legends.",
  },
  {
    title: "The Great Faceologist",
    slug: "/guides/the-great-faceologist",
    label: "Event",
    icon: "🎭",
    color: "text-emerald-300",
    size: "small",
    description:
      "Where Winds Meet The Great Faceologist (Dec 2025): correct Edit Face uploads, event tag, daily cap, rewards, and fixes.",
  },
  {
    title: "Flicker of Faces (Appearance)",
    slug: "/guides/flicker-of-faces",
    label: "Cosmetics",
    icon: "🧧",
    color: "text-rose-300",
    size: "small",
    description:
      "Flicker of Faces shop appearance (Dec 2025): preview images, price, listing time, and voucher stacking (10% × up to 5).",
  },
  {
    title: "Active Codes",
    slug: "/guides/codes",
    label: "Free Rewards",
    icon: "🎁",
    color: "text-yellow-400",
    size: "small",
    description: "Don't miss out on limited-time loot.",
  },
  {
    title: "Free Outfits",
    slug: "/guides/free-outfits",
    label: "Cosmetics",
    icon: "🪡",
    color: "text-amber-400",
    size: "small",
    description:
      "Zero-cost routes to unlock free outfits, accessories, and hairstyles via events, quests, and codes.",
  },
  {
    title: "NPC List (Old Friends)",
    slug: "/guides/npc-list",
    label: "AI Chat",
    icon: "📜",
    color: "text-emerald-300",
    size: "small",
    description: "NPC locations, rewards, and AI Chat tips with a map preview.",
  },
  {
    title: "Boss Guides",
    slug: "/guides/bosses",
    label: "Encounters",
    icon: "👹",
    color: "text-purple-400",
    size: "small",
    description: "Mechanics and strategies for major bosses.",
  },
  {
    title: "Endgame Guide",
    slug: "/guides/endgame",
    label: "Progression",
    icon: "🏔️",
    color: "text-cyan-400",
    size: "wide", // 横向宽卡片
    description:
      "Master the post-story content. Farming routes, stat optimization, and mystic arts.",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <CdnImage
            src="/background/bg2.webp"
            alt="Where Winds Meet guides background art"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="relative z-30 flex h-full flex-col justify-center px-6 sm:px-12 lg:w-2/3">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl font-serif">
            Wanderer&apos;s <span className="text-ink-gold">Library</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/90 text-shadow-sm font-sans border-l-2 border-emerald-500/50 pl-4">
            Your companion for the journey through Jianghu. From basic movements to grandmaster techniques, find your path here.
          </p>
          <Link
            href="/guides/imperial-decree"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
          >
            Trending: Imperial Decree Finance S answers
          </Link>
          <Link
            href="/news#organic-search-watch"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
          >
            News: future draw previews and update watch
          </Link>
          <Link
            href="/guides/tier-list#arena-ranks"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-red-400/60 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100 transition hover:border-red-300/80 hover:text-red-50"
          >
            WWM arena ranks and upcoming nerf watch
          </Link>
          <Link
            href="/guides/weapons/tier-list"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:border-blue-300/80 hover:text-blue-50"
          >
            🗡️ Trending: WWM weapon tier list and best weapons
          </Link>
        </div>

        {/* Decorative Vertical Text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden text-vertical text-6xl font-bold text-slate-50/5 lg:block font-serif select-none">
          武林秘籍
        </div>
      </section>

      {/* Bento Grid Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px]">
          {guideSections.map((section) => (
            <Link
              key={section.slug}
              href={section.slug}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-emerald-900/20
                ${section.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${section.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                ${section.size === 'wide' ? 'md:col-span-2' : ''}
              `}
            >
              {/* Background Decoration */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl transition-all group-hover:scale-150 group-hover:from-emerald-500/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl ${section.size === 'large' ? 'text-5xl mb-4' : ''}`}>{section.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-2 py-1 ${section.color} bg-white/5`}>
                      {section.label}
                    </span>
                  </div>

                  <h3 className={`font-bold text-slate-100 font-serif group-hover:text-ink-gold transition-colors
                    ${section.size === 'large' ? 'text-4xl mb-4' : 'text-xl mb-2'}
                  `}>
                    {section.title}
                  </h3>

                  <p className={`text-slate-400 font-sans leading-relaxed
                    ${section.size === 'large' ? 'text-base max-w-md' : 'text-xs'}
                  `}>
                    {section.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors mt-4">
                  <span>Read Guide</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mx-auto max-w-3xl text-center mt-20 px-6">
        <div className="divider-ink mb-8" />
        <p className="text-slate-400 font-serif italic">
          &ldquo;The journey of a thousand miles begins with a single step.&rdquo;
        </p>
      </div>
    </div>
  );
}
