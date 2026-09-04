import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Inner Ways: Slots und Draught-Set",
  description: "Inner Ways verstehen und socketen, dann Eonpour, Skyspeak, Mistwing und Volutefit vom 3. September holen.",
  alternates: buildHreflangAlternates("/guides/inner-ways", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="inner-ways" />;
}
