import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Hướng dẫn Where Winds Meet cho người mới và cao thủ",
  description:
    "Tổng hợp hướng dẫn Where Winds Meet bằng Tiếng Việt: lộ trình tân thủ, đường lên cấp, hệ thống thế giới mở, tier list, builds và code để bạn luôn biết bước tiếp theo.",
  alternates: buildHreflangAlternates("/guides", { canonicalLanguage: "vi" }),
};

const guideSections = [
  {
    title: "Lộ trình người mới",
    slug: "/vn/guides/new-players",
    label: "Bắt đầu",
    icon: "🌱",
    color: "text-emerald-400",
    size: "large",
    description:
      "Từ lúc mở game đến lần reset tuần đầu tiên: thiết lập tối ưu, tuyến cốt truyện an toàn, checklist hằng ngày.",
  },
  {
    title: "Platforms & Download",
    slug: "/vn/guides/platforms",
    label: "PS5 / PC / Mobile",
    icon: "PC",
    color: "text-sky-300",
    size: "medium",
    description:
      "Tinh trang nen tang Where Winds Meet cho Xbox, PS5, PC, iOS, Android, mobile, cross-play va account linking.",
  },
  {
    title: "Bảng xếp hạng PvP (meta)",
    slug: "/vn/guides/pvp-tier-list",
    label: "Đấu hạng",
    icon: "⚔️",
    color: "text-red-400",
    size: "medium",
    description: "Leo rank với meta mới nhất sau patch.",
  },
  {
    title: "Patch Notes / Upcoming Nerfs",
    slug: "/vn/guides/patch-notes",
    label: "Cap nhat",
    icon: "🧭",
    color: "text-red-300",
    size: "small",
    description: "Version 1.7, Path Balance, upcoming nerfs va tac dong toi arena ranks, build, boss.",
  },
  {
    title: "Bộ build mạnh",
    slug: "/vn/guides/builds",
    label: "PvE & PvP",
    icon: "🔥",
    color: "text-orange-400",
    size: "medium",
    description: "Thiết lập linh hoạt cho mọi lối chơi: tank, DPS, support.",
  },
  {
    title: "Bách khoa Vũ khí",
    slug: "/vn/guides/weapons",
    label: "Tất cả vũ khí",
    icon: "🗡️",
    color: "text-blue-400",
    size: "small",
    description: "Chỉ số và mô tả cho mọi loại vũ khí.",
  },
  {
    title: "Vũ khí Võ học",
    slug: "/vn/guides/martial-arts-weapons",
    label: "Mở khóa",
    icon: "🥋",
    color: "text-indigo-300",
    size: "medium",
    description: "12 vũ khí võ học kèm ảnh, kỹ năng và đường mở khóa.",
  },
  {
    title: "Trộm chiêu",
    slug: "/vn/guides/skill-theft",
    label: "Ẩn thân",
    icon: "🕶️",
    color: "text-emerald-300",
    size: "small",
    description: "Mở mini game quan sát và trộm võ công sạch sẽ.",
  },
  {
    title: "Giải đố bức tường",
    slug: "/vn/guides/wall-puzzle",
    label: "Câu đố",
    icon: "🧱",
    color: "text-cyan-300",
    size: "small",
    description: "Thứ tự nhấn ô và đốt lửa trong Echoes of Old Battles.",
  },
  {
    title: "Puzzle cờ tướng (Xiangqi)",
    slug: "/vn/guides/xiangqi",
    label: "Câu đố",
    icon: "♟️",
    color: "text-emerald-300",
    size: "small",
    description: "Checklist giải nhanh, pattern thường gặp và mẹo thực dụng để nhìn ra nước thắng.",
  },
  {
    title: "Desktop widget (daily assistant)",
    slug: "/vn/guides/desktop-widget",
    label: "Tiện ích",
    icon: "🖥️",
    color: "text-sky-300",
    size: "small",
    description:
      "Giải thích vì sao “desktop widget” dễ nhầm và hướng dẫn setup PC gọn: ghim reset timer + checklist.",
  },
  {
    title: "Tà Khúc",
    slug: "/vn/guides/unholy-prophecy",
    label: "Jianghu Legacy",
    icon: "🔮",
    color: "text-purple-300",
    size: "small",
    description: "Jianghu Legacy 07 tại Chùa Côn Đôn: mũi tên lửa trên mái nhà, câu đố Meridian Touch, bẫy gai, và đấu Thế Trấn.",
  },
  {
    title: "Sợi Định Mệnh",
    slug: "/vn/guides/woven-with-malice",
    label: "Nhiệm vụ",
    icon: "🧶",
    color: "text-emerald-300",
    size: "small",
    description: "Lost Chapter: mốc thời gian, bẫy, đường tre và lỗi cần tránh.",
  },
  {
    title: "Ngục mù sương",
    slug: "/vn/guides/mist-shrouded-prison",
    label: "Mộ cổ",
    icon: "🧭",
    color: "text-cyan-300",
    size: "small",
    description: "Mộ trong Mistveil Forest: route 3 vòng, 6 rương, kho báu cuối + mẹo sửa lỗi spawn.",
  },
  {
    title: "Mistveil City (Mở khóa)",
    slug: "/vn/guides/mistveil-city",
    label: "Khu vực",
    icon: "🏙️",
    color: "text-cyan-300",
    size: "small",
    description: "Vì sao Mistveil City bị khóa (Jan 22 vs Jan 26, 2026) + việc nên làm: Ephemeral Blight và 3 cure.",
  },
  {
    title: "Gift of Gab",
    slug: "/vn/guides/gift-of-gab",
    label: "Đối thoại",
    icon: "💬",
    color: "text-amber-300",
    size: "medium",
    description: "Đấu khẩu và thuyết phục bằng bộ thẻ hội thoại.",
  },
  {
    title: "Thiện cảm Tần Thái Vị",
    slug: "/vn/guides/qin-caiwei",
    label: "AI Chat",
    icon: "🤝",
    color: "text-emerald-300",
    size: "small",
    description: "Thoát vòng lặp thoại với hành động trong ngoặc và chào tạm biệt rõ ràng.",
  },
  {
    title: "Murong Yuan cha nuôi",
    slug: "/vn/guides/murong-yuan-adoptive-father",
    label: "Quiz & Lore",
    icon: "🎯",
    color: "text-amber-300",
    size: "small",
    description: "Đáp án quiz (Li Jun) vs lore (Murong Yanzhao) + bảng biến thể tên.",
  },
  {
    title: "Purple Star Catastrophe (Đáp án quiz)",
    slug: "/vn/guides/who-is-destined-to-face-the-purple-star-catastrophe",
    label: "Quiz & Lore",
    icon: "🟣",
    color: "text-purple-300",
    size: "small",
    description: "Daily Prize Quiz: “Who is destined to face the Purple Star catastrophe?” Đáp án: The Zhao Brothers.",
  },
  {
    title: "Ghost Revelry Hall do phe nào kiểm soát?",
    slug: "/vn/guides/which-faction-controls-ghost-revelry-hall",
    label: "Quest / Location",
    icon: "👻",
    color: "text-emerald-300",
    size: "small",
    description: "Đáp án nhanh: không có phe để gia nhập — băng nhóm + ma quái. Có đường đi Unbound Cavern kèm screenshot.",
  },
  {
    title: "Tìm Officer Nan",
    slug: "/vn/guides/find-officer-nan",
    label: "Quest / NPC",
    icon: "🕵️",
    color: "text-sky-300",
    size: "small",
    description: "The Gilded Chase: Officer Nan ở bến Harvestfall + vị trí trên Mirage Boat.",
  },
  {
    title: "Free Morph (Mystic)",
    slug: "/vn/guides/free-morph",
    label: "Bí thuật",
    icon: "🌀",
    color: "text-cyan-300",
    size: "small",
    description: "Cách mở và nâng Free Morph: chi phí, hồi chiêu, thưởng theo tier.",
  },
  {
    title: "Chỉ mục Vật phẩm",
    slug: "/vn/guides/items",
    label: "Tiếp tế",
    icon: "🎒",
    color: "text-pink-300",
    size: "small",
    description: "Nguyên liệu, tiêu hao, vật hiếm theo tab.",
  },
  {
    title: "Trang phục & diện mạo",
    slug: "/vn/guides/cosmetics",
    label: "Tùy biến",
    icon: "✨",
    color: "text-rose-300",
    size: "small",
    description: "Set ngoại hình, kiểu tóc và đồ cosmetic lấy cảm hứng Mặc gia.",
  },
  {
    title: "The Great Faceologist",
    slug: "/vn/guides/the-great-faceologist",
    label: "Sự kiện",
    icon: "🎭",
    color: "text-emerald-300",
    size: "small",
    description:
      "Where Winds Meet The Great Faceologist (12/2025): nộp từ Edit Face, tick tag, daily cap, phần thưởng và cách sửa lỗi.",
  },
  {
    title: "Flicker of Faces (ngoại hình)",
    slug: "/vn/guides/flicker-of-faces",
    label: "Cosmetics",
    icon: "🧧",
    color: "text-rose-300",
    size: "small",
    description:
      "Flicker of Faces shop appearance (12/2025): ảnh preview, giá tham khảo, thời gian lên shop và cách cộng voucher (10% × tối đa 5).",
  },
  {
    title: "Code đang hoạt động",
    slug: "/vn/guides/codes",
    label: "Quà miễn phí",
    icon: "🎁",
    color: "text-yellow-400",
    size: "small",
    description: "Đừng bỏ lỡ loot giới hạn thời gian.",
  },
  {
    title: "Trang phục miễn phí",
    slug: "/vn/guides/free-outfits",
    label: "Ngoại hình",
    icon: "🪡",
    color: "text-amber-400",
    size: "small",
    description:
      "Lộ trình 0 chi phí để mở khóa trang phục, phụ kiện, kiểu tóc qua sự kiện, nhiệm vụ, code.",
  },
  {
    title: "Danh sách NPC (Cố Nhân)",
    slug: "/vn/guides/npc-list",
    label: "AI Chat",
    icon: "📜",
    color: "text-emerald-300",
    size: "small",
    description: "Vị trí, thưởng và mẹo AI Chat kèm bản đồ xem trước.",
  },
  {
    title: "Hướng dẫn Boss",
    slug: "/vn/guides/bosses",
    label: "Giao tranh",
    icon: "👹",
    color: "text-purple-400",
    size: "small",
    description: "Cơ chế và chiến thuật cho các boss lớn.",
  },
  {
    title: "Hướng dẫn Endgame",
    slug: "/vn/guides/endgame",
    label: "Tiến độ",
    icon: "🏔️",
    color: "text-cyan-400",
    size: "wide",
    description: "Farm sau cốt truyện: route tài nguyên, tối ưu chỉ số, tâm pháp.",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <CdnImage
            src="/background/bg2.webp"
            alt="Hình nền hướng dẫn Where Winds Meet"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="relative z-30 flex h-full flex-col justify-center px-6 sm:px-12 lg:w-2/3">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl font-serif">
            Thư viện <span className="text-ink-gold">lữ khách</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/90 text-shadow-sm font-sans border-l-2 border-emerald-500/50 pl-4">
            Người đồng hành của bạn trên hành trình giang hồ: từ bước di chuyển cơ bản đến tuyệt kỹ đại tông sư, mọi đường đi đều ở đây.
          </p>
          <Link
            href="/vn/guides/one-leaf-one-life"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
          >
            🍂 Lost Chapter mới nhất: One Leaf, One Life
          </Link>
          <Link
            href="/vn/guides/murong-yuan-adoptive-father"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-300/80 hover:text-amber-100"
          >
            🎯 Quiz đang hot: cha nuôi Murong Yuan (đáp án nhanh)
          </Link>
          <Link
            href="/vn/news#organic-search-watch"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:border-blue-300/80 hover:text-blue-100"
          >
            News: future draw, arena ranks, upcoming nerfs
          </Link>
          <Link
            href="/vn/guides/tier-list#arena-ranks"
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/80 hover:text-emerald-100"
          >
            WWM arena ranks va tier-list checks
          </Link>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden text-vertical text-6xl font-bold text-slate-50/5 lg:block font-serif select-none">
          武林秘籍
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px]">
          {guideSections.map((section) => (
            <Link
              key={section.slug}
              href={section.slug}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-emerald-900/20
                ${section.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${section.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                ${section.size === 'wide' ? 'md:col-span-2' : ''}
              `}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl transition-all group-hover:scale-150 group-hover:from-emerald-500/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl ${section.size === 'large' ? 'text-5xl mb-4' : ''}`}>{section.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-2 py-1 ${section.color} bg-white/5`}>
                      {section.label}
                    </span>
                  </div>

                  <h3 className={`font-bold text-slate-100 font-serif group-hover:text-ink-gold transition-colors
                    ${section.size === 'large' ? 'text-4xl mb-4' : 'text-xl mb-2'}
                  `}>
                    {section.title}
                  </h3>

                  <p className={`text-slate-400 font-sans leading-relaxed
                    ${section.size === 'large' ? 'text-base max-w-md' : 'text-xs'}
                  `}>
                    {section.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors mt-4">
                  <span>Xem hướng dẫn</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl text-center mt-20 px-6">
        <div className="divider-ink mb-8" />
        <p className="text-slate-400 font-serif italic">
          &ldquo;Hành trình ngàn dặm bắt đầu từ một bước chân.&rdquo;
        </p>
      </div>
    </div>
  );
}
