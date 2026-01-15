import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBaseUrl = (process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org").replace(/\/+$/, "");
const heroImagePath = "/guides/mistveil-city/allthings/Screenshot-2026-01-10-100403-1.png";
const heroImageForMeta = `${cdnBaseUrl}${heroImagePath}`;

export const metadata: Metadata = {
  title: "Mistveil City: Ngày Mở & Quest Bị Khóa | Where Winds Meet",
  description:
    "Vì sao Mistveil City trong Where Winds Meet bị khóa, 2 mốc ngày mở (Jan 22 vs Jan 26, 2026) và cách chuẩn bị Ephemeral Blight ở Mistveil Forest.",
  alternates: buildHreflangAlternates("/guides/mistveil-city", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Mistveil City: Ngày Mở & Quest Bị Khóa | Where Winds Meet",
    description:
      "Mistveil City có thể đang bị khóa theo lịch với nhiều người chơi. Xem ý nghĩa của gate, ngày có thể mở và cách dọn Ephemeral Blight ở Mistveil Forest.",
    url: `${baseUrl}/vn/guides/mistveil-city`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImageForMeta,
        width: 1206,
        height: 678,
        alt: "Ảnh sương mù vùng Mistveil trong Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mistveil City: Ngày Mở & Quest Bị Khóa | Where Winds Meet",
    description:
      "Vì sao Mistveil City bị khóa, hai mốc ngày hay được nhắc (Jan 22 vs Jan 26, 2026) và việc nên làm trong Mistveil Forest khi chờ mở.",
    images: [
      {
        url: heroImageForMeta,
        alt: "Ảnh sương mù vùng Mistveil trong Where Winds Meet",
      },
    ],
  },
};

const lastUpdated = "15/01/2026";

const tlDr = [
  "Mistveil City hiện bị chặn với nhiều người chơi: game hiện thông báo kiểu “not yet open / come back later” và đẩy bạn ra ngoài sau vài giây.",
  "Nhiều báo cáo cho rằng đây là khóa theo lịch (không phải yêu cầu mở khóa ẩn). Có 2 ngày thường được nhắc: Jan 22, 2026 và Jan 26, 2026 — hãy tin ngày hiển thị trong game của bạn.",
  "Dọn Ephemeral Blight và thu Mistveil Forest Cures sẽ mở khám phá Mistveil Forest, nhưng có thể không gỡ khóa Mistveil City cho tới đúng ngày mở.",
  "Tận dụng thời gian: hoàn thành Ephemeral Blight, lấy đủ 3 cure, mở các điểm dịch chuyển/boss ở Mistveil Forest và sẵn sàng vào Mistveil City ngay khi mở.",
];

const faq = [
  {
    q: "Vì sao Mistveil City bị khóa trong Where Winds Meet?",
    a: "Nhiều người chơi báo có ranh giới cứng gần Mistveil City, hiện thông báo “This area is not yet open. Please come back later” (kèm đếm ngược) rồi dịch chuyển bạn ra ngoài. Cách hoạt động này giống khu vực mở theo lịch hơn là câu đố hoặc thiếu vật phẩm nhiệm vụ.",
  },
  {
    q: "Có cần gia nhập Nine Mortal Ways để vào Mistveil City không?",
    a: "Theo thảo luận cộng đồng thì không. Khóa xuất hiện dù bạn chọn môn phái (sect) nào hay tiến độ ra sao, nên nhiều người nghĩ Mistveil City mở theo lịch chứ không phải yêu cầu phe/phái.",
  },
  {
    q: "Mistveil City mở khi nào?",
    a: "Tính đến 15/01/2026, cộng đồng nhắc 2 ngày: 22/01/2026 và 26/01/2026. Cách an toàn nhất là dựa theo ngày hiển thị trong game của bạn và theo dõi ghi chú bản vá/thông báo chính thức.",
  },
  {
    q: "Dọn Ephemeral Blight có mở Mistveil City không?",
    a: "Ephemeral Blight giúp dọn sương Dawn-to-Dusk ở Mistveil Forest vĩnh viễn và mở thêm khám phá. Tuy nhiên, nhiều báo cáo cho thấy Mistveil City vẫn có thể bị khóa đến đúng ngày mở.",
  },
  {
    q: "Mistveil Forest Cures là gì (và vì sao quan trọng)?",
    a: "Đó là 3 tài liệu quest giúp Zhai Xu pha thuốc giải cho Mistveil Forest: Wishing Cove (từ nhà của Zhai Xu), Hollow Abode và Aureate Pavilion. Nộp đủ 3 cure là yêu cầu cốt lõi để dọn sương vùng này trong Ephemeral Blight.",
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
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
    { "@type": "ListItem", position: 3, name: "Mistveil City", item: `${baseUrl}/vn/guides/mistveil-city` },
  ],
};

const allThingsImages = {
  mistveilCover: {
    src: "/guides/mistveil-city/allthings/image-1048-1.webp",
    caption: "Nguồn ảnh: NetEase",
    alt: "Khung cảnh vùng Mistveil",
  },
  talkToZhaiXu: {
    src: "/guides/mistveil-city/allthings/image-1049-1-1.webp",
    caption:
      "Nói chuyện với Zhai Xu để hỏi về mặt dây ngọc và sương độc | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Nói chuyện với Zhai Xu về mặt dây và sương",
  },
  meridianTouchChime: {
    src: "/guides/mistveil-city/allthings/image-1050.webp",
    caption:
      "Dùng Meridian Touch lên chuông gió treo bên ngoài | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Dùng Meridian Touch lên chuông gió",
  },
  readThousandWish: {
    src: "/guides/mistveil-city/allthings/image-1051-1.webp",
    caption:
      "Mở túi (B), chuyển sang tab đồ nhiệm vụ và đọc Thousand-Wish Amendment | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Đọc Thousand-Wish Amendment trong đồ nhiệm vụ",
  },
  postStation: {
    src: "/guides/mistveil-city/allthings/image-1052-1.webp",
    caption:
      "Di chuyển tới Soulshade Umbrella - Post Station | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Vị trí Soulshade Umbrella Post Station",
  },
  stealthGuard: {
    src: "/guides/mistveil-city/allthings/image-1053-1.webp",
    caption: "Hạ lính canh một cách im lặng | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Hạ gục lính canh lén lút",
  },
  aureateOutpost: {
    src: "/guides/mistveil-city/allthings/image-1054-1.webp",
    caption: "Di chuyển tới tiền đồn Aureate Pavilion | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Vị trí tiền đồn Aureate Pavilion",
  },
  aureateCure: {
    src: "/guides/mistveil-city/allthings/image-1055-1.webp",
    caption:
      "Lấy cure Mistveil Forest ở Aureate Pavilion trong Central Hut | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Tìm cure ở Aureate Pavilion trong căn chòi trung tâm",
  },
  turnInCures: {
    src: "/guides/mistveil-city/allthings/image-1056-1.webp",
    caption: "Nói chuyện với Zhai Xu và nộp các vật phẩm | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Nộp vật phẩm cho Zhai Xu",
  },
  receiveMedicine: {
    src: "/guides/mistveil-city/allthings/image-1057-1.webp",
    caption: "Nói chuyện với Zhai Xu để nhận thuốc gần khu rừng | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Nhận thuốc từ Zhai Xu gần khu rừng",
  },
  forestGuards: {
    src: "/guides/mistveil-city/allthings/image-1058-1.webp",
    caption: "Hạ các lính gác Aureate Pavilion trong rừng | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Đánh lính gác trong Mistveil Forest",
  },
  burnBloomsPendant: {
    src: "/guides/mistveil-city/allthings/image-1059-1.webp",
    caption:
      "Dùng mũi tên lửa đốt các bông hoa trước khi nhặt mặt dây ngọc | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Đốt hoa độc bằng mũi tên lửa",
  },
  pathUnderground: {
    src: "/guides/mistveil-city/allthings/image-1060-1.webp",
    caption: "Đi theo lối xuống tầng dưới lòng đất | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Lối dẫn xuống dưới lòng đất",
  },
  deductionInterface: {
    src: "/guides/mistveil-city/allthings/image-1061-1.webp",
    caption:
      "Mở giao diện deduction và bắt đầu ghép các manh mối | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Giao diện deduction ghép manh mối",
  },
  followPuppet: {
    src: "/guides/mistveil-city/allthings/image-1062-1.webp",
    caption:
      "Đi theo Sleeping Puppet qua hệ thống hang động | Nguồn ảnh: NetEase (qua YouTube/@100% Guides)",
    alt: "Đi theo Sleeping Puppet trong hang",
  },
} as const;

type WalkthroughImage = (typeof allThingsImages)[keyof typeof allThingsImages];

type WalkthroughStep = {
  title: string;
  detail: string;
  images?: WalkthroughImage[];
};

type WalkthroughSection = {
  title: string;
  steps: WalkthroughStep[];
};

const walkthroughSections: WalkthroughSection[] = [
  {
    title: "Bắt đầu Ephemeral Blight ở Mistveil Forest",
    steps: [
      {
        title: "Đi vào sương và được cứu",
        detail:
          "Đi vào Mistveil Forest (phía đông Kaifeng City) cho tới khi sương Dawn-to-Dusk làm bạn kiệt sức. Một cutscene sẽ kích hoạt và Zhai Xu cứu bạn về Wishing Cove.",
      },
      {
        title: "Tỉnh dậy ở Wishing Cove và nói chuyện với Zhai Xu",
        detail:
          "Nhặt mặt dây ngọc cạnh giường, rồi nói chuyện với Zhai Xu về mặt dây và sương độc để bắt đầu chuỗi thu cure.",
        images: [allThingsImages.talkToZhaiXu],
      },
      {
        title: "Dùng Wind Sense, rồi đánh lạc hướng bằng Meridian Touch",
        detail:
          "Trong nhà, dùng Wind Sense để thấy 2 quyển sách trên bàn — nhưng Zhai Xu sẽ cảnh báo bạn đừng xen vào. Đứng cạnh cửa sổ phía trên chiếc bàn và dùng Meridian Touch lên chuông gió để dụ ông ấy ra ngoài.",
        images: [allThingsImages.meridianTouchChime],
      },
      {
        title: "Đọc sách và mở mục tiêu 3 cure",
        detail:
          "Khi Zhai Xu ra ngoài, đọc cả hai quyển sách (cure ở Wishing Cove + Thousand-Wish Amendment). Sau đó mở Túi → Đồ nhiệm vụ và đọc Amendment: nó liệt kê 3 Mistveil Forest Cures bạn cần (Wishing Cove, Hollow Abode, Aureate Pavilion).",
        images: [allThingsImages.readThousandWish],
      },
    ],
  },
  {
    title: "Tìm Mistveil Forest cure ở Hollow Abode",
    steps: [
      {
        title: "Tới Soulshade Umbrella – Post Station (hầm ngục Skill Theft)",
        detail:
          "Di chuyển về phía tây nam Mistveil Forest tới Soulshade Umbrella – Post Station. Mục tiêu của bạn chỉ là tài liệu cure — không cần hoàn thành toàn bộ hầm ngục.",
        images: [allThingsImages.postStation],
      },
      {
        title: "Đường lén: dây leo → cửa sổ → cầu thang",
        detail:
          "Dùng Wind Sense (V) để quan sát tầm nhìn, leo dây lên tầng 2, vào qua cửa sổ và tìm cầu thang đi xuống.",
      },
      {
        title: "Dùng Touch of Death với lính canh, rồi lấy cure",
        detail:
          "Đợi khi lính canh quay lưng, hạ gục lén bằng Touch of Death, sau đó tìm phòng bên có nến xanh và lấy Hollow Abode cure trên bàn.",
        images: [allThingsImages.stealthGuard],
      },
    ],
  },
  {
    title: "Tìm Mistveil Forest cure ở Aureate Pavilion",
    steps: [
      {
        title: "Tới tiền đồn Aureate Pavilion (phía bắc vùng sương)",
        detail:
          "Đi vòng theo rìa Mistveil Forest tới tiền đồn Aureate Pavilion. Nếu bạn đã mở điểm dịch chuyển gần đó, hãy dùng để rút ngắn đường.",
        images: [allThingsImages.aureateOutpost],
      },
      {
        title: "Lấy cure trong căn chòi trung tâm (gần xác ướp)",
        detail:
          "Mục tiêu là căn chòi chính ở giữa tiền đồn. Bạn có thể đánh hoặc lẻn vào bằng kỹ năng di chuyển; bên trong, cure nằm trên bàn cạnh một xác ướp.",
        images: [allThingsImages.aureateCure],
      },
    ],
  },
  {
    title: "Quay lại gặp Zhai Xu và chuẩn bị thuốc giải",
    steps: [
      {
        title: "Nộp đủ 3 cure tại Wishing Cove",
        detail: "Quay lại gặp Zhai Xu và nộp 3 ghi chú cure để ông ấy bắt đầu pha thuốc giải.",
        images: [allThingsImages.turnInCures],
      },
      {
        title: "Tua thời gian thêm 2 ngày trong game",
        detail:
          "Rời khỏi Wishing Cove và để 2 ngày trong game trôi qua. Sau đó quay lại — Zhai Xu sẽ rời đi và để lại ghi chú chỉ bạn tới bờ bắc Mistveil Forest.",
      },
      {
        title: "Gặp Zhai Xu ở bờ bắc và đi theo các đốm lửa",
        detail:
          "Đi theo dấu nhiệm vụ tới rìa phía bắc, nói chuyện với Zhai Xu để nhận thuốc, rồi tiến vào sâu hơn trong khi bám sát các đốm lửa dọc đường (chúng như vùng an toàn tạm thời).",
        images: [allThingsImages.receiveMedicine],
      },
    ],
  },
  {
    title: "Tiến sâu hơn và phá các bông hoa Dawn-to-Dusk",
    steps: [
      {
        title: "Dọn lính gác và tới lối bị hoa chặn",
        detail:
          "Tiến sâu vào rừng; bạn sẽ gặp thêm lính gác Aureate Pavilion. Dọn sạch để an toàn và tới một lối đi bị bông hoa Dawn-to-Dusk chặn.",
        images: [allThingsImages.forestGuards],
      },
      {
        title: "Đốt hoa, rồi tìm khu cây treo xác",
        detail:
          "Trang bị Mũi tên lửa (Fire Arrows) và đốt các bông hoa độc để mở đường. Tiếp tục cho tới khi thấy cây khổng lồ có xác treo; phá 3 bông hoa ở đó, đánh bại Sleeping Puppets thức dậy, và nhặt nửa mặt dây ngọc rơi gần gốc cây.",
        images: [allThingsImages.burnBloomsPendant],
      },
    ],
  },
  {
    title: "Giải suy luận của Sun Buqi và kết thúc Ephemeral Blight",
    steps: [
      {
        title: "Đi theo bóng Silver Needle xuống dưới lòng đất",
        detail:
          "Sau khi nhặt mặt dây, một bóng người xuất hiện rồi rút lui. Đi theo dấu nhiệm vụ tới một hang ổ dưới lòng đất, kết thúc tại căn phòng có một xác ướp.",
        images: [allThingsImages.pathUnderground],
      },
      {
        title: "Đọc ghi chú của Sun Buqi và bắt đầu suy luận",
        detail:
          "Lục soát căn phòng, đọc Sun Buqi’s Notes và các tài liệu gần đó, rồi mở giao diện suy luận và ghép các manh mối thành câu chuyện hợp lý.",
        images: [allThingsImages.deductionInterface],
      },
      {
        title: "Đi theo Sleeping Puppet và phá những bông hoa cuối cùng",
        detail:
          "Sau khi xác nhận suy luận, tương tác với Sleeping Puppet lạ gần xác ướp. Đi theo nó qua hang động tới nguồn sương và phá 3 bông hoa lớn duy trì sương mù, rồi quay lại gặp Zhai Xu để hoàn tất Ephemeral Blight và dọn sạch Mistveil Forest vĩnh viễn.",
        images: [allThingsImages.followPuppet],
      },
    ],
  },
];

export default function MistveilCityPage() {
  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src={heroImagePath}
            alt="Xem trước khu vực Mistveil City"
            fill
            className="object-cover opacity-45"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Cập nhật {lastUpdated} · Mở Mistveil City
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Hướng dẫn mở Mistveil City (Where Winds Meet).
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Nếu bạn tìm “mistveil city where winds meet” vì nhiệm vụ khám phá (Exploration) trỏ tới Mistveil City nhưng game không cho vào, bạn không cô
            đơn. Nhiều người báo có ranh giới “area not yet open” đẩy bạn ra ngoài sau vài giây, kể cả khi bạn cố lao nhanh qua bằng kỹ năng di chuyển.
          </p>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            Trang này giải thích ý nghĩa của khóa, 2 mốc ngày mọi người hay thấy (Jan 22 vs Jan 26, 2026) và việc bạn nên làm ngay — chủ yếu là dọn
            Ephemeral Blight và thu Mistveil Forest Cures để sẵn sàng khi Mistveil City mở.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">Ngày mở: Jan 22 vs Jan 26</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Khóa theo lịch, không phải câu đố</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/40">Ephemeral Blight + 3 cure</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Tóm tắt nhanh</h2>
        </div>
        <ul className="space-y-2 text-sm text-slate-200">
          {tlDr.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Vì sao Mistveil City bị khóa (và ý nghĩa của thông báo).
        </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Điểm mấu chốt: khóa của Mistveil City không giống tiến độ Mistveil Forest. Kể cả khi bạn đã dọn sương Dawn-to-Dusk ở Mistveil Forest, Mistveil
          City vẫn có thể hiện “not yet open” và đẩy bạn ra.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Điều này giống cách Where Winds Meet xử lý nội dung mở theo lịch: nhiệm vụ đã có, tên địa điểm đã có, nhưng ranh giới vẫn bị khóa cứng cho tới
          khi nhà phát triển mở. Vì vậy người chơi với lối build/môn phái/tiến độ khác nhau vẫn gặp cùng một đếm ngược rồi bị dịch chuyển khi đến gần lối
          vào Mistveil City.
        </p>
        <figure className="rounded-2xl border border-slate-800 bg-slate-900/30 p-3">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src={allThingsImages.mistveilCover.src}
              alt={allThingsImages.mistveilCover.alt}
              loading="lazy"
              width={1133}
              height={637}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>
          <figcaption className="mt-2 text-[11px] leading-relaxed text-slate-300">
            {allThingsImages.mistveilCover.caption}
          </figcaption>
        </figure>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-semibold text-slate-50">Kết luận thực tế</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            Hãy coi Mistveil City là khu vực mở theo lịch. Đừng tốn hàng giờ cố vượt ranh giới — chuẩn bị trước và quay lại khi khóa trong game biến mất.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Ngày mở Mistveil City: Jan 22 vs Jan 26 (2026).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Tính đến <strong>{lastUpdated}</strong>, thảo luận cộng đồng và một số bài hướng dẫn nhắc 2 mốc ngày mở khác nhau:{" "}
          <strong>Jan 22, 2026</strong> và <strong>Jan 26, 2026</strong>. Có thể tùy server/khu vực hoặc lịch bản vá bị dời.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Cách an toàn nhất rất đơn giản: hãy tin ngày hiển thị trong game của bạn khi bị chặn (và kiểm tra thông báo chính thức). Nếu cần nơi theo dõi
          nhanh cửa sổ cập nhật, hãy xem{" "}
          <Link href="/vn/guides/patch-notes" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            ghi chú bản vá
          </Link>{" "}
          và{" "}
          <Link href="/vn/news" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            tin tức
          </Link>
          .
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Nên làm gì bây giờ: dọn Ephemeral Blight và thu Mistveil Forest Cures.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Dù Mistveil City bị khóa theo lịch, bạn vẫn có thể tiến triển đáng kể ở vùng Mistveil. Thứ quan trọng nhất bạn nên hoàn thành là{" "}
          <strong>Ephemeral Blight</strong>, giúp dọn sương Dawn-to-Dusk ở Mistveil Forest vĩnh viễn sau khi bạn giúp Zhai Xu pha thuốc giải.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">1) Bắt đầu Ephemeral Blight</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Đi vào Mistveil Forest (phía đông Kaifeng) cho tới khi độc tố làm bạn gục. Zhai Xu cứu bạn về Wishing Cove và chuỗi cure bắt đầu.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">2) Thu đủ 3 cure</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Wishing Cove (nhà Zhai Xu), Hollow Abode (hầm ngục Skill Theft) và Aureate Pavilion (tiền đồn thù địch).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <h3 className="text-sm font-semibold text-slate-50">3) Nộp lại</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Mang các cure về cho Zhai Xu để ông ấy pha thuốc giải và dọn sương Mistveil Forest vĩnh viễn.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Cure ở Hollow Abode gắn với lộ trình hầm ngục{" "}
          <Link href="/vn/guides/skill-theft" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Trộm chiêu (Skill Theft)
          </Link>{" "}
          . Sau khi dọn sương, bạn cũng có thể làm nội dung lăng mộ ở Mistveil — xem{" "}
          <Link href="/vn/guides/mist-shrouded-prison" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Ngục mù sương (Mist-Shrouded Prison)
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
          <h2 className="text-2xl font-bold text-slate-50">Hướng dẫn Ephemeral Blight (kèm ảnh)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Mistveil City có thể bị khóa theo lịch, nhưng bạn vẫn có thể hoàn thành Ephemeral Blight và dọn Mistveil Forest ngay bây giờ. Phần hướng dẫn này
          được sắp xếp giống bài gốc: lấy cure trước, rồi tới mục tiêu dọn sương.
        </p>
        <div className="space-y-6">
          {walkthroughSections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-black/25 space-y-4"
            >
              <h3 className="text-lg font-semibold text-slate-50">{section.title}</h3>
              <ol className="space-y-4">
                {section.steps.map((step, index) => (
                  <li key={`${section.title}-${step.title}`} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Bước {index + 1}</p>
                    <p className="text-sm font-semibold text-slate-100">{step.title}</p>
                    <p className="text-sm leading-relaxed text-slate-200">{step.detail}</p>
                    {step.images ? (
                      <div className={step.images.length > 1 ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" : "space-y-3"}>
                        {step.images.map((image) => (
                          <figure key={image.src} className="rounded-xl border border-slate-800 bg-slate-900/60 p-2">
                            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60">
                              <CdnImage
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                width={1600}
                                height={900}
                                className="h-auto w-full"
                                sizes="(max-width: 1024px) 100vw, 520px"
                              />
                            </div>
                            <figcaption className="mt-2 text-[11px] leading-relaxed text-slate-300">{image.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
          Lưu ý: sau khi nộp đủ 3 cure, nhiệm vụ có thể yêu cầu bạn chờ khoảng 2 ngày trong game trước khi Zhai Xu để lại ghi chú và mục tiêu “gặp ở bờ
          bắc”
          xuất hiện.
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Checklist chuẩn bị cho Mistveil City.
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Hoàn thành Ephemeral Blight và dọn sương Mistveil Forest (thuốc giải của Zhai Xu).",
            "Thu đủ Mistveil Forest Cures: Wishing Cove, Hollow Abode, Aureate Pavilion.",
            "Mở các điểm dịch chuyển gần đó và chuẩn bị vật phẩm tiêu hao cơ bản.",
            "Nếu nhật ký nhiệm vụ có giới hạn số nhiệm vụ đang theo dõi, hãy chừa một ô trống.",
            "Sau mốc ngày được nhắc trên server của bạn, hãy thử lại ranh giới Mistveil City.",
          ].map((item) => (
            <li key={item} className="flex gap-2 rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
              <span className="mt-0.5 text-emerald-300">✓</span>
              <span className="text-sm leading-relaxed text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">FAQ Mistveil City</h2>
        <div className="divide-y divide-slate-800">
          {faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-100">
                {item.q}
                <span className="float-right text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
