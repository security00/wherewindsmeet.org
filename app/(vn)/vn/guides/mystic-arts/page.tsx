import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Danh sách mở khóa Mystic Arts Where Winds Meet",
  description: "Trang bị Mystic Arts, mở slot, tìm Tai Chi, Cloud Steps, Celestial Seize, Touch of Death và Meteor Flight.",
  alternates: buildHreflangAlternates("/guides/mystic-arts", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="mystic-arts" />;
}
