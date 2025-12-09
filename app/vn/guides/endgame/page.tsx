import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Hướng dẫn endgame Where Winds Meet – tiến độ & tối ưu",
  description:
    "Lộ trình endgame Where Winds Meet: pha tiến độ, farm tài nguyên, tối ưu chỉ số, boss khó, PVP và lối sống Jianghu sau cốt truyện.",
  alternates: buildHreflangAlternates("/guides/endgame", { canonicalLanguage: "vi" }),
};

const endgamePhases = [
  { name: "Đầu endgame (Lv 30–40)", description: "Hoàn cốt truyện, mở hoạt động endgame" },
  { name: "Giữa endgame (Lv 40–50)", description: "Farm gear tối ưu, luyện boss khó" },
  { name: "Cuối endgame (50+)", description: "Tối ưu chỉ số, PVP, thử thách đỉnh" },
];

export default function EndgamePage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.webp"
            alt="Nền endgame Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Làm chủ endgame Where Winds Meet.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Sau cốt truyện mới là chặng tối ưu: chỉnh chỉ số, chinh phục boss khó, farm hiếm, thử sức PVP. Trang này tóm pha tiến độ, nội dung cần ưu tiên và cách tối ưu build.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Endgame không có marker dẫn đường; bạn chọn hướng: PVE, PVP, sưu tầm hay tối ưu chỉ số. Có kế hoạch, bạn sẽ không lạc giữa vô số hoạt động.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Các pha endgame
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Chia endgame thành pha giúp đặt mục tiêu rõ. Đầu: mở hệ thống. Giữa: farm đúng vật liệu/gear. Cuối: tối ưu chi tiết và thử thách đỉnh.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {endgamePhases.map((phase) => (
            <div key={phase.name} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60">
              <h3 className="text-sm font-semibold text-slate-50">{phase.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Farm & tài nguyên
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Farm hiệu quả</h3>
            <p className="mt-2">
              Chọn nội dung khớp nhu cầu: thiếu vật liệu vũ khí thì chạy nội dung rơi vật liệu đó; thiếu tiền thì ưu tiên dungeon/sự kiện trả cao. Mỗi phiên chơi 1–2 mục tiêu cụ thể.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Farm boss</h3>
            <p className="mt-2">
              Nhiều loot tốt từ boss lặp. Tối ưu build riêng cho boss bạn farm để clear nhanh; nếu solo khó, đi nhóm vẫn đáng.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="font-semibold text-slate-50">Nội dung giới hạn tuần</h3>
            <p className="mt-2">
              Lên lịch làm boss tuần, sự kiện mùa, thử thách reset để không mất phần thưởng cộng dồn.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Boss khó & thử thách
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Tìm hiểu cơ chế từng boss; các guide Zh khuyên luyện tránh/deflect, tận dụng Mystic bảo mệnh, và dùng build chuyên biệt cho từng encounter. Nếu mỏi tay, đổi sang build bền hoặc mang đồng đội hỗ trợ.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Tối ưu chỉ số
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Mỗi điểm stat đều quan trọng; không thể max tất cả. Ưu tiên chỉ số lõi theo build (xem trang builds/tier list). Đừng ám ảnh 100% tối ưu; đạt ~85% và chơi vui trước, rồi tinh chỉnh nếu bạn thích tối ưu.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          PVP endgame
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          PVP khác PVE: đối thủ học thói quen của bạn. Cần build chuyên đấu tay đôi, luyện với người thật, linh hoạt đổi chiến thuật. Xem{" "}
          <Link href="/vn/guides/pvp-tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
            PVP tier list
          </Link>{" "}
          để chọn vũ khí, rồi luyện cho đến khi thành phản xạ.
        </p>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Khám phá, tâm pháp, cuộc sống Jianghu
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Guide Zh coi khám phá là lõi endgame: rank khám phá Qinghe lên 5–6 sớm để mở khinh công lớn (Jade Fan Roaming, Riding the Wind). Nhiều đền/di tích được viết giả định bạn đã có các dash này.
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Mystic nên có
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li><span className="font-semibold">Golden Jade Hand:</span> đòn “huyệt” tầm xa, dùng cả combat và puzzle.</li>
            <li><span className="font-semibold">Plucking Stars, Catching the Moon:</span> trộm vật/ vũ khí từ xa, lấy cả khiên mạnh ở chùa Xiangguo (Kaifeng).</li>
            <li><span className="font-semibold">Hidden Step & Worldly Disguise:</span> công cụ ẩn thân/cải trang, hay được yêu cầu trong nhiệm vụ lén/trộm sư.</li>
            <li><span className="font-semibold">Formless Golden Body:</span> giảm sát thương mạnh, chống stagger, tốt cho trận áp lực cao.</li>
          </ul>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Giải trí giữa grind
          </h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Nhạc cụ (Guqin, Pipa, Erhu), Pitch Pot, Leaf Card, Shefu, sumo... vừa cho điểm Co-Play/achievement vừa là cách nghỉ tay mà vẫn ở trong giang hồ.
          </p>
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            Mệt vì tối ưu? Dành một buổi leo shrine, săn khinh công mới, hay chơi nhạc trên mái nhà. Rank khám phá và mystic vẫn tăng, và bạn gắn bó hơn với thế giới.
          </p>
        </div>
        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <Image
              src="/background/bg3.webp"
              alt="Nhân vật chơi nhạc"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 28rem, (min-width: 768px) 45vw, 100vw"
            />
          </div>
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            Lấy cảm hứng từ guide Zh: bản nhạc, minigame, điểm ngắm cảnh để thư giãn nhưng vẫn tiến bộ.
          </p>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Lập kế hoạch endgame của bạn
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Đặt mốc nhỏ: hạ boss khó đầu tiên, cân bằng stat, thắng trận PVP, sưu tầm cosmetic hiếm, hỗ trợ team. Mốc rõ giúp endgame không mơ hồ.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Kiểm tra lại tier list/builds sau mỗi patch; meta thay đổi. Quan trọng nhất: endgame để vui. Nếu tối ưu thấy mệt, nghỉ một chút—giang hồ vẫn chờ.
        </p>
      </section>
    </article>
  );
}
