import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Chess (Xiangqi) Puzzle Guide",
  description:
    "Learn how to solve Where Winds Meet chess puzzles (Xiangqi): a practical checklist, common tactics, and player-friendly puzzle patterns.",
  alternates: buildHreflangAlternates("/guides/xiangqi"),
};

export default function XiangqiGuidePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Guide</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Chess</span> (Xiangqi) puzzles
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
          Some Where Winds Meet quests and NPC challenges include Chinese chess (Xiangqi) puzzles. They can feel
          deceptively hard because one tempo mistake often flips the entire position.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          This page is not a full Xiangqi textbook. It is a player-focused checklist: how to quickly spot winning lines,
          and what to do when you just want the answer and need to move on.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-2xl font-bold text-slate-50">Fast solve checklist</h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Confirm side to move</span> and the objective (mate, win
              material, force perpetual check). Many “puzzle” positions are actually about one forcing sequence.
            </li>
            <li>
              <span className="font-semibold text-slate-100">List every checking move</span>. In Xiangqi, checks are
              especially forcing because the general (king) has fewer legal escape squares.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Look for “cannon + screen” shots</span>. Cannons (炮/砲)
              often win puzzles by using a single piece as the screen, delivering check through that screen.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Restrict the general first</span>, then win. If you cannot
              mate immediately, force the king into a cornered shape where rooks/cannons seal exits.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Watch for counter-checks</span>. Many failed lines lose
              because you ignore the opponent’s only forcing move back.
            </li>
          </ol>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
            Stuck? Don’t brute-force random moves. Start with checks, then look for “cannon + screen” shots and rook +
            cannon nets. Come back later to understand <em>why</em> the line works.
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                href="/tools"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
              >
                Open tools hub →
              </Link>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-bold text-slate-50">Quick reminders</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Rooks (车/車)</span> dominate open files. If a file opens,
              check for immediate rook checks.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Horses (马/馬)</span> get blocked. Always verify the “leg”
              square is not occupied.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Advisors/elephants</span> cannot leave their restricted
              zones. Many mates work because defenders simply cannot reach the critical square.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Facing generals rule</span>: the two generals cannot face
              each other on the same file with no pieces between.
            </li>
          </ul>
        </aside>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Common puzzle patterns (player-friendly)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Cannon ladder checks</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Cannons become lethal when you can keep a stable screen. The usual pattern is: check, force a block, then
              relocate the screen or rook to deliver the next check while sealing escape squares.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Rook + cannon “net”</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              A rook controls a file or rank, and the cannon delivers check through a screen. Even if you do not mate
              instantly, you often win material because every defense is forced.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Sacrifice to open a file</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Many puzzles look “down material” because the correct move is to sacrifice a piece to clear the file
              between the rook/cannon and the general.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Perpetual check escape</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              If you cannot convert to a mate, perpetual check is often the “draw” or “pass” solution to save your run.
              Use it when the game only asks you to survive or avoid losing.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
