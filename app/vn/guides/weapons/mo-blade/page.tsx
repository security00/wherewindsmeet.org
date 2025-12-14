import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("mo-blade");

export default function MoBladeViPage() {
  return <WeaponDetail weaponId="mo-blade" />;
}
