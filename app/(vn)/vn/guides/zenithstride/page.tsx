import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Zenithstride và Zenithmaze Where Winds Meet",
  description: "Tới cặp Divinecraft Heaven's Threshold sau Cloudstair, tách khỏi Mirkvale và Phasecycle.",
  alternates: buildHreflangAlternates("/guides/zenithstride", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="zenithstride" />;
}
