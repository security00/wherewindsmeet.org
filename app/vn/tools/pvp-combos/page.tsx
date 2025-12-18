import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const combosUrl = "https://www.wwmcombos.com/?hasVideo=true";

type Video = {
  id: string;
  title: string;
  description: string;
};

const videos: Video[] = [
  {
    id: "4UFzw-Q39pQ",
    title: "Nền tảng combat (fundamentals)",
    description: "Spacing và tempo cơ bản để không bị punish miễn phí trong duel.",
  },
  {
    id: "DhhUnD1wmX4",
    title: "Di chuyển & positioning",
    description: "Footwork, camera và kiểm soát khoảng cách — tạo áp lực mà không overcommit.",
  },
  {
    id: "TCLlK21RVw0",
    title: "Counter & parry cơ bản",
    description: "Tổng quan phòng thủ thực dụng cho người chơi muốn ổn định kèo đấu.",
  },
  {
    id: "DMR8UN4gEaY",
    title: "Animation cancelling",
    description: "Kỹ thuật nâng cao: cancel ở đâu mới tạo lợi thế thực sự (không chỉ đẹp).",
  },
  {
    id: "d9WyWI6RRL4",
    title: "Combo nâng cao",
    description: "Chuỗi combo dài hơn và ý tưởng conversion khi bạn đã đánh neutral ổn.",
  },
  {
    id: "Xh_xT8Aduu8",
    title: "Chiến thuật PVP cấp cao",
    description: "Ra quyết định khi áp lực: lúc nào disengage, lúc nào commit — và vì sao.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet PVP Combos (Database + Videos)",
  description:
    "Mở database combo PVP Where Winds Meet (nhúng) và xem video duel chọn lọc trên một trang. Có link nhanh đến PVP tier list và builds.",
  alternates: buildHreflangAlternates("/tools/pvp-combos", { canonicalLanguage: "vi" }),
};

export default function PvpCombosPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">PVP Combos</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Trang này phục vụ đúng một nhu cầu: sắp vào duel và cần nhanh 2 thứ — tra combo + xem vài ví dụ đánh thật.
          </p>
          <p>
            Database combo bên dưới là embed từ site bên thứ ba. Nếu không tải được, mở tab mới và dùng trang này để xem
            video + link nội bộ.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <Link
            href="/vn/guides/pvp-tier-list"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
          >
            PVP tier list →
          </Link>
          <Link
            href="/vn/guides/builds"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Builds →
          </Link>
          <Link
            href="/vn/guides/weapons"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Weapons →
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-950/70 p-3">
            <p className="text-sm font-semibold text-slate-100">Database combo (embed)</p>
            <a
              href={combosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              Mở tab mới →
            </a>
          </div>

          <div className="relative h-[70vh] min-h-[560px] w-full bg-slate-900/40 sm:min-h-[720px]">
            <iframe
              src={combosUrl}
              title="Where Winds Meet PVP combos database"
              className="absolute inset-0 h-full w-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <p className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          Lưu ý embed bên thứ ba: quảng cáo/tài khoản/tính năng do bên cung cấp quản lý. Trang này không lưu lịch sử combo
          của bạn.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">Video PVP chọn lọc</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Cách dùng hiệu quả: xem 1 clip, rút 1 ý nhỏ, rồi quay lại database combo và luyện đúng conversion đó. Tiến bộ
          bền vững quan trọng hơn thuộc quá nhiều chuỗi đẹp.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <div className="aspect-video bg-slate-950/80">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-100">{video.title}</p>
              <p className="text-xs leading-relaxed text-slate-300">{video.description}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

