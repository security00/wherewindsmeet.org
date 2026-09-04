import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Mohist Hill: Shop, Join, Gauntlets",
  description: "Use the Mohist Hill shop without joining, buy Version 2.0 Gauntlets, and treat the mountain city as the Cloudstair hub.",
  alternates: buildHreflangAlternates("/guides/mohist-hill"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="mohist-hill" />;
}
