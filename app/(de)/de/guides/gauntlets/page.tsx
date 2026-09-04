import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Gauntlets: Mohist-Hill-Shop",
  description: "Version-2.0-Gauntlets im Mohist-Hill-Shop kaufen, auch ohne Sekte, getrennt vom Drunken-Fist-Pfad.",
  alternates: buildHreflangAlternates("/guides/gauntlets", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="gauntlets" />;
}
