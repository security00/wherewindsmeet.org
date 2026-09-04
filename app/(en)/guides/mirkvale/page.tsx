import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Mirkvale Walkthrough and Bell Toller",
  description: "Unlock the Mirkvale campaign west of Heaven's Threshold after Cloudstair and prepare for the Bell Toller fight.",
  alternates: buildHreflangAlternates("/guides/mirkvale"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="mirkvale" />;
}
