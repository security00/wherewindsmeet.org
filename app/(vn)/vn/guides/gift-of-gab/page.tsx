import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import DialogueCardsComponent, { type DialogueCard } from "@/app/(en)/guides/gift-of-gab/DialogueCardsComponent";
import StyleComparisonTable from "@/app/(en)/guides/gift-of-gab/StyleComparisonTable";
import type { DebateStyleComparisonRow } from "@/app/(en)/guides/gift-of-gab/StyleComparisonTable";
import EmbeddedVideoGallery from "@/app/(en)/guides/gift-of-gab/EmbeddedVideoGallery";
import type { EmbeddedVideo } from "@/app/(en)/guides/gift-of-gab/EmbeddedVideoGallery";
import GiftOfGabImages from "@/app/(en)/guides/gift-of-gab/GiftOfGabImages";
import type { GuideImage } from "@/app/(en)/guides/gift-of-gab/GiftOfGabImages";
import dialogueCardsViJson from "@/app/(en)/guides/gift-of-gab/cards.vi.json";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Gift of Gab – Hướng dẫn đối thoại Where Winds Meet",
  description:
    "Thắng Gift of Gab nhanh: chọn phong cách đúng, quản lý Inspiration, nâng Scholar và dùng thẻ + Trash Talk để hạ Mental Focus đối thủ.",
  alternates: buildHreflangAlternates("/guides/gift-of-gab", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Gift of Gab – Hướng dẫn đối thoại Where Winds Meet",
    description:
      "Chọn style, xoay Inspiration, nâng Scholar, dùng thẻ và Trash Talk để hạ Mental Focus xuống 0.",
    url: "https://wherewindsmeet.org/vn/guides/gift-of-gab",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://static.wherewindsmeet.org/guides/gift-of-gab/gameplay.jpg",
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
    images: ["https://static.wherewindsmeet.org/guides/gift-of-gab/gameplay.jpg"],
  },
};

const dialogueCardsVi = dialogueCardsViJson as unknown as DialogueCard[];

const styleLabelMapVi: Record<string, string> = {
  Bluster: "Bluster (Áp đảo)",
  Provocation: "Provocation (Khiêu khích)",
  Rebuttal: "Rebuttal (Phản biện)",
  Filibuster: "Filibuster (Dây dưa)",
  Universal: "Universal (Đa dụng)",
};

const giftOfGabImagesVi: GuideImage[] = [
  {
    src: "/guides/gift-of-gab/gameplay.jpg",
    alt: "Giao diện Gift of Gab hiển thị thanh Mental Focus và các thẻ hội thoại",
    caption: "Giao diện Gift of Gab: thanh Mental Focus, Inspiration và các thẻ để bạn chọn theo lượt",
  },
  {
    src: "/guides/gift-of-gab/game-modes.jpg",
    alt: "Chọn chế độ Gift of Gab trong game",
    caption: "Chọn giữa Thuyết phục tự do (AI chatbot) và Đấu thẻ (Card Debate) để bắt đầu",
  },
  {
    src: "/guides/gift-of-gab/rebuttal-trash-talk.jpg",
    alt: "Hệ thống QTE Trash Talk trong Gift of Gab",
    caption: "QTE Trash Talk xuất hiện trong trận để nhận sát thương/hiệu ứng miễn phí nếu bấm đúng nhịp",
  },
  {
    src: "/guides/gift-of-gab/ui-opponent.jpg",
    alt: "Giao diện hiển thị đối thủ và tài nguyên trong Gift of Gab",
    caption: "Theo dõi Mental Focus của NPC, Inspiration của bạn và các thẻ đang có để chọn nhịp đánh hợp lý",
  },
];

const embeddedVideosVi: EmbeddedVideo[] = [
  {
    id: "video-1",
    videoId: "CZrZCx9vGyU",
    title: "Gift of Gab – Hướng dẫn đầy đủ",
    description: "Tổng hợp cách chơi, các style đối thoại, combo thẻ và mẹo thắng nhanh",
  },
  {
    id: "video-2",
    videoId: "Jd315KSy9-w",
    title: "Chiến thuật & combo thẻ theo style",
    description: "Gợi ý nhịp đánh và cách ghép thẻ hiệu quả cho từng phong cách đối thoại",
  },
  {
    id: "video-3",
    videoId: "Rv26cKdKqCE",
    title: "Nâng Scholar & tối ưu Gift of Gab",
    description: "Cách nâng Scholar để tăng trần Inspiration và làm thẻ mạnh hơn",
  },
];

const styleComparisonVi: DebateStyleComparisonRow[] = [
  {
    style: "Bluster",
    emoji: "🎭",
    strength: "Burst mạnh, áp lực trực diện — hiệu quả nếu bạn biết dồn sát thương vào cửa sổ ngắn.",
    weakness: "Dễ bị Provocation phá nhịp và kéo vào kèo cảm xúc.",
    cardTypes: ["Sát thương", "Phòng thủ", "Tăng tự tin"],
    bestAgainst: "Filibuster",
    weakAgainst: "Provocation",
    playStyle: "Chủ động áp đảo, đánh nhanh – rủi ro cao, thưởng cao.",
    inspirationCost: "moderate_high",
    inspirationCostLabel: "Vừa đến cao",
    defensibility: "low",
    defensibilityLabel: "Thấp",
  },
  {
    style: "Provocation",
    emoji: "⚡",
    strength: "Kích động, làm rối nhịp và tạo momentum — rất khó chịu khi bạn bấm QTE ổn định.",
    weakness: "Rebuttal thường khắc chế sạch nếu bạn overcommit quá sớm.",
    cardTypes: ["Sát thương cảm xúc", "Câm lặng", "Momentum"],
    bestAgainst: "Bluster",
    weakAgainst: "Rebuttal",
    playStyle: "Biến hóa, gây áp lực tâm lý, độ biến thiên cao.",
    inspirationCost: "moderate",
    inspirationCostLabel: "Vừa",
    defensibility: "very_low",
    defensibilityLabel: "Rất thấp",
  },
  {
    style: "Rebuttal",
    emoji: "🎯",
    strength: "Đánh chắc, có thủ và phản đòn — hợp người thích ổn định, ít sai.",
    weakness: "Nhịp chậm; Filibuster có thể thắng bằng kéo dài và bào mòn.",
    cardTypes: ["Sát thương logic", "Phòng thủ", "Dẫn chứng"],
    bestAgainst: "Provocation",
    weakAgainst: "Filibuster",
    playStyle: "Bền bỉ, có kiểm soát, sát thương đều.",
    inspirationCost: "moderate",
    inspirationCostLabel: "Vừa",
    defensibility: "high",
    defensibilityLabel: "Cao",
  },
  {
    style: "Filibuster",
    emoji: "📢",
    strength: "Duy trì áp lực lâu, có hồi phục — thắng bằng bào mòn thay vì burst.",
    weakness: "Khó trả lời áp lực trực diện của Bluster nếu bị dồn nhịp sớm.",
    cardTypes: ["Sát thương duy trì", "Chống chịu", "Nói dai / câu giờ"],
    bestAgainst: "Rebuttal",
    weakAgainst: "Bluster",
    playStyle: "Đánh dài hơi, câu giờ, thắng bằng độ lì.",
    inspirationCost: "high",
    inspirationCostLabel: "Cao",
    defensibility: "moderate",
    defensibilityLabel: "Vừa",
  },
];

export default function GiftOfGabPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
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
        <GiftOfGabImages images={giftOfGabImagesVi} />
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
            <h3 className="text-lg font-bold text-emerald-300">Thuyết phục tự do (Free Persuasion)</h3>
            <p className="text-sm text-slate-300">
              Chat trực tiếp với AI chatbot. Tự nêu luận điểm. Dùng để luyện, kết quả thất thường.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-700/30 bg-blue-950/20 p-6 space-y-3">
            <h3 className="text-lg font-bold text-blue-200">Đấu thẻ (Card Debate)</h3>
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
        <DialogueCardsComponent
          cards={dialogueCardsVi}
          styleLabelMap={styleLabelMapVi}
          uiText={{
            title: "Danh sách thẻ hội thoại",
            intro:
              "Tổng hợp 20 thẻ theo 5 phong cách. Mỗi thẻ có chi phí Inspiration và hiệu ứng riêng — dùng để lên nhịp đánh và combo.",
            styleCardsSuffix: "",
            rarityLabels: { common: "Thường", uncommon: "Hiếm", rare: "Cực hiếm" },
            noteTitle: "Lưu ý",
            noteText:
              "Hiệu ứng thẻ thường scale theo cấp Scholar và nâng thuộc tính. Thẻ Universal dùng được cho mọi style; hay có hồi Mental Focus, hồi Inspiration hoặc hiệu ứng utility mạnh.",
          }}
        />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <h2 className="text-2xl font-bold text-slate-50">So sánh style</h2>
        </div>
        <StyleComparisonTable
          rows={styleComparisonVi}
          uiText={{
            title: "So sánh các style đối thoại",
            intro:
              "Bốn style chính có kèo khắc chế khá rõ. Dùng bảng này để chọn nhịp đánh hợp gu và biết mình đang bị style nào khắc chế.",
            strengths: "Điểm mạnh",
            weaknesses: "Điểm yếu",
            cardTypes: "Nhóm thẻ",
            bestAgainst: "Mạnh khi gặp",
            weakAgainst: "Yếu khi gặp",
            inspirationCost: "Chi phí Inspiration",
            defensibility: "Độ phòng thủ",
            playStyle: "Lối chơi",
            metaTitle: "Meta kiểu \"kéo–búa–bao\"",
            metaHeaders: {
              style: "Style",
              beats: "Khắc chế",
              beatenBy: "Bị khắc chế bởi",
              difficultyVsBluster: "Kèo vs Bluster",
              difficultyVsRebuttal: "Kèo vs Rebuttal",
            },
            difficultyLabels: { easy: "Dễ", medium: "Vừa", hard: "Khó" },
          }}
        />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Video hướng dẫn</h2>
        </div>
        <EmbeddedVideoGallery
          videos={embeddedVideosVi}
          uiText={{
            title: "Video tham khảo",
            intro:
              "Xem gameplay thực tế để nắm nhịp dùng thẻ, cách bắt QTE và cách xoay Inspiration theo từng style.",
            privacyTitle: "Quyền riêng tư",
            privacyText:
              "YouTube chỉ được liên hệ sau khi bạn bấm vào bản xem trước. Khi phát, video dùng chế độ bảo mật nâng cao (youtube-nocookie.com).",
            sourceLabel: "Mo video nguon tren YouTube",
          }}
        />
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-50">Liên quan</h3>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/vn/guides/qin-caiwei" className="underline underline-offset-4 hover:text-emerald-100">
              Qin Caiwei – mẫu hội thoại AI Chat dễ thành công
            </Link>
          </li>
          <li>
            <Link href="/guides/pvp-tier-list" className="underline underline-offset-4 hover:text-emerald-100">
              Tier list PvP – vũ khí mạnh hiện tại
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/builds" className="underline underline-offset-4 hover:text-emerald-100">
              Bộ build – cập nhật theo patch mới
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
