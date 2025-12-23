import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("sword");

export default function SwordViPage() {
  return <WeaponDetail weaponId="sword" />;
}
