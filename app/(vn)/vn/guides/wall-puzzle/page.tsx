import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { ZoomableImage } from "@/app/(en)/guides/wall-puzzle/ZoomableImage";
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
        alt: "Tường phải của câu đố với hai khối Yi và Bai",
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
    alt: "Bản đồ bốn hỏa cụ quanh tàn tích Qinghe",
    caption: "Đốt đủ bốn hỏa cụ được đánh dấu trước khi quay lại sân tập.",
  },
  {
    src: "/guides/wall-puzzle/pose-yanyun-oath.webp",
    alt: "Nhân vật dùng động tác Yanyun Oath trước tượng khổng lồ",
    caption: "Dùng Yanyun Oath trước tượng để kích hoạt cơ quan tường.",
  },
  {
    src: "/guides/wall-puzzle/wall-tiles-right.webp",
    alt: "Tường phải với hai ký tự Yi và Bai đã được chọn",
    caption: "Đáp án tường phải: nhấn 移 và 百.",
  },
  {
    src: "/guides/wall-puzzle/wall-tiles-left.webp",
    alt: "Tường trái với ký tự Piao đã được chọn",
    caption: "Đáp án tường trái: nhấn 漂.",
  },
];

const ignReferenceImages = [
  { src: "/guides/wall-puzzle/ign/1.webp", alt: "Phòng đố tường với bức tượng ở giữa", caption: "Bố cục phòng trước khi kích hoạt bức tượng." },
  { src: "/guides/wall-puzzle/ign/2.webp", alt: "Gợi ý ký tự gần tượng của câu đố tường", caption: "Gợi ý chỉ về các ký tự tương ứng trên tường." },
  { src: "/guides/wall-puzzle/ign/3.webp", alt: "Tường phải trước khi chọn các khối", caption: "Tường phải trước khi giải: chọn khối thứ nhất và thứ ba." },
  { src: "/guides/wall-puzzle/ign/4.webp", alt: "Tường trái trước khi chọn khối", caption: "Tường trái trước khi giải: chọn khối thứ hai." },
  { src: "/guides/wall-puzzle/ign/5.webp", alt: "Tường phải sau khi chọn đúng", caption: "Trạng thái đã giải của tường phải." },
  { src: "/guides/wall-puzzle/ign/6.webp", alt: "Tường trái sau khi chọn đúng", caption: "Trạng thái đã giải của tường trái." },
] as const;

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
  },
  {
    title: "Nghe lén, nổ thùng, dọn quái",
    text: "Nghe lén gần thùng nổ, bắn mũi tên lửa để quét đợt quái, rồi hạ Zhang Bao và nhặt bản đồ hỏa cụ từ rương sân tập.",
  },
  {
    title: "Đốt đủ bốn hỏa cụ",
    text: "Dùng bản đồ để đốt bốn hỏa cụ (thứ tự tùy ý): trái cổng, tường gãy trên, nền thấp phía đông, và trong sân tập.",
  },
  {
    title: "Dậm bàn áp lực, xuống ngầm",
    text: "Sau khi đốt đủ, một bàn áp lực xuất hiện ở sân; dùng Mighty Drop để mở đường hầm.",
  },
  {
    title: "Mượn động tác Yanyun Oath",
    text: "Sao chép động tác từ tượng lính, rồi dùng trước tượng lớn để kích hoạt câu đố tường.",
  },
  {
    title: "Nhấn khối tường (bước lõi)",
    text: "Tường phải: nhấn 移 và 百. Tường trái: nhấn 漂. Thứ tự linh hoạt—chỉ cần đủ ba ký tự để mở cửa.",
  },
  {
    title: "Kéo cần sau thác nước",
    text: "Cửa mở, nhảy qua và kéo cần sau thác để tiến tiếp.",
  },
  {
    title: "Mở rương lấy Touch of Death",
    text: "Phòng cuối cho Mystic Skill Touch of Death và thêm loot; hoàn tất nhiệm vụ.",
  },
];

const unlockImages = [
  "/guides/wall-puzzle/game8/4331081-57e94f6bf21d69927689e378eb0358fd.webp",
  "/guides/wall-puzzle/game8/4331075-caa01c4ee0d88da905e52717793aa762.webp",
  "/guides/wall-puzzle/game8/4331076-f79e5957d1551183859b4e5d3e86d414.webp",
  "/guides/wall-puzzle/game8/4331077-e5a535c018ecb105709d9d47994d8b12.webp",
  "/guides/wall-puzzle/game8/4331078-7e11bf6db03c83463d137fe7e8d188aa.webp",
  "/guides/wall-puzzle/wall-tiles-right.webp",
  "/guides/wall-puzzle/game8/4331080-4a13e0a7c62d5ea365fce67df363dbe1.webp",
  "/guides/wall-puzzle/game8/4331079-8c8f3f163d873516d57b4e93078f2a7b.webp",
] as const;

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
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Muốn thêm puzzle? Xem{" "}
              <Link href="/vn/guides/xiangqi" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                hướng dẫn puzzle cờ tướng (Xiangqi)
              </Link>{" "}
              để có checklist giải nhanh và pattern thường gặp.
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

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-50">Ảnh quan trọng cần xem</h2>
            <p className="mt-1 text-xs text-slate-400">Source publisher: Game8 and GameRant.</p>
          </div>
          <p className="text-xs text-emerald-200">Reuse authorization confirmed by site owner 2026-08-29.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {heroImages.map((image, index) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              <ZoomableImage
                src={image.src}
                alt={image.alt}
                width={1650}
                height={928}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <figcaption className="border-t border-slate-800 px-4 py-3 text-xs leading-5 text-slate-300">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-50">Thư viện tham chiếu phòng đố tường</h2>
            <p className="mt-1 text-xs text-slate-400">Source publisher: IGN.</p>
          </div>
          <p className="max-w-xl text-xs leading-5 text-amber-200">
            Reuse authorization confirmed by site owner 2026-08-29. Third-party walkthrough screenshots are not official or current-build evidence.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ignReferenceImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              <ZoomableImage src={image.src} alt={image.alt} width={1650} height={928} sizes="(max-width: 768px) 100vw, 33vw" />
              <figcaption className="border-t border-slate-800 px-4 py-3 text-xs leading-5 text-slate-300">{image.caption}</figcaption>
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
          <h3 className="text-xl font-bold text-slate-50">Các bước mở khóa kèm ảnh</h3>
          <p className="text-xs text-slate-400">Source publisher: Game8 and GameRant.</p>
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
                  src={unlockImages[idx]}
                  alt={`${step.title} – ảnh hướng dẫn nhiệm vụ Where Winds Meet`}
                  width={1650}
                  height={928}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs leading-5 text-slate-300">
                  Bước {idx + 1}: {step.title}. Source publisher: {idx === 5 ? "GameRant" : "Game8"}.
                </figcaption>
              </figure>
            </article>
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
