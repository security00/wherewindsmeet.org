import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveMapEmbed } from "@/components/InteractiveMapEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const mapgenieUrl = "https://mapgenie.io/where-winds-meet/maps/world";
const sixFastUrl = "https://yysls-map.6fast.com/yysls/maps/qinghe?lang=en";

export const metadata: Metadata = {
  title: "Bản đồ tương tác Where Winds Meet (MapGenie + lựa chọn CN)",
  description:
    "Dùng bản đồ tương tác Where Winds Meet để tìm NPC, rương, vật phẩm sưu tầm, điểm dịch chuyển và tuyến farm. Gồm MapGenie + một lựa chọn CN và FAQ ngắn.",
  alternates: buildHreflangAlternates("/tools/interactive-map", { canonicalLanguage: "vi" }),
};

export default function InteractiveMapPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Bản đồ tương tác</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Nếu bạn cần tìm nhanh một NPC, rương, vật phẩm sưu tầm, điểm dịch chuyển hoặc một hoạt động cụ thể, bản đồ
            tương tác thường nhanh hơn đọc walkthrough dài.
          </p>
          <p>
            Trang này nhúng hai lựa chọn bản đồ phổ biến và kèm FAQ thực dụng để bạn vào từ Google vẫn dùng được ngay.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <InteractiveMapEmbed
          options={[
            {
              id: "mapgenie",
              label: "MapGenie (Global)",
              src: mapgenieUrl,
              title: "Where Winds Meet Interactive Map - MapGenie",
            },
            {
              id: "6fast",
              label: "6Fast (CN alt)",
              src: sixFastUrl,
              title: "Where Winds Meet Interactive Map - 6Fast",
              referrerPolicy: "no-referrer",
            },
          ]}
        />

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          <p>
            Đây là bản đồ từ bên thứ ba. Nếu iframe không tải (do khu vực, cookie hoặc downtime), bạn có thể mở trực
            tiếp:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a
                href={mapgenieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                MapGenie (mở tab mới)
              </a>
            </li>
            <li>
              <a
                href={sixFastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                6Fast (mở tab mới)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">FAQ</h2>

        <div className="space-y-3">
          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Nên dùng MapGenie hay 6Fast?
            </summary>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>
                Bắt đầu với MapGenie nếu bạn muốn trải nghiệm thân thiện tiếng Anh và UI quen thuộc. Thử 6Fast nếu bạn
                muốn đối chiếu tuyến CN hoặc MapGenie tải chậm ở khu vực của bạn.
              </p>
              <p className="text-xs text-slate-400">
                Độ phủ và độ chính xác của pin thay đổi theo thời gian — các vị trí quan trọng nên kiểm tra lại trong
                game.
              </p>
            </div>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Bản đồ có đồng bộ tiến độ nhân vật trong game không?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Thường là không. Hầu hết bản đồ tương tác Where Winds Meet là công cụ cộng đồng: bạn có thể tự đánh dấu
              thủ công, nhưng chúng hiếm khi đọc được tiến độ nhân vật tự động.
            </p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Vì sao trong iframe có quảng cáo hoặc popup?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Nội dung trong iframe do bên cung cấp kiểm soát. Trang này không chèn quảng cáo, nhưng cũng không thể
              gỡ quảng cáo nằm bên trong bản đồ của bên thứ ba.
            </p>
          </details>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8 md:grid-cols-3">
        <div className="space-y-2 md:col-span-2">
          <h2 className="text-xl font-bold text-slate-50">Gợi ý: kết hợp bản đồ với guide</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Bản đồ tương tác hiệu quả nhất khi đi kèm checklist: dùng map để tìm nhanh vị trí, sau đó đọc guide để
            hiểu điều kiện kích hoạt, yêu cầu và các lỗi thường gặp.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            href="/vn/tools/reset-timer"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Reset timer →
          </Link>
          <Link
            href="/vn/tools/checklist"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Checklist daily/weekly →
          </Link>
          <Link
            href="/vn/guides/npc-list"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Danh sách NPC & Old Friends →
          </Link>
          <Link
            href="/vn/guides/bosses"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Tổng hợp Boss →
          </Link>
          <Link
            href="/vn/guides/items"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Vật phẩm & nguyên liệu →
          </Link>
        </div>
      </section>
    </article>
  );
}
