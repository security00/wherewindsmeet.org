import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes tháng 10/2026: mã redeem WWM và cách đổi",
  description:
    "Where Winds Meet codes tháng 10/2026 (kiểm tra 2026-10-21, Version 2.3): mã redeem WWM được báo cáo cần xác minh trong game, cách đổi thưởng, cảnh báo mã hết hạn và liên kết mã outfit/nhân vật.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <CodesGuidePage language="vi" />;
}
