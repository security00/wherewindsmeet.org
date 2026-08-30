import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import ItemTabs from "@/app/(en)/guides/items/ItemTabs";
import { itemCategories, itemCoverage } from "@/app/(en)/guides/items/data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Vật phẩm Where Winds Meet – công dụng và nguồn đã xác minh",
  description:
    "Hướng dẫn vật phẩm Where Winds Meet dựa trên nguồn. Chỉ công dụng và cách kiếm đã kiểm chứng mới được xuất bản; mục chưa xác minh vẫn ở trạng thái chờ.",
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
    "verified-systems-and-tuning": "Hệ thống & tinh chỉnh đã xác minh",
    "mystic-arts-upgrades": "Nâng cấp bí thuật (Mystic)",
    "gear-tuning": "Tinh chỉnh trang bị",
  };

  const verifiedItemText: Record<string, { use: string; location: string }> = {
    "Oscillating Jade": {
      use: "Trang sự kiện Echoes Across the World chính thức xác nhận đây là phần thưởng, nhưng không mô tả công dụng lâu dài trong game. Vì vậy mục này không suy đoán thêm về chức năng.",
      location: "Chỉ là nguồn lịch sử: sự kiện Echoes Across the World tháng 4/2026 liệt kê Oscillating Jade ở nhiều mốc cộng hưởng và phần thưởng cho lần tải lên hoặc phát hành bản ghi chính thức đầu tiên. Đây không phải bằng chứng về nguồn farm thường trực hiện nay.",
    },
    "Modulating Stone": {
      use: "Ghi chú Version 2.0 cho biết vật phẩm có thể đặt lại trang bị Epic hoặc Legendary Tier 100 đủ điều kiện để chỉ giữ thuộc tính ban đầu trước khi tinh chỉnh lại. Nguyên liệu cũ không được hoàn trả, thao tác không thể đảo ngược và chịu giới hạn/hồi chiêu theo từng món.",
      location: "Ghi chú chính thức ngày 23/7/2026 nêu nguồn là tái chế hoặc tiêu thụ Fully Tuned Legendary Gear, ngoại trừ Archery Arts. Hãy kiểm tra xác nhận hiện tại trong game trước khi dùng trang bị.",
    },
    "Retuning Stone: Mirage": {
      use: "Bản sửa lỗi chính thức ngày 7/8 xác định đây là vật phẩm retuning tại Hidden Mountain và ghi nhận sửa giới hạn mua; nguồn không công bố giá hay bảo đảm luôn bán vĩnh viễn.",
      location: "Bản sửa lỗi chính thức ngày 7/8/2026 liệt kê Retuning Stone: Mirage tại Pangolin Stand ở Hidden Mountain. Tình trạng bán và giới hạn mua có thể thay đổi sau build đó.",
    },
    "Horse Gallop Tactic": {
      use: "Bản cập nhật ngày 28/5 cho biết khi dùng, vật phẩm tăng giới hạn trang bị Spirit Gift Skill và cho phép gắn hoặc tháo kỹ năng mà thú cưỡi đã sở hữu. Số ô khác nhau tùy thú cưỡi.",
      location: "Bản cập nhật chính thức ngày 28/5/2026 nêu Shop và phần thưởng Divine Steed Level là nguồn nhận. Nguồn không công bố giá, tỷ lệ hay lịch tồn tại vĩnh viễn hiện tại.",
    },
  };

  const localizeItem = <T extends { name: string; use: string; location: string }>(item: T): T => {
    const text = verifiedItemText[item.name];
    return text ? { ...item, ...text } : item;
  };

  const localizedCategories = itemCategories.map((category) => ({
    ...category,
    title: categoryText[category.id]?.title ?? category.title,
    blurb: categoryText[category.id]?.blurb ?? category.blurb,
    items: category.items.map(localizeItem),
    groups: category.groups?.map((group) => ({
      ...group,
      title: groupTitle[group.id] ?? group.title,
      items: group.items.map(localizeItem),
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
            Chỉ mục vật phẩm Where Winds Meet dựa trên nguồn kiểm chứng.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Chỉ mục tách các mục hướng dẫn đã xác minh khỏi những tên vật phẩm còn chờ biên tập. Một vật phẩm
            chỉ xuất hiện khi có nguồn đáng tin cậy cùng công dụng hoặc cách kiếm cụ thể. Media chỉ được hiển thị khi nguồn gốc rõ ràng.
            Các mục đang chờ vẫn được thống kê nhưng không được trình bày như địa điểm farm đã xác nhận. Kết hợp mục đã kiểm chứng với{" "}
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
            để lập kế hoạch.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-amber-500/25 bg-amber-950/20 p-6 shadow-lg shadow-slate-950/40">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Trạng thái kiểm chứng</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Không đoán thông tin còn thiếu.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            Tên trùng lặp đã được loại bỏ. Bản ghi chưa có thông tin gameplay và nguồn đáng tin cậy sẽ không xuất hiện trong chỉ mục chính.
          </p>
        </div>
        <dl className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"><dt className="text-xs uppercase tracking-wide text-slate-400">Tên duy nhất đã ghi nhận</dt><dd className="mt-1 text-2xl font-semibold text-slate-100">{itemCoverage.catalogued}</dd></div>
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-4"><dt className="text-xs uppercase tracking-wide text-emerald-300">Đã xuất bản và có nguồn</dt><dd className="mt-1 text-2xl font-semibold text-emerald-100">{itemCoverage.published}</dd></div>
          <div className="rounded-2xl border border-amber-500/25 bg-amber-950/20 p-4"><dt className="text-xs uppercase tracking-wide text-amber-300">Chờ xác minh</dt><dd className="mt-1 text-2xl font-semibold text-amber-100">{itemCoverage.pending}</dd></div>
        </dl>
      </section>

      <ItemTabs
        categories={localizedCategories}
        uiText={{
          heading: "Danh mục vật phẩm đã xác minh",
          imageUnavailable: "Chưa có ảnh đã xác minh",
          acquisitionLabel: "Cách kiếm:",
          verificationSourceLabel: "Nguồn xác minh",
          scrollToItems: "Cuộn xuống danh sách ↓",
          itemsSuffix: "món",
          verifiedBadge: "Đã xác minh",
          verifiedSuffix: "đã xác minh",
          pendingSuffix: "chờ xác minh",
          cataloguedSuffix: "đã ghi nhận",
          emptyHeading: "Chưa có mục quan trọng nào được xác minh",
          emptyBody: "Bản ghi thiếu nguồn đáng tin cậy và chi tiết gameplay cụ thể vẫn được ẩn khỏi chỉ mục chính.",
          pendingRetentionTemplate: "{count} bản ghi {status} được giữ lại để biên tập xác minh.",
        }}
      />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Tiêu chuẩn xuất bản</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Mọi tuyên bố gameplay phải có nguồn kiểm chứng đáng tin cậy.</li>
            <li>Cần ít nhất một công dụng hoặc cách kiếm cụ thể.</li>
            <li>Chỉ hiển thị ảnh tự chụp hoặc media chính thức có nguồn rõ ràng.</li>
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
