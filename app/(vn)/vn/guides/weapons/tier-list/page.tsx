import type { Metadata } from "next";
import WeaponTierListGuidePage from "@/components/guides/WeaponTierListGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Bảng xếp hạng vũ khí WWM | Where Winds Meet Weapon Tier List (Version 2.1)",
  description:
    "WWM Weapon Tier List và Where Winds Meet Weapon Tier List Version 2.1: cả 8 vũ khí gồm Gauntlets, trạng thái review PvE/PvP tách biệt, phương pháp, ngày tháng và nguồn chính thức—không bịa hạng S/A/B.",
  alternates: buildHreflangAlternates("/guides/weapons/tier-list", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Bảng xếp hạng vũ khí WWM | Where Winds Meet Weapon Tier List (Version 2.1)",
    description:
      "Roster có nguồn và ma trận evidence theo mode, không bịa tier vũ khí thiếu bằng chứng.",
    url: `${baseUrl}/vn/guides/weapons/tier-list`,
  },
};

export default function Page() {
  return <WeaponTierListGuidePage language="vi" />;
}
