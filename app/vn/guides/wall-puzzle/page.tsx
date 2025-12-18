import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { ZoomableImage } from "../../../guides/wall-puzzle/ZoomableImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Giải đố bức tường Where Winds Meet (Echoes of Old Battles)",
  description:
    "Hướng dẫn đố tường Echoes of Old Battles: đốt đủ hỏa cụ, dùng Yanyun Oath, nhấn đúng ký tự 移/百/漂 và lấy Mystic Touch of Death với lộ trình nhanh.",
  alternates: buildHreflangAlternates("/guides/wall-puzzle", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Giải đố bức tường Where Winds Meet",
    description:
      "Đường đi nhanh: đốt hỏa cụ, kích hoạt Yanyun Oath, nhấn tường 移/百/漂 và mở kho báu Touch of Death.",
    url: "https://wherewindsmeet.org/vn/guides/wall-puzzle",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://static.wherewindsmeet.org/guides/wall-puzzle/wall-tiles-right.webp",
        width: 1650,
        height: 928,
        alt: "Nhấn 移 và 百 trên bức tường bên phải trong câu đố",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giải đố bức tường Where Winds Meet",
    description:
      "Đốt hỏa cụ, dùng Yanyun Oath, nhấn ký tự 移/百/漂 để mở phòng thưởng Touch of Death.",
    images: ["https://static.wherewindsmeet.org/guides/wall-puzzle/wall-tiles-right.webp"],
  },
};

const quickAnswers = [
  {
    label: "Nhiệm vụ",
    value: "Echoes of Old Battles (Qinghe, Verdant Wilds)",
    color: "text-emerald-300",
    icon: "🧭",
  },
  {
    label: "Đáp án tường",
    value: "Nhấn 移 + 百 bên phải, rồi 漂 bên trái.",
    color: "text-amber-300",
    icon: "🧩",
  },
  {
    label: "Phần thưởng chính",
    value: "Mystic Touch of Death + rương kho báu",
    color: "text-rose-300",
    icon: "🎁",
  },
  {
    label: "Thời gian",
    value: "≈10–15 phút nếu biết đường",
    color: "text-sky-300",
    icon: "⏱️",
  },
];

const heroImages = [
  {
    src: "/guides/wall-puzzle/fire-contraptions-map.webp",
    alt: "Vị trí hỏa cụ quanh tàn tích lâu đài ở Qinghe",
    caption: "Bản đồ hỏa cụ: đốt cả bốn để mở đường hầm.",
  },
  {
    src: "/guides/wall-puzzle/pose-yanyun-oath.webp",
    alt: "Dùng động tác Yanyun Oath để khởi động câu đố tường",
    caption: "Kích hoạt: dùng tư thế Yanyun Oath trước tượng lớn.",
  },
  {
    src: "/guides/wall-puzzle/wall-tiles-right.webp",
    alt: "Nhấn khối đá 移 và 百 trên tường bên phải",
    caption: "Lời giải: tường phải nhấn 移 + 百, tường trái nhấn 漂.",
  },
];

const zoomUiText = {
  openAriaLabelTemplate: "Mở ảnh phóng to: {alt}",
  closeLabel: "Đóng",
  hintTemplate: "Cuộn hoặc dùng +/- để zoom; kéo/cuộn để di chuyển. Hiện tại: {pct}%",
} as const;

const fireContraptions = [
  {
    title: "Sân tập",
    detail: "Đốt hỏa cụ tại nơi đánh Zhang Bao và nhặt bản đồ đố.",
  },
  {
    title: "Cổng lâu đài",
    detail: "Đối diện cổng, leo tàn tích bên trái; hỏa cụ thường đã được đốt sẵn.",
  },
  {
    title: "Tường thành trên",
    detail: "Theo lối tường gãy đi lên, đốt hỏa cụ ở gờ cao.",
  },
  {
    title: "Gờ thấp hướng đông",
    detail: "Tụt/leo xuống nền thấp phía đông và đốt hỏa cụ cuối.",
  },
];

const wallSolution = [
  {
    title: "Lấy động tác",
    text: "Mượn động tác “Yanyun Oath” từ tượng lính trước đại sảnh ngầm.",
  },
  {
    title: "Kích hoạt câu đố",
    text: "Đứng trước tượng khổng lồ và dùng Yanyun Oath để đánh thức cơ quan tường.",
  },
  {
    title: "Nhấn tường phải",
    text: "Ở tường bên phải, nhấn các khối có chữ 移 và 百.",
  },
  {
    title: "Nhấn tường trái",
    text: "Ở tường bên trái, nhấn khối có chữ 漂 để hoàn tất.",
  },
  {
    title: "Hoàn thành",
    text: "Cửa mở—nhảy qua khe, kéo cần sau thác nước và mở rương.",
  },
];

const unlockSteps = [
  {
    title: "Bắt đầu nhiệm vụ tại tàn tích Qinghe",
    text: "Nói chuyện với Lie Bujin ở cổng tàn tích để nhận Echoes of Old Battles (Verdant Wilds).",
    image: {
      src: "/guides/wall-puzzle/game8/4331081-57e94f6bf21d69927689e378eb0358fd.webp",
      alt: "Mốc nhiệm vụ Echoes of Old Battles trên bản đồ",
      caption: "Mốc nhiệm vụ: tàn tích Qinghe, Verdant Wilds.",
    },
  },
  {
    title: "Nghe lén, nổ thùng, dọn quái",
    text: "Nghe lén gần thùng nổ, bắn mũi tên lửa để quét đợt quái, rồi hạ Zhang Bao và nhặt bản đồ hỏa cụ từ rương sân tập.",
    image: {
      src: "/guides/wall-puzzle/game8/4331075-caa01c4ee0d88da905e52717793aa762.webp",
      alt: "Vị trí nghe lén và thùng nổ",
      caption: "Nghe lén rồi bắn thùng nổ để dọn đợt đầu.",
    },
  },
  {
    title: "Đốt đủ bốn hỏa cụ",
    text: "Dùng bản đồ để đốt bốn hỏa cụ (thứ tự tùy ý): trái cổng, tường gãy trên, nền thấp phía đông, và trong sân tập.",
    image: {
      src: "/guides/wall-puzzle/game8/4331076-f79e5957d1551183859b4e5d3e86d414.webp",
      alt: "Đốt đúng hỏa cụ",
      caption: "Phải đốt đúng bốn hỏa cụ, nếu thiếu cửa ngầm sẽ không mở.",
    },
  },
  {
    title: "Dậm bàn áp lực, xuống ngầm",
    text: "Sau khi đốt đủ, một bàn áp lực xuất hiện ở sân; dùng Mighty Drop để mở đường hầm.",
    image: {
      src: "/guides/wall-puzzle/game8/4331077-e5a535c018ecb105709d9d47994d8b12.webp",
      alt: "Lối vào hầm",
      caption: "Dậm bàn áp lực để lộ lối xuống ngầm.",
    },
  },
  {
    title: "Mượn động tác Yanyun Oath",
    text: "Sao chép động tác từ tượng lính, rồi dùng trước tượng lớn để kích hoạt câu đố tường.",
    image: {
      src: "/guides/wall-puzzle/game8/4331078-7e11bf6db03c83463d137fe7e8d188aa.webp",
      alt: "Dùng động tác Yanyun Oath để kích hoạt cơ quan",
      caption: "Phải dùng động tác trước khi tương tác; nếu không tường sẽ không phản hồi.",
    },
  },
  {
    title: "Nhấn khối tường (bước lõi)",
    text: "Tường phải: nhấn 移 và 百. Tường trái: nhấn 漂. Thứ tự linh hoạt—chỉ cần đủ ba ký tự để mở cửa.",
    image: {
      src: "/guides/wall-puzzle/wall-tiles-right.webp",
      alt: "Nhấn 移 và 百 trên tường bên phải",
      caption: "Tường phải: 移 + 百; tường trái: 漂.",
    },
  },
  {
    title: "Kéo cần sau thác nước",
    text: "Cửa mở, nhảy qua và kéo cần sau thác để tiến tiếp.",
    image: {
      src: "/guides/wall-puzzle/game8/4331080-4a13e0a7c62d5ea365fce67df363dbe1.webp",
      alt: "Cần gạt sau thác nước",
      caption: "Cần gạt mở lối vào phòng kho báu.",
    },
  },
  {
    title: "Mở rương lấy Touch of Death",
    text: "Phòng cuối cho Mystic Skill Touch of Death và thêm loot; hoàn tất nhiệm vụ.",
    image: {
      src: "/guides/wall-puzzle/game8/4331079-8c8f3f163d873516d57b4e93078f2a7b.webp",
      alt: "Rương thưởng Touch of Death",
      caption: "Nhận Mystic Skill: Touch of Death.",
    },
  },
];

const ignReferences = [
  {
    src: "/guides/wall-puzzle/ign/1.webp",
    alt: "Toàn cảnh phòng câu đố với tượng trung tâm",
    caption: "Ảnh IGN: bố cục phòng trước khi tương tác.",
  },
  {
    src: "/guides/wall-puzzle/ign/2.webp",
    alt: "Gợi ý ký tự trên nền gần tượng",
    caption: "Ảnh IGN: bia gợi ý ký tự cần nhấn.",
  },
  {
    src: "/guides/wall-puzzle/ign/3.webp",
    alt: "Tường phải với bốn khối có thể tương tác",
    caption: "Ảnh IGN: tường phải—nhấn khối 1 và 3 (移, 百).",
  },
  {
    src: "/guides/wall-puzzle/ign/4.webp",
    alt: "Tường trái với hai khối có thể tương tác",
    caption: "Ảnh IGN: tường trái—nhấn khối 2 (漂).",
  },
  {
    src: "/guides/wall-puzzle/ign/5.webp",
    alt: "Tường phải sau khi nhấn đúng",
    caption: "Ảnh IGN: trạng thái tường phải sau khi giải.",
  },
  {
    src: "/guides/wall-puzzle/ign/6.webp",
    alt: "Tường trái sau khi nhấn đúng",
    caption: "Ảnh IGN: trạng thái tường trái sau khi giải.",
  },
];

export default function WallPuzzleGuidePage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/13.webp"
            alt="Tàn tích tường đá trong Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/20" />
        </div>

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-emerald-300">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-900/30 px-3 py-1">Echoes of Old Battles</span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-slate-200">Hướng dẫn đố tường</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-bold text-slate-50 sm:text-5xl">
              Giải đố bức tường trong Where Winds Meet
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Lộ trình nhanh để xong Echoes of Old Battles ở Qinghe: đốt đủ hỏa cụ, giải đố tường (移 / 百 / 漂) và lấy Mystic Touch of Death mà không phải đi vòng.
            </p>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Mắc ở Encounter khác? Xem{" "}
              <Link href="/vn/guides/woven-with-malice" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                hướng dẫn nhiệm vụ Sợi Định Mệnh
              </Link>{" "}
              (mốc giờ, nhuộm màu, đấu tăng sĩ, bẫy, đường tre, fix lỗi).
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickAnswers.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/40"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <p className={`mt-2 text-sm font-medium ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <h2 className="text-xl font-bold text-slate-50">Hình ảnh cần xem</h2>
          <p className="text-xs text-slate-500">Nguồn: GameRant (lưu local)</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {heroImages.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-inner shadow-slate-950/40"
            >
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                uiText={zoomUiText}
              />
              <figcaption className="px-3 py-2 text-xs text-slate-300/90 border-t border-slate-800/80">
                {img.caption} (nhấn để phóng to)
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-50">Tóm tắt lộ trình</h2>
          <ol className="space-y-4 text-sm text-slate-300 list-decimal list-inside">
            <li>
              <strong>Bắt đầu ở Qinghe, Verdant Wilds.</strong> Nói chuyện với Lie Bujin tại cổng tàn tích để nhận <em>Echoes of Old Battles</em>.
            </li>
            <li>
              <strong>Dọn sân.</strong> Nghe lén bọn cướp gần thùng nổ, bắn mũi tên lửa, hạ đợt quái và boss Zhang Bao.
            </li>
            <li>
              <strong>Nhặt bản đồ đố.</strong> Mở rương ở sân tập; bản đồ đánh dấu toàn bộ hỏa cụ cần đốt.
            </li>
            <li>
              <strong>Đốt bốn hỏa cụ.</strong> Vị trí bên dưới—thứ tự tùy ý.
            </li>
            <li>
              <strong>Dậm bàn áp lực.</strong> Bàn xuất hiện ở sân; dùng Mighty Drop để mở lối ngầm.
            </li>
            <li>
              <strong>Dùng Yanyun Oath trước tượng.</strong> Mượn động tác từ tượng lính rồi thực hiện trước tượng lớn để kích hoạt đố tường.
            </li>
            <li>
              <strong>Nhấn đúng ký tự.</strong> Tường phải: 移 rồi 百. Tường trái: 漂. Cửa bí mật mở tới phòng thưởng.
            </li>
          </ol>
        </div>

        <div className="space-y-4 rounded-3xl border border-emerald-700/30 bg-emerald-950/20 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-emerald-200">Checklist hỏa cụ</h3>
          <p className="text-sm text-emerald-100/80">
            Đốt đủ bốn hỏa cụ để lộ chuỗi cần gạt trong hầm. Thứ tự không quan trọng, chỉ cần đúng hỏa cụ.
          </p>
          <div className="space-y-3">
            {fireContraptions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-emerald-800/40 bg-emerald-900/30 p-4">
                <p className="text-sm font-semibold text-emerald-100">{item.title}</p>
                <p className="text-xs text-emerald-100/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-500/30 bg-amber-900/20 px-3 py-1 text-xs font-semibold text-amber-200">
            Đáp án đố tường
          </span>
          <p className="text-sm text-slate-400">Nhấn ba ký tự này để mở cửa.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {wallSolution.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Bước {index + 1}</p>
                  <h3 className="text-base font-bold text-slate-50">{step.title}</h3>
                </div>
                <span className="text-slate-500 text-xs font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {index + 1}/5
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p>
            Nếu tường không phản hồi, hãy trang bị lại động tác và tương tác với tượng. Đảm bảo đã đạp bàn áp lực; khu vực ngầm sẽ khóa nếu chưa đốt đủ bốn hỏa cụ. Bia gần đó chỉ gợi ý ký tự—nhấn các khối có 移, 百, 漂 và bỏ qua phần còn lại.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-xl font-bold text-slate-50">Các bước + ảnh minh họa</h3>
          <p className="text-xs text-slate-500">Ảnh từ Game8 và GameRant, lưu local cho rõ nét.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {unlockSteps.map((step, idx) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Bước {idx + 1}</p>
                  <h4 className="text-base font-semibold text-slate-50">{step.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.text}</p>
                </div>
                <span className="text-[11px] text-slate-500 font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {idx + 1}/8
                </span>
              </div>
              <figure className="border-t border-slate-800/80">
                <ZoomableImage
                  src={step.image.src}
                  alt={step.image.alt}
                  width={1650}
                  height={928}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  uiText={zoomUiText}
                />
                <figcaption className="px-4 py-3 text-xs text-slate-300/90 border-t border-slate-800/80">
                  {step.image.caption} (nhấn để phóng to)
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl font-bold text-slate-50">Ảnh tham chiếu IGN (local)</h3>
          <p className="text-xs text-slate-500">Sao lưu từ bản IGN của bạn để xem rõ.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ignReferences.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-inner shadow-slate-950/40"
            >
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 33vw"
                uiText={zoomUiText}
              />
              <figcaption className="px-3 py-2 text-xs text-slate-300/90 border-t border-slate-800/80">
                {img.caption} (nhấn để phóng to)
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-50">Phần thưởng & lý do nên làm</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>✓ Mở phòng bí mật chứa <strong>Touch of Death</strong> (Assassin Mystic Skill).</li>
            <li>✓ Thêm loot + XP nhiệm vụ, biến đây thành side story giá trị nhất đầu game ở Qinghe.</li>
            <li>✓ Bàn áp lực và đố tường dạy cách di chuyển/giải cơ quan dùng ở các tàn tích sau.</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-50">Xử lý sự cố</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              • <strong>Mất động tác?</strong> Động tác Yanyun Oath lấy từ tượng lính trước phòng tường; tương tác để sao chép.
            </li>
            <li>
              • <strong>Cửa chưa mở?</strong> Kiểm tra đã đốt đủ bốn hỏa cụ và đã dậm bàn bằng Mighty Drop.
            </li>
            <li>
              • <strong>Leo vướng?</strong> Dùng grapple hoặc chạy tường dọc đoạn tường gãy để lên hỏa cụ trên nhanh hơn.
            </li>
          </ul>
          <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/30 p-4 text-xs text-emerald-100">
            Cần luyện di chuyển? Xem{" "}
            <Link href="/vn/guides/new-players" className="text-emerald-200 underline underline-offset-4 hover:text-emerald-100">
              mẹo di chuyển cho người mới
            </Link>{" "}
            để quen chạy tường và bắn móc.
          </div>
        </div>
      </section>
    </article>
  );
}
