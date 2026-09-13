import type { Metadata } from "next";
import PveTierListGuidePage from "@/components/guides/PveTierListGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet PvE Tier List: Version 2.1 Evidence Review",
  description:
    "Where Winds Meet PvE tier list for Version 2.1: all 8 weapon families, Gauntlets coverage, boss/dungeon review status, and official sources—no invented S/A/B ranks.",
  alternates: buildHreflangAlternates("/guides/pve-tier-list"),
  openGraph: {
    title: "Where Winds Meet PvE Tier List: Version 2.1 Evidence Review",
    description:
      "A PvE-focused evidence review that separates confirmed roster facts from unsupported letter grades.",
    url: `${baseUrl}/guides/pve-tier-list`,
  },
};

export default function Page() {
  return <PveTierListGuidePage language="en" />;
}
