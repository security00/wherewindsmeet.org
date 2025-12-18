import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveMapEmbed } from "@/components/InteractiveMapEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const mapgenieUrl = "https://mapgenie.io/where-winds-meet/maps/world";
const sixFastUrl = "https://yysls-map.6fast.com/yysls/maps/qinghe?lang=en";

export const metadata: Metadata = {
  title: "Where Winds Meet Interaktive Karte (MapGenie + CN-Alternative)",
  description:
    "Nutze eine interaktive Where Winds Meet Karte, um NPCs, Truhen, Sammelobjekte, Teleports und Farm-Routen zu finden. MapGenie + CN-Alternative inklusive kurzem FAQ.",
  alternates: buildHreflangAlternates("/tools/interactive-map", { canonicalLanguage: "de" }),
};

export default function InteractiveMapPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Interaktive Karte</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Wenn du einen NPC, eine Truhe, Sammelobjekte, Teleport-Punkte oder eine Aktivität schnell finden willst,
            ist eine interaktive Karte oft schneller als ein langer Walkthrough.
          </p>
          <p>
            Diese Seite bettet zwei beliebte Kartenoptionen ein und ergänzt ein kurzes FAQ, damit sie auch beim ersten
            Google-Besuch direkt hilft.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <InteractiveMapEmbed
          options={[
            {
              id: "mapgenie",
              label: "MapGenie (Global)",
              src: mapgenieUrl,
              title: "Where Winds Meet Interaktive Karte - MapGenie",
            },
            {
              id: "6fast",
              label: "6Fast (CN alt)",
              src: sixFastUrl,
              title: "Where Winds Meet Interaktive Karte - 6Fast",
              referrerPolicy: "no-referrer",
            },
          ]}
        />

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          <p>
            Diese Karten stammen von Drittanbietern. Wenn ein Embed nicht lädt (Region, Cookies oder Downtime), öffne
            die Karte direkt:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a
                href={mapgenieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                MapGenie (öffnet in neuem Tab)
              </a>
            </li>
            <li>
              <a
                href={sixFastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                6Fast (öffnet in neuem Tab)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">FAQ</h2>

        <div className="space-y-3">
          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Welche Karte ist besser: MapGenie oder 6Fast?
            </summary>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>
                Starte mit MapGenie, wenn du eine englischfreundliche Oberfläche und ein vertrautes UI willst. Nimm 6Fast
                als Backup oder zum Gegenchecken von CN-Routen.
              </p>
              <p className="text-xs text-slate-400">
                Abdeckung und Pin-Genauigkeit ändern sich – wichtige Locations im Zweifel im Spiel verifizieren.
              </p>
            </div>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Synchronisiert die Karte meinen Ingame-Fortschritt?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Meistens nicht. Die meisten interaktiven Where Winds Meet Karten sind Community-Tools: du kannst Pins
              manuell abhaken, aber sie lesen deinen Charakterfortschritt in der Regel nicht automatisch aus.
            </p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Warum sehe ich Werbung oder Popups im Embed?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Das eingebettete Content wird vom Anbieter kontrolliert. Diese Seite blendet keine Ads ein, kann aber Ads
              innerhalb der Drittanbieter-Karte nicht entfernen.
            </p>
          </details>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8 md:grid-cols-3">
        <div className="space-y-2 md:col-span-2">
          <h2 className="text-xl font-bold text-slate-50">Als Nächstes: Karte + Guides kombinieren</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Interaktive Karten sind am besten zusammen mit einer kurzen Checkliste: Location schnell finden, dann in
            einem Guide Trigger, Anforderungen und typische Bugs nachschlagen.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            href="/de/tools/reset-timer"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Reset Timer →
          </Link>
          <Link
            href="/de/tools/checklist"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Daily & Weekly Checkliste →
          </Link>
          <Link
            href="/de/guides/npc-list"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            NPC-Liste & Old Friends →
          </Link>
          <Link
            href="/de/guides/bosses"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Boss-Guide-Hub →
          </Link>
          <Link
            href="/de/guides/items"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Items & Materialien →
          </Link>
        </div>
      </section>
    </article>
  );
}
