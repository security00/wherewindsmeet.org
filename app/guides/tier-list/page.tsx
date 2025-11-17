import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Winds Meet Tier List for PVE & PVP",
  description:
    "Where Winds Meet tier list ranking weapons, paths and playstyles for PVE and PVP with clear explanations, sample builds and tips for adapting to patches.",
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
    </article>
  );
}
