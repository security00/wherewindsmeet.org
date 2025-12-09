import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { BossId } from "@/lib/bosses";
import { bosses } from "@/lib/bosses";
import { buildHreflangAlternates } from "@/lib/hreflang";

export function generateBossMetadata(id: BossId): Metadata {
  const boss = bosses.find((b) => b.id === id);
  if (!boss) {
    return {};
  }

  return {
    title: `${boss.name} Boss Overview – Where Winds Meet`,
    description: `Spoiler-light overview of ${boss.name} in Where Winds Meet with story context, encounter tone, and links to related weapons and builds.`,
    alternates: buildHreflangAlternates(`/guides/bosses/${boss.id}`),
  };
}

export function BossDetail({ bossId }: { bossId: BossId }) {
  const boss = bosses.find((b) => b.id === bossId);

  if (!boss) {
    return null;
  }

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {boss.name} in Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Encounter type: {boss.encounterType}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.tagline}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Treat this page as a spoiler-light companion to the{" "}
            <Link
              href="/guides/weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Where Winds Meet weapons overview
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              build guides
            </Link>
            . When patch notes or new content arrive, the exact mechanics of{" "}
            {boss.name} may evolve, but their story role and overall tone
            usually stay recognizable.
          </p>
          <p className="text-xs text-slate-400">
            Notes: This overview is based on official Where Winds Meet material
            and general action RPG experience. It is written to describe story
            themes and how the encounter tends to feel, not to guarantee exact
            attacks or difficulty. Always rely on in-game experience and patch
            notes first.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <video
              src={boss.backgroundVideo}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover opacity-75"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-10 w-40 sm:h-12 sm:w-48">
              <Image
                src={boss.titleImage}
                alt={boss.name}
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
          </div>
          <p className="text-xs text-slate-400">
            The thumbnail above uses official Where Winds Meet boss showcase
            footage and title art. Exact visuals may change over time as the
            game evolves.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          What this encounter tends to feel like.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Without diving into full boss guides or spoiling specific mechanics,
          it helps to think of {boss.name} as a test of theme and mindset as
          much as raw gameplay. The way the arena, camera, and story beats are
          framed in official footage sets expectations before you ever see a
          health bar.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          As you approach this encounter, pay attention to how the game builds
          atmosphere around it—music, pacing of dialogue, and how NPCs talk
          about {boss.name}. Those cues are often your best hint about whether
          you are about to face a relentless duel, a more methodical
          battlefield, or something closer to an inner trial.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Preparing your weapons and builds.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Because this site is designed as a companion rather than a strict
          checklist, preparation tips focus on principles instead of fixed
          checklists. Before challenging {boss.name}, think about which weapons
          and builds feel most comfortable for you in similar situations, then
          use our guides as a reference rather than a script.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Revisit the{" "}
              <Link
                href="/guides/weapons"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                weapons overview
              </Link>{" "}
              and look for options whose rhythm matches how you like to handle
              sustained pressure, sudden bursts, or long windows of setup.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              In the{" "}
              <Link
                href="/guides/builds"
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                builds section
              </Link>
              , favor archetypes that give you enough sustain and comfort to
              learn patterns. A build you can play calmly often beats a more
              fragile “perfect” option when you are still learning a fight.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Treat your first few clears as scouting runs. Note which parts of{" "}
              {boss.name}
              &apos;s encounter stress you the most—camera, adds, burst
              windows—and adjust weapons and builds specifically around those
              pain points.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          If you later find that in-game experience diverges from how this
          encounter feels here, prioritize your own observations. This page is a
          starting perspective rather than a strict manual.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Watching {boss.name} in motion.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Official footage for {boss.name} is a great way to get a feel for
          pacing and mood without fast‑forwarding through someone else&apos;s
          full clear. Instead of trying to memorize every swing, focus on what
          it feels like to share an arena with them.
        </p>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <video
            src={boss.backgroundVideo}
            controls
            muted
            loop
            className="h-full w-full"
          />
        </div>
        <div className="space-y-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p>
            As you watch, you might pay attention to details like how the arena
            is framed, how quickly attacks chain together, and when the camera
            pulls back or closes in. Those cues tell you a lot about whether the
            encounter rewards patience, aggression, or careful movement.
          </p>
          <p>
            Video links reference official showcase footage. If a clip fails to
            load, it likely means the hosting URL has changed since this page
            was last updated.
          </p>
        </div>
      </section>
    </article>
  );
}
