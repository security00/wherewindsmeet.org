import type { Metadata } from "next";
import Link from "next/link";
import JianghuMapClient from "@/components/JianghuMapClient";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Version 1.7 Guide Hub Tiếng Việt",
  description:
    "Trung tâm Tiếng Việt cho Where Winds Meet Version 1.7, The Imperial Palace, code Palace, tier list, build, boss và patch notes cho người chơi PC, console, mobile.",
  alternates: buildHreflangAlternates("/", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet Version 1.7 Guide Hub Tiếng Việt",
    description:
      "Trung tâm Tiếng Việt cho Where Winds Meet: Version 1.7, The Imperial Palace, code Palace, tier list, build, boss và patch notes.",
    url: "https://wherewindsmeet.org/vn",
    images: [
      {
        url: "https://static.wherewindsmeet.org/background/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Where Winds Meet fan hub cover",
      },
    ],
    siteName: "Where Winds Meet Hub",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Version 1.7 Guide Hub Tiếng Việt",
    description:
      "Hướng dẫn Version 1.7, code Palace, tier list và tin cập nhật mới nhất cho Where Winds Meet (Tiếng Việt).",
    images: ["https://static.wherewindsmeet.org/background/bg.jpg"],
  },
};

export default function Home() {
  const vnHref = (path: string) => (path.startsWith("/vn") ? path : `/vn${path}`);

  return (
    <div className="space-y-10">
      <JianghuMapClient />

      <section className="card-wuxia rounded-3xl p-6 sm:p-8 min-h-[520px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Version 1.7 <span className="text-ink-gold">The Imperial Palace</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Where Winds Meet là game hành động nhập vai thế giới mở lấy bối cảnh một thời kỳ hỗn loạn của Trung Hoa cổ. Bạn chu du giang hồ sống động, luyện võ học, khinh công, nội công và chọn con đường riêng giữa vai trò hiệp khách, cuốn vào tranh đấu triều đình hay tự do khám phá.
              </p>
              <p>
                Trung tâm này đã được làm mới cho Version 1.7 / The Imperial Palace: code Palace dạng reported, patch notes 29/05, Path Balance, build, tier list và các hướng dẫn Qinchuan/Hexi cũ để người chơi quay lại bắt kịp nhanh.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={vnHref("/guides/one-leaf-one-life")}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
                >
                  🍂 Nhiệm vụ One Leaf, One Life — được tìm nhiều nhất, hướng dẫn đầy đủ
                </Link>
                <Link
                  href={vnHref("/guides/wall-puzzle")}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/80 hover:text-sky-100"
                >
                  🧩 Giải đố bức tường
                </Link>
                <Link
                  href={vnHref("/guides/unholy-prophecy")}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-400/60 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:border-purple-300/80 hover:text-purple-100"
                >
                  🔮 Nhiệm vụ An Unholy Prophecy — bệ lửa, Meridian Touch, hành lang chông
                </Link>
                <Link
                  href={vnHref("/tools/interactive-map")}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-300/80 hover:text-amber-100"
                >
                  🗺️ Bản đồ tương tác — MapGenie + lựa chọn CN
                </Link>
                <Link
                  href={vnHref("/guides/desktop-widget")}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/80 hover:text-sky-100"
                >
                  🖥️ Cách setup “desktop widget” (daily assistant)
                </Link>
              </div>
            </div>
          </div>

          <LiteYouTubeEmbed
            videoId="2cxhuAwDFl4"
            start={5}
            title="Where Winds Meet - Global Launch Preview Stream"
            poster="/background/bg4.webp"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 shadow-lg shadow-emerald-900/30">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold text-emerald-100">
            Chọn nhanh (tìm kiếm nhiều)
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href={vnHref("/news#next-update")}
              className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/70"
            >
              Version 1.7 / Palace
            </Link>
            <Link
              href={vnHref("/news#organic-search-watch")}
              className="rounded-full border border-blue-500/50 bg-blue-500/10 px-3 py-1 font-semibold text-blue-50 hover:border-blue-300/70"
            >
              Future draw / hot searches
            </Link>
            <Link
              href={vnHref("/guides/patch-notes#upcoming-nerfs")}
              className="rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1 font-semibold text-red-50 hover:border-red-300/70"
            >
              Upcoming nerfs
            </Link>
            <Link
              href={vnHref("/guides/tier-list#arena-ranks")}
              className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/70"
            >
              WWM arena ranks
            </Link>
            <Link
              href={vnHref("/guides/bosses")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Boss & điểm yếu
            </Link>
            <Link
              href={vnHref("/guides/bosses/feng-ruzhi")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Feng Ruzhi (Silk Ball)
            </Link>
            <Link
              href={vnHref("/guides/qin-caiwei")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Kết thân Tần Thái Vị
            </Link>
            <Link
              href={vnHref("/guides/free-morph")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Mở Free Morph
            </Link>
            <Link
              href={vnHref("/guides/tier-list")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Tier list (góc nhìn CN)
            </Link>
            <Link
              href={vnHref("/guides/unholy-prophecy")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              An Unholy Prophecy
            </Link>
            <Link
              href={vnHref("/guides/one-leaf-one-life")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              One Leaf One Life
            </Link>
            <Link
              href={vnHref("/guides/woven-with-malice")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Woven with Malice
            </Link>
            <Link
              href={vnHref("/guides/mist-shrouded-prison")}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Mist-Shrouded Prison (rương)
            </Link>
          </div>
          <p className="mt-3 w-full text-xs text-emerald-50/80">
            Lối tắt cho các truy vấn phổ biến: update tiếp theo, boss & điểm yếu, Feng Ruzhi (vị trí + Silk Ball), kết thân Tần Thái Vị, mở
            Free Morph và tier list (góc nhìn Trung Quốc) để so sánh vũ khí/build.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Công cụ</p>
            <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">Công cụ nhanh cho phiên chơi hiệu quả</h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-300">
              Dùng bản đồ tương tác, reset timer và checklist để canh daily/weekly — rồi vào PVP combos khi bạn muốn luyện
              convert trong đấu tay đôi.
            </p>
          </div>
          <Link
            href={vnHref("/tools")}
            className="text-xs text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Xem tất cả công cụ →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Bản đồ tương tác",
              href: "/tools/interactive-map",
              desc: "Nhúng MapGenie + lựa chọn CN kèm FAQ nhanh (NPC, rương, vật phẩm, lộ trình).",
              tag: "Bản đồ",
            },
            {
              title: "Reset timer",
              href: "/tools/reset-timer",
              desc: "Đếm ngược reset daily + weekly theo thời gian thực (có múi giờ).",
              tag: "Timer",
            },
            {
              title: "Checklist daily & weekly",
              href: "/tools/checklist",
              desc: "Theo dõi routine cá nhân (lưu cục bộ trong trình duyệt; tự reset theo chu kỳ).",
              tag: "Checklist",
            },
            {
              title: "PVP combos",
              href: "/tools/pvp-combos",
              desc: "Nhúng kho combo + video duel chọn lọc và link nhanh quay lại build/tier list.",
              tag: "PVP",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={vnHref(item.href)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-300 transition">
                  {item.title}
                </h3>
                <span className="rounded-full border border-emerald-500/30 px-2 py-0.5 text-[11px] uppercase tracking-wide text-emerald-200/90">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">Mở công cụ →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Xu hướng</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">Hướng dẫn Where Winds Meet được tìm kiếm nhiều</h2>
            <p className="text-xs text-amber-200 mt-1">Mới: đáp án Prize Quiz “Purple Star catastrophe” (The Zhao Brothers)</p>
          </div>
          <span className="text-xs text-slate-400">Cập nhật theo từ khóa Google Trends</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Purple Star Catastrophe (Đáp án quiz)",
              href: "/guides/who-is-destined-to-face-the-purple-star-catastrophe",
              desc: "World’s Digest Prize Quiz: cách vào đúng menu + đáp án đúng (The Zhao Brothers) kèm ảnh minh họa.",
              tag: "Quiz",
            },
            {
              title: "Mist-Shrouded Prison",
              href: "/guides/mist-shrouded-prison",
              desc: "Hầm mộ mới: tìm lối vào, theo dõi vòng lặp bằng “cô gái đỏ”, lấy đủ 6 rương + kho báu cuối (có spawn-fix).",
              tag: "Mới",
            },
            {
              title: "One Leaf, One Life",
              href: "/guides/one-leaf-one-life",
              desc: "Lost Chapter được tìm nhiều nhất: trigger mở nhiệm vụ, chuỗi phụ trắng lá, puzzle và kết Gold Leaf.",
              tag: "Xu hướng",
            },
            {
              title: "Thiện cảm Tần Thái Vị",
              href: "/guides/qin-caiwei",
              desc: "Chặn vòng lặp AI Chat với câu thoại mẫu và lộ trình 5 bước để tăng thiện cảm nhanh.",
              tag: "AI Chat",
            },
            {
              title: "Gift of Gab",
              href: "/guides/gift-of-gab",
              desc: "Thắng minigame đối thoại: chọn style, điểm Cảm hứng, combo thẻ và thành thục Scholar.",
              tag: "Đối thoại",
            },
            {
              title: "Free Morph (Mystic)",
              href: "/guides/free-morph",
              desc: "Mở Free Morph bằng cách đỡ chuỗi đá xoay của Thiên Ứng; chi phí, hồi chiêu và bonus theo tier.",
              tag: "Bí thuật",
            },
            {
              title: "An Unholy Prophecy",
              href: "/guides/unholy-prophecy",
              desc: "Jianghu Legacy 07: bệ lửa trên mái, cửa Meridian Touch, bẫy chông và đánh Shi Zhen.",
              tag: "Jianghu",
            },
            {
              title: "Giải đố bức tường",
              href: "/guides/wall-puzzle",
              desc: "Echoes of Old Battles: thắp lửa, Yanyun Oath, nhấn tường chữ 移/百/漂.",
              tag: "Câu đố",
            },
            {
              title: "Woven with Malice",
              href: "/guides/woven-with-malice",
              desc: "Walkthrough Lost Chapter 31 bước, mốc giờ, bẫy và các lỗi cần né.",
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
              desc: "Xếp hạng PvP/PvE và vũ khí sau các đợt cân bằng.",
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
              desc: "Cập nhật theo patch mới: các archetype PvE/PvP linh hoạt với hoán đổi vũ khí.",
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
          <p className="text-xs uppercase tracking-wide text-emerald-300">Quà miễn phí</p>
          <h2 className="text-2xl font-bold text-slate-50">Nhận trang phục và code miễn phí mới nhất.</h2>
          <p className="text-sm leading-relaxed text-slate-200">
            Theo dõi lộ trình nhận trang phục miễn phí, ngoại hình (cosmetics), kiểu tóc và kết hợp với các mã đổi quà mới nhất để làm đầy tủ đồ mà không cần tiêu tiền tệ cao cấp.
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
              Thư viện ngoại hình
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
              desc: "Cửa hàng sự kiện, quà nhiệm vụ và các mục giá 0 trong Social Shop được gom lại.",
              href: "/guides/free-outfits",
              badge: "Lộ trình miễn phí",
            },
            {
              title: "Roadmap & sự kiện",
              desc: "Theo dõi tin tức, sự kiện, roadmap để canh thời điểm nhận quà miễn phí.",
              href: "/news",
              badge: "Có gì sắp tới",
            },
            {
              title: "Ảnh hưởng patch notes",
              desc: "Kiểm tra patch mới có thêm ngoại hình (cosmetics) miễn phí hay đổi tỷ lệ rớt sự kiện.",
              href: "/guides/patch-notes",
              badge: "Meta thay đổi",
            },
            {
              title: "Set diện mạo",
              desc: "Xem trang phục, nhuộm màu và phụ kiện để kết hợp cùng quà miễn phí.",
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
