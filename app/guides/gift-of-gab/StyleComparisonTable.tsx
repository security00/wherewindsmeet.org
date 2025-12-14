type Difficulty = "easy" | "medium" | "hard";

export type DebateStyleComparisonRow = {
  style: string;
  emoji: string;
  strength: string;
  weakness: string;
  cardTypes: string[];
  bestAgainst: string;
  weakAgainst: string;
  playStyle: string;
  inspirationCost: "moderate" | "moderate_high" | "high";
  inspirationCostLabel: string;
  defensibility: "very_low" | "low" | "moderate" | "high";
  defensibilityLabel: string;
};

type MetaRow = {
  style: string;
  beats: string;
  beatenBy: string;
  difficultyVsBluster: Difficulty;
  difficultyVsRebuttal: Difficulty;
  styleCellClassName: string;
};

export type StyleComparisonUiText = {
  title: string;
  intro: string;
  strengths: string;
  weaknesses: string;
  cardTypes: string;
  bestAgainst: string;
  weakAgainst: string;
  inspirationCost: string;
  defensibility: string;
  playStyle: string;
  metaTitle: string;
  metaHeaders: {
    style: string;
    beats: string;
    beatenBy: string;
    difficultyVsBluster: string;
    difficultyVsRebuttal: string;
  };
  difficultyLabels: Record<Difficulty, string>;
};

const DEFAULT_UI_TEXT: StyleComparisonUiText = {
  title: "Debate Styles Detailed Comparison",
  intro:
    "Compare the four debate styles head-to-head to understand their matchups, strengths, and optimal play patterns.",
  strengths: "Strengths",
  weaknesses: "Weaknesses",
  cardTypes: "Card Types",
  bestAgainst: "Best Against",
  weakAgainst: "Weak Against",
  inspirationCost: "Inspiration Cost",
  defensibility: "Defensibility",
  playStyle: "Play Style",
  metaTitle: "Rock-Paper-Scissors Meta",
  metaHeaders: {
    style: "Style",
    beats: "Beats",
    beatenBy: "Beaten By",
    difficultyVsBluster: "Difficulty vs Bluster",
    difficultyVsRebuttal: "Difficulty vs Rebuttal",
  },
  difficultyLabels: {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  },
};

const DEFAULT_ROWS: DebateStyleComparisonRow[] = [
  {
    style: "Bluster",
    emoji: "🎭",
    strength: "High burst damage, overwhelming confidence",
    weakness: "Vulnerable to Provocation that triggers doubt",
    cardTypes: ["Damage", "Defense", "Confidence boost"],
    bestAgainst: "Filibuster",
    weakAgainst: "Provocation",
    playStyle: "Aggressive, direct, high-risk high-reward",
    inspirationCost: "moderate_high",
    inspirationCostLabel: "Moderate to High",
    defensibility: "low",
    defensibilityLabel: "Low",
  },
  {
    style: "Provocation",
    emoji: "⚡",
    strength: "Emotional damage, silencing effects, momentum building",
    weakness: "Easily countered by logical Rebuttal",
    cardTypes: ["Emotional damage", "Silence", "Momentum"],
    bestAgainst: "Bluster",
    weakAgainst: "Rebuttal",
    playStyle: "Chaotic, personal, high variance",
    inspirationCost: "moderate",
    inspirationCostLabel: "Moderate",
    defensibility: "very_low",
    defensibilityLabel: "Very Low",
  },
  {
    style: "Rebuttal",
    emoji: "🎯",
    strength: "Logical damage, defensive blocking, evidence-based",
    weakness: "Slow-paced, vulnerable to Filibuster's endless talk",
    cardTypes: ["Logical damage", "Defense", "Fact-based"],
    bestAgainst: "Provocation",
    weakAgainst: "Filibuster",
    playStyle: "Methodical, controlled, consistent damage",
    inspirationCost: "moderate",
    inspirationCostLabel: "Moderate",
    defensibility: "high",
    defensibilityLabel: "High",
  },
  {
    style: "Filibuster",
    emoji: "📢",
    strength: "Sustained damage, overwhelming volume, recovery",
    weakness: "Cannot counter Bluster's direct assertions",
    cardTypes: ["Sustained damage", "Durability", "Verbosity"],
    bestAgainst: "Rebuttal",
    weakAgainst: "Bluster",
    playStyle: "Tanky, endurance-focused, attrition warfare",
    inspirationCost: "high",
    inspirationCostLabel: "High",
    defensibility: "moderate",
    defensibilityLabel: "Moderate",
  },
];

const DEFAULT_META_ROWS: MetaRow[] = [
  {
    style: "Bluster",
    beats: "Filibuster",
    beatenBy: "Provocation",
    difficultyVsBluster: "hard",
    difficultyVsRebuttal: "easy",
    styleCellClassName:
      "bg-red-900/20 border border-red-700/50 text-red-300 font-semibold",
  },
  {
    style: "Provocation",
    beats: "Bluster",
    beatenBy: "Rebuttal",
    difficultyVsBluster: "easy",
    difficultyVsRebuttal: "hard",
    styleCellClassName:
      "bg-orange-900/20 border border-orange-700/50 text-orange-300 font-semibold",
  },
  {
    style: "Rebuttal",
    beats: "Provocation",
    beatenBy: "Filibuster",
    difficultyVsBluster: "medium",
    difficultyVsRebuttal: "hard",
    styleCellClassName:
      "bg-blue-900/20 border border-blue-700/50 text-blue-300 font-semibold",
  },
  {
    style: "Filibuster",
    beats: "Rebuttal",
    beatenBy: "Bluster",
    difficultyVsBluster: "hard",
    difficultyVsRebuttal: "medium",
    styleCellClassName:
      "bg-violet-900/20 border border-violet-700/50 text-violet-300 font-semibold",
  },
];

const inspirationWidth = (cost: DebateStyleComparisonRow["inspirationCost"]) => {
  if (cost === "moderate") return "50%";
  if (cost === "moderate_high") return "75%";
  return "90%";
};

const defensibilityWidth = (value: DebateStyleComparisonRow["defensibility"]) => {
  if (value === "very_low") return "10%";
  if (value === "low") return "25%";
  if (value === "moderate") return "50%";
  return "75%";
};

type Props = {
  rows?: DebateStyleComparisonRow[];
  metaRows?: MetaRow[];
  uiText?: Partial<StyleComparisonUiText>;
};

export default function StyleComparisonTable({ rows, metaRows, uiText }: Props) {
  const resolvedUiText: StyleComparisonUiText = {
    ...DEFAULT_UI_TEXT,
    ...uiText,
    metaHeaders: { ...DEFAULT_UI_TEXT.metaHeaders, ...(uiText?.metaHeaders ?? {}) },
    difficultyLabels: { ...DEFAULT_UI_TEXT.difficultyLabels, ...(uiText?.difficultyLabels ?? {}) },
  };

  const resolvedRows = rows ?? DEFAULT_ROWS;
  const resolvedMetaRows = metaRows ?? DEFAULT_META_ROWS;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
      <h2 className="text-2xl font-bold text-slate-50">{resolvedUiText.title}</h2>
      <p className="text-slate-200">{resolvedUiText.intro}</p>

      <div className="space-y-6">
        {resolvedRows.map((style) => (
          <div key={style.style} className="rounded-2xl border border-slate-700 bg-slate-800/30 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/40 p-4 border-b border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
                <span className="text-3xl">{style.emoji}</span>
                {style.style}
              </h3>
            </div>

            <div className="p-5 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300 mb-2">{resolvedUiText.strengths}</h4>
                    <p className="text-sm text-slate-300">{style.strength}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-red-300 mb-2">{resolvedUiText.weaknesses}</h4>
                    <p className="text-sm text-slate-300">{style.weakness}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-blue-300 mb-2">{resolvedUiText.cardTypes}</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.cardTypes.map((type) => (
                        <span
                          key={type}
                          className="px-2 py-1 rounded-md bg-slate-700/50 border border-slate-600 text-xs text-slate-300"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-slate-900/50 p-3 border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">{resolvedUiText.bestAgainst}</p>
                      <p className="text-sm font-bold text-emerald-300">{style.bestAgainst}</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/50 p-3 border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">{resolvedUiText.weakAgainst}</p>
                      <p className="text-sm font-bold text-red-300">{style.weakAgainst}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-amber-300 mb-2">{resolvedUiText.inspirationCost}</h4>
                    <div className="w-full bg-slate-900/50 rounded-lg h-2 border border-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                        style={{ width: inspirationWidth(style.inspirationCost) }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{style.inspirationCostLabel}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-purple-300 mb-2">{resolvedUiText.defensibility}</h4>
                    <div className="w-full bg-slate-900/50 rounded-lg h-2 border border-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        style={{ width: defensibilityWidth(style.defensibility) }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{style.defensibilityLabel}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-3">
                <h4 className="text-sm font-bold text-cyan-300 mb-2">{resolvedUiText.playStyle}</h4>
                <p className="text-sm text-slate-300 italic">&ldquo;{style.playStyle}&rdquo;</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-5 overflow-x-auto">
        <h3 className="text-lg font-bold text-slate-50 mb-4">{resolvedUiText.metaTitle}</h3>
        <div className="min-w-full">
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold">
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">{resolvedUiText.metaHeaders.style}</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">{resolvedUiText.metaHeaders.beats}</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">{resolvedUiText.metaHeaders.beatenBy}</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">
              {resolvedUiText.metaHeaders.difficultyVsBluster}
            </div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">
              {resolvedUiText.metaHeaders.difficultyVsRebuttal}
            </div>
          </div>
          {resolvedMetaRows.map((row) => (
            <div key={row.style} className="grid grid-cols-5 gap-2 text-center text-xs mt-2">
              <div className={`p-2 rounded ${row.styleCellClassName}`}>{row.style}</div>
              <div className="p-2 rounded border border-slate-700 text-emerald-300">{row.beats}</div>
              <div className="p-2 rounded border border-slate-700 text-red-300">{row.beatenBy}</div>
              <div className="p-2 rounded border border-slate-700 text-slate-300">
                {resolvedUiText.difficultyLabels[row.difficultyVsBluster]}
              </div>
              <div className="p-2 rounded border border-slate-700 text-slate-300">
                {resolvedUiText.difficultyLabels[row.difficultyVsRebuttal]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

