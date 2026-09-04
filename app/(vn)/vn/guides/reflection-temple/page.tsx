import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Sự kiện Reflection Temple Where Winds Meet",
  description: "Vào Reflection Temple từ trang sự kiện, học kiêng kỵ Ghost Month và clear lễ vật trước 27/9/2026.",
  alternates: buildHreflangAlternates("/guides/reflection-temple", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="reflection-temple" />;
}
