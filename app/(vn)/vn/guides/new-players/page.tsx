import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Hướng dẫn tân thủ Where Winds Meet & lộ trình tuần đầu",
  description:
    "Hướng dẫn thực dụng cho người mới Where Winds Meet: từ lần mở game tới reset tuần đầu với thiết lập, ưu tiên và mẹo tài nguyên.",
  alternates: buildHreflangAlternates("/guides/new-players", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Hướng dẫn tân thủ Where Winds Meet & lộ trình tuần đầu",
    description:
      "Hướng dẫn thực dụng cho người mới Where Winds Meet: từ lần mở game tới reset tuần đầu với thiết lập, ưu tiên và mẹo tài nguyên.",
    url: `${baseUrl}/vn/guides/new-players`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Hướng dẫn tân thủ Where Winds Meet & lộ trình tuần đầu",
    description:
      "Hướng dẫn thực dụng cho người mới Where Winds Meet: từ lần mở game tới reset tuần đầu với thiết lập, ưu tiên và mẹo tài nguyên.",
  },
};

const chapters = [
  {
    id: "setup",
    title: "Thiết lập & điều khiển",
    image: "/illustrations/settings.png",
    steps: [
      {
        id: "step-1",
        title: "Chỉnh nhanh khi mở game",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              Where Winds Meet mở đầu bằng một loạt màn thiết lập. Có baseline tốt sẽ đỡ phải chỉnh lại nhiều lần.
            </p>
            <div className="space-y-2">
              <details className="group rounded-lg border border-slate-800 bg-slate-950/50 open:bg-slate-900/50">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200 transition hover:text-emerald-400">
                  <span>Checklist thiết lập gợi ý</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-300 space-y-2 border-t border-slate-800/50 pt-2">
                  <p><span className="text-emerald-400 font-semibold">Guidance:</span> Detailed (giữ marker hiển thị)</p>
                  <p><span className="text-emerald-400 font-semibold">Control Mode:</span> ARPG (camera bám chuyển động)</p>
                  <p><span className="text-emerald-400 font-semibold">Difficulty:</span> Recommended (cân bằng)</p>
                  <p><span className="text-emerald-400 font-semibold">Social:</span> Shared Journey (mở tổ đội/co-op)</p>
                </div>
              </details>
            </div>
          </>
        ),
      },
      {
        id: "step-2",
        title: "Thiết lập combat",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              Đặt <span className="text-emerald-400">phòng thủ trên chuột</span> và{" "}
              <span className="text-red-400">tấn công trên bàn phím</span>.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Chuột</div>
                <div className="flex justify-between"><span className="text-slate-300">LMB</span> <span className="text-slate-50">Đánh thường</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Side 1</span> <span className="text-emerald-400">Parry</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Side 2</span> <span className="text-emerald-400">Dodge</span></div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Bàn phím</div>
                <div className="flex justify-between"><span className="text-slate-300">Q / E</span> <span className="text-red-400">Kỹ năng</span></div>
                <div className="flex justify-between"><span className="text-slate-300">1 - 4</span> <span className="text-purple-400">Mystic Arts</span></div>
                <div className="flex justify-between"><span className="text-slate-300">F</span> <span className="text-blue-400">Di chuyển</span></div>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "basics",
    title: "Nền tảng",
    image: "/illustrations/combat.png",
    steps: [
      {
        id: "step-3",
        title: "Tạo nhân vật",
        content: (
          <p className="text-slate-300">
            Chọn một <span className="text-ink-gold font-serif">Aspiration Talent</span> hợp thứ bạn tò mò (ví dụ Drunken
            Precision cho mini-game). Đừng quá căng chuyện min-max ở đây.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "Đọc HUD",
        content: (
          <ul className="space-y-2 text-sm text-slate-300 list-disc pl-4 marker:text-emerald-500">
            <li><strong className="text-slate-100">Thanh Qi:</strong> Nếu vỡ, bạn không đỡ được. Lùi ra.</li>
            <li><strong className="text-slate-100">Qi của địch:</strong> Phá để kích hoạt Execution.</li>
            <li><strong className="text-slate-100">Mystic Arts:</strong> Kỹ năng linh hoạt cho khống chế hoặc giải đố.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "journey",
    title: "Hành trình",
    image: "/illustrations/exploration.png",
    steps: [
      {
        id: "step-5",
        title: "Ưu tiên cốt truyện",
        content: (
          <div className="bg-emerald-950/30 border-l-2 border-emerald-500 p-4 text-sm text-emerald-100/80">
            <strong className="block text-emerald-400 mb-1">Luật vàng</strong>
            Đi cốt truyện cho đến khi chạm trần cấp. Khi đó hãy rẽ sang nhiệm vụ phụ. Cách này giúp bạn mở kịp các hệ thống
            quan trọng như Breakthrough.
          </div>
        ),
      },
      {
        id: "step-9",
        title: "Thói quen khám phá",
        content: (
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🗿</span>
              <span>Mở <strong className="text-slate-100">Boundary Stones</strong> sớm để dịch chuyển nhanh.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🔥</span>
              <span>Nói chuyện Wayfarers ở <strong className="text-slate-100">Campfires</strong> để mở bản đồ.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🎒</span>
              <span>Nhặt mọi thứ. Thảo mộc và quặng sẽ thành nút thắt về sau.</span>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "routine",
    title: "Tăng trưởng & lịch trình",
    image: "/illustrations/growth.png",
    steps: [
      {
        id: "step-6",
        title: "Checklist hàng ngày",
        content: (
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Nhận thưởng <strong className="text-slate-100">Xiake Journey</strong></div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Làm 3 <strong className="text-slate-100">Jianghu Orders</strong> nhanh</div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-slate-800/50">
              <div className="w-1 h-full bg-emerald-500 rounded-full"></div>
              <div className="text-sm text-slate-300">Dùng hết <strong className="text-slate-100">Mental Energy & Stamina</strong></div>
            </div>
          </div>
        ),
      },
      {
        id: "step-7",
        title: "Ưu tiên hàng tuần",
        content: (
          <p className="text-slate-300 text-sm">
            Trần quan trọng hơn việc lặt vặt. Ưu tiên <span className="text-ink-gold">Weekly Dungeons</span> và mua hết vật
            phẩm giới hạn trong shop (Internal Arts, Upgrade Boxes).
          </p>
        ),
      },
      {
        id: "step-8",
        title: "Thói quen tài nguyên",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Tái chế đồ</div>
              <p className="text-xs text-slate-400">Tháo/tách đồ không dùng giúp tăng sức mạnh tài khoản về lâu dài.</p>
            </div>
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Đừng tích trữ</div>
              <p className="text-xs text-slate-400">Dùng nguyên liệu để nâng cấp. Mạnh sớm = farm nhanh hơn về sau.</p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function NewPlayersGuidePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/new-players`,
    },
    {
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
          name: "Tân thủ",
          item: `${baseUrl}/vn/guides/new-players`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <CdnImage
            src="/background/30.webp"
            alt="Nền hướng dẫn tân thủ Where Winds Meet"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Cập nhật cho Launch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 font-serif mb-6 text-shadow-lg">
              Hướng dẫn tân thủ <span className="text-ink-gold">Where Winds Meet</span>
            </h1>
            <p className="text-lg text-slate-200/90 leading-relaxed max-w-xl">
              Từ lần đăng nhập đầu tiên đến reset tuần đầu. Lộ trình tuần đầu giúp bạn ưu tiên đúng thứ—thiết lập, nhiệm vụ,
              routine và tài nguyên—mà không bị rối.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <section className="mb-10 rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/60">
          Bạn đang tìm roadmap chính thức của Where Winds Meet? Trang này là{" "}
          <span className="font-semibold">roadmap tiến trình cho tân thủ</span>. Với thông báo và cập nhật phát hành, xem{" "}
          <Link href="/vn/news" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            tin tức & cập nhật
          </Link>
          .
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/60 backdrop-blur-md shadow-xl">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
                  Mục lục
                </h3>
                <nav className="space-y-1">
                  {chapters.map((chapter) => (
                    <a
                      key={chapter.id}
                      href={`#${chapter.id}`}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-900/50 rounded-lg transition-colors"
                    >
                      {chapter.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-900/20 to-slate-900/50 border border-emerald-500/20">
                <p className="text-xs text-emerald-200/80 italic">
                  &ldquo;Hành trình ngàn dặm bắt đầu từ một bước chân.&rdquo;
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-16">
            {chapters.map((chapter, index) => (
              <section key={chapter.id} id={chapter.id} className="scroll-mt-24">
                {/* Chapter Header */}
                <div className="relative h-48 rounded-3xl overflow-hidden mb-8 border border-slate-800 shadow-2xl group">
                  <CdnImage
                    src={chapter.image}
                    alt={chapter.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-6xl font-serif text-slate-700/20 font-bold absolute -top-4 -left-2 select-none">
                      0{index + 1}
                    </span>
                    <h2 className="relative text-3xl font-bold text-slate-50 font-serif">
                      {chapter.title}
                    </h2>
                  </div>
                </div>

                {/* Steps Timeline */}
                <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pb-4">
                  {chapter.steps.map((step) => (
                    <div key={step.id} className="relative pl-8 sm:pl-12">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950 ring-4 ring-slate-950 group-hover:border-emerald-500 transition-colors"></div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-3">
                          <span className="text-emerald-500/50 font-serif italic">#</span>
                          {step.title}
                        </h3>
                        <div className="prose prose-invert prose-slate max-w-none bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                          {step.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Final CTA */}
            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 text-center relative overflow-hidden">
              <h2 className="text-2xl font-serif text-slate-50 mb-4 relative z-10">Sẵn sàng cho bước tiếp theo?</h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10">
                Khi đã nắm vững nền tảng, hãy xem Tier List để lên kế hoạch build endgame.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  href="/guides/pvp-tier-list"
                  className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                >
                  Xem Tier List
                </Link>
                <Link
                  href="/vn/guides/builds"
                  className="px-6 py-3 rounded-full bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
                >
                  Khám phá Builds
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
