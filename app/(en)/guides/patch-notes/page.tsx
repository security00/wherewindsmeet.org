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
    title: "October 15 Version 2.3 [Friends from Afar] update overview",
    date: "2026-10-15",
    source: "https://store.steampowered.com/news/app/3564740/view/1846651706675921",
    summary:
      "Current official update. Live update on October 15 from 5:00 to 12:00 (UTC+8): new region Qingzhou - Eastern Peak, the Waist Drum weapon and Silkbind - Wings path, the Inkbound Order sect, three world bosses, War of Words Gift of Gab, Tier 100 gear, and season S5: Ever Aflame.",
    playerAction:
      "Reach Lv. 32 and finish the Qinghe Main Chapter Heaven Has No Pier to start Away to Qingzhou, then use the Version 2.3 section below for weapons, gear and season dates.",
  },
  {
    title: "September 16 Version 2.2 patch notes",
    date: "2026-09-16",
    source: "https://store.steampowered.com/news/app/3564740/view/1843481262704696",
    summary:
      "Rolling maintenance on September 16 from 5:00 to 10:00 (UTC+8): Guild Roster, Guild War season stats, boss talent tracking, Guild honorary titles, Guild Base blacklist, the Reflection Temple entrance closure, and two bug fixes.",
    playerAction:
      "Reflection Temple is closed until Jiangnan arrives; stage progress is kept. Nameless Sword players: only the Sword Energy description changed, not the effect.",
  },
  {
    title: "September 16 Version 2.2 [Perilous Eminence] update overview",
    date: "2026-09-16",
    source: "https://store.steampowered.com/news/app/3564740/view/1843481262704691",
    summary:
      "Previous content update: Hidden Mountain Main Chapter Bringer of Embers, the Skyward City Ruins campaign, Golden Colossus Taicu and Goshawk world bosses, the Transdust Ruins extraction match (from September 23), and Wildtrail Journal: Ruffled Up.",
    playerAction:
      "Finish Hidden Mountain Main Chapter IV: Gold Crow Fall to unlock A Bitter Winter and Sea of Sunfire; Transdust Ruins needs Lv. 20 and the Exploration Quest Sands of Perils.",
  },
  {
    title: "September 5 Version 2.1 patch notes (Clouded Revelation)",
    date: "2026-09-05",
    source: "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html",
    summary:
      "Newest section on the official Clouded Revelation patch-notes page: Skystrike Gauntlets Castlink animation, Ceramic Bliss model, Bounty Order publisher rewards, Cloudtop Ascent construction claims, Reflection Temple cuju-ball and shadow-respawn quest fixes, Homestead loading states, and Eagleglide accessory placement.",
    playerAction:
      "Retry blocked Reflection Temple quest steps (cuju ball hand-in and shadow respawn), re-check Skystrike Gauntlets animations, Cloudtop Ascent claims, Bounty Order rewards, Homestead construction loading, and Eagleglide placement before following pre-September workarounds.",
  },
  {
    title: "September 3 Version 2.1.3 Clouded Revelation overview",
    date: "2026-09-02",
    source: "https://www.wherewindsmeetgame.com/news/official/903update.html",
    summary:
      "Current official intel anchor. It is the September 3 follow-up inside Clouded Revelation: Skystrike Gauntlets, Riven Twinblades, new Draught Inner Ways, and live event coverage including Reflection Temple.",
    playerAction:
      "Unlock Drunken Fist before copying an older gauntlet guide, and note that the Hidden Mountain follow-up chapters went live with Version 2.2 on September 16.",
  },
  {
    title: "August 29 Ghost Month / Reflection Temple developer letter",
    date: "2026-08-29",
    source: "https://www.wherewindsmeetgame.com/news/official/829devletter.html",
    summary:
      "Official event letter for the limited Reflection Temple stage: folk taboos, offerings, lanterns, paper effigies, and a ritual clear rather than a simple escape.",
    playerAction:
      "Historical: the Reflection Temple entrance has been closed since the September 16 Version 2.2 patch and reopens when Jiangnan arrives, with stage progress preserved.",
  },
  {
    title: "August 20 Version 2.1 Clouded Revelation patch notes",
    date: "2026-08-20",
    source: "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html",
    summary:
      "Earlier August 20 section on the same official Clouded Revelation patch-notes page (now headed by September 5). It addresses A Flourishing Legacy and Rising Beyond blockers, Tier 96+ Vernal Umbrella attunement, and Arena/combat, Homestead, cosmetic, quest, and UI issues.",
    playerAction:
      "Update and retry blocked Jianghu Legacy steps, re-test Vernal Umbrella and Silkbind Jade rolls, and verify affected Arena behavior before following an older workaround or rebuilding a loadout.",
  },
  {
    title: "August 19 Clouded Revelation Version 2.1 overview",
    date: "2026-08-19",
    source: "https://www.wherewindsmeetgame.com/news/official/CloudedRevelation.html",
    summary: "Earlier Version 2.1 overview retained as dated Clouded Revelation context.",
    playerAction:
      "Start with the Clouded Revelation impact guide, then use the full patch history below when a current issue depends on Version 2.0 or an older change.",
  },
  {
    title: "August 14 Version 2.0 optimizations and bug fixes",
    date: "2026-08-14",
    source: "https://www.wherewindsmeetgame.com/news/official/723update.html",
    summary:
      "Official aggregate Version 2.0 patch page headed by the August 14 Cutie Clash adjustments. It also retains the August 7 network, matchmaking, Hidden Mountain, and quest fixes plus the July 23 Path Balance history.",
    playerAction:
      "Use the latest in-game Cutie Clash values, and consult the dated August 7 and July 23 sections on that page when troubleshooting network, quest, Arena, or Path Balance history.",
  },
  {
    title: "August 14 Unseen Approach Version 2.0 overview",
    date: "2026-08-14",
    source: "https://www.wherewindsmeetgame.com/news/official/UnseenApproach.html",
    summary:
      "Official Version 2.0 overview retained as the historical Hidden Mountain expansion baseline behind Version 2.1.",
    playerAction:
      "Use the current Version 2.1 overview first, then this Version 2.0 page for Hidden Mountain, Gauntlets, map, boss, weapon, and returning-player context.",
  },
  {
    title: "Hidden Mountain dev letter and Wuxia 2.0 baseline",
    date: "2026-07-19",
    source: "https://www.wherewindsmeetgame.com/news/official/719devletter.html",
    summary:
      "Hidden Mountain adds four main areas, fourteen sub-regions, more than ten bosses, Gauntlets, Bamboocut - Kite, Mohist Hill, vertical exploration, and broad visual and progression upgrades.",
    playerAction:
      "Treat launch-era map, boss, weapon-count, progression, and platform summaries as stale until they are checked against Version 2.0.",
  },
  {
    title: "July 17 Version 1.8 optimizations and bug fixes",
    date: "2026-07-17",
    source: "https://www.wherewindsmeetgame.com/news/official/625update.html",
    summary:
      "Official aggregate Version 1.8 patch page headed by the July 17 update, with earlier July 9, July 2, and June 25 fixes retained on the same source.",
    playerAction:
      "Re-check Arena and Training Terrace advice, Taiping Mausoleum difficulty, Sleeping Daoist strategy, Homestead quest guidance, Phantom Thief Goose NPC notes, and Skyward Bond mechanics before repeating older assumptions.",
  },
  {
    title: "June 29 account suspension and fair-play notice",
    date: "2026-06-29",
    source: "https://www.wherewindsmeetgame.com/news/official/Banreport629.html",
    summary:
      "Official fair-play notice for May 25 to June 25 suspensions, covering cheating, speed hacks, macros, abnormal behavior, leaderboard removal, gameplay restrictions, temporary/permanent bans, and character-creation issues tied to unauthorized third-party software.",
    playerAction:
      "Keep anti-cheat, leaderboard, Arena, and account-safety guidance separate from build-balance advice. Do not frame enforcement notices as gameplay nerfs.",
  },
  {
    title: "Version 1.8 / Companions Make Home overview",
    date: "2026-06-24",
    source: "https://www.wherewindsmeetgame.com/news/official/CompanionsMakeHome.html",
    summary:
      "Historical Version 1.8 overview for Companions Make Home, which replaced The Imperial Palace Part 2 before Version 2.0 and Hidden Mountain launched.",
    playerAction:
      "Use this for homestead and companion history, but lead current update searches with Version 2.1 and use Version 2.0 as the Hidden Mountain baseline.",
  },
  {
    title: "Version 1.8 Dev Q&A: A Place to Call Home",
    date: "2026-06-23",
    source: "https://www.wherewindsmeetgame.com/news/official/623faq.html",
    summary:
      "Official developer Q&A setting expectations for the A Place to Call Home / homestead update window and companion-system questions.",
    playerAction:
      "Use the Q&A as support context for player questions about homestead intent, companion priorities, and what to watch after the update lands.",
  },
  {
    title: "June 5 Version 1.7 fixes",
    date: "2026-06-05",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Historical Version 1.7 fixes: Oceania, Middle East, and South America servers are fully available; Papercutting controller input, Imperial Palace quest descriptions, mobile scene loading, Palace Oddities, Hexi Familiar Faces NPCs, Jade Fish display, Skyward Bond UI text, PS5 Palace map snow visuals, Skill Theft access, chat bubbles, and Grand Nuo Ritual stability were addressed.",
    playerAction:
      "Re-test Palace exploration, Imperial Palace quests, Hexi NPC befriending, mobile loading, Papercutting, Skill Theft routes, PS5 map visuals, and A Warrior's Journey rewards before trusting older bug reports.",
  },
  {
    title: "May 29 Version 1.7 historical fixes",
    date: "2026-05-29",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Earlier fixes on the same official patch-note page covered Soaring Record rewards, Skyward Bond's Ghost Master preparation-area spawn issue, Palace map loading on mobile, Guild Hero's Realm blank pages, Guild UI display errors, Kaifeng model display, controller shop selection, Jadeware translation, keybinds, Palace Unveiled rewards, and Development Shop inventory.",
    playerAction:
      "Keep May 29 as the historical baseline for Palace launch bugs, then check the July 17 aggregate Version 1.8 notes before treating any old bug report as current.",
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
      "Historical Version 1.7 overview anchor for The Imperial Palace and Palace-specific content.",
    playerAction:
      "Use this only for Palace-era context, then check Version 2.1 and the Version 2.0 baseline before applying old code, boss, tier-list, or build assumptions.",
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
  "Where Winds Meet patch notes today / new update: lead with the October 15 Version 2.3 overview, then the September 16 Version 2.2 patch notes and overview, the September 5 Clouded Revelation section, the September 3 Version 2.1.3 overview, August 20 fixes on the same page, the August 14 aggregate page, and July 23 Path Balance history.",
  "Boss and dungeon searches: mention Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake, and Lunar Eidolon where relevant.",
  "Build searches: call out cheaper Martial Art Reset and lower Inner Way Conversion cost before telling players to respec.",
  "Tier-list searches: re-test Version 2.1 Vernal Umbrella and Silkbind Jade attunement, while keeping the wider weapon baseline tied to the July 23 Path Balance.",
  "Mobile and controller searches: Palace map loading and Season Shop controller selection were official May 29 fixes.",
];

const upcomingNerfWatch = [
  {
    topic: "Path Balance",
    status: "Official baseline",
    action:
      "Use the July 23 Version 2.0 Path Balance section on the official aggregate page now headed August 14 before calling any build or weapon newly nerfed.",
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
  title: "Where Winds Meet Patch Notes Today - Version 2.3 Friends from Afar",
  description:
    "Where Winds Meet patch notes for Version 2.3 Friends from Afar (October 15) and Version 2.2 (September 16): Qingzhou, Waist Drum, Tier 100 gear, Guild changes, and the Reflection Temple closure, plus Version 2.1 history.",
  alternates: buildHreflangAlternates("/guides/patch-notes"),
  openGraph: {
    title: "Where Winds Meet Patch Notes Today - Version 2.3 Friends from Afar",
    description:
      "Where Winds Meet patch notes: Version 2.3 Friends from Afar, Version 2.2 Guild changes and fixes, plus Version 2.1 history.",
    url: `${baseUrl}/guides/patch-notes`,
  },
  twitter: {
    title: "Where Winds Meet Patch Notes Today - Version 2.3 Friends from Afar",
    description:
      "Patch notes tracker: Version 2.3 (October 15), Version 2.2 (September 16), and Version 2.1 Clouded Revelation history.",
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
            Where Winds Meet patch notes today: Version 2.3 Friends from Afar, Version 2.2, and Version 2.1 history.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Updated {freshness?.lastChecked ?? "2026-10-17"}: Where Winds Meet is on {freshness?.gameVersion ?? "Version 2.3 / October 15 overview + Version 2.2 September 16 patch"}. Lead with the October 15 Version 2.3 overview, then the September 16 Version 2.2 patch notes and overview; keep the September 5 and August 20 Clouded Revelation sections as Version 2.1 history, and use the aggregate August 14 Version 2.0 page for older network and Path Balance history.
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

      <section id="version-2-3" className="space-y-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Current version - October 15, 2026</p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Version 2.3 [Friends from Afar] patch notes summary</h2>
        <p className="text-sm leading-relaxed text-slate-200">Live update on October 15, 2026, 5:00-12:00 (UTC+8). Summary of the official overview; open the <Link href="https://store.steampowered.com/news/app/3564740/view/1846651706675921" target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4">official Steam announcement</Link> for every detail.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li><strong>New map: Qingzhou - Eastern Peak.</strong> Reach Lv. 32 and complete the Qinghe Main Chapter [Heaven Has No Pier] to accept the Lost Chapter [Away to Qingzhou]. Adds folk customs (Everbloom Spree, Exam Vigil), Injustice Quests, Qingzhou Meow Meow, and five Qingzhou Oddities.</li>
          <li><strong>New Jianghu Legacies:</strong> Volume 1 [Riddled Echoes] and Volume 2 [Sea Shepherd], both opened from Qingzhou&apos;s Journal.</li>
          <li><strong>World bosses:</strong> Tidewatcher, Old Raftsman, and Shuttlecock Champion (unlock the Qingzhou region).</li>
          <li><strong>New weapon: Waist Drum</strong> and the new path [Silkbind - Wings], with the Waist Drum martial art [Museflow Waist Drum] (from Sea Shepherd) and the Fan martial art [Willowbend Fan] (from Riddled Echoes). Adds the Legendary Inner Way [Harmony Song], Epic Inner Ways [Zephyr Whispers], [Melody of the Brush] and [Blade&apos;s Will], gear sets [Cloudshear] and [Reinchime], and an extra 4 free Inner Way Conversions plus 8 free Gear Set Conversions until the new season starts.</li>
          <li><strong>New sect: Inkbound Order.</strong> Join through the Primary Exam (admission pass from Master Goose); Novice and Initiate ranks open now, higher ranks after the Farm Recess. Visiting Disciples keep their primary sect.</li>
          <li><strong>Gift of Gab: War of Words.</strong> A new debate mode unlocked through the Profession feature and played in Qingzhou; it keeps your existing Scholar rank.</li>
          <li><strong>Season progression:</strong> Solo Mode Level unlocks Lv. 18: Discernment; the level cap stays at Lv. 100. Tier 100 gear drops, Gear Enhance Lv. 66-70, Tier 100 Tuning and Attuning, Tier 96 Gear Relaying, Mystic Skills cap Tier 6 Stage 25, and Medicine Chest Lv. 18.</li>
          <li><strong>New Lv. 100 content:</strong> Sword Trial [Compass &amp; Chime] (5-player) and Hero&apos;s Realm [Liminal Ascension] (10-player); leaderboard rewards unlock October 16 at 05:00 server time.</li>
          <li><strong>Season S5: Ever Aflame</strong> for Arena and Taiping Mausoleum: October 15, 2026 05:00 - November 26, 2026 04:59:59. The Path Trial Challenge event runs until October 29, 2026 04:59:59.</li>
        </ul>
      </section>

      <section id="version-2-2" className="space-y-4 rounded-3xl border border-sky-400/30 bg-sky-500/10 p-6 shadow-lg shadow-sky-950/30">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">Previous version - September 16, 2026</p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Version 2.2 [Perilous Eminence] and September 16 patch notes</h2>
        <p className="text-sm leading-relaxed text-slate-200">Rolling maintenance on September 16, 2026, 5:00-10:00 (UTC+8). Sources: <Link href="https://store.steampowered.com/news/app/3564740/view/1843481262704696" target="_blank" rel="noreferrer" className="text-sky-300 underline underline-offset-4">official patch notes</Link> and <Link href="https://store.steampowered.com/news/app/3564740/view/1843481262704691" target="_blank" rel="noreferrer" className="text-sky-300 underline underline-offset-4">official update overview</Link>.</p>
        <h3 className="text-base font-semibold text-slate-100">Patch notes</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li>Guild Roster homepage is editable: Guild Management can pin members to the top; others are sorted by last week&apos;s activity.</li>
          <li>Guild War adds personal and guild seasonal statistics (from the new season onward).</li>
          <li>Boss talent tracking now records reward counts for both bosses after clearing the Guild Hero&apos;s Realm.</li>
          <li>Honorary titles for standout Guild event performers, shown on the Guild Roster and in Guild chat.</li>
          <li>Guild Base blacklist for individual Wanderers or whole guilds.</li>
          <li>The Reflection Temple entrance is temporarily closed and reopens when Jiangnan arrives; all stage progress is preserved.</li>
          <li>Fixed the [Hidden Scent] tailored outfit displaying incorrectly in some results animations.</li>
          <li>[Nameless Sword] Sword Energy description corrected: each stack increases Damage Boost against non-player units by 10%, with no need to enter the Exhausted state. Description only; the effect already worked this way.</li>
        </ul>
        <h3 className="text-base font-semibold text-slate-100">Update overview</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li>Hidden Mountain Main Chapter [Bringer of Embers]: after Main Chapter IV: Gold Crow Fall, two new chapters, A Bitter Winter and Sea of Sunfire.</li>
          <li>Hidden Mountain Campaign [Skyward City Ruins] and world bosses Golden Colossus Taicu and Goshawk.</li>
          <li>Transdust Ruins extraction match from September 23, 2026 06:00: Lv. 20 plus the Exploration Quest Sands of Perils; Solo, Trio, AI Solo and AI Trio.</li>
          <li>Wildtrail Journal: Ruffled Up goose mode, plus the Trekking for Treasures and Goose Greeting events.</li>
        </ul>
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
          Version 2.1 catch-up: what changed recently.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The official trail now leads with the September 5 Version 2.1 patch-notes section and the September 3 overview, with August 20 retained as an earlier section on the same Clouded Revelation patch page. If you last played around Version 1.8 or earlier, use Hidden Mountain and the July 23 balance pass as historical checkpoints, review the August 7 network section on the aggregate August 14 page, then finish with the confirmed Version 2.1 fixes.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Start with practical checks: verify Palace-era code reports in-game, re-open blocked event or quest steps after the June 5 and May 29 fixes, and compare your build against the May 26 Path Balance notes before spending scarce upgrade materials.
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
          SEO guide checklist after Version 2.1.
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
