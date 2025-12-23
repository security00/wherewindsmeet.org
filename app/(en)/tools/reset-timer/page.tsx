import type { Metadata } from "next";
import Link from "next/link";
import { ResetTimerTool } from "@/components/ResetTimerTool";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Reset Timer (Daily & Weekly)",
  description:
    "Track Where Winds Meet daily and weekly reset times with a live countdown. Adjust time zone display and plan your routine before resets.",
  alternates: buildHreflangAlternates("/tools/reset-timer"),
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
            This page helps you track the daily and weekly reset countdown so you can plan what to do before the window
            closes (codes, event shops, weekly caps, or just a quick route).
          </p>
          <p>
            If you are not sure what to prioritize, pair the timer with the{" "}
            <Link href="/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
              checklist tool
            </Link>{" "}
            and the{" "}
            <Link href="/tools/interactive-map" className="text-emerald-300 hover:text-emerald-200">
              interactive map
            </Link>
            .
          </p>
        </div>
      </header>

      <ResetTimerTool />
    </article>
  );
}

