import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistTool } from "@/components/ChecklistTool";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Checklist (Daily & Weekly)",
  description:
    "A practical Where Winds Meet daily and weekly checklist you can customize and save locally. Includes auto-clearing around reset windows.",
  alternates: buildHreflangAlternates("/tools/checklist"),
};

export default function ChecklistPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Checklist</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            A good checklist is less about “doing everything” and more about never missing the few things that matter
            around resets. Use this page as a personal routine tracker — the checklist is stored locally in your browser.
          </p>
          <p>
            If you want the countdown view, open the{" "}
            <Link href="/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
              reset timer
            </Link>
            . If you need to find locations fast, use the{" "}
            <Link href="/tools/interactive-map" className="text-emerald-300 hover:text-emerald-200">
              interactive map
            </Link>
            .
          </p>
        </div>
      </header>

      <ChecklistTool />
    </article>
  );
}

