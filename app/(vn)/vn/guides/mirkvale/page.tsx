import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Mirkvale Where Winds Meet: walkthrough và Bell Toller",
  description: "Mở campaign Mirkvale phía tây Heaven's Threshold sau Cloudstair và chuẩn bị đánh Bell Toller.",
  alternates: buildHreflangAlternates("/guides/mirkvale", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="mirkvale" />;
}
