import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import LightboxGallery from "@/components/LightboxGallery";
import VoucherCalculator from "@/app/(en)/guides/flicker-of-faces/VoucherCalculator";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import FallbackImage from "@/components/FallbackImage";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

// Base path without language prefix (hreflang helper will add /vn or /de automatically).
const basePath = "/guides/flicker-of-faces";
const pagePath = `/vn${basePath}`;

const images = {
  hero: cdn("/guides/flicker-of-faces/flicker-of-faces-preview.png"),
  price: cdn("/guides/flicker-of-faces/flicker-of-faces-price.png"),
  voucherTooltip: cdn("/guides/flicker-of-faces/flicker-of-faces-voucher-tooltip.png"),
  voucherItem: cdn("/guides/flicker-of-faces/flicker-of-faces-voucher-item-details.jpg"),
  verseOfWinter: cdn("/guides/flicker-of-faces/verse-of-winter-event.png"),
  makeupBugPresetSwitch: cdn("/guides/flicker-of-faces/makeup-bug-preset-switch.png"),
};

// Local fallback keeps the original public path so CDN failures can fall back to on-host assets.
const fallbackImages = {
  hero: "/guides/flicker-of-faces/flicker-of-faces-preview.png",
  price: "/guides/flicker-of-faces/flicker-of-faces-price.png",
  voucherTooltip: "/guides/flicker-of-faces/flicker-of-faces-voucher-tooltip.png",
  voucherItem: "/guides/flicker-of-faces/flicker-of-faces-voucher-item-details.jpg",
  verseOfWinter: "/guides/flicker-of-faces/verse-of-winter-event.png",
  makeupBugPresetSwitch: "/guides/flicker-of-faces/makeup-bug-preset-switch.png",
};

export const metadata: Metadata = {
  title: "Flicker of Faces: giá, voucher, preview | Where Winds Meet",
  description:
    "Flicker of Faces (Where Winds Meet): preview trang phục, giá tham khảo 2580 pearls, giờ lên shop 25–26/12/2025 và calculator voucher 10% × tối đa 5.",
  alternates: buildHreflangAlternates(basePath, { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Flicker of Faces: giá, voucher, preview | Where Winds Meet",
    description:
      "Preview trang phục, giá tham khảo 2580 pearls, giờ lên shop 25–26/12/2025 và cách cộng dồn voucher (10% × tối đa 5).",
    url: `${baseUrl}${pagePath}`,
    siteName: "Where Winds Meet Hub",
    images: [{ url: images.hero, width: 796, height: 790, alt: "Flicker of Faces outfit preview (male/female)" }],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flicker of Faces: giá, voucher, preview | Where Winds Meet",
    description:
      "Preview trang phục, giá tham khảo 2580 pearls, giờ lên shop 25–26/12/2025 và cách cộng dồn voucher (10% × tối đa 5).",
    images: [images.hero],
  },
};

const quickFacts = [
  { label: "Loại", value: "Shop Appearance (trang phục)" },
  { label: "Tên trong game (EN)", value: "Flicker of Faces" },
  { label: "Giờ lên shop", value: "25/12/2025 (nhiều patch notes) — một số region hiển thị 26/12 theo giờ local" },
  { label: "Giá (ảnh cộng đồng)", value: "2580 Pearls — có thể khác theo server/region" },
  { label: "Voucher", value: "Flicker of Faces Voucher (mỗi cái -10%, cộng dồn tối đa 5 cho 1 item)" },
  { label: "Giảm tối đa", value: "Tối đa 50% (10% × 5)" },
];

const answerCards = [
  {
    label: "Giờ lên shop",
    value: (
      <>
        <strong>25/12/2025</strong> trong nhiều patch notes (một số server hiển thị <strong>26/12</strong> theo giờ local).
      </>
    ),
    hint: "Ưu tiên tooltip voucher để lấy giờ chính xác theo server của bạn.",
  },
  {
    label: "Giá tham khảo",
    value: (
      <>
        <strong>2580 pearls</strong> (ảnh cộng đồng).
      </>
    ),
    hint: "Hãy kiểm tra giá trong shop của bạn trước khi mua.",
  },
  {
    label: "Cộng dồn voucher",
    value: (
      <>
        <strong>-10% mỗi voucher</strong>, cộng dồn tối đa <strong>5</strong> cho 1 item.
      </>
    ),
    hint: "Giảm tối đa 50% nếu server của bạn cho cộng đủ.",
  },
  {
    label: "Voucher “không dùng được”?",
    value: <>Thường là shop chưa mở bán item đó.</>,
    hint: "Đợi đến khi voucher hiện dòng “available in the Shop from … (Local time)”.",
  },
];

const faq = [
  {
    q: "Flicker of Faces trong Where Winds Meet là gì?",
    a: "Flicker of Faces là một Shop Appearance (trang phục) được đưa lên shop trong thời gian giới hạn (nhiều patch notes ghi 12/2025). Người chơi cũng có thể nhận item “Flicker of Faces Voucher” để giảm giá khi trang phục được mở bán trong shop.",
  },
  {
    q: "Flicker of Faces trông như thế nào?",
    a: "Ảnh preview cộng đồng cho thấy một bộ trang phục tông đỏ với cả phiên bản nam và nữ (mặt trước/mặt sau). Bạn có thể xem trực tiếp các ảnh trong trang này để đối chiếu nhanh.",
  },
  {
    q: "Flicker of Faces giá bao nhiêu?",
    a: "Ảnh chụp cộng đồng cho thấy mức giá 2580 Pearls. Giá có thể khác tùy server/region, vì vậy hãy xác nhận trên màn hình shop trong game trước khi mua.",
  },
  {
    q: "Voucher Flicker of Faces hoạt động ra sao?",
    a: "Mỗi voucher là một coupon giảm 10% cho ngoại hình Flicker of Faces. Tooltip cho biết có thể cộng dồn tối đa 5 voucher cho 1 item (tối đa 50%). Thường bạn chỉ dùng được voucher khi Flicker of Faces đã thực sự lên shop.",
  },
  {
    q: "Vì sao mình có voucher nhưng shop chưa hiện gì?",
    a: "Tooltip voucher có dòng “available in the Shop from … (Local time)”. Trước thời điểm đó, shop sẽ chưa hiện trang mua Flicker of Faces (nên nhìn như voucher không dùng được).",
  },
  {
    q: "“Flicker of Faces” có phải là lỗi flicker mặt/makeup không?",
    a: "Không. “Flicker of Faces” là tên một Shop Appearance (trang phục). Còn một số người tìm ‘flicker of faces’ khi mặt/makeup bị đổi giữa creator và gameplay. Nếu bạn gặp lỗi đó, xem mục workaround bên dưới.",
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
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
    { "@type": "ListItem", position: 2, name: "Hướng dẫn", item: `${baseUrl}/vn/guides` },
    { "@type": "ListItem", position: 3, name: "Flicker of Faces", item: `${baseUrl}${pagePath}` },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "vi-VN",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const structuredData = [webPageStructuredData, breadcrumbStructuredData, faqStructuredData];

export default function FlickerOfFacesPageVn() {
  return (
    <article className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt="Phông nền Where Winds Meet"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Ngoại hình shop (cosmetic)</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Cập nhật 12/2025 · Ghi chú voucher + giờ lên shop
            </div>
            <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Where Winds Meet <span className="text-emerald-200">Flicker of Faces</span> – Preview, giá, voucher
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Khi bạn tìm <strong>“flicker of faces where winds meet”</strong>, thường sẽ rơi vào 1 trong 2 ý: (1){" "}
              <strong>Flicker of Faces</strong> (Shop Appearance/trang phục) và voucher giảm giá, hoặc (2) lỗi mặt/makeup bị{" "}
              “flicker”. Trang này cover cả hai — bắt đầu với outfit + voucher.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="#preview"
                className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/80"
              >
                Preview trang phục
              </a>
              <a
                href="#videos"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Video
              </a>
              <a
                href="#voucher-calculator"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Voucher + bộ tính
              </a>
              <a
                href="#makeup-bug"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Sửa lỗi flicker mặt/makeup
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {answerCards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">{card.label}</p>
                  <p className="mt-1 text-sm text-slate-100 leading-relaxed">{card.value}</p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{card.hint}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/vn/guides/cosmetics"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Guide cosmetics & ngoại hình
              </Link>
              <Link
                href="/vn/guides/the-great-faceologist"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
              >
                Editor mặt & gallery (The Great Faceologist)
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner">
            <FallbackImage
              src={images.hero}
              fallbackSrc={fallbackImages.hero}
              alt="Ảnh preview Flicker of Faces"
              fill
              className="object-contain p-3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section id="quick-facts" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Thông tin nhanh</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-wide text-emerald-300">{fact.label}</p>
              <p className="mt-1 text-sm text-slate-100 leading-relaxed">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview gallery */}
      <section id="preview" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Flicker of Faces trông như thế nào?</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Các screenshot dưới đây được tổng hợp từ preview cộng đồng và tooltip voucher trong game. Dùng để nhận diện nhanh outfit
          (bản nam/nữ) và kiểm tra rule voucher theo server của bạn.
        </p>
        <LightboxGallery
          items={[
            {
              src: images.hero,
              fallbackSrc: fallbackImages.hero,
              alt: "Ảnh preview Flicker of Faces (nam/nữ, trước/sau)",
              caption: "Preview outfit (cộng đồng)",
            },
            {
              src: images.price,
              fallbackSrc: fallbackImages.price,
              alt: "Ảnh giá Flicker of Faces 2580 pearls (cộng đồng)",
              caption: "Giá tham khảo (cộng đồng)",
            },
            {
              src: images.verseOfWinter,
              fallbackSrc: fallbackImages.verseOfWinter,
              alt: "Màn hình Verse of Winter với tooltip voucher Flicker of Faces",
              caption: "Tooltip voucher (Verse of Winter)",
            },
            {
              src: images.voucherItem,
              fallbackSrc: fallbackImages.voucherItem,
              alt: "Chi tiết item Flicker of Faces Voucher (10% và thời gian shop)",
              caption: "Chi tiết voucher (trong túi)",
            },
          ]}
          columns={2}
        />
      </section>

      {/* Videos */}
      <section id="videos" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Video (tùy chọn)</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Nếu bạn thích xem video hơn: các video này giúp bạn hiểu shop rotation, outfit giới hạn và cách event track theo mùa
          hoạt động. Video chỉ load khi bạn bấm play.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-50">Outfits & hairstyles sắp ra</h3>
            <LiteYouTubeEmbed
              videoId="DBzCeK5Uoxs"
              title="ALL UPCOMING FREE & PAID OUTFITS + HAIRSTYLES Where Winds Meet"
              poster={images.hero}
              analytics={{
                eventName: "video_play",
                params: { page: "flicker_of_faces", placement: "videos_section", video_topic: "outfits_list" },
              }}
            />
            <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
              <p className="leading-relaxed">Xem để biết: shop appearances và preview outfit sắp ra.</p>
              <a
                href="https://www.youtube.com/watch?v=DBzCeK5Uoxs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100 whitespace-nowrap"
              >
                Mở trên YouTube
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-50">Verse of Winter: event track & phần thưởng</h3>
            <LiteYouTubeEmbed
              videoId="06VfojQMID0"
              title="New SCARLET SPARROW Outfit in WHERE WINDS MEET ... NEW Verse of Winter Event ! Outfit Showcase"
              poster={images.voucherTooltip}
              analytics={{
                eventName: "video_play",
                params: { page: "flicker_of_faces", placement: "videos_section", video_topic: "verse_of_winter" },
              }}
            />
            <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
              <p className="leading-relaxed">Xem để biết: event track, giảm giá và outfit showcase theo mùa.</p>
              <a
                href="https://www.youtube.com/watch?v=06VfojQMID0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100 whitespace-nowrap"
              >
                Mở trên YouTube
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Embed dùng chế độ tăng quyền riêng tư của YouTube (<span className="font-semibold">youtube-nocookie.com</span>) và chỉ
          tải sau khi bạn bấm play.
        </p>
      </section>

      {/* Price */}
      <section id="price" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-slate-50">Giá (và ý nghĩa “2580”)</h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Ảnh chụp cộng đồng cho thấy <strong>Flicker of Faces</strong> có giá <strong>2580 Pearls</strong>. Hãy coi đây là con
            số tham khảo: giá có thể khác tùy server/region hoặc khuyến mãi.
          </p>
          <p className="text-slate-200">
            Tip: khi shop đã mở bán, hãy kiểm tra lại giá cuối ở màn hình mua (đặc biệt khi bạn cộng voucher).
          </p>
        </div>
      </section>

      {/* Voucher */}
      <section id="voucher" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Voucher Flicker of Faces (cách hoạt động)</h2>
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-semibold text-slate-50">Rule voucher (cộng dồn)</h3>
            <p>
              Tooltip voucher ghi: <strong>giảm 10% mỗi voucher</strong>, và{" "}
              <strong>tối đa 5 voucher có thể cộng cho 1 item</strong> — tức tổng giảm tối đa là <strong>50%</strong>.
            </p>
            <div className="rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-100 font-semibold">Lý do thường gặp: “không dùng được voucher”</p>
              <p className="mt-1 text-xs text-emerald-200">
                Mô tả voucher có dòng <em>“available in the Shop from … (Local time)”</em>. Trước khi đến thời điểm đó và outfit
                được lên shop, cửa hàng sẽ chưa hiện trang mua.
              </p>
            </div>
            <h3 className="text-base font-semibold text-slate-50">Cách dùng voucher (nhanh)</h3>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>Nhận voucher từ event track (nhiều người báo nhận trong “Verse of Winter”).</li>
              <li>Đợi đến đúng thời gian ghi trong tooltip voucher (theo giờ local của server).</li>
              <li>Mở shop của Flicker of Faces và áp voucher ở bước thanh toán (nếu có).</li>
              <li>Kiểm tra giá cuối sau giảm trước khi mua.</li>
            </ol>
            <p className="text-xs text-slate-400">
              Lưu ý: tooltip xác nhận voucher cộng dồn với nhau. Việc nó có cộng với giảm giá khác trong shop hay không có thể
              khác theo server — hãy kiểm tra ngay trên màn hình mua trong game.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300 mb-3">Tooltip voucher</p>
            <LightboxGallery
              items={[
                {
                  src: images.voucherTooltip,
                  fallbackSrc: fallbackImages.voucherTooltip,
                  alt: "Ảnh tooltip Flicker of Faces Voucher (10% và giới hạn cộng dồn)",
                  caption: "10% mỗi voucher; tối đa 5",
                },
              ]}
              columns={1}
            />
          </div>
        </div>

        <div id="voucher-calculator" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-50">Bộ tính giá sau voucher</h3>
            <p className="text-sm text-slate-300">Ước tính nhanh: nhập giá gốc của server bạn, rồi chọn số voucher bạn có (0–5).</p>
          </div>
          <VoucherCalculator defaultBasePrice={2580} maxVouchers={5} voucherPercent={10} />
        </div>
      </section>

      {/* Listing time */}
      <section id="listing-time" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Giờ lên shop: 25/12 vs 26/12 (vì sao thấy cả hai)</h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Nhiều patch notes ghi shop appearance lên vào <strong>25/12/2025</strong>. Tuy nhiên, một số người lại thấy{" "}
            <strong>26/12</strong> trong tooltip voucher — vì tooltip hiển thị thời gian chính xác theo{" "}
            <strong>giờ local</strong>, và server/region có thể rollover khác giờ.
          </p>
          <p className="text-slate-200">
            Cách làm chắc nhất: tin vào <strong>tooltip voucher</strong> (giờ theo server bạn) và kiểm tra shop sau khi qua mốc đó.
          </p>
        </div>
      </section>

      {/* Bug clarification */}
      <section id="makeup-bug" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Nếu bạn đang tìm lỗi “flicker” mặt/makeup</h2>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              Một số người tìm “flicker of faces” vì mặt/makeup trông đúng trong creator nhưng vào gameplay lại đổi (mất lớp makeup,
              shading khác, hoặc “snap” sang preset khác).
            </p>
            <p className="text-slate-200 font-semibold">Workaround nhanh trên PC (thường hiệu quả):</p>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>Mở <strong>Appearance</strong> trong game.</li>
              <li>Chọn <strong>một face preset khác</strong> và đợi load xong.</li>
              <li>Thoát ra mà không save preset đó.</li>
              <li>Chọn lại preset face/makeup bạn muốn (nó có thể “reapply” các layer bị mất).</li>
            </ol>
            <p className="text-xs text-slate-400">
              Nếu bạn đang nộp bài cho event liên quan đến face, xem guide The Great Faceologist ở đây:{" "}
              <Link href="/vn/guides/the-great-faceologist" className="underline underline-offset-4 hover:text-emerald-100">
                Cách nộp bài & chọn tag
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300 mb-3">Workaround đổi preset</p>
            <LightboxGallery
              items={[
                {
                  src: images.makeupBugPresetSwitch,
                  fallbackSrc: fallbackImages.makeupBugPresetSwitch,
                  alt: "Menu Appearance với các face preset (ảnh minh họa workaround)",
                  caption: "Đổi preset 1 lần, rồi đổi lại",
                },
              ]}
              columns={1}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
              <summary className="cursor-pointer select-none text-sm font-semibold text-slate-50">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
        <details className="group">
          <summary className="cursor-pointer select-none text-lg font-bold text-slate-50">Nguồn tham khảo (tùy chọn)</summary>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Để đối chiếu giờ lên shop và workaround lỗi, các nguồn dưới đây khá hữu ích. Tuy nhiên, hãy ưu tiên màn hình shop và
            tooltip voucher trong game theo server của bạn.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-200">
            <li>
              •{" "}
              <a
                href="https://www.dexerto.com/wikis/where-winds-meet/patch-notes/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Dexerto: Patch notes (có Shop Appearance – Flicker of Faces, 25/12/2025)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://game8.co/games/Where-Winds-Meet/archives/570580"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Game8: Patch notes Update 1.1 (có Shop Appearance – Flicker of Faces, 25/12/2025)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://www.reddit.com/r/wherewindsmeet_/comments/1pq3rc5/about_the_flicker_of_faces_appearance/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Reddit: About the Flicker of Faces appearance (ảnh cộng đồng)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://www.reddit.com/r/wherewindsmeet_/comments/1pq4oti/how_flicker_of_faces_appearence_does_looks_like/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Reddit: How Flicker of Faces looks like and price (cộng đồng)
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://allthings.how/where-winds-meets-disappearing-makeup-bug-explained/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                AllThings.How: giải thích lỗi mất makeup/mặt + workaround
              </a>
            </li>
          </ul>
        </details>
      </section>

      {/* Related */}
      <section id="related-guides" className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Guide liên quan</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/vn/guides/cosmetics" className="underline underline-offset-4 hover:text-emerald-100">
              Cosmetics & Ngoại hình – tóc, outfit và mẹo mua shop
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/free-outfits" className="underline underline-offset-4 hover:text-emerald-100">
              Free Outfits – các route mở đồ miễn phí
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/patch-notes" className="underline underline-offset-4 hover:text-emerald-100">
              Patch Notes – theo dõi update và shop rotation
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
