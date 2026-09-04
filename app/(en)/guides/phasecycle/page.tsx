import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Phasecycle Dungeon Location",
  description: "Find the Phasecycle Divinecraft dungeon in northwest Hidden Mountain and run it with the standard chest-to-final-chest loop.",
  alternates: buildHreflangAlternates("/guides/phasecycle"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="phasecycle" />;
}
