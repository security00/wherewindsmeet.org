import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Reflection Temple Event Guide",
  description: "Reflection Temple status and recap: the entrance is closed since Version 2.2 and reopens when Jiangnan arrives with progress kept. Ghost Month taboos, offerings, and clear steps.",
  alternates: buildHreflangAlternates("/guides/reflection-temple"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="reflection-temple" />;
}
