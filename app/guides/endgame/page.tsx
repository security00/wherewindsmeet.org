import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet Endgame Guide - Progression & Optimization",
  description:
    "Master the Where Winds Meet endgame with guides on boss mechanics, resource farming, stat optimization, and post-story progression. Level cap content and optimization strategies.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/endgame",
  },
};

const endgamePhases = [
  {
    name: "Early Endgame (Level 30-40)",
    description: "Completing story, unlocking endgame activities",
  },
  {
    name: "Mid Endgame (Level 40-50)",
    description: "Farming for optimal gear, mastering difficult bosses",
  },
  {
    name: "Late Endgame (Level 50+)",
    description: "Perfect optimization, PVP competition, challenge content",
  },
];

export default function EndgamePage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.webp"
            alt="Where Winds Meet endgame content background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Mastering the Where Winds Meet endgame.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            The Where Winds Meet endgame is where your character truly comes alive.
            After completing the story and hitting the level cap, the real journey
            begins: optimizing your stats, conquering challenging boss encounters,
            farming rare rewards, and testing yourself against other players in PVP.
            This Where Winds Meet endgame guide explains what to expect, how to
            prepare, and where to focus your efforts for the smoothest and most
            rewarding progression.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Many players feel lost when they reach the Where Winds Meet endgame
            because the game stops holding your hand. There is no quest marker
            telling you exactly what to do next. Instead, you must decide: do you
            want to master PVE content like challenging boss encounters? Perfect your
            Where Winds Meet builds for optimal stat efficiency? Compete in PVP and
            test your skills against real opponents? Collect every rare reward and
            item? The Where Winds Meet endgame accommodates all these playstyles, but
            it helps to have a plan.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            This guide breaks the Where Winds Meet endgame into phases, explains how
            to farm efficiently, covers the toughest bosses and challenges, and shows
            you how to optimize your build once you have the freedom to chase perfect
            stats. By the end, you will understand not just what to do in the Where
            Winds Meet endgame, but why those activities matter for your personal
            goals as a player.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Understanding Where Winds Meet endgame phases.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The Where Winds Meet endgame is not a single moment but a progression of
          phases, each with different challenges, rewards, and playstyles. Rather
          than treating endgame as one amorphous blob, breaking it into phases helps
          you set realistic goals and measure progress. Most players naturally move
          through these phases without thinking about it, but understanding the
          structure helps you make intentional decisions about where to focus next.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {endgamePhases.map((phase) => (
            <div
              key={phase.name}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">{phase.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Each Where Winds Meet endgame phase requires different priorities. Early
          endgame is about unlocking systems and understanding what activities are
          available to you. Mid endgame shifts toward grinding for specific rewards
          and farming materials. Late endgame optimizes every last stat and tackles
          the hardest challenges. By knowing which phase you are in, you can set
          goals that feel achievable rather than overwhelming.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Where Winds Meet endgame farming and resource gathering.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Farming is the backbone of Where Winds Meet endgame progression. Whether
          you are hunting for specific items, gathering materials to level up skills,
          or accumulating currency for important purchases, knowing which activities
          give the best return on time spent is crucial. A common mistake is farming
          the wrong content and falling behind on upgrades.
        </p>
        <div className="space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Efficient Where Winds Meet endgame farming</h3>
            <p className="mt-2">
              Focus on activities that match your current needs. If you need weapon
              materials, run content that drops those specific materials. If you need
              gold or currency, prioritize Where Winds Meet endgame dungeons or events
              that pay out well. Avoid spreading yourself too thin by trying to farm
              multiple resource types at once. Instead, choose one or two priorities
              per play session.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Where Winds Meet boss farming strategies</h3>
            <p className="mt-2">
              Some of the best Where Winds Meet endgame loot comes from defeating
              challenging boss encounters repeatedly. Learn efficient routing strategies
              for your favorite boss runs. Optimize your Where Winds Meet builds
              specifically for the boss you are farming so you clear it faster. Join a
              group if the boss is too difficult solo; the shared rewards will still
              feel valuable.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Where Winds Meet weekly lockouts and events</h3>
            <p className="mt-2">
              Some Where Winds Meet endgame activities reset weekly or monthly,
              limiting how much you can farm them. Plan your week to hit all the
              rewarding limited activities. Do not skip weekly bosses, seasonal events,
              or special challenges because the rewards compound over time.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Challenging bosses and Where Winds Meet endgame content.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet endgame bosses are significantly tougher than story bosses.
          They have complex attack patterns, demand you dodge at precise moments, and
          punish mistakes severely. However, they also provide the best rewards and
          the most satisfying victories. Learning to defeat difficult Where Winds Meet
          bosses is one of the cornerstones of endgame progression.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          This site includes detailed guides for the hardest Where Winds Meet bosses
          with strategy breakdowns, recommended builds, and attack pattern
          explanations. If you hit a wall on a specific endgame boss, check the
          dedicated guide for that encounter. Most Where Winds Meet endgame bosses
          have one or two strategies that make them much more manageable; finding the
          right approach makes the difference between a frustrating grind and a
          rewarding challenge.
        </p>
        <div className="mt-4">
          <Link
            href="/guides/bosses"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            View Boss Guides
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Optimizing stats and gear in Where Winds Meet endgame.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Once you have equipped basic gear, Where Winds Meet endgame begins: the
          pursuit of perfect stat allocation. This is where your build truly matters.
          Small improvements in stat balance, weapon choice, and ability synergy
          compound to create massive differences in how your character feels and
          performs.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          In Where Winds Meet endgame, every stat point counts. You cannot max
          everything, so you must make strategic choices. Where Winds Meet endgame
          gear is often farmable with specific stat rolls; learning which gear pieces
          matter most for your build accelerates your progression significantly. Use
          the builds guide on this site to understand your optimal stat targets, then
          farm for gear that gets you closer to those targets.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Many Where Winds Meet endgame players obsess over small stat improvements.
          While min-maxing is rewarding, remember that the difference between 95%
          optimized and 100% optimized is often barely noticeable. Diminishing returns
          kick in fast. Focus first on being 85% optimized and actually enjoying the
          game, then refine further only if optimization itself is fun for you.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Where Winds Meet endgame PVP and competitive content.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet endgame PVP is a different beast from PVE. You are no
          longer farming predictable AI bosses; you are competing against real players
          who adapt, learn from your patterns, and exploit your mistakes. Many Where
          Winds Meet endgame players find PVP both frustrating and incredibly
          rewarding.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          To excel in Where Winds Meet endgame PVP, you need a Where Winds Meet build
          optimized specifically for dueling, practice against real opponents, and
          flexibility to adapt your strategy based on what you face. The tier list on
          this site has a PVP-focused section that explains which weapons dominate in
          competitive contexts and why. Use that information as a starting point, then
          practice until your chosen weapon becomes second nature.
        </p>
        <div className="mt-4">
          <Link
            href="/guides/tier-list"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            PVE/PVP Tier List
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Exploration, mystic arts, and Jianghu life in the endgame.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Long-form Traditional Chinese guides treat open-world exploration as
            a core part of Where Winds Meet endgame, not an optional side dish.
            Qinghe and later regions hide completion ranks, serendipity chains,
            and movement rewards that fundamentally change how it feels to move
            through Jianghu. Once your basic build is online, it is worth
            dedicating some endgame sessions purely to exploration and mystic
            arts.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Qinghe exploration and lightness skills.
          </h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Traditional Chinese route maps recommend pushing Qinghe&apos;s
            exploration rank to around <span className="font-semibold">5–6</span>{" "}
            early in endgame. Those thresholds unlock major lightness skills
            such as Jade Fan Roaming the Mountains (玉扇遊山) and Riding the
            Wind (馮虛禦風), which make every later region dramatically easier to
            traverse. Many shrine and ruin puzzles in those guides are written
            assuming you already have movement tools like Lingyun Step (淩雲踏)
            and these big dashes unlocked.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Must-have mystic arts.
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>
              <span className="font-semibold">Golden Jade Hand (金玉手):</span>{" "}
              a ranged &quot;pressure point&quot; strike used constantly in
              both combat and puzzle solving.
            </li>
            <li>
              <span className="font-semibold">
                Plucking Stars, Catching the Moon (攝星拿月):
              </span>{" "}
              telekinetically steals items or weapons and even lets you swipe a
              powerful shield art from a monk in Kaifeng&apos;s Xiangguo
              Temple.
            </li>
            <li>
              <span className="font-semibold">Hidden Step (杳無形) &amp; Worldly Disguise (紅塵障目):</span>{" "}
              stealth and disguise tools repeatedly called out in side-quest
              walkthroughs as requirements for infiltration and &quot;stealing
              teacher&quot; style missions.
            </li>
            <li>
              <span className="font-semibold">Formless Golden Body (無相金身):</span>{" "}
              a defensive mystic art with strong damage reduction and stagger
              resistance, prized in high-pressure fights.
            </li>
          </ul>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Leisure games and music between grinds.
          </h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            The same Traditional Chinese guides devote many pages to instruments
            and mini-games: collecting Guqin, Pipa, and Erhu scores across
            scenic spots; mastering Pitch Pot, Leaf Card Game, Shefu riddles,
            and Sumo duels; even placing hand-crafted signposts along routes you
            love. These activities feed Co-Play points and achievements, but
            more importantly they give you a way to{" "}
            <span className="font-semibold">
              rest your hands without leaving Jianghu
            </span>
            .
          </p>
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            If you feel burnt out chasing numbers, copy the pattern from those
            guides: spend some endgame nights finishing a shrine chain, hunting
            down a new lightness skill, or just playing music on a rooftop.
            Your account will still grow through exploration ranks and mystic
            arts, but your relationship with the world will grow even more.
          </p>
        </div>
        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <Image
              src="/background/bg3.webp"
              alt="Where Winds Meet character playing music in a scenic field"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 28rem, (min-width: 768px) 45vw, 100vw"
            />
          </div>
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            Image inspired by Traditional Chinese leisure guides that map out
            music score locations, mini-games, and quiet vantage points for
            screenshots and roleplay.
          </p>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Planning your Where Winds Meet endgame journey.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The Where Winds Meet endgame is meant to be long. There is no finish line.
          Instead, think of endgame as a series of milestones: defeating your first
          difficult boss, reaching perfect stat balance, winning your first PVP duel,
          collecting rare cosmetics, contributing meaningfully to co-op teams. By
          setting intermediate goals, the endgame never feels endless or aimless.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Check back on this site and the tier list guide regularly as patches land.
          The Where Winds Meet endgame meta shifts with balance updates, and staying
          informed ensures you adapt efficiently. Most importantly, remember that the
          goal of Where Winds Meet endgame is to have fun. If optimization stops being
          fun and starts feeling like a job, take a break. The Jianghu will still be
          waiting when you return.
        </p>
      </section>
    </article>
  );
}
