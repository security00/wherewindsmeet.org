import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Mohist Hill Where Winds Meet: shop, nhập môn, Gauntlets",
  description: "Xem shop Mohist Hill khi chưa nhập môn, mua Gauntlets 2.0, dùng thành núi làm hub Cloudstair.",
  alternates: buildHreflangAlternates("/guides/mohist-hill", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="mohist-hill" />;
}
