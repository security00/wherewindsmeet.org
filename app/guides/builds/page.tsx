import type { Metadata } from "next";

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
      "A fast-paced Where Winds Meet build that darts in and out of melee range, stacking mobility tools and burst windows to overwhelm enemies before they can retaliate.",
  },
  {
    name: "Riverflow Sentinel",
    role: "Sustained frontline bruiser",
    description:
      "A patient, defensive Where Winds Meet build that trades peak burst for constant pressure, self-sustain, and reliable crowd control in busy encounters.",
  },
  {
    name: "Mistveil Archer",
    role: "Ranged pressure and control",
    description:
      "A ranged Where Winds Meet build that emphasizes safe positioning, chip damage, and soft crowd control to keep dangerous foes pinned at comfortable distances.",
  },
];

export default function BuildsPage() {
  return (
    <article className="space-y-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet builds that feel powerful and personal.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          The best Where Winds Meet builds do more than chase numbers. They
          translate your favorite wuxia fantasy into a reliable combat loop that
          fits your schedule, reflexes, and patience for experimentation. This
          page gathers flexible Where Winds Meet builds for solo progression,
          co-op adventures, and light PVP, focusing on options that remain fun
          even when balance patches shift the meta. Instead of forcing you into
          one narrow route, each build explains core principles so you can tweak
          details without losing its identity.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          When you scan typical build lists, it is easy to feel overwhelmed by
          walls of stats and abbreviations. Here, every Where Winds Meet build
          begins with a short &quot;how it feels&quot; description before any
          numbers appear. You will learn whether a setup rewards aggression or
          patience, how punishing it is when you miss an input, and what kind of
          controller or mouse and keyboard players usually enjoy it most. That
          way you can quickly rule out styles that clash with how you like to
          experience Where Winds Meet.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          Every build on this page is designed to work as a long-term home for
          your character, not a fragile trend that collapses after one patch.
          When major updates arrive, notes will highlight how popular Where
          Winds Meet builds change, which talents or passives deserve respec
          priority, and when it might be worth pivoting to a new archetype you
          have not tried before. You will never be asked to throw months of
          progress away just because a new tier list claims something else is
          suddenly mandatory.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Core principles behind strong Where Winds Meet builds.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Before diving into specific setups, it helps to understand why certain
          Where Winds Meet builds feel so much better than others. Strong builds
          usually align three elements: a clear combat loop, a coherent stat
          plan, and realistic expectations about content. If any of these pieces
          fight each other, you end up with a character that works only in
          perfect circumstances. The builds described here aim for consistency,
          emphasizing skills that cover mistakes and complement the open world
          pacing of Where Winds Meet.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A clear combat loop means you know what to do in the first five
          seconds of any fight. That might be closing the gap with a mobility
          tool, placing a debuff, then flowing through a short combo into a safe
          disengage. Every Where Winds Meet build listed here spells out that
          initial sequence so you can practice it in low pressure battles
          before you step into more demanding content. Once the loop feels
          natural, you can start layering advanced tricks on top.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A coherent stat plan keeps you from spreading points too thinly. It is
          tempting to chase every exciting number you see on the character sheet
          but most Where Winds Meet builds shine when two or three stats take
          priority. Focused investment turns okay weapons into standouts and
          prevents frustrating plateaus. On this page, each build suggests a
          primary and secondary focus, along with a short note about diminishing
          returns so you know when to stop.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Example Where Winds Meet build archetypes.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {archetypes.map((archetype) => (
            <div
              key={archetype.name}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {archetype.name}
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-emerald-300">
                {archetype.role}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {archetype.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          These archetypes are starting points, not strict templates. As you
          read through the full Where Winds Meet builds, you will see how each
          concept can flex depending on which weapons, traits, and codes you
          have access to. The Stormblade Wanderer might lean more heavily into
          defensive tools if you frequently play with newer friends, while the
          Mistveil Archer can become surprisingly aggressive when paired with
          crowd control oriented partners. The goal is to give you a mental
          model that stays useful even when individual numbers change.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Adapting Where Winds Meet builds for solo, co-op, and PVP.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A common mistake is trying to use one rigid setup for every mode.
          Instead, think of your favorite Where Winds Meet build as a core that
          branches into playstyle variants. The solo version might emphasize
          sustain, emergency tools, and forgiving rotations. The co-op variant
          may trim some defenses to amplify group buffs. The PVP flavor might
          sacrifice comfort in favor of unpredictable movement and burst. You do
          not need three separate characters; small adjustments in talents,
          gear, and codes often suffice.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          On this page, each major Where Winds Meet build points out which
          pieces feel essential and which are flexible. For example, a
          Riverflow Sentinel might always want its core defensive combo, but can
          swap one or two utility tools depending on the lobby. A Mistveil
          Archer might change how it opens fights in PVP while keeping a
          familiar mid-fight rhythm in PVE. By separating &quot;must have&quot;
          pieces from &quot;nice to have&quot; additions, you gain confidence to
          experiment without losing the heart of your build.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          As the Where Winds Meet meta evolves, these adaptation notes will
          often save more time than chasing the newest trending setup. When
          patch notes land, you can skim which key interactions changed for your
          chosen archetype, adjust stats or skill priorities accordingly, and
          then spend the rest of the evening actually playing instead of
          rebuilding from scratch. The result is a more stable relationship with
          your Where Winds Meet builds and less anxiety about every balance
          tweak.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Planning your next steps with Where Winds Meet builds.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you are unsure where to start, pick one archetype that matches your
          fantasy and commit to playing it for a few sessions. Take notes on
          what feels great and what feels awkward. Then return to this page and
          adjust based on the troubleshooting sections baked into each Where
          Winds Meet build. Often, a small tweak to rotation timing, camera
          distance, or keybind layout solves more problems than a full respec.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          When you hit a wall, resist the urge to abandon your character. Look
          at how your current Where Winds Meet build lines up with the tier list
          and codes pages. Maybe a newly available reward will smooth out an
          awkward phase of progression. Maybe shifting one stat breakpoint will
          make a favorite combo feel much more responsive. By treating this
          builds page as part of a wider toolkit, you can keep refining your
          experience instead of starting over from zero.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Above all, remember that the point of any Where Winds Meet build is to
          create memorable moments in Jianghu. Whether that means slicing
          through crowds with a storm of blades, anchoring friends in a chaotic
          boss arena, or dancing along rooftops while enemies scramble to reach
          you, the right build is the one that makes you excited to log in
          again. Let this page guide you toward that feeling, then keep
          adjusting until the character on screen matches the wuxia hero you
          imagined.
        </p>
      </section>
    </article>
  );
}
