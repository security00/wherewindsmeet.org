import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Gauntlets: Mohist Hill Shop Unlock",
  description: "Buy the Version 2.0 Gauntlets from the Mohist Hill shop without joining the sect, and tell it apart from September 3 Drunken Fist.",
  alternates: buildHreflangAlternates("/guides/gauntlets"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="gauntlets" />;
}
