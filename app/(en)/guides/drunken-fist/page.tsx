import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Drunken Fist Unlock: Skystrike Gauntlets & Twinblades",
  description: "Unlock Skystrike Gauntlets, Riven Twinblades, and the four Draught Inner Ways added on September 3, 2026, with blockers and a video route.",
  alternates: buildHreflangAlternates("/guides/drunken-fist"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="drunken-fist" />;
}
