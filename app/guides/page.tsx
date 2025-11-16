import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet Guides for Beginners & Veterans",
  description:
    "Focused Where Winds Meet guides with beginner tips, leveling routes, open world systems, tier lists, builds and codes so you always know what to do next.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides",
  },
};

const guideSections = [
  {
    title: "Start here if you are new to Where Winds Meet",
    slug: "/guides/tier-list",
    label: "Tier List & Early Choices",
    description:
      "This section explains how the Where Winds Meet tier list fits into your first ten to twenty hours of play. Instead of pushing you into the highest rated weapons immediately, it shows how to read rankings in context, when to switch paths, and why some B-tier options feel amazing for beginners who are still learning movement, parries, and camera control.",
  },
  {
    title: "Builds that respect your pace and style",
    slug: "/guides/builds",
    label: "Flexible Builds",
    description:
      "Here you will find core Where Winds Meet builds grouped by fantasy, not just by numbers. Each build explains its main loop, what kind of player usually enjoys it, and how to adapt it if future patches shake up the meta. The goal is for a build to feel like your character, not a rigid spreadsheet.",
  },
  {
    title: "Stay on top of time-limited rewards",
    slug: "/guides/codes",
    label: "Codes & Rewards",
    description:
      "Codes pages summarize active and expired Where Winds Meet codes, the platforms they work on, and the kinds of rewards they grant. Simple step-by-step redeem instructions make sure you never lose progress because a code expired while you were still trying to figure out the in-game menus.",
  },
];

export default function GuidesPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet guides that grow with your journey.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          This page collects every major Where Winds Meet guide in one place so
          you can move smoothly from beginner curiosity to confident mastery.
          Instead of scattering short tips across dozens of posts, each guide is
          designed as a long-form route through a specific question, whether you
          are wondering which weapon to pick from the very first chest, how to
          read the current Where Winds Meet tier list without feeling
          overwhelmed, or which builds make the open world feel alive rather
          than like a checklist of icons.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          The core idea is simple: a good Where Winds Meet guide should save you
          time instead of stealing it. That means clearly labeled sections,
          scannable headings, and internal links that connect related topics.
          When you arrive here from search results for phrases like &quot;where
          winds meet tier list&quot;, &quot;where winds meet builds&quot;, or
          &quot;where winds meet codes&quot;, you should know exactly where to
          scroll and which chapter to read next. We want every visit to feel
          like a calm planning session before you dive back into Jianghu.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          These Where Winds Meet guides are written for players who juggle busy
          lives with a love of big RPGs. Instead of assuming you can grind every
          day, recommendations highlight activities that deliver the most
          satisfaction per session. You will find notes about when to push the
          main story, when to roam freely, when to experiment with a new build,
          and when to pause and redeem a fresh batch of Where Winds Meet codes
          so you enter the next arc with a healthy cushion of resources.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
        <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Recommended reading order for Where Winds Meet guides.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            If you are just starting Where Winds Meet, it is tempting to open a
            dozen tabs at once. Instead, begin with a single overview guide that
            explains basic systems, then branch into the specific topic that
            bothers you most. Some players want clear combat direction, so they
            open the Where Winds Meet tier list first. Others are happiest when
            they know a long-term build goal, so they go straight to detailed
            Where Winds Meet builds. The structure of this guides hub supports
            both approaches.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Start by skimming the introductions of each major Where Winds Meet
            guide. Pay attention to the &quot;this is for you if&quot; sections;
            they are there to save you from reading dense paragraphs that are
            not relevant yet. From there, pick one or two goals for your next
            session. Maybe you want to test a slightly greedy ranged build, or
            finally understand a mechanic that confused you in the tutorial.
            Let the guides support that goal instead of telling you how you
            must play Where Winds Meet every night.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Over time, the most valuable habit is returning whenever your
            relationship with Where Winds Meet shifts. After a major patch, you
            might re-read tier list explanations to see if your favorite weapon
            still shines. When a new batch of seasonal Where Winds Meet codes
            drops, you can quickly check which rewards best support the builds
            you enjoy. Treat this guides page as a map of the broader knowledge
            base that supports every wanderer of Jianghu, not a rigid syllabus.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h3 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
            Key guide categories at a glance
          </h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Beginner foundations that explain how Where Winds Meet feels in
                your hands; stamina, movement, camera comfort, and reading enemy
                intentions before you chase numbers.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                A living Where Winds Meet tier list that teaches you to read
                rankings like a language instead of treating them as strict
                instructions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Where Winds Meet builds that balance fantasy and efficiency so
                your character still feels like your own even when you chase
                optimal play.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Codes and launch rewards guides that keep an eye on limited time
                Where Winds Meet codes, helping you claim what matters without
                adding pressure.
              </span>
            </li>
          </ul>
          <p className="text-xs text-slate-300">
            Every section is written so a curious player can land on it from
            search and still find full context, even if they have not read any
            other Where Winds Meet guide yet.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Explore the main Where Winds Meet guide pillars.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {guideSections.map((section) => (
            <Link
              key={section.slug}
              href={section.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {section.title}
                </h3>
                <p className="text-xs text-slate-300">{section.description}</p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-300 group-hover:text-emerald-200">
                Open {section.label}
                <span aria-hidden>↗</span>
              </span>
            </Link>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          However you choose to approach Where Winds Meet, the intention behind
          this guides hub is the same: reduce friction, deepen understanding,
          and protect your sense of wonder. When a new player asks you where to
          start, pointing them here should feel like offering a trustworthy
          companion rather than a wall of dense text. With time, this page will
          continue to grow alongside the game itself, adding fresh Where Winds
          Meet guides whenever the world expands.
        </p>
      </section>
    </div>
  );
}
