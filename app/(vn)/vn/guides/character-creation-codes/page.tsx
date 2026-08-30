import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Mã tạo nhân vật Where Winds Meet: nhập QR", description: "Cách dùng mã tạo nhân vật Where Winds Meet bằng chữ hoặc QR, theo phiên bản PC và nêu rõ giới hạn xác minh giao diện.", alternates: buildHreflangAlternates("/guides/character-creation-codes", { canonicalLanguage: "vi" }) };
export default function Page() { return <GrowthOpportunityGuidePage language="vi" kind="character-codes" />; }
