import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import DialogueCardsComponent, { type DialogueCard } from "@/app/(en)/guides/gift-of-gab/DialogueCardsComponent";
import StyleComparisonTable from "@/app/(en)/guides/gift-of-gab/StyleComparisonTable";
import type { DebateStyleComparisonRow } from "@/app/(en)/guides/gift-of-gab/StyleComparisonTable";
import EmbeddedVideoGallery from "@/app/(en)/guides/gift-of-gab/EmbeddedVideoGallery";
import type { EmbeddedVideo } from "@/app/(en)/guides/gift-of-gab/EmbeddedVideoGallery";
import GiftOfGabImages from "@/app/(en)/guides/gift-of-gab/GiftOfGabImages";
import type { GuideImage } from "@/app/(en)/guides/gift-of-gab/GiftOfGabImages";
import dialogueCardsDeJson from "@/app/(en)/guides/gift-of-gab/cards.de.json";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Gift of Gab Guide (DE)",
  description:
    "Gift of Gab schnell gewinnen: richtigen Stil wählen, Inspiration managen, Scholar-Meisterschaft upgraden und mit Karten + Trash Talk den gegnerischen Mental Focus auf 0 drücken.",
  alternates: buildHreflangAlternates("/guides/gift-of-gab", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Gift of Gab Guide (DE)",
    description:
      "Debatten-Minispiel meistern: Stilwahl, Inspiration, Karten und Trash Talk richtig einsetzen, um Mental Focus zu leeren.",
    url: "https://wherewindsmeet.org/de/guides/gift-of-gab",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://static.wherewindsmeet.org/guides/gift-of-gab/gameplay.jpg",
        width: 1600,
        height: 900,
        alt: "Gift of Gab Interface in Where Winds Meet",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Gift of Gab Guide (DE)",
    description:
      "Stil wählen, Inspiration sparen, Karten timen, Trash Talk treffen – so gewinnst du Gift of Gab.",
    images: ["https://static.wherewindsmeet.org/guides/gift-of-gab/gameplay.jpg"],
  },
};

const dialogueCardsDe = dialogueCardsDeJson as unknown as DialogueCard[];

const giftOfGabImagesDe: GuideImage[] = [
  {
    src: "/guides/gift-of-gab/gameplay.jpg",
    alt: "Gift of Gab – Debatten-UI (Mental Focus & Karten)",
    caption: "Haupt-UI im Gift of Gab: Mental Focus, Inspiration und Kartenhand auf einen Blick.",
  },
  {
    src: "/guides/gift-of-gab/game-modes.jpg",
    alt: "Gift of Gab – Modusauswahl",
    caption: "Modi: Free Persuasion (AI-Chat) vs. Rhetoric Duel (kartenbasiert).",
  },
  {
    src: "/guides/gift-of-gab/rebuttal-trash-talk.jpg",
    alt: "Gift of Gab – Trash Talk QTE",
    caption: "Gratis-QTEs (Trash Talk) erscheinen während der Debatte und geben Bonus-Effekte.",
  },
  {
    src: "/guides/gift-of-gab/ui-opponent.jpg",
    alt: "Gift of Gab – Gegner-UI & Ressourcen",
    caption: "Achte auf Mental Focus des Gegners, deine Inspiration und die verfügbaren Karten.",
  },
];

const giftOfGabVideosDe: EmbeddedVideo[] = [
  {
    id: "video-1",
    videoId: "CZrZCx9vGyU",
    title: "Gift of Gab – kompletter Guide",
    description: "Alle Debattenstile, Kartentiming und ein Plan, um die meisten Dialogduelle zuverlässig zu gewinnen.",
  },
  {
    id: "video-2",
    videoId: "Jd315KSy9-w",
    title: "Strategien & Kartenkombos",
    description: "Fortgeschrittene Patterns und Kombos pro Stil – wann du Inspiration sparst und wann du finishst.",
  },
  {
    id: "video-3",
    videoId: "Rv26cKdKqCE",
    title: "Scholar-Leveling & Vorteile",
    description: "So schaltest du den Scholar-Fortschritt frei und nutzt Upgrades, um Karten stärker zu skalieren.",
  },
];

const styleComparisonDe: DebateStyleComparisonRow[] = [
  {
    style: "Bluster",
    emoji: "🎭",
    strength: "Hoher Burst und Dominanz – funktioniert stark, wenn du Druck sauber in kurze Fenster packst.",
    weakness: "Anfällig für Provocation, die Zweifel triggert und deinen Rhythmus bricht.",
    cardTypes: ["Schaden", "Verteidigung", "Confidence-Boost"],
    bestAgainst: "Filibuster",
    weakAgainst: "Provocation",
    playStyle: "Aggressiv, direkt: hohes Risiko, hohe Belohnung.",
    inspirationCost: "moderate_high",
    inspirationCostLabel: "Mittel bis hoch",
    defensibility: "low",
    defensibilityLabel: "Niedrig",
  },
  {
    style: "Provocation",
    emoji: "⚡",
    strength: "Emotionaler Schaden, Silence-Effekte und Momentum – stark, wenn du den Gegner aus der Fassung bringst.",
    weakness: "Wird oft von Rebuttal sauber gekontert, wenn du zu früh overcommitest.",
    cardTypes: ["Emotionaler Schaden", "Silence", "Momentum"],
    bestAgainst: "Bluster",
    weakAgainst: "Rebuttal",
    playStyle: "Chaotisch, persönlich, hohe Varianz.",
    inspirationCost: "moderate",
    inspirationCostLabel: "Mittel",
    defensibility: "very_low",
    defensibilityLabel: "Sehr niedrig",
  },
  {
    style: "Rebuttal",
    emoji: "🎯",
    strength: "Logischer Schaden + solide Defense; ideal, wenn du konstant spielen und Fehler vermeiden willst.",
    weakness: "Eher langsam – Filibuster kann dich über Tempo und Dauer-Druck aushebeln.",
    cardTypes: ["Logik-Schaden", "Verteidigung", "Faktenbasiert"],
    bestAgainst: "Provocation",
    weakAgainst: "Filibuster",
    playStyle: "Methodisch, kontrolliert, konstant.",
    inspirationCost: "moderate",
    inspirationCostLabel: "Mittel",
    defensibility: "high",
    defensibilityLabel: "Hoch",
  },
  {
    style: "Filibuster",
    emoji: "📢",
    strength: "Zermürbender Dauer-Druck mit Recovery – gewinnt viele Runden über Ausdauer statt Burst.",
    weakness: "Hat Probleme, Blusters direkten Druck zuverlässig zu beantworten, wenn du zu weit hinten bist.",
    cardTypes: ["Dauer-Schaden", "Durchhaltevermögen", "Wortflut"],
    bestAgainst: "Rebuttal",
    weakAgainst: "Bluster",
    playStyle: "Zäh, ausdauernd, Zermürbung.",
    inspirationCost: "high",
    inspirationCostLabel: "Hoch",
    defensibility: "moderate",
    defensibilityLabel: "Mittel",
  },
];

export default function GiftOfGabDePage() {
  return (
    <article className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg2.webp"
            alt="Gift of Gab Hintergrund"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-amber-300">Dialog-Minispiel</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">Gift of Gab Guide</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Meistere das Überzeugungs-Minispiel: richtigen Debattenstil wählen, Inspiration managen und Dialogkarten + Trash Talk kombinieren, um den Mental Focus des Gegners auf Null zu bringen.
          </p>
        </div>
      </section>

      {/* Was ist Gift of Gab */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">Was ist Gift of Gab?</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-emerald-300">Kartenbasierte Debatte</p>
            <p className="text-xs text-slate-300">Dialogkarten senken den Mental Focus des Gegners auf 0.</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-blue-300">Inspiration-Ressource</p>
            <p className="text-xs text-slate-300">Inspiration kostet, regeneriert aber passiv: günstige Karten zum Aufbau, teure fürs Finish.</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-purple-300">Runden ohne Zeitdruck</p>
            <p className="text-xs text-slate-300">Kein Timer – du spielst im eigenen Tempo, solange Ressourcen reichen.</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
          Gift of Gab ersetzt Kampf durch Rhetorik: Du gewinnst, indem du Mental Focus mit Karten und Trash Talk herunterspielst. Kern ist das
          Ressourcen-Management von Inspiration und die Wahl des passenden Stils gegen den NPC.
        </p>
      </section>

      {/* Interface Bilder */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-50">Interface im Spiel</h3>
        <GiftOfGabImages images={giftOfGabImagesDe} />
      </section>

      {/* Fast Win Checklist */}
      <section className="rounded-3xl border border-emerald-800/40 bg-emerald-950/30 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Schnell gewinnen: Checkliste</h2>
        <ul className="space-y-2 text-sm text-slate-200">
          <li>✓ Stil-Vorschlag akzeptieren – das Spiel schlägt meist den Konter-Stil zum NPC vor.</li>
          <li>✓ Mit billigen Karten eröffnen, Inspiration sparen; bursten, wenn der gegnerische Balken niedrig ist.</li>
          <li>✓ Jeden Trash-Talk-QTE treffen – Gratis-Schaden/Utility ohne Kosten.</li>
          <li>✓ Frühe Defensive priorisieren; verlorener Mental Focus kommt nicht zurück.</li>
          <li>✓ Scholar-Meisterschaft leveln, um Inspiration-Cap und Karteneffektivität zu erhöhen.</li>
        </ul>
      </section>

      {/* Zwei Modi */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">Zwei Modi von Gift of Gab</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-700/30 bg-emerald-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-emerald-300">Freie Überzeugung</h3>
            <p className="text-sm text-slate-300">
              Offener Chat mit KI – du formulierst selbst. Gut zum Üben, aber inkonsistente Ergebnisse.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-700/30 bg-blue-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-blue-300">Rhetoric Duel (Hauptmodus)</h3>
            <p className="text-sm text-slate-300">
              Standardmodus mit Karten + Inspiration. Wähle einen Stil (Bluster, Provocation, Rebuttal, Filibuster); während der Debatte nicht wechselbar.
            </p>
          </div>
        </div>
      </section>

      {/* How to play */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">So spielst du Gift of Gab</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">Debattenstil wählen</h3>
          <p className="text-sm text-slate-300 mb-4">Du wählst zu Beginn einen Stil – Rock-Paper-Scissors-Logik:</p>

          <div className="grid gap-3">
            {[
              { name: "Bluster", emoji: "🎭", power: "Aggressiver Schaden", counters: "Filibuster", weakness: "Provocation" },
              { name: "Provocation", emoji: "⚡", power: "Emotionale Angriffe & Silence", counters: "Bluster", weakness: "Rebuttal" },
              { name: "Rebuttal", emoji: "🎯", power: "Logische Verteidigung/Block", counters: "Provocation", weakness: "Filibuster" },
              { name: "Filibuster", emoji: "📢", power: "Konstanter Schaden + Zähigkeit", counters: "Rebuttal", weakness: "Bluster" },
            ].map((style) => (
              <div key={style.name} className="rounded-xl border border-slate-700 bg-slate-800/30 p-4 flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{style.emoji}</div>
                <div className="space-y-1 flex-grow min-w-0">
                  <p className="font-semibold text-slate-50">{style.name}</p>
                  <p className="text-xs text-slate-400">{style.power}</p>
                  <p className="text-xs text-emerald-300">Schlägt: {style.counters}</p>
                  <p className="text-xs text-red-300">Schwäche: {style.weakness}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kernmechaniken */}
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-slate-50">Kernmechaniken</h3>

          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">📊 Mental Focus (Lebensleiste)</p>
              <p className="text-xs text-slate-300">Dein Balken (unten links) und der des Gegners (oben). Wer zuerst 0 erreicht, verliert. Verlorener Focus kommt nicht zurück – defensiv spielen.</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">✨ Inspiration (Ressource)</p>
              <p className="text-xs text-slate-300">Aktiviert Karten; regeneriert automatisch. Günstige Karten = Opening, teure = Finish.</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">🃏 Dialogkarten</p>
              <p className="text-xs text-slate-300">Schaden, Block, Debuff oder Inspiration-Heal. Neue Karten kommen mit Scholar-Level.</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">💬 Trash Talk (Gratis-QTE)</p>
              <p className="text-xs text-slate-300">Taste rechtzeitig drücken für Gratis-Effekte. Kein Cost, kein CD – immer mitnehmen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Dialogkarten-Übersicht</h2>
        <p className="text-sm text-slate-300 mb-4">Alle 20 Karten über 5 Stile – mit Kosten, Effekt und Seltenheit.</p>
        <DialogueCardsComponent
          cards={dialogueCardsDe}
          uiText={{
            title: "Dialogkarten – Übersicht",
            intro:
              "Alle Dialogkarten nach Debattenstil sortiert. Pro Karte siehst du Kosten, Effekt und Seltenheit – ideal zum Planen deiner Kombos.",
            styleCardsSuffix: "Karten",
            rarityLabels: { common: "Gewöhnlich", uncommon: "Ungewöhnlich", rare: "Selten" },
            noteTitle: "Hinweis",
            noteText:
              "Karteneffekte skalieren mit Scholar-Level und Attribut-Upgrades. Universal-Karten passen zu jedem Stil und liefern häufig Heilung, Inspiration oder Utility.",
          }}
        />
      </section>

      {/* Style Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Stilvergleich</h2>
        <StyleComparisonTable
          rows={styleComparisonDe}
          uiText={{
            title: "Debattenstile im Vergleich",
            intro:
              "Die vier Stile haben klare Matchups. Nutze den Vergleich, um schnell zu sehen, was zu deinem Tempo passt und womit du den NPC konterst.",
            strengths: "Stärken",
            weaknesses: "Schwächen",
            cardTypes: "Kartentypen",
            bestAgainst: "Stark gegen",
            weakAgainst: "Schwach gegen",
            inspirationCost: "Inspiration-Kosten",
            defensibility: "Defensiv",
            playStyle: "Spielstil",
            metaTitle: "Meta (Stein–Schere–Papier)",
            metaHeaders: {
              style: "Stil",
              beats: "Kontert",
              beatenBy: "Wird gekontert von",
              difficultyVsBluster: "Matchup vs Bluster",
              difficultyVsRebuttal: "Matchup vs Rebuttal",
            },
            difficultyLabels: { easy: "Leicht", medium: "Mittel", hard: "Schwer" },
          }}
        />
      </section>

      {/* Improve */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">Schneller verbessern</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-emerald-300">Inspiration-Tempo</h3>
            <p className="text-xs text-slate-300">Stats/Perks wählen, die Regeneration erhöhen; teure Karten nur bei Vorteil.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-emerald-300">Kartensynergien</h3>
            <p className="text-xs text-slate-300">Debuff → Burst → Defend. Reihenfolge baut Druck und schützt dich.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-emerald-300">Trash Talk üben</h3>
            <p className="text-xs text-slate-300">QTEs sind kostenloser Wert; Timing im Muskelgedächtnis halten.</p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Video-Beispiele</h2>
        <EmbeddedVideoGallery
          videos={giftOfGabVideosDe}
          uiText={{
            title: "Videos (Beispiele)",
            intro: "Wenn du Gift of Gab einmal „in Bewegung“ sehen willst, helfen diese Clips beim Timing und Kartenfluss.",
            privacyTitle: "Datenschutz-Hinweis",
            privacyText:
              "Die Einbettungen nutzen den erweiterten Datenschutzmodus (youtube-nocookie.com). Cookies oder Watch-History werden in der Regel erst relevant, wenn du aktiv interagierst.",
          }}
        />
      </section>

      {/* Cross-links */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-50">Nützliche Verknüpfungen</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/de/guides/wall-puzzle"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 hover:border-emerald-400/50 hover:text-emerald-100 transition"
          >
            🧩 Wandrätsel – richtige Steine & Pose
          </Link>
          <Link
            href="/de/guides/qin-caiwei"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 hover:border-emerald-400/50 hover:text-emerald-100 transition"
          >
            💬 Qin Caiwei Freundschafts-Dialog – Copy/Paste-Linien
          </Link>
        </div>
      </section>
    </article>
  );
}
