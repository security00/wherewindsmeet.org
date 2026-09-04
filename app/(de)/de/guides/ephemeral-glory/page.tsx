import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Ephemeral Glory Vogelraetsel",
  description: "Alle mechanischen Vogelraetsel in Ephemeral Glory mit Celestial Seize, Kettenstrom und Chen Hour loesen.",
  alternates: buildHreflangAlternates("/guides/ephemeral-glory", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="ephemeral-glory" />;
}
