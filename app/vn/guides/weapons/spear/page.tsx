import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("spear");

export default function SpearViPage() {
  return <WeaponDetail weaponId="spear" />;
}
