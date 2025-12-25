import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const guidePath = "/guides/murong-yuan-adoptive-father";
const ogImage = `${baseUrl}/guides/murong-yuan-adoptive-father/hero.jpg`;

const metaTitle = "Murong Yuan cha nuôi (Đáp án quiz + lore) | Where Winds Meet";
const metaDescription =
  "Bạn đang cần đáp án cho câu hỏi “Murong Yuan adoptive father” trong Where Winds Meet / WWM? Nhiều quiz trong game chấm “Li Jun” (thường là cùng tên với Li Yun / 李筠 trong một số bản dịch), còn phần cốt truyện về Jinming Pool lại xem Murong Yanzhao là cha nuôi chính thức trong Song navy. Trang này tóm gọn đáp án + bảng biến thể tên.";

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
        alt: "Hướng dẫn Murong Yuan (cha nuôi) – đáp án quiz và lore Where Winds Meet",
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
        alt: "Murong Yuan cha nuôi – đáp án quiz và lore Where Winds Meet",
      },
    ],
  },
};

const quickAnswers = [
  { label: "Đáp án nhanh (quiz)", value: "Li Jun (李筠) — thường viết Li Yun", icon: "✅" },
  { label: "Cha nuôi “chính thức” theo cốt truyện", value: "Murong Yanzhao (慕容延钊)", icon: "⚓" },
  { label: "Vì sao dễ nhầm", value: "Có 2 người cha + biến thể bản dịch", icon: "🧩" },
  { label: "Có spoil", value: "Jinming Pool campaign + warship plot", icon: "⚠️" },
  { label: "Boss liên quan", value: "Murong Yuan (Jinming Pool)", icon: "👹" },
  { label: "Lỗi viết phổ biến", value: "Li Yun/Li Jun · Yanzhao/Yuanzhao", icon: "📝" },
];

const nameCheatsheet = [
  {
    label: "Người nuôi dưỡng đầu tiên",
    variants: "Li Yun · Li Jun · 李筠",
    notes: "Nuôi Murong Yuan từ nhỏ và đặt tên “Yuan” (liên quan biểu tượng diều).",
  },
  {
    label: "Cha nuôi về sau (Song navy)",
    variants: "Murong Yanzhao · 慕容延钊",
    notes: "Nhận nuôi về sau; được xem là cha nuôi chính thức trong môi trường quân đội Song.",
  },
  {
    label: "Sai chính tả / biến thể",
    variants: "Murong Yuanzhao",
    notes: "Hay gặp trong bài viết cộng đồng; đa số đang nói về Murong Yanzhao.",
  },
];

const quizTips = [
  "Nếu bạn đang làm quiz/trivia trong game, đáp án thường được chấm đúng là “Li Jun”.",
  "Nếu bạn chọn “Murong Yanzhao” mà bị sai, quiz đó có thể đang hỏi người cha đầu tiên (Li Yun/李筠) chứ không phải cha nuôi về sau trong Song navy.",
  "Li Yun và Li Jun thường là cùng một người trong các bản dịch; tên tiếng Trung hay thấy là 李筠.",
];

const storyBeats = [
  {
    title: "Vì sao lại có 2 người cha trong lore?",
    text: "Backstory của Murong Yuan có một lần “chuyển giao”: một người cứu/nuôi cô từ bé, và một người nhận nuôi chính thức về sau khi chính trị trở nên nguy hiểm. Đó là lý do nhiều người tranh cãi ai mới là “cha nuôi” khi chỉ nhìn một đoạn cốt truyện.",
  },
  {
    title: "Li Yun / Li Jun (李筠): người cha đầu tiên",
    text: "Nhiều tóm tắt kể rằng cô được tìm thấy khi còn bé sau biến cố và được tướng Li Yun (một số bản dịch ghi Li Jun) nuôi dưỡng. Ông không phải cha ruột, nhưng đóng vai trò cha nuôi đầu tiên: nuôi dạy và đặt tên “Yuan”, thường gắn với biểu tượng diều (鸢).",
  },
  {
    title: "Murong Yanzhao (慕容延钊): cha nuôi về sau trong navy",
    text: "Khi tình thế chính trị của Li Yun sụp đổ, ông gửi Murong Yuan cho đồng minh Murong Yanzhao. Từ đó, Murong Yanzhao được xem là cha nuôi chính thức trong bối cảnh quân đội Song – vì vậy các bài lore về Jinming Pool thường nhắc đến ông.",
  },
  {
    title: "Vì sao Jinming Pool khiến mọi người nhầm (có spoil nhẹ)",
    text: "Jinming Pool là nơi mâu thuẫn và hiểu lầm của Murong Yuan bùng lên. Nhiều người gặp Murong Yanzhao ở đây và nghĩ ông là cha nuôi duy nhất. Nhưng người nuôi dưỡng đầu tiên (Li Yun/李筠) là một người khác – và nhiều quiz lại đang hỏi đúng mối quan hệ đầu tiên đó.",
  },
];

const videos = [
  {
    id: "LjJdbymBE1s",
    title: "Where Winds Meet - Who is Murong Yuan's Adoptive Father? (World's Digest Prize Quiz)",
    note: "Video trả lời đúng nhu cầu quiz; khớp truy vấn đang tăng.",
  },
  {
    id: "AeEYkE0Jqwo",
    title: "Who is Murong Yuan's adoptive father?",
    note: "Một video ngắn khác để đối chiếu nhanh.",
  },
  {
    id: "YAkkRlICQ2s",
    title: "Where Winds Meet - Murong Yuan - Legend Difficulty",
    note: "Gameplay boss; hữu ích nếu bạn tìm trang này từ Jinming Pool.",
  },
  {
    id: "nn18UbzQZTA",
    title: "I swear Murong Yuan doesn’t let you breathe",
    note: "Clip ngắn thường rank cho các truy vấn về Murong Yuan.",
  },
];

const faq = [
  {
    q: "Cha nuôi của Murong Yuan trong Where Winds Meet là ai?",
    a: "Tùy ngữ cảnh. Với nhiều câu hỏi quiz trong game, đáp án thường là “Li Jun” (thường là cùng người được viết là Li Yun / 李筠). Trong phần cốt truyện liên quan Jinming Pool và Song navy, Murong Yanzhao lại được xem là cha nuôi chính thức.",
  },
  {
    q: "Li Jun có phải là Li Yun không?",
    a: "Thường là có. Nhiều nguồn cộng đồng xem “Li Jun” và “Li Yun” chỉ là biến thể dịch/phiên âm (hay thấy dạng tiếng Trung 李筠). Nếu quiz của bạn chấm Li Jun, hãy chọn Li Jun để chắc chắn.",
  },
  {
    q: "Vì sao có nơi viết Murong Yuanzhao?",
    a: "Đa số là lỗi viết/biến thể của Murong Yanzhao. Khi dịch từ tiếng Trung, tên rất dễ bị trộn lẫn trong bài cộng đồng.",
  },
  {
    q: "Trang này có spoil không?",
    a: "Trang cố giữ mức “spoiler-light”, nhưng vẫn nhắc đến bối cảnh Jinming Pool vì đây là nơi người chơi hay gặp câu hỏi cha nuôi + warship plot.",
  },
];

const relatedLinks = [
  {
    title: "Boss guide Murong Yuan (Jinming Pool)",
    href: "/vn/guides/bosses/murong-yuan",
    note: "Nếu bạn đến từ trận đánh: cơ chế, chủ đề, và bối cảnh encounter.",
  },
  {
    title: "Tổng quan Sects (bối cảnh Mo Sect)",
    href: "/vn/guides/sects",
    note: "Đọc thêm nếu bạn muốn nối lore của cô ấy với Mo Sect / Lu School.",
  },
  {
    title: "Where Winds Meet videos",
    href: "/vn/videos",
    note: "Thư viện video embed lớn hơn nếu bạn thích xem hơn đọc.",
  },
];

export default function MurongYuanAdoptiveFatherViPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaTitle,
      description: metaDescription,
      url: `${baseUrl}/vn${guidePath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Murong Yuan cha nuôi", item: `${baseUrl}/vn${guidePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
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
      description: `${video.note} (Nhúng trên wherewindsmeet.org)`,
      thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: "2025-01-01",
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    })),
  ];

  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-10">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/guides/murong-yuan-adoptive-father/hero.jpg"
            alt="Hình nền theo chủ đề Murong Yuan / Jinming Pool"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Đáp án quiz + bảng biến thể tên
            </div>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Murong Yuan&apos;s adoptive father (cha nuôi) trong Where Winds Meet là ai?
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Từ khóa này tăng mạnh khi quiz hỏi <span className="font-semibold text-slate-100">&quot;Murong Yuan adoptive father&quot;</span>.
              Vấn đề: game và bài tóm tắt cộng đồng có thể dùng 2 người cha khác nhau tùy cảnh/bản dịch. Trang này đưa đáp án quiz trước, rồi giải thích lore kèm
              bảng tên để bạn không bị dính bẫy phiên âm.
            </p>
            <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-50/80">
              <p className="font-semibold text-amber-100">TL;DR (chọn đúng đáp án)</p>
              <p className="mt-1">
                Quiz thường chấm: <span className="font-semibold text-amber-50">Li Jun</span>. Lore/Jinming Pool:{" "}
                <span className="font-semibold text-amber-50">Murong Yanzhao</span>. Nếu bạn chỉ cần một cú click, chọn đáp án quiz.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-emerald-200">
              <Link
                href="#quiz-answer"
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
              >
                Tới đáp án quiz
              </Link>
              <Link
                href="#name-variants"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
              >
                Bảng biến thể tên
              </Link>
              <Link
                href="#videos"
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
              >
                Xem video
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-inner">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <Image
                      src="/guides/murong-yuan-adoptive-father/murong-yuan.jpg"
                      alt="Chân dung Murong Yuan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Murong Yuan</p>
                    <p className="text-xs text-slate-400">Jinming Pool · mechanist · warship arc</p>
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
              <p className="font-semibold text-slate-100">Vì sao nên đọc trang này?</p>
              <p className="mt-2 leading-relaxed">
                Google thường đẩy video YouTube lên đầu cho truy vấn này. Trang này gom đáp án (để bạn xong nhanh) và lưu phần giải thích tại đây nếu bạn gặp
                mâu thuẫn do bản dịch/phiên âm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz-answer" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="text-2xl font-bold text-slate-50">Đáp án quiz: Murong Yuan adoptive father</h2>
        </div>
        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/20 p-5">
          <p className="text-sm text-emerald-50/90 leading-relaxed">
            Nếu bạn chỉ cần đáp án 1 dòng cho quiz, hãy chọn:{" "}
            <span className="font-semibold text-emerald-50">Li Jun</span>{" "}
            <span className="text-emerald-200">(thường là cùng tên với Li Yun / 李筠)</span>.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {quizTips.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-300">-</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Mẹo: nếu bạn đang farm điểm quiz, hãy ưu tiên tên mà client của bạn chấm đúng. Trang này chủ yếu giải thích mâu thuẫn lore + phiên âm.
        </p>
      </section>

      <section id="name-variants" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📝</span>
          <h2 className="text-2xl font-bold text-slate-50">Bảng biến thể tên (Li Yun vs Li Jun, Yanzhao vs Yuanzhao)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Bạn sẽ thấy nhiều cách viết khác nhau trên video, wiki, và Reddit. Bảng này giúp bạn map nhanh các tên:
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Vai trò</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Biến thể tên</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">Ghi nhớ</th>
              </tr>
            </thead>
            <tbody className="bg-slate-950/60">
              {nameCheatsheet.map((row) => (
                <tr key={row.label} className="border-t border-slate-800">
                  <td className="px-4 py-3 text-slate-100 font-semibold">{row.label}</td>
                  <td className="px-4 py-3 text-slate-200">{row.variants}</td>
                  <td className="px-4 py-3 text-slate-300">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">📚</span>
          <h2 className="text-2xl font-bold text-slate-50">Giải thích cốt truyện (spoiler-light)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {storyBeats.map((beat) => (
            <div key={beat.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-slate-100">{beat.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{beat.text}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Nếu bạn muốn đọc về boss (combat) thay vì lore, xem{" "}
          <Link href="/vn/guides/bosses/murong-yuan" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
            Murong Yuan boss guide
          </Link>
          .
        </p>
      </section>

      <section id="videos" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎥</span>
          <h2 className="text-2xl font-bold text-slate-50">Các video hay rank cho truy vấn này</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          Với truy vấn <span className="font-semibold text-slate-100">“where winds meet murong yuan adoptive father”</span>, SERP thường ưu tiên YouTube.
          Các video dưới đây giúp bạn xác nhận đáp án nhanh, sau đó đọc phần giải thích ngay trên trang.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
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
              <p className="text-sm font-medium text-slate-100">{video.title}</p>
              <p className="text-xs leading-relaxed text-slate-300">{video.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h2 className="text-2xl font-bold text-slate-50">Xem thêm guide Where Winds Meet</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">{item.title}</p>
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
