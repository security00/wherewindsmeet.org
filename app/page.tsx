import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../design/bg.jpg";
import logo from "../design/logo.png";
import { featuredVideos } from "../lib/featuredVideos";

export const metadata: Metadata = {
  title: "Where Winds Meet Guides, Tier List & Codes Hub",
  description:
    "Where Winds Meet guides hub with tier lists, builds, codes, beginner tips and news so players explore the wuxia open world confidently on PC and PS5.",
  alternates: {
    canonical: "https://wherewindsmeet.org/",
  },
};

const guides = [
  {
    slug: "/guides/new-players",
    label: "Beginner Guide",
    summary:
      "Follow a structured Where Winds Meet beginner route from your very first login through the first weekly reset, with recommended settings, a safe story path, and daily and weekly checklists.",
    tag: "New Players",
  },
  {
    slug: "/guides/tier-list",
    label: "Tier List",
    summary:
      "See the latest Where Winds Meet tier list for PVE and PVP so you always know which weapons, paths, and playstyles are truly meta in the current patch.",
    tag: "Meta & Rankings",
  },
  {
    slug: "/guides/builds",
    label: "Builds",
    summary:
      "Build flexible Where Winds Meet characters with recommended stat spreads, weapon synergies, and co-op friendly setups that respect your preferred pace and playstyle.",
    tag: "Build Crafting",
  },
  {
    slug: "/guides/codes",
    label: "Codes",
    summary:
      "Track active Where Winds Meet codes, learn how to redeem them quickly on each platform, and avoid missing time-limited cosmetics or boost rewards.",
    tag: "Rewards & Codes",
  },
];

const faqs = [
  {
    question: "Is Where Winds Meet really free to play?",
    answer:
      "Where Winds Meet is a free to play wuxia RPG with optional cosmetics and convenience purchases. Our guides focus on helping free players progress efficiently without pressure, highlighting the best ways to spend time and in-game currencies rather than pushing you toward spending real money.",
  },
  {
    question: "What platforms can I play Where Winds Meet on?",
    answer:
      "At launch, Where Winds Meet focuses on PC and PS5 players who enjoy open world action RPGs. This hub explains key differences between control schemes, performance settings, and how cross-platform social features integrate so you can keep exploring Jianghu with friends regardless of where they log in.",
  },
  {
    question: "How often is the Where Winds Meet tier list updated?",
    answer:
      "The Where Winds Meet tier list is updated around major balance patches, new weapon releases, or combat system reworks. Instead of chasing tiny number changes, we focus on meaningful shifts that impact real matches, co-op, and boss encounters so you can trust that a high tier pick will feel strong across most content.",
  },
  {
    question: "Do you cover beginner tips or only endgame builds?",
    answer:
      "We design Where Winds Meet guides to support your entire journey, not only late game raids. Each major article mixes beginner explanations, intermediate path recommendations, and endgame build templates so you can grow smoothly from your first story quests to high-stakes PVP without feeling lost or forced into one meta style.",
  },
];

export default function Home() {
  const activeVideo = featuredVideos[0];

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl shadow-emerald-500/10 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={bgImage}
            alt="Where Winds Meet wuxia open world background"
            fill
            priority
            placeholder="blur"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
        </div>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/40">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                ●
              </span>
              Live hub for Where Winds Meet players
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Where Winds Meet fan hub logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl border border-emerald-400/40 bg-slate-950/70 p-1 shadow-lg shadow-emerald-500/50"
                priority
              />
              <p className="text-sm text-slate-300">
                Unofficial companion site dedicated to helping every Where Winds
                Meet wanderer read smarter, build stronger, and explore farther.
              </p>
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Where Winds Meet guides, tier list, builds, and codes in one
              focused hub.
            </h1>
            <p className="text-balance text-sm leading-relaxed text-slate-200 sm:text-base">
              Whether you are downloading Where Winds Meet for the first time
              or pushing deep into endgame Jianghu, this hub brings together
              curated guides, the latest Where Winds Meet tier list, optimized
              builds, and updated codes so you can focus on enjoying the wuxia
              open world instead of digging through scattered threads.
            </p>

            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-400/30 bg-slate-950/60 px-4 py-3">
                <div className="text-xs uppercase tracking-wide text-emerald-300">
                  New players
                </div>
                <p className="mt-1 text-slate-100">
                  Learn how Where Winds Meet actually plays moment to moment,
                  from movement and stamina to early combat choices that keep
                  your journey smooth.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <div className="text-xs uppercase tracking-wide text-cyan-300">
                  Meta chasers
                </div>
                <p className="mt-1 text-slate-100">
                  Track the evolving Where Winds Meet tier list and discover
                  builds tuned for high damage, survivability, and stylish
                  wuxia combat expression.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <div className="text-xs uppercase tracking-wide text-fuchsia-300">
                  Collectors
                </div>
                <p className="mt-1 text-slate-100">
                  Stay ahead of expiring Where Winds Meet codes so you do not
                  miss cosmetics, boosts, or generous launch rewards that
                  accelerate your progress.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              <Link
                href="/guides/tier-list"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-slate-950 shadow-md shadow-emerald-500/50 transition hover:bg-emerald-300"
              >
                View latest tier list
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-950/60 px-5 py-2.5 text-slate-100 transition hover:border-emerald-400/80 hover:text-emerald-200"
              >
                Browse all Where Winds Meet guides
              </Link>
            </div>
          </div>

          <div className="relative ml-auto flex max-w-md flex-1 flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-900/90 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Quick search
                </p>
                <p className="text-sm text-slate-100">
                  Jump straight into hot topics for Where Winds Meet.
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                No spoilers
              </span>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Search Where Winds Meet tier list, builds, codes..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 pr-10 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                ⌕
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/guides/tier-list"
                className="rounded-full bg-slate-900/70 px-3 py-1 text-slate-200 ring-1 ring-slate-700/80 hover:ring-emerald-400/70"
              >
                where winds meet tier list
              </Link>
              <Link
                href="/guides/builds"
                className="rounded-full bg-slate-900/70 px-3 py-1 text-slate-200 ring-1 ring-slate-700/80 hover:ring-emerald-400/70"
              >
                where winds meet best builds
              </Link>
              <Link
                href="/guides/codes"
                className="rounded-full bg-slate-900/70 px-3 py-1 text-slate-200 ring-1 ring-slate-700/80 hover:ring-emerald-400/70"
              >
                where winds meet codes
              </Link>
              <Link
                href="/news"
                className="rounded-full bg-slate-900/70 px-3 py-1 text-slate-200 ring-1 ring-slate-700/80 hover:ring-emerald-400/70"
              >
                where winds meet news
              </Link>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-950 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  Launch status
                </p>
                <p className="mt-1 text-slate-100">
                  Where Winds Meet servers are generally stable, but prime-time
                  queues can appear after major events and new content drops.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
                  Recommended path
                </p>
                <p className="mt-1 text-slate-100">
                  New players can safely follow story quests while sampling side
                  activities; our Where Winds Meet guides highlight what is
                  truly unmissable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/50">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            A focused Where Winds Meet hub designed for how players actually
            search.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Instead of scattering short posts across multiple platforms, this
            site treats Where Winds Meet as one living wuxia world. We study how
            players search for Where Winds Meet guides, tier lists, builds, and
            codes, then organize everything into clear sections. That structure
            makes it easier for search engines to understand your questions and
            faster for you to find trustworthy answers without wading through
            spoilers or half-finished threads.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Each article is written to feel like a conversation with a friend
            who loves Where Winds Meet as much as you do. We explain important
            systems in plain language, pair them with concrete steps you can
            follow in a single play session, and highlight mistakes new players
            make when they misunderstand open world freedom. The goal is simple:
            help you enjoy Where Winds Meet with less friction and more of the
            cinematic wuxia moments that made you download the game in the first
            place.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            While many sites chase news about dozens of releases at once, this
            hub stays focused on Where Winds Meet. That focus means we can track
            small but important balance changes, capture unique open world
            stories from the community, and reflect them back into updated
            guides. When the Where Winds Meet tier list shifts, or when new
            codes land during a seasonal event, you will see that context baked
            into the way we describe weapons, builds, and exploration routes.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            We also care about how long you stay on a page, not because of
            analytics, but because long dwell time usually means clarity. Each
            Where Winds Meet guide is structured into short, scannable sections
            so you can read top to bottom or jump straight to the part you need.
            Internal links connect beginner tips to advanced builds and back
            again, creating a loop that keeps you learning new things about
            Where Winds Meet every time you visit.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h3 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
            Quick access to essential Where Winds Meet resources
          </h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                An always-on Where Winds Meet tier list that ranks weapons,
                paths, and playstyles by real usability, not pure theorycraft.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Build guides that explain why choices work, helping you adapt
                your Where Winds Meet character when new patches hit.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                A codes tracker that logs expired and active Where Winds Meet
                codes so you can quickly see what still works.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                A news stream focused on practical changes for Where Winds Meet
                players, from bug fixes and balance tweaks to big events.
              </span>
            </li>
          </ul>
          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300">
            <p className="font-semibold text-slate-100">
              Why this hub feels different
            </p>
            <p className="mt-2">
              Many general gaming sites treat Where Winds Meet as one headline
              in a long list of ongoing releases. Here, the game is the entire
              focus. That is why article structures, URLs, and internal links
              are tuned around real search phrases like &quot;where winds meet
              tier list&quot; and &quot;where winds meet builds&quot; instead of
              generic SEO templates.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
        <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/50">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Featured Where Winds Meet guides
            </h2>
            <Link
              href="/guides"
              className="text-xs font-medium text-emerald-300 hover:text-emerald-200"
            >
              View all guides
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            These spotlight guides give you a structured starting point for
            Where Winds Meet, whether you care most about competitive rankings,
            expressive wuxia builds, or grabbing every available code before it
            expires. Each card below leads to a deep dive article with over
            eight hundred words of practical context, ensuring you leave with a
            clear action plan instead of a vague checklist.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
              >
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                    {guide.tag}
                  </p>
                  <h3 className="text-base font-semibold text-slate-50">
                    Where Winds Meet {guide.label}
                  </h3>
                  <p className="text-xs text-slate-300">{guide.summary}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-300 group-hover:text-emerald-200">
                  Open guide
                  <span aria-hidden>↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h3 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
            Learn visually with gameplay highlights
          </h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Some players learn best by reading, others by watching. To support
            both styles, key Where Winds Meet guides are paired with curated
            gameplay clips and creator-made breakdowns. Watching a nimble build
            flow through a crowded battlefield or a patient ranged setup dance
            around bosses makes it easier to understand why certain choices land
            in the upper tiers of our Where Winds Meet tier list.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <div className="aspect-video bg-slate-950/80">
              <iframe
                title={activeVideo.title}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-xs text-slate-300">{activeVideo.description}</p>
          {featuredVideos.length > 1 && (
            <div className="mt-3">
              <Link
                href="/videos"
                className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-4 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/60 hover:text-emerald-200"
              >
                View more Where Winds Meet videos
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/50">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Stay ahead with smart Where Winds Meet planning tools.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Alongside traditional articles, this Where Winds Meet site surfaces
            quick planning tools designed to answer common questions in a few
            seconds. Instead of building a complex account system, we prioritize
            lightweight widgets that respect your time and privacy. You can
            check recommended story pacing, estimate how long a nightly session
            will take, and understand how new codes or events will shift your
            short term goals.
          </p>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-950 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Session planner
              </h3>
              <p className="mt-2 text-xs text-slate-200">
                Choose how much time you have, and the planner suggests Where
                Winds Meet activities that feel meaningful without turning your
                evening into a checklist.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Reward checker
              </h3>
              <p className="mt-2 text-xs text-slate-200">
                Cross reference currently active Where Winds Meet codes with
                your account progress so you redeem the most valuable boosts
                first.
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            As the game grows, so will this toolbox. Our long term goal is to
            make this Where Winds Meet site feel like an extension of the game
            client: a calm place where you can think through choices, catch up
            on news, and then return to Jianghu with a clear sense of direction.
          </p>
        </div>

        <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/50">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Frequently asked questions about Where Winds Meet.
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-slate-100">
                  <span>{faq.question}</span>
                  <span className="text-xs text-slate-400 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-400 group-open:block">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-200">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="text-xs text-slate-300">
            Have a question that is not covered here? As more players explore
            Where Winds Meet and common patterns emerge, we will expand this FAQ
            and link directly to any new in-depth guides created to answer those
            topics.
          </p>
        </div>
      </section>
    </div>
  );
}
