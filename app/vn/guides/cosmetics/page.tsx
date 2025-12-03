import type { Metadata } from "next";
import Image from "next/image";
import FeaturedImagesGallery from "../../../guides/cosmetics/FeaturedImagesGallery";
import AppearanceSetsDisplay from "../../../guides/cosmetics/AppearanceSetsDisplay";
import OtherAppearancesDisplay from "../../../guides/cosmetics/OtherAppearancesDisplay";
import appearanceSets from "../../../guides/cosmetics/appearance-sets.json";
import otherAppearances from "../../../guides/cosmetics/other-appearances.json";

export const metadata: Metadata = {
  title: "Cosmetics & diện mạo Where Winds Meet",
  description:
    "Hướng dẫn cosmetics/appearance Where Winds Meet: set ngoại hình, kiểu tóc, cách sở hữu, độ hiếm và cảm hứng văn hóa.",
  alternates: {
    canonical: "https://wherewindsmeet.org/vn/guides/cosmetics",
  },
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
            Cosmetics & diện mạo
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Tùy biến diện mạo nhân vật.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Khám phá set ngoại hình lấy cảm hứng từ văn hóa giang hồ và Mặc gia. Mỗi cosmetic kể câu chuyện riêng với thẩm mỹ Trung Hoa cổ; phối đồ, kiểu tóc và hiệu ứng để thể hiện cá tính.
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
            <li>Nhiều set tách áo/quần—trộn để có phối đồ riêng.</li>
            <li>Hầu hết cosmetics có thể nhuộm màu.</li>
            <li>Sự kiện giới hạn thường giảm giá mạnh—xem kỹ trước khi bỏ lỡ.</li>
            <li>Set lấy cảm hứng Mặc gia và giang hồ—sưu tầm để trải nghiệm trọn văn hóa.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Tiền tệ</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><span className="text-emerald-200 font-semibold">Octave Aperture (八音窍)</span> - tiền cao cấp từ gameplay/sự kiện.</li>
            <li><span className="text-emerald-200 font-semibold">Resonant Pearl (长鸣珠)</span> - tiền phổ thông mua cosmetics.</li>
            <li>Tiết kiệm cho vật phẩm giới hạn hoặc cửa hàng Harmony xoay kỳ.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-2xl font-semibold text-slate-50 mb-4">Về tùy biến diện mạo</h2>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Tùy biến không chỉ là ngoại hình—mỗi set dựa trên thẩm mỹ và câu chuyện giang hồ/Mặc gia, thể hiện thủ công và văn hóa.
          </p>
          <p>
            Harmony Store có bộ sưu tập vĩnh viễn lẫn xoay kỳ. Từ cơ khí đồng của bộ Peng Shan đến thiết kế lấy cảm hứng mưa, luôn có lựa chọn hợp gu.
          </p>
          <p className="text-emerald-200">
            Mẹo: kiểm tra thường xuyên để bắt kịp vật phẩm mùa và khuyến mãi.
          </p>
        </div>
      </section>
    </article>
  );
}

