import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const heroImagePath = "/guides/mist-shrouded-prison/youtube-cover.jpg";
const heroImage = `${cdnBase}${heroImagePath}`;
const cdn = (path: string) => `${cdnBase}${path}`;
const walkthrough = [
  {
    title: "Tìm lối vào Mist-Shrouded Prison",
    detail:
      "Hoàn thành The Ephemeral Blight, giao đủ Mistveil Forest Cures cho Zhai Xu để lấy thuốc giải, đi thang máy gần Central Mistveil Forest. Đốt nụ hoa xanh đầu tiên bằng mũi tên lửa để mở hầm mộ.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-tomb-location-in-wwm-where-winds-meet.jpg"), alt: "Vị trí lối vào hầm mộ Mist-Shrouded Prison" },
  },
  {
    title: "Vòng lặp 1: cánh cửa phủ gân bên phải",
    detail: "Từ lối vào, phòng bên phải bị phong ấn bởi gân từ một nụ hoa xanh—tạm bỏ qua. Leo thang bên trái; hầm mộ sẽ lặp tổng cộng 3 lần.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/loop-1-mist-shrouded-prison-chest-1-location-in-wwm-where-winds-meet.jpg"), alt: "Tổng quan hành lang vòng lặp 1" },
  },
  {
    title: "Rương 1 (phòng đỏ có “cô gái đỏ”)",
    detail: "Vào phòng ánh đỏ phía trước; ở vòng 1, cô gái đỏ đứng trong phòng. Mở rương 1 ngay cạnh cô ấy.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-1-location-in-wwm-where-winds-meet.jpg"), alt: "Vị trí rương 1 Mist-Shrouded Prison" },
  },
  {
    title: "Hành lang độc Frost Fungus và nụ hoa",
    detail: "Rời phòng, đi xuyên qua hành lang độc Frost Fungus Poison, rồi đốt nụ hoa xanh ở phía đối diện bằng mũi tên lửa để tiếp tục.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/loop-1-destroy-bud-with-fire-in-wwm-where-winds-meet.jpg"), alt: "Đốt nụ hoa để mở đường" },
  },
  {
    title: "Rương 2 (kích hoạt chông trần)",
    detail: "Tiếp tục đến rương 2; mở rương sẽ thả bẫy chông từ trần xuống, vì vậy hãy mở xong rồi lùi lại về phía lối vào.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-2-location-in-wwm-where-winds-meet.jpg"), alt: "Vị trí rương 2 Mist-Shrouded Prison" },
  },
  {
    title: "Rương 3 (rẽ trái qua bẫy chông)",
    detail: "Nhảy lên các chông nhô lên, sau đó rẽ trái vào hành lang nhỏ để lấy rương 3.",
    image: { src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-3-location-in-wwm-where-winds-meet.jpg"), alt: "Vị trí rương 3 Mist-Shrouded Prison" },
  },
  {
    title: "Vượt bẫy chông và leo lên",
    detail: "Dùng bẫy chông lần nữa để sang phía đối diện, rồi leo thang lên đường trên.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest.png"),
      alt: "Tổng quan phòng bẫy chông Mist-Shrouded Prison",
    },
  },
  {
    title: "Giẫm lên tấm áp lực",
    detail: "Kích hoạt tấm áp lực để chông ngang bắt đầu di chuyển; quay lại phía lối vào để bám theo chúng.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/press-the-pressure-plate-to-activate-spikes-in-wwm-where-winds-meet.jpg"),
      alt: "Tấm áp lực kích hoạt bẫy chông",
    },
  },
  {
    title: "Rương 4 (đi sát sau chông di chuyển)",
    detail: "Khi chông trượt tới phía trước, chạy bám ngay sau chúng để lấy rương 4 an toàn.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-4-location-in-wwm-where-winds-meet.jpg"),
      alt: "Vị trí rương 4 Mist-Shrouded Prison",
    },
  },
  {
    title: "Rơi xuống để vào vòng lặp 2",
    detail: "Đi qua cổng và rơi xuống phòng đầu tiên quen thuộc. Cô gái đỏ cạnh thang xác nhận bạn đã sang vòng 2.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/how-to-enter-loop-2-in-wwm-where-winds-meet.jpg"),
      alt: "Cách vào vòng lặp 2 bằng đường rơi",
    },
  },
  {
    title: "Lặp lại phòng chông ở vòng 2",
    detail: "Băng qua hành lang vào lại phòng chông, leo thang, giẫm tấm áp lực và đi tiếp để đẩy bố cục sang vòng lặp cuối.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/step-11.png"),
      alt: "Thiết lập lại phòng chông ở vòng 2",
    },
  },
  {
    title: "Vào vòng lặp 3",
    detail: "Sau khi lặp lại, bạn đã vào vòng 3—lần xoay cuối của hầm mộ.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/enter-loop-3-in-wwm-where-winds-meet.jpg"),
      alt: "Khu vực vào vòng lặp 3",
    },
  },
  {
    title: "Cô gái đỏ ở hành lang hoa xanh",
    detail: "Leo thang và rẽ phải; hành lang phủ hoa xanh giờ có cô gái đỏ, xác nhận bạn đang ở vòng 3.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/loop-3-in-wwm-where-winds-meet.jpg"),
      alt: "Hành lang hoa xanh ở vòng 3",
    },
  },
  {
    title: "Rương 5 (hành lang độc)",
    detail: "Chạy xuyên qua độc ở đây, không dừng lại, rồi mở rương thứ 5 dọc hành lang.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-5-location-in-wwm-where-winds-meet.jpg"),
      alt: "Vị trí rương 5 Mist-Shrouded Prison",
    },
  },
  {
    title: "Đốt nụ hoa xanh thứ hai",
    detail: "Rời hành lang, đốt nụ hoa xanh phía trước và đi tiếp đến căn phòng có tờ ghi chú trên bàn.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/destroy-blue-bud-2-in-wwm-where-winds-meet.jpg"),
      alt: "Đốt nụ hoa xanh sau rương 5",
    },
  },
  {
    title: "Rơi xuống bẫy chông di chuyển",
    detail: "Từ phòng ghi chú, nhìn xuống hố và chờ chông ngang (từ vòng 2) thẳng hàng; sau đó rơi xuống đúng vị trí.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/jump-onto-the-moving-spikes-in-wwm-where-winds-meet.jpg"),
      alt: "Rơi xuống bẫy chông đang di chuyển",
    },
  },
  {
    title: "Đi tới góc và dọn phục kích",
    detail: "Khi chông tiến gần mép, nhảy xuống và hạ kẻ địch đang ẩn gần đó.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/step-17.png"),
      alt: "Ổ phục kích ở góc gần bẫy chông",
    },
  },
  {
    title: "Rương 6 (phần thưởng vòng 3)",
    detail: "Sau khi dọn xong phục kích, mở rương 6 ở khu vực này.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/mist-shrouded-prison-chest-6-location-in-wwm-where-winds-meet.jpg"),
      alt: "Vị trí rương 6 Mist-Shrouded Prison",
    },
  },
  {
    title: "Rơi về khu vực hành lang cũ",
    detail: "Đi tiếp và rơi xuống hố dài để đáp gần vị trí rương 3 ở vòng 1.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/drop-from-chest-6-location-to-return-to-loop-1-in-wwm-where-winds-meet.jpg"),
      alt: "Rơi từ vị trí rương 6 để quay về vòng 1",
    },
  },
  {
    title: "Quay lại theo đường bẫy chông",
    detail: "Đi tới phòng chông, leo lên chông di chuyển, nhảy sang trái vào hành lang nhỏ, rồi rơi qua hai hố xuống hành lang rộng.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/frop-down-from-chest-in-loop-2-in-wwm-where-winds-meet.jpg"),
      alt: "Đường quay lại qua phòng bẫy chông",
    },
  },
  {
    title: "Đốt nụ ở cuối hành lang",
    detail: "Đốt nụ hoa xanh ở cuối bằng mũi tên lửa và đi qua cổng để trở lại phòng ban đầu.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/remove-the-bud-to-open-the-final-door-in-wwm-where-winds-meet.jpg"),
      alt: "Đốt nụ để mở đường vào kho báu cuối",
    },
  },
  {
    title: "Rương kho báu cuối",
    detail: "Vào căn phòng từng bị phủ gân ở vòng 1 và mở rương kho báu cuối ở phía sau.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/final-treasure-wide.jpg"),
      alt: "Góc nhìn rộng rương kho báu cuối",
    },
  },
  {
    title: "Rest in Peace (kết thúc)",
    detail: "Tương tác “Pay respect” tại điểm đánh dấu để hoàn thành hầm mộ Mist-Shrouded Prison.",
    image: {
      src: cdn("/guides/mist-shrouded-prison/gr/pray-to-red-lady-in-wwm-where-winds-meet.jpg"),
      alt: "Tương tác Pay respect với cô gái đỏ",
    },
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet: Mist-Shrouded Prison – 6 rương & kho báu cuối",
  description:
    "Hướng dẫn hầm mộ Mist-Shrouded Prison (Where Winds Meet): mở sau The Ephemeral Blight, theo dấu cô gái đỏ qua vòng 1–3, lấy đủ 6 rương và kho báu cuối.",
  alternates: buildHreflangAlternates("/guides/mist-shrouded-prison", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet: Mist-Shrouded Prison – 6 rương & kho báu cuối",
    description:
      "Hướng dẫn hầm mộ Mist-Shrouded Prison: mở sau The Ephemeral Blight, theo dấu cô gái đỏ qua vòng 1–3, lấy đủ 6 rương và kho báu cuối.",
    url: `${baseUrl}/vn/guides/mist-shrouded-prison`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImage,
        width: 1280,
        height: 720,
        alt: "Ảnh xem trước lộ trình kho báu Mist-Shrouded Prison",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet: Mist-Shrouded Prison – 6 rương & kho báu cuối",
    description:
      "Hướng dẫn hầm mộ Mist-Shrouded Prison: theo vòng lặp 1–3, lấy đủ 6 rương và kho báu cuối.",
    images: [
      {
        url: heroImage,
        alt: "Ảnh xem trước lộ trình kho báu Mist-Shrouded Prison",
      },
    ],
  },
};

const quickFacts = [
  { label: "Vị trí", value: "Hầm mộ Mistveil Forest (sau khi giải sương bằng thuốc giải của Zhai Xu)", icon: "🧭" },
  { label: "Dấu vòng lặp", value: "Cô gái đỏ: phòng đỏ → cạnh thang → hành lang hoa xanh", icon: "👁️" },
  { label: "Rương", value: "6 rương theo vòng + kho báu cuối sau cánh cửa phủ gân", icon: "🎁" },
  { label: "Bẫy", value: "Độc Frost Fungus, chông di chuyển, nụ hoa xanh", icon: "⚠️" },
  { label: "Chuẩn bị", value: "Xong The Ephemeral Blight, thu đủ thuốc chữa, đi thang máy gần Central Mistveil Forest", icon: "🧪" },
];

const tlDr = [
  "Hoàn thành The Ephemeral Blight: thu đủ Mistveil Forest Cures, giao Zhai Xu để lấy thuốc giải, dọn sương, đi thang máy gần Central Mistveil Forest, rồi đốt nụ hoa xanh đầu tiên để vào hầm mộ Mist-Shrouded Prison.",
  "Vòng 1: bỏ qua phòng cửa phủ gân, leo thang trái, lấy rương 1 ở phòng đỏ có cô gái đỏ. Đi qua hành lang độc và đốt nụ; rương 2 kích hoạt chông trần, sau đó cưỡi chông di chuyển để tới rương 3.",
  "Giẫm tấm áp lực phía trên phòng chông, bám theo bẫy chông ngang để lấy rương 4, rồi rơi qua cổng—cô gái đỏ cạnh thang là vòng 2. Lặp phòng chông/tấm áp lực để đẩy bố cục sang vòng 3.",
  "Vòng 3: rẽ phải gặp cô gái đỏ ở hành lang hoa xanh, chịu độc để mở rương 5, đốt nụ tiếp theo, từ phòng ghi chú rơi xuống chông di chuyển, dọn phục kích lấy rương 6; rồi rơi về khu cũ, đốt nụ cuối và mở kho báu cuối trước khi bấm Rest in Peace.",
];

const steps = [
  {
    title: "Mở hầm mộ",
    detail:
      "Hoàn thành The Ephemeral Blight, giao đủ Mistveil Forest Cure cho Zhai Xu để lấy thuốc giải, đi thang máy gần Central Mistveil Forest, rồi đốt nụ hoa đầu tiên để vào Mist-Shrouded Prison.",
  },
  {
    title: "Theo dõi vòng lặp",
    detail:
      "Bố cục lặp 3 lần. Cô gái đỏ báo vòng lặp: phòng đỏ (vòng 1), cạnh thang sau khi rơi (vòng 2), và ở hành lang hoa xanh bên phải (vòng 3). Để cửa phủ gân đến cuối để hầm mộ không “lệch nhịp”.",
  },
  {
    title: "Vòng 1: rương 1–4",
    detail:
      "Leo thang trái; rương 1 ở phòng đỏ có cô gái đỏ. Đi qua độc Frost Fungus và đốt nụ. Rương 2 kích hoạt chông trần; cưỡi chông di chuyển để đến rương 3. Giẫm tấm áp lực phía trên và bám theo chông ngang để lấy rương 4.",
  },
  {
    title: "Chuyển sang vòng 2",
    detail:
      "Đi qua cổng và rơi xuống điểm đầu; cô gái đỏ cạnh thang xác nhận vòng 2. Băng qua hành lang, vào lại phòng chông, leo lên, giẫm tấm áp lực và đi tiếp để đẩy sang vòng cuối.",
  },
  {
    title: "Vòng 3: rương 5–6",
    detail:
      "Sau khi leo thang, rẽ phải vào hành lang hoa xanh. Chạy qua độc để mở rương 5, đốt nụ tiếp theo, canh chông thẳng hàng rồi rơi xuống, dọn phục kích ở góc và mở rương 6 để hoàn tất phần chính.",
  },
  {
    title: "Kho báu cuối & kết thúc",
    detail:
      "Từ rương 6, rơi về hành lang cũ, dùng phòng chông để tới khu hai hố và hành lang rộng, đốt nụ cuối, quay lại phòng cửa phủ gân để mở rương kho báu cuối, rồi bấm Rest in Peace để hoàn thành.",
  },
];

const faq = [
  {
    q: "Bắt đầu Mist-Shrouded Prison như thế nào?",
    a: "Hoàn thành The Ephemeral Blight, thu đủ Mistveil Forest Cures, giao Zhai Xu để lấy thuốc giải, dọn sương, đi thang máy gần Central Mistveil Forest và đốt nụ hoa đầu tiên để vào.",
  },
  {
    q: "Làm sao biết đang ở vòng lặp nào?",
    a: "Nhìn vị trí cô gái đỏ: phòng đỏ (vòng 1), cạnh thang sau lần rơi đầu (vòng 2), và ở hành lang hoa xanh bên phải (vòng 3).",
  },
  {
    q: "Tất cả rương nằm ở đâu?",
    a: "Rương 1 ở phòng đỏ; rương 2 ở sau hành lang độc và kích hoạt chông trần; rương 3 rẽ trái qua chông di chuyển; rương 4 ở sau chông ngang; rương 5 nằm trong hành lang độc vòng 3; rương 6 sau khi rơi từ phòng ghi chú xuống chông; rương kho báu cuối ở sau cánh cửa phủ gân (vòng 1).",
  },
  {
    q: "Mẹo đi qua độc Frost Fungus và bẫy chông?",
    a: "Đi xuyên qua độc, hạn chế dừng lại; hồi máu sau khi mở rương; và canh nhịp chông di chuyển—cưỡi lên rồi nhảy ra về hành lang trái hoặc góc phục kích đúng thời điểm.",
  },
  {
    q: "Làm gì để hoàn thành hầm mộ?",
    a: "Đốt nụ cuối để mở lại phòng cửa phủ gân (vòng 1), mở rương kho báu cuối, rồi bấm Rest in Peace tại điểm đánh dấu để kết thúc.",
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
      name: "Mist-Shrouded Prison",
      item: `${baseUrl}/vn/guides/mist-shrouded-prison`,
    },
  ],
};

const related = [
  { href: "/vn/guides/unholy-prophecy", title: "An Unholy Prophecy (thắp lửa, Meridian Touch)" },
  { href: "/vn/guides/woven-with-malice", title: "Sợi Định Mệnh (mốc giờ, bẫy)" },
  { href: "/vn/guides/one-leaf-one-life", title: "One Leaf, One Life (walkthrough Lost Chapter)" },
  { href: "/vn/news#roadmap", title: "Roadmap / cập nhật tiếp theo" },
];

export default function MistShroudedPrisonPage() {
  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData, faqStructuredData]),
        }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-2xl shadow-slate-950/40">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={heroImage}
            alt="Ảnh xem trước lộ trình Mist-Shrouded Prison"
            fill
            className="object-cover opacity-45"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>
        <div className="relative space-y-4 z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Cập nhật 01/2025 · TL;DR bên dưới
          </div>
          <h1 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Hướng dẫn Mist-Shrouded Prison – toàn bộ rương (kể cả rương cuối)
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Walkthrough Mist-Shrouded Prison trong Where Winds Meet: mở sau khi dọn sương Mistveil Forest bằng thuốc giải của Zhai Xu, dùng cô gái đỏ để nhận
            biết vòng lặp, xử lý nụ hoa xanh, độc và bẫy chông, rồi lấy đủ 6 rương cùng kho báu cuối.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Tóm tắt nhanh: đây là hầm mộ 3 vòng lặp với 6 rương chính và 1 kho báu cuối. Hãy bám theo dấu cô gái đỏ, đốt tất cả nụ hoa xanh và xử lý phòng
            bẫy chông theo đúng thứ tự để hoàn thành gọn gàng.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-emerald-400/50">Đủ 6 rương + kho báu cuối</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-slate-400/40">Dấu vòng lặp</span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 ring-1 ring-amber-400/40">Chông & nụ hoa xanh</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">TL;DR – đường đi nhanh</h2>
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

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">Thông tin nhanh</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-black/20"
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
        <div className="space-y-4 rounded-3xl border border-emerald-700/40 bg-emerald-900/20 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <h3 className="text-2xl font-bold text-emerald-100">Tóm tắt lộ trình</h3>
          </div>
          <ol className="space-y-2 text-sm text-emerald-50/90 list-decimal list-inside">
            {steps.map((step) => (
              <li key={step.title} className="rounded-xl border border-emerald-700/40 bg-emerald-900/20 px-3 py-2 leading-relaxed">
                <p className="font-semibold text-emerald-50">{step.title}</p>
                <p className="text-emerald-100/90 text-xs">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📜</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Tờ ghi chú (bàn ở vòng 3)</h2>
        </div>
        <p className="text-sm text-slate-300 mb-3">
          Bạn sẽ thấy ghi chú này sau khi đốt nụ thứ hai ở vòng 3, trước khi rơi xuống bẫy chông di chuyển. Đọc xong, hãy làm đúng thứ tự các bước để mạch
          “vòng lặp” của hầm mộ không bị lệch.
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-inner shadow-black/25">
          <Image
            src={cdn("/guides/mist-shrouded-prison/gr/read-note-in-prison-in-wwm-where-winds-meet.jpg")}
            alt="Ghi chú manh mối trong Mist-Shrouded Prison"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
          <h2 className="text-2xl font-bold text-slate-50">Walkthrough có hình</h2>
        </div>
        <ol className="space-y-5">
          {walkthrough.map((step, index) => (
            <li
              key={step.title}
              className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-inner shadow-black/25"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Bước {index + 1}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">{step.detail}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-100">
          Nếu bị lạc nhịp: cô gái đỏ đánh dấu từng vòng (phòng đỏ → cạnh thang → hành lang hoa xanh). Sau rương 6, rơi về gần rương 3, cưỡi bẫy chông để tới
          hành lang rộng, đốt nụ cuối – khi đó phòng cửa phủ gân (vòng 1) sẽ mở để lấy kho báu cuối và thao tác Rest in Peace.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">❓</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Câu hỏi thường gặp</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔗</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Hướng dẫn liên quan</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎥</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Video hướng dẫn (YouTube)</h2>
        </div>
        <p className="text-sm text-slate-300">
          Nếu bạn vẫn thấy các bước minh họa chưa rõ, hãy xem video walkthrough này để theo trọn lộ trình Mist-Shrouded Prison.
        </p>
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-inner shadow-black/25" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/dHDy9nzQsd4"
            title="Video walkthrough Mist-Shrouded Prison"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </article>
  );
}
