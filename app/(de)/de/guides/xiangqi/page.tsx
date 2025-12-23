import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Schach (Xiangqi) Puzzle Guide",
  description:
    "Kurzer Guide für Where Winds Meet Xiangqi/Schach-Puzzles: Checkliste, typische Muster und praktische Tipps für schnelle Lösungen.",
  alternates: buildHreflangAlternates("/guides/xiangqi", { canonicalLanguage: "de" }),
};

export default function XiangqiGuidePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Guide</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Schach</span> (Xiangqi) puzzles
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
          Einige Quests/NPC-Challenges enthalten Chinese Chess (Xiangqi). Oft reicht ein Tempo-Fehler und die Stellung
          kippt komplett.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Das hier ist kein Lehrbuch, sondern eine Spieler-Checkliste: wie du schnell Gewinnlinien findest – und was du
          machst, wenn du einfach nur die Lösung brauchst.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-2xl font-bold text-slate-50">Schnelle Checkliste</h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Wer ist am Zug</span> und was ist das Ziel (Mate, Material,
              Perpetual Check)?
            </li>
            <li>
              <span className="font-semibold text-slate-100">Alle Checks auflisten</span>. Checks sind in Xiangqi extrem
              forcing.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Cannon + Screen</span>: Kanonen (炮/砲) gewinnen viele
              Puzzles über einen festen “Screen”.
            </li>
            <li>
              <span className="font-semibold text-slate-100">General einschränken</span>, dann convert. Erst Fluchtfelder
              zumachen, dann Material einsammeln.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Counter-Checks</span> beachten – oft ist das die einzige
              Rettung des Gegners.
            </li>
          </ol>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
            Festgefahren? Nicht planlos klicken. Starte mit Checks, dann suche nach Cannon+Screen-Shots und Rook+Cannon
            Netzen. Später kannst du zurückkommen und verstehen, warum die Line funktioniert.
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                href="/de/tools"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
              >
                Tools Hub öffnen →
              </Link>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-bold text-slate-50">Quick reminders</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Rooks (车/車)</span>: offene Files = direkte Checks prüfen.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Horses (马/馬)</span>: “Leg” kann blockiert sein.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Advisor/Elephant</span> sind zonen-gebunden – viele Mates
              funktionieren, weil Verteidiger nicht hin dürfen.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Facing generals</span>: Generäle dürfen sich nicht auf einer
              offenen File gegenüberstehen.
            </li>
          </ul>
        </aside>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Typische Puzzle-Muster</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Cannon ladder checks</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Mit stabilem Screen werden Cannons extrem forcing: Check → Block → Screen/Line umstellen → nächster Check.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Rook + cannon “net”</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Rook kontrolliert File/Rank, Cannon checkt durch Screen. Selbst ohne sofortiges Mate fällt oft Material.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Sacrifice, um eine File zu öffnen</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Häufig ist die Lösung ein Opfer, das die Linie zwischen Rook/Cannon und dem General freiräumt.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Perpetual check</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Wenn kein Convert möglich ist, kann Perpetual Check die “Rettungs”-Lösung sein (je nach Quest-Ziel).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
