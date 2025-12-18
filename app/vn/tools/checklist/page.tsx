import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistTool } from "@/components/ChecklistTool";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Checklist (Daily & Weekly)",
  description:
    "Checklist daily/weekly cho Where Winds Meet: tùy chỉnh, lưu cục bộ trên trình duyệt và tự bỏ tick quanh mốc reset.",
  alternates: buildHreflangAlternates("/tools/checklist", { canonicalLanguage: "vi" }),
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
            Checklist tốt không phải để “làm hết mọi thứ”, mà để không quên vài việc quan trọng quanh mốc reset. Danh
            sách này được lưu cục bộ trong trình duyệt của bạn.
          </p>
          <p>
            Nếu bạn cần đếm ngược, mở{" "}
            <Link href="/vn/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
              reset timer
            </Link>
            . Nếu cần tìm vị trí nhanh, dùng{" "}
            <Link href="/vn/tools/interactive-map" className="text-emerald-300 hover:text-emerald-200">
              bản đồ tương tác
            </Link>
            .
          </p>
        </div>
      </header>

      <ChecklistTool />
    </article>
  );
}

