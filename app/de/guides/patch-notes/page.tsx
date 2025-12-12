import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Patch Notes (DE) | Where Winds Meet",
  description: "Kompakte Highlights: Balance-Tuning, Cooldowns, Meta-Verschiebungen. Schnell nachlesen, was sich geändert hat.",
  alternates: buildHreflangAlternates("/guides/patch-notes", { canonicalLanguage: "de" }),
};

export default function PatchNotesDePage() {
  return (
    <article className="space-y-8 bg-ink-wash min-h-screen pb-16 rounded-3xl border border-slate-800/70 p-6 sm:p-8 shadow-lg">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-wide text-emerald-300">Updates</p>
        <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Patch Notes – Kurzfassung</h1>
        <p className="text-slate-300 leading-relaxed">
          Hier fassen wir die wichtigsten Änderungen zusammen: Schadenstuning, Cooldowns, Meta-Verschiebungen und eventuelle neue Freebies.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-sm text-slate-200">
        <p>Aktuelle Patch-Highlights werden nach offiziellen Releases ergänzt. Schau auch in den News-Bereich für verlinkte offizielle Notes.</p>
      </section>
    </article>
  );
}
