import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes Juni 2026, Palace-Belohnungen (DE)",
  description:
    "Gemeldete Where Winds Meet Codes für Version 1.7, Palace-Belohnungen, Einlösen auf PC/Mobile/PS5 und Hinweise zu abgelaufenen oder geleakten Codes.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "de" }),
};

const exampleCodes = [
  {
    label: "Launch-Bundle",
    status: "Aktiver Code (Beispiel)",
    notes:
      "Typische Launch-Codes liefern Cosmetics, temporäre Buffs und etwas Upgrade-Material.",
  },
  {
    label: "Creator-Belohnung",
    status: "Limitierter Code (Beispiel)",
    notes:
      "Partnerkampagnen teilen oft kurzlebige Codes mit exklusiven visuellen Items oder Social-Spielereien.",
  },
  {
    label: "Entschädigung / Hotfix",
    status: "Kompensations-Code (Beispiel)",
    notes:
      "Bei Serverproblemen oder Bugs verteilen die Entwickler manchmal Codes mit Währungen oder Verbrauchsgütern.",
  },
];

const liveCodes = [
  {
    code: "PALACE0528",
    label: "Gemeldeter Imperial-Palace-Code",
    notes:
      "Von Drittanbieter-Code-Trackern im Version-1.7-/Palace-Zeitfenster gemeldet. Im Spiel prüfen; nicht als offizielle Aktiv-Bestätigung behandeln.",
  },
  {
    code: "PALACEGO",
    label: "Gemeldeter Palace-Launch-Code",
    notes:
      "Als Palace-Update-Belohnung gemeldet. Wenn dein Server ihn ablehnt, als abgelaufen markieren und mit älteren Qinchuan/Hexi-Codes fortfahren.",
  },
  {
    code: "WWMGLtiktok",
    label: "Global-Launch TikTok-Kampagne",
    notes:
      "Über Launch-Socials geteilt; typischerweise kleines Paket an Cosmetics und Fortschritts-Items. In TC-Launch-Posts am 2025-11-17 erwähnt → zeitlich begrenzt.",
  },
  {
    code: "WWMGLyoutube",
    label: "Global-Launch YouTube-Kampagne",
    notes:
      "Schwestercode zur TikTok-Promo. Ähnliche Belohnungen, ebenfalls zeitlich begrenzt – möglichst bald einlösen.",
  },
  {
    code: "WWMGO1114",
    label: "Launch-Day-Code",
    notes:
      "Feiert den Global-Launch am 14.11.2025. Wenn im Spiel als abgelaufen markiert, ist das Eventfenster geschlossen.",
  },
  {
    code: "WWM251115",
    label: "Früher Launch-Eventcode",
    notes:
      "Tauchte in TC-Community-Guides auf. Belohnungen können regional variieren, liefern meist nützliche Earlygame-Materialien.",
  },
  {
    code: "WWMGO1115",
    label: "Folgecode nach Launch",
    notes:
      "Kurz nach dem Hauptlaunch ausgegeben. Einmal pro Account, Ablaufregeln wie üblich.",
  },
];

export default function CodesPage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen">
      <HomeHubBacklink language="de" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
            alt="Where Winds Meet Codes Hintergrund"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Where Winds Meet <span className="text-ink-gold">Codes & Belohnungen</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              Deine zentrale Referenz für Where Winds Meet Codes. Statt Social-Feeds und Screenshots
              abzuklappern, bekommst du eine strukturierte Liste, die aktive und abgelaufene Codes trennt.
            </p>
            <p>Ziel: Zeit sparen und jeden Besuch in echte Fortschritte oder coole Cosmetics verwandeln.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Gemeldete Codes <span className="text-sm font-normal text-slate-400 ml-2">(im Spiel prüfen)</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveCodes.map((entry) => (
            <div
              key={entry.code}
              className="card-jade-token group relative flex flex-col justify-between rounded-2xl p-6 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 bg-emerald-900/60 px-2 py-1 rounded border border-emerald-700/50 shadow-sm shadow-emerald-900/50">
                    Gemeldet
                  </span>
                  <span className="text-lg filter drop-shadow-md">🎁</span>
                </div>
                <div>
                  <code className="block text-xl font-mono font-bold text-emerald-50 bg-black/40 p-2 rounded text-center border border-emerald-900/50 group-hover:border-emerald-500/50 transition-colors select-all shadow-inner">
                    {entry.code}
                  </code>
                  <p className="mt-2 text-sm font-medium text-emerald-200/80">{entry.label}</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-emerald-100/60 border-t border-emerald-900/30 pt-3">
                {entry.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">
          * Codes sind regionsabhängig und zeitlich begrenzt. Immer im Spiel prüfen; Palace-Code-Berichte von Drittseiten sind keine offizielle Garantie.
        </p>
      </section>

      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">Wie Codes verteilt werden</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">📢 Offizielle Events</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              In Trailern und Streams angeteasert, meist nur im Eventfenster gültig (z. B. Launch-Woche).
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">🔧 Kompensation</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Nach Wartungen oder Bugs ausgegeben. Großzügige Ablaufzeit, aber nur einmal pro Account.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">🤝 Creator-Partner</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Einzigartige Codes von Streamern; oft exklusive Cosmetics oder Social-Gadgets.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">Belohnungsarten</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {exampleCodes.map((code) => (
            <div key={code.label} className="card-inactive rounded-2xl p-5">
              <h3 className="text-sm font-bold text-slate-300 mb-1">{code.label}</h3>
              <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-2">{code.status}</p>
              <p className="text-xs leading-relaxed text-slate-400">{code.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">Codes einlösen</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">PC & Mobile</h3>
            <ol className="space-y-3 text-sm text-slate-300">
              <li className="step-manual">
                Öffne das <span className="text-slate-100 font-medium">Systemmenü</span> (Esc).
              </li>
              <li className="step-manual">
                Gehe zu <span className="text-slate-100 font-medium">Einstellungen {'>'} Konto</span>.
              </li>
              <li className="step-manual">
                Wähle <span className="text-slate-100 font-medium">Code einlösen</span>, gib den Code ein und bestätige.
              </li>
              <li className="step-manual">Belohnungen im Spiel-Postfach abholen.</li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">PlayStation</h3>
            <ol className="space-y-3 text-sm text-slate-300">
              <li className="step-manual">Öffne den PlayStation Store.</li>
              <li className="step-manual">Scrolle zu <span className="text-slate-100 font-medium">Mehr {'>'} Code einlösen</span>.</li>
              <li className="step-manual">Gib den Code ein und bestätige.</li>
              <li className="step-manual">Belohnungen im Spiel-Postfach abholen.</li>
            </ol>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Hinweis: Codes sind meist einmal pro Account und können regionsbeschränkt sein.
        </p>
      </section>
    </article>
  );
}
