import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Chess (Xiangqi) – Hướng dẫn giải puzzle",
  description:
    "Hướng dẫn nhanh giải puzzle cờ tướng (Xiangqi) trong Where Winds Meet: checklist thực dụng, pattern thường gặp và mẹo tìm nước thắng.",
  alternates: buildHreflangAlternates("/guides/xiangqi", { canonicalLanguage: "vi" }),
};

export default function XiangqiGuidePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Guide</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Chess</span> (Xiangqi) puzzles
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
          Một số quest/NPC challenge trong Where Winds Meet có puzzle cờ tướng (Xiangqi). Nó dễ “khó bất ngờ” vì chỉ cần
          sai nhịp 1 nước là thế cờ đảo chiều.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Trang này không phải giáo trình cờ tướng. Đây là checklist thực dụng: cách nhìn nhanh ra đường thắng và làm gì
          khi bạn chỉ cần lời giải để đi tiếp.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-2xl font-bold text-slate-50">Checklist giải nhanh</h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Xác định bên đi trước</span> và mục tiêu (chiếu bí, hơn
              quân, hoặc chiếu dai).
            </li>
            <li>
              <span className="font-semibold text-slate-100">Liệt kê tất cả nước chiếu</span>. Trong xiangqi, “chiếu” rất
              forcing vì tướng có ít ô chạy.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Cannon + screen</span>: Pháo thường giải puzzle bằng cách
              dùng một quân làm “ngòi” để chiếu xuyên.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Khóa đường chạy của tướng</span> trước, rồi mới đổi sang
              ăn quân/chiếu bí.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Cẩn thận counter-check</span> của đối thủ — nhiều line thua
              vì bỏ qua nước forcing duy nhất của họ.
            </li>
          </ol>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
            Bị kẹt? Đừng thử bừa. Ưu tiên nước chiếu, rồi tìm thế “pháo + ngòi” và lưới xe+pháo. Xong rồi quay lại để
            hiểu vì sao line đúng.
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                href="/vn/tools"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
              >
                Mở Tools hub →
              </Link>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-bold text-slate-50">Nhắc nhanh</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">Xe</span> mạnh ở đường mở — ưu tiên kiểm tra nước chiếu của
              xe.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Mã</span> bị chặn “chân” — luôn kiểm tra ô chân mã có bị
              chắn không.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Sĩ/tượng</span> bị giới hạn khu vực — nhiều thế chiếu bí thắng
              vì quân thủ không thể tới ô quan trọng.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Luật lộ tướng</span>: hai tướng không được đối mặt cùng một
              cột nếu không có quân chắn.
            </li>
          </ul>
        </aside>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Pattern puzzle thường gặp</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Ladder check bằng pháo</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Có “ngòi” ổn định thì pháo rất forcing: chiếu → ép đỡ → đổi vị trí ngòi/xe → chiếu tiếp để khóa đường chạy.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Lưới xe + pháo</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Xe giữ đường, pháo chiếu xuyên ngòi. Không chiếu bí ngay thì cũng thường ăn được quân vì phòng thủ bị ép.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Hy sinh để mở cột</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Nhiều puzzle đúng là “thí quân” để dọn đường giữa xe/pháo và tướng.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Chiếu dai (perpetual check)</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Nếu không convert được, chiếu dai có thể là lời giải “cứu bài” (tùy mục tiêu quest).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
