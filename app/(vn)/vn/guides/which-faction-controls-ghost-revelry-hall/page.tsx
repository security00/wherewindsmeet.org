import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const guidePath = "/guides/which-faction-controls-ghost-revelry-hall";
const heroImagePath = `${guidePath}/hero.webp`;
const ogImage = cdn(heroImagePath);

const metaTitle = "WWM: Ghost Revelry Hall do phe nào kiểm soát? (Đáp án)";
const metaDescription =
  "Ghost Revelry Hall do phe nào kiểm soát trong Where Winds Meet? Đây không phải căn cứ sect/phe để gia nhập — theo cốt truyện, khu này bị băng nhóm tội phạm và thế lực ma quái chiếm giữ. Đáp án nhanh + screenshots + video YouTube top 1.";

const publishedDate = "2025-12-31";

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
        alt: "Ghost Revelry Hall screenshot (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Ghost Revelry Hall screenshot (Where Winds Meet) (fallback)",
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
        alt: "Ghost Revelry Hall do phe nào kiểm soát? (Where Winds Meet)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "Ghost Revelry Hall do phe nào kiểm soát? (Where Winds Meet) (fallback)",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Đáp án nhanh", value: "Không có sect/phe chính thức. Băng nhóm + thế lực ma quái.", icon: "✅" },
  { label: "Bạn thường thấy câu hỏi ở đâu", value: "World’s Digest Prize Quiz + quest UI Unbound Cavern", icon: "🧭" },
  { label: "Bạn cần làm gì", value: "Đánh theo wave và cứu Little Fu.", icon: "⚔️" },
  { label: "Có thể gia nhập phe đó không?", value: "Không — đây là dungeon/địa điểm cốt truyện.", icon: "🚫" },
  { label: "Vật phẩm quan trọng", value: "Key từ Nine Mortal Ways Disciple.", icon: "🗝️" },
  { label: "Nhầm lẫn phổ biến", value: "Không phải căn cứ sect như Nine Mortal Ways.", icon: "🧩" },
];

const videos = [
  {
    id: "48y4lAQvFl8",
    title: "Where Winds Meet - Which Faction Controls Ghost Revelry Hall? (World's Digest Prize Quiz)",
    note: "Đây là clip YouTube thường được Google xếp #1 cho đúng truy vấn này.",
    uploadDate: "2025-12-25T13:27:10-08:00",
  },
];

const steps = [
  {
    title: "Tiến triển chuỗi nhiệm vụ Unbound Cavern",
    text: "Theo mục tiêu của Unbound Cavern Campaign và vượt qua các trận đầu với Unbound Cavern Members.",
    image: `${guidePath}/step-1-defeat-unbound-cavern-members.webp`,
    alt: "Where Winds Meet: gặp Unbound Cavern Members trong chuỗi nhiệm vụ",
    caption: "Unbound Cavern Members (screenshot)",
  },
  {
    title: "Cứu Nine Mortal Ways Disciple và nhận key",
    text: "Trong chuỗi này bạn sẽ giải cứu một Nine Mortal Ways Disciple. NPC sẽ nhắc tới Ghost Revelry Hall và đưa key theo mục tiêu nhiệm vụ.",
    image: `${guidePath}/step-2-free-nine-mortal-ways-disciple.webp`,
    alt: "Where Winds Meet: Nine Mortal Ways Disciple sau khi được cứu",
    caption: "Nine Mortal Ways Disciple (screenshot)",
  },
  {
    title: "Vào Ghost Revelry Hall và dọn wave",
    text: "Tới cửa vào, chuẩn bị nhiều wave địch. Dọn sạch để đi sâu hơn và hoàn thành mục tiêu liên quan tới Little Fu.",
    image: `${guidePath}/step-3-enter-ghost-revelry-hall.webp`,
    alt: "Where Winds Meet: giao chiến trong Ghost Revelry Hall",
    caption: "Ghost Revelry Hall (screenshot)",
  },
];

const faq = [
  {
    q: "Ghost Revelry Hall do phe nào kiểm soát trong Where Winds Meet?",
    a: "Không có phe/sect chính thức để bạn gia nhập và coi là “chủ sở hữu”. Trong bối cảnh cốt truyện, Ghost Revelry Hall bị các băng nhóm tội phạm và thế lực ma quái chiếm giữ — bạn sẽ đánh với chúng trong chuỗi Unbound Cavern.",
  },
  {
    q: "Ghost Revelry Hall có phải căn cứ sect (như Nine Mortal Ways / Velvet Shade) không?",
    a: "Không. Đây là địa điểm chiến đấu theo nhiệm vụ cốt truyện, không phải trụ sở sect để đứng phe hoặc gia nhập.",
  },
  {
    q: "Lấy key vào Ghost Revelry Hall ở đâu?",
    a: "Tiếp tục Unbound Cavern Campaign cho tới khi bạn cứu Nine Mortal Ways Disciple — NPC sẽ nói về Ghost Revelry Hall và đưa key theo tiến trình mục tiêu.",
  },
  {
    q: "Vì sao câu hỏi này hay lên Google Trends?",
    a: "Nhiều người thấy câu hỏi trong World’s Digest Prize Quiz hoặc thấy tên địa điểm trong quest UI Unbound Cavern và tưởng nó liên quan tới một phe lớn có thể gia nhập. Thực tế đây là dungeon cốt truyện do thế lực thù địch chiếm giữ.",
  },
];

const relatedLinks = [
  {
    title: "Tổng quan sect/phe (factions) trong WWM",
    href: "/vn/guides/sects",
    note: "Nếu bạn đang tìm phe/sect có thể gia nhập, xem trang này trước.",
  },
  {
    title: "Woven with Malice (Lost Chapter route)",
    href: "/vn/guides/woven-with-malice",
    note: "Một chuỗi Lost Chapter khác, dạng hướng dẫn theo bước.",
  },
  {
    title: "Mist-Shrouded Prison (tomb route)",
    href: "/vn/guides/mist-shrouded-prison",
    note: "Nếu bạn thích dungeon route: chests, loop và đường đi rõ ràng.",
  },
];

export default function GhostRevelryHallFactionControlPageVN() {
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
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Ghost Revelry Hall", item: `${baseUrl}/vn${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/vn${guidePath}#howto`,
      name: "Cách tới Ghost Revelry Hall (Where Winds Meet)",
      description: "Đi Unbound Cavern Campaign, cứu Nine Mortal Ways Disciple, dùng key để vào Ghost Revelry Hall.",
      totalTime: "PT5M",
      image: ogImage,
      step: steps.map((step, idx) => ({
        "@type": "HowToStep",
        name: `Bước ${idx + 1}: ${step.title}`,
        text: step.text,
        url: `${baseUrl}/vn${guidePath}#step-${idx + 1}`,
        image: cdn(step.image),
      })),
      inLanguage: "vi-VN",
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
    ...videos.map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: `${video.note} (Embedded on wherewindsmeet.org)`,
      thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: video.uploadDate,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    })),
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src={heroImagePath}
            alt="Ghost Revelry Hall screenshot (Where Winds Meet)"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Unbound Cavern quest location
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Ghost Revelry Hall do phe nào kiểm soát trong Where Winds Meet?</h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Từ khoá này hay tăng khi game hiển thị <span className="font-semibold text-slate-100">Ghost Revelry Hall</span> — có thể dưới dạng câu hỏi trong{" "}
              <span className="font-semibold text-slate-100">World’s Digest Prize Quiz</span> hoặc trong phần mục tiêu Unbound Cavern. Đáp án thực ra khá đơn
              giản: đây không phải căn cứ sect/phe để gia nhập. Dưới đây là đáp án gọn + đường đi nhanh (có screenshot).
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80" id="answer">
              <p className="font-semibold text-amber-100">TL;DR (đáp án nhanh)</p>
              <p className="mt-1">
                Không có <span className="font-semibold text-amber-50">sect/phe chính thức</span> kiểm soát Ghost Revelry Hall. Trong nhiệm vụ, nơi này bị{" "}
                <span className="font-semibold text-amber-50">băng nhóm tội phạm và thế lực ma quái</span> chiếm giữ.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-100">
              <Link
                href="#video"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Xem video top
              </Link>
              <Link
                href="#how-to-get"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                Cách tới nơi (screenshots)
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-50"
              >
                FAQ
              </Link>
              <Link
                href="/vn/guides/sects"
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-purple-200 hover:border-purple-400 hover:text-purple-50"
              >
                Sects overview
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-inner">
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <CdnImage
                      src={`${guidePath}/step-3-enter-ghost-revelry-hall.webp`}
                      alt="Ghost Revelry Hall screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Đáp án</p>
                    <p className="text-sm font-semibold text-slate-100">Không phải căn cứ phe để gia nhập</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-200">
                    Hiểu đơn giản: <span className="font-semibold text-slate-50">băng nhóm + ma quái</span> chiếm giữ trong chuỗi Unbound Cavern.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">Screenshot dùng có phép, mục tiêu là tái hiện đúng giao diện quest mà người chơi hay gặp.</p>
                </div>
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
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">👻</span>
          <h2 className="text-2xl font-bold text-slate-50">Ghost Revelry Hall là gì?</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Ghost Revelry Hall là một địa điểm chiến đấu theo nhiệm vụ. Bối cảnh mang màu “underworld”: buôn lậu/trafficking và hậu quả siêu nhiên — vì vậy trong
          chuỗi nhiệm vụ bạn sẽ gặp cả địch dạng ruffian lẫn các “ghost” nạn nhân.
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          Điểm quan trọng: tên địa điểm nghe như lãnh địa phe/phái, nhưng thực tế nó là một đoạn dungeon thuộc Unbound Cavern arc.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏴‍☠️</span>
          <h2 className="text-2xl font-bold text-slate-50">Vậy “phe” nào kiểm soát?</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="relative aspect-video">
              <CdnImage
                src={`${guidePath}/step-4-ruffians-and-gangs.webp`}
                alt="Where Winds Meet: Unbound Cavern ruffians / gangs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Kẻ địch</p>
              <p className="mt-1 text-sm text-slate-200">Bạn sẽ gặp các băng nhóm/ruffian như phần “con người” của việc chiếm giữ.</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">Không có “Ghost Revelry Hall faction” để gia nhập</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Không tồn tại phe chính thức gắn với địa điểm này. “Kiểm soát” nên hiểu là lực lượng thù địch đang chiếm đóng và bạn phải đánh.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">Chiếm giữ = tội phạm + ma quái</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Trong Unbound Cavern arc, nơi này được mô tả là căn cứ hoạt động phi pháp, kèm yếu tố “haunted” để tạo không khí. Vì vậy nhiều hướng dẫn tóm gọn
                là “băng nhóm và thế lực ma quái kiểm soát”.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Nếu bạn cần danh sách phe/sect có thể gia nhập, xem{" "}
              <Link href="/vn/guides/sects" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                WWM Sects
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="video" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Video YouTube top cho truy vấn này</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Nếu bạn muốn xác nhận nhanh thay vì đọc: đây là video mà Google thường xếp đầu cho{" "}
          <span className="font-semibold text-slate-100">“which faction controls ghost revelry hall”</span>.
        </p>

        {videos.map((video) => (
          <article key={video.id} className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
              <div className="aspect-video bg-slate-950/80">
                <iframe
                  title={video.title}
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <h3 className="text-sm font-medium text-slate-100">{video.title}</h3>
            <p className="text-xs leading-relaxed text-slate-300">{video.note}</p>
          </article>
        ))}
      </section>

      <section id="how-to-get" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Cách tới Ghost Revelry Hall (screenshots)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Câu chữ mục tiêu có thể khác theo bản dịch, nhưng đường đi gần như giống nhau: tiến Unbound Cavern, cứu Disciple để nhận key, rồi dọn wave ở cửa vào.
        </p>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              id={`step-${index + 1}`}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                  <div className="relative aspect-video bg-slate-950/80">
                    <CdnImage src={step.image} alt={step.alt} fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-2 p-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{`Bước ${index + 1}`}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{step.text}</p>
                  <p className="text-xs text-slate-400">{step.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
              <h3 className="text-sm font-semibold text-slate-100">{item.q}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧩</span>
          <h2 className="text-2xl font-bold text-slate-50">More guides</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">{item.title}</h3>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
