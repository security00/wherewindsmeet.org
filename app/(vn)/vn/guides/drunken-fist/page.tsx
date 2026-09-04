import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Mở khóa Drunken Fist Where Winds Meet: Skystrike Gauntlets",
  description: "Mở Skystrike Gauntlets, Riven Twinblades và bốn Inner Way Draught ra mắt 3/9/2026, kèm video và chỗ hay kẹt.",
  alternates: buildHreflangAlternates("/guides/drunken-fist", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="drunken-fist" />;
}
