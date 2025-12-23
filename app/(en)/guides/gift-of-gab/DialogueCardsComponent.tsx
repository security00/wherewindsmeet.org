import dialogueCards from "./cards.json";

export type DialogueCard = {
  id: string;
  name: string;
  originalName?: string;
  style: string;
  cost: number;
  effect: string;
  description: string;
  rarity: "common" | "uncommon" | "rare";
};

export type DialogueCardsUiText = {
  title: string;
  intro: string;
  styleCardsSuffix: string;
  rarityLabels: Record<DialogueCard["rarity"], string>;
  noteTitle: string;
  noteText: string;
};

const rarityColors = {
  common: { bg: "bg-slate-700", border: "border-slate-600", text: "text-slate-300" },
  uncommon: { bg: "bg-emerald-900", border: "border-emerald-600", text: "text-emerald-200" },
  rare: { bg: "bg-purple-900", border: "border-purple-600", text: "text-purple-200" },
};

const styleColors = {
  Bluster: "text-red-300",
  Provocation: "text-orange-300",
  Rebuttal: "text-blue-300",
  Filibuster: "text-violet-300",
  Universal: "text-emerald-300",
};

const DEFAULT_STYLE_ORDER = ["Bluster", "Provocation", "Rebuttal", "Filibuster", "Universal"] as const;

const DEFAULT_UI_TEXT: DialogueCardsUiText = {
  title: "Dialogue Cards Reference",
  intro:
    "Browse the complete collection of dialogue cards across all debate styles. Each card has a unique cost and effect.",
  styleCardsSuffix: "Cards",
  rarityLabels: {
    common: "common",
    uncommon: "uncommon",
    rare: "rare",
  },
  noteTitle: "Note",
  noteText:
    "Card effects scale with your Scholar level and attribute upgrades. Universal cards work with any debate style and can provide healing, inspiration recovery, or powerful utility effects.",
};

type Props = {
  cards?: DialogueCard[];
  styleOrder?: string[];
  styleLabelMap?: Record<string, string>;
  uiText?: Partial<DialogueCardsUiText>;
};

export default function DialogueCardsComponent({ cards, styleOrder, styleLabelMap, uiText }: Props) {
  const resolvedUiText: DialogueCardsUiText = {
    ...DEFAULT_UI_TEXT,
    ...uiText,
    rarityLabels: { ...DEFAULT_UI_TEXT.rarityLabels, ...(uiText?.rarityLabels ?? {}) },
  };

  const resolvedCards = (cards ?? (dialogueCards as unknown as DialogueCard[])) as DialogueCard[];
  const groupedCards = resolvedCards.reduce((acc, card) => {
    if (!acc[card.style]) {
      acc[card.style] = [];
    }
    acc[card.style].push(card);
    return acc;
  }, {} as Record<string, DialogueCard[]>);

  const styles = styleOrder ?? [...DEFAULT_STYLE_ORDER];

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
      <h2 className="text-2xl font-bold text-slate-50">{resolvedUiText.title}</h2>
      <p className="text-slate-200">{resolvedUiText.intro}</p>

      <div className="space-y-8">
        {styles.map((style) => {
          const styleLabel = styleLabelMap?.[style] ?? style;
          return (
            <div key={style}>
              <h3
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  styleColors[style as keyof typeof styleColors] ?? "text-emerald-300"
                }`}
              >
              <span className="inline-block w-3 h-3 rounded-full bg-current"></span>
              {styleLabel} {resolvedUiText.styleCardsSuffix}
            </h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {groupedCards[style]?.map((card) => (
                <div
                  key={card.id}
                  className={`rounded-xl border-2 ${rarityColors[card.rarity].border} ${rarityColors[card.rarity].bg} p-4 space-y-2 hover:shadow-lg hover:shadow-slate-700/50 transition-all`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-50 text-sm">{card.name}</h4>
                      {card.originalName ? (
                        <p className="text-[11px] text-slate-200/70">{card.originalName}</p>
                      ) : null}
                      <p className={`text-xs font-semibold uppercase tracking-wide ${rarityColors[card.rarity].text}`}>
                        {resolvedUiText.rarityLabels[card.rarity] ?? card.rarity}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-900/50 border border-amber-700">
                      <span className="text-amber-300 font-bold text-sm">{card.cost}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2">{card.description}</p>

                  <div className="pt-2 border-t border-slate-600/50">
                    <p className="text-xs text-emerald-300 font-semibold">{card.effect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-sm text-slate-300">
        <p>
          <strong>{resolvedUiText.noteTitle}:</strong> {resolvedUiText.noteText}
        </p>
      </div>
    </section>
  );
}
