import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { bosses } from "@/lib/bosses.de";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

export const metadata: Metadata = {
  title: "Where Winds Meet Bossliste – Boss-Übersichten & Themen (DE)",
  description:
    "Spoilerarme Bossliste für Where Winds Meet mit Kurzthemen, Encounter-Typen und Links zu einzelnen Boss-Übersichten, plus Builds/Waffen als Vorbereitung.",
  alternates: buildHreflangAlternates("/guides/bosses", { canonicalLanguage: "de" }),
};

export default function BossesPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet Bosses Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Bossliste · Spoilerarme Boss-Übersichten
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Bosse und Legenden des Jianghu.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Kurzbeschreibungen zu Kampfstil, Story-Ton und passender Vorbereitung. Spoilerarm, damit du schnell entscheiden kannst, wen du als Nächstes angehst.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/de/guides/bosses#faq"
              className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70"
            >
              FAQ: schnelle Antworten
            </Link>
            <Link
              href="/de/news"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Boss-Änderungen im nächsten Update
            </Link>
            <Link
              href="/de/guides/tier-list"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Tierliste (China-Perspektive)
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Beschreibungen basieren auf offiziellen Materialien und gängigen ARPG-Erfahrungen; Fokus ist Erwartungsmanagement, nicht exakte Frame-Daten. Patch Notes gehen stets vor.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss-Galerie & Kurzthemen
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/80">
                <video
                  src={resolveCdnAssetSrc(boss.backgroundVideo).src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster="/background/bg4.webp"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">{boss.name}</h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">Thema: {boss.theme}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/de/guides/bosses/${boss.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    Encounter ansehen
                  </Link>
                  <Link
                    href="/de/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Passende Builds
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg text-emerald-300">❓</span>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Boss-FAQ (kurz)
          </h2>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Mit welchen Bossen sollte ich anfangen?</p>
            <p className="mt-1 text-slate-300">
              Starte mit Story-Bossen in deiner aktuellen Region und taste dich dann an härtere Varianten wie Bloodbath heran, sobald du dich mit
              einer Waffen-Kombi wohlfühlst. Für die ersten Clears helfen Builds mit guter Defensive und zuverlässigen Posture-Break-Tools.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Gibt es Schwächen oder besondere Belohnungen?</p>
            <p className="mt-1 text-slate-300">
              Schwächen und Rewards variieren je nach Boss und können sich mit Updates ändern. Für exakte Drops nutze die In‑Game‑Belohnungsansicht
              (falls verfügbar) und offizielle Patch Notes. Diese Seite bleibt spoilerarm und hilft vor allem bei Stimmung, Erwartung und Vorbereitung.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Was ist der Unterschied zwischen Story-, Bloodbath- und World-Bossen?</p>
            <p className="mt-1 text-slate-300">
              Story-Bosse hängen an Quests und skalieren mit Level; Bloodbath-Versionen haben meist zusätzliche Mechaniken und engere Timings; World-Bosse
              sind große Open-Field-Fights mit geteilten Rewards. Für Bloodbath lohnt mehr Survivability, für World-Bosse oft mehr Mobility.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
