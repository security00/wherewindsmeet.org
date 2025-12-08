export default function StyleComparisonTable() {
  const styleComparison = [
    {
      style: "Bluster",
      emoji: "🎭",
      strength: "High burst damage, overwhelming confidence",
      weakness: "Vulnerable to Provocation that triggers doubt",
      cardTypes: ["Damage", "Defense", "Confidence boost"],
      bestAgainst: "Filibuster",
      weakAgainst: "Provocation",
      playStyle: "Aggressive, direct, high-risk high-reward",
      inspirationCost: "Moderate to High",
      defensibility: "Low",
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
      inspirationCost: "Moderate",
      defensibility: "Very Low",
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
      inspirationCost: "Moderate",
      defensibility: "High",
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
      inspirationCost: "High",
      defensibility: "Moderate",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
      <h2 className="text-2xl font-bold text-slate-50">Debate Styles Detailed Comparison</h2>
      <p className="text-slate-200">
        Compare the four debate styles head-to-head to understand their matchups, strengths, and optimal play patterns.
      </p>

      <div className="space-y-6">
        {styleComparison.map((style) => (
          <div key={style.style} className="rounded-2xl border border-slate-700 bg-slate-800/30 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/40 p-4 border-b border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
                <span className="text-3xl">{style.emoji}</span>
                {style.style}
              </h3>
            </div>

            <div className="p-5 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300 mb-2">Strengths</h4>
                    <p className="text-sm text-slate-300">{style.strength}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-red-300 mb-2">Weaknesses</h4>
                    <p className="text-sm text-slate-300">{style.weakness}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-blue-300 mb-2">Card Types</h4>
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

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-slate-900/50 p-3 border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">Best Against</p>
                      <p className="text-sm font-bold text-emerald-300">{style.bestAgainst}</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/50 p-3 border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">Weak Against</p>
                      <p className="text-sm font-bold text-red-300">{style.weakAgainst}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-amber-300 mb-2">Inspiration Cost</h4>
                    <div className="w-full bg-slate-900/50 rounded-lg h-2 border border-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                        style={{
                          width:
                            style.inspirationCost === "Low"
                              ? "25%"
                              : style.inspirationCost === "Moderate"
                                ? "50%"
                                : "75%",
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{style.inspirationCost}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-purple-300 mb-2">Defensibility</h4>
                    <div className="w-full bg-slate-900/50 rounded-lg h-2 border border-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        style={{
                          width:
                            style.defensibility === "Very Low"
                              ? "10%"
                              : style.defensibility === "Low"
                                ? "25%"
                                : style.defensibility === "Moderate"
                                  ? "50%"
                                  : "75%",
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{style.defensibility}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-3">
                <h4 className="text-sm font-bold text-cyan-300 mb-2">Play Style</h4>
                <p className="text-sm text-slate-300 italic">&ldquo;{style.playStyle}&rdquo;</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Meta Table */}
      <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-5 overflow-x-auto">
        <h3 className="text-lg font-bold text-slate-50 mb-4">Rock-Paper-Scissors Meta</h3>
        <div className="min-w-full">
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold">
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">Style</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">Beats</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">Beaten By</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">Difficulty vs Bluster</div>
            <div className="p-2 rounded bg-slate-900/50 border border-slate-700">Difficulty vs Rebuttal</div>
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs mt-2">
            <div className="p-2 rounded bg-red-900/20 border border-red-700/50 text-red-300 font-semibold">
              Bluster
            </div>
            <div className="p-2 rounded border border-slate-700 text-emerald-300">Filibuster</div>
            <div className="p-2 rounded border border-slate-700 text-red-300">Provocation</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Hard</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Easy</div>
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs mt-2">
            <div className="p-2 rounded bg-orange-900/20 border border-orange-700/50 text-orange-300 font-semibold">
              Provocation
            </div>
            <div className="p-2 rounded border border-slate-700 text-emerald-300">Bluster</div>
            <div className="p-2 rounded border border-slate-700 text-red-300">Rebuttal</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Easy</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Hard</div>
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs mt-2">
            <div className="p-2 rounded bg-blue-900/20 border border-blue-700/50 text-blue-300 font-semibold">
              Rebuttal
            </div>
            <div className="p-2 rounded border border-slate-700 text-emerald-300">Provocation</div>
            <div className="p-2 rounded border border-slate-700 text-red-300">Filibuster</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Medium</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Hard</div>
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs mt-2">
            <div className="p-2 rounded bg-violet-900/20 border border-violet-700/50 text-violet-300 font-semibold">
              Filibuster
            </div>
            <div className="p-2 rounded border border-slate-700 text-emerald-300">Rebuttal</div>
            <div className="p-2 rounded border border-slate-700 text-red-300">Bluster</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Hard</div>
            <div className="p-2 rounded border border-slate-700 text-slate-300">Medium</div>
          </div>
        </div>
      </div>
    </section>
  );
}
