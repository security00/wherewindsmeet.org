import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const guidePath = "/guides/find-officer-nan";
const heroImagePath = `${guidePath}/hero.webp`;
const ogImage = cdn(heroImagePath);

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
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Officer Nan trên Mirage Boat (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Officer Nan trên Mirage Boat (Where Winds Meet) (fallback)",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: ogImage,
        alt: "Tìm Officer Nan trong Where Winds Meet",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "Tìm Officer Nan trong Where Winds Meet (fallback)",
      },
    ],
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
    image: `${guidePath}/prove-your-skill.webp`,
    alt: "Vị trí Officer Nan ở Harvestfall Village (tòa nhà đối diện Zither Keeper)",
    caption: "Bến Harvestfall Village: tòa nhà đối diện Zither Keeper nơi Officer Nan đứng.",
  },
  {
    title: "Boong Mirage Boat (mục tiêu Find Nan)",
    text: "Sau cuộc họp, xuống boong và tìm ở lan can bên trái khu mahjong khi bạn nhìn vào thuyền.",
    image: `${guidePath}/find-nan.webp`,
    alt: "Officer Nan đứng cạnh lan can trên Mirage Boat",
    caption: "Boong Mirage Boat: Officer Nan đứng cạnh lan can bên trái.",
  },
];

const game8Steps = [
  {
    title: "Vị trí trên bản đồ",
    image: `${guidePath}/map-location.webp`,
    alt: "The Gilded Chase map location (Game8)",
  },
  {
    title: "Kiểm tra bảng truy nã",
    image: `${guidePath}/examine-the-bounty-board.webp`,
    alt: "Examine the bounty board (Game8)",
  },
  {
    title: "Nói chuyện với Old Jin",
    image: `${guidePath}/talk-to-old-jin.webp`,
    alt: "Talk to Old Jin (Game8)",
  },
  {
    title: "Nói chuyện với Zither Keeper",
    image: `${guidePath}/talk-to-the-zither-keeper.webp`,
    alt: "Talk to the Zither Keeper (Game8)",
  },
  {
    title: "Chứng minh kỹ năng",
    image: `${guidePath}/prove-your-skill.webp`,
    alt: "Prove your skill (Game8)",
  },
  {
    title: "Khảo sát bến tàu",
    image: `${guidePath}/investigate-the-dock.webp`,
    alt: "Investigate the dock (Game8)",
  },
  {
    title: "Tìm người đàn ông lớn tuổi",
    image: `${guidePath}/find-out-the-old-man.webp`,
    alt: "Find out the old man (Game8)",
  },
  {
    title: "Lên Mirage Boat",
    image: `${guidePath}/board-the-mirage-boat.webp`,
    alt: "Board the Mirage Boat (Game8)",
  },
  {
    title: "Tìm Nan",
    image: `${guidePath}/find-nan.webp`,
    alt: "Find Nan on the Mirage Boat (Game8)",
  },
  {
    title: "Thu thập thông tin",
    image: `${guidePath}/get-intel.webp`,
    alt: "Get intel (Game8)",
  },
  {
    title: "Nghe lén các hầu gái",
    image: `${guidePath}/eavesdrop-on-the-maids.webp`,
    alt: "Eavesdrop on the maids (Game8)",
  },
  {
    title: "Báo cáo với Officer Nan",
    image: `${guidePath}/report-to-officer-nan.webp`,
    alt: "Report to Officer Nan (Game8)",
  },
  {
    title: "Old Jin thú nhận",
    image: `${guidePath}/old-jin-confesses.webp`,
    alt: "Old Jin confesses (Game8)",
  },
  {
    title: "Đuổi theo Old Jin",
    image: `${guidePath}/chase-old-jin.webp`,
    alt: "Chase Old Jin (Game8)",
  },
  {
    title: "Đánh bại Old Jin",
    image: `${guidePath}/defeat-old-jin.webp`,
    alt: "Defeat Old Jin (Game8)",
  },
  {
    title: "Tìm manh mối",
    image: `${guidePath}/look-for-clues.webp`,
    alt: "Look for clues (Game8)",
  },
  {
    title: "Chiếc thuyền giả",
    image: `${guidePath}/the-fake-boat.webp`,
    alt: "The fake boat (Game8)",
  },
  {
    title: "Đi theo giọng nói",
    image: `${guidePath}/follow-the-voice.webp`,
    alt: "Follow the voice (Game8)",
  },
  {
    title: "Nan ở bến tàu",
    image: `${guidePath}/nan-at-the-dock.webp`,
    alt: "Nan at the dock (Game8)",
  },
  {
    title: "Đánh bại Phantom Thief",
    image: `${guidePath}/defeat-the-phantom-thief.webp`,
    alt: "Defeat the Phantom Thief (Game8)",
  },
  {
    title: "Kết thúc",
    image: `${guidePath}/the-end.webp`,
    alt: "The Gilded Chase ending (Game8)",
  },
];

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
    href: "/vn/guides/one-leaf-one-life",
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
      image: [ogImage, `${baseUrl}${heroImagePath}`],
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
          <CdnImage
            src={heroImagePath}
            alt="Officer Nan trên boong Mirage Boat (Where Winds Meet)"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
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
                Ảnh vị trí
              </Link>
              <Link
                href="#steps"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Ảnh walkthrough đầy đủ
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
          {locations.map((location) => (
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
                  <CdnImage src={location.image} alt={location.alt} fill className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-xs text-slate-300/90 border-t border-slate-800/80">
                  {location.caption}
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
          <span className="text-xl">📷</span>
          <h2 className="text-2xl font-bold text-slate-50">Ảnh walkthrough Game8 (đầy đủ)</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {game8Steps.map((step, idx) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg"
            >
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Bước {idx + 1}</p>
                  <h3 className="text-base font-semibold text-slate-50">{step.title}</h3>
                </div>
              </div>
              <figure className="border-t border-slate-800/80">
                <div className="relative aspect-video">
                  <CdnImage src={step.image} alt={step.alt} fill className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-xs text-slate-300/90 border-t border-slate-800/80">
                  {step.title} (Game8)
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
