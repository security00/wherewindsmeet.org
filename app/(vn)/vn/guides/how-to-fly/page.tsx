import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Cách bay Where Winds Meet: Meteor Flight và Afterglow Pendant",
  description: "Mở Meteor Flight bằng Afterglow, rồi lấy Afterglow Pendant ở Qinghe Exploration Lv.4 để bay tự do.",
  alternates: buildHreflangAlternates("/guides/how-to-fly", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <IntentGuidePage language="vi" kind="how-to-fly" />;
}
