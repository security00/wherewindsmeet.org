import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DialogueCardsComponent from "../../../guides/gift-of-gab/DialogueCardsComponent";
import StyleComparisonTable from "../../../guides/gift-of-gab/StyleComparisonTable";
import EmbeddedVideoGallery from "../../../guides/gift-of-gab/EmbeddedVideoGallery";
import GiftOfGabImages from "../../../guides/gift-of-gab/GiftOfGabImages";

export const metadata: Metadata = {
  title: "Gift of Gab – Hướng dẫn đối thoại Where Winds Meet",
  description:
    "Thắng Gift of Gab nhanh: chọn phong cách đúng, quản lý Inspiration, nâng Scholar và dùng thẻ + Trash Talk để hạ Mental Focus đối thủ.",
  alternates: {
    canonical: "https://wherewindsmeet.org/vn/guides/gift-of-gab",
  },
  openGraph: {
    title: "Gift of Gab – Hướng dẫn đối thoại Where Winds Meet",
    description:
      "Chọn style, xoay Inspiration, nâng Scholar, dùng thẻ và Trash Talk để hạ Mental Focus xuống 0.",
    url: "https://wherewindsmeet.org/vn/guides/gift-of-gab",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/guides/gift-of-gab/gameplay.jpg",
        width: 1600,
        height: 900,
        alt: "Giao diện Gift of Gab trong Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift of Gab – Hướng dẫn đối thoại Where Winds Meet",
    description:
      "Thắng Gift of Gab nhanh: style đúng, quản lý Inspiration, nâng Scholar, dùng thẻ + Trash Talk.",
    images: ["https://wherewindsmeet.org/guides/gift-of-gab/gameplay.jpg"],
  },
};

export default function GiftOfGabPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Nền Gift of Gab"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-amber-300">Minigame đối thoại</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">Gift of Gab</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Làm chủ minigame thuyết phục: chọn style đúng, quản lý Inspiration và thắng đối thoại với NPC.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">Gift of Gab là gì?</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-emerald-300">Đấu thẻ</p>
            <p className="text-xs text-slate-300">Dùng thẻ đối thoại để hạ Mental Focus của đối thủ xuống 0</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-blue-300">Tài nguyên Inspiration</p>
            <p className="text-xs text-slate-300">Tiêu Inspiration để kích hoạt thẻ; tự hồi theo thời gian</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 space-y-2">
            <p className="text-sm font-semibold text-purple-300">Vòng đấu không áp lực thời gian</p>
            <p className="text-xs text-slate-300">Không bị đếm ngược — chơi thong thả, quản lý tài nguyên</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
          Gift of Gab là minigame thuyết phục: bạn thắng bằng cách dùng thẻ hội thoại để bào mòn Mental Focus của NPC. Mỗi trận yêu cầu quản lý Inspiration
          (năng lượng dùng thẻ) và chọn thẻ đúng thời điểm.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-50">Giao diện trong game</h3>
        <GiftOfGabImages />
      </section>

      <section className="rounded-3xl border border-emerald-800/40 bg-emerald-950/30 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Checklist thắng nhanh</h2>
        <ul className="space-y-2 text-sm text-slate-200">
          <li>✓ Để game gợi ý style đối thoại tối ưu; nó khắc chế NPC.</li>
          <li>✓ Mở đầu bằng thẻ rẻ để tiết kiệm Inspiration; dồn khi Mental Focus địch thấp.</li>
          <li>✓ Trúng tất cả QTE Trash Talk để có sát thương/tiện ích miễn phí.</li>
          <li>✓ Ưu tiên thẻ thủ sớm—Mental Focus đã mất không hồi lại.</li>
          <li>✓ Nâng Scholar để tăng trần Inspiration và hiệu quả thẻ.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-50">Hai kiểu Gift of Gab</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-700/30 bg-emerald-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-emerald-300">Free Persuasion</h3>
            <p className="text-sm text-slate-300">
              Chat trực tiếp với AI chatbot. Tự nêu luận điểm. Dùng để luyện, kết quả thất thường.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-700/30 bg-blue-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-blue-200">Card Debate (chính)</h3>
            <p className="text-sm text-slate-300">
              Đấu thẻ vòng lượt. Chọn style hệ thống khuyến nghị, dùng thẻ và Trash Talk để hạ Mental Focus.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <h2 className="text-2xl font-bold text-slate-50">Quy tắc cơ bản</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Inspiration tự hồi, nhưng đừng spam thẻ đắt khi Mental Focus địch còn cao.</li>
            <li>Trash Talk miễn phí nếu trúng QTE — luôn nhấn đúng nhịp.</li>
            <li>Ưu tiên thẻ giảm sát thương/khóa bài của địch ở lượt đầu.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h3 className="text-2xl font-bold text-slate-50">Hướng nâng Scholar</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Ưu tiên tăng trần Inspiration, giảm cost thẻ chủ lực.</li>
            <li>Lấy node tăng hiệu quả Trash Talk/QTE nếu bạn thường trúng.</li>
            <li>Giữ một slot thẻ phòng thủ để cứu vãn ván đấu dài.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🪪</span>
          <h2 className="text-2xl font-bold text-slate-50">Thẻ và style</h2>
        </div>
        <DialogueCardsComponent />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <h2 className="text-2xl font-bold text-slate-50">So sánh style</h2>
        </div>
        <StyleComparisonTable />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Video hướng dẫn</h2>
        </div>
        <EmbeddedVideoGallery />
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-50">Liên quan</h3>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/vn/guides/qin-caiwei" className="underline underline-offset-4 hover:text-emerald-100">
              Qin Caiwei – script AI Chat dễ đậu
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/pvp-tier-list" className="underline underline-offset-4 hover:text-emerald-100">
              PVP tier list – vũ khí đang mạnh
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/builds" className="underline underline-offset-4 hover:text-emerald-100">
              Builds – chỉnh theo patch mới
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}

