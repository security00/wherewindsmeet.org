import type { Metadata } from "next";
import Link from "next/link";
import { ResetTimerTool } from "@/components/ResetTimerTool";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Reset Timer (Daily & Weekly)",
  description:
    "Đếm ngược reset hằng ngày và hằng tuần của Where Winds Meet. Tùy chọn múi giờ hiển thị và lên kế hoạch trước giờ reset.",
  alternates: buildHreflangAlternates("/tools/reset-timer", { canonicalLanguage: "vi" }),
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
            Trang này giúp bạn theo dõi countdown reset daily/weekly để không bỏ lỡ mốc thời gian quan trọng (code, event
            shop, weekly cap hoặc một tuyến farm nhanh).
          </p>
          <p>
            Nếu bạn muốn có checklist rõ ràng, hãy dùng kèm{" "}
            <Link href="/vn/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
              checklist tool
            </Link>{" "}
            và{" "}
            <Link href="/vn/tools/interactive-map" className="text-emerald-300 hover:text-emerald-200">
              bản đồ tương tác
            </Link>
            .
          </p>
        </div>
      </header>

      <ResetTimerTool />
    </article>
  );
}

