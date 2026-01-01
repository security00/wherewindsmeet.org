import type { MetadataRoute } from "next";
import { bosses } from "@/lib/bosses";
import { latestNewsDate } from "@/lib/news";
import { weapons } from "@/lib/weapons";

const baseUrl = "https://wherewindsmeet.org";

type Entry = {
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority?: number;
  lastModified?: MetadataRoute.Sitemap[0]["lastModified"];
};

const newsLastModified = new Date(latestNewsDate);

const staticEntries: Entry[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/guides", changeFrequency: "daily", priority: 0.9 },
  { path: "/tools", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/interactive-map", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/reset-timer", changeFrequency: "weekly", priority: 0.75 },
  { path: "/tools/checklist", changeFrequency: "weekly", priority: 0.75 },
  { path: "/tools/pvp-combos", changeFrequency: "weekly", priority: 0.7 },
  { path: "/guides/tier-list", changeFrequency: "daily", priority: 0.9 },
  { path: "/guides/pvp-tier-list", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides/weapons", changeFrequency: "weekly", priority: 0.9 },
  { path: "/guides/weapons/tier-list", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides/bosses", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides/martial-arts-weapons", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides/skill-theft", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides/items", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/builds", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/free-morph", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/endgame", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/wall-puzzle", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/woven-with-malice", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/mist-shrouded-prison", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/one-leaf-one-life", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/the-great-faceologist", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/flicker-of-faces", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/patch-notes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/codes", changeFrequency: "daily", priority: 0.8 },
  { path: "/guides/free-outfits", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/cosmetics", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/qin-caiwei", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/murong-yuan-adoptive-father", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/who-is-destined-to-face-the-purple-star-catastrophe", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/which-faction-controls-ghost-revelry-hall", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/unholy-prophecy", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/npc-list", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/gift-of-gab", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/new-players", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/sects", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/desktop-widget", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/xiangqi", changeFrequency: "weekly", priority: 0.7 },
  { path: "/news", changeFrequency: "daily", priority: 0.7, lastModified: newsLastModified },
  { path: "/videos", changeFrequency: "weekly", priority: 0.65 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
];

const deEntries: Entry[] = staticEntries.map((entry) => ({
  ...entry,
  path: entry.path === "/" ? "/de" : `/de${entry.path}`,
}));

const vnEntries: Entry[] = [
  { path: "/vn", changeFrequency: "daily", priority: 0.9 },
  { path: "/vn/guides", changeFrequency: "daily", priority: 0.85 },
  { path: "/vn/tools", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/tools/interactive-map", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/tools/reset-timer", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/tools/checklist", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/tools/pvp-combos", changeFrequency: "weekly", priority: 0.68 },
  { path: "/vn/guides/tier-list", changeFrequency: "daily", priority: 0.8 },
  { path: "/vn/guides/pvp-tier-list", changeFrequency: "weekly", priority: 0.78 },
  { path: "/vn/guides/free-morph", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/codes", changeFrequency: "daily", priority: 0.8 },
  { path: "/vn/guides/builds", changeFrequency: "weekly", priority: 0.78 },
  { path: "/vn/guides/weapons", changeFrequency: "weekly", priority: 0.8 },
  { path: "/vn/guides/weapons/tier-list", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/bosses", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/items", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/martial-arts-weapons", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/wall-puzzle", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/free-outfits", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/skill-theft", changeFrequency: "weekly", priority: 0.73 },
  { path: "/vn/guides/new-players", changeFrequency: "weekly", priority: 0.73 },
  { path: "/vn/guides/patch-notes", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/one-leaf-one-life", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/the-great-faceologist", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/flicker-of-faces", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/qin-caiwei", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/murong-yuan-adoptive-father", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/who-is-destined-to-face-the-purple-star-catastrophe", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/which-faction-controls-ghost-revelry-hall", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/unholy-prophecy", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/gift-of-gab", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/woven-with-malice", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/mist-shrouded-prison", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/npc-list", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/cosmetics", changeFrequency: "weekly", priority: 0.68 },
  { path: "/vn/guides/sects", changeFrequency: "weekly", priority: 0.67 },
  { path: "/vn/guides/endgame", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/desktop-widget", changeFrequency: "weekly", priority: 0.66 },
  { path: "/vn/guides/xiangqi", changeFrequency: "weekly", priority: 0.66 },
  { path: "/vn/news", changeFrequency: "daily", priority: 0.6, lastModified: newsLastModified },
  { path: "/vn/privacy", changeFrequency: "yearly", priority: 0.35 },
  { path: "/vn/terms", changeFrequency: "yearly", priority: 0.35 },
  { path: "/vn/videos", changeFrequency: "weekly", priority: 0.55 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const bossEntries: Entry[] = bosses.map((boss) => ({
    path: `/guides/bosses/${boss.id}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const weaponEntries: Entry[] = weapons.map((weapon) => ({
    path: `/guides/weapons/${weapon.id}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const deBossEntries: Entry[] = bossEntries.map((entry) => ({
    ...entry,
    path: `/de${entry.path}`,
  }));
  const vnBossEntries: Entry[] = bossEntries.map((entry) => ({
    ...entry,
    path: `/vn${entry.path}`,
  }));
  const deWeaponEntries: Entry[] = weaponEntries.map((entry) => ({
    ...entry,
    path: `/de${entry.path}`,
  }));
  const vnWeaponEntries: Entry[] = weaponEntries.map((entry) => ({
    ...entry,
    path: `/vn${entry.path}`,
  }));

  const entries = [
    ...staticEntries,
    ...deEntries,
    ...vnEntries,
    ...bossEntries,
    ...weaponEntries,
    ...deBossEntries,
    ...vnBossEntries,
    ...deWeaponEntries,
    ...vnWeaponEntries,
  ];

  return entries.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
