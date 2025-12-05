import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "Hướng dẫn Tà Khúc (An Unholy Prophecy) Where Winds Meet",
  description:
    "Hướng dẫn đầy đủ Tà Khúc (Jianghu Legacy 07): mở khóa tại Ngàn Lá Chùa, leo mái nhà, bắn ngọn lửa vào lư hương, giải câu đố Meridian Touch, vượt bẫy gai, đấu Thế Trấn. 13 bước chi tiết.",
  alternates: {
    canonical: `${baseUrl}/vn/guides/unholy-prophecy`,
  },
  openGraph: {
    title: "Tà Khúc – hướng dẫn Where Winds Meet",
    description:
      "13 bước hướng dẫn Tà Khúc Jianghu Legacy 07: mũi tên lửa, Meridian Touch, bẫy gai, chiến đấu và đánh Thế Trấn.",
    url: `${baseUrl}/vn/guides/unholy-prophecy`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/unholy-prophecy/header.png"),
        width: 1200,
        height: 675,
        alt: "Cảnh Tà Khúc từ Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tà Khúc – hướng dẫn Where Winds Meet",
    description:
      "Hướng dẫn đầy đủ nhiệm vụ Tà Khúc Jianghu Legacy 07 với tất cả các bước và phần thưởng.",
    images: [cdn("/guides/unholy-prophecy/header.png")],
  },
};

const quickFacts = [
  { label: "Khu vực", value: "Kaifeng – Ngàn Lá Chùa (Jade Forrest Court)", icon: "🧭" },
  { label: "Loại nhiệm vụ", value: "Jianghu Legacy 07", icon: "📜" },
  { label: "Cách mở", value: "Nói chuyện với Họa Sĩ Bí Ẩn tại Chùa Côn Đôn", icon: "🗣️" },
  { label: "Trục chính", value: "Leo mái nhà → Bắn lửa → Câu đố → Chiến đấu", icon: "⚔️" },
  { label: "Kỹ năng quan trọng", value: "Mũi tên lửa bắt buộc để bắn lư hương", icon: "🔥" },
  { label: "Thời gian hoàn thành", value: "Khoảng 15-20 phút", icon: "⏱️" },
];

const fastRoute = [
  "Nói chuyện với Họa Sĩ Bí Ẩn tại Chùa Côn Đôn trong Ngàn Lá Chùa, khu vực Kaifeng để mở khóa nhiệm vụ.",
  "Leo lên mái nhà theo chỉ dẫn của nhiệm vụ.",
  "Dùng mũi tên lửa bắn vào ba lư hương trên mái nhà.",
  "Biểu diễn biểu cảm 'Tà Khúc' từ tab Puzzle (nhấn F2).",
  "Điều hướng qua các hành lang trong khi tránh hoặc chống lại những kẻ bảo vệ.",
  "Sử dụng Meridian Touch để mở khóa những cánh cửa chặn đường bạn.",
  "Vượt qua hành lang đầy bẫy gai bằng cách thực hiện các pha né tránh chính xác.",
  "Thu lục vũ khí từ cánh trái.",
  "Thu lục vũ khí từ cánh phải.",
  "Đánh bại Thế Trấn và những tay sai của hắn trong chiến đấu.",
  "Hoàn thành đối thoại sau chiến đấu.",
  "Nhận thưởng nhiệm vụ bao gồm Bộ Tranh 'Danh Vọng và Tài Lộc'.",
  "Hoàn thành nhiệm vụ!",
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
    title: "Mở khóa nhiệm vụ",
    text: "Du lịch đến Chùa Côn Đôn trong Ngàn Lá Chùa (Jade Forrest Court), khu vực Kaifeng. Nói chuyện với Họa Sĩ Bí Ẩn để mở khóa và kích hoạt nhiệm vụ Tà Khúc.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-01-game8.png"),
      alt: "Nói chuyện với Họa Sĩ Bí Ẩn để mở khóa nhiệm vụ",
    },
  },
  {
    title: "Bắt đầu hành trình trên mái nhà",
    text: "Rời khỏi chùa và hướng tới các mái nhà theo chỉ dẫn của điểm đánh dấu nhiệm vụ. Bạn sẽ cần phải leo lên và vượt qua các tòa nhà ở Kaifeng.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-02-game8.png"),
      alt: "Leo mái nhà ở Kaifeng",
    },
  },
  {
    title: "Tìm lư hương đầu tiên",
    text: "Điều hướng đến vị trí lư hương đầu tiên trên mái nhà. Trang bị mũi tên lửa và chuẩn bị bắn.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-03-game8.png"),
      alt: "Lư hương đầu tiên trên mái nhà",
    },
  },
  {
    title: "Bắn lư hương đầu tiên",
    text: "Sử dụng mũi tên lửa để bắn lư hương đầu tiên. Điều này sẽ thắp sáng nó và kích hoạt hiệu ứng hình ảnh.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-04-game8.png"),
      alt: "Bắn lư hương đầu tiên bằng mũi tên lửa",
    },
  },
  {
    title: "Tìm và bắn lư hương thứ hai",
    text: "Tiếp tục theo đường mái nhà để tìm lư hương thứ hai. Lặp lại cuộc tấn công bằng mũi tên lửa.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-05-game8.png"),
      alt: "Vị trí lư hương thứ hai",
    },
  },
  {
    title: "Tìm và bắn lư hương thứ ba",
    text: "Điều hướng đến lư hương thứ ba và cuối cùng. Đảm bảo bạn có đủ mũi tên lửa trước khi bắn.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-06-game8.png"),
      alt: "Lư hương thứ ba sẵn sàng được thắp sáng",
    },
  },
  {
    title: "Thực hiện biểu cảm",
    text: "Sau khi thắp sáng ba lư hương, hãy mở tab Puzzle (F2 theo mặc định) và chọn biểu cảm 'Tà Khúc' để biểu diễn nó.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-07-game8.png"),
      alt: "Thực hiện biểu cảm Tà Khúc",
    },
  },
  {
    title: "Điều hướng qua hành lang có bảo vệ",
    text: "Bước vào nội thất chùa và di chuyển qua các hành lang. Bạn có thể gặp những kẻ bảo vệ - hãy tránh họ hoặc chiến đấu nếu cần thiết theo phong cách chơi của bạn.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-08-game8.png"),
      alt: "Di chuyển qua hành lang chùa",
    },
  },
  {
    title: "Mở khóa cửa bằng Meridian Touch",
    text: "Tiếp cận những cánh cửa bị khóa và sử dụng kỹ năng bí pháp Meridian Touch để mở khóa chúng. Kỹ năng này rất cần thiết để tiến bộ qua chùa.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-09-game8.png"),
      alt: "Sử dụng Meridian Touch để mở khóa cửa",
    },
  },
  {
    title: "Vượt qua hành lang bẫy gai",
    text: "Bước vào hành lang đầy bẫy gai. Thực hiện chuyển động của bạn cẩn thận - hãy theo dõi các mô hình và né tránh qua các khoảng trống. Hãy kiên nhẫn và đừng vội vàng.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-10-game8.png"),
      alt: "Vượt qua hành lang bẫy gai",
    },
  },
  {
    title: "Thu lục vũ khí cánh trái",
    text: "Thoát khỏi hành lang bẫy gai và đi tới cánh trái. Thu lục vũ khí được lưu trữ ở đó vì nó sẽ hữu ích cho cuộc chiến sắp tới với bộ tê bao.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-11-game8.png"),
      alt: "Thu lục vũ khí từ cánh trái",
    },
  },
  {
    title: "Thu lục vũ khí cánh phải",
    text: "Bây giờ điều hướng đến cánh phải và thu lục vũ khí còn lại. Có đầy đủ thiết bị sẽ cải thiện hiệu quả chiến đấu của bạn.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-12-game8.png"),
      alt: "Thu lục vũ khí từ cánh phải",
    },
  },
  {
    title: "Đánh bại Thế Trấn và tay sai",
    text: "Tiến tới phòng chính nơi bạn sẽ đối mặt với Thế Trấn và những tay sai của hắn. Sử dụng vũ khí bạn đã thu lục và kỹ năng chiến đấu của bạn để đánh bại họ. Hãy tập trung vào kẻ thù cầm cờ trước tiên nếu có nhiều đối thủ.",
    image: {
      src: cdn("/guides/unholy-prophecy/step-13-game8.png"),
      alt: "Chiến đấu với Thế Trấn và tay sai",
    },
  },
];

const stuckFixes = [
  "Mũi tên lửa không thắp sáng lư hương: Đảm bảo bạn có mũi tên lửa được trang bị. Mũi tên thường không hoạt động. Kiểm tra túi đồ của bạn và trang bị cụ thể mũi tên lửa.",
  "Không thể tìm thấy Họa Sĩ Bí Ẩn: Họa Sĩ Bí Ẩn xuất hiện tại Chùa Côn Đôn trong Ngàn Lá Chùa, Kaifeng. Thử đổi kênh hoặc tiến thời gian nếu họ không xuất hiện.",
  "Hành lang bẫy gai quá khó: Hãy dành thời gian của bạn và theo dõi các mô hình gai. Bạn không cần phải vội vàng - nhiều người chơi chết do di chuyển quá nhanh. Chờ khoảng trống và di chuyển từng bước một.",
  "Những cánh cửa bị khóa sẽ không mở: Đảm bảo bạn đã học được kỹ năng bí pháp Meridian Touch và trang bị nó. Bạn phải sử dụng kỹ năng cụ thể này để mở khóa các cánh cửa đặc biệt.",
  "Kẻ bảo vệ quá mạnh: Bạn có thể chạy qua hầu hết những kẻ bảo vệ bằng cách tập trung vào các điểm đánh dấu nhiệm vụ. Chiến đấu không bắt buộc để tiến bộ trừ khi cần thiết.",
  "Quên thực hiện biểu cảm: Quay lại khu vực lư hương và thực hiện biểu cảm 'Tà Khúc' từ tab Puzzle của bạn nếu tiến trình bị kẹp.",
];

const faq = [
  {
    q: "Tôi mở khóa nhiệm vụ Tà Khúc ở đâu trong Where Winds Meet?",
    a: "Du lịch đến Chùa Côn Đôn trong Ngàn Lá Chùa (Jade Forrest Court), khu vực Kaifeng và nói chuyện với Họa Sĩ Bí Ẩn. Điều này sẽ mở khóa nhiệm vụ Tà Khúc Jianghu Legacy 07.",
  },
  {
    q: "Những yêu cầu nào cho nhiệm vụ Tà Khúc?",
    a: "Bạn cần mũi tên lửa để bắn vào lư hương và kỹ năng bí pháp Meridian Touch để mở khóa cửa. Có các kỹ năng chiến đấu tốt để đánh bại BOSS cuối cùng cũng được khuyên dùng.",
  },
  {
    q: "Làm thế nào để có được mũi tên lửa cho nhiệm vụ này?",
    a: "Mũi tên lửa có thể chế tạo hoặc mua ở hầu hết các thị trấn. Hãy đảm bảo bạn có ít nhất 3 mũi tên lửa được trang bị trước khi bắt đầu phần mái nhà của nhiệm vụ.",
  },
  {
    q: "Biểu cảm 'Tà Khúc' là gì và tôi tìm nó ở đâu?",
    a: "Biểu cảm được tìm thấy trong tab Puzzle của bạn (nhấn F2). Bạn phải thực hiện biểu cảm này sau khi thắp sáng ba lư hương trên mái nhà để tiến bộ nhiệm vụ.",
  },
  {
    q: "Tôi có thể bỏ qua hành lang bẫy gai không?",
    a: "Không, hành lang bẫy gai là bắt buộc để tiến bộ. Tuy nhiên, bạn có thể dành thời gian điều hướng nó - không có giới hạn thời gian, chỉ cần kiên nhẫn và né tránh cẩn thận.",
  },
  {
    q: "Meridian Touch có bắt buộc phải hoàn thành nhiệm vụ không?",
    a: "Có, Meridian Touch là bắt buộc để mở khóa những cánh cửa đặc biệt trong chùa. Đảm bảo kỹ năng này được học và trang bị trước khi cố gắng làm nhiệm vụ.",
  },
  {
    q: "Tôi nhận được những phần thưởng gì khi hoàn thành Tà Khúc?",
    a: "Phần thưởng bao gồm Bộ Tranh 'Danh Vọng và Tài Lộc', Rương Tùy Chỉnh x5, Chuyện Thuốc, Sắt Đen Lv. 3 x4, Echo Jade x30, Khám Phá Kaifeng x50, Điểm Giác Ngộ x100, 20.000 EXP Nhân Vật và 20.000 Xu.",
  },
  {
    q: "Mất bao lâu để hoàn thành nhiệm vụ Tà Khúc?",
    a: "Hầu hết người chơi hoàn thành nó trong 15-20 phút khi họ hiểu các cơ chế. Người chơi lần đầu có thể mất 20-30 phút do phần bẫy gai.",
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
      name: "Tà Khúc",
      item: `${baseUrl}/vn/guides/unholy-prophecy`,
    },
  ],
};

export default function UnholyProphecyPage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-purple-900/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-200">
              Jianghu Legacy 07
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Hướng dẫn nhiệm vụ Tà Khúc
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Hướng dẫn đầy đủ nhiệm vụ Tà Khúc Jianghu Legacy 07 cho Where Winds Meet: mở khóa với Họa Sĩ Bí Ẩn,
              thành thạo các phần bắn lửa trên mái nhà, giải câu đố với Meridian Touch, vượt hành lang bẫy gai,
              và đánh bại Thế Trấn. Bao gồm tất cả 13 bước với hướng dẫn chi tiết để hoàn thành nhiệm vụ mà không bị kẹp.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-purple-400/40">
                Mũi tên lửa cần thiết
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-cyan-400/30">
                Meridian Touch bắt buộc
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/30">
                13 bước nhiệm vụ
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-inner shadow-slate-900/60">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-200">Thông tin nhanh</h2>
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
          Hướng dẫn nhiệm vụ Tà Khúc này bao gồm nội dung gì
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <p className="text-base leading-relaxed text-slate-200">
            Tà Khúc là một dòng nhiệm vụ Jianghu Legacy kiểm tra kỹ năng chiến đấu, khả năng leo trèo và kiến thức giải câu đố của bạn.
            Hướng dẫn này chia nhỏ tất cả 13 bước để bạn có thể hoàn thành nhiệm vụ một cách hiệu quả mà không lãng phí thời gian
            vào thử và sai hoặc bị mắc kẹt trên hành lang bẫy gai khét tiếng.
          </p>
          <p className="text-base leading-relaxed text-slate-200">
            Nếu bạn đang tìm kiếm "Tà Khúc where winds meet" hoặc bị kẹp tại các bẫy gai, hướng dẫn này sẽ giúp bạn.
            Chúng tôi cung cấp hướng dẫn chi tiết cho từng phần bao gồm cơ chế bắn lửa trên mái nhà, mở khóa cửa Meridian Touch,
            và cuộc chiến BOSS Thế Trấn cuối cùng.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Cơ chế bắn lửa</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Bạn phải sử dụng mũi tên lửa để thắp sáng ba lư hương trên phần mái nhà. Mũi tên thường sẽ không hoạt động.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Giải câu đố</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Sử dụng Meridian Touch để mở khóa những cánh cửa bị khóa trong chùa. Yêu cầu biểu cảm cũng kiểm tra kiến thức của bạn về tab Puzzle.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-sm font-semibold text-purple-200">Chiến đấu & Bẫy</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-200">
              Vượt qua bẫy gai với thời gian chính xác, thu lục vũ khí, và đánh bại Thế Trấn trong cuộc gặp BOSS cuối cùng.
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
            className="text-sm text-purple-300 underline underline-offset-4 hover:text-purple-200"
          >
            Quay lại Hướng dẫn
          </Link>
        </div>
        <ol className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {fastRoute.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-200 ring-1 ring-purple-400/40">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-400">
          Hướng dẫn này tồn tại để giúp những người chơi đang tìm kiếm "Tà Khúc where winds meet" hoặc bị kẹp ở các phần cụ thể.
          Đánh dấu TL;DR này nếu bạn cần tham khảo các bước cụ thể.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Hướng dẫn đầy đủ với chi tiết
        </h2>
        <div className="grid gap-6">
          {walkthrough.map((step, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200 ring-1 ring-purple-400/40">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{step.text}</p>
                </div>
              </div>
              {step.image && (
                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-400 mb-2">{step.image.alt}</p>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-950">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Bị kẹp? Hãy thử những cách xử lý này</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {stuckFixes.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Câu hỏi thường gặp</h2>
        <div className="space-y-3">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60"
            >
              <div className="text-sm font-semibold text-purple-200">C. {item.q}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-200">Đ. {item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Hướng dẫn video
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-slate-200">
            Để xem hướng dẫn trực quan về nhiệm vụ Tà Khúc, hãy xem video hướng dẫn toàn diện này:
          </p>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3yLD1u_M5RY"
              title="Hướng dẫn Video Nhiệm vụ Tà Khúc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          <p className="text-sm text-slate-400">
            Video này cung cấp hướng dẫn trực quan cho thấy các đường đi chính xác, chiến lược chiến đấu và thời gian cho mỗi phần của nhiệm vụ.
          </p>
        </div>
      </section>
    </article>
  );
}
