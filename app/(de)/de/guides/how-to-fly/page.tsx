import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet fliegen: Meteor Flight und Afterglow Pendant",
  description: "Meteor Flight ueber Afterglow freischalten und mit dem Qinghe-Exploration-4-Pendant frei fliegen.",
  alternates: buildHreflangAlternates("/guides/how-to-fly", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="how-to-fly" />;
}
