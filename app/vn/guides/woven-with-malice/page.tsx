import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WalkthroughGallery from "./WalkthroughGallery";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "Where Winds Meet: Sợi Định Mệnh (Woven with Malice) – Hướng dẫn (2025)",
  description:
    "01/2025: Hướng dẫn nhiệm vụ Sợi Định Mệnh (Woven with Malice)—cổng giờ Tý/Sửu, thuốc nhuộm, đấu tăng, bẫy + bám theo rừng tre và cách sửa lỗi kẹt tiến độ.",
  alternates: buildHreflangAlternates("/guides/woven-with-malice", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet: Sợi Định Mệnh (Woven with Malice) – Hướng dẫn (2025)",
    description:
      "Kích hoạt giờ Tý (Zi), thu thuốc nhuộm, đối chất/so tài với nhà sư, đặt bẫy và hoàn thành Sợi Định Mệnh nhanh. Kèm fix lỗi (đặt giờ, đốt dây leo) khi nhiệm vụ bị kẹt.",
    url: `${baseUrl}/vn/guides/woven-with-malice`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/woven-with-malice/header-01.png"),
        width: 1200,
        height: 675,
        alt: "Cảnh chuông nhiệm vụ Sợi Định Mệnh trong Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet: Sợi Định Mệnh (Woven with Malice) – Hướng dẫn (2025)",
    description:
      "Cổng giờ, đặt bẫy, bám theo và fix lỗi cho Sợi Định Mệnh (Woven with Malice).",
    images: [cdn("/guides/woven-with-malice/header-01.png")],
  },
};

const quickFacts = [
  { label: "Khu vực", value: "Qinghe – gần Buddha Fort (Sundara Land)", icon: "🧭" },
  { label: "Loại nhiệm vụ", value: "Encounter / Lost Chapter", icon: "📜" },
  { label: "Cổng giờ", value: "Bắt đầu giờ Tý (Zi); nhận đồ giờ Sửu (Chou)", icon: "⏱️" },
  { label: "Trục chính", value: "Nhuộm → khăn tay → đấu tăng → bẫy → bám theo rừng tre", icon: "🧶" },
  { label: "Lỗi thường gặp", value: "Kẹt tiến độ nếu chưa đặt giờ hoặc bẫy không đốt bằng lửa", icon: "⚠️" },
  { label: "Thưởng (người chơi báo cáo)", value: "Echo Jade, Lingering Melody, Coins, EXP, Jade Fish", icon: "🎁" },
];

const fastRoute = [
  "Đặt thời gian về giờ Tý (Zi), nói chuyện với học giả bị kẹt trong chuông.",
  "Gặp bé gái ở khu thêu; nhặt thuốc nhuộm đỏ, xanh, đen rồi giao lại.",
  "Tua qua 1 ngày trong game → đặt giờ Sửu (Chou) → nhận Celestial Silk Garment.",
  "Quay lại chuông: nghe lén, thấy học giả chết và nhặt khăn tay manh mối đầu tiên.",
  "Đối chất Monk Tranquillus và so tài; nhận khăn tay thứ hai (manh mối “đền bằng mạng”).",
  "Chọn điểm đặt bẫy, đốt dây leo khô bằng lửa và cho bé gái ẩn nấp; Silkworm Lady xuất hiện rồi bỏ chạy.",
  "Bám theo mục tiêu, sau đó quay lại thấy nhà sư bị mắc vào chính bẫy của mình.",
  "Tới rừng tre, nói chuyện với bé gái, rồi tra hỏi chủ lầu thêu.",
  "Kiểm tra xe hàng của hắn, dọn đống đổ trong phế tích gần đó (Q + Nhảy), rồi kiểm tra tường đá.",
  "Dùng Wind Sense trong rừng tre, nghe lén hai người đàn ông, rồi phục kích chủ lầu thêu.",
  "Bị trúng khói mê, xem cutscene cứu援, nói chuyện với bé gái và nhiệm vụ hoàn tất.",
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
    title: "Đặt giờ Tý (Zi)",
    text: "Mở đồng hồ và đặt thời gian trong game về giờ Tý (Zi) trước khi đến gần chuông.",
    image: {
      src: cdn("/guides/woven-with-malice/step-02-time-zi.png"),
      alt: "Đặt thời gian về giờ Tý (Zi) cho nhiệm vụ",
    },
  },
  {
    title: "Tới chuông có học giả bị kẹt",
    text: "Tới Buddha Fort (Qinghe) và kiểm tra chiếc chuông có học giả bị kẹt bên trong.",
    image: {
      src: cdn("/guides/woven-with-malice/step-01-bell.png"),
      alt: "Đến chiếc chuông nơi học giả bị kẹt bên trong",
    },
  },
  {
    title: "Nói chuyện để bắt đầu nhiệm vụ",
    text: "Nói chuyện với học giả trong chuông để chính thức bắt đầu Sợi Định Mệnh (Woven with Malice).",
    image: {
      src: cdn("/guides/woven-with-malice/step-03-bell-talk.png"),
      alt: "Nói chuyện với học giả trong chuông để bắt đầu nhiệm vụ",
    },
  },
  {
    title: "Đến khu thêu",
    text: "Theo marker đến khu thêu để tiếp tục nhiệm vụ.",
    image: {
      src: cdn("/guides/woven-with-malice/step-04-embroidery-ladies.png"),
      alt: "Đi đến khu thêu theo nhiệm vụ",
    },
  },
  {
    title: "Nói chuyện với bé gái",
    text: "Tìm bé gái ở khu thêu và nghe yêu cầu của cô bé.",
    image: {
      src: cdn("/guides/woven-with-malice/step-05-little-girl.png"),
      alt: "Nói chuyện với bé gái ở khu thêu",
    },
  },
  {
    title: "Nhặt thuốc nhuộm đỏ và xanh",
    text: "Nhặt thuốc nhuộm đỏ và xanh từ các vật chứa trong sân gần đó.",
    image: {
      src: cdn("/guides/woven-with-malice/step-06-red-blue-dye.png"),
      alt: "Nhặt thuốc nhuộm đỏ và xanh để nhuộm",
    },
  },
  {
    title: "Nhặt thuốc nhuộm đen",
    text: "Nhặt thuốc nhuộm đen từ chậu than để đủ bộ.",
    image: {
      src: cdn("/guides/woven-with-malice/step-07-black-dye.png"),
      alt: "Nhặt thuốc nhuộm đen từ chậu than",
    },
  },
  {
    title: "Giao thuốc nhuộm và chờ qua 1 ngày",
    text: "Giao thuốc nhuộm cho bé gái, sau đó tua qua 1 ngày trong game và đặt giờ Sửu (Chou).",
    image: {
      src: cdn("/guides/woven-with-malice/step-08-wait-chou.png"),
      alt: "Tua thời gian sang giờ Sửu (Chou) sau khi giao thuốc nhuộm",
    },
  },
  {
    title: "Nghe lén gần chuông",
    text: "Quay lại chuông và nghe lén cuộc trò chuyện giữa học giả và người phụ nữ.",
    image: {
      src: cdn("/guides/woven-with-malice/step-09-eavesdrop.png"),
      alt: "Nghe lén cuộc trò chuyện ở khu chuông",
    },
  },
  {
    title: "Phát hiện học giả đã chết",
    text: "Kiểm tra chuông lần nữa để thấy học giả đã chết bên trong.",
    image: {
      src: cdn("/guides/woven-with-malice/step-10-scholar-dead.png"),
      alt: "Phát hiện học giả đã chết trong chuông",
    },
  },
  {
    title: "Đọc khăn tay thứ nhất",
    text: "Nhặt chiếc khăn tay trên mặt đất và đọc nội dung manh mối.",
    image: {
      src: cdn("/guides/woven-with-malice/step-11-handkerchief-1.png"),
      alt: "Manh mối khăn tay thứ nhất trên mặt đất",
    },
  },
  {
    title: "Tìm Monk Tranquillus",
    text: "Tìm nhà sư, nhắc về Silkworm Lady và tra hỏi để lấy thêm thông tin.",
    image: {
      src: cdn("/guides/woven-with-malice/step-12-monk.png"),
      alt: "Nói chuyện với Monk Tranquillus",
    },
  },
  {
    title: "So tài với nhà sư",
    text: "Giao đấu với nhà sư để ép ông ta nói thật và đẩy tiến độ nhiệm vụ.",
    image: {
      src: cdn("/guides/woven-with-malice/step-13-spar.png"),
      alt: "So tài với nhà sư để tiếp tục nhiệm vụ",
    },
  },
  {
    title: "Nhận khăn tay thứ hai",
    text: "Nhận chiếc khăn tay thứ hai với manh mối “đền bằng mạng”.",
    image: {
      src: cdn("/guides/woven-with-malice/step-14-handkerchief-2.png"),
      alt: "Nhận manh mối khăn tay thứ hai từ nhà sư",
    },
  },
  {
    title: "Trao đổi lại với bé gái",
    text: "Nói chuyện với bé gái để cập nhật manh mối mới và chuẩn bị bước tiếp theo.",
    image: {
      src: cdn("/guides/woven-with-malice/step-15-talk-girl.png"),
      alt: "Nói chuyện với bé gái về manh mối thứ hai",
    },
  },
  {
    title: "Chọn điểm đặt bẫy",
    text: "Chọn vị trí đặt bẫy theo hướng dẫn của marker nhiệm vụ.",
    image: {
      src: cdn("/guides/woven-with-malice/step-16-trap-spot.png"),
      alt: "Chọn vị trí đặt bẫy theo marker",
    },
  },
  {
    title: "Đốt dây leo khô",
    text: "Dùng mũi tên lửa hoặc kỹ năng hệ Lửa để đốt dây leo ở khu bẫy.",
    image: {
      src: cdn("/guides/woven-with-malice/step-17-burn-vines.png"),
      alt: "Đốt dây leo để chuẩn bị bẫy",
    },
  },
  {
    title: "Cho bé gái ẩn nấp an toàn",
    text: "Đặt bé gái ở vị trí an toàn trước khi kích hoạt tình huống.",
    image: {
      src: cdn("/guides/woven-with-malice/step-18-hide-girl.png"),
      alt: "Cho bé gái ẩn nấp gần khu bẫy",
    },
  },
  {
    title: "Silkworm Lady xuất hiện",
    text: "Đợi Silkworm Lady xuất hiện sau khi nhà sư gọi ra.",
    image: {
      src: cdn("/guides/woven-with-malice/step-19-silkworm-lady-appears.png"),
      alt: "Silkworm Lady xuất hiện tại khu bẫy",
    },
  },
  {
    title: "Bám theo mục tiêu bỏ chạy",
    text: "Bám theo khi mục tiêu bỏ chạy—giữ trong tầm để chuỗi sự kiện không bị ngắt.",
    image: {
      src: cdn("/guides/woven-with-malice/step-20-follow.png"),
      alt: "Bám theo Silkworm Lady đang bỏ chạy",
    },
  },
  {
    title: "Nhà sư bị mắc bẫy của chính mình",
    text: "Quay lại và thấy nhà sư bị mắc vào chính bẫy sau đoạn bám theo.",
    image: {
      src: cdn("/guides/woven-with-malice/step-21-monk-trapped.png"),
      alt: "Nhà sư bị mắc vào bẫy",
    },
  },
  {
    title: "Gặp bé gái ở rừng tre",
    text: "Tới rừng tre và nói chuyện với bé gái để tiếp tục.",
    image: {
      src: cdn("/guides/woven-with-malice/step-22-bamboo-grove.png"),
      alt: "Gặp bé gái ở rừng tre",
    },
  },
  {
    title: "Nói chuyện với chủ lầu thêu",
    text: "Tìm chủ lầu thêu và hoàn thành phần đối thoại của hắn.",
    image: {
      src: cdn("/guides/woven-with-malice/step-23-embroidery-owner.png"),
      alt: "Tra hỏi chủ lầu thêu",
    },
  },
  {
    title: "Kiểm tra xe hàng",
    text: "Kiểm tra xe hàng của chủ lầu thêu để tìm manh mối trước khi đi tiếp.",
    image: {
      src: cdn("/guides/woven-with-malice/step-24-cart.png"),
      alt: "Kiểm tra xe hàng của chủ lầu thêu",
    },
  },
  {
    title: "Dọn đống đổ ở phế tích",
    text: "Ở phế tích gần đó, dùng Q + Nhảy để dọn đống đổ và đi vào trong.",
    image: {
      src: cdn("/guides/woven-with-malice/step-25-ruins.jpg"),
      alt: "Dọn đống đổ để vào phế tích",
    },
  },
  {
    title: "Kiểm tra tường đá",
    text: "Trong phế tích, kiểm tra tường đá để lấy thêm bằng chứng.",
    image: {
      src: cdn("/guides/woven-with-malice/step-26-stone-wall.png"),
      alt: "Kiểm tra tường đá trong phế tích",
    },
  },
  {
    title: "Quét bằng Wind Sense",
    text: "Kích hoạt Wind Sense trong rừng tre và đi chậm cho tới khi xuất hiện điểm bất thường.",
    image: {
      src: cdn("/guides/woven-with-malice/step-27-wind-sense.png"),
      alt: "Dùng Wind Sense trong rừng tre",
    },
  },
  {
    title: "Nghe lén hai người đàn ông",
    text: "Lần theo điểm bất thường để nghe lén hai người đang bàn về âm mưu.",
    image: {
      src: cdn("/guides/woven-with-malice/step-28-eavesdrop.png"),
      alt: "Nghe lén hai người ở rừng tre",
    },
  },
  {
    title: "Phục kích chủ lầu thêu",
    text: "Chặn chủ lầu thêu để cảnh báo bé gái, nhưng hắn dùng khói mê.",
    image: {
      src: cdn("/guides/woven-with-malice/step-29-ambush.png"),
      alt: "Phục kích chủ lầu thêu",
    },
  },
  {
    title: "Cutscene được cứu",
    text: "Bạn bị trúng khói; hai võ giả xuất hiện và cứu bạn trong cutscene.",
    image: {
      src: cdn("/guides/woven-with-malice/step-30-rescue.png"),
      alt: "Cutscene được cứu",
    },
  },
  {
    title: "Nói chuyện lần cuối với bé gái",
    text: "Nói chuyện với bé gái sau khi tỉnh lại để hoàn tất Sợi Định Mệnh (Woven with Malice).",
    image: {
      src: cdn("/guides/woven-with-malice/step-31-finish.png"),
      alt: "Nói chuyện với bé gái để hoàn thành nhiệm vụ",
    },
  },
];

const stuckFixes = [
  "Nhiệm vụ không bắt đầu: đặt giờ Tý (Zi), nói chuyện với học giả trong chuông; nếu vẫn không kích hoạt thì relog hoặc đổi kênh.",
  "Dây leo không cháy: chỉ mũi tên lửa hoặc kỹ năng hệ Lửa mới đốt được; các loại sát thương khác không làm bẫy tiến triển.",
  "Đoạn bám theo bị đứt: chạy dưới đất và giữ trong bán kính marker; tránh lượn quá xa trong đoạn đuổi để không bị ngắt.",
  "Wind Sense không hiện gì: đi chậm trong rừng tre và dùng lại Wind Sense cho tới khi điểm bất thường hiện trên minimap.",
  "Đối thoại bị lặp: thử nói lại sau khi so tài với nhà sư; nếu vẫn kẹt thì relog và làm lại bước ngay trước đó.",
];

const faq = [
  {
    q: "Cần giờ nào cho nhiệm vụ Sợi Định Mệnh (Woven with Malice) trong Where Winds Meet?",
    a: "Giờ Tý (Zi) để bắt đầu với học giả trong chuông, và giờ Sửu (Chou) để nhận Celestial Silk Garment. Nếu không kích hoạt, hãy đặt lại giờ, relog hoặc đổi kênh để đẩy tiến độ.",
  },
  {
    q: "Làm sao đốt dây leo khô ở chỗ đặt bẫy nhiệm vụ Sợi Định Mệnh?",
    a: "Dùng mũi tên lửa hoặc bất kỳ kỹ năng hệ Lửa. Các nguồn sát thương khác sẽ không đốt được dây leo nên nhiệm vụ sẽ không tiến triển.",
  },
  {
    q: "Silkworm Lady biến mất hoặc đoạn bám theo bị đứt — phải làm gì?",
    a: "Bám sát tuyến đường, tránh bay/lượn quá xa, và thử lại từ bước ngay trước đoạn bám theo. Đổi kênh cũng có thể giúp.",
  },
  {
    q: "Wind Sense không đánh dấu gì trong nhiệm vụ Sợi Định Mệnh.",
    a: "Dùng lại Wind Sense khi bạn di chuyển chậm trong rừng tre cho tới khi điểm bất thường hiện trên minimap, rồi lại gần để kích hoạt nghe lén và tiếp tục.",
  },
  {
    q: "Có bắt buộc phải so tài với nhà sư trong nhiệm vụ Sợi Định Mệnh không?",
    a: "Có. Bạn phải so tài để buộc ông ta đưa ra manh mối khăn tay thứ hai và nhiệm vụ mới tiến triển.",
  },
  {
    q: "Nhiệm vụ Sợi Định Mệnh mất bao lâu?",
    a: "Khoảng 15–20 phút nếu bạn đặt đúng giờ Tý/Sửu; nếu phải làm lại các bước sẽ lâu hơn, nên bám checklist ở trên để không lạc nhịp.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: `${baseUrl}/vn`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hướng dẫn",
      item: `${baseUrl}/vn/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sợi Định Mệnh (Woven with Malice)",
      item: `${baseUrl}/vn/guides/woven-with-malice`,
    },
  ],
};

export default function WovenWithMalicePage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-emerald-900/30">
        <div className="absolute inset-0">
          <Image
            src={cdn("/guides/woven-with-malice/header-02.png")}
            alt="Key art nhiệm vụ Sợi Định Mệnh"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Encounter / Lost Chapter
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Walkthrough nhiệm vụ Sợi Định Mệnh (Woven with Malice)
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Hướng dẫn 31 bước nhiệm vụ Sợi Định Mệnh (Woven with Malice) trong Where Winds Meet: kích hoạt giờ Tý (Zi),
              thu thuốc nhuộm, đối chất/so tài với nhà sư, đặt bẫy, bám theo trong rừng tre và áp dụng các cách xử lý nếu
              nhiệm vụ bị bug. Nếu bạn đang tìm “where winds meet woven with malice quest” hoặc “woven with malice where
              winds meet”, trang này gom mọi thứ lại kèm ảnh có thể phóng to để bạn đối chiếu mà không cần đoán mò.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/40">
                Bắt đầu giờ Tý
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-sky-400/30">
                Bẫy cần lửa
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">
                Wind Sense ở rừng tre
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-inner shadow-slate-900/60">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Thông tin nhanh</h2>
            <div className="mt-4 grid gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                >
                  <span className="text-lg">{fact.icon}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</div>
                    <div className="text-sm text-slate-100">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Guide nhiệm vụ này bao gồm gì?
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <p className="text-base leading-relaxed text-slate-200">
            Nhiệm vụ Sợi Định Mệnh (Woven with Malice) kết hợp mục tiêu theo giờ, một trận so tài, một đoạn bám theo và
            cảnh cứu援; guide này xâu chuỗi mọi bước để bạn hoàn thành mà không phải quay lại các nút hoặc chờ reset.
          </p>
          <p className="text-base leading-relaxed text-slate-200">
            Nếu nhiệm vụ bị bug—thường do chưa đặt giờ Tý/Sửu, bỏ qua bước đốt dây leo bằng lửa hoặc bị đứt đoạn bám theo ở
            rừng tre—hãy dùng phần fix lỗi bên dưới và đối chiếu ảnh để chắc chắn từng mốc đã đúng trước khi đi tiếp.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-emerald-200">Cổng giờ</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Giờ Tý (Zi) để bắt đầu, giờ Sửu (Chou) để nhận đồ—thiếu một trong hai là rất dễ kẹt.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-emerald-200">Đặt bẫy</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Bắt buộc dùng sát thương hệ Lửa để đốt dây leo, bẫy mới tiến triển và Silkworm Lady mới xuất hiện.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-emerald-200">Bám theo &amp; cứu援</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Bám sát trong đoạn đuổi ở rừng tre và để cutscene khói mê chạy hết; đó là phần kết nhiệm vụ.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Lộ trình nhanh (TL;DR)
          </h2>
          <Link
            href="/vn/guides"
            className="text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Về trang Hướng dẫn
          </Link>
        </div>
        <ol className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {fastRoute.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-200 ring-1 ring-emerald-400/40">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-400">
          Guide này tồn tại vì khi bị kẹt, người chơi hay search “where winds meet woven with malice quest” và “woven with
          malice where winds meet”. Bạn có thể bookmark phần TL;DR để chạy lại nhanh nếu game crash hoặc bị đứt tiến độ.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Walkthrough đầy đủ kèm ảnh
        </h2>
        <WalkthroughGallery steps={walkthrough} />
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Bị kẹt? Thử các cách sau</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {stuckFixes.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Câu hỏi thường gặp (FAQ)</h2>
        <div className="space-y-3">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60"
            >
              <div className="text-sm font-semibold text-emerald-200">Q. {item.q}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-200">A. {item.a}</div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

