import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Divinecraft Dungeons Orte",
  description: "So funktionieren Divinecraft-Kavernen, Qinghe-Orte und das Hidden-Mountain-Set mit Phasecycle und Zenithstride.",
  alternates: buildHreflangAlternates("/guides/divinecraft-dungeons", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="divinecraft-dungeons" />;
}
