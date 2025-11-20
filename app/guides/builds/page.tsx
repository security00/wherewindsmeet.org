import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Winds Meet Best Builds & Combat Tips",
  description:
    "Flexible Where Winds Meet builds for solo story, co-op and PVP with smart stat spreads, weapon pairings and rotation tips tuned to real players.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/builds",
  },
};

const archetypes = [
  {
    name: "Stormblade Wanderer",
    role: "Aggressive melee carry",
    description:
      "A fast-paced setup that darts in and out of melee range, stacking mobility tools and burst windows to overwhelm enemies before they can retaliate.",
  },
  {
    name: "Riverflow Sentinel",
    role: "Sustained frontline bruiser",
    description:
      "A patient, defensive style that trades peak burst for constant pressure, self-sustain, and reliable crowd control in busy encounters.",
  },
  {
    name: "Mistveil Archer",
    role: "Ranged pressure and control",
    description:
      "A ranged configuration that emphasizes safe positioning, chip damage, and soft crowd control to keep dangerous foes pinned at comfortable distances.",
  },
];

export default function BuildsPage() {
  return (
    <article className="min-h-screen space-y-12 bg-ink-wash pb-20">
      {/* Hero Section with Vignette */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background/bg4.png"
            alt="Where Winds Meet builds background art"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          {/* Vignette Mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        {/* Vertical Text Accents */}
        <div className="absolute right-8 top-1/4 hidden text-vertical text-4xl font-bold text-slate-50/10 lg:block font-serif select-none">
          武侠攻略
        </div>
        <div className="absolute left-8 top-1/3 hidden text-vertical text-3xl font-bold text-slate-50/10 lg:block font-serif select-none">
          千变万化
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:w-2/3">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl font-serif">
            Builds that <span className="text-ink-gold">feel powerful</span> and{" "}
            <span className="text-ink-jade">personal</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/90 text-shadow-sm font-sans">
            The best Where Winds Meet builds do more than chase numbers. They
            translate your favorite wuxia fantasy into a reliable combat loop
            that fits your schedule, reflexes, and patience for experimentation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              Solo Progression
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              Co-op Adventures
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              PVP Tactics
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-6 sm:px-8">
        {/* Intro Text */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-slate-300 font-sans">
            This page gathers flexible setups focusing on options that remain fun
            even when balance patches shift the meta. Instead of forcing you into
            one narrow route, each guide explains core principles so you can
            tweak details without losing its identity.
          </p>
          <div className="divider-ink" />
        </section>

        {/* Core Principles - Organic Layout */}
        <section className="bg-texture-noise relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 border-brush inline-block pb-2 font-serif">
                Core principles behind strong combat setups.
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans">
                Strong builds usually align three elements: a clear combat loop, a
                coherent stat plan, and realistic expectations about content. If
                any of these pieces fight each other, you end up with a character
                that works only in perfect circumstances.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans">
                The guides described here aim for consistency, emphasizing skills
                that cover mistakes and complement the open world pacing of Where
                Winds Meet.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-2xl">
                  ⚔️
                </div>
                <div>
                  <h3 className="font-bold text-ink-gold font-serif text-lg">Clear Combat Loop</h3>
                  <p className="mt-2 text-sm text-slate-400 font-sans">
                    Know what to do in the first five seconds. Close the gap,
                    debuff, combo, disengage. Practice this rhythm until it feels
                    automatic.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-ink-gold font-serif text-lg">Coherent Stat Plan</h3>
                  <p className="mt-2 text-sm text-slate-400 font-sans">
                    Don&apos;t spread points too thinly. Focus on two or three
                    primary stats to turn okay weapons into standouts and prevent
                    frustrating plateaus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Archetypes Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif">
              Example Build Archetypes
            </h2>
            <p className="mt-3 text-slate-400 font-sans">
              Starting points that can flex depending on your available gear.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {archetypes.map((archetype) => (
              <div
                key={archetype.name}
                className="card-tablet bg-texture-noise group relative flex flex-col justify-between rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-ink-jade transition-colors font-serif">
                    {archetype.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-emerald-500/80 font-sans">
                    {archetype.role}
                  </p>
                  <div className="my-4 h-px w-12 bg-slate-700/50" />
                  <p className="text-sm leading-relaxed text-slate-300/90 font-sans">
                    {archetype.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="btn-seal text-xs">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-ink" />

        {/* Adaptation Section */}
        <section className="bg-texture-noise rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg">
          <h2 className="text-xl font-bold tracking-tight text-slate-50 sm:text-2xl border-brush inline-block pb-2 mb-6 font-serif">
            Adapting for solo, co-op, and PVP.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">Solo Play</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Emphasize sustain, emergency tools, and forgiving rotations. You
                are your own tank and healer.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">Co-op Groups</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Trim defenses to amplify group buffs. Focus on synergy and
                creating openings for teammates.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">PVP Combat</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Sacrifice comfort for unpredictable movement and burst. Map
                knowledge and sharp reactions are key.
              </p>
            </div>
          </div>
        </section>

        {/* Community Archetypes */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl border-brush inline-block pb-2 font-serif">
            Popular Community Archetypes
          </h2>

          <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 sm:h-64 shadow-inner">
            <Image
              src="/background/builds.png"
              alt="Where Winds Meet builds overview art"
              fill
              className="object-cover object-center opacity-60 hover:scale-105 transition-transform duration-700"
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="max-w-xl text-sm text-slate-200 text-shadow-sm font-sans">
                Long-form Traditional Chinese guides break the martial arts system
                into clear families. Understanding these goals helps you adapt as
                the meta changes.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 */}
            <article className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">裂石·威</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Tank</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Mo Blade + Spear Frontline
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Built around super armor and damage reduction. Holds aggro and keeps runs stable for learning groups.
              </p>
            </article>

            {/* Card 2 */}
            <article className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">鳴金·影</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">DPS</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Bleed-focused Sword + Spear
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                High-APM setup that stacks DoTs before detonating. Demands strict rotations but offers ceiling damage.
              </p>
            </article>

            {/* Card 3 */}
            <article className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">鳴金·虹</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Hybrid</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Starter Sword + Spear
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Beginner-friendly hybrid emphasizing stamina management and straightforward combos. Great for learning.
              </p>
            </article>

            {/* Card 4 */}
            <article className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">牽絲·玉</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Control</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Umbrella + Fan Ranged
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Long-range sustained damage and crowd control. Manage resources while your umbrella attacks automatically.
              </p>
            </article>

            {/* Card 5 */}
            <article className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">牽絲·霖</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Support</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Pure Healer Umbrella
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Dedicated support focusing on keeping teammates alive. Low damage but essential for tough content.
              </p>
            </article>

            {/* Card 6 */}
            <article className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">破竹·風</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Assassin</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Dual Blades + Rope Dart
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Hyper-mobile melee. Dive in, punish, and disengage. Rewards sharp reactions and map knowledge.
              </p>
            </article>
          </div>
        </section>
      </div>
    </article>
  );
}
