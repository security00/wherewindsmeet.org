import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { BossId } from "@/lib/bosses";
import { bosses } from "@/lib/bosses";
import { buildHreflangAlternates } from "@/lib/hreflang";

export function generateBossMetadata(id: BossId, canonicalLanguage: "en" | "de" = "en"): Metadata {
  const boss = bosses.find((b) => b.id === id);
  if (!boss) {
    return {};
  }

  return {
    title: `${boss.name} Boss-Übersicht – Where Winds Meet`,
    description: `Spoilerarme Übersicht zu ${boss.name}: Story-Ton, Encounter-Gefühl und Links zu Waffen/Builds.`,
    alternates: buildHreflangAlternates(`/guides/bosses/${boss.id}`, { canonicalLanguage }),
  };
}

export function BossDetail({ bossId, localePrefix = "" }: { bossId: BossId; localePrefix?: string }) {
  const boss = bosses.find((b) => b.id === bossId);

  if (!boss) {
    return null;
  }
  const base = localePrefix || "";

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {boss.name} in Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Encounter-Typ: {boss.encounterType}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.tagline}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Diese Seite ist eine spoilerarme Ergänzung zur{" "}
            <Link
              href="/guides/weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Waffen-Übersicht
            </Link>{" "}
            und den{" "}
            <Link
              href="/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Build-Guides
            </Link>
            . Patch Notes können die Mechanik von {boss.name} verändern; Story-Ton und Atmosphäre bleiben meist erkennbar.
          </p>
          <p className="text-xs text-slate-400">
            Hinweis: Grundlage sind offizielle Materialien und ARPG-Erfahrung. Fokus auf Stimmung/Erwartung, nicht auf exakte Frames. Im Spiel und Patch Notes haben Vorrang.
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
          Wie sich der Kampf anfühlt.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Denke an {boss.name} als Stimmungstest: Arena, Musik, Kamera und NPC-Dialoge verraten, ob dich ein hartes Duell, ein methodisches Schlachtfeld oder eher eine innere Prüfung erwartet.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Vorbereitung: Waffen & Builds.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Diese Seite dient als Begleiter, kein strenger Fahrplan. Denke vor {boss.name} daran, welche Waffen/Builds dir in ähnlichen Situationen am besten liegen, und nutze die Guides als Referenz, nicht als Skript.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Sieh dir die{" "}
              <Link
                href={`${base}/guides/weapons`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Waffen-Übersicht
              </Link>{" "}
              an und suche Optionen, deren Rhythmus zu deinem Umgang mit Dauer-Druck, Burstfenstern oder längeren Setups passt.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              In den{" "}
              <Link
                href={`${base}/guides/builds`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Build-Guides
              </Link>
              , wähle Archetypen mit genug Sustain und Komfort, um Muster zu lernen. Ein Build, den du ruhig spielen kannst, schlägt oft fragile „Perfekt“-Varianten beim Lernen.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Die ersten Clears sind Scouting: Notiere, was dich am meisten stresst (Kamera, Adds, Burstfenster) und passe Waffen/Builds gezielt an diese Pain Points an.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          Weicht das Spielgefühl später ab, zählen deine eigenen Beobachtungen. Diese Seite ist eine Einstiegsperspektive, kein striktes Handbuch.
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
