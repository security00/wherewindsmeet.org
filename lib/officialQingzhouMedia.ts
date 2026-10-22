/**
 * Official Where Winds Meet Version 2.3 / Qingzhou media referenced from
 * publisher pages (wherewindsmeetgame.com easebar CDN) and Steam library art.
 * Hotlinked the same way boss/weapon publisher clips already are — not mirrored.
 */

export type OfficialMediaItem = {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceHref: string;
};

const OFFICIAL_SITE = "https://www.wherewindsmeetgame.com";
/** Internal /news cards (keep readers on-site; official originals live on those cards). */
const DEV_LETTER_1 = "/news#october-9-dev-letter-v2-3-part-1";
const DEV_LETTER_2 = "/news#october-14-dev-letter-v2-3-part-2";
const FRIENDS_OVERVIEW = "/news#october-15-version-2-3-update-overview";
const APPEARANCE_1025 = "/news#october-25-version-2-3-new-appearances";
const APPEARANCE_1015 = "/news#october-15-version-2-3-new-appearances";
const UPDATE_1025 = "/news#october-25-version-2-3-update-overview";
const STEAM_NEWS_23 =
  "https://store.steampowered.com/news/app/3564740/view/1846651706675921";
const STEAM_LIBRARY =
  "https://cdn.cloudflare.steamstatic.com/steam/apps/3564740/library_hero.jpg";

/** Shared Version 2.3 key art (official news OG / overview). */
export const friendsFromAfarCover: OfficialMediaItem = {
  src: "https://yysls-build-na.fp.ps.easebar.com/file/69118e9af5a2b7775166e5c6e0Q84oZo03",
  alt: "Official Where Winds Meet Version 2.3 Friends From Afar key art",
  caption: "Official Version 2.3 Friends From Afar key art used on the publisher news overview.",
  sourceLabel: "Our /news · Friends From Afar (official)",
  sourceHref: FRIENDS_OVERVIEW,
};

export const friendsFromAfarBanner: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261015/734a54c6-4e7c-4ff1-8efe-fa8314d2dadb.png",
  alt: "Official Friends From Afar Version 2.3 banner art",
  caption: "Publisher banner published with the October 15 Version 2.3 overview.",
  sourceLabel: "Our /news · Friends From Afar (official)",
  sourceHref: FRIENDS_OVERVIEW,
};

export const steamLibraryHero: OfficialMediaItem = {
  src: STEAM_LIBRARY,
  alt: "Where Winds Meet Steam library hero art",
  caption: "Steam library hero for app 3564740 (publisher store asset).",
  sourceLabel: "Steam · Where Winds Meet",
  sourceHref: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
};

export const qingzhouDevLetterHero: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261009/c137a6d8-bbf3-4605-af8c-a011113d5cc1.png",
  alt: "Official Dev Letter art introducing Qingzhou",
  caption: "Official Dev Letter Part 1 still introducing Qingzhou as an eastward theme region.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 1 (official)",
  sourceHref: DEV_LETTER_1,
};

export const qingzhouMountTai: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261009/8dccb4a6-c463-48eb-b457-eb7703a62248.gif",
  alt: "Official Qingzhou Eastern Peak / Mount Tai vista from Dev Letter Part 1",
  caption: "Official Dev Letter Part 1 clip of the Eastern Peak climb revealing Qingzhou.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 1 (official)",
  sourceHref: DEV_LETTER_1,
};

export const qingzhouPenglai: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261009/bed793d1-9218-4526-8b35-8756b729952f.gif",
  alt: "Official Mount Penglai academy vista from Dev Letter Part 1",
  caption: "Official Dev Letter Part 1 framing of Mount Penglai (open schedule still Reported).",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 1 (official)",
  sourceHref: DEV_LETTER_1,
};

export const waistDrumCombat: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/60af5b15-0411-4444-bfef-47c06eb9f59a.gif",
  alt: "Official Silkbind – Wings / Waist Drum combat clip from Dev Letter Part 2",
  caption: "Official Dev Letter Part 2 clip of Waist Drum ribbon combat (Silkbind – Wings).",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const waistDrumBeats: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/0993771d-070c-4689-90ab-eb8021bae033.gif",
  alt: "Official Waist Drum drumbeat rhythm clip from Dev Letter Part 2",
  caption: "Official Part 2 note on three drumbeat rhythms (offense / crowd control / support)—no DPS numbers claimed here.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const inkboundCampus: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/0d79a781-0f5d-4530-a654-ddd7882aa3b5.png",
  alt: "Official Inkbound Order campus still from Dev Letter Part 2",
  caption: "Official Dev Letter Part 2 still introducing study at the Inkbound Order in Qingzhou.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const inkboundCollegeLife: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/6c25e1b6-dc29-431f-ae44-0a8aea26c806.gif",
  alt: "Official Inkbound Order campus life clip from Dev Letter Part 2",
  caption: "Official Part 2 clip of Inkbound campus life (classes, exams, dorms).",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const inkboundVisitingDisciple: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/4d55534c-8d78-4421-a767-e1b551e13c5a.png",
  alt: "Official Inkbound Order Visiting Disciple / dual-sect still",
  caption: "Official Part 2 still for the dual-sect Visiting Disciple track.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const bossOldRaftsman: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/e8091596-1c4d-4a74-b50f-51468ea47701.png",
  alt: "Official Old Raftsman world boss still from Dev Letter Part 2",
  caption: "Official Dev Letter Part 2 identity still for Old Raftsman.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const bossTidewatcher: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/ab867edc-8b13-4d78-8245-aba3ad53b9a5.png",
  alt: "Official Tidewatcher world boss still from Dev Letter Part 2",
  caption: "Official Dev Letter Part 2 identity still for Tidewatcher.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const bossShuttlecock: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/1732f0ae-f48f-49e6-adb9-cebc9f3b7fcc.png",
  alt: "Official Shuttlecock Champion world boss still from Dev Letter Part 2",
  caption: "Official Dev Letter Part 2 identity still for Shuttlecock Champion.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const appearanceDeerParture: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261020/0444ad29-21cb-4834-bff4-5f81505a6a9d.gif",
  alt: "Official Deer-parture mount appearance clip (October 25 pack)",
  caption: "Official October 25 appearance pack clip for Deer-parture.",
  sourceLabel: "Our /news · Oct 25 appearances (official)",
  sourceHref: APPEARANCE_1025,
};

export const appearanceEtherealTrace: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261020/a0dd1e24-9a8a-4310-bae3-698129f29028.png",
  alt: "Official Ethereal Trace outfit still (October 25 pack)",
  caption: "Official October 25 appearance pack still for Ethereal Trace.",
  sourceLabel: "Our /news · Oct 25 appearances (official)",
  sourceHref: APPEARANCE_1025,
};

export const appearanceLuckyLantern: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261020/63a27bc3-73a8-4015-a767-92dd02c064a8.jpg",
  alt: "Official Lucky Lantern umbrella appearance still (October 25 pack)",
  caption: "Official October 25 appearance pack still for Lucky Lantern styles.",
  sourceLabel: "Our /news · Oct 25 appearances (official)",
  sourceHref: APPEARANCE_1025,
};


export const devLetterPart2Hero: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261014/d2cf7839-5746-4577-ba48-2dc5be9dd2af.png",
  alt: "Official Dev Letter Part 2 key art for Qingzhou folk masters",
  caption: "Official Dev Letter V2.3 Part 2 key still introducing Qingzhou folk-master duels.",
  sourceLabel: "Our /news · Dev Letter V2.3 Part 2 (official)",
  sourceHref: DEV_LETTER_2,
};

export const friendsFromAfarOct25UpdateStill: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261021/72830486-fe80-4c6a-9673-e14cad420196.png",
  alt: "Official Friends From Afar October 25 update overview still",
  caption: "Official mid-Version 2.3 overview still published with the October 25 update card.",
  sourceLabel: "Our /news · Oct 25 update overview (official)",
  sourceHref: UPDATE_1025,
};

export const appearance1015Cover: OfficialMediaItem = {
  src: "https://r.res.easebar.com/pic/20261015/30a0ea82-1624-4a24-945e-64a8afe5fbfb.png",
  alt: "Official Version 2.3 New Appearances Overview cover (October 15 & 18)",
  caption: "Official cover still from the October 15 & 18 Version 2.3 appearances overview.",
  sourceLabel: "Our /news · Oct 15 & 18 appearances (official)",
  sourceHref: APPEARANCE_1015,
};

/** Official Where Winds Meet YouTube channel — Qingzhou announcement trailer. */
export const qingzhouAnnouncementTrailer = {
  videoId: "8wq9AddMIfk",
  title: "Qingzhou Announcement Trailer | Where Winds Meet",
  channel: "Where Winds Meet (official)",
  watchUrl: "https://www.youtube.com/watch?v=8wq9AddMIfk",
  poster: friendsFromAfarCover.src,
  relatedSteamNews: STEAM_NEWS_23,
} as const;
