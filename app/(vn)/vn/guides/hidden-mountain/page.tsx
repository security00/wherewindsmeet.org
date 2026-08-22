import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Hidden Mountain Where Winds Meet: cách mở khóa", description: "Tuyến mở khóa Hidden Mountain, video chính thức và các thay đổi mới nhất của Version 2.1.", alternates: buildHreflangAlternates("/guides/hidden-mountain", { canonicalLanguage: "vi" }) };
export default function Page() { return <GrowthOpportunityGuidePage language="vi" kind="hidden-mountain" />; }
