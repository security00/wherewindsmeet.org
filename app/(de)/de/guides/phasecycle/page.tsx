import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Phasecycle Dungeon",
  description: "Phasecycle im Nordwesten von Hidden Mountain finden und als Standard-Divinecraft mit Finaltruhe laufen.",
  alternates: buildHreflangAlternates("/guides/phasecycle", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="phasecycle" />;
}
