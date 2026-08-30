const NPC_MEDIA_ROOT = "/guides/npc-list";

export function npcPortraitPath(name: string) {
  const slug = name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${NPC_MEDIA_ROOT}/${slug}.png`;
}

export const npcMapPath = `${NPC_MEDIA_ROOT}/map.gif`;
