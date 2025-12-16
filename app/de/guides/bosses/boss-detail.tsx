import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { BossId } from "@/lib/bosses";
import { bosses } from "@/lib/bosses.de";
import { buildHreflangAlternates } from "@/lib/hreflang";

export function generateBossMetadata(id: BossId): Metadata {
  const boss = bosses.find((b) => b.id === id);
  if (!boss) {
    return {};
  }

  return {
    title: `${boss.name} Boss-Übersicht – Where Winds Meet`,
    description: `Spoilerarme Übersicht zu ${boss.name}: Story-Ton, Encounter-Gefühl und Links zu Waffen/Builds.`,
    alternates: buildHreflangAlternates(`/guides/bosses/${boss.id}`, { canonicalLanguage: "de" }),
  };
}

export function BossDetail({ bossId }: { bossId: BossId }) {
  const boss = bosses.find((b) => b.id === bossId);

  if (!boss) {
    return null;
  }

  const base = "/de";

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {boss.name} – Boss-Übersicht
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
              href={`${base}/guides/weapons`}
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Waffen-Übersicht
            </Link>{" "}
            und zu den{" "}
            <Link
              href={`${base}/guides/builds`}
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Build-Guides
            </Link>
            . Patch Notes können Mechaniken verändern; Story-Ton und Atmosphäre bleiben meist erkennbar.
          </p>
          <p className="text-xs text-slate-400">
            Hinweis: Grundlage sind offizielle Materialien und ARPG-Erfahrung. Fokus auf Stimmung/Erwartung, nicht auf exakte Frames. In-Game-Erfahrung und Patch Notes haben Vorrang.
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
            Vorschaubild basiert auf offiziellen Boss-Showcase-Clips und Titel-Art von Where Winds Meet. Die Optik kann sich mit Updates im Laufe der Zeit ändern.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Wie sich der Kampf anfühlt
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Sieh {boss.name} als Stimmungstest: Arena, Musik, Kamera und NPC-Dialoge zeigen dir schnell, ob dich ein hartes Duell, ein methodisches Schlachtfeld oder eher eine innere Prüfung erwartet.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Vorbereitung: Waffen & Builds
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Diese Seite ist ein Begleiter, kein strenger Fahrplan. Denk vor {boss.name} daran, welche Waffen/Builds dir in ähnlichen Situationen am besten liegen – und nutze die Guides als Referenz, nicht als Skript.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Schau dir die{" "}
              <Link
                href={`${base}/guides/weapons`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Waffen-Übersicht
              </Link>{" "}
              an und wähle Optionen, deren Rhythmus zu deinem Umgang mit Dauer-Druck, Burstfenstern oder längeren Setups passt.
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
              , wähle Archetypen mit genug Sustain und Komfort, um Muster zu lernen. Ein Build, den du ruhig spielen kannst, schlägt beim Lernen oft fragile „Perfekt“-Varianten.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Die ersten Clears sind Aufklärung: Notier dir, was dich am meisten stresst (Kamera, Adds, Burstfenster) und pass Waffen/Builds gezielt an diese Problemstellen an.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          Wenn sich das Spielgefühl später anders anfühlt, zählen deine eigenen Beobachtungen. Diese Seite ist eine Einstiegsperspektive, kein striktes Handbuch.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          {boss.name} in Bewegung sehen
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Offizielles Material zu {boss.name} ist ideal, um Tempo und Stimmung zu erfassen, ohne dich durch einen kompletten Clear zu spulen. Versuch nicht, jeden einzelnen Swing auswendig zu lernen – achte darauf, wie es sich anfühlt, die Arena mit diesem Boss zu teilen.
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
            Beim Zuschauen lohnt es sich, auf Details wie Bildausschnitt, Angriffsketten und Kameradistanzen zu achten. Solche Hinweise sagen oft mehr darüber aus, ob ein Encounter Geduld, Aggression oder präzises Movement belohnt, als jede einzelne Zahlenangabe.
          </p>
          <p>
            Videolinks verweisen auf offizielles Showcase-Material. Wenn ein Clip nicht lädt, hat sich vermutlich die Hosting-URL geändert, seit diese Seite zuletzt aktualisiert wurde.
          </p>
        </div>
      </section>
    </article>
  );
}
