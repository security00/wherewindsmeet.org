import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DialogueCardsComponent from "./DialogueCardsComponent";
import StyleComparisonTable from "./StyleComparisonTable";
import EmbeddedVideoGallery from "./EmbeddedVideoGallery";
import GiftOfGabImages from "./GiftOfGabImages";

export const metadata: Metadata = {
  title: "Gift of Gab Guide – Where Winds Meet Dialogue Minigame",
  description:
    "Complete Gift of Gab guide. Learn how to play, master debate styles, use dialogue cards, and defeat opponents in Where Winds Meet's persuasion minigame.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/gift-of-gab",
  },
};

export default function GiftOfGabPage() {
  return (
    <article className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Gift of Gab background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-amber-300">Dialogue Minigame</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">Gift of Gab Guide</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Master the persuasion minigame. Choose the right debate style, manage your Inspiration, and win dialogue duels against NPCs.
          </p>
        </div>
      </section>

      {/* 1. What Is Gift of Gab? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">What Is The Gift Of Gab?</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-emerald-300">Card-Based Debate</p>
            <p className="text-xs text-slate-300">Use dialogue cards to reduce opponent's Mental Focus to zero</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-blue-300">Inspiration Resource</p>
            <p className="text-xs text-slate-300">Spend Inspiration to activate cards; regenerates automatically over time</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-purple-300">Timed Rounds</p>
            <p className="text-xs text-slate-300">No time pressure—play at your pace while managing resources</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
          Gift of Gab is a persuasion minigame where you engage in dialogue duels with NPCs. Instead of traditional combat, you win by strategically using dialogue cards to wear down your opponent's Mental Focus. Each debate requires you to manage your Inspiration (the resource that powers your cards) and make tactical choices about which cards to play and when.
        </p>
      </section>

      {/* Images Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-50">In-Game Interface</h3>
        <GiftOfGabImages />
      </section>

      {/* 2. Game Types */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">Two Types Of Gift Of Gab</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-700/30 bg-emerald-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-emerald-300">Free Persuasion</h3>
            <p className="text-sm text-slate-300">
              Chat directly with an AI chatbot. Make your own arguments in real-time. Useful for practicing rhetoric but inconsistent results.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-700/30 bg-blue-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-blue-300">Rhetoric Duel (Main Mode)</h3>
            <p className="text-sm text-slate-300">
              The standard mode. Use dialogue cards and manage Inspiration. Choose your debate style (Bluster, Provocation, Rebuttal, or Filibuster) at the start.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How To Play */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">How To Play Gift Of Gab</h2>

        {/* Debate Styles */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">Choose Your Debate Style</h3>
          <p className="text-sm text-slate-300 mb-4">Pick one style at the start. You cannot change mid-debate. Each style counters one other style in a rock-paper-scissors pattern.</p>

          <div className="grid gap-3">
            {[
              { name: "Bluster", emoji: "🎭", power: "High-damage aggressive rhetoric", counters: "Filibuster", weakness: "Provocation" },
              { name: "Provocation", emoji: "⚡", power: "Emotional attacks & silence", counters: "Bluster", weakness: "Rebuttal" },
              { name: "Rebuttal", emoji: "🎯", power: "Logical defense & blocking", counters: "Provocation", weakness: "Filibuster" },
              { name: "Filibuster", emoji: "📢", power: "Sustained damage & durability", counters: "Rebuttal", weakness: "Bluster" },
            ].map((style) => (
              <div key={style.name} className="rounded-xl border border-slate-700 bg-slate-800/30 p-4 flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{style.emoji}</div>
                <div className="space-y-1 flex-grow min-w-0">
                  <p className="font-semibold text-slate-50">{style.name}</p>
                  <p className="text-xs text-slate-400">{style.power}</p>
                  <p className="text-xs text-emerald-300">Beats: {style.counters}</p>
                  <p className="text-xs text-red-300">Weak to: {style.weakness}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Mechanics */}
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-slate-50">Core Mechanics</h3>

          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">📊 Mental Focus (Health Bar)</p>
              <p className="text-xs text-slate-300">You have a Mental Focus bar (lower left). Opponent has one (upper center). First to zero loses. <strong>You cannot recover lost Mental Focus</strong>—play defensively.</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">✨ Inspiration (Resource)</p>
              <p className="text-xs text-slate-300">Use Inspiration to activate dialogue cards. Regenerates automatically over time. Weak cards cost less; powerful cards cost more and take longer to recharge.</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">🃏 Dialogue Cards</p>
              <p className="text-xs text-slate-300">Cards deal damage, provide defense, lower opponent's defense, or heal Inspiration. Different styles have different card effects. You'll acquire more cards as you level up Scholar.</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-sm font-semibold text-slate-50 mb-2">💬 Trash Talk (Free QTE)</p>
              <p className="text-xs text-slate-300">Timed button prompts appear during debates. Press the button for free bonus effects—damage, defense, or utility. No cost, no cooldown. Never ignore these.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dialogue Cards Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Dialogue Cards Reference</h2>
        <p className="text-sm text-slate-300 mb-4">Browse all 20 dialogue cards across 5 styles. Cards show their cost, effect, and rarity.</p>
        <DialogueCardsComponent />
      </section>

      {/* Style Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Debate Styles Deep Dive</h2>
        <StyleComparisonTable />
      </section>

      {/* 4. How To Improve */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">How To Improve Your Performance</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-50">Scholar Legacy Career</h3>
          <p className="text-sm text-slate-300 mb-4">Unlock and level the Scholar career to unlock powerful Gift of Gab talents and stronger cards.</p>

          <ol className="space-y-3 list-decimal list-inside text-sm text-slate-300">
            <li><strong>Unlock:</strong> Reach Level 13+ and complete "Legacy: Scholar's Path" quest</li>
            <li><strong>Level Up:</strong> Earn Scholar Notebook pages from dialogue wins or seasonal shops</li>
            <li><strong>Unlock Talents:</strong> Upgrade attributes to unlock Scholar talents that boost card effects</li>
            <li><strong>Upgrade Cards:</strong> Improve individual card damage and effects with upgrade materials</li>
          </ol>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-4 mt-4">
            <p className="text-sm text-slate-300">
              <strong>Pro Tip:</strong> Prioritize talents that increase Inspiration maximum and regeneration speed. These directly improve your ability to chain powerful cards together.
            </p>
          </div>
        </div>

        <div className="space-y-4 mt-8">
          <h3 className="text-lg font-semibold text-slate-50">Key Strategy Tips</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>✓ <strong>Pick the recommended style.</strong> The game suggests the optimal choice for each opponent.</li>
            <li>✓ <strong>Play defensively early.</strong> Don't lose Mental Focus too fast—you can't recover it.</li>
            <li>✓ <strong>Wait for Inspiration.</strong> Don't waste it. Hold expensive cards until you have enough Inspiration.</li>
            <li>✓ <strong>Grab free damage.</strong> Always activate Trash Talk QTE prompts.</li>
            <li>✓ <strong>Finish with burst.</strong> As the timer runs low, use your strongest damage cards.</li>
          </ul>
        </div>
      </section>

      {/* Video Guides */}
      <section className="space-y-6">
        <EmbeddedVideoGallery />
      </section>

      {/* Quick Reference */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Quick Reference</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="text-sm"><strong className="text-emerald-300">Win Condition:</strong> <span className="text-slate-300">Reduce opponent's Mental Focus to 0</span></div>
          <div className="text-sm"><strong className="text-blue-300">Resource:</strong> <span className="text-slate-300">Inspiration (regenerates automatically)</span></div>
          <div className="text-sm"><strong className="text-red-300">Critical Rule:</strong> <span className="text-slate-300">No Mental Focus recovery—play defensively</span></div>
          <div className="text-sm"><strong className="text-amber-300">Free Damage:</strong> <span className="text-slate-300">Trash Talk QTE buttons appear during debates</span></div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-5 space-y-3">
          <h3 className="font-semibold text-slate-50">Related Minigames</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link href="/guides/skill-theft" className="underline underline-offset-2 hover:text-emerald-100">
                Skill Theft: Observation Minigame
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-5 space-y-3">
          <h3 className="font-semibold text-slate-50">Core Guides</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link href="/guides/builds" className="underline underline-offset-2 hover:text-emerald-100">
                Best Builds & Character Optimization
              </Link>
            </li>
            <li>
              <Link href="/guides/new-players" className="underline underline-offset-2 hover:text-emerald-100">
                New Player Route
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
