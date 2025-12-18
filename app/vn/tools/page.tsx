import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Công cụ Where Winds Meet (Bản đồ, Timer, Checklist)",
  description:
    "Công cụ hữu ích cho Where Winds Meet: bản đồ tương tác (nhúng), timer reset và checklist để lên lịch daily/weekly.",
  alternates: buildHreflangAlternates("/tools", { canonicalLanguage: "vi" }),
};

type ToolCard = {
  title: string;
  href: string;
  desc: string;
  badge: string;
};

const toolCards: ToolCard[] = [
  {
    title: "Bản đồ tương tác",
    href: "/vn/tools/interactive-map",
    desc: "Nhúng MapGenie + một lựa chọn CN (kèm FAQ ngắn). Tìm NPC, rương, vật phẩm sưu tầm và tuyến đường nhanh hơn.",
    badge: "Ý định cao",
  },
  {
    title: "Reset Timer",
    href: "/vn/tools/reset-timer",
    desc: "Đếm ngược reset daily + weekly, có tùy chọn múi giờ hiển thị để bạn lên kế hoạch trước giờ reset.",
    badge: "Ý định cao",
  },
  {
    title: "Checklist daily/weekly",
    href: "/vn/tools/checklist",
    desc: "Checklist tùy chỉnh (lưu cục bộ) và tự bỏ tick quanh mốc reset để bạn dễ duy trì thói quen.",
    badge: "Quay lại",
  },
  {
    title: "PVP Combos",
    href: "/vn/tools/pvp-combos",
    desc: "Nhúng database combo + video duel chọn lọc, có link nhanh về PVP tier list và builds.",
    badge: "PVP",
  },
];

export default function ToolsPage() {
  return (
    <article className="space-y-10">
      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Tools</span>
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Trang này tổng hợp các công cụ thực dụng để dùng ngay khi bạn chơi: ít mở tab hơn, ra quyết định nhanh hơn, và
          vẫn có link sang guide chi tiết khi cần bối cảnh.
        </p>
        <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
          Lưu ý: Một số công cụ nhúng trang bên thứ ba (ví dụ bản đồ tương tác). Tính sẵn có, quảng cáo và tính năng do
          bên cung cấp quản lý.
        </p>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50">Công cụ nổi bật</h2>
          <Link href="/vn/guides" className="text-sm text-emerald-300 hover:text-emerald-200">
            Xem tất cả hướng dẫn →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {toolCards.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-200 transition">
                  {tool.title}
                </h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-200/90">
                  {tool.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{tool.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">
                Mở công cụ →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
