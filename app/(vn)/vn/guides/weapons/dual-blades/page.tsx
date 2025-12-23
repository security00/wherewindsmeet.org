import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("dual-blades");

export default function DualBladesViPage() {
  return <WeaponDetail weaponId="dual-blades" />;
}
