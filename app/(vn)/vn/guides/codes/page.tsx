import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes tháng 11/2026: mã redeem WWM và cách đổi",
  description:
    "Mã kỷ niệm Hutuo trong Where Winds Meet, nguồn công bố chính thức, cách nhập mã và nhận quà qua thư. Tra thêm các mã được báo cáo và mã đã hết hạn.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <CodesGuidePage language="vi" />;
}
