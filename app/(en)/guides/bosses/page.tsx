import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { bosses } from "@/lib/bosses";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/bosses");

const versionBossWatch = [
  {
    label: "Ghost Master",
    status: "May 29 fix",
    searchIntent: "where winds meet ghost master / skyward bond boss",
    detail:
      "Official May 29 notes fixed a Skyward Bond issue where the Ghost Master could spawn in the preparation area. Treat older Ghost Master bug reports as stale unless they appear after this fix window.",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
  },
  {
    label: "Hero's Realm bosses",
    status: "May 27 tuning",
    searchIntent: "where winds meet hero's realm boss guide",
    detail:
      "The May 27 live update added boss guidance marks, better lock-on camera support, smarter combat assist behavior, item-dropping rules, and enemy-flash attack prompts for Hero's Realm.",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
  },
  {
    label: "Sword Trial bosses",
    status: "May 27 tuning",
    searchIntent: "where winds meet sword trial boss guide",
    detail:
      "Sword Trial also received boss guidance marks, lock-on/camera improvements, and smarter combat-assist behavior, so returning players should retry clears before relying on old difficulty impressions.",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
  },
  {
    label: "Sandstorm Tavern",
    status: "May 15 release",
    searchIntent: "where winds meet sandstorm tavern guide",
    detail:
      "Sandstorm Tavern launched in the May 15 update for a May 15 to June 5 event window and remains permanently available afterward, making it a stronger guide target than a temporary news-only mention.",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
  },
  {
    label: "Sunken City Lake / Lunar Eidolon",
    status: "May 15 fix",
    searchIntent: "where winds meet sunken city lake boss lunar eidolon",
    detail:
      "The May 15 patch fixed an issue where Sunken City Lake's Lunar Eidolon could sometimes not enter its final phase, so old blocker advice should be refreshed.",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Bosses - Ghost Master, Dungeon Bosses & Boss List",
  description:
    "Version 1.7 Where Winds Meet boss guide hub: Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake, boss list, builds, and weapon prep.",
  alternates: buildHreflangAlternates("/guides/bosses"),
};

export default function BossesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/bosses`,
      dateModified: freshness?.lastChecked ?? "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Bosses", item: `${baseUrl}/guides/bosses` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet bosses",
      itemListOrder: "Unordered",
      numberOfItems: bosses.length,
      itemListElement: bosses.map((boss, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: boss.name,
        url: `${baseUrl}/guides/bosses/${boss.id}`,
      })),
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet bosses background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Version 1.7 boss and dungeon guide hub
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet bosses: Ghost Master watch, dungeon bosses, and major encounters.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Updated {freshness?.lastChecked ?? "2026-06-03"} for {freshness?.gameVersion ?? "Version 1.7 / The Imperial Palace"}: this page tracks both the established Where Winds Meet boss list and the newest boss or dungeon searches from the current patch cycle. Start with Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, and Sunken City Lake notes before using older boss advice.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Use it alongside the{" "}
            <Link
              href="/guides/weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              weapons overview
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              build guides
            </Link>{" "}
            to pair each fight with a weapon and playstyle that matches its tone and your preferences. The gallery below stays spoiler-light, while the update watch highlights what changed in official patch notes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/guides/bosses#faq"
              className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70"
            >
              Boss quick answers (FAQ)
            </Link>
            <Link
              href="/guides/patch-notes"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Latest patch notes
            </Link>
            <Link
              href="/guides/tier-list"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              China tier list perspective
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Boss information changes quickly after live-service patches. Official notes and in-game reward previews come first; this page helps you decide which encounter guide or build page to check next.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Version 1.7 watchlist</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            New boss and dungeon searches to refresh first.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            These are not all full boss pages yet. They are the highest-priority update notes to turn into guides as soon as we have stable gameplay details, screenshots, and reward confirmation.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {versionBossWatch.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.status}
                </span>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  Official source
                </a>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.label}</h3>
              <p className="mt-1 text-xs text-slate-400">Search intent: {item.searchIntent}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-relaxed text-slate-300">
          <span className="font-semibold text-slate-100">Next content move:</span> once screenshots and reliable mechanics are available, split Ghost Master, Hero&apos;s Realm, Sword Trial, and Sandstorm Tavern into standalone guides, then link them from Patch Notes, Builds, Weapons, and the home page.
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss gallery and quick themes.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/80">
                <video
                  src={resolveCdnAssetSrc(boss.backgroundVideo).src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster="/background/bg4.webp"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {boss.name}
                  </h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">
                  Theme: {boss.theme}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/guides/bosses/${boss.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    View encounter overview
                  </Link>
                  <Link
                    href="/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Browse builds
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          General boss survival tips from high-difficulty runs.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Community guides written in Traditional Chinese for the highest
          difficulty settings repeatedly highlight the same handful of tools
          that make brutal encounters more forgiving. Even if you never look up
          specific “cheese” routes, understanding these patterns can turn
          frustrating bosses into fair challenges.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Do not solo out of pride:</span>{" "}
              story and Bloodbath bosses in Where Winds Meet are tuned assuming
              you may bring help. Summoned companions that act as tanks, healers
              or posture breakers can dramatically lower execution requirements,
              especially on three-phase “memory test” fights.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Lean on powerful qi arts:</span>{" "}
              several offensive and defensive qi arts offer longer i-frames than
              a standard guard or dodge, or can instantly interrupt key skills.
              Consider assigning at least one panic button art (for unavoidable
              bursts) and one proactive tool that lets you safely punish long
              animations.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">
                Use weapon pairings that cover your weaknesses:
              </span>{" "}
              a secondary fan can provide healing and stabilizing support, while
              heavy weapons like Mo Blade offer shields and super armor on
              charged swings. If you dislike parry timing, combine a sturdier
              weapon with supportive tools instead of forcing a pure glass
              cannon.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">
                Respect level scaling and invest sideways:
              </span>{" "}
              bosses scale with your level, so blindly leveling can make fights
              feel worse. If you are stuck, pause leveling and funnel resources
              into gear, martial arts, and inner arts upgrades instead; a
              slightly lower level with stronger tools often feels easier than a
              higher level with weak equipment.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400 sm:text-sm">
          For players who want to go deeper, combine these principles with the{" "}
          <Link
            href="/guides/builds"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            builds section
          </Link>{" "}
          and weapon-specific pages like{" "}
          <Link
            href="/guides/weapons/mo-blade"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Mo Blade
          </Link>{" "}
          to design setups tuned for your reflexes and preferred difficulty
          rather than a single “correct” meta.
        </p>
      </section>

      <section
        id="faq"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg text-emerald-300">❓</span>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Boss quick answers
          </h2>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Which Where Winds Meet bosses should I start with?</p>
            <p className="mt-1 text-slate-300">
              Begin with story bosses tied to your current region, then try Bloodbath variants once you have a comfort weapon pair. Use builds with
              posture breaks (Mo Blade, Spear, Dual Blades) to shorten early fights.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Do bosses have notable weaknesses or rewards?</p>
            <p className="mt-1 text-slate-300">
              Exact weaknesses and rewards vary by boss and can shift with updates. This page stays spoiler-light, so for reliable rewards info,
              check the in-game reward preview (if available) and official patch notes. Use the encounter overviews here for story tone, pacing,
              and prep links to weapons/builds.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">What is the difference between story, Bloodbath, and world bosses?</p>
            <p className="mt-1 text-slate-300">
              Story bosses gate quests and scale with level; Bloodbath bosses add extra mechanics and tighter timings; world bosses are large open-field
              fights with shared rewards. Prep differently: more survivability for Bloodbath, more mobility for open-world bosses.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
