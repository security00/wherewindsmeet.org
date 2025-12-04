import type { MetadataRoute } from "next";
import { bosses } from "@/lib/bosses";
import { weapons } from "@/lib/weapons";

const baseUrl = "https://wherewindsmeet.org";

type Entry = {
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority?: number;
};

const staticEntries: Entry[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/guides", changeFrequency: "daily", priority: 0.9 },
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
  { path: "/guides/one-leaf-one-life", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/patch-notes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/codes", changeFrequency: "daily", priority: 0.8 },
  { path: "/guides/free-outfits", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/cosmetics", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/qin-caiwei", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/npc-list", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/gift-of-gab", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/new-players", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/sects", changeFrequency: "weekly", priority: 0.75 },
  { path: "/news", changeFrequency: "daily", priority: 0.7 },
  { path: "/videos", changeFrequency: "weekly", priority: 0.65 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
];

const vnEntries: Entry[] = [
  { path: "/vn", changeFrequency: "daily", priority: 0.9 },
  { path: "/vn/guides", changeFrequency: "daily", priority: 0.85 },
  { path: "/vn/guides/tier-list", changeFrequency: "daily", priority: 0.8 },
  { path: "/vn/guides/pvp-tier-list", changeFrequency: "weekly", priority: 0.78 },
  { path: "/vn/guides/free-morph", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/codes", changeFrequency: "daily", priority: 0.8 },
  { path: "/vn/guides/builds", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/weapons", changeFrequency: "weekly", priority: 0.8 },
  { path: "/vn/guides/bosses", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/builds", changeFrequency: "weekly", priority: 0.78 },
  { path: "/vn/guides/items", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/martial-arts-weapons", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/wall-puzzle", changeFrequency: "weekly", priority: 0.75 },
  { path: "/vn/guides/free-outfits", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/skill-theft", changeFrequency: "weekly", priority: 0.73 },
  { path: "/vn/guides/new-players", changeFrequency: "weekly", priority: 0.73 },
  { path: "/vn/guides/patch-notes", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/one-leaf-one-life", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/qin-caiwei", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/gift-of-gab", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/guides/woven-with-malice", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/npc-list", changeFrequency: "weekly", priority: 0.72 },
  { path: "/vn/guides/cosmetics", changeFrequency: "weekly", priority: 0.68 },
  { path: "/vn/guides/sects", changeFrequency: "weekly", priority: 0.67 },
  { path: "/vn/guides/endgame", changeFrequency: "weekly", priority: 0.7 },
  { path: "/vn/news", changeFrequency: "daily", priority: 0.6 },
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

  const entries = [...staticEntries, ...vnEntries, ...bossEntries, ...weaponEntries];

  return entries.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
