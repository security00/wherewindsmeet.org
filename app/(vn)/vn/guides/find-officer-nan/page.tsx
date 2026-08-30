import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const guidePath = "/guides/find-officer-nan";
const heroImagePath = `${guidePath}/hero.webp`;
const heroImage = `${cdnBase}${heroImagePath}`;

const metaTitle = "WWM: Tìm Officer Nan (The Gilded Chase)";
const metaDescription =
  "Tìm Officer Nan nhanh trong The Gilded Chase: bến Harvestfall (tòa nhà đối diện Zither Keeper) + boong Mirage Boat (lan can trái gần mahjong).";

const publishedDate = "2026-01-20";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildHreflangAlternates(guidePath, { canonicalLanguage: "vi" }),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${baseUrl}/vn${guidePath}`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: heroImage, width: 1200, height: 675, alt: "Officer Nan trên boong Mirage Boat" }],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: heroImage, alt: "Tìm Officer Nan trong Where Winds Meet" }],
  },
};

const quickAnswers = [
  { label: "Nhiệm vụ", value: "Chuỗi nhiệm vụ The Gilded Chase.", icon: "🧾" },
  {
    label: "Harvestfall Village",
    value: "Officer Nan ở trong tòa nhà đối diện Zither Keeper tại bến tàu.",
    icon: "🏮",
  },
  {
    label: "Mirage Boat",
    value: "Ông ấy đứng cạnh lan can bên trái khu vực mahjong khi bạn nhìn vào thuyền.",
    icon: "🛶",
  },
  {
    label: "Fix lỗi",
    value: "Waypoint nằm dưới thuyền? Nhảy xuống và chọn “Return to nearby quest objective”.",
    icon: "🧭",
  },
];

const locations = [
  {
    title: "Bến Harvestfall Village (lần gặp đầu tiên)",
    text: "Đến bến tàu và nói chuyện với Zither Keeper. Cô ấy nói cần thư mời và bảo bạn tìm Officer Nan. Ông ấy ở trong tòa nhà đối diện và đưa job posting sau khi bạn giúp xử lý đàn cá.",
  },
  {
    title: "Boong Mirage Boat (mục tiêu Find Nan)",
    text: "Sau cuộc họp, xuống boong và tìm ở lan can bên trái khu mahjong khi bạn nhìn vào thuyền.",
  },
];

const walkthroughSteps = [
  "Vị trí trên bản đồ",
  "Kiểm tra bảng truy nã",
  "Nói chuyện với Old Jin",
  "Nói chuyện với Zither Keeper",
  "Chứng minh kỹ năng",
  "Khảo sát bến tàu",
  "Tìm người đàn ông lớn tuổi",
  "Lên Mirage Boat",
  "Tìm Nan",
  "Thu thập thông tin",
  "Nghe lén các hầu gái",
  "Báo cáo với Officer Nan",
  "Old Jin thú nhận",
  "Đuổi theo Old Jin",
  "Đánh bại Old Jin",
  "Tìm manh mối",
  "Chiếc thuyền giả",
  "Đi theo giọng nói",
  "Nan ở bến tàu",
  "Đánh bại Phantom Thief",
  "Kết thúc",
];

const walkthroughImageFiles = [
  "map-location.webp",
  "examine-the-bounty-board.webp",
  "talk-to-old-jin.webp",
  "talk-to-the-zither-keeper.webp",
  "prove-your-skill.webp",
  "investigate-the-dock.webp",
  "find-out-the-old-man.webp",
  "board-the-mirage-boat.webp",
  "find-nan.webp",
  "get-intel.webp",
  "eavesdrop-on-the-maids.webp",
  "report-to-officer-nan.webp",
  "old-jin-confesses.webp",
  "chase-old-jin.webp",
  "defeat-old-jin.webp",
  "look-for-clues.webp",
  "the-fake-boat.webp",
  "follow-the-voice.webp",
  "nan-at-the-dock.webp",
  "defeat-the-phantom-thief.webp",
  "the-end.webp",
] as const;

const faq = [
  {
    q: "Officer Nan ở đâu tại Harvestfall Village?",
    a: "Ông ấy ở trong tòa nhà đối diện Zither Keeper tại bến tàu. Nói chuyện với Zither Keeper trước, rồi vào tòa nhà để gặp Officer Nan (Southern Wayfarer).",
  },
  {
    q: "Officer Nan ở đâu khi nhiệm vụ ghi ‘Find Nan’ trên Mirage Boat?",
    a: "Ông ấy đứng cạnh lan can bên trái khu mahjong khi bạn nhìn vào thuyền.",
  },
  {
    q: "Waypoint bị kẹt dưới thuyền — xử lý thế nào?",
    a: "Nhảy xuống nước và chọn “Return to nearby quest objective” để reset mục tiêu.",
  },
];

const relatedLinks = [
  {
    title: "One Leaf, One Life (Lost Chapter)",
    href: "/guides/one-leaf-one-life",
  },
  {
    title: "Sợi Định Mệnh (Lost Chapter)",
    href: "/vn/guides/woven-with-malice",
  },
  {
    title: "Ngục mù sương (route mộ cổ)",
    href: "/vn/guides/mist-shrouded-prison",
  },
];

export default function FindOfficerNanPageVN() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}/vn${guidePath}#webpage`,
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/vn${guidePath}`,
      inLanguage: "vi-VN",
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${baseUrl}/vn${guidePath}#article`,
      headline: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/vn${guidePath}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/vn${guidePath}` },
      image: heroImage,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@type": "Organization", name: "Where Winds Meet Hub" },
      publisher: {
        "@type": "Organization",
        name: "Where Winds Meet Hub",
        logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.ico` },
      },
      inLanguage: "vi-VN",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/vn${guidePath}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Hướng dẫn", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Tìm Officer Nan", item: `${baseUrl}/vn${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${baseUrl}/vn${guidePath}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage src={heroImagePath} alt="Officer Nan trên boong Mirage Boat" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Nhiệm vụ: The Gilded Chase
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Tìm Officer Nan trong Where Winds Meet</h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Nếu bạn tìm “find officer nan where winds meet”, hướng dẫn này chỉ rõ cả hai vị trí trong{" "}
              <span className="font-semibold text-slate-100">The Gilded Chase</span>: một lần ở bến Harvestfall Village (để lấy thư mời) và một lần trên
              boong Mirage Boat. Dùng phần tóm tắt nhanh để tới đúng vị trí.
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80" id="answer">
              <p className="font-semibold text-amber-100">TL;DR (tóm tắt nhanh)</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Bến Harvestfall: Officer Nan ở tòa nhà đối diện Zither Keeper.</li>
                <li>• Mirage Boat: boong tàu, lan can bên trái khu mahjong.</li>
                <li>• Waypoint dưới thuyền? Nhảy xuống và chọn “Return to nearby quest objective”.</li>
                <li>• Từ khóa tìm kiếm: find officer nan where winds meet.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-100">
              <Link
                href="#locations"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Vị trí Officer Nan
              </Link>
              <Link
                href="#steps"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Trình tự nhiệm vụ
              </Link>
              <Link
                href="#fixes"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Fix lỗi
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {quickAnswers.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-lg leading-none">{item.icon}</div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="text-sm text-slate-200">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <h2 className="text-2xl font-bold text-slate-50">Hai vị trí cần tìm Officer Nan</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {locations.map((location, index) => (
            <article
              key={location.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-slate-50">{location.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{location.text}</p>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage
                    src={`${guidePath}/${index === 0 ? "prove-your-skill.webp" : "find-nan.webp"}`}
                    alt={`${location.title} – vị trí trong Where Winds Meet`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-300">
                  {location.title}. Source publisher: Game8.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section id="fixes" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧯</span>
          <h2 className="text-2xl font-bold text-slate-50">Kẹt mục tiêu? Cách xử lý nhanh</h2>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-sm text-emerald-100">
          Nếu marker bị lỗi và trỏ dưới thuyền, hãy nhảy xuống nước và chọn “Return to nearby quest objective” để reset mục tiêu.
        </div>
      </section>

      <section id="steps" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Trình tự nhiệm vụ</h2>
        </div>
        <p className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm leading-6 text-emerald-100">
          Source publisher: Game8. Reuse authorization confirmed by site owner 2026-08-29. Ảnh được dùng làm mốc kiểm tra trực
          quan; hãy đối chiếu câu chữ mục tiêu trong bản game hiện tại.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {walkthroughSteps.map((step, idx) => (
            <article
              key={step}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Bước {idx + 1}</p>
                  <h3 className="text-base font-semibold text-slate-50">{step}</h3>
                </div>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage
                    src={`${guidePath}/${walkthroughImageFiles[idx]}`}
                    alt={`${step} – ảnh walkthrough The Gilded Chase`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-300">
                  Bước {idx + 1}: {step}. Source publisher: Game8.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-50">Guide liên quan</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          {relatedLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline underline-offset-4 hover:text-emerald-100">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
