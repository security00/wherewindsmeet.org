import type { Metadata } from "next";
import WeaponTierListGuidePage from "@/components/guides/WeaponTierListGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "WWM Weapon Tier List | Where Winds Meet Weapon Tier List (Version 2.1)",
  description:
    "WWM Weapon Tier List and Where Winds Meet Weapon Tier List for Version 2.1: all 8 weapons including Gauntlets, separate PvE/PvP review status, methodology, dates, and official sources—no invented S/A/B ranks.",
  alternates: buildHreflangAlternates("/guides/weapons/tier-list"),
  openGraph: {
    title: "WWM Weapon Tier List | Where Winds Meet Weapon Tier List (Version 2.1)",
    description:
      "A sourced roster and mode-specific evidence matrix that does not invent unsupported weapon tiers.",
    url: `${baseUrl}/guides/weapons/tier-list`,
  },
};

export default function Page() {
  return <WeaponTierListGuidePage language="en" />;
}
