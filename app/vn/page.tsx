import type { Metadata } from "next";
import Link from "next/link";
import JianghuMapClient from "../../components/JianghuMapClient";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Trung tâm hướng dẫn Where Winds Meet Tiếng Việt",
  description:
    "Hub Tiếng Việt cho Where Winds Meet với livestream, hướng dẫn nổi bật, code, tier list và cập nhật mới nhất cho người chơi PC, console, mobile.",
  alternates: buildHreflangAlternates("/", { canonicalLanguage: "vi" }),
};

export default function Home() {
  const vnHref = (path: string) => (path.startsWith("/vn") ? path : `/vn${path}`);

  return (
    <div className="space-y-10">
      <JianghuMapClient />

      <section className="card-wuxia rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Livestream <span className="text-ink-gold">ra mắt toàn cầu</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Where Winds Meet là game hành động nhập vai thế giới mở lấy bối cảnh một thời kỳ hỗn loạn của Trung Hoa cổ. Bạn chu du giang hồ sống động, luyện võ học, khinh công, nội công và chọn con đường riêng giữa vai trò hiệp khách, cuốn vào tranh đấu triều đình hay tự do khám phá.
              </p>
              <p>
                Hub ra mắt này tổng hợp hướng dẫn, builds và mã đổi quà giúp người chơi trên PC, console, mobile bắt đầu nhanh và nắm rõ các cập nhật mới.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={vnHref("/guides/woven-with-malice")}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
                >
                  🧶 Nhiệm vụ Sợi Định Mệnh (hot)
                </Link>
                <Link
                  href={vnHref("/guides/wall-puzzle")}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/80 hover:text-sky-100"
                >
                  🧩 Giải đố bức tường
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-800/50 shadow-2xl shadow-black/50 group">
            <div className="absolute inset-0 border-brush opacity-50 z-10 pointer-events-none"></div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/2cxhuAwDFl4?start=5&rel=0&modestbranding=1&playsinline=1"
              title="Where Winds Meet - Global Launch Preview Stream"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Xu hướng</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Hướng dẫn Where Winds Meet được tìm kiếm nhiều</h2>
          </div>
          <span className="text-xs text-slate-400">Cập nhật theo từ khóa Google Trends</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Thiện cảm Tần Thái Vị",
              href: "/guides/qin-caiwei",
              desc: "Chặn vòng lặp AI Chat với câu thoại mẫu và lộ trình 5 bước để thân thiện nhanh.",
              tag: "AI Chat",
            },
            {
              title: "Gift of Gab",
              href: "/guides/gift-of-gab",
              desc: "Thắng minigame đối thoại: lựa chọn phong cách, điểm Cảm hứng, combo thẻ và thành thục Scholar.",
              tag: "Đối thoại",
            },
            {
              title: "Free Morph Mystic",
              href: "/guides/free-morph",
              desc: "Mở khóa Mystic juggling bằng cách đỡ xoay Thiên Ứng; chi phí, hồi chiêu, thưởng tier.",
              tag: "Mystic",
            },
            {
              title: "Giải đố bức tường",
              href: "/guides/wall-puzzle",
              desc: "Echoes of Old Battles: thắp lửa, Yanyun Oath, nhấn tường chữ 移/百/漂.",
              tag: "Câu đố",
            },
            {
              title: "Sợi Định Mệnh",
              href: "/guides/woven-with-malice",
              desc: "Hành trình 31 bước Lost Chapter, các mốc giờ, bẫy, và lỗi cần né.",
              tag: "Nhiệm vụ",
            },
            {
              title: "Code đang hoạt động",
              href: "/guides/codes",
              desc: "Đổi quà mới nhất trước khi hết hạn. Luôn được cập nhật.",
              tag: "Phần thưởng",
            },
            {
              title: "Tier List",
              href: "/guides/tier-list",
              desc: "Xếp hạng PVP/PVE và vũ khí sau các đợt cân bằng.",
              tag: "Meta",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={vnHref(item.href)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-300 transition">{item.title}</h3>
                <span className="text-[11px] uppercase tracking-wide text-emerald-200/90 border border-emerald-500/30 rounded-full px-2 py-0.5">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">Xem hướng dẫn →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-300">Cập nhật mới</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Đón trước các chỉnh sửa cân bằng</h2>
          </div>
          <Link href={vnHref("/news")} className="text-xs text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            Xem tất cả tin →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            {
              title: "Danh sách NPC & bản đồ Cố Nhân",
              href: "/guides/npc-list",
              desc: "Ảnh chân dung NPC, điểm đánh dấu tương tác, phóng to nhanh cho từng Cố Nhân.",
            },
            {
              title: "NPC chỉ cung cấp dịch vụ",
              href: "/guides/npc-list#non-interactable-npcs-no-ai-chat",
              desc: "Qi Sheng, Yao Yaoyao và các NPC dịch vụ không hỗ trợ AI Chat — vị trí và chức năng.",
            },
            {
              title: "Hướng dẫn trò chuyện Tần Thái Vị",
              href: "/guides/qin-caiwei",
              desc: "Kịch bản AI Chat mới, sửa lỗi lặp và combo nhanh để tăng thiện cảm với Tần Thái Vị.",
            },
            {
              title: "Builds & lộ trình Thiên phú",
              href: "/guides/builds",
              desc: "Cập nhật theo patch mới: các archetype PVE/PVP linh hoạt với hoán đổi vũ khí.",
            },
            {
              title: "Tóm tắt Patch Notes",
              href: "/guides/patch-notes",
              desc: "Tóm lược: chỉnh sát thương, hồi chiêu và thay đổi meta đáng chú ý.",
            },
            {
              title: "Bách khoa Vũ khí",
              href: "/guides/weapons",
              desc: "Chỉ số, kỹ năng và đường mở khóa cho mọi hệ vũ khí.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={vnHref(item.href)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-900/20"
            >
              <h3 className="text-lg font-bold text-slate-50 group-hover:text-blue-200 transition">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <span className="mt-4 text-xs text-blue-300 group-hover:text-blue-200">Mở →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Freebie nhanh</p>
          <h2 className="text-2xl font-bold text-slate-50">Nhận trang phục và code miễn phí mới nhất.</h2>
          <p className="text-sm leading-relaxed text-slate-200">
            Theo dõi lộ trình nhận trang phục miễn phí, cosmetics, kiểu tóc và ghép cùng các mã đổi quà mới nhất để lấp đầy tủ đồ mà không tốn tiền tệ cao cấp.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={vnHref("/guides/free-outfits")}
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Hướng dẫn trang phục miễn phí
            </Link>
            <Link
              href={vnHref("/guides/cosmetics")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Thư viện cosmetics
            </Link>
            <Link
              href={vnHref("/news")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              Tin tức & roadmap
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Trang phục & set miễn phí",
              desc: "Cửa hàng sự kiện, quà nhiệm vụ và mục Social Shop giá 0 được gom lại.",
              href: "/guides/free-outfits",
              badge: "Lộ trình 0 cost",
            },
            {
              title: "Roadmap & sự kiện",
              desc: "Theo dõi tin tức, sự kiện, roadmap để canh thời điểm nhận quà miễn phí.",
              href: "/news",
              badge: "Có gì sắp tới",
            },
            {
              title: "Ảnh hưởng patch notes",
              desc: "Kiểm tra patch mới có thêm cosmetics miễn phí hay đổi tỷ lệ rớt sự kiện.",
              href: "/guides/patch-notes",
              badge: "Meta thay đổi",
            },
            {
              title: "Set diện mạo",
              desc: "Xem trang phục, nhuộm màu và phụ kiện để kết hợp cùng freebies.",
              href: "/guides/cosmetics",
              badge: "Gợi ý phong cách",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={vnHref(item.href)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-emerald-900/20"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-200">{item.title}</h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                  {item.badge}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              <span className="mt-3 text-xs text-emerald-300 group-hover:text-emerald-200">Xem →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
