import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Reflection Temple Event Guide",
  description: "Start Reflection Temple from the event page, learn Ghost Month taboos, and clear offerings before the September 27, 2026 end date.",
  alternates: buildHreflangAlternates("/guides/reflection-temple"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="reflection-temple" />;
}
