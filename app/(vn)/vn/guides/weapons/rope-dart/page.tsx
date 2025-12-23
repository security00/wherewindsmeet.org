import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("rope-dart");

export default function RopeDartViPage() {
  return <WeaponDetail weaponId="rope-dart" />;
}
