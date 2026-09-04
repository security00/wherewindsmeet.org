import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet How to Fly: Meteor Flight & Afterglow Pendant",
  description: "Unlock Meteor Flight with the Afterglow quest, then claim the Qinghe Exploration Level 4 Afterglow Pendant for free flight.",
  alternates: buildHreflangAlternates("/guides/how-to-fly"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="how-to-fly" />;
}
