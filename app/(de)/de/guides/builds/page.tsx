import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Beste Builds – PvE & PvP Loadouts (DE)",
  description:
    "Flexible Where Winds Meet Builds für PvE und PvP mit sinnvollen Stat-Plänen, Waffen-Paarungen und Rotationstipps – abgestimmt auf echte Spieler.",
  alternates: buildHreflangAlternates("/guides/builds", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Beste Builds – PvE & PvP Loadouts",
    description:
      "Flexible Builds für PvE und PvP mit sinnvollen Stat-Plänen, Waffen-Kombos und Rotationstipps.",
    url: `${baseUrl}/de/guides/builds`,
  },
  twitter: {
    title: "Where Winds Meet Beste Builds – PvE & PvP Loadouts",
    description:
      "Builds mit Komfort, Konstanz und Stil statt reiner Tabellenwerte.",
  },
};

const archetypes = [
  {
    name: "Stormblade Wanderer",
    role: "Aggressiver Nahkampf-Carry",
    description:
      "Schnelles Rein/Raus, stapelt Mobilität und Burst, um Gegner zu überfahren, bevor sie reagieren.",
  },
  {
    name: "Riverflow Sentinel",
    role: "Frontliner mit Sustain",
    description:
      "Geduldiger, defensiver Stil: weniger Peak-Burst, mehr konstanter Druck, Self-Sustain und verlässliche Kontrolle in chaotischen Fights.",
  },
  {
    name: "Mistveil Archer",
    role: "Fernkampf-Druck & Kontrolle",
    description:
      "Betont sicheres Positioning, Chip Damage und Soft-CC, damit gefährliche Ziele auf Abstand bleiben.",
  },
];

export default function BuildsDePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/builds`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: `${baseUrl}/de`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${baseUrl}/de/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Builds",
          item: `${baseUrl}/de/guides/builds`,
        },
      ],
    },
  ];

  return (
    <article className="min-h-screen space-y-12 bg-ink-wash pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet Builds Hintergrund"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        {/* Vertikale Akzente */}
        <div className="absolute right-8 top-1/4 hidden text-vertical text-4xl font-bold text-slate-50/10 lg:block font-serif select-none">
          Kampfkunst‑Guides
        </div>
        <div className="absolute left-8 top-1/3 hidden text-vertical text-3xl font-bold text-slate-50/10 lg:block font-serif select-none">
          Endlos anpassbar
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:w-2/3">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl font-serif">
            Builds, die sich <span className="text-ink-gold">stark</span> und <span className="text-ink-jade">persönlich</span> anfühlen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/90 text-shadow-sm font-sans">
            Die besten Where Winds Meet Builds jagen nicht nur Zahlen. Gute Builds übersetzen deine Lieblings-Wuxia-Fantasie in einen verlässlichen
            Kampfrhythmus, der zu deinem Zeitplan, deinen Reflexen und deiner Experimentierlust passt.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200/90 text-shadow-sm font-sans">
            Nutze dies als kompakte PvE- und PvP-Build-Übersicht, bevor du tiefer in Waffen-Guides, Pfadwahl und Rotationen einsteigst.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              Solo-Fortschritt
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              Koop-Abenteuer
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              PvP-Taktiken
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-6 sm:px-8">
        {/* Intro Text */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-slate-300 font-sans">
            Diese Seite bündelt flexible Setups, die auch dann Spaß machen, wenn Patches das Meta verschieben. Statt dich in eine Route zu zwingen, erklärt jeder Guide die Kernprinzipien, damit du Details anpassen kannst, ohne den Charakter zu „zerbrechen“.
          </p>
          <div className="divider-ink" />
        </section>

        {/* Core Principles */}
        <section className="bg-texture-noise relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 border-brush inline-block pb-2 font-serif">
                Kernprinzipien starker Kampfsysteme.
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans">
                Starke Builds verbinden drei Dinge: klarer Kampfrhythmus, kohärenter Stat-Plan und realistische Content-Erwartung. Wenn eines dagegen arbeitet, funktioniert der Char nur unter Idealbedingungen.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans">
                Die hier gezeigten Setups priorisieren Konstanz und verzeihende Skills, die Fehler abfedern und zum offenen Welttempo passen.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-2xl">
                  ⚔️
                </div>
                <div>
                  <h3 className="font-bold text-ink-gold font-serif text-lg">Klarer Kampfrhythmus</h3>
                  <p className="mt-2 text-sm text-slate-400 font-sans">
                    Wisse, was in den ersten 5–10 Sekunden passiert: Annähern, debuffen, Combo, raus. Übe, bis es automatisch sitzt.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-ink-gold font-serif text-lg">Kohärenter Stat-Plan</h3>
                  <p className="mt-2 text-sm text-slate-400 font-sans">
                    Punkte nicht verzetteln. 2–3 Primärwerte pushen, damit mittelmäßige Waffen glänzen und Plateaus vermieden werden.
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
              Beispiel-Archetypen
            </h2>
            <p className="mt-3 text-slate-400 font-sans">
              Startpunkte, die du je nach Gear flexibel biegen kannst.
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
                    Details ansehen
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
            Anpassung für Solo, Koop und PvP.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">Solo</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Fokus auf Sustain, Notfall-Tools und verzeihende Rotationen. Du bist eigener Tank und Healer.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">Koop</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Defensives etwas kürzen, Gruppennutzen verstärken. Synergien bauen und Öffnungen für Mitspieler schaffen.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">PvP</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Komfort gegen Unberechenbarkeit tauschen: Movement + Burst. Map-Kenntnis und Reaktionszeit sind der Kern.
              </p>
            </div>
          </div>
        </section>

        {/* Community Archetypes */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl border-brush inline-block pb-2 font-serif">
            Beliebte Community-Archetypen
          </h2>

          <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 sm:h-64 shadow-inner">
            <CdnImage
              src="/background/builds.webp"
              alt="Where Winds Meet Builds Übersicht"
              fill
              className="object-cover object-center opacity-60 hover:scale-105 transition-transform duration-700"
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="max-w-xl text-sm text-slate-200 text-shadow-sm font-sans">
                Lange TC-Guides (TC = traditionelles Chinesisch) teilen das Kampfsystem in klare Familien. Das Verständnis dieser Ziele hilft dir, Builds anzupassen, wenn das Meta sich dreht.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 */}
            <article id="mo-blade" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Stonebreaker Might</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Tank</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Mo Blade + Speer Frontline
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Baut auf Super-Armor und Schadensreduktion. Hält Aggro und stabilisiert Runs für Lern-Gruppen.
              </p>
            </article>

            {/* Card 2 */}
            <article id="sword-spear-bleed" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Resonant Steel Shadow</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">DPS</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Blutungs-Fokus Sword + Spear
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                High-APM-Setup: DoTs stapeln, dann zünden. Braucht strikte Rotation, bietet dafür hohen Ceiling-Schaden.
              </p>
            </article>

            {/* Card 3 */}
            <article id="sword-starter" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Resonant Steel Arc</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Hybrid</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Starter Sword + Spear
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Einsteigerfreundlicher Hybrid mit Fokus auf Ausdauer-Management und klaren Kombos. Perfekt zum Lernen.
              </p>
            </article>

            {/* Card 4 */}
            <article id="umbrella-control" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Silkbound Jade</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Control</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Umbrella + Fan Range
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Langstrecken-Schaden mit Crowd Control. Ressourcen managen, während der Schirm automatisch weiter angreift.
              </p>
            </article>

            {/* Card 5 */}
            <article id="umbrella-healer" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Silkbound Rain</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Support</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Reiner Heiler-Umbrella
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Dedizierter Support, der das Team am Leben hält. Wenig Schaden, aber für schwere Inhalte Gold wert.
              </p>
            </article>

            {/* Card 6 */}
            <article id="dual-blades" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Bamboo-Split Gale</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Assassin</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Dual Blades + Rope Dart
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Hyper-mobiler Nahkampf: rein, bestrafen, raus. Belohnt saubere Reads und Map-Kenntnis.
              </p>
            </article>
          </div>
        </section>
      </div>
    </article>
  );
}
