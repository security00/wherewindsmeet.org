import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bosses } from "@/lib/bosses.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Tổng quan boss & trận đánh lớn Where Winds Meet",
  description:
    "Danh sách boss và kẻ địch tên tuổi trong Where Winds Meet, tóm tắt bối cảnh, chủ đề và liên kết đến overview để chọn trận bạn muốn chinh phục.",
  alternates: buildHreflangAlternates("/guides/bosses", { canonicalLanguage: "vi" }),
};

export default function BossesPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg4.webp"
            alt="Nền boss Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Gặp gỡ các boss và huyền thoại giang hồ.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Trang này gom những boss/kẻ địch tên tuổi, tập trung vào họ là ai và cảm giác trận đấu ra sao (không sa vào số sát thương). Mục tiêu là bản tóm tắt nhẹ nhàng, giúp bạn chọn cuộc đọ sức muốn thử trước.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Dùng cùng với{" "}
            <Link
              href="/vn/guides/weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              tổng quan vũ khí
            </Link>{" "}
            và{" "}
            <Link
              href="/vn/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              build gợi ý
            </Link>{" "}
            để ghép trận phù hợp với lối chơi bạn thích.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Mô tả dựa trên tài liệu chính thức và kinh nghiệm ARPG, nhằm đặt kỳ vọng về tông truyện và nhịp giao tranh, không thay cho patch notes hay trải nghiệm thực tế.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Thư viện boss & chủ đề nhanh.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/80">
                <video
                  src={boss.backgroundVideo}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster="/background/bg4.webp"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {boss.name}
                  </h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">
                  Chủ đề: {boss.theme}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={`/vn/guides/bosses/${boss.id}`}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    Xem overview trận
                  </Link>
                  <Link
                    href="/vn/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Xem builds
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Mẹo sống sót từ các run độ khó cao.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Hướng dẫn cộng đồng (Zh) cho độ khó cao thường lặp lại vài công cụ giúp trận khốc liệt dễ thở hơn. Hiểu những mẫu này sẽ biến boss khó thành thử thách công bằng.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Đừng solo vì sĩ diện:</span>{" "}
              boss cốt truyện/Bloodbath được cân bằng để bạn có thể gọi trợ giúp. Triệu hồi tanker/healer/phá posture giảm mạnh yêu cầu thao tác, nhất là trận ba pha kiểu “kiểm tra trí nhớ”.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Dựa vào tâm pháp mạnh:</span>{" "}
              vài tâm pháp công/thủ có i-frame dài hơn chặn né thường, hoặc ngắt kỹ năng chủ chốt. Hãy gán ít nhất một tâm pháp “panic button” (chống burst) và một công cụ chủ động để trừng phạt hoạt ảnh dài.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Tận dụng vũ khí phụ & tiêu hao:</span>{" "}
              lựu đạn băng/lửa, buff hồi phục, và thuốc stance có thể cứu vãn sai lầm; đừng giữ chúng chỉ để “chơi đẹp”.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-500">
          Cân bằng và trải nghiệm có thể đổi theo patch; ưu tiên patch notes và cảm nhận thực tế.
        </p>
      </section>
    </article>
  );
}
