import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Inner Ways: Slots and New Draught Set",
  description: "Comprehend and socket Inner Ways, then pick up Eonpour, Skyspeak, Mistwing, and Volutefit from the September 3 Draught path.",
  alternates: buildHreflangAlternates("/guides/inner-ways"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="inner-ways" />;
}
