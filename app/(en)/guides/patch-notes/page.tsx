import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/patch-notes");

const latestUpdateCards = [
  {
    title: "May 29 Version 1.7 fixes",
    date: "2026-05-29",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Follow-up fixes after The Imperial Palace launch: Skyward Bond's Ghost Master preparation-area spawn issue, Palace map loading on mobile, Palace Unveiled check-in rewards, Guild Hero's Realm blank pages, Kaifeng model display, controller shop selection, and the Jadeware translation fix.",
    playerAction:
      "Re-test Palace events, Skyward Bond, Guild Hero's Realm, and mobile map loading before assuming an older guide or bug report still applies.",
  },
  {
    title: "May 27 / May 28 live maintenance",
    date: "2026-05-28",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
    summary:
      "Large live update covering Path Tutorial, cheaper Martial Art Reset, Inner Way Conversion cost changes, Arena updates, Hero's Realm and Sword Trial boss comfort changes, Guild War tuning, World Map replay support, and social/recruitment improvements.",
    playerAction:
      "Re-check builds, reset costs, boss camera settings, Hero's Realm/Sword Trial progression, and Arena plans after this patch.",
  },
  {
    title: "Version 1.7 / The Imperial Palace",
    date: "2026-05-27",
    source: "https://www.wherewindsmeetgame.com/news/official/TheImperialPalace.html",
    summary:
      "Official Version 1.7 overview anchor for The Imperial Palace. Treat it as the current update context for Palace content, new event searches, returning-player catch-up, and guide freshness checks.",
    playerAction:
      "Use Version 1.7 as the baseline when reading patch notes, codes, boss notes, tier lists, and builds.",
  },
  {
    title: "Sandstorm Tavern and older boss fixes",
    date: "2026-05-15",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
    summary:
      "Sandstorm Tavern went live for the May 15 to June 5 event window and remains permanently available afterward. The same patch fixed Sunken City Lake's Lunar Eidolon final-phase issue and missing Moongazing Maiden combat voice lines.",
    playerAction:
      "Use Sandstorm Tavern as a long-tail guide target, and re-run Sunken City Lake if old boss-blocker advice says Lunar Eidolon was impossible to finish.",
  },
];

const impactChecklist = [
  "Where Winds Meet patch notes today / new update: lead with May 29 and May 27 instead of older May 2026 summaries.",
  "Boss and dungeon searches: mention Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake, and Lunar Eidolon where relevant.",
  "Build searches: call out cheaper Martial Art Reset and lower Inner Way Conversion cost before telling players to respec.",
  "Tier-list searches: tie weapon and Path recommendations back to the May 26 Path Balance and May 27 live maintenance window.",
  "Mobile and controller searches: Palace map loading and Season Shop controller selection were official May 29 fixes.",
];

const upcomingNerfWatch = [
  {
    topic: "Path Balance",
    status: "Official baseline",
    action:
      "Use the May 26 Path Balance announcement as the starting point before calling any build or weapon newly nerfed.",
    href: "/guides/tier-list#arena-ranks",
  },
  {
    topic: "Arena and PVP ranks",
    status: "High search intent",
    action:
      "When players ask about upcoming nerfs, send them from patch notes to arena ranks, PVP tier list, and weapon tier list so they can compare meta impact.",
    href: "/guides/pvp-tier-list",
  },
  {
    topic: "Build reset costs",
    status: "Live maintenance impact",
    action:
      "Cheaper Martial Art Reset and lower Inner Way Conversion costs make post-patch testing less punishing for returning players.",
    href: "/guides/builds",
  },
  {
    topic: "Boss and dungeon comfort fixes",
    status: "Do not overread as nerfs",
    action:
      "Hero's Realm, Sword Trial, Ghost Master, and Palace fixes can change guide advice even when they are not weapon nerfs.",
    href: "/guides/bosses",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Patch Notes Today - Version 1.7, Bosses & Roadmap",
  description:
    "Where Winds Meet patch notes tracker for Version 1.7: May 29 fixes, Ghost Master, The Imperial Palace, Sandstorm Tavern, Path Balance, bosses, builds, and roadmap checks.",
  alternates: buildHreflangAlternates("/guides/patch-notes"),
  openGraph: {
    title: "Where Winds Meet Patch Notes Today - Version 1.7, Bosses & Roadmap",
    description:
      "Where Winds Meet patch notes tracker: Version 1.7, May 29 fixes, Ghost Master, The Imperial Palace, Sandstorm Tavern, Path Balance, bosses, builds, and roadmap checks.",
    url: `${baseUrl}/guides/patch-notes`,
  },
  twitter: {
    title: "Where Winds Meet Patch Notes Today - Version 1.7",
    description:
      "Version 1.7 patch notes tracker: May 29 fixes, Ghost Master, The Imperial Palace, Sandstorm Tavern, Path Balance, bosses, builds, and roadmap checks.",
  },
};



export default function PatchNotesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/patch-notes`,
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
          name: "Guides",
          item: `${baseUrl}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Patch Notes",
          item: `${baseUrl}/guides/patch-notes`,
        },
      ],
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
            src="/background/bg1.webp"
            alt="Where Winds Meet patch notes background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet patch notes today: Version 1.7, bosses, dungeons, and roadmap.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Updated {freshness?.lastChecked ?? "2026-06-03"}: Where Winds Meet has moved into {freshness?.gameVersion ?? "Version 1.7 / The Imperial Palace"}. The current live-service trail includes The Imperial Palace overview, May 29 fixes, the May 27 / May 28 live maintenance window, the May 26 Path Balance adjustment, and the Sandstorm Tavern release. Use this page to catch up before you trust older boss, tier-list, or build advice.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            We flag roadmap checkpoints, official news beats, and practical player impact so you know what to re-check: codes, quest bugs, Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, boss guides, builds, and tier-list assumptions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Rather than panic when you see a weapon adjusted or a new feature added,
            use Where Winds Meet patch notes as a compass for refining your builds.
            Most balance changes are designed to expand viable options, not to make
            your current character unplayable. By reading patch notes carefully and
            understanding the intent behind Where Winds Meet updates, you can adapt
            your playstyle smoothly instead of feeling blindsided by the next big
            patch.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            The official Where Winds Meet patch notes are released on the game&apos;s
            website and social media channels. Below, you will find guidance on how
            to interpret those updates and what adjustments might affect your
            favorite builds, weapons, and strategies across PVE, co-op, and PVP
            content.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Latest official update queue</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            What changed in the newest Where Winds Meet patch notes?
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            If you searched for Where Winds Meet patch notes today, start here. These are the update beats that should drive the next round of guides, internal links, and title rewrites.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {latestUpdateCards.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.date}
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
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-200">Player action:</span> {item.playerAction}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="upcoming-nerfs" className="space-y-5 rounded-3xl border border-red-400/30 bg-red-500/10 p-6 shadow-lg shadow-red-950/30">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-200">Search intent: upcoming nerf wwm</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Upcoming nerfs and balance watch.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            Players searching for upcoming nerfs usually want to know whether to pause upgrades, reset a build, or
            switch weapons before the next arena push. Treat confirmed official notes as the source of truth, then use
            this watchlist to decide which guide to re-check.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingNerfWatch.map((item) => (
            <Link
              key={item.topic}
              href={item.href}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-red-300/60"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-slate-50">{item.topic}</p>
                <span className="rounded-full border border-red-300/40 bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold text-red-100">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.action}</p>
            </Link>
          ))}
        </div>
        <p className="text-xs leading-5 text-red-100/80">
          Note: unverified creator lists and social posts can be useful early warnings, but this page should only mark
          a nerf as confirmed after it appears in official patch notes or in-game maintenance text.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/40">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Version 1.7 catch-up: what changed recently.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The most important freshness signal is that the official news feed now lists Version 1.7 updates: The Imperial Palace overview, May 29 follow-up patch notes, May 28 patch notes, and a May 26 Path Balance adjustment. If you last played around Version 1.2 or the Version 1.6 / Flows of Dreams period, treat this as your new catch-up checkpoint.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Start with practical checks: verify Palace-era code reports in-game, re-open blocked event or quest steps after the May 29 fixes, and compare your build against the May 26 Path Balance notes before spending scarce upgrade materials.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Also keep the May 3 exchange-code warning in mind: a leaked batch of exchange codes was disabled, so very large social-media code lists may include dead entries. Use the codes page here as a cleaner starting list, then verify every reward in-game.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/guides/bosses"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Boss and dungeon guide queue</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake, and other pages that need patch-aware notes.
            </p>
          </Link>
          <Link
            href="/guides/builds"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Build reset and meta checks</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Cheaper Martial Art Reset and lower Inner Way Conversion costs change how aggressively returning players can test builds.
            </p>
          </Link>
          <Link
            href="/guides/imperial-decree"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Imperial Decree Finance answers</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Palace-era search target: where Imperial Decree starts, how the Finance memorials work, and what response intent leads to S rewards.
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          SEO guide checklist after Version 1.7.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The highest-value pages should not only say &quot;latest patch.&quot; They should answer the specific searches players make right after an update lands.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
          {impactChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          How to read Where Winds Meet balance changes.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          When the official Where Winds Meet patch notes list weapon adjustments or
          ability changes, the language used matters. A small numerical buff to your
          favorite weapon might not sound impressive until you understand how it
          interacts with your current build. Conversely, a seemingly huge nerf might
          barely touch your playstyle if you were using your weapon in a different
          way than the patch notes describe.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Buffs in Where Winds Meet patch notes</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              When Where Winds Meet patch notes include buffs, pay attention to
              which stat or aspect of the ability changed. A damage increase makes a
              weapon more appealing for pure offense, but a cooldown reduction might
              be transformative for playstyles that spam the ability repeatedly. A
              scaling adjustment could make a weapon shine in endgame Where Winds
              Meet content where your stats are high.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Nerfs in Where Winds Meet patch notes</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Nerfs are often overblown in community reactions, but Where Winds Meet
              patch notes usually explain the reasoning. If a weapon was too dominant
              in PVP while perfectly fine in PVE, the nerf might only apply in PVP
              contexts. If the Where Winds Meet patch targets a specific stat combo,
              you might be able to pivot to a slightly different build and keep the
              same weapon viable.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">New systems in Where Winds Meet patch notes</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              When Where Winds Meet patch notes introduce entirely new systems or
              interaction mechanics, the initial impact is always uncertain. Early
              adopters who experiment with new mechanics in Where Winds Meet patches
              often discover synergies before the community settles on a standard
              approach. This is your opportunity to innovate.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The best approach is to skim the official Where Winds Meet patch notes for
          changes that directly affect weapons or abilities you use, then test those
          changes firsthand before deciding to abandon your build. Often, a modest
          adjustment that sounds bad in text feels entirely playable once you
          actually experience it in Where Winds Meet.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Adapting your builds after Where Winds Meet patch updates.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Once you understand what changed in the latest Where Winds Meet patch
          notes, the next step is deciding whether your current build needs
          adjustments. Not every patch requires a full respec. In fact, most Where
          Winds Meet patches can be addressed by tweaking one or two stat
          allocations or swapping a single ability while keeping your core identity
          intact.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Start by comparing the Where Winds Meet patch changes to your tier list and
          builds pages. If your favorite weapon received a buff, does it climb higher
          on the tier list? If it received a nerf, are there related weapons that
          might fill the same niche more effectively now? Sometimes a Where Winds
          Meet patch that nerfs your weapon actually buffs an alternative that plays
          similarly, giving you an easy transition path.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          For PVE and co-op players, most Where Winds Meet patches are purely
          quality of life adjustments. Your current build remains viable even after
          the patch; you are just slightly faster or more comfortable. PVP players
          may need to adapt more aggressively if a Where Winds Meet patch
          fundamentally shifts how matchups play out. In all cases, the goal is to
          stay informed without panic-reacting to every change.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Connecting Where Winds Meet patch notes to guides and tier lists.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          This site maintains an updated tier list and builds guide that reflect the
          current state of Where Winds Meet patch balance. After each major Where
          Winds Meet patch, both guides are reviewed and updated to account for
          changes. However, patch notes move quickly, so if you notice a discrepancy
          between the official Where Winds Meet patch notes and this site&apos;s
          recommendations, trust the official source first and check back soon for
          updated guidance.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            href="/guides/tier-list"
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            <h3 className="text-sm font-semibold text-slate-50">Current Tier List</h3>
            <p className="mt-1 text-xs text-slate-300">
              See how weapons and paths rank in current Where Winds Meet meta
            </p>
          </Link>
          <Link
            href="/guides/builds"
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            <h3 className="text-sm font-semibold text-slate-50">Where Winds Meet Builds</h3>
            <p className="mt-1 text-xs text-slate-300">
              Flexible build archetypes adjusted for the latest patches
            </p>
          </Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-200 sm:text-base">
          When a new Where Winds Meet patch drops, start here to understand the
          changes, then visit the tier list and builds pages to see how those
          changes affect your options. This three-part process keeps you informed
          and confident in your choices without requiring constant hunting through
          external sources.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Official Where Winds Meet patch sources.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          For the most current and accurate Where Winds Meet patch notes, always
          refer to official sources: the official game website, in-game patch notes,
          and official social media accounts. These sources provide the complete,
          detailed Where Winds Meet patch information before the community starts
          analyzing and debating changes.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Community sites and content creators often provide analysis and
          interpretation of Where Winds Meet patch notes, which can be helpful for
          understanding implications. However, the official Where Winds Meet patch
          notes are always the source of truth for exact numbers and intended
          changes.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Bookmark the official Where Winds Meet patch notes page so you can quickly
          check for updates when you log in. Many players set a habit of reading the
          patch summary as part of their login routine, giving them a few minutes to
          plan whether they need to adjust builds before diving into actual gameplay.
          This approach keeps you ahead of the meta without dominating your evening.
        </p>
      </section>
    </article>
  );
}
