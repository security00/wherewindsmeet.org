import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("umbrella");

export default function UmbrellaViPage() {
  return <WeaponDetail weaponId="umbrella" />;
}
