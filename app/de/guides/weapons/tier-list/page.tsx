import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Waffen-Tierliste – alle Waffen im Ranking (DE)",
  description:
    "Deutsche Where Winds Meet Waffen-Tierliste (Tierlist): Ranking für PvE, PvP und Endgame – inkl. Einordnung zu Stärken, Lernkurve und Spielstil.",
  alternates: buildHreflangAlternates("/guides/weapons/tier-list", { canonicalLanguage: "de" }),
};

const tierSummaries = [
  {
    tier: "S Tier",
    summary:
      "Top-Picks, die Endgame-PvE und Drucksituationen mit sauberen Grundlagen sehr zuverlässig meistern.",
    bestFor:
      "Spieler, die verlässliche Stärke wollen und später in fortgeschrittene Tech einsteigen möchten.",
  },
  {
    tier: "A Tier",
    summary:
      "Starke, flexible Waffen, die besonders glänzen, wenn man ihre Stärken gezielt ausspielt und passende Builds nutzt.",
    bestFor:
      "Spieler, die gern experimentieren, ohne zu viel Konstanz aufzugeben.",
  },
  {
    tier: "B Tier",
    summary:
      "Spezialisten oder execution-lastige Picks, die in den richtigen Händen oder Matchups sehr stark sein können.",
    bestFor:
      "Spieler, die Off-Meta, hohe Skill-Expression und Counter-Picks mögen.",
  },
];

const tierWeaponExamples = [
  {
    label: "S-Tier Waffen",
    description:
      "Top-Optionen, die fast überall stark wirken – besonders im Late-Game-PvE und in anspruchsvollem Gruppencontent.",
    weapons: [
      {
        name: "Nameless Sword",
        note: "Sehr flexible Main-Weapon mit starken Routen für Story, PvE und frühes PvP.",
      },
      {
        name: "Spear",
        note: "Große Reichweite und sichere Tools zum Boss-Lernen bei solidem DPS.",
      },
      {
        name: "Mo Blade",
        note: "Hart zuschlagender Bruiser, der gutes Positioning und Timing belohnt.",
      },
      {
        name: "Umbrella",
        note: "Defensive Utility + Konter, stark zwischen PvE-Survivability und PvP-Playmaking.",
      },
      {
        name: "Dual Blades",
        note: "High-Tempo-Waffe mit explosiven Burst-Fenstern für sichere Hände.",
      },
    ],
  },
  {
    label: "A-Tier Waffen",
    description:
      "Waffen, mit denen man allen Content schaffen kann – sie verlangen aber oft Setup, bestimmte Pfade oder geübte Ausführung.",
    weapons: [
      {
        name: "Fan",
        note: "Kontrollfokus: belohnt Spacing, Zoning und kluges Cooldown-Management.",
      },
      {
        name: "Hybrid Sword + Spear",
        note: "Kombiniert sicheren Poke mit starken Finishers, sobald die Routen sitzen.",
      },
      {
        name: "Support-Umbrella / Fan",
        note: "Glänzt im Team, wenn Schilde, Buffs und Crowd Control zählen.",
      },
    ],
  },
  {
    label: "B-Tier Waffen",
    description:
      "Nischiger, „gieriger“ oder matchup-abhängiger – dafür sehr belohnend, wenn gemeistert.",
    weapons: [
      {
        name: "Glaskanonen-Routen",
        note: "Sehr hoher Schaden, wenn man selten getroffen wird – aber hart bestrafend bei Fehlern.",
      },
      {
        name: "Off-Meta-Hybride",
        note: "Ungewöhnliche Kombos: weniger Zuverlässigkeit, dafür Style und Überraschungswert.",
      },
      {
        name: "Experimentelle PvP-Setups",
        note: "Spezial-Builds zum Kontern bestimmter Gegner oder Team-Comps.",
      },
    ],
  },
];

const weaponCategories = [
  {
    name: "Nahkampfwaffen",
    description: "Nahdistanz-Optionen mit hohem Druck und aggressiven Spielweisen",
  },
  {
    name: "Fernkampfwaffen",
    description: "Tools für Kontrolle und sicheres Positioning aus der Distanz",
  },
  {
    name: "Hybridwaffen",
    description: "Vielseitige Optionen zwischen Nah- und Fernkampf",
  },
];

export default function WeaponTierListPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.webp"
            alt="Where Winds Meet Waffen-Tierliste Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Waffen-Tierliste – alle Waffen im Ranking
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Die richtige Waffe ist eine der wichtigsten Grundlagen in Where Winds Meet. Jede Waffe hat ihren eigenen Spielstil, eine eigene Power-Kurve
            und eine eigene Lernkurve. Diese Waffen-Tierliste bewertet deshalb mehrere Dimensionen: rohe Stärke, Bedienbarkeit, Vielseitigkeit über
            Content-Typen hinweg und wie komfortabel sich die Waffe im Endgame spielt. Ob du neu bist und von der Auswahl erschlagen wirst oder dein
            Arsenal gezielt optimieren willst: Hier bekommst du einen klaren Rahmen für gute Entscheidungen.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Die große Tierliste auf dieser Seite betrachtet Waffen zusammen mit Pfaden und Builds. Diese Waffen-Tierliste zoomt bewusst näher heran und
            vergleicht Waffen direkt – damit klar wird, nicht nur welche Waffen stark sind, sondern auch warum, und welche Trade-offs es gibt. Manche
            Optionen sind auf hohem Niveau schlicht besser, andere sind dafür sehr zugänglich und anfängerfreundlich – selbst wenn die theoretische
            „Ceiling“ niedriger ist.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Wenn du gezielt nach einer Where Winds Meet Waffen-Tierliste (Tierlist) suchst, die deine Loadout-Entscheidungen unterstützt: Diese Seite ordnet alle
            Optionen ein und erklärt typische Einsatzzwecke – Story-Progress, Endgame-PvE-Bosse, Coop, PvP-Duelle und auch Speedrun-orientiertes Spielen.
            Nutze die Tierliste als Referenz, wenn du unsicher bist, in welche Waffe du als Nächstes investieren solltest. Für den groben Überblick eignet
            sich die Haupt‑Tierliste; hier kannst du dann bei einzelnen Waffen tiefer einsteigen und anschließend im Builds-Guide das Setup sauber abrunden.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          So funktionieren Waffen-Tiers in Where Winds Meet
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Wir bündeln Waffen in grobe Power-Bänder, statt uns an kleinen Zahlenunterschieden aufzureiben. Ein Tier beschreibt vor allem das Spielgefühl
          in echtem PvE/PvP: Komfort, Konstanz und wie viel Aufwand nötig ist, um eine Waffe wirklich glänzen zu lassen. Nutze die Tiers als Orientierung
          – und passe deine Entscheidung danach an Erfahrung, Ziel und Vorlieben an.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {tierSummaries.map((tier) => (
            <div
              key={tier.tier}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {tier.tier}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {tier.summary}
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
                Am besten für:{" "}
                <span className="text-slate-200">{tier.bestFor}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Waffen-Kategorien und Spielstile
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet-Waffen lassen sich grob in Kategorien einteilen – und jede Kategorie unterstützt andere Spielweisen und verlangt andere
          Skill-Expression. Wenn du weißt, welche Kategorie dir liegt, wird die Tierliste deutlich praxisnäher: Du musst nicht jede Waffe lernen. Finde
          die Kategorie, die zu dir passt, und schau dir dann die bestplatzierten Optionen darin an. Wenn du unsicher bist, starte mit einer soliden
          „Mitte“ aus der Tierliste, lern die Basics – und jag erst danach reine Meta-Picks.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {weaponCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">{cat.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Diese Seite enthält eigene Guides zu allen wichtigen Where Winds Meet-Waffen. Die Guides gehen deutlich tiefer in Mechaniken, Kombos,
          Stat-Synergien und Matchups als es eine Tierliste je kann. Nutze die Tierliste, um Kandidaten zu finden – und lies anschließend die Waffen-Guides
          zu deinen Favoriten, um sie wirklich zu verstehen.
        </p>
        <div className="mt-4">
          <Link
            href="/de/guides/weapons"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Waffenguides ansehen
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          So liest du diese Where Winds Meet Waffen-Tierliste
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Die Tier-Einstufungen spiegeln mehrere Faktoren wider: roher Schaden, Robustheit, wie schnell die Waffe „online“ ist und wie flexibel sie
          über verschiedene Spielweisen hinweg bleibt. Eine S-Tier-Waffe überzeugt meist in den meisten Dimensionen; eine C-Tier-Waffe kann in einem
          Bereich glänzen, dafür in anderen spürbar abfallen.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Power-Level der Waffen</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              S-Tier-Waffen sind in den meisten Situationen stark. A-Tier-Waffen sind konstant gut, können aber in bestimmten Matchups abfallen.
              B-Tier-Waffen haben eine klare Identität, brauchen jedoch passende Builds, um zu glänzen. C-Tier-Waffen sind spielbar – vor allem für
              Enthusiasten, die Einschränkungen bewusst akzeptieren.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Lernkurve</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Manche Waffen fühlen sich sofort stark an, sobald man sie bekommt. Andere brauchen Stats, bestimmte Codes oder Übung, um wirklich zu
              funktionieren. Diese Tierliste geht von moderater Optimierung aus. Eine Waffe, die auf dem Papier mittel wirkt, kann mit den richtigen
              Stat-Synergien plötzlich hervorragend performen.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Vielseitigkeit</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Vielseitige Waffen bleiben über PvE, PvP und verschiedene Spielweisen hinweg brauchbar. Spezialisten dominieren einen Bereich, haben dafür
              klare Schwächen in anderen. Vielseitigkeit lohnt sich, wenn du häufig zwischen Solo- und Coop-Play wechselst – Spezialisten erlauben dafür
              tieferes „Min-Maxing“ in einer Nische.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Deine erste Where Winds Meet-Waffe wählen.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Wenn du neu bist und mit dieser Tierliste deine Startwaffe auswählen möchtest: Nimm die bestplatzierte Waffe in deiner bevorzugten Kategorie
          und prüfe, ob sich der Spielstil intuitiv anfühlt. Wirkt das Angriffsmuster natürlich? Gefallen dir die Animationen? Gerade zu Beginn sind
          solche subjektiven Faktoren oft wichtiger als ein paar Tier-Stufen.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet belohnt Spezialisierung. Mit einer Waffe wirst du deutlich besser, wenn du sie viele Stunden spielst, statt ständig zu
          wechseln. Selbst eine niedriger eingestufte Waffe fühlt sich stark an, wenn du sie wirklich meisterst. Wähle deshalb eine solide Option aus der
          Mitte, spiel sie konsequent – und schau im Endgame erneut in die Tierliste. Dann kannst du besser beurteilen, ob ein Wechsel auf eine stärkere
          Waffe den Neu-Lernaufwand wert ist.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Beispiele für Where Winds Meet-Waffen je Tier
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Diese Beispiele zeigen, wie verschiedene Waffen in die Tier-Bänder fallen. Die Beispiele sind nicht vollständig und können sich durch künftige
          Patches verschieben – geben aber einen soliden Startpunkt, wenn du planst, was du als Nächstes leveln und üben möchtest.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {tierWeaponExamples.map((tier) => (
            <div
              key={tier.label}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-sm shadow-slate-950/60"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {tier.label}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {tier.description}
              </p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-200">
                {tier.weapons.map((weapon) => (
                  <li key={weapon.name}>
                    <span className="font-semibold">{weapon.name}</span>
                    <span className="text-slate-400"> – {weapon.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Endgame: Waffen-Optimierung
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Im Endgame wird diese Tierliste relevanter: Dann experimentiert man weniger, sondern optimiert. In der Praxis lohnt es sich, Waffen aus
          mehreren Tiers bereit zu haben, um sich an unterschiedliche Inhalte anzupassen. Eine S-Tier-Waffe trägt durch Routine-Bosse – eine spezialisierte
          B-Tier-Option kann dafür einen bestimmten harten Encounter deutlich vereinfachen.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Endgame heißt außerdem: Matchups verstehen. Die „beste“ Waffe hängt davon ab, gegen welche Gegner du gerade spielst. Was im offenen PvE
          dominiert, kann gegen blockende Gegner träge wirken – umgekehrt kann eine Waffe, die allgemein schwächelt, ein Tool haben, das einen Boss nahezu
          trivial macht. Nutze die Tierliste als Startpunkt und passe dein Loadout gezielt an.
        </p>
        <div className="mt-4">
          <Link
            href="/de/guides/endgame"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Endgame-Guide
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Waffen-Kombinationen und Synergien
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Einzel-Rankings sind wichtig – Synergien sind es genauso. Manche Waffen ergänzen sich im selben Build und verstärken gegenseitig ihre Stärken.
          Andere konkurrieren um dieselbe Stat-Verteilung und „kämpfen“ um die gleichen Rollen. Clevere Kombinationen können sogar niedriger eingestufte
          Waffen in sehr effektive Builds heben.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Der Builds-Guide erklärt Waffen-Kombinationen ausführlich. Wenn du eine B- oder C-Tier-Waffe wirklich magst, findest du dort Archetypen, die sie
          mit synergistischen Optionen kombinieren. Oft wird eine etwas schwächere Waffe erst mit dem passenden Build richtig stark. Lass dich von der
          Tier-Stufe nicht davon abhalten, Kombos zu spielen, die dir Spaß machen.
        </p>
        <div className="mt-4">
          <Link
            href="/de/guides/builds"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-900/60"
          >
            Builds entdecken
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Tierliste aktuell halten.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Diese Waffen-Tierliste spiegelt den aktuellen Patch wider. Nach großen Balance-Updates können Rankings deutlich kippen. Nach neuen Patches lohnt
          sich ein kurzer Blick: Ist deine Lieblingswaffe gestiegen oder gefallen? Manchmal wird eine Mid-Tier-Waffe durch die richtigen Änderungen plötzlich
          S-Tier – oder umgekehrt.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Wenn du diese Seite als Lesezeichen speicherst und regelmäßig reinschaust, bleibst du nah an dem, was die Community aktuell als stark einschätzt.
          Das hilft bei Entscheidungen: Was als Nächstes leveln? Worin Ressourcen investieren? Und wann lohnt sich ein Pivot? Denk daran: Tiers sind
          Hinweise, keine Gesetze. Spiel die Waffen, die dir Spaß machen – behalt aber das Umfeld im Blick.
        </p>
      </section>
    </article>
  );
}
