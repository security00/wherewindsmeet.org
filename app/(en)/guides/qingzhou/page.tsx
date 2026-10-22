import type { Metadata } from "next";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const slug = "qingzhou";
const pageUrl = `${baseUrl}/guides/${slug}`;
const freshness = getContentFreshness(`/guides/${slug}`);
const lastChecked = freshness?.lastChecked ?? "2026-10-22";

export const metadata: Metadata = {
  title: "Where Winds Meet Qingzhou Guide: How to Unlock Eastern Peak",
  description:
    "How to unlock Qingzhou in Where Winds Meet Version 2.3 Friends From Afar: Lv. 32, Heaven Has No Pier, Away to Qingzhou, Eastern Peak landmarks, Waist Drum, Inkbound Order, world bosses, and the October 29 Penglai / Mount Tai Blizzard checkpoint.",
  alternates: buildHreflangAlternates(`/guides/${slug}`),
  openGraph: {
    title: "Where Winds Meet Qingzhou Guide: How to Unlock Eastern Peak",
    description:
      "Unlock Qingzhou – Eastern Peak in Version 2.3: story gates, martial arts, Inkbound Order, bosses, and the reported October 29 follow-up.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Where Winds Meet Qingzhou Guide: How to Unlock Eastern Peak",
    description:
      "Version 2.3 Qingzhou unlock checklist, Silkbind – Wings, Inkbound Order, and the October 29 Penglai / Mount Tai Blizzard watch.",
  },
};

const unlockSteps = [
  {
    title: "Finish Qinghe Main Chapter [Heaven Has No Pier]",
    detail:
      "Progress the Qinghe Main Story until you can clear Heaven Has No Pier. That chapter gate is what makes the Qingzhou Lost Chapter appear.",
  },
  {
    title: "Reach character Lv. 32",
    detail:
      "Away to Qingzhou is gated behind character level 32. If the Lost Chapter is missing, confirm both the story clear and the level floor.",
  },
  {
    title: "Accept Lost Chapter [Away to Qingzhou]",
    detail:
      "When the Lost Chapter appears, accept Away to Qingzhou and follow the travel route into the new region.",
  },
  {
    title: "Enter Qingzhou – Eastern Peak",
    detail:
      "The first open slice is framed as Qingzhou – Eastern Peak. Use the in-game map and Journal for Qingzhou entries after you arrive.",
  },
];

const firstSessionRows = [
  {
    goal: "Learn the region tone",
    where: "Eastern Peak climb → town → coast",
    related: { href: "https://www.wherewindsmeetgame.com/news/official/1009devletter.html", label: "Official Dev Letter Part 1", external: true },
  },
  {
    goal: "Unlock new martial arts",
    where: "Journal → Sea Shepherd (Museflow Waist Drum) / Riddled Echoes (Willowbend Fan)",
    related: { href: "/guides/martial-arts-weapons#silkbind-wings", label: "Martial arts weapons", external: false },
  },
  {
    goal: "Meet the new sect",
    where: "Inkbound Order Primary Exam (admission pass from Master Goose)",
    related: { href: "/guides/sects#inkbound-order", label: "Sects · Inkbound Order", external: false },
  },
  {
    goal: "World bosses",
    where: "Tidewatcher, Old Raftsman, Shuttlecock Champion (need Qingzhou unlocked)",
    related: { href: "/guides/bosses", label: "Bosses (P1 thicken)", external: false },
  },
  {
    goal: "Debate mode",
    where: "Gift of Gab War of Words (Profession unlock; keeps Scholar rank)",
    related: { href: "/guides/gift-of-gab", label: "Gift of Gab", external: false },
  },
  {
    goal: "Pins & routes",
    where: "Official interactive map Qingzhou layer",
    related: { href: "/tools/interactive-map", label: "Interactive map hub", external: false },
  },
  {
    goal: "Season window",
    where: "Season S5: Ever Aflame (Arena / Taiping) 2026-10-15 05:00 – 2026-11-26 04:59:59",
    related: { href: "/guides/patch-notes", label: "Patch notes", external: false },
  },
];

const bosses = [
  {
    name: "Old Raftsman",
    flavor: "Ferryman look; raft duel on rapids; side-scrolling camera beat; drunken staff switch.",
  },
  {
    name: "Tidewatcher",
    flavor: "Stilts + tasselled spear + street-performance energy; wave-phase Lightness checks.",
  },
  {
    name: "Shuttlecock Champion",
    flavor: "Feathered shuttlecock duel entry; close-range kick pressure, no conventional weapon.",
  },
];

const upcomingRows = [
  {
    checkpoint: "Mount Tai Blizzard campaign",
    detail:
      "Closed-circle mystery / blizzard-sealed mountain framing arriving by the end of October.",
    confidence: "Official (timing = “end of month”)",
  },
  {
    checkpoint: "Mount Penglai open",
    detail:
      "Named in Dev Letter Part 1 as Qingzhou’s mist-isle academy space. October 29, 2026 open date repeated by RPGamer, 3DM EN, and Game8’s 2.3 roadmap table.",
    confidence: "Date = media consensus → Reported until official HTML confirms",
  },
  {
    checkpoint: "Combined “Oct 29 batch”",
    detail: "Game8 lists both Mount Penglai + Mount Tai Blizzard on October 29, 2026.",
    confidence: "Third-party roadmap",
  },
];

const faqs = [
  {
    question: "Is Qingzhou free to access after Version 2.3?",
    answer:
      "Version 2.3 is a live content update for the free-to-play title. Region unlock still requires the story/level gates above—not a separate paid map DLC in any official note cited here.",
  },
  {
    question: "Do I need to leave my current sect to join Inkbound Order?",
    answer:
      "No for Visiting Disciples: official Dev Letter Part 2 states you can keep your primary sect and study as a Visiting Disciple.",
  },
  {
    question: "Where is the Qingzhou map?",
    answer:
      "Start with the official interactive map (Qingzhou layer is live with Eastern Peak pin categories), then our hub at /tools/interactive-map. Pin layers on third-party maps can lag—verify in-game.",
  },
  {
    question: "When do Penglai and Mount Tai Blizzard open?",
    answer:
      "Official letter: Mount Tai Blizzard by end of October. Multiple English media roadmaps list October 29, 2026 for Penglai (and Game8 for both). Treat the calendar day as Reported until official patch text confirms.",
  },
  {
    question: "Are there Qingzhou redeem codes?",
    answer:
      "Our /guides/codes page found no new codes in the official Version 2.2 / 2.3 Steam announcements. Do not trust aggregator-only strings such as 1015QINGZHOU without an official URL.",
  },
];

const sources = [
  {
    label: "Official Dev Letter V2.3 Part 1 (2026-10-09)",
    href: "https://www.wherewindsmeetgame.com/news/official/1009devletter.html",
  },
  {
    label: "Official Dev Letter V2.3 Part 2 (2026-10-14)",
    href: "https://www.wherewindsmeetgame.com/news/official/1014devletter.html",
  },
  {
    label: "Official Friends From Afar Version 2.3 Update Overview",
    href: "https://www.wherewindsmeetgame.com/news/official/FriendsFromAfar.html",
  },
  {
    label: "Official Version 2.3 patch notes (Oct 15)",
    href: "https://www.wherewindsmeetgame.com/news/official/FriendsFromAfarPatchNotes.html",
  },
  {
    label: "Official Oct 16 fixes",
    href: "https://www.wherewindsmeetgame.com/news/official/1016patchnotes.html",
  },
  {
    label: "Official Oct 25 appearances",
    href: "https://www.wherewindsmeetgame.com/news/official/1025appearance.html",
  },
  {
    label: "Official interactive map",
    href: "https://www.wherewindsmeetgame.com/map/en/",
  },
  {
    label: "RPGamer Qingzhou / Penglai Oct 29 (Reported date)",
    href: "https://rpgamer.com/2026/10/where-winds-meet-heads-to-qingzhou/",
  },
  {
    label: "3DM EN Penglai Oct 29 (Reported date)",
    href: "https://en.3dmgame.com/news/6194",
  },
  {
    label: "Game8 Ver 2.3 roadmap table (Reported date)",
    href: "https://game8.co/games/Where-Winds-Meet/archives/631037",
  },
];

const related = [
  { href: "/guides/patch-notes", label: "Patch notes · 2.3 / Oct 25 / Oct 29 watch" },
  { href: "/guides/martial-arts-weapons#silkbind-wings", label: "Martial arts · Silkbind – Wings" },
  { href: "/guides/sects#inkbound-order", label: "Sects · Inkbound Order" },
  { href: "/guides/bosses", label: "Bosses hub" },
  { href: "/guides/gift-of-gab", label: "Gift of Gab / War of Words" },
  { href: "/tools/interactive-map", label: "Interactive map · Qingzhou" },
  { href: "/guides/codes", label: "Codes policy" },
  { href: "/news", label: "News cards" },
];

export default function QingzhouGuidePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How do you unlock Qingzhou in Where Winds Meet (Version 2.3 Eastern Peak)?",
      description: metadata.description,
      dateModified: lastChecked,
      mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Qingzhou", item: pageUrl },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHubBacklink language="en" />

      <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/50 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Guides · Version 2.3 Friends From Afar
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          How do you unlock Qingzhou in Where Winds Meet (Version 2.3 Eastern Peak)?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Qingzhou is the Version <strong>2.3 Friends From Afar</strong> theme region that went live with the{" "}
          <strong>October 15, 2026</strong> update (maintenance <strong>05:00–12:00 UTC+8</strong> on the official overview).
          To enter, reach <strong>Lv. 32</strong>, finish the Qinghe Main Chapter <strong>[Heaven Has No Pier]</strong>, then
          accept the Lost Chapter <strong>[Away to Qingzhou]</strong>. The first open slice is framed as{" "}
          <strong>Qingzhou – Eastern Peak</strong>; later in the same version window, media roadmaps and the official Dev
          Letter point to <strong>Mount Penglai</strong> and the campaign <strong>[Mount Tai Blizzard]</strong> as a
          follow-up beat.
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Last checked {lastChecked} · Unofficial fan hub. Prefer official news links in Sources for every number and date.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">How to unlock Qingzhou (checklist)</h2>
        <ol className="mt-5 space-y-4">
          {unlockSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Step {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          <strong>Player action after unlock:</strong> open Qingzhou’s Journal for the new Jianghu Legacies{" "}
          <strong>[Riddled Echoes]</strong> (Volume 1) and <strong>[Sea Shepherd]</strong> (Volume 2)—these are the
          published unlock routes for the new Fan and Waist Drum martial arts.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">What Qingzhou is (official framing)</h2>
        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
          <p>
            Official Dev Letter Part 1 describes Qingzhou as an eastward theme region inspired by Shandong geography:
            massifs giving way to plains and coast, with <strong>Mount Tai</strong> presented as the{" "}
            <strong>Eastern Peak</strong> starting climb (South Gate to Heaven, cliff inscriptions, summit vistas).
            Settlements called out in that letter include <strong>Wellspring Town</strong> (springs, brocade carp, kites)
            and <strong>Crownleek Terrace</strong> (leek fields and the Crownleek Contest). Further east, the letter frames{" "}
            <strong>Mount Penglai</strong> as a mist-shrouded immortal-mountain / academy space (Pavilion of Tomes, sage
            statues)—treat Penglai’s open schedule separately under Upcoming.
          </p>
          <p>
            Qingzhou also introduces a deeper <strong>Local</strong> companion system: befriend village Locals with
            different talents (social / sharp-eyed / athletic problem-solving). Exact invite UI steps remain{" "}
            <strong>Pending official confirmation</strong> beyond the Dev Letter pitch—verify in-game.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">First-session loop (orientation, not a spoiler walkthrough)</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Goal</th>
                <th className="px-4 py-3">Where this page points you</th>
                <th className="px-4 py-3">Related guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {firstSessionRows.map((row) => (
                <tr key={row.goal}>
                  <td className="px-4 py-3 font-semibold text-slate-50">{row.goal}</td>
                  <td className="px-4 py-3 leading-6 text-slate-300">{row.where}</td>
                  <td className="px-4 py-3">
                    {row.related.external ? (
                      <a href={row.related.href} target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                        {row.related.label}
                      </a>
                    ) : (
                      <Link href={row.related.href} className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                        {row.related.label}
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Folk / exploration beats named in the Version 2.3 overview summary already on our patch-notes page:{" "}
          <strong>Everbloom Spree</strong>, <strong>Exam Vigil</strong>, Injustice Quests, <strong>Qingzhou Meow Meow</strong>,
          and <strong>five Qingzhou Oddities</strong> (individual Oddity names still pending in-game capture).
        </p>
      </section>

      <section className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/30 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">New combat &amp; progression tied to Qingzhou</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-200">
          <li>
            <strong>Path [Silkbind – Wings]:</strong> dance-like silk / drum / fan combat; Waist Drum martial art{" "}
            <strong>[Museflow Waist Drum]</strong> from <strong>Sea Shepherd</strong>; Fan martial art{" "}
            <strong>[Willowbend Fan]</strong> from <strong>Riddled Echoes</strong>. Official Part 2 notes drumbeat timing
            windows (offense / crowd control / support rhythms)—no DPS numbers on this page.
          </li>
          <li>
            <strong>Inner Ways / gear (named only):</strong> Legendary Inner Way <strong>[Harmony Song]</strong>; Epic{" "}
            <strong>[Zephyr Whispers]</strong>, <strong>[Melody of the Brush]</strong>, <strong>[Blade&apos;s Will]</strong>;
            gear sets <strong>[Cloudshear]</strong> and <strong>[Reinchime]</strong>; limited free Inner Way / Gear Set
            Conversions until the new season starts (counts published on our 2.3 summary: +4 / +8).
          </li>
          <li>
            <strong>Endgame gates in 2.3:</strong> Tier <strong>100</strong> gear; Sword Trial{" "}
            <strong>[Compass &amp; Chime]</strong> (5-player); Hero&apos;s Realm <strong>[Liminal Ascension]</strong>{" "}
            (10-player); leaderboard rewards from <strong>October 16, 05:00</strong> server time per overview summary.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">World bosses (names + vibe only)</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Official Dev Letter Part 2 introduces three Qingzhou world bosses. Do not invent HP or drop tables here. Full
          strategy pages stay on <Link href="/guides/bosses" className="text-emerald-300 underline underline-offset-4">/guides/bosses</Link> once thickened.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {bosses.map((boss) => (
            <article key={boss.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-base font-semibold text-slate-50">{boss.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{boss.flavor}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Inkbound Order (one paragraph + link)</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Qingzhou hosts the <strong>Inkbound Order</strong>—academies across the region (central campus / Pavilion of
          Tomes, Wellspring Primary Academy, Crownleek agriculture branch, athletic grounds). Admission: get an entry
          permit from <strong>Master Goose</strong>, sit the <strong>Primary Exam</strong>. <strong>Novice</strong> and{" "}
          <strong>Initiate</strong> ranks are open with 2.3; higher ranks after <strong>Farm Recess</strong>. Players
          already in another sect can study as <strong>Visiting Disciples</strong> (first dual-sect feature per official
          Part 2) without dropping their primary sect. Full sect card →{" "}
          <Link href="/guides/sects#inkbound-order" className="text-emerald-300 underline underline-offset-4">
            /guides/sects#inkbound-order
          </Link>
          .
        </p>
      </section>

      <section id="upcoming" className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Upcoming: Mount Penglai &amp; Mount Tai Blizzard</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-slate-900/80 text-xs uppercase tracking-wide text-amber-100/80">
              <tr>
                <th className="px-4 py-3">Checkpoint</th>
                <th className="px-4 py-3">What we can say today</th>
                <th className="px-4 py-3">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-500/20 text-slate-200">
              {upcomingRows.map((row) => (
                <tr key={row.checkpoint}>
                  <td className="px-4 py-3 font-semibold text-amber-50">{row.checkpoint}</td>
                  <td className="px-4 py-3 leading-6 text-amber-50/90">{row.detail}</td>
                  <td className="px-4 py-3 leading-6 text-amber-100/80">{row.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-amber-50/90">
          <strong>Copy rule:</strong> treat the calendar day as{" "}
          <em>Reported for October 29, 2026 — confirm against the latest official news before you plan materials.</em>{" "}
          When official Oct 29 notes drop, replace Reported with Official and date-stamp Last checked.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="font-semibold text-slate-50">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Related guides</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-emerald-300 hover:border-emerald-400/60"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-200">Sources</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          Unofficial fan hub. Not affiliated with NetEase / Everstone. Always verify dates and unlock text in-game and on
          official news.
        </p>
      </section>
    </article>
  );
}
