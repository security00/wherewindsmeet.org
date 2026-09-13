import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "WWM Codes tháng 9/2026: Where Winds Meet Codes (kiểm tra 2026-09-13)",
  description:
    "WWM codes kiểm tra 2026-09-13 (tháng 9/2026): mã redeem Where Winds Meet được báo cáo, gắn nhãn xác minh trong game, bước đổi thưởng, cảnh báo mã hết hạn và liên kết mã outfit/nhân vật.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <CodesGuidePage language="vi" />;
}
