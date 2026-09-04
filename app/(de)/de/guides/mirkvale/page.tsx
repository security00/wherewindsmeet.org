import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Mirkvale Walkthrough und Bell Toller",
  description: "Mirkvale westlich von Heaven's Threshold nach Cloudstair oeffnen und Bell Toller vorbereiten.",
  alternates: buildHreflangAlternates("/guides/mirkvale", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="mirkvale" />;
}
