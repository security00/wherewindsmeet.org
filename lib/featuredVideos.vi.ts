export type FeaturedVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
};

// Vietnamese-localized descriptions for the user-curated embedded video list.
// Video IDs stay identical to the English list for parity.
export const featuredVideos: FeaturedVideo[] = [
  {
    id: "S7u9JuVHIyM",
    title: "Now's a Great Time to Jump into Where Winds Meet (Huge Updates)",
    description:
      "Video cho nguoi choi quay lai, phu hop voi truy van where winds meet, where the winds meet va cau hoi co nen bat dau trong Version 1.7 khong.",
    publishedAt: "2026-06-10",
  },
  {
    id: "5_FI471ah5A",
    title: "Where Winds Meet - Hidden Mountain - Official Announce Trailer",
    description:
      "Trailer chinh thuc tu Xbox Games Showcase 2026 cho expansion Hidden Mountain, huu ich cho truy van roadmap, Xbox va update sap toi.",
    publishedAt: "2026-06-08",
  },
  {
    id: "Dmp0G0JFPGA",
    title: "This Where Winds Meet Update Is WILD (HUGE New Map!)",
    description:
      "Creator coverage ve map moi va Imperial Palace update, phu hop voi nguoi muon xem noi dung moi co dang quay lai hay khong.",
    publishedAt: "2026-05-28",
  },
  {
    id: "0xhVPMCk5H0",
    title: "Where Winds Meet Had A HUGE Expansion",
    description:
      "Video an tuong ve expansion tu mot MMO creator lon, huu ich cho nguoi so sanh cac ban update lon va quyet dinh co quay lai game khong.",
    publishedAt: "2026-04-02",
  },
  {
    id: "ozHJ-Pd_mBo",
    title: "Where Winds Meet",
    description:
      "Video commentary co do nhan dien cao, phu hop voi traffic kham pha chung va nguoi moi nghe ve Where Winds Meet.",
    publishedAt: "2025-12-01",
  },
];
