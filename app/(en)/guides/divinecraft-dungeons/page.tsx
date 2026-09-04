import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Divinecraft Dungeons Locations",
  description: "How Divinecraft puzzle caverns work, Qinghe locations, and the Hidden Mountain set including Phasecycle and Zenithstride.",
  alternates: buildHreflangAlternates("/guides/divinecraft-dungeons"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="divinecraft-dungeons" />;
}
