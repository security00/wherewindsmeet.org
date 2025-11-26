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
  { path: "/guides/patch-notes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/codes", changeFrequency: "daily", priority: 0.8 },
  { path: "/guides/free-outfits", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/cosmetics", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/gift-of-gab", changeFrequency: "weekly", priority: 0.75 },
  { path: "/guides/new-players", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/sects", changeFrequency: "weekly", priority: 0.75 },
  { path: "/news", changeFrequency: "daily", priority: 0.7 },
  { path: "/videos", changeFrequency: "weekly", priority: 0.65 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
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

  const entries = [...staticEntries, ...bossEntries, ...weaponEntries];

  return entries.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
