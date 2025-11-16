import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons, type WeaponId } from "@/lib/weapons";
import { weaponDetails } from "@/lib/weaponDetails";

export function generateWeaponMetadata(id: WeaponId): Metadata {
  const weapon = weapons.find((w) => w.id === id);
  if (!weapon) {
    return {};
  }

  return {
    title: `${weapon.name} Weapon Guide – Where Winds Meet`,
    description: `How ${weapon.name} tends to feel in Where Winds Meet, its typical strengths and tradeoffs, and how it can connect to common builds and tier list thinking.`,
    alternates: {
      canonical: `https://wherewindsmeet.org/guides/weapons/${weapon.id}`,
    },
  };
}

export function WeaponDetail({ weaponId }: { weaponId: WeaponId }) {
  const weapon = weapons.find((w) => w.id === weaponId);

  if (!weapon) {
    return null;
  }

  const detail = weaponDetails[weapon.id];

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {weapon.name} in Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Role: {weapon.role}
          </p>
          {detail && (
            <>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                {detail.slogan}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Difficulty: {detail.difficulty} · Recommended for:{" "}
                {detail.recommendedFor}
              </p>
            </>
          )}
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {weapon.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Treat this page as a practical companion to the{" "}
            <Link
              href="/guides/tier-list"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Where Winds Meet tier list
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              recommended builds
            </Link>
            . When patch notes shift numbers, the core fantasy and feel of{" "}
            {weapon.name} usually stay the same, so you can focus on whether the
            weapon&apos;s rhythm matches how you like to play.
          </p>
          <p className="text-xs text-slate-400">
            Notes: This page is based on official showcases and general action
            RPG experience. It is meant to describe weapon feel and typical
            roles rather than exact numbers. Treat it as a starting viewpoint,
            and always trust in-game experience and patch notes first.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <Image
              src={weapon.officialArt}
              alt={weapon.name}
              fill
              className="object-contain object-center"
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <p className="text-xs text-slate-400">
            Artwork and motion are based on official Where Winds Meet weapon
            showcases. Exact visuals may evolve over time with new patches or
            cosmetics.
          </p>
        </div>
      </section>

      {detail && (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            How {weapon.name} tends to play.
          </h2>
          {detail.positioning.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-slate-200 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {detail && (
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Strengths and upsides.
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {detail.pros.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Tradeoffs and things to watch.
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {detail.cons.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {detail && (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Gentle practice goals for {weapon.name}.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            These are not mandatory combos, just small exercises that help you
            understand how {weapon.name} wants to move and trade blows. Use
            them in low-pressure content first, then slowly bring them into more
            serious runs.
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            {detail.practiceTips.map((tip, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Watching {weapon.name} in motion.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Before committing to a full respec or fresh character, it helps to see
          how a weapon looks and sounds during real combat. The official
          showcase clip below offers a quick preview so you can decide whether{" "}
          {weapon.name} matches your taste.
        </p>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <video
            src={weapon.officialVideo}
            controls
            muted
            loop
            className="h-full w-full"
          />
        </div>
        {detail && (
          <div className="space-y-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
            <p>
              When you watch the clip, you might focus on details like timing,
              distance, and how openings are created rather than only the visual
              effects:
            </p>
            <ul className="space-y-1">
              {detail.videoFocusPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p>
              Video links reference official showcase footage. If a clip fails
              to load, it likely means the hosting URL has changed since this
              page was last updated.
            </p>
          </div>
        )}
      </section>
    </article>
  );
}

