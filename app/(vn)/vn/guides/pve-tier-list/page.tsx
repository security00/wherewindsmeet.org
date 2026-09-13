import type { Metadata } from "next";
import PveTierListGuidePage from "@/components/guides/PveTierListGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Bảng xếp hạng PvE Where Winds Meet: review evidence Version 2.1",
  description:
    "Bảng xếp hạng PvE Where Winds Meet Version 2.1: cả 8 hệ vũ khí, phủ sóng Gauntlets, trạng thái review boss/dungeon và nguồn chính thức—không bịa hạng S/A/B.",
  alternates: buildHreflangAlternates("/guides/pve-tier-list", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Bảng xếp hạng PvE Where Winds Meet: review evidence Version 2.1",
    description:
      "Review evidence tập trung PvE, tách sự thật roster đã xác nhận khỏi hạng chữ cái thiếu bằng chứng.",
    url: `${baseUrl}/vn/guides/pve-tier-list`,
  },
};

export default function Page() {
  return <PveTierListGuidePage language="vi" />;
}
