import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("spear");

export default function SpearPage() {
  return <WeaponDetail weaponId="spear" />;
}

