import type { Metadata } from "next";
import Image from "next/image";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Môn phái Where Winds Meet – triết lý & phong cách",
  description:
    "Tổng quan các môn phái Where Winds Meet: quan niệm, lối chơi gợi ý và kiểu người chơi phù hợp, kèm artwork trong game.",
  alternates: buildHreflangAlternates("/guides/sects", { canonicalLanguage: "vi" }),
};

type Sect = {
  id: string;
  name: string;
  tagline: string;
  roleHint: string;
  description: string;
  image: string;
};

const sects: Sect[] = [
  {
    id: "tianquan",
    name: "Tianquan",
    tagline: "Rút đao vì lương tâm, không vì ngai vàng.",
    roleHint: "Nghĩa hiệp ngoài vòng pháp, chọn công lý.",
    description:
      "Không làm đao cho vua thương; nếu luật không bảo vệ dân, họ sẽ ra tay. Hợp cho người muốn theo đuổi “không hối hận”, chấp nhận việc khó, ân oán rõ ràng.",
    image: "/sect/tianquan.png",
  },
  {
    id: "qingxi",
    name: "Qingxi",
    tagline: "Thầy thuốc chữa cả vết thương lẫn lòng người.",
    roleHint: "Hỗ trợ/hồi máu, đặt câu hỏi đạo đức.",
    description:
      "Chữa bệnh kèm cái giá để nhắc về hậu quả. Cốt truyện xoay quanh lựa chọn khó, cứu ai, từ chối ai; phù hợp người thích chữa lành nhưng giữ nguyên tắc.",
    image: "/sect/qingxi.png",
  },
  {
    id: "sangengtian",
    name: "Sangeng Sky",
    tagline: "Bước vào bóng tối gánh nghiệp thay người khác.",
    roleHint: "Ám sát, lén lút, “ác cần thiết”.",
    description:
      "Tin rằng dao lặng lẽ đôi khi là lòng thương duy nhất. Thích hợp cho người chấp nhận gánh karma, làm việc bẩn để bảo vệ kẻ yếu.",
    image: "/sect/sangengtian.png",
  },
  {
    id: "jiuliumen",
    name: "Jiuliu Sect",
    tagline: "Chợ búa nhớ thứ cung đình quên.",
    roleHint: "Du côn, fixer, xã giao xám.",
    description:
      "Sống giữa hẻm, sòng, chợ đêm; coi đường phố phản chiếu đế quốc thật. Hợp người thích nhiệm vụ linh hoạt, đạo đức xám, thỏa thuận hơn là thề nguyền.",
    image: "/sect/jiuliumen.png",
  },
  {
    id: "kuanglan",
    name: "Kuanglan",
    tagline: "Tấm khiên biên cương không bao giờ hạ xuống.",
    roleHint: "Tuyến trước bền bỉ, nghĩa vụ hơn vinh quang.",
    description:
      "Xuất thân quân ngũ, giữ biên giới vì lời hứa bảo vệ dân. Hợp người thích chống chịu, chiến dịch dài, đo giá trị bằng mạng người giữ được.",
    image: "/sect/kuanglan.png",
  },
  {
    id: "liyuan",
    name: "Liyuan",
    tagline: "Nụ cười sân khấu sắc hơn kiếm.",
    roleHint: "Ảo thuật, thao túng xã hội, đấu sĩ tao nhã.",
    description:
      "Vũ khí là lụa, hóa trang, tin đồn. Phù hợp người thích lừa đối thủ bằng diễn, ca, trang phục, thay vì chỉ chém.",
    image: "/sect/liyuan.png",
  },
  {
    id: "guyun",
    name: "Lonely Cloud",
    tagline: "Kiếm khách tranh biện với số mệnh.",
    roleHint: "Kiếm kỹ chính xác, thích đấu tay đôi.",
    description:
      "Tin mọi trận có nhịp; đọc đúng sẽ cắt thẳng định mệnh. Hợp người thích 1v1, khoảng cách ngắn, chém gọn gàng, quyết định một lần.",
    image: "/sect/guyun.png",
  },
  {
    id: "zuihuayin",
    name: "Drunken Flowers",
    tagline: "Hương, độc, và yến tiệc dài hơn âm mưu.",
    roleHint: "Xã giao, gián điệp, hỗ trợ linh hoạt.",
    description:
      "Bề ngoài tiệc tùng, bên trong từng bước nhảy là nước cờ. Hợp người thích roleplay, mưu kế tình-cảm-nợ, pha trộn quyến rũ và đe dọa.",
    image: "/sect/zuihuayin.png",
  },
  {
    id: "wenjinguan",
    name: "Wenjin Pavilion",
    tagline: "Kiếm trên bàn, thư trên kệ.",
    roleHint: "Học giả-chiến binh, điều tra, lưu trữ.",
    description:
      "Thu thập luật, truyện, báo cáo rồi lặng lẽ xoay chuyển kết cục. Hợp người thích điều tra, giải đố, thắng bằng thông tin lẫn thép.",
    image: "/sect/wenjinguan.png",
  },
  {
    id: "wuxingu",
    name: "Heartless Valley",
    tagline: "Độc mạnh nhất bắt đầu từ tâm.",
    roleHint: "Debuff, thử nghiệm rủi ro cao.",
    description:
      "Nổi tiếng vì độc và ẩn dật; trị hay hại tùy lựa chọn. Hợp người thích sát thương theo thời gian, khống chế, đặt câu hỏi về “chữa” hay “hủy”.",
    image: "/sect/wuxingu.png",
  },
  {
    id: "moshandao",
    name: "Moshandaos",
    tagline: "Kỹ sư của lối đi ẩn và giấc mơ bay.",
    roleHint: "Bẫy, cơ quan, mê di chuyển.",
    description:
      "Đào đường hầm, giấu cơ quan trong đá, mơ glider và máy bay. Hợp người thích platform, dụng cụ, biến địa hình thành vũ khí/lối thoát.",
    image: "/sect/moshandao.png",
  },
];

export default function SectsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg4.webp"
            alt="Nền môn phái Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Môn phái trong Where Winds Meet – đứng cùng ai?
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Môn phái không chỉ là nhánh kỹ năng; đó là triết lý, vòng xã hội và mạch truyện dài. Chọn theo fantasy trước, tối ưu sau.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Mỗi phái tóm gọn: họ tin gì, sống/đánh ra sao, kiểu người chơi hợp. Coi như moodboard—nhân vật bạn vẫn có thể khác biệt.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Chọn phái hợp câu chuyện của bạn
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Với nhân vật đầu tiên, đừng coi lựa chọn phái là bẫy. Hãy chọn theo cảm hứng; build luôn có thể chỉnh sau.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Hỏi: bạn thích làm gì ngoài combat? Chữa lành, săn tin, nghiên cứu cơ quan, hay giữ biên? Chọn phái có nhịp sống đó, bộ kỹ năng sẽ theo sau.
        </p>
      </section>

      <section className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2 xl:grid-cols-3">
        {sects.map((sect) => (
          <article
            key={sect.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60"
          >
            <div className="relative h-32 w-full overflow-hidden bg-slate-900/80 sm:h-40">
              <Image
                src={sect.image}
                alt={sect.name}
                fill
                className="object-cover object-center opacity-90"
                sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {sect.name}
                </h3>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                  {sect.roleHint}
                </span>
              </div>
              <p className="text-xs font-medium text-emerald-200">
                {sect.tagline}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">
                {sect.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
