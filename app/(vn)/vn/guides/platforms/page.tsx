import PlatformsGuidePage from "@/components/PlatformsGuidePage";
import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android",
  description:
    "Huong dan nen tang Where Winds Meet cho Xbox, PS5, PC, iOS, Android, mobile, cross-play va duong tai chinh thuc.",
  alternates: buildHreflangAlternates("/guides/platforms", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android",
    description:
      "Tinh trang nen tang chinh thuc va goi y chon ban Where Winds Meet tren Xbox, PS5, PC, iOS, Android, mobile.",
    url: `${baseUrl}/vn/guides/platforms`,
  },
  twitter: {
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android",
    description:
      "Tinh trang nen tang chinh thuc va goi y chon ban Where Winds Meet tren Xbox, PS5, PC, iOS, Android, mobile.",
  },
};

export default function PlatformsPage() {
  return <PlatformsGuidePage language="vi" />;
}
