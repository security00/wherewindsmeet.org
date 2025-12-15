import type { Metadata } from "next";
import Image from "next/image";
import FeaturedImagesGallery from "../../../guides/cosmetics/FeaturedImagesGallery";
import AppearanceSetsDisplay from "../../../guides/cosmetics/AppearanceSetsDisplay";
import OtherAppearancesDisplay from "../../../guides/cosmetics/OtherAppearancesDisplay";
import appearanceSets from "../../../guides/cosmetics/appearance-sets.vi.json";
import otherAppearances from "../../../guides/cosmetics/other-appearances.vi.json";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Ngoại hình (Cosmetics) & diện mạo Where Winds Meet",
  description:
    "Hướng dẫn ngoại hình (cosmetics/appearance) Where Winds Meet: set diện mạo, kiểu tóc, cách sở hữu, độ hiếm và gợi ý phối đồ theo chủ đề giang hồ/Mặc gia.",
  alternates: buildHreflangAlternates("/guides/cosmetics", { canonicalLanguage: "vi" }),
};

export default function CosmeticsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Nền cosmetics Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Ngoại hình & diện mạo
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Tùy biến diện mạo nhân vật.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Khám phá các set ngoại hình lấy cảm hứng từ giang hồ và truyền thuyết Mặc gia. Mỗi món cosmetics/appearance đều có chủ đề thẩm mỹ riêng; phối trang phục (outfit), kiểu tóc và hiệu ứng để thể hiện phong cách của bạn.
          </p>
        </div>
      </section>

      <FeaturedImagesGallery />

      <AppearanceSetsDisplay sets={appearanceSets} />

      <OtherAppearancesDisplay appearances={otherAppearances} />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Mẹo tùy biến</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Nhiều set tách áo/quần — trộn để có phối đồ riêng.</li>
            <li>Phần lớn ngoại hình có thể nhuộm màu.</li>
            <li>Sự kiện giới hạn thường giảm giá mạnh — kiểm tra kỹ để không bỏ lỡ.</li>
            <li>Các set chủ đề Mặc gia/giang hồ có bản sắc rất rõ — sưu tầm để hoàn thiện phong cách.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Tiền tệ</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><span className="text-emerald-200 font-semibold">Octave Aperture (八音窍)</span> – tiền cao cấp (nhận từ gameplay/sự kiện).</li>
            <li><span className="text-emerald-200 font-semibold">Resonant Pearl (长鸣珠)</span> – tiền phổ thông để mua ngoại hình.</li>
            <li>Ưu tiên tiết kiệm cho vật phẩm giới hạn hoặc cửa hàng Harmony xoay kỳ.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-2xl font-semibold text-slate-50 mb-4">Về tùy biến diện mạo</h2>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Tùy biến không chỉ là “đẹp” — nhiều set dựa trên thẩm mỹ và câu chuyện giang hồ/Mặc gia, thể hiện tinh thần thủ công và văn hóa.
          </p>
          <p>
            Harmony Store có bộ sưu tập vĩnh viễn lẫn xoay kỳ. Từ cơ khí đồng của Peng Shan đến chủ đề đêm mưa của Túy Vân, luôn có lựa chọn phù hợp phong cách của bạn.
          </p>
          <p className="text-emerald-200">
            Mẹo: kiểm tra định kỳ để bắt kịp vật phẩm theo mùa và các đợt khuyến mãi.
          </p>
        </div>
      </section>
    </article>
  );
}
