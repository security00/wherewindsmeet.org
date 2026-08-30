import rawWeaponTierData from "@/public/tier-list.json";

export type CurrentWeaponId =
  | "dual-blades"
  | "sword"
  | "spear"
  | "mo-blade"
  | "fan"
  | "umbrella"
  | "rope-dart"
  | "gauntlets";

export type ReviewStatus = "needs-retest";
export type RosterStatus = "established-live" | "official-confirmed";
export type GuideStatus = "published" | "planned";

export type WeaponEvidence = {
  id: CurrentWeaponId;
  name: string;
  role: string;
  roster: {
    status: RosterStatus;
    note: string;
  };
  guide: {
    status: GuideStatus;
    href: string | null;
  };
  pve: {
    status: ReviewStatus;
    note: string;
  };
  pvp: {
    status: ReviewStatus;
    note: string;
  };
  sourceIds: string[];
};

export type WeaponTierProvenance = {
  id: string;
  type: string;
  title: string;
  url: string;
  supports: string;
};

export type WeaponTierDataset = {
  schemaVersion: 2;
  meta: {
    gameVersion: string;
    updatedAt: string;
    status: "evidence-review";
    modes: ["roster", "pve", "pvp"];
    methodology: string;
    reviewProtocol: string[];
    provenance: WeaponTierProvenance[];
  };
  weaponCoverage: WeaponEvidence[];
};

export const weaponTierDataset = rawWeaponTierData as unknown as WeaponTierDataset;

if (weaponTierDataset.schemaVersion !== 2) {
  throw new Error("Unsupported weapon tier dataset schema");
}

export const weaponTierMeta = weaponTierDataset.meta;
export const currentWeaponRoster = weaponTierDataset.weaponCoverage;

export function getWeaponEvidence(id: CurrentWeaponId) {
  const weapon = currentWeaponRoster.find((entry) => entry.id === id);

  if (!weapon) {
    throw new Error(`Missing weapon evidence for ${id}`);
  }

  return weapon;
}

export function getWeaponSources(weapon: WeaponEvidence) {
  return weapon.sourceIds.map((sourceId) => {
    const source = weaponTierMeta.provenance.find((entry) => entry.id === sourceId);

    if (!source) {
      throw new Error(`Missing weapon provenance source ${sourceId}`);
    }

    return source;
  });
}
