import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;
const guidePath = "/guides/who-is-destined-to-face-the-purple-star-catastrophe";
const heroImagePath = `${guidePath}/hero.webp`;
const ogImage = cdn(heroImagePath);

const metaTitle = "WWM Purple Star Catastrophe – Đáp án quiz (Zhao Brothers)";
const metaDescription =
  "Where Winds Meet (WWM) World’s Digest Prize Quiz: Purple Star catastrophe. Đáp án: The Zhao Brothers (Zhao Kuangyin + Zhao Guangyi). Có ảnh + đường dẫn menu.";

const publishedDate = "2025-12-27";

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
        alt: "Đáp án quiz Where Winds Meet: Purple Star catastrophe",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        width: 1200,
        height: 675,
        alt: "Đáp án quiz Where Winds Meet: Purple Star catastrophe (fallback)",
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
        alt: "Đáp án quiz Purple Star catastrophe (The Zhao Brothers)",
      },
      {
        url: `${baseUrl}${heroImagePath}`,
        alt: "Đáp án quiz Purple Star catastrophe (The Zhao Brothers) (fallback)",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Đáp án đúng (quiz)", value: "The Zhao Brothers", icon: "✅" },
  { label: "Tên đầy đủ", value: "Zhao Kuangyin + Zhao Guangyi", icon: "👥" },
  { label: "Cách tìm", value: "Wandering Paths → Eastern Herald → World’s Digest", icon: "🧭" },
  { label: "Mục quiz", value: "Bên phải: Prize Quiz", icon: "📰" },
  { label: "Vì sao đang trend", value: "Câu hỏi daily kiểm tra storyline Kaifeng", icon: "📈" },
  { label: "Hay nhầm", value: "Không phải “purple robe” NPC / Tian Ying", icon: "🧩" },
];

const steps = [
  {
    title: "Mở Wandering Paths",
    text: "Trong menu của game, vào Wandering Paths. Đây là nơi chứa Eastern Herald cho các nội dung daily/weekly.",
    image: `${guidePath}/step-1-wandering-paths.webp`,
    alt: "Where Winds Meet: mở Wandering Paths từ menu",
    caption: "Menu → Wandering Paths (ảnh minh họa)",
  },
  {
    title: "Vào Casual Co-op → tab Leisure",
    text: "Trong Wandering Paths, mở Casual Co-op rồi chuyển sang tab Leisure để thấy các mục kiểu “báo”/sự kiện.",
    image: `${guidePath}/step-2-casual-coop.webp`,
    alt: "Where Winds Meet: Casual Co-op và tab Leisure",
    caption: "Casual Co-op → Leisure (ảnh minh họa)",
  },
  {
    title: "Chọn Eastern Herald → Jianghu News → World’s Digest",
    text: "Chọn Eastern Herald, mở Jianghu News và vào World’s Digest (trang báo hằng ngày).",
    image: `${guidePath}/step-3-worlds-digest.webp`,
    alt: "Where Winds Meet: màn hình World’s Digest (Jianghu News)",
    caption: "Eastern Herald → Jianghu News → World’s Digest (ảnh minh họa)",
  },
  {
    title: "Kéo sang phải đến Prize Quiz và chọn “The Zhao Brothers”",
    text: "Trong World’s Digest, kéo/đi sang phải đến Prize Quiz. Chọn “The Zhao Brothers” để nhận thưởng tốt nhất.",
    image: `${guidePath}/step-4-prize-quiz-answer.webp`,
    alt: "Where Winds Meet: chọn đáp án Prize Quiz (The Zhao Brothers)",
    caption: "Prize Quiz → The Zhao Brothers (ảnh minh họa)",
  },
];

const videos = [
  {
    id: "ptEfn_79KGo",
    title: "Where Winds Meet - Who is Destined to Face the Purple Star Catastrophe? (World's Digest Prize Quiz)",
    note: "Clip xác nhận rất ngắn (thường rank #1 cho đúng keyword này).",
    uploadDate: "2025-12-23T14:16:45-08:00",
  },
];

const faq = [
  {
    q: "Ai là người được định mệnh bắt đối mặt Purple Star catastrophe trong Where Winds Meet?",
    a: "Với câu hỏi Prize Quiz trong World’s Digest, đáp án đúng là: The Zhao Brothers.",
  },
  {
    q: "Zhao brothers ở đây là ai?",
    a: "Hầu hết các hướng dẫn hiểu đây là Zhao Kuangyin và Zhao Guangyi (liên quan storyline Kaifeng).",
  },
  {
    q: "Prize Quiz này nằm ở đâu chính xác?",
    a: "Wandering Paths → Casual Co-op → tab Leisure → Eastern Herald → Jianghu News → World’s Digest → kéo sang phải đến Prize Quiz.",
  },
  {
    q: "Có liên quan Purple Star omen / Jin Zhongyuan không?",
    a: "Khác ngữ cảnh. Một số bài lore dùng “Purple Star” cho chuỗi Jianghu Legacy, nhưng keyword đang trend thường là câu hỏi daily Prize Quiz trong World’s Digest — nơi “The Zhao Brothers” là đáp án đúng.",
  },
];

const relatedLinks = [
  {
    title: "Murong Yuan cha nuôi (một quiz keyword khác)",
    href: "/vn/guides/murong-yuan-adoptive-father",
    note: "Cùng kiểu nội dung: đáp án nhanh + giải thích do bản dịch.",
  },
  {
    title: "An Unholy Prophecy (hướng dẫn Jianghu Legacy)",
    href: "/vn/guides/unholy-prophecy",
    note: "Nếu bạn tìm vì lore sao/điềm báo, không phải vì Prize Quiz.",
  },
  {
    title: "Where Winds Meet videos",
    href: "/vn/videos",
    note: "Xem thêm video trả lời nhanh trong gallery.",
  },
];

export default function PurpleStarCatastropheQuizAnswerPageVn() {
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Purple Star Catastrophe Quiz Answer", item: `${baseUrl}/vn${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/vn${guidePath}#howto`,
      name: "Cách tìm Prize Quiz (WWM) và trả lời Purple Star catastrophe",
      description: "Mở World’s Digest (Eastern Herald) và chọn “The Zhao Brothers” trong Prize Quiz.",
      totalTime: "PT1M",
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
            alt="Ảnh minh họa Prize Quiz (Purple Star catastrophe) trong Where Winds Meet"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-100">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
              Đáp án World’s Digest Prize Quiz
            </div>

            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Ai là người được định mệnh bắt đối mặt Purple Star catastrophe (Where Winds Meet)?
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Keyword này tăng mạnh khi mục <span className="font-semibold text-slate-100">World’s Digest</span> (Eastern Herald) trong{" "}
              <span className="font-semibold text-slate-100">Prize Quiz</span> hỏi:{" "}
              <span className="font-semibold text-slate-100">&quot;Who is destined to face the Purple Star catastrophe?&quot;</span>
              . Bên dưới là đáp án đúng và đường dẫn menu kèm ảnh nếu bạn không tìm thấy phần Prize Quiz.
            </p>

            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80">
              <p className="font-semibold text-amber-100">TL;DR (đáp án nhanh)</p>
              <p className="mt-1">
                Chọn: <span className="font-semibold text-amber-50">The Zhao Brothers</span>{" "}
                <span className="text-amber-200">(Zhao Kuangyin + Zhao Guangyi)</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-purple-100">
              <Link
                href="#answer"
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 hover:border-purple-400 hover:text-purple-50"
              >
                Đi tới đáp án
              </Link>
              <Link
                href="#where-to-find"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-purple-400 hover:text-purple-50"
              >
                Cách tìm quiz (ảnh)
              </Link>
              <Link
                href="#video"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Xem video top
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-inner">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <CdnImage
                      src="/guides/who-is-destined-to-face-the-purple-star-catastrophe/step-4-prize-quiz-answer.webp"
                      alt="Ảnh đáp án Prize Quiz (The Zhao Brothers)"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Purple Star Catastrophe</p>
                    <p className="text-xs text-slate-400">World’s Digest · Prize Quiz · lore Kaifeng</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-4 pt-0 sm:grid-cols-2">
                {quickAnswers.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-inner shadow-black/20"
                  >
                    <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                      <span>{item.icon}</span>
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Vì sao có trang này?</p>
              <p className="mt-2 leading-relaxed">
                Google thường rank một clip YouTube rất ngắn ở vị trí đầu cho câu hỏi này. Trang này cho bạn đáp án ngay lập tức và thêm đường dẫn menu + ảnh để
                bạn nhận thưởng nhanh, không cần mò.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="answer" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="text-2xl font-bold text-slate-50">Đáp án quiz: Purple Star Catastrophe</h2>
        </div>

        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/20 p-5">
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            Đáp án đúng cho câu hỏi{" "}
            <span className="font-semibold text-emerald-50">&quot;Who is destined to face the Purple Star catastrophe?&quot;</span>{" "}
            trong World’s Digest Prize Quiz là: <span className="font-semibold text-emerald-50">The Zhao Brothers</span>.
          </p>
          <p className="mt-2 text-xs text-emerald-100/80">
            Nếu quiz hiển thị tên đầy đủ, hãy tìm Zhao Kuangyin / Zhao Guangyi. Nếu chỉ có một lựa chọn “The Zhao Brothers”, chọn ngay.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Vì sao là Zhao brothers? (spoiler nhẹ)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Prize Quiz thường kiểm tra bạn có theo storyline Kaifeng hay không. Cụm “Purple Star” gợi tới định mệnh, quyền lực và sự chuyển dịch — nên quiz trỏ
              đến Zhao brothers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Hay nhầm: “purple robe” / Tian Ying</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Một số người nhầm “Purple Star” với các hint khác liên quan màu tím và trả lời Tian Ying. Nhưng với câu hỏi Prize Quiz này thì không phải.
            </p>
          </div>
        </div>
      </section>

      <section id="where-to-find" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Cách tìm World’s Digest Prize Quiz (từng bước)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Prize Quiz dễ bị bỏ sót vì nằm ở phía bên phải trong trang World’s Digest. Làm theo các bước dưới đây để tới đúng câu hỏi.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, idx) => (
            <article
              id={`step-${idx + 1}`}
              key={step.title}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-100">
                  Bước {idx + 1}: {step.title}
                </h3>
                <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                  Ảnh
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">{step.text}</p>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <CdnImage
                  src={step.image}
                  alt={step.alt}
                  width={1280}
                  height={720}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-slate-400">{step.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🟣</span>
          <h2 className="text-2xl font-bold text-slate-50">“Catastrophe” vs “Omen” (vì sao có nơi nói khác)</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Nếu bạn vào từ Reddit, bạn gần như chắc chắn đang cần đáp án Prize Quiz. Nhưng một số bài lore dùng từ gần giống cho chuỗi Jianghu Legacy. Phân biệt nhanh:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Nếu bạn đang trả lời daily Prize Quiz</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Chọn <span className="font-semibold text-slate-100">The Zhao Brothers</span>. Đây là câu hỏi kiểm tra storyline Kaifeng.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100">Nếu bạn đang đọc lore điềm báo</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              “Purple Star” có thể được dùng khác trong Jianghu Legacy. Điều đó không đổi đáp án Prize Quiz — chỉ giải thích vì sao vài bài nhắc nhân vật khác.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Related reading:{" "}
          <Link href="/vn/guides/unholy-prophecy" className="text-purple-300 hover:text-purple-200 underline underline-offset-4">
            An Unholy Prophecy
          </Link>
          .
        </p>
      </section>

      <section id="video" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Video top cho keyword này</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Nếu bạn muốn xem nhanh 20 giây cho chắc: đây là clip mà Google thường xếp hạng cao nhất cho keyword này.
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

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
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
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Xem thêm guide khác</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-purple-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-purple-200 transition">{item.title}</h3>
                <span className="text-xs text-purple-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
