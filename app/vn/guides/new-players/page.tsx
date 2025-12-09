import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Hướng dẫn tân thủ Where Winds Meet & lộ trình tuần đầu",
  description:
    "Hướng dẫn thực dụng cho người mới Where Winds Meet: từ lần mở game tới reset tuần đầu với thiết lập, ưu tiên và mẹo tài nguyên.",
  alternates: buildHreflangAlternates("/guides/new-players", { canonicalLanguage: "vi" }),
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
              Game mở ra nhiều màn thiết lập. Có baseline tốt sẽ đỡ phải chỉnh lại.
            </p>
            <div className="space-y-2">
              <details className="group rounded-lg border border-slate-800 bg-slate-950/50 open:bg-slate-900/50">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200 transition hover:text-emerald-400">
                  <span>Checklist gợi ý</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-300 space-y-2 border-t border-slate-800/50 pt-2">
                  <p><span className="text-emerald-400 font-semibold">Guidance:</span> Detailed (giữ marker hiển thị)</p>
                  <p><span className="text-emerald-400 font-semibold">Control Mode:</span> ARPG (camera bám chuyển động)</p>
                  <p><span className="text-emerald-400 font-semibold">Difficulty:</span> Recommended (cân bằng)</p>
                  <p><span className="text-emerald-400 font-semibold">Social:</span> Shared Journey (mở co-op)</p>
                </div>
              </details>
            </div>
          </>
        ),
      },
      {
        id: "step-2",
        title: "Bố trí phím combat",
        content: (
          <>
            <p className="text-slate-300 mb-4">
              Đặt <span className="text-emerald-400">phòng thủ trên chuột</span> và <span className="text-red-400">tấn công trên phím</span>.
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
            Chọn <span className="text-ink-gold font-serif">Aspiration Talent</span> hợp sở thích (ví dụ Drunken Precision cho minigame). Không cần try-hard chỉ số ở đây.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "Đọc HUD",
        content: (
          <ul className="space-y-2 text-sm text-slate-300 list-disc pl-4 marker:text-emerald-500">
            <li><strong className="text-slate-100">Thanh Qi:</strong> Vỡ là không đỡ được, lùi ra.</li>
            <li><strong className="text-slate-100">Qi của địch:</strong> Phá để mở Execution.</li>
            <li><strong className="text-slate-100">Mystic Arts:</strong> Kỹ năng linh hoạt cho CC hoặc giải đố.</li>
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
            Đi cốt truyện cho đến khi chạm trần cấp, rồi hãy rẽ sang nhiệm vụ phụ. Như vậy bạn mở kịp hệ thống Breakthrough.
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
              <span>Mở <strong className="text-slate-100">Boundary Stone</strong> sớm để dịch chuyển nhanh.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🔥</span>
              <span>Nói chuyện Wayfarer ở <strong className="text-slate-100">Campfire</strong> để lộ bản đồ.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl leading-none">🎒</span>
              <span>Nhặt mọi thứ. Thảo mộc/quặng sẽ thành nút thắt sau.</span>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "routine",
    title: "Tăng trưởng & lịch",
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
              <div className="text-sm text-slate-300">Hoàn 3 <strong className="text-slate-100">Jianghu Orders</strong> nhanh</div>
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
            Trần quan trọng hơn việc lặt vặt. Ưu tiên <span className="text-ink-gold">Weekly Dungeon</span> và mua hết vật phẩm giới hạn (Internal Arts, Upgrade Box).
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
              <p className="text-xs text-slate-400">Tháo đồ không dùng để tăng sức mạnh tài khoản.</p>
            </div>
            <div className="p-3 rounded bg-slate-900/30 border border-slate-800">
              <div className="text-emerald-400 font-serif font-bold mb-1">Đừng tích trữ</div>
              <p className="text-xs text-slate-400">Dùng nguyên liệu nâng cấp. Mạnh sớm = farm nhanh hơn.</p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function NewPlayersGuidePage() {
  return (
    <div className="min-h-screen bg-ink-wash pb-20">
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background/30.webp"
            alt="Nền hướng dẫn tân thủ Where Winds Meet"
            fill
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:w-2/3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Lộ trình tân thủ</p>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl font-serif">
            Chơi tuần đầu <span className="text-ink-gold">thông minh</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200/90 text-shadow-sm font-sans">
            Lộ trình tuần đầu, tập trung mở hệ thống đúng lúc, cài đặt hợp lý và ưu tiên tài nguyên để không bị chặn cấp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-emerald-200">
            <Link
              href="/vn/guides/items"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              Tra cứu vật phẩm
            </Link>
            <Link
              href="/vn/guides/martial-arts-weapons"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              Bảng võ học
            </Link>
            <Link
              href="/vn/guides/skill-theft"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              Mở Trộm chiêu
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-6 sm:px-8 pt-10">
        {chapters.map((chapter) => (
          <section
            key={chapter.id}
            className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="space-y-3">
              <Image
                src={chapter.image}
                alt={chapter.title}
                width={640}
                height={360}
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 object-cover"
              />
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif">
                {chapter.title}
              </h2>
            </div>

            <div className="space-y-6">
              {chapter.steps.map((step) => (
                <div
                  key={step.id}
                  className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5 shadow-inner shadow-slate-950/40"
                >
                  <h3 className="text-lg font-semibold text-slate-50 mb-2 font-serif">
                    {step.title}
                  </h3>
                  <div className="text-sm leading-relaxed text-slate-300 space-y-3">
                    {step.content}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
