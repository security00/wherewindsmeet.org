import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Trộm chiêu Where Winds Meet – mở, lén lút, mẹo mini-game",
  description:
    "Cách mở Trộm chiêu (Skill Theft), vượt mini-game vòng thời gian và dùng kỹ năng sao chép để lấy vũ khí võ học nhanh hơn.",
  alternates: buildHreflangAlternates("/guides/skill-theft", { canonicalLanguage: "vi" }),
};

const miniGameShots = [
  {
    src: "/martial-arts/skill-theft/skill-theft-comprehension.webp",
    alt: "Vòng vàng trong mini-game Trộm chiêu",
    caption: "Bấm Comprehend đúng vòng vàng để đầy thanh nhanh.",
  },
  {
    src: "/martial-arts/skill-theft/skill-theft-wrong.webp",
    alt: "Vòng xám gây phạt trong Trộm chiêu",
    caption: "Tránh vòng xám; chúng làm tụt tiến độ và tốn thời gian.",
  },
  {
    src: "/martial-arts/skill-theft/skill-theft-multiple.webp",
    alt: "Nhiều vòng xuất hiện cùng lúc trong Trộm chiêu",
    caption: "Một số bước nháy nhiều vòng—bấm hết để được cộng lớn.",
  },
];

export default function SkillTheftPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Nền Trộm chiêu Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Hướng dẫn Trộm chiêu
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Mở Trộm chiêu và sao chép võ công không cần đánh.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Trộm chiêu cho phép học kỹ năng bằng cách quan sát cao thủ và vượt mini-game timing. Đây là yêu cầu của nhiều vũ khí võ học và kỹ năng chặn tiến độ. Dùng các bước và ảnh dưới đây để mở sớm, làm mỗi phi vụ trơn tru, và ghép cùng{" "}
            <Link
              href="/vn/guides/martial-arts-weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              bảng vũ khí võ học
            </Link>{" "}
            khi chọn mục tiêu.
          </p>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Lộ trình mở nhanh
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Dịch chuyển tới <span className="text-emerald-200">Front Mountain</span>{" "}
              hoặc <span className="text-emerald-200">Moonveil Peak</span> (Boundary Stone).
            </li>
            <li>
              Nói chuyện với <span className="font-semibold text-slate-100">Qi Yuehai</span> và nhận nhiệm vụ{" "}
              <span className="italic text-emerald-200">Skill Theft: Unearned Lesson</span>.
            </li>
            <li>
              Hoàn thành nhiệm vụ để nhận Trộm chiêu, mở menu võ học và dùng <strong>Obtain</strong> trên một vũ khí để đặt điểm trộm đầu tiên.
            </li>
          </ol>
          <p className="text-xs text-slate-400">
            Dù đang chơi tuyến khác, mở Trộm chiêu sớm giúp tránh kẹt khi nhiệm vụ hay vũ khí bất ngờ yêu cầu.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Một phi vụ diễn ra ra sao
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-emerald-200">Tìm thánh địa được đánh dấu:</span>{" "}
              nhiều nơi có cổng khóa Loong Key. Mang chìa để khỏi quay lại.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Giữ ẩn thân:</span>{" "}
              đây là nhiệm vụ lén lút. Dùng cải trang hoặc Mystic như Touch of Death, Veil of Stillness, Wind Sense để lách qua lính gác.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Quan sát sư phụ:</span>{" "}
              tới điểm xem, bắt đầu mini-game và bấm vòng vàng đúng nhịp để đầy thanh trước khi hết giờ.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Rút êm:</span>{" "}
              học xong, rời khu vực để hoàn thành và mở luyện tập.
            </li>
          </ul>
          <Link
            href="/vn/guides/sects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            So sánh môn phái nếu muốn gia nhập thay vì trộm →
          </Link>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Giải thích mini-game Trộm chiêu
        </h2>
        <p className="text-sm text-slate-300">
          Xem kỹ vòng lặp động tác. Vòng vàng = bấm ngay, vòng xám là bẫy; một số bước nháy nhiều vòng để bạn bấm hết và được cộng lớn. Thường 3 lượt sạch là đủ đầy thanh.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {miniGameShots.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/50"
            >
              <div className="relative h-48 w-full bg-slate-900/80">
                <CdnImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-slate-300">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">
            Mang theo
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Loong Key cho cổng khóa.</li>
            <li>Công cụ ẩn thân/cải trang nếu lính gác dày.</li>
            <li>Chỗ trống túi để mở rương dọc đường.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">
            Thực hiện sạch sẽ
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Kiên nhẫn—vội dễ bị phát hiện.</li>
            <li>Chỉ bấm vòng vàng; vòng xám làm chậm bạn.</li>
            <li>Nếu gần hết giờ, chờ chu kỳ an toàn tiếp theo thay vì spam.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">
            Tận dụng sau khi học
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>
              Nhắm vũ khí trước: kỹ năng trộm mở lối tới{" "}
              <span className="text-emerald-200">Heavenquaker Spear</span> hoặc{" "}
              <span className="text-emerald-200">Vernal Umbrella</span>.
            </li>
            <li>
              Quay lại thánh địa cũ sau khi nâng cấp; chỉ số cao giúp lén an toàn hơn.
            </li>
            <li>
              Khi đi nhóm, hoán đổi sang võ học hỗ trợ để tổ đội hưởng lợi từ bộ chiêu đã trộm.
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
