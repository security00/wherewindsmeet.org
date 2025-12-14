import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Endgame Guide – Progression & Optimierung (DE)",
  description:
    "Endgame meistern: Phasen, Farmrouten, Stat-Optimierung, Boss-Guides, PvP-Fokus und offene Welt im Spätspiel von Where Winds Meet.",
  alternates: buildHreflangAlternates("/guides/endgame", { canonicalLanguage: "de" }),
};

const endgamePhases = [
  { name: "Frühes Endgame (Level 30–40)", description: "Story abschließen, Endgame-Aktivitäten freischalten" },
  { name: "Mittleres Endgame (Level 40–50)", description: "Gezielt Gear farmen, harte Bosse meistern" },
  { name: "Spätes Endgame (50+)", description: "Perfekte Optimierung, PvP, Challenges" },
];

export default function EndgameDePage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.webp"
            alt="Where Winds Meet Endgame Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Endgame meistern
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Nach der Story beginnt die eigentliche Reise: Stats optimieren, Bosse lernen, seltene Belohnungen farmen und sich im PvP messen.
            Dieser Endgame-Guide zeigt, was dich erwartet, wie du dich vorbereitest und worauf du deine Zeit fokussierst.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Viele Spieler fühlen sich im Endgame orientierungslos, weil keine Marker mehr die Richtung vorgeben. Willst du PvE-Bosse klarziehen?
            Builds perfektionieren? PvP üben? Alles sammeln? Die Phasen helfen dir, Prioritäten zu setzen.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Endgame-Phasen verstehen
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Das Endgame ist ein Ablauf von Phasen mit unterschiedlichen Zielen. Wenn du diese Phasen kennst, setzt du realistische Meilensteine und
          vermeidest Überforderung.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {endgamePhases.map((phase) => (
            <div key={phase.name} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60">
              <h3 className="text-sm font-semibold text-slate-50">{phase.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">{phase.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Frühes Endgame: Systeme freischalten. Mitte: gezielt farmen. Spät: Perfektion & schwere Inhalte. Erkenne deine Phase → setze passende Ziele.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Farming & Ressourcen im Endgame
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Effizientes Farmen ist die Basis. Wähle Aktivitäten nach deinem Engpass: Waffenteile, Gold/Währung oder spezifische Mats.
        </p>
        <div className="space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Gezielt farmen</h3>
            <p className="mt-2">Pro Session 1–2 Ziele: z. B. Waffenmats oder Coins. Vermeide alles-auf-einmal, sonst verlierst du Tempo.</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Boss-Routen</h3>
            <p className="mt-2">Beste Drops kommen oft von Boss-Loops. Routen üben, Build auf den Boss zuschneiden, in Gruppe laufen, wenn solo zu hart.</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Wöchentliches & Events</h3>
            <p className="mt-2">Wöchentliche Lockouts nicht auslassen: Bosse, saisonale Events, Spezial-Challenges. Belohnungen stapeln sich über Zeit.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Harte Bosse & Endgame-Content
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Endgame-Bosse haben komplexe Muster und bestrafen Fehler hart – dafür gibt es Top-Loot. Strategie-Guides mit Builds & Pattern-Erklärungen findest du hier.
        </p>
        <div className="mt-4">
          <Link
            href="/de/guides/bosses"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Boss-Guides ansehen
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Stats & Gear optimieren
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Hier zählt jeder Punkt: Stat-Balance, Waffenwahl, Skill-Synergien. Statt alles zu maxen, fokussiere 2–3 Kernwerte und farm Gear mit passenden Rolls.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Diminishing Returns greifen früh. 85 % Optimierung + Spielspaß &gt; 100 % mit Burnout. Feintuning nur, wenn es dir Freude macht.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          PvP im Endgame
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          PvP ist reaktiver als PvE: echte Spieler lesen deine Muster. Du brauchst ein Duell-optimiertes Build und Übung gegen Menschen. Die Tierliste hat PvP-Sektionen als Ausgangspunkt.
        </p>
        <div className="mt-4">
          <Link
            href="/de/guides/tier-list"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            PvE/PvP‑Tierliste
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Erkundung, Mystische Künste (Mystic Arts) & Jianghu-Leben im Endgame
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            TC-Guides betrachten Exploration als Kern des Endgames: Qinghe-Ränge, Serendipity-Chains und Movement-Belohnungen verändern das Traversal grundlegend.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Qinghe-Exploration & Leichtfüßigkeit</h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Bring die Qinghe-Erkundung früh auf ~5–6: Das schaltet große Movement-Skills wie Jade Fan Roaming the Mountains (玉扇遊山) oder Riding the Wind (馮虛禦風) frei. Viele Rätsel sind darauf ausgelegt.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Wichtige Mystic Arts</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li><span className="font-semibold">Golden Jade Hand (金玉手):</span> Fernkampf‑„Pressure Point“ für Kampf und Rätsel.</li>
            <li><span className="font-semibold">Plucking Stars, Catching the Moon (攝星拿月):</span> Items/Waffen stehlen, z. B. Schildkunst im Xiangguo-Tempel.</li>
            <li><span className="font-semibold">Hidden Step (杳無形) &amp; Worldly Disguise (紅塵障目):</span> Schleichen/Verkleiden für Infiltration-Quests.</li>
            <li><span className="font-semibold">Formless Golden Body (無相金身):</span> Starker Defensiv-Buff gegen Burst und Stagger.</li>
          </ul>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Abwechslung zwischen Grind-Phasen</h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Musikstücke sammeln, Pitch Pot/Leaf Card/Shefu/Sumō spielen, Aussichtspunkte taggen. Co-Play-Punkte und Erfolge farmen – und Hände erholen.
          </p>
        </div>
        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <Image
              src="/background/bg3.webp"
              alt="Charakter spielt Musik im Feld"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 28rem, (min-width: 768px) 45vw, 100vw"
            />
          </div>
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            Inspiriert von TC-Leisure-Guides, die Partituren, Minispiele und Screenshot-Spots kartieren.
          </p>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Deine Endgame-Reise planen
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Setze Meilensteine statt „Ende“. Erste Bosse, Stat-Balance, erstes PvP-Duell, seltene Cosmetics, Nutzen in Koop-Runs. So bleibt das Endgame motivierend.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Checke regelmäßig Builds/Tierliste nach Patches. Wenn Optimierung wie Arbeit wirkt, Pause machen – Jianghu läuft nicht weg.
        </p>
      </section>
    </article>
  );
}
