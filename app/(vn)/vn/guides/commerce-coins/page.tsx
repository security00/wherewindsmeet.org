import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Commerce Coins Where Winds Meet: cách kiếm và dùng", description: "Vòng giao dịch Commerce Coins an toàn hơn, cách dùng, kiểm tra thị trường và video hướng dẫn.", alternates: buildHreflangAlternates("/guides/commerce-coins", { canonicalLanguage: "vi" }) };
export default function Page() { return <GrowthOpportunityGuidePage language="vi" kind="commerce-coins" />; }
