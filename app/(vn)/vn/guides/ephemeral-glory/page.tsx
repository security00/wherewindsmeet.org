import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Ephemeral Glory Where Winds Meet: đố chim cơ quan",
  description: "Giải đố chim Ephemeral Glory bằng Celestial Seize, cấp điện xích và mốc Chen Hour.",
  alternates: buildHreflangAlternates("/guides/ephemeral-glory", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="ephemeral-glory" />;
}
