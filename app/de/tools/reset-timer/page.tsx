import type { Metadata } from "next";
import Link from "next/link";
import { ResetTimerTool } from "@/components/ResetTimerTool";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Reset Timer (Daily & Weekly)",
  description:
    "Live-Countdown für Where Winds Meet Daily- und Weekly-Resets. Zeitzone anpassen und Routine rund um den Reset planen.",
  alternates: buildHreflangAlternates("/tools/reset-timer", { canonicalLanguage: "de" }),
};

export default function ResetTimerPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Reset Timer</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Mit diesem Timer siehst du den Daily- und Weekly-Reset als Countdown — ideal, um vor dem Reset noch Codes,
            Event-Shops oder Weekly-Caps mitzunehmen.
          </p>
          <p>
            Wenn du eine klare Reihenfolge brauchst, kombiniere den Timer mit dem{" "}
            <Link href="/de/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
              Checklist-Tool
            </Link>{" "}
            und der{" "}
            <Link href="/de/tools/interactive-map" className="text-emerald-300 hover:text-emerald-200">
              interaktiven Karte
            </Link>
            .
          </p>
        </div>
      </header>

      <ResetTimerTool />
    </article>
  );
}

