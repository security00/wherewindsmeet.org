import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Vị trí Divinecraft Dungeons Where Winds Meet",
  description: "Cách chạy hang đố Divinecraft, cụm Qinghe, và bộ Hidden Mountain gồm Phasecycle và Zenithstride.",
  alternates: buildHreflangAlternates("/guides/divinecraft-dungeons", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="divinecraft-dungeons" />;
}
