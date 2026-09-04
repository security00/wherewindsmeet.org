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
    id: "8MHyHYcJzJo",
    title: "Hidden Mountain Chapter 2: Heaven's Threshold Announcement Trailer",
    description:
      "Trailer official Heaven's Threshold cho Version 2.1, phu hop Cloudstair, Drunken Fist, Reflection Temple va Hidden Mountain.",
    publishedAt: "2026-08-12",
  },
  {
    id: "3_OMV6jjJtM",
    title: "How to Get Drunken Fist Martial Arts and Inner Ways",
    description:
      "Tuyen mo khoa Skystrike Gauntlets, Riven Twinblades va bon Inner Way Draught ra mat 3/9.",
    publishedAt: "2026-08-22",
  },
  {
    id: "xQqbepOOLrE",
    title: "Hidden Mountain Expansion Launch Trailer",
    description:
      "Trailer official Version 2.0 cho Hidden Mountain, Mohist Hill va Gauntlets.",
    publishedAt: "2026-07-23",
  },
  {
    id: "pNjmMRlOXG4",
    title: "Hidden Mountain Expansion Gameplay Trailer",
    description:
      "Gameplay official ve di chuyen nhe va tham hiem thang dung, huu ich cho how-to-fly.",
    publishedAt: "2026-07-17",
  },
  {
    id: "5_FI471ah5A",
    title: "Where Winds Meet - Hidden Mountain - Official Announce Trailer",
    description:
      "Trailer chinh thuc tu Xbox Games Showcase 2026 cho expansion Hidden Mountain, huu ich cho truy van roadmap, Xbox va update sap toi.",
    publishedAt: "2026-06-08",
  },
  {
    id: "ozHJ-Pd_mBo",
    title: "Where Winds Meet",
    description:
      "Video commentary co do nhan dien cao, phu hop voi traffic kham pha chung va nguoi moi nghe ve Where Winds Meet.",
    publishedAt: "2025-12-01",
  },
];
