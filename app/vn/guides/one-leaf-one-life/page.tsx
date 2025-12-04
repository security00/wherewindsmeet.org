import type { Metadata } from "next";
import OneLeafPage, { metadata as enMetadata } from "../../../guides/one-leaf-one-life/page";

const vnUrl = "https://wherewindsmeet.org/vn/guides/one-leaf-one-life";

export const metadata: Metadata = {
  ...enMetadata,
  alternates: {
    ...(enMetadata.alternates || {}),
    canonical: vnUrl,
  },
  openGraph: enMetadata.openGraph
    ? {
        ...enMetadata.openGraph,
        url: vnUrl,
      }
    : undefined,
};

export default OneLeafPage;
