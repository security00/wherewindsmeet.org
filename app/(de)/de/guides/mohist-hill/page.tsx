import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Mohist Hill: Shop, Beitritt, Gauntlets",
  description: "Mohist-Hill-Shop ohne Beitritt nutzen, 2.0-Gauntlets kaufen und die Bergstadt als Cloudstair-Hub behandeln.",
  alternates: buildHreflangAlternates("/guides/mohist-hill", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="mohist-hill" />;
}
