import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet Weapon Tier List - Ranking Every Weapon",
  description:
    "Complete Where Winds Meet weapon tier list ranking all weapons for PVE, PVP, and endgame. Learn which weapons are strongest, easiest to use, and best for your playstyle.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/weapons/tier-list",
  },
};

const weaponCategories = [
  {
    name: "Melee Weapons",
    description: "Close-range options with high damage and aggressive playstyles",
  },
  {
    name: "Ranged Weapons",
    description:
      "Distance-based combat tools for control and safe positioning",
  },
  {
    name: "Hybrid Weapons",
    description: "Versatile options that bridge close and ranged combat",
  },
];

export default function WeaponTierListPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.png"
            alt="Where Winds Meet weapon tier list background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet weapon tier list ranking every weapon.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Choosing the right weapon is foundational to your Where Winds Meet
            experience. Each weapon in Where Winds Meet has a distinct playstyle,
            power curve, and learning curve. This dedicated Where Winds Meet weapon
            tier list breaks down every weapon across multiple dimensions: raw power,
            ease of use, versatility across content, and how comfortably it handles
            endgame challenges. Whether you are a new player overwhelmed by choices or
            a veteran optimizing your arsenal, this Where Winds Meet weapon tier list
            provides the framework to make informed decisions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            The main Where Winds Meet tier list covers weapons alongside paths and
            builds. This dedicated Where Winds Meet weapon tier list zooms in to
            compare weapons directly, helping you understand not just which weapons
            are strong in absolute terms but also why they excel and what tradeoffs
            come with choosing them. Some Where Winds Meet weapons are simply better
            than others at high levels of play, while some are accessible and
            friendly to newer players despite lower theoretical power ceilings.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            If you searched for a Where Winds Meet weapons tier list to guide your
            loadout decisions, this page ranks every option and explains its
            applications. You will find weapons suitable for story progression, PVE
            endgame bosses, cooperative play, PVP dueling, and speedrunning. Use this
            Where Winds Meet weapon tier list as a reference when you are unsure which
            piece of equipment to invest in next.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Where Winds Meet weapon categories and playstyles.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet weapons fall into broad categories, each enabling different
          playstyles and requiring different skill expression. Understanding your
          preferred category makes this Where Winds Meet weapon tier list more
          actionable. You do not need to learn every weapon; instead, find the
          category that resonates with you, then explore the highest-ranked Where
          Winds Meet weapons within that category.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {weaponCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">{cat.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          This site includes individual guides for all major Where Winds Meet weapons.
          These guides go deeper into mechanics, combos, stat synergies, and
          situational use cases than any tier list can cover. Use this Where Winds
          Meet weapon tier list to identify promising options, then read the
          dedicated weapon guide for your top choices to understand them fully.
        </p>
        <div className="mt-4">
          <Link
            href="/guides/weapons"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Explore Weapon Guides
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          How to interpret this Where Winds Meet weapon tier list.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Tier rankings in this Where Winds Meet weapon tier list reflect multiple
          factors: raw damage output, durability, how quickly the weapon comes online,
          and flexibility across different playstyles. An S tier Where Winds Meet
          weapon typically excels at most of these dimensions, while a C tier weapon
          might dominate one area while struggling in others.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Where Winds Meet weapon power levels</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              S tier Where Winds Meet weapons are strong in most situations. A tier
              weapons are consistently good but may underperform in specific matchups.
              B tier Where Winds Meet weapons have a clear identity but require
              specific builds to shine. C tier Where Winds Meet weapons are playable
              for dedicated enthusiasts who accept their limitations.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Where Winds Meet weapon learning curves</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Some Where Winds Meet weapons are immediately powerful as you acquire
              them. Others require stats, specific codes, or practice to function
              properly. This Where Winds Meet weapon tier list assumes moderate
              optimization. A weapon that is mediocre on paper might feel incredible
              once you invest in its specific stat synergies.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Where Winds Meet weapon versatility</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Versatile Where Winds Meet weapons remain viable across PVE, PVP, and
              different playstyles. Specialist Where Winds Meet weapons dominate one
              area but struggle in others. Versatility is valuable if you like to
              switch between solo and cooperative play, but specialist weapons let you
              go deeper into specific niches.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Choosing your first Where Winds Meet weapon.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you are new to Where Winds Meet and checking this weapon tier list to
          decide which weapon to start with, follow this strategy: find the highest
          ranked Where Winds Meet weapon in your preferred category, then ask yourself
          if the playstyle feels intuitive. Does the weapon&apos;s attack pattern feel
          natural when you swing it? Do you find the animations cool or boring? These
          subjective factors often matter more than tier ranking, especially early in
          the game.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet rewards specialization. You will become much better at one
          weapon if you use it for dozens of hours than if you constantly swap. Even a
          lower-ranked Where Winds Meet weapon feels powerful when you truly master it.
          So pick a weapon from the middle of this tier list that appeals to you, play
          it extensively, then revisit this Where Winds Meet weapon tier list once you
          reach endgame. At that point, you have enough experience to evaluate whether
          switching to a stronger weapon is worth the relearning curve.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Endgame Where Winds Meet weapon optimization.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          In Where Winds Meet endgame, this weapon tier list becomes more relevant. You
          are no longer experimenting; you are optimizing. At this point, you should
          own weapons from multiple tier tiers so you can adapt to different content.
          An S tier Where Winds Meet weapon might carry you through routine bosses, but
          switching to a specialized B tier option might make a specific challenging
          encounter much easier.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet endgame also involves understanding matchups. The best Where
          Winds Meet weapon to use depends on what enemies you face. A weapon that
          dominates in open PVE might feel clunky against opponents that can block your
          attacks. Conversely, a weapon that struggles in general combat might have
          specific tools that trivialize a particular boss. Use this Where Winds Meet
          weapon tier list as a starting point, then customize your loadout for
          specific challenges.
        </p>
        <div className="mt-4">
          <Link
            href="/guides/endgame"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Endgame Guide
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Weapon combinations and synergies in Where Winds Meet.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Individual weapon ranking in this Where Winds Meet weapon tier list is
          important, but synergy matters equally. Some Where Winds Meet weapons pair
          beautifully in the same build, amplifying each other&apos;s strengths. Others
          compete for the same stat allocation and fighting over the same roles. Smart
          Where Winds Meet weapon pairing can elevate even lower-ranked weapons into
          highly effective builds.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The builds guide on this site explains weapon combinations in depth. If you
          fell in love with a B or C tier Where Winds Meet weapon, check the builds
          guide to find build archetypes that pair it with synergistic options. Often,
          a slightly weaker weapon becomes incredible once you build around it
          correctly. Do not let a tier ranking discourage you from exploring
          combinations that excite you.
        </p>
        <div className="mt-4">
          <Link
            href="/guides/builds"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Explore Builds
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Keeping your Where Winds Meet weapon tier list current.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          This Where Winds Meet weapon tier list reflects the current patch. After
          major balance updates, weapon rankings may shift significantly. When a new
          Where Winds Meet patch drops, check back on this page to see if your favorite
          weapon moved up or down the rankings. A weapon that was mid-tier might
          suddenly become S tier if the right balance changes align, or vice versa.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          By bookmarking this Where Winds Meet weapon tier list and checking it
          regularly, you stay informed about what the community considers strong. This
          helps you make decisions about what to level up next, which weapons to invest
          resources into, and when pivoting to a new option might be worth the effort.
          Remember that tier rankings are suggestions, not laws. Play the Where Winds
          Meet weapons that make you happy, but stay aware of where you stand in the
          competitive landscape.
        </p>
      </section>
    </article>
  );
}
