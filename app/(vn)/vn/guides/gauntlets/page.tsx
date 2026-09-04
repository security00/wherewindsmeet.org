import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Gauntlets Where Winds Meet: mua shop Mohist Hill",
  description: "Mua Gauntlets Version 2.0 trong shop Mohist Hill khi chưa nhập môn, phân biệt với Drunken Fist 3/9.",
  alternates: buildHreflangAlternates("/guides/gauntlets", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="gauntlets" />;
}
