import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistTool } from "@/components/ChecklistTool";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Checkliste (Daily & Weekly)",
  description:
    "Praktische Daily- und Weekly-Checkliste für Where Winds Meet: anpassbar, lokal gespeichert und automatisch rund um Reset-Fenster zurückgesetzt.",
  alternates: buildHreflangAlternates("/tools/checklist", { canonicalLanguage: "de" }),
};

export default function ChecklistPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Checkliste</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Eine Checkliste soll nicht “alles” abdecken — sie soll verhindern, dass du rund um Resets die paar wichtigen
            Dinge vergisst. Diese Liste wird lokal im Browser gespeichert.
          </p>
          <p>
            Für den Countdown nutze den{" "}
            <Link href="/de/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
              Reset Timer
            </Link>
            . Für schnelle Locations:{" "}
            <Link href="/de/tools/interactive-map" className="text-emerald-300 hover:text-emerald-200">
              interaktive Karte
            </Link>
            .
          </p>
        </div>
      </header>

      <ChecklistTool />
    </article>
  );
}

