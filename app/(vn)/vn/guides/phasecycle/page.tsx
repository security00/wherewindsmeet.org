import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Dungeon Phasecycle Where Winds Meet",
  description: "Tìm Divinecraft Phasecycle ở tây bắc Hidden Mountain và chạy vòng rương tới rương cuối.",
  alternates: buildHreflangAlternates("/guides/phasecycle", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="phasecycle" />;
}
