import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet Tier List (PVE & PVP) – Best Classes, Weapons & Builds",
  description:
    "Practical Where Winds Meet tier list for PVE and PVP with S–C rankings, best class-style builds, weapon recommendations, and pointers that stay useful across patches.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/tier-list",
  },
};

const tiers = [
  {
    name: "S Tier",
    summary:
      "Dominant picks that feel powerful in nearly all Where Winds Meet content when played with basic competence.",
  },
  {
    name: "A Tier",
    summary:
      "Consistently strong choices that shine when you lean into their strengths and accept a few tradeoffs.",
  },
  {
    name: "B Tier",
    summary:
      "Comfortable and reliable options that can clear most Where Winds Meet activities in the hands of a patient player.",
  },
  {
    name: "C Tier",
    summary:
      "Niche or flavor choices that struggle in high pressure content but can still work for dedicated fans.",
  },
];

const quickTierRows = [
  {
    tier: "S",
    pve: "Nameless Sword, Spear, Mo Blade, Umbrella",
    pvp: "Umbrella counter builds, Dual Blades, Rope Dart",
    notes:
      "Comfortably strong in most content with clear game plans. Recommended if you want to invest long term and keep options open.",
  },
  {
    tier: "A",
    pve: "Fan, hybrid Sword + Spear, supportive Umbrella/Fan",
    pvp: "Spear bruisers, Fan / Umbrella control setups",
    notes:
      "Very strong when played to their strengths and paired with the right builds. Often more fun or thematic than pure meta picks.",
  },
  {
    tier: "B",
    pve: "Greedy glass-cannon builds, off-meta hybrids",
    pvp: "Experimental mix-ups and niche counters",
    notes:
      "Viable for experienced players who enjoy practicing specific matchups or leaning hard into style over consistency.",
  },
  {
    tier: "C",
    pve: "Unfinished or overly narrow setups",
    pvp: "Gimmick-only routes",
    notes:
      "Usually worth treating as side projects rather than your very first main, unless the fantasy is exactly what you want.",
  },
];

export default function TierListPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.png"
            alt="Where Winds Meet tier list background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet tier list for practical PVE and respectful PVP.
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-emerald-300">
            Updated for the Where Winds Meet global launch (1.0) – early live
            snapshot based on official material and Traditional Chinese
            community guides.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            This Where Winds Meet tier list is built for real players, not only
            lab-perfect spreadsheets. Instead of ranking every weapon and path
            purely by theoretical damage output, it focuses on how comfortably a
            typical player can clear content, handle mistakes, and still feel
            like the star of a wuxia drama. You will see clear recommendations
            for S tier and A tier options, but also honest explanations of why a
            beloved B tier favorite might be worth keeping if it matches your
            personal rhythm in Where Winds Meet.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            A good Where Winds Meet tier list also respects time. If you only
            play a few nights a week, you should not feel pressured to reroll
            your entire character after each balance adjustment. That is why
            every tier ranking below includes context about learning curves,
            input comfort, and synergy with common Where Winds Meet builds.
            Instead of chasing tiny numbers, you can focus on the choices that
            make your sessions smoother and more cinematic.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Remember that a Where Winds Meet tier list is a snapshot, not a law.
            The wuxia world will continue to expand with new weapons, systems,
            and events. Treat this page as a compass that points toward strong
            options, then adjust based on your own experiences. If you love a
            lower ranked path, use the tips here to shore up its weaknesses and
            keep it viable in the content you care about most.
          </p>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Quick Where Winds Meet tier list snapshot.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you just searched for a{" "}
          <span className="font-semibold">Where Winds Meet tier list</span> and
          want fast answers, start here. This table gives a launch-window view
          of which weapons and playstyles tend to feel strongest in PVE and PVP
          before you dive into detailed explanations and build links.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2 text-left text-xs text-slate-200">
            <thead>
              <tr>
                <th className="rounded-l-xl border border-slate-800 bg-slate-900/70 px-3 py-2 font-semibold text-slate-50">
                  Tier
                </th>
                <th className="border border-slate-800 bg-slate-900/70 px-3 py-2 font-semibold text-slate-50">
                  PVE highlights
                </th>
                <th className="border border-slate-800 bg-slate-900/70 px-3 py-2 font-semibold text-slate-50">
                  PVP highlights
                </th>
                <th className="rounded-r-xl border border-slate-800 bg-slate-900/70 px-3 py-2 font-semibold text-slate-50">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {quickTierRows.map((row) => (
                <tr key={row.tier}>
                  <td className="rounded-l-xl border border-slate-800 bg-slate-950/80 px-3 py-2 font-semibold text-emerald-300">
                    {row.tier}
                  </td>
                  <td className="border border-slate-800 bg-slate-950/80 px-3 py-2">
                    {row.pve}
                  </td>
                  <td className="border border-slate-800 bg-slate-950/80 px-3 py-2">
                    {row.pvp}
                  </td>
                  <td className="rounded-r-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-slate-300">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
          These rankings reflect early global launch conditions and Traditional
          Chinese community consensus. Exact positions will shift with patches,
          but the{" "}
          <span className="font-semibold">
            relative comfort and flexibility of each tier
          </span>{" "}
          tends to stay recognizable over time.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Best Where Winds Meet builds and class-style picks right now.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          In practice, most players do not think in pure weapon names—they think
          in “classes” or build fantasies. The setups below translate S and A
          tier tools into concrete builds you can aim for, with links to deeper
          guides where available.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60">
            <h3 className="text-sm font-semibold text-slate-50">
             裂石·威 – Mo Blade frontline bruiser
            </h3>
            <p className="text-xs uppercase tracking-wide text-emerald-300">
              S tier · PVE tank / bruiser
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Combines Mo Blade&apos;s heavy hits with strong shields and
              survivability, often paired with supportive arts or umbrella tools
              for constant uptime. Ideal if you want to anchor groups, face
              bosses head-on, and still deal meaningful damage.
            </p>
            <p className="text-[11px] text-slate-300">
              Start with the{" "}
              <Link
                href="/guides/weapons/mo-blade"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Mo Blade weapon guide
              </Link>{" "}
              and the heavy builds section on the{" "}
              <Link
                href="/guides/builds"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                builds page
              </Link>
              .
            </p>
          </article>

          <article className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60">
            <h3 className="text-sm font-semibold text-slate-50">
             鳴金·影 / 鳴金·虹 – Sword + Spear bleed routes
            </h3>
            <p className="text-xs uppercase tracking-wide text-emerald-300">
              S–A tier · PVE bleed DPS
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              These builds use spear skills to stack bleed and other debuffs,
              then swap to sword to detonate them. Simpler Nameless Sword +
              Nameless Spear routes work great for beginners; advanced Nine
              Swords Nine Spears variants push damage much higher at the cost of
              APM.
            </p>
            <p className="text-[11px] text-slate-300">
              See the{" "}
              <Link
                href="/guides/weapons/spear"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                spear overview
              </Link>{" "}
              and related hybrid notes in the general{" "}
              <Link
                href="/guides/builds"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                builds guide
              </Link>
              .
            </p>
          </article>

          <article className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60">
            <h3 className="text-sm font-semibold text-slate-50">
             牽絲·霖 – Umbrella / Fan pure healer
            </h3>
            <p className="text-xs uppercase tracking-wide text-emerald-300">
              A tier · PVE support / healer
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Built around medicine-style umbrella arts and wide-area healing
              tools, this “doctor” archetype trades personal damage for
              incredible party stability. Traditional Chinese guides highlight
              it as one of the safest ways to clear hard group content.
            </p>
            <p className="text-[11px] text-slate-300">
              Learn the feel in the{" "}
              <Link
                href="/guides/weapons/umbrella"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                umbrella weapon guide
              </Link>{" "}
              and pair it with support-focused tips from{" "}
              <Link
                href="/guides/builds"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                builds
              </Link>
              .
            </p>
          </article>

          <article className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60">
            <h3 className="text-sm font-semibold text-slate-50">
             破竹·風 – Dual Blades + Rope Dart hunter
            </h3>
            <p className="text-xs uppercase tracking-wide text-emerald-300">
              S–A tier · PVP / high-skill assassin
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Rope Dart drags targets out of position, then Dual Blades dive in
              to finish the job. It is mechanically demanding but extremely
              satisfying if you enjoy reads, feints, and turning enemy mistakes
              into instant deletes.
            </p>
            <p className="text-[11px] text-slate-300">
              Start by getting comfortable with{" "}
              <Link
                href="/guides/weapons/dual-blades"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Dual Blades
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/weapons/rope-dart"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Rope Dart
              </Link>
              , then consult the PVP tier list for matchup nuances.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          How to read this Where Winds Meet tier list.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Before diving into individual rankings, it helps to understand how
          this Where Winds Meet tier list is structured. Each tier reflects an
          overall impression that blends damage, survivability, ease of use, and
          flexibility. Instead of obsessing over micro differences between two
          similar weapons, the list groups them into bands of power so you can
          quickly see which picks feel safe, which demand practice, and which
          exist mostly for stylish experiments.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you searched for a{" "}
          <span className="font-semibold">Where Winds Meet PVP tier list</span>{" "}
          or a{" "}
          <span className="font-semibold">Where Winds Meet weapon tier list</span>,{" "}
          this guide is meant to cover both sides at once. Weapons are grouped
          by how they perform in real endgame content, not just early leveling,
          so you can treat it as a practical{" "}
          <span className="font-semibold">Where Winds Meet endgame tier list</span>{" "}
          when planning long-term characters.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          PVE and PVP priorities are also balanced differently. In group PVE,
          the best Where Winds Meet options are often those that allow you to
          control space, contribute steady damage, and stay alive without
          draining your healer or co-op partner. In duels or small-scale PVP,
          sudden bursts, mobility, and unpredictable angles matter more. This
          Where Winds Meet tier list highlights where a weapon excels and where
          it feels noticeably weaker so you can choose based on the content you
          play most.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Finally, tiers are not destiny. A dedicated player with a C tier
          favorite and a supportive build can often outperform someone who
          picked a top-ranked weapon but never adapted their habits. Use this
          Where Winds Meet tier list as a starting point, then layer your own
          skill and preferences on top. The most important question is not
          &quot;what do streamers say is S tier&quot; but &quot;what feels
          powerful and expressive in my hands&quot;.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Tier overview at a glance.
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {tier.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {tier.summary}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Within each tier, weapons and paths are arranged loosely by how easy
          they are to recommend to new or returning players. An S tier option
          that demands perfect timing might sit beside a more forgiving A tier
          pick because the overall experience inside Where Winds Meet is similar
          for most people. Whenever you see a surprising placement, pause and
          read the explanation instead of fixating on the letter grade. The
          commentary is where this Where Winds Meet tier list really helps you
          make confident choices.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Using the tier list with your Where Winds Meet builds.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A tier list becomes truly valuable when it connects directly to your
          Where Winds Meet builds. As you browse rankings, think about your
          current character: which stats feel comfortable, which abilities you
          naturally gravitate toward, and how you prefer to move through the
          open world. If a weapon is rated highly but fights against your
          instincts, it may be better to refine a slightly lower ranked option
          that clicks with your sense of flow.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Look for synergies between top tier picks and supportive tools. A
          strong crowd control weapon might pair best with a sustain-focused
          Where Winds Meet build that lets you stay in the thick of fights
          longer. A burst-heavy option could shine in coordinated PVP teams that
          can set up its big windows. The notes in this Where Winds Meet tier
          list will call out those relationships so you do not have to discover
          them by accident after a frustrating evening.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          When future patches land, revisit both your favorite Where Winds Meet
          builds and this tier list at the same time. Balance changes rarely
          occur in isolation; a small buff to one weapon may matter more
          because of how it interacts with new systems or content. By treating
          the tier list and builds as a paired set of tools, you can adapt
          smoothly instead of feeling like every update pulls the rug out from
          under your character.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Where Winds Meet tier list philosophy and future updates.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Many tier lists are written in a single burst and then left to age.
          This Where Winds Meet tier list will evolve alongside the game. When
          new content, regions, or systems arrive, rankings will shift to
          reflect the fresh reality. You can expect updates after large patches,
          seasonal events, and any major combat reworks that meaningfully change
          how a weapon or path feels to play.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          At the same time, changes will never be made just for the sake of
          novelty. A stable Where Winds Meet tier list helps you plan long-term
          without constantly worrying that next week&apos;s article will
          declare your favorite setup obsolete. When adjustments happen, they
          will be accompanied by clear notes describing why the ranking moved
          and what that means for your everyday experience inside Where Winds
          Meet.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Above all, remember that this tier list is here to support your
          enjoyment, not restrict it. If a lower ranked weapon makes you smile
          every time you log in, that joy matters more than any letter on a
          chart. Use the Where Winds Meet tier list as a friendly guide, combine
          it with your own taste and the site&apos;s broader guides, and you
          will find a path through Jianghu that feels powerful, stylish, and
          uniquely your own.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Specialized tier lists for PVP and weapons.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          This general Where Winds Meet tier list covers both PVE and PVP equally,
          but some players want deeper dives into specific areas. If you are focused
          on competitive PVP or interested in detailed weapon-by-weapon analysis, we
          have dedicated tier lists for those topics.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/guides/pvp-tier-list"
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              Where Winds Meet PVP Tier List
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Competitive weapon rankings for dueling, matchups, and PVP skill
              development
            </p>
          </Link>
          <Link
            href="/guides/weapons/tier-list"
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              Where Winds Meet Weapon Tier List
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Complete weapon rankings by power, ease of use, and versatility
            </p>
          </Link>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Each specialized tier list provides deeper context than can fit in a
          general guide, allowing you to find the exact information you need without
          scrolling through irrelevant content. Whether you are optimizing for
          endgame bosses, preparing for PVP competition, or simply curious about a
          specific weapon, these focused guides have you covered.
        </p>
      </section>
    </article>
  );
}
