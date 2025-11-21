import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DialogueCardsComponent from "./DialogueCardsComponent";
import StyleComparisonTable from "./StyleComparisonTable";
import VideoGallery from "./VideoGallery";

export const metadata: Metadata = {
  title: "Gift of Gab Guide – Where Winds Meet Dialogue Minigame",
  description:
    "Complete Gift of Gab dialogue card minigame guide for Where Winds Meet. Learn debate styles, card strategies, dialogue cards effects, and tips to win every persuasion battle.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/gift-of-gab",
  },
};

export default function GiftOfGabPage() {
  return (
    <article className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Gift of Gab dialogue minigame background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-amber-300">
            Dialogue Minigame
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Gift of Gab: Master the Art of Rhetoric
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Win debates with NPC characters through strategic card selection. Choose the right rhetoric style, manage your inspiration, and dominate dialogue duels to level up your Gifted Talker ability.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <a href="#game-overview" className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm font-medium text-emerald-300 hover:border-emerald-400 hover:bg-slate-900 transition-all">
          Game Overview
        </a>
        <a href="#debate-styles" className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm font-medium text-emerald-300 hover:border-emerald-400 hover:bg-slate-900 transition-all">
          Debate Styles
        </a>
        <a href="#core-mechanics" className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm font-medium text-emerald-300 hover:border-emerald-400 hover:bg-slate-900 transition-all">
          Core Mechanics
        </a>
        <a href="#winning-strategy" className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm font-medium text-emerald-300 hover:border-emerald-400 hover:bg-slate-900 transition-all">
          Winning Strategy
        </a>
      </div>

      {/* Game Overview */}
      <section id="game-overview" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">What is Gift of Gab?</h2>
        <div className="space-y-4 text-slate-200">
          <p>
            Gift of Gab is a <strong>persuasion minigame</strong> where you engage in rhetoric duels with NPCs throughout the game world. Instead of combat, you win by using dialogue cards strategically to reduce your opponent's <strong>Mental Focus</strong> to zero.
          </p>
          <p>
            This minigame is key to the <strong>Scholar Legacy</strong> career path. Victory rewards exploration inspiration and unlocks special interactions with NPCs, making it essential for story progression and character development.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-700/30 bg-emerald-950/20 p-4 space-y-2">
            <h3 className="text-sm font-bold text-emerald-300">Free Persuasion Mode</h3>
            <p className="text-xs text-slate-300">Chat with AI bots directly and debate using your own arguments</p>
          </div>
          <div className="rounded-2xl border border-blue-700/30 bg-blue-950/20 p-4 space-y-2">
            <h3 className="text-sm font-bold text-blue-300">Rhetoric Duel Mode</h3>
            <p className="text-xs text-slate-300">Main mode using card system. Time-limited rounds where you select cards strategically</p>
          </div>
          <div className="rounded-2xl border border-orange-700/30 bg-orange-950/20 p-4 space-y-2">
            <h3 className="text-sm font-bold text-orange-300">Stat-Based</h3>
            <p className="text-xs text-slate-300">Scholar career and attribute upgrades enhance your card effects and inspiration recovery</p>
          </div>
        </div>
      </section>

      {/* Debate Styles */}
      <section id="debate-styles" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">The Four Debate Styles</h2>
        <p className="text-slate-200">
          Before each rhetoric duel, choose ONE debate style. This choice is permanent for that debate and determines which cards you'll use and what counters your opponent will employ.
        </p>

        <div className="grid gap-4">
          {/* Bluster */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-50">🎭 Bluster</h3>
                <p className="text-xs text-slate-400 mt-1">Overwhelming confidence and swagger</p>
              </div>
              <span className="text-2xl">VS Provocation</span>
            </div>
            <p className="text-sm text-slate-300">
              Use bombastic rhetoric and confident assertions to overwhelm your opponent. This style features aggressive statements and confident dismissals.
            </p>
            <p className="text-xs text-amber-300/80">
              <strong>Countered by:</strong> Provocation – opponents can provoke you into making weaker arguments
            </p>
          </div>

          {/* Provocation */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-50">⚡ Provocation</h3>
                <p className="text-xs text-slate-400 mt-1">Inciting emotional reactions</p>
              </div>
              <span className="text-2xl">VS Rebuttal</span>
            </div>
            <p className="text-sm text-slate-300">
              Trigger emotional responses from your opponent, making them lose focus and commit logical fallacies.
            </p>
            <p className="text-xs text-amber-300/80">
              <strong>Countered by:</strong> Rebuttal – logical counters neutralize your emotional attacks
            </p>
          </div>

          {/* Rebuttal */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-50">🎯 Rebuttal</h3>
                <p className="text-xs text-slate-400 mt-1">Logical counter-arguments</p>
              </div>
              <span className="text-2xl">VS Filibuster</span>
            </div>
            <p className="text-sm text-slate-300">
              Systematically dismantle your opponent's arguments with logic and evidence. Strong against emotional appeals.
            </p>
            <p className="text-xs text-amber-300/80">
              <strong>Countered by:</strong> Filibuster – overwhelming verbosity can sidestep your logical points
            </p>
          </div>

          {/* Filibuster */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-50">📢 Filibuster</h3>
                <p className="text-xs text-slate-400 mt-1">Endless streams of words</p>
              </div>
              <span className="text-2xl">VS Bluster</span>
            </div>
            <p className="text-sm text-slate-300">
              Bury your opponent under sheer volume of words and lengthy explanations, drowning out their counterarguments.
            </p>
            <p className="text-xs text-amber-300/80">
              <strong>Countered by:</strong> Bluster – overwhelming confidence cuts through your verbosity
            </p>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 mt-4">
          <p className="text-sm text-slate-300">
            <strong>Tip:</strong> The game will recommend the most effective style for each debate. Pay attention to the recommendation—it's usually the winning choice. You cannot change styles mid-debate.
          </p>
        </div>
      </section>

      {/* Style Comparison Table */}
      <StyleComparisonTable />

      {/* Dialogue Cards */}
      <DialogueCardsComponent />

      {/* Video Gallery */}
      <VideoGallery />

      {/* Core Mechanics */}
      <section id="core-mechanics" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Core Mechanics & Systems</h2>

        <div className="space-y-6">
          {/* Mental Focus */}
          <div className="rounded-2xl border border-red-700/30 bg-red-950/20 p-5 space-y-3">
            <h3 className="text-lg font-bold text-red-300">Mental Focus</h3>
            <p className="text-sm text-slate-300">
              Your Mental Focus bar is located in the <strong>lower left</strong> of the screen. Your opponent's is in the <strong>upper center</strong>. Reduce your opponent's Mental Focus to zero to win the debate.
            </p>
            <p className="text-sm text-slate-300">
              <strong>Critical:</strong> Unlike health in combat, <strong>once your Mental Focus is lost, you cannot recover it</strong>. This means you must play defensively and carefully manage your resources.
            </p>
          </div>

          {/* Inspiration Points */}
          <div className="rounded-2xl border border-blue-700/30 bg-blue-950/20 p-5 space-y-3">
            <h3 className="text-lg font-bold text-blue-300">Inspiration Points</h3>
            <p className="text-sm text-slate-300">
              You spend Inspiration to activate dialogue cards. Inspiration <strong>regenerates automatically</strong> over time during the debate.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong>Weak cards</strong> cost less inspiration and regenerate faster</li>
              <li><strong>Powerful cards</strong> cost more inspiration and have longer cooldown periods</li>
              <li><strong>Increase maximum Inspiration</strong> by leveling Scholar career or upgrading attributes</li>
            </ul>
          </div>

          {/* Dialogue Cards */}
          <div className="rounded-2xl border border-emerald-700/30 bg-emerald-950/20 p-5 space-y-3">
            <h3 className="text-lg font-bold text-emerald-300">Dialogue Cards</h3>
            <p className="text-sm text-slate-300">
              Each card has a specific effect when activated. Cards serve multiple purposes:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong>Damage:</strong> Directly reduce opponent's Mental Focus</li>
              <li><strong>Defense:</strong> Reduce incoming damage from opponent's attacks</li>
              <li><strong>Debuff:</strong> Lower opponent's defense or silence their abilities</li>
              <li><strong>Support:</strong> Restore your focus, accelerate inspiration recovery</li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">
              New dialogue cards are added to your deck throughout the game as you progress and unlock new styles of rhetoric.
            </p>
          </div>

          {/* Trash Talk System */}
          <div className="rounded-2xl border border-amber-700/30 bg-amber-950/20 p-5 space-y-3">
            <h3 className="text-lg font-bold text-amber-300">Trash Talk QTE Events</h3>
            <p className="text-sm text-slate-300">
              During debates, <strong>Trash Talk prompts appear on both sides of the screen</strong>. When activated, you can choose from THREE different effects:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li>These are <strong>completely free</strong> to activate</li>
              <li>Tap the button when the prompt appears to activate your chosen effect</li>
              <li>Effects vary—some deal damage, others provide defense or utility</li>
              <li>Don't spend time reading; prioritize pressing the button quickly</li>
            </ul>
          </div>

          {/* Timing & Resource Management */}
          <div className="rounded-2xl border border-purple-700/30 bg-purple-950/20 p-5 space-y-3">
            <h3 className="text-lg font-bold text-purple-300">Timing & Resource Management</h3>
            <p className="text-sm text-slate-300">
              Each debate round has a <strong>countdown timer</strong>. Strategic timing is crucial:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong>Early rounds:</strong> Build up resources, use low-cost cards to manage tempo</li>
              <li><strong>Mid-game:</strong> Balance offense and defense as both sides damage each other</li>
              <li><strong>Late rounds:</strong> As timer runs out, prioritize pure damage cards to finish the opponent</li>
              <li><strong>Don't over-read:</strong> Avoid spending precious seconds reading card descriptions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Winning Strategy */}
      <section id="winning-strategy" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Winning Strategy & Tips</h2>

        <div className="space-y-4">
          <div className="bg-emerald-950/30 border border-emerald-700/50 rounded-2xl p-5">
            <h3 className="font-bold text-emerald-300 mb-3">🎯 Core Strategy</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
              <li><strong>Pick the recommended style.</strong> The game's suggestion is usually optimal. Trust it.</li>
              <li><strong>Play defensively early.</strong> Don't let your Mental Focus drop too fast. Recovery is impossible.</li>
              <li><strong>Balance offense and defense.</strong> Mix damage cards with defensive cards.</li>
              <li><strong>Leverage inspiration regeneration.</strong> Use low-cost cards while inspiration regenerates, then unleash high-cost damage cards when ready.</li>
              <li><strong>Grab free damage from Trash Talk.</strong> Always activate Trash Talk QTEs—they're free damage with no cooldown.</li>
              <li><strong>Finish with burst damage.</strong> As the timer runs low, switch to pure damage cards to close out the debate.</li>
            </ol>
          </div>

          <div className="bg-blue-950/30 border border-blue-700/50 rounded-2xl p-5">
            <h3 className="font-bold text-blue-300 mb-3">⚡ Advanced Tactics</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong>Card combos:</strong> Some cards work well together. Debuffs that lower defense pair well with high-damage cards.</li>
              <li><strong>Silencing:</strong> If your opponent has dangerous cards, use cards that silence or disable their abilities.</li>
              <li><strong>Inspiration timing:</strong> Wait for inspiration to regenerate before using expensive cards. Rushing leads to weak plays.</li>
              <li><strong>Opponent patterns:</strong> Notice which cards your opponent favors and counter with defensive cards or silences.</li>
              <li><strong>Focus generation:</strong> Some cards heal your Mental Focus slightly or accelerate inspiration recovery. Prioritize these in tight matches.</li>
            </ul>
          </div>

          <div className="bg-amber-950/30 border border-amber-700/50 rounded-2xl p-5">
            <h3 className="font-bold text-amber-300 mb-3">💡 Common Mistakes to Avoid</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong>Don't panic.</strong> If your Mental Focus drops, stay calm and focus on defense, not recovery.</li>
              <li><strong>Don't waste inspiration.</strong> Hold high-cost cards until you have enough inspiration to use them immediately.</li>
              <li><strong>Don't ignore Trash Talk.</strong> Free damage is too valuable to miss.</li>
              <li><strong>Don't fight the recommended style.</strong> Choosing the "wrong" style makes every debate harder.</li>
              <li><strong>Don't neglect Scholar leveling.</strong> Higher Scholar levels unlock more powerful cards and boost card effects.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leveling & Progression */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Gift of Gab Progression & Leveling</h2>

        <div className="space-y-4">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
            <h3 className="font-bold text-slate-50 mb-3">Unlocking Scholar Career</h3>
            <p className="text-sm text-slate-300 mb-2">
              To access Gift of Gab leveling, you must first unlock the <strong>Scholar Career</strong>:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-slate-300 ml-2">
              <li>Reach <strong>Level 13+</strong> in the main story</li>
              <li>Complete the <strong>"Legacy: Scholar's Path"</strong> quest</li>
              <li>Access the <strong>Career Menu</strong> to view and upgrade your Scholar rank</li>
            </ol>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
            <h3 className="font-bold text-slate-50 mb-3">Scholar Leveling</h3>
            <p className="text-sm text-slate-300 mb-3">
              There are <strong>5 Scholar levels</strong>, each with <strong>5 stages</strong> (25 total stages).
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong>How to level:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Acquire <strong>Scholar Notebook pages</strong> to upgrade your Scholar level</li>
                <li>Win Gift of Gab debates to earn dialogue cards and materials</li>
                <li>Purchase <strong>Scholar Gift Boxes</strong> from the seasonal shop (4 Jade points each)</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
            <h3 className="font-bold text-slate-50 mb-3">Upgrading Gift of Gab Cards</h3>
            <p className="text-sm text-slate-300 mb-2">
              Each dialogue card can be upgraded to increase its effectiveness:
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Upgrade materials vary by card and style</li>
                <li>Materials drop from winning debates and seasonal shop boxes</li>
                <li>Purchase materials from <strong>Scholar Gift Boxes</strong> or <strong>Custom Career Gift Boxes</strong></li>
                <li>Prioritize upgrading cards you use frequently</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attribute Synergy */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Attribute Synergies & Talent System</h2>

        <p className="text-slate-200">
          The Scholar Legacy career works best when you upgrade your character's five main attributes. As each attribute reaches specific thresholds, you unlock related talents that boost Gift of Gab performance.
        </p>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4">
            <h3 className="font-bold text-slate-50 mb-2">Five Main Attributes</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>Upgrading <strong>all five attributes</strong> unlocks powerful related talents</li>
              <li>These talents significantly enhance your Gift of Gab card effects</li>
              <li>Plan your attribute distribution to unlock key talents early</li>
              <li>Scholar talents focus on inspiration recovery and card damage</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4">
            <h3 className="font-bold text-slate-50 mb-2">Talent Priorities</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>Prioritize talents that <strong>increase inspiration maximum</strong></li>
              <li>Unlock talents that <strong>boost card damage output</strong></li>
              <li>Talents that <strong>accelerate inspiration regeneration</strong> are extremely valuable</li>
              <li>Defense-boosting talents help you survive late-game pressure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips & Guides */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Final Tips & Resources</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5">
              <h3 className="font-bold text-slate-50 mb-3">For Beginners</h3>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
                <li>Try both Free Persuasion and Rhetoric Duel modes</li>
                <li>Always take the game's recommended debate style</li>
                <li>Focus on survival over damage in early debates</li>
                <li>Collect dialogue cards by winning debates</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5">
              <h3 className="font-bold text-slate-50 mb-3">For Veterans</h3>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
                <li>Master card combo chains for burst damage</li>
                <li>Level Scholar to maximum for powerful cards</li>
                <li>Farm debate victories for upgrade materials</li>
                <li>Optimize attribute builds around Gift of Gab talents</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5">
            <h3 className="font-bold text-slate-50 mb-3">Quick Reference</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p><strong>Win Condition:</strong> Reduce opponent's Mental Focus to 0</p>
              <p><strong>Resource:</strong> Inspiration (regenerates automatically)</p>
              <p><strong>Weakness:</strong> No recovery for lost Mental Focus</p>
              <p><strong>Free Rewards:</strong> Trash Talk QTE events (both sides)</p>
              <p><strong>Best Path:</strong> Scholar Career → Level → Unlock Talents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Explore More Minigames</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link
                href="/guides/skill-theft"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Skill Theft Guide: Observation Minigame
              </Link>
            </li>
            <li>
              <Link
                href="/guides/builds"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Best Builds: Strategies for Every Playstyle
              </Link>
            </li>
            <li>
              <Link
                href="/guides/new-players"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                New Player Route: Essential First Steps
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Core Progression</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link
                href="/guides/endgame"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Endgame Guide: Post-Story Progression
              </Link>
            </li>
            <li>
              <Link
                href="/guides/bosses"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Boss Guide: Pre-Battle Preparation
              </Link>
            </li>
            <li>
              <Link
                href="/guides/items"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Items Index: Materials & Consumables
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
