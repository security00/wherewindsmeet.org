import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import LightboxGallery from "@/components/LightboxGallery";
import FallbackImage from "@/components/FallbackImage";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

// Base path without language prefix (hreflang helper will add /vn or /de automatically).
const basePath = "/guides/the-great-faceologist";
const pagePath = `/vn${basePath}`;

const images = {
  hero: cdn("/guides/the-great-faceologist/hero.webp"),
  openAppearance: cdn("/guides/the-great-faceologist/step-1-open-appearance.webp"),
  appearanceMenu: cdn("/guides/the-great-faceologist/step-2-switch-appearance-tab.webp"),
  editFace: cdn("/guides/the-great-faceologist/step-3-edit-face.webp"),
  choosePreset: cdn("/guides/the-great-faceologist/step-4-choose-preset.webp"),
  preview: cdn("/guides/the-great-faceologist/step-5-preview.webp"),
  upload: cdn("/guides/the-great-faceologist/step-6-upload-to-gallery.webp"),
  titleDesc: cdn("/guides/the-great-faceologist/step-7-title-description.webp"),
  tag: cdn("/guides/the-great-faceologist/step-8-select-event-tag.webp"),
  tagConfirm: cdn("/guides/the-great-faceologist/step-9-publish.webp"),
  dailyCap: cdn("/guides/the-great-faceologist/daily-upload-cap.webp"),
};

// Local fallback keeps the original public path so CDN failures can fall back to on-host assets.
const fallbackImages = {
  hero: "/guides/the-great-faceologist/hero.webp",
  openAppearance: "/guides/the-great-faceologist/step-1-open-appearance.webp",
  appearanceMenu: "/guides/the-great-faceologist/step-2-switch-appearance-tab.webp",
  editFace: "/guides/the-great-faceologist/step-3-edit-face.webp",
  choosePreset: "/guides/the-great-faceologist/step-4-choose-preset.webp",
  preview: "/guides/the-great-faceologist/step-5-preview.webp",
  upload: "/guides/the-great-faceologist/step-6-upload-to-gallery.webp",
  titleDesc: "/guides/the-great-faceologist/step-7-title-description.webp",
  tag: "/guides/the-great-faceologist/step-8-select-event-tag.webp",
  tagConfirm: "/guides/the-great-faceologist/step-9-publish.webp",
  dailyCap: "/guides/the-great-faceologist/daily-upload-cap.webp",
};

export const metadata: Metadata = {
  title: "el gran faceologo – Cách tham gia (12/2025)",
  description:
    "el gran faceologo (12/2025) trong Where Winds Meet: điều kiện, đường upload đúng, cách tick tag sự kiện, giới hạn mỗi ngày, và lỗi thường gặp.",
  alternates: buildHreflangAlternates(basePath, { canonicalLanguage: "vi" }),
  openGraph: {
    title: "el gran faceologo – Cách tham gia (12/2025)",
    description:
      "Đi đúng đường cho el gran faceologo: Appearance → Edit Face, rồi tick tag [The Great Faceologist] trước khi publish để bài được tính cho sự kiện.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: images.hero,
        width: 1317,
        height: 741,
        alt: "Sự kiện el gran faceologo trong Where Winds Meet",
      },
      {
        url: `${baseUrl}${fallbackImages.hero}`,
        width: 1317,
        height: 741,
        alt: "Sự kiện el gran faceologo (ảnh dự phòng)",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "el gran faceologo – Cách tham gia (12/2025)",
    description:
      "Cách nộp bài đúng cho el gran faceologo: upload từ Edit Face và nhớ tick tag sự kiện.",
    images: [images.hero, `${baseUrl}${fallbackImages.hero}`],
  },
};

const quickFacts = [
  { label: "Thời gian", value: "11–31/12/2025 (UTC)" },
  { label: "Yêu cầu", value: "Level 5 + hoàn thành chương chính Qinghe “Another New Wing”" },
  { label: "Loại sự kiện", value: "Thi tạo mặt / makeup (giới hạn thời gian)" },
  { label: "Nộp ở đâu", value: "Appearance → Edit Face / Makeup → Preview → Upload to Gallery" },
  { label: "Thế nào mới được tính", value: "Upload phải tick tag [The Great Faceologist]" },
  { label: "Giới hạn mỗi ngày", value: "Khoảng ~5 bài/ngày (dùng chung giới hạn upload ngoại hình)" },
];

const tlDr = [
  "Mở Appearance từ menu chính, rồi chuyển sang tab Appearance ở phía dưới (không phải Outfits).",
  "Vào Edit Face (hoặc Makeup), chọn/chỉnh preset, rồi Preview và Upload to Gallery.",
  "Trong hộp upload, nhớ tick tag [The Great Faceologist] ngay dưới ô mô tả trước khi publish.",
  "Upload từ Outfit gallery sẽ không được tính cho sự kiện này.",
];

const pcSteps = [
  {
    title: "Mở Appearance (wardrobe)",
    desc: "Nhấn Esc → Appearance để vào tủ đồ.",
    img: images.openAppearance,
    fallbackImg: fallbackImages.openAppearance,
    alt: "Mở menu Appearance từ màn hình chính",
  },
  {
    title: "Chuyển sang tab Appearance (ngoại hình gốc)",
    desc: "Trong wardrobe, bấm nút Appearance ở phía dưới để chuyển từ outfit sang ngoại hình gốc của nhân vật.",
    img: images.appearanceMenu,
    fallbackImg: fallbackImages.appearanceMenu,
    alt: "Chuyển sang Appearance tab trong wardrobe",
  },
  {
    title: "Vào Edit Face",
    desc: "Bấm Edit Face (thường ở góc dưới bên phải). Camera sẽ zoom vào mặt và mở preset/slider.",
    img: images.editFace,
    fallbackImg: fallbackImages.editFace,
    alt: "Nút Edit Face trong Appearance editor",
  },
  {
    title: "Chọn hoặc chỉnh preset",
    desc: "Chọn preset mặt hoặc chuyển qua Makeup để chỉnh chi tiết. Bạn có thể lưu thành preset mới trước khi upload.",
    img: images.choosePreset,
    fallbackImg: fallbackImages.choosePreset,
    alt: "Chọn hoặc chỉnh preset mặt/makeup",
  },
  {
    title: "Preview để căn khung hình",
    desc: "Bấm Preview và căn khung nhân vật. Ảnh preview chính là ảnh sẽ xuất hiện trong gallery.",
    img: images.preview,
    fallbackImg: fallbackImages.preview,
    alt: "Preview và căn camera trước khi upload",
  },
  {
    title: "Upload to Gallery",
    desc: "Nhấn R (hoặc theo nút gợi ý trên UI) để mở hộp thoại upload gallery.",
    img: images.upload,
    fallbackImg: fallbackImages.upload,
    alt: "Nút Upload to Gallery",
  },
  {
    title: "Nhập title/description",
    desc: "Đặt tiêu đề và mô tả (tuỳ chọn). Người chơi khác sẽ thấy nội dung này khi duyệt gallery.",
    img: images.titleDesc,
    fallbackImg: fallbackImages.titleDesc,
    alt: "Nhập tiêu đề và mô tả khi upload",
  },
  {
    title: "Tick tag sự kiện",
    desc: "Ngay dưới ô mô tả, bấm tag [The Great Faceologist] để nó được highlight. Đừng giả định nó auto tick.",
    img: images.tag,
    fallbackImg: fallbackImages.tag,
    alt: "Tick tag [The Great Faceologist] trong hộp upload",
  },
  {
    title: "Publish",
    desc: "Nhấn phím publish (mặc định Space). Bài của bạn sẽ được tính cho sự kiện.",
    img: images.tagConfirm,
    fallbackImg: fallbackImages.tagConfirm,
    alt: "Xác nhận tag đã được chọn trước khi publish",
  },
];

const consoleSteps = [
  "Mở menu pause → Appearance để vào wardrobe.",
  "Chọn Appearance ở cuối danh sách để chuyển từ outfits sang ngoại hình gốc.",
  "Chọn Edit Face. Nếu không thấy, thoát ra vào lại hoặc restart game.",
  "Chọn preset mặt/makeup → Preview → Upload to Gallery.",
  "Cuộn xuống trong hộp upload để tìm tag [The Great Faceologist] (nằm giữa mô tả và checkbox riêng tư), rồi tick để đổi trạng thái.",
  "Publish. Nếu tag chỉ hiện trong tab Makeup, hãy nộp bài từ đó.",
];

const issues = [
  {
    title: "Không thấy tag [The Great Faceologist]",
    fixes: [
      "Thử upload từ tab Makeup trong Edit Face (nhiều người chỉ thấy tag ở đây).",
      "Thoát hẳn Appearance rồi vào lại theo đường Esc/Pause → Appearance → Edit Face.",
      "Restart client (tag đôi khi không load ngay sau update).",
      "Đảm bảo bạn không upload từ Outfit gallery.",
    ],
  },
  {
    title: "Thông báo “This work is already applied and cannot be uploaded”",
    fixes: [
      "Chỉnh nhẹ 1 slider/màu và lưu thành preset mới, rồi upload bản đó.",
      "Chuyển sang preset khác để upload, sau đó đổi lại nếu muốn dùng preset cũ để chơi.",
      "Lỗi này chỉ chặn re-upload 1 preset y hệt, không ảnh hưởng điều kiện sự kiện.",
    ],
  },
  {
    title: "Bị chạm giới hạn upload mỗi ngày",
    fixes: [
      "Giới hạn dùng chung với upload ngoại hình khác; thường khoảng 5 bài/ngày.",
      "Luôn kiểm tra tag sự kiện đã được highlight trước khi publish để khỏi phí lượt.",
      "Dùng Preview để thử ánh sáng/khung hình trước khi đăng thật.",
    ],
    img: images.dailyCap,
    fallbackImg: fallbackImages.dailyCap,
    alt: "Thông báo giới hạn upload mỗi ngày",
  },
];

const faq = [
  {
    q: "Bắt đầu sự kiện el gran faceologo ở đâu?",
    a: "Nếu bạn thấy Event Center trong game thì vào đó, hoặc nộp theo luồng Gallery/Upload từ Appearance → Edit Face. Quan trọng nhất là trước khi publish phải tick đúng tag sự kiện.",
  },
  {
    q: 'Bài nào được tính là bài dự thi "el gran faceologo"?',
    a: "Chỉ các bài upload trong mục Appearance (mặt/makeup) đăng từ Edit Face (hoặc tab Makeup) mới được tính, và bạn phải tick tag [The Great Faceologist] trước khi publish.",
  },
  {
    q: "Vì sao không thấy tag [The Great Faceologist]?",
    a: "Thử upload từ tab Makeup, thoát hẳn Appearance rồi vào lại, hoặc restart game. Đồng thời kiểm tra bạn không đăng từ Outfit gallery.",
  },
  {
    q: "Mỗi ngày upload được bao nhiêu bài el gran faceologo?",
    a: "Giới hạn ngày dùng chung với các lượt upload ngoại hình khác và khá thấp (thường khoảng 5). Hãy chắc chắn đã tick tag để khỏi phí lượt vì đăng nhầm bài không tag.",
  },
];

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: metadata.title,
  description: metadata.description,
  url: `${baseUrl}${pagePath}`,
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Hướng dẫn", item: `${baseUrl}/vn/guides` },
    { "@type": "ListItem", position: 3, name: "el gran faceologo", item: `${baseUrl}${pagePath}` },
  ],
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cách nộp bài sự kiện el gran faceologo (Where Winds Meet)",
  description:
    "Đi đúng đường: Appearance → Edit Face/Makeup → Preview → Upload to Gallery → tick [The Great Faceologist] → Publish.",
  image: [images.hero],
  inLanguage: "vi-VN",
  url: `${baseUrl}${pagePath}`,
  step: pcSteps.map((step) => ({
    "@type": "HowToStep",
    name: step.title,
    text: step.desc,
    image: step.img,
  })),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "vi-VN",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const structuredData = [webPageStructuredData, breadcrumbStructuredData, howToStructuredData, faqStructuredData];

export default function GreatFaceologistPageVn() {
  const pcScreenshotItems = pcSteps
    .filter((s) => "img" in s && Boolean(s.img))
    .map((s, idx) => ({
      src: s.img as string,
      fallbackSrc: ("fallbackImg" in s ? (s.fallbackImg as string | undefined) : undefined) ?? undefined,
      alt: (s.alt as string | undefined) ?? s.title,
      caption: `Bước ${idx + 1}: ${s.title}`,
    }));

  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg3.webp"
            alt="Phông nền wuxia"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Sự kiện giới hạn thời gian</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Cập nhật 12/2025 · Có hướng dẫn tick tag bên dưới
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              el gran faceologo – Cách tham gia, tick tag và nộp bài
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              el gran faceologo là sự kiện thi tạo mặt/makeup trong Where Winds Meet. Bài của bạn chỉ được tính nếu đăng từ{" "}
              <strong>Edit Face</strong> và tự tick đúng <strong>[The Great Faceologist]</strong>.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Appearance → Edit Face/Makeup → Preview → Upload → tick tag → Publish.</li>
              <li>• Upload outfit sẽ không được tính.</li>
              <li>• Giới hạn mỗi ngày thấp, nên đừng phí lượt vì quên tick tag.</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/vn/guides/cosmetics"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Cosmetics & ngoại hình
              </Link>
              <Link
                href="/vn/guides/new-players"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Lộ trình tân thủ
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner">
            <FallbackImage
              src={images.hero}
              fallbackSrc={fallbackImages.hero}
              alt="Ảnh sự kiện el gran faceologo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Thông tin nhanh</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quickFacts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="text-sm text-slate-200 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TL;DR */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">TL;DR – Đi đúng đường để bài được tính</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {tlDr.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </section>

      {/* PC Steps */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-slate-50">Cách nộp bài trên PC</h2>
          <span className="text-xs text-slate-500">Đảm bảo bạn đang ở Edit Face, không phải Outfit gallery</span>
        </div>
        <ol className="space-y-4 list-decimal list-inside text-sm text-slate-300">
          {pcSteps.map((step) => (
            <li key={step.title}>
              <p className="font-semibold text-slate-50">{step.title}</p>
              <p className="text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm font-semibold text-slate-50">Ảnh minh họa (bấm để phóng to)</p>
            <p className="text-xs text-slate-400">Mẹo: cuộn / pinch để zoom, kéo để pan.</p>
          </div>
          <div className="mt-3">
            <LightboxGallery items={pcScreenshotItems} columns={2} />
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-900/20 p-4 text-xs text-amber-100">
          Tip: Nếu không thấy tag, hãy chuyển sang tab <strong>Makeup</strong> trong Edit Face và upload từ đó. Nhiều người báo là
          checkbox chỉ hiện ở đường này.
        </div>
      </section>

      {/* Console Steps */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Cách nộp bài trên Console</h2>
        <ol className="space-y-2 list-decimal list-inside text-sm text-slate-300">
          {consoleSteps.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </section>

      {/* Outfit Gallery Explanation */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Vì sao upload Outfit không được tính?</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Where Winds Meet tách riêng bài đăng <strong>Outfit</strong> và <strong>Appearance</strong> (mặt/makeup). Sự kiện{" "}
          <strong>el gran faceologo</strong> chỉ nhận Appearance, nên tag sự kiện sẽ không xuất hiện ở màn hình upload outfit.
        </p>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-200">
          Luôn nộp theo đường: <strong>Appearance → Edit Face/Makeup → Upload to Gallery</strong>.
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">FAQ – el gran faceologo</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-50">{item.q}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Issues */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Lỗi thường gặp & cách xử lý</h2>
        <div className="space-y-4">
          {issues.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                {item.fixes.map((fix) => (
                  <li key={fix}>• {fix}</li>
                ))}
              </ul>
              {"img" in item && item.img ? (
                <div className="mt-3">
                  <LightboxGallery
                    items={[
                      {
                        src: item.img,
                        fallbackSrc: ("fallbackImg" in item ? (item.fallbackImg as string | undefined) : undefined) ?? undefined,
                        alt: ("alt" in item && item.alt) ? item.alt : item.title,
                        caption: "Ảnh minh họa (bấm để phóng to)",
                      },
                    ]}
                    columns={2}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Hướng dẫn liên quan</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/vn/guides/cosmetics" className="underline underline-offset-4 hover:text-emerald-100">
              Cosmetics & Appearance – tóc, outfit và mẹo chỉnh ngoại hình
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/free-outfits" className="underline underline-offset-4 hover:text-emerald-100">
              Trang phục miễn phí – mở khoá ngoại hình 0 chi phí qua event
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/new-players" className="underline underline-offset-4 hover:text-emerald-100">
              Lộ trình tân thủ – điều kiện level và tiến độ ban đầu
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
