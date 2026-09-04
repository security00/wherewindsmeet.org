import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Inner Ways Where Winds Meet: slot và bộ Draught mới",
  description: "Comprehend và gắn Inner Ways, lấy Eonpour, Skyspeak, Mistwing, Volutefit từ đường Draught 3/9.",
  alternates: buildHreflangAlternates("/guides/inner-ways", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="inner-ways" />;
}
