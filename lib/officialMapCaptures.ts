/**
 * Still frames captured from the official interactive map only:
 * https://www.wherewindsmeetgame.com/map/
 * Qingzhou region selected, exploration pins reset, sidebar collapsed.
 *
 * qingzhou-overview.png is a tighter crop of qingzhou-min-zoom-frame.png.
 * They are the same Qingzhou layer, not a second region.
 * The URL-bar proof capture is not shipped and must not be placed on guide pages.
 *
 * Paths are site-relative so the files in public/guides/official-map/ ship with
 * the app (CI isMediaShipped) and render on workers.dev previews without a CDN upload.
 */

import type { OfficialMediaItem } from "./officialQingzhouMedia";

export const OFFICIAL_MAP_HREF = "https://www.wherewindsmeetgame.com/map/";

const officialMapSource = {
  sourceLabel: "Official interactive map",
  sourceHref: OFFICIAL_MAP_HREF,
} as const;

export const officialMapQingzhouOverviewSrc = "/guides/official-map/qingzhou-overview.png";
export const officialMapMountTaiSrc = "/guides/official-map/mount-tai.png";
export const officialMapQingzhouFrameSrc = "/guides/official-map/qingzhou-min-zoom-frame.png";

/** Minimum-zoom Qingzhou landmass (pink border crop of the full frame). */
export const penglaiOfficialMapStill: OfficialMediaItem = {
  src: officialMapQingzhouOverviewSrc,
  alt: "Official Where Winds Meet map showing the Qingzhou landmass at minimum zoom",
  caption:
    "Official Qingzhou map layer at minimum zoom (Qingzhou selected, exploration pins reset, sidebar collapsed). Penglai is not a separately labeled layer on the official map UI in this capture. No pin totals.",
  ...officialMapSource,
};

/** Same Qingzhou overview, for the Qingzhou guide slot. */
export const qingzhouGuideOfficialMapStill: OfficialMediaItem = {
  src: officialMapQingzhouOverviewSrc,
  alt: "Official Where Winds Meet map showing the Qingzhou landmass at minimum zoom",
  caption:
    "Official Qingzhou map layer at minimum zoom. This capture does not show Penglai as a separately labeled layer on the official map UI. No marker totals.",
  ...officialMapSource,
};

/** Regional orientation for Spirit of the Grove — not a Journal shot. */
export const spiritOfTheGroveOfficialMapStill: OfficialMediaItem = {
  src: officialMapQingzhouOverviewSrc,
  alt: "Official Where Winds Meet Qingzhou map, used only to orient the region",
  caption:
    "Official Qingzhou map layer, for map orientation only. This is not an in-game Journal screenshot. No coordinates and no Spirit of the Grove pin are shown or claimed.",
  ...officialMapSource,
};

/** Fly-to Mount Tai on the same Qingzhou map. */
export const castInCurrentsOfficialMapStill: OfficialMediaItem = {
  src: officialMapMountTaiSrc,
  alt: "Official Where Winds Meet map flown to Mount Tai on the Qingzhou layer",
  caption:
    "Official map fly-to of Mount Tai on the Qingzhou layer, for map orientation only. This is not an in-game Journal screenshot, and no coordinates are shown or claimed.",
  ...officialMapSource,
};

/** Full-width minimum-zoom Qingzhou frame (M1). */
export const interactiveMapOfficialQingzhouStill: OfficialMediaItem = {
  src: officialMapQingzhouFrameSrc,
  alt: "Official Where Winds Meet map, full-width minimum-zoom Qingzhou frame",
  caption:
    "Official map Qingzhou layer capture at minimum zoom. Penglai is not a separately labeled layer on this official map UI. No pin totals.",
  ...officialMapSource,
};
