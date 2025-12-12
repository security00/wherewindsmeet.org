import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Einsteiger-Guide & Erste-Woche-Roadmap (DE)",
  description:
    "Praktischer Where Winds Meet Einsteiger-Guide: vom ersten Start bis zum ersten Wochenreset mit sinnvollen Settings, Prioritäten und Ressourcentipps.",
  alternates: buildHreflangAlternates("/guides/new-players", { canonicalLanguage: "de" }),
};

const chapters = [
  {
    id: "setup",
    title: "Setup & Steuerung",
    image: "/illustrations/settings.png",
    steps: [
      {
        id: "step-1",
        title: "Start-Settings anpassen",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              WWM startet mit mehreren Setup-Screens. Ein solides Basis-Setup spart Neustarts und Ärger.
            </p>
            <div className="space-y-2">
              <details className="group rounded-lg border border-slate-800 bg-slate-950/50 open:bg-slate-900/50">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200 transition hover:text-emerald-400">
                  <span>Empfohlene Einstellungen</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-300 space-y-2 border-t border-slate-800/50 pt-2">
                  <p><span className="text-emerald-400 font-semibold">Guidance:</span> Detailed (Marker sichtbar lassen)</p>
                  <p><span className="text-emerald-400 font-semibold">Control Mode:</span> ARPG (Kamera folgt der Bewegung)</p>
                  <p><span className="text-emerald-400 font-semibold">Difficulty:</span> Recommended (ausgewogene Basis)</p>
                  <p><span className="text-emerald-400 font-semibold">Social:</span> Shared Journey (Coop aktiviert)</p>
                </div>
              </details>
            </div>
          </>
        ),
      },
      {
        id: "step-2",
        title: "Kampf-Setup",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              Lege <span className="text-emerald-400">Defense auf die Maus</span> und <span className="text-red-400">Offense auf die Tastatur</span>.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Maus</div>
                <div className="flex justify-between"><span className="text-slate-300">LMB</span> <span className="text-slate-50">Leichter Angriff</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Side 1</span> <span className="text-emerald-400">Parieren</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Side 2</span> <span className="text-emerald-400">Ausweichen</span></div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tastatur</div>
                <div className="flex justify-between"><span className="text-slate-300">Q / E</span> <span className="text-red-400">Skills</span></div>
                <div className="flex justify-between"><span className="text-slate-300">1 - 4</span> <span className="text-purple-400">Mystic Arts</span></div>
                <div className="flex justify-between"><span className="text-slate-300">F</span> <span className="text-blue-400">Movement</span></div>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "basics",
    title: "Grundlagen",
    image: "/illustrations/combat.png",
    steps: [
      {
        id: "step-3",
        title: "Charaktererstellung",
        content: (
          <p className="text-slate-300">
            Wähle ein <span className="text-ink-gold font-serif">Aspiration Talent</span>, das zu deinem Spielstil passt (z. B. Drunken Precision für Minigames). Min-Max ist hier egal.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "HUD lesen",
        content: (
          <ul className="space-y-2 text-sm text-slate-300 list-disc pl-4 marker:text-emerald-500">
            <li><strong className="text-slate-100">Qi-Leiste:</strong> Wenn sie bricht, kannst du nicht blocken – Abstand nehmen.</li>
            <li><strong className="text-slate-100">Feind-Qi:</strong> Wenn sie bricht, öffnet sich ein Execution-Fenster.</li>
            <li><strong className="text-slate-100">Mystic Arts:</strong> Flexible Skills für CC oder Rätsel.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "journey",
    title: "Deine Reise",
    image: "/illustrations/exploration.png",
    steps: [
      {
        id: "step-5",
        title: "Hauptstory zuerst",
        content: (
          <div className="bg-emerald-950/30 border-l-2 border-emerald-500 p-4 text-sm text-emerald-100/80">
            <strong className="block text-emerald-400 mb-1">Goldene Regel</strong>
            Folge der Hauptquest, bis du auf ein Levelcap stößt. Erst dann in Sidequests abbiegen, damit Systems wie Breakthroughs rechtzeitig freigeschaltet werden.
          </div>
        ),
      },
      {
        id: "step-9",
        title: "Explorations-Gewohnheiten",
        content: (
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🗿</span>
              <span><strong className="text-slate-100">Boundary Stones</strong> früh freischalten für Fast Travel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🔥</span>
              <span>Wayfarers an <strong className="text-slate-100">Lagerfeuern</strong> ansprechen, um die Karte aufzudecken.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🎒</span>
              <span>Alles mitnehmen. Kräuter/Erze werden später Flaschenhälse.</span>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "routine",
    title: "Wachstum & Routine",
    image: "/illustrations/growth.png",
    steps: [
      {
        id: "step-6",
        title: "Tägliche Checkliste",
        content: (
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Belohnungen der <strong className="text-slate-100">Xiake Journey</strong> abholen</div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">3 schnelle <strong className="text-slate-100">Jianghu Orders</strong> erledigen</div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300"><strong className="text-slate-100">Mental Energy & Stamina</strong> ausgeben</div>
            </div>
          </div>
        ),
      },
      {
        id: "step-7",
        title: "Wöchentliche Prioritäten",
        content: (
          <p className="text-slate-300 text-sm">
            Caps sind wichtiger als Botengänge. Priorisiere <span className="text-ink-gold">Weekly Dungeons</span> und kaufe limitierte Shop-Items (Innere Künste, Upgrade-Boxen) zuerst.
          </p>
        ),
      },
      {
        id: "step-8",
        title: "Ressourcen-Gewohnheiten",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Gear recyceln</div>
              <p className="text-xs text-slate-400">Zerlegen von ungenutzter Ausrüstung gibt permanente Account-Power.</p>
            </div>
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Nicht horten</div>
              <p className="text-xs text-slate-400">Materialien nutzen und upgraden. Power jetzt = schnelleres Farmen später.</p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function NewPlayersDePage() {
  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background/30.webp"
            alt="Where Winds Meet Beginner Guide Hintergrund"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        </div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-4xl space-y-4 px-6 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Einsteiger · Woche 1</p>
            <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">Where Winds Meet Einsteiger-Guide</h1>
            <p className="text-slate-200 text-lg leading-relaxed">
              Von der ersten Minute bis zum ersten Wochenreset: sinnvolle Einstellungen, sichere Story-Reihenfolge, tägliche/wöchentliche
              Routine und Ressourcenpriorität – ohne Datenflut.
            </p>
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-emerald-100">Schnellstart</span>
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100">Einstellungen</span>
              <span className="rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-amber-100">Dailies & Weeklies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-6xl space-y-10 px-6 sm:px-8 -mt-12">
        {chapters.map((chapter) => (
          <article
            key={chapter.id}
            className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/50 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Kapitel</p>
                <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">{chapter.title}</h2>
              </div>
              <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner shadow-slate-950/40 sm:w-52">
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {chapter.steps.map((step) => (
                <div
                  key={step.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-inner shadow-slate-950/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-emerald-500/20 text-center text-xs font-bold text-emerald-200 ring-1 ring-emerald-400/40">
                      {step.id.replace(/\D/g, "") || "•"}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                      <div className="text-sm leading-relaxed text-slate-200">{step.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Helpful Links */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 pb-12 space-y-4">
        <h3 className="text-lg font-semibold text-slate-100">Nächste Schritte</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/de/guides/wall-puzzle"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 hover:border-emerald-400/50 hover:text-emerald-100 transition"
          >
            🧩 Wandrätsel (Echoes of Old Battles) – genaue Steine & Pose
          </Link>
          <Link
            href="/de/guides/woven-with-malice"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 hover:border-emerald-400/50 hover:text-emerald-100 transition"
          >
            🧶 Woven with Malice – Zeitfenster, Falle, Fixes
          </Link>
          <Link
            href="/de/guides/free-outfits"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 hover:border-emerald-400/50 hover:text-emerald-100 transition"
          >
            👗 Gratis-Outfits & Kosmetik ohne Kosten
          </Link>
        </div>
      </section>
    </div>
  );
}
