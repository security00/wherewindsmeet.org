import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import ItemTabs from "../../../guides/items/ItemTabs";
import { itemCategories } from "../../../guides/items/data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Chỉ mục vật phẩm Where Winds Meet – nguyên liệu, tiêu hao, hiếm",
  description:
    "Chỉ mục vật phẩm Where Winds Meet với tab danh mục, hình ảnh, công dụng và cách kiếm nhanh, bám theo bố cục wiki.",
  alternates: buildHreflangAlternates("/guides/items", { canonicalLanguage: "vi" }),
};

export default function ItemsPage() {
  const categoryText: Record<string, { title: string; blurb: string }> = {
    materials: {
      title: "Nguyên liệu",
      blurb: "Tài nguyên cơ bản từ hái lượm/săn bắt — dùng để chế tạo, trang trí hoặc nộp ủy thác.",
    },
    development: {
      title: "Nguyên liệu phát triển",
      blurb: "Dùng cho đột phá vũ khí, nâng nội công/kỹ năng, bản vẽ cơ quan và các nâng cấp nâng cao.",
    },
    consumables: {
      title: "Tiêu hao",
      blurb: "Đồ ăn, rượu và mồi câu — vật phẩm dùng một lần cho buff chiến đấu/sinh hoạt.",
    },
    common: {
      title: "Vật phẩm thường",
      blurb: "Đồ sưu tầm, quà tặng và vật phẩm linh tinh — hay dùng để tăng thiện cảm, làm nhiệm vụ hoặc săn thành tựu.",
    },
  };

  const groupTitle: Record<string, string> = {
    "inner-way-passives": "Nội công thụ động",
    "martial-arts-upgrades": "Nâng cấp võ học",
    miscellaneous: "Khác",
    "mystic-arts-upgrades": "Nâng cấp bí thuật (Mystic)",
    "gear-tuning": "Tinh chỉnh trang bị",
  };

  const localizeUse = (value: string) => {
    switch (value) {
      case "Crafting/Breakthrough material (details pending)":
        return "Nguyên liệu chế tạo/đột phá (đang cập nhật chi tiết)";
      case "Weapon/Martial Arts/Mechanism development material (details pending)":
        return "Nguyên liệu phát triển vũ khí/võ học/cơ quan (đang cập nhật chi tiết)";
      case "Consumable: effect details pending":
        return "Vật phẩm tiêu hao: hiệu ứng đang cập nhật";
      case "Common item: effect details pending":
        return "Vật phẩm thường: hiệu ứng đang cập nhật";
      default:
        return value;
    }
  };

  const localizeLocation = (value: string) => {
    switch (value) {
      case "Gathering/Hunting/Merchant/Commission (details pending)":
        return "Hái lượm/Săn bắt/Thương nhân/Ủy thác (đang cập nhật chi tiết)";
      case "Secret Realm/Commission/Merchant/Task Drop (details pending)":
        return "Bí cảnh (Secret Realm)/Ủy thác/Thương nhân/Rơi từ nhiệm vụ (đang cập nhật chi tiết)";
      case "Acquisition method pending":
        return "Đang cập nhật cách kiếm";
      default:
        return value;
    }
  };

  const localizedCategories = itemCategories.map((category) => ({
    ...category,
    title: categoryText[category.id]?.title ?? category.title,
    blurb: categoryText[category.id]?.blurb ?? category.blurb,
    items: category.items.map((item) => ({
      ...item,
      use: localizeUse(item.use),
      location: localizeLocation(item.location),
    })),
    groups: category.groups?.map((group) => ({
      ...group,
      title: groupTitle[group.id] ?? group.title,
      items: group.items.map((item) => ({
        ...item,
        use: localizeUse(item.use),
        location: localizeLocation(item.location),
      })),
    })),
  }));

  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg2.webp"
            alt="Nền vật phẩm Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Vật phẩm & danh mục
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Chỉ mục vật phẩm Where Winds Meet với tab tra nhanh.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Theo bố cục wiki, vật phẩm được chia theo tab bấm nhanh. Mỗi tab hiển thị vật phẩm tiêu biểu, công dụng và cách lấy. Kết hợp với{" "}
            <Link
              href="/vn/guides/martial-arts-weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              bảng Vũ khí/Võ học
            </Link>{" "}
            và{" "}
            <Link
              href="/vn/guides/skill-theft"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              hướng dẫn Trộm chiêu
            </Link>{" "}
            để lên lộ trình farm tài nguyên.
          </p>
        </div>
      </section>

      <ItemTabs
        categories={localizedCategories}
        uiText={{
          heading: "Chọn danh mục vật phẩm",
          imagePending: "Chưa có ảnh",
          acquisitionLabel: "Cách kiếm:",
          scrollToItems: "Cuộn xuống danh sách ↓",
          itemsSuffix: "món",
        }}
      />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Mẹo dùng</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Ưu tiên gom nguyên liệu và nguyên liệu phát triển trước—chúng khóa tiến độ vũ khí và tâm pháp.</li>
            <li>Chuẩn bị 2-3 món ăn nhóm; ăn trước khi party để tăng độ “tha thứ” khi sai sót.</li>
            <li>Dùng vật phẩm thường làm quà/thiện cảm để mở encounter bất ngờ và giảm giá.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Hướng dẫn liên quan</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link
                href="/vn/guides/new-players"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Lộ trình tân thủ: khám phá khôn ngoan & thứ tự tài nguyên
              </Link>
            </li>
            <li>
              <Link
                href="/vn/guides/weapons"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Tổng quan vũ khí: chọn vũ khí chính & build
              </Link>
            </li>
            <li>
              <Link
                href="/vn/guides/bosses"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Boss: checklist vật phẩm trước trận
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
