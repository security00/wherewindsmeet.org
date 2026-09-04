import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Ephemeral Glory Bird Puzzle Guide",
  description: "Solve every Ephemeral Glory mechanical bird puzzle with Celestial Seize, chain power, and the Chen Hour start.",
  alternates: buildHreflangAlternates("/guides/ephemeral-glory"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="ephemeral-glory" />;
}
