import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WalkthroughGallery from "../../../guides/woven-with-malice/WalkthroughGallery";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "Hướng dẫn nhiệm vụ Sợi Định Mệnh (Woven with Malice)",
  description:
    "Hướng dẫn 31 bước Sợi Định Mệnh: giờ Tý/Sửu, nhuộm màu, đấu tăng, bẫy và đuổi theo ở rừng tre, kèm ảnh phóng to và cách xử lý lỗi.",
  alternates: {
    canonical: `${baseUrl}/vn/guides/woven-with-malice`,
  },
  openGraph: {
    title: "Sợi Định Mệnh – hướng dẫn Where Winds Meet",
    description:
      "Đặt giờ Tý, lấy thuốc nhuộm, đấu tăng, dựng bẫy và theo dõi ở rừng tre. Có fix lỗi và ảnh phóng to cho người bị kẹt.",
    url: `${baseUrl}/vn/guides/woven-with-malice`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/woven-with-malice/header-01.png"),
        width: 1200,
        height: 675,
        alt: "Cảnh chuông trong nhiệm vụ Sợi Định Mệnh",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sợi Định Mệnh – hướng dẫn Where Winds Meet",
    description:
      "Lộ trình, cổng giờ, dựng bẫy và xử lý lỗi cho nhiệm vụ Sợi Định Mệnh.",
    images: [cdn("/guides/woven-with-malice/header-01.png")],
  },
};

const quickFacts = [
  { label: "Khu vực", value: "Qinghe – gần Buddha Fort (Sundara Land)", icon: "🧭" },
  { label: "Loại nhiệm vụ", value: "Encounter / Lost Chapter", icon: "📜" },
  { label: "Cổng giờ", value: "Bắt đầu giờ Tý; lấy áo giờ Sửu", icon: "⏱️" },
  { label: "Trục chính", value: "Nhuộm → khăn tay → đấu tăng → bẫy → đuổi rừng tre", icon: "🧶" },
  { label: "Lỗi thường gặp", value: "Kẹt tiến độ nếu sai giờ hoặc bẫy không đốt bằng lửa", icon: "⚠️" },
  { label: "Thưởng báo cáo", value: "Echo Jade, Lingering Melody, Coin, EXP, Jade Fish", icon: "🎁" },
];

const fastRoute = [
  "Đặt giờ Tý, nói chuyện học giả bị kẹt trong chuông.",
  "Gặp bé gái tại chỗ thêu; lấy thuốc nhuộm đỏ, xanh, đen và giao.",
  "Tua qua 1 ngày → đặt giờ Sửu → nhận Celestial Silk Garment.",
  "Quay lại chuông, nghe lén, thấy học giả chết, nhặt khăn tay đầu.",
  "Gặp tăng Tranquillus, đấu, nhận khăn tay thứ hai (“đền bằng mạng”).",
  "Chọn vị trí bẫy, đốt dây khô bằng lửa, cho bé gái trốn; cô thợ tơ xuất hiện rồi chạy.",
  "Bám theo, tìm nhà sư bị chính bẫy trói.",
  "Tới rừng tre, nói chuyện với bé gái, rồi tra hỏi chủ lầu thêu.",
  "Kiểm tra xe, dọn đống đổ (Q + nhảy), xem tường đá.",
  "Dùng Wind Sense trong rừng tre, nghe lén hai kẻ, rồi phục kích chủ lầu.",
  "Bị xịt khí, xem cutscene cứu, nói chuyện với bé gái, hoàn thành.",
];

export type WalkthroughStep = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
};

const walkthrough: WalkthroughStep[] = [
  {
    title: "Đặt giờ Tý",
    text: "Mở đồng hồ và đặt giờ trong game về Tý trước khi lại gần chuông.",
    image: { src: cdn("/guides/woven-with-malice/step-02-time-zi.png"), alt: "Đặt giờ Tý cho nhiệm vụ" },
  },
  {
    title: "Tiếp cận chuông",
    text: "Tới Buddha Fort (Qinghe) và kiểm tra chuông có học giả kẹt bên trong.",
    image: { src: cdn("/guides/woven-with-malice/step-01-bell.png"), alt: "Đến chuông nơi học giả bị nhốt" },
  },
  {
    title: "Bắt đầu nhiệm vụ",
    text: "Nói chuyện với học giả trong chuông để bắt đầu Sợi Định Mệnh.",
    image: { src: cdn("/guides/woven-with-malice/step-03-bell-talk.png"), alt: "Trò chuyện với học giả để khởi động nhiệm vụ" },
  },
  {
    title: "Tới chỗ thêu",
    text: "Theo marker tới khu thêu để tiếp tục.",
    image: { src: cdn("/guides/woven-with-malice/step-04-embroidery-ladies.png"), alt: "Đi tới chỗ các cô thợ thêu" },
  },
  {
    title: "Nói chuyện với bé gái",
    text: "Gặp bé gái tại khu thêu và nghe yêu cầu.",
    image: { src: cdn("/guides/woven-with-malice/step-05-little-girl.png"), alt: "Nói chuyện với bé gái ở chỗ thêu" },
  },
  {
    title: "Lấy thuốc nhuộm đỏ và xanh",
    text: "Nhặt nhuộm đỏ và xanh ở sân bên cạnh.",
    image: { src: cdn("/guides/woven-with-malice/step-06-red-blue-dye.png"), alt: "Lấy nhuộm đỏ và xanh" },
  },
  {
    title: "Lấy nhuộm đen",
    text: "Lấy nhuộm đen từ bếp than để đủ bộ.",
    image: { src: cdn("/guides/woven-with-malice/step-07-black-dye.png"), alt: "Lấy nhuộm đen từ bếp than" },
  },
  {
    title: "Giao nhuộm và đợi 1 ngày",
    text: "Trả nhuộm cho bé, tua 1 ngày ingame và đặt giờ Sửu.",
    image: { src: cdn("/guides/woven-with-malice/step-08-wait-chou.png"), alt: "Đặt giờ Sửu sau khi giao nhuộm" },
  },
  {
    title: "Nghe lén ở chuông",
    text: "Quay lại chuông và nghe lén cuộc đối thoại.",
    image: { src: cdn("/guides/woven-with-malice/step-09-eavesdrop.png"), alt: "Nghe lén tại chuông" },
  },
  {
    title: "Tìm học giả chết",
    text: "Kiểm tra lại chuông và thấy học giả đã chết.",
    image: { src: cdn("/guides/woven-with-malice/step-10-scholar-dead.png"), alt: "Phát hiện học giả đã chết" },
  },
  {
    title: "Đọc khăn tay thứ nhất",
    text: "Nhặt khăn tay trên đất và đọc nội dung.",
    image: { src: cdn("/guides/woven-with-malice/step-11-handkerchief-1.png"), alt: "Nhặt khăn tay đầu tiên" },
  },
  {
    title: "Đấu tăng Tranquillus",
    text: "Đến vị trí tăng, trò chuyện rồi đấu; nhận khăn tay thứ hai ghi “đền bằng mạng”.",
    image: { src: cdn("/guides/woven-with-malice/step-12-monk.png"), alt: "Đối đầu nhà sư Tranquillus" },
  },
  {
    title: "Đặt bẫy & đốt dây",
    text: "Chọn vị trí bẫy, đốt dây khô bằng lửa và cho bé gái trốn. Cô thợ tơ xuất hiện rồi bỏ chạy.",
    image: { src: cdn("/guides/woven-with-malice/step-13-trap.png"), alt: "Đốt dây khô để đặt bẫy" },
  },
  {
    title: "Theo cô thợ tơ",
    text: "Bám theo cho tới khi thấy nhà sư bị chính bẫy trói.",
    image: { src: cdn("/guides/woven-with-malice/step-14-tail.png"), alt: "Bám theo cô thợ tơ bỏ chạy" },
  },
  {
    title: "Tới rừng tre",
    text: "Đến lùm tre, nói chuyện với bé gái rồi hỏi chủ lầu thêu.",
    image: { src: cdn("/guides/woven-with-malice/step-15-bamboo.png"), alt: "Gặp bé gái ở rừng tre" },
  },
  {
    title: "Tra xe & tường đá",
    text: "Kiểm tra xe, dọn đống đổ (Q + nhảy), xem tường đá gần đó.",
    image: { src: cdn("/guides/woven-with-malice/step-16-cart.png"), alt: "Kiểm tra xe và đống đổ" },
  },
  {
    title: "Dùng Wind Sense",
    text: "Bật Wind Sense trong rừng tre, nghe lén hai kẻ, rồi phục kích chủ lầu.",
    image: { src: cdn("/guides/woven-with-malice/step-17-windsense.png"), alt: "Dùng Wind Sense ở rừng tre" },
  },
  {
    title: "Cutscene cứu",
    text: "Bị xịt khí, xem cảnh cứu, nói chuyện với bé gái, nhiệm vụ hoàn thành.",
    image: { src: cdn("/guides/woven-with-malice/step-18-finale.png"), alt: "Cảnh kết và cứu" },
  },
];

export default function WovenWithMalicePage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950/60 to-slate-950" />
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-5 relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Sợi Định Mệnh (Woven with Malice) – hướng dẫn nhanh
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Nhiệm vụ Encounter nhiều bước: giờ Tý/Sửu, nhuộm màu, đấu tăng, bẫy, đuổi qua rừng tre. Nếu bị kẹt, dùng lộ trình tóm tắt và fix lỗi bên dưới.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/vn/guides/qin-caiwei"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🤝 Qin Caiwei: script chat dễ đậu
              </Link>
              <Link
                href="/vn/guides/gift-of-gab"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                💬 Minigame đối thoại
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/40">
              <Image
                src="/guides/woven-with-malice/header-01.png"
                alt="Chuông trong nhiệm vụ Sợi Định Mệnh"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">Nguồn ảnh: static.wherewindsmeet.org</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">Thông tin nhanh</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-inner shadow-black/20"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-amber-800/50 bg-amber-950/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <h3 className="text-2xl font-bold text-amber-100">Lộ trình nhanh (tóm tắt)</h3>
          </div>
          <ol className="space-y-2 text-sm text-amber-50/90 list-decimal list-inside">
            {fastRoute.map((item) => (
              <li key={item} className="leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Walkthrough từng bước</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {walkthrough.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-slate-950/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Bước {idx + 1}</p>
                  <h3 className="text-base font-bold text-slate-50">{step.title}</h3>
                </div>
                <span className="text-slate-500 text-xs font-mono bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-700/70">
                  {idx + 1}/{walkthrough.length}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.text}</p>
              {step.image ? (
                <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={1280}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🖼️</span>
          <h2 className="text-2xl font-bold text-slate-50">Bộ ảnh phóng to</h2>
        </div>
        <WalkthroughGallery steps={walkthrough} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧵</span>
            <h2 className="text-2xl font-bold text-slate-50">Mẹo tránh kẹt tiến độ</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Đảm bảo đúng giờ Tý khởi động, giờ Sửu nhận áo; sai giờ dễ không kích hoạt.</li>
            <li>Đốt dây khô bằng kỹ năng lửa; nếu không cháy, đổi kỹ năng hoặc nhóm lửa.</li>
            <li>Nghe lén và nhặt khăn tay trước khi rời khu vực.</li>
            <li>Nếu NPC không xuất hiện, tua thêm thời gian hoặc relog rồi quay lại.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-3xl border border-emerald-700/40 bg-emerald-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <h3 className="text-2xl font-bold text-emerald-100">Thưởng & liên quan</h3>
          </div>
          <ul className="space-y-2 text-sm text-emerald-100/90">
            <li>Echo Jade, Lingering Melody, Coin, EXP, Jade Fish (tuỳ patch).</li>
            <li>Đoạn truyện nhỏ và kết nối với Old Friends.</li>
          </ul>
          <div className="space-y-2 text-sm text-emerald-100/90">
            <p>Tham khảo thêm:</p>
            <ul className="space-y-1 pl-3 text-emerald-100">
              <li>
                <Link href="/vn/guides/qin-caiwei" className="underline underline-offset-4 hover:text-emerald-50">
                  Qin Caiwei – AI Chat script
                </Link>
              </li>
              <li>
                <Link href="/vn/guides/gift-of-gab" className="underline underline-offset-4 hover:text-emerald-50">
                  Gift of Gab – minigame đối thoại
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
