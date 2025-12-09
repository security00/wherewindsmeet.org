import type { Metadata } from "next";
import OneLeafPage, { metadata as enMetadata } from "../../../guides/one-leaf-one-life/page";
import { buildHreflangAlternates } from "@/lib/hreflang";

const vnUrl = "https://wherewindsmeet.org/vn/guides/one-leaf-one-life";

export const metadata: Metadata = {
  ...enMetadata,
  alternates: buildHreflangAlternates("/guides/one-leaf-one-life", { canonicalLanguage: "vi" }),
  openGraph: enMetadata.openGraph
    ? {
        ...enMetadata.openGraph,
        url: vnUrl,
      }
    : undefined,
};

export default OneLeafPage;
