import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Drunken Fist freischalten: Skystrike Gauntlets",
  description: "Skystrike Gauntlets, Riven Twinblades und die vier Draught-Inner-Ways vom 3. September 2026 mit Video und Blockern.",
  alternates: buildHreflangAlternates("/guides/drunken-fist", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="drunken-fist" />;
}
