import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Reflection Temple Event-Guide",
  description: "Reflection Temple ueber die Eventseite starten, Ghost-Month-Tabus lernen und vor dem 27. September 2026 abschliessen.",
  alternates: buildHreflangAlternates("/guides/reflection-temple", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="reflection-temple" />;
}
