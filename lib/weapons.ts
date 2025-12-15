export type WeaponId =
  | "dual-blades"
  | "sword"
  | "spear"
  | "mo-blade"
  | "fan"
  | "umbrella"
  | "rope-dart";

export type Weapon = {
  id: WeaponId;
  name: string;
  role: string;
  tier: "S" | "A" | "B";
  description: string;
  officialArt: string;
  officialVideo: string;
  localIcon: string;
  buildLink: string;
};

export const weapons: Weapon[] = [
  {
    id: "dual-blades",
    name: "Dual Blades",
    role: "Assassin",
    tier: "S",
    description:
      "Dual Blades turn you into a darting close-range menace. Their reach is short, but the animation speed and cancel windows let you slip in, lock enemies down, and delete lone targets before they can respond. In Where Winds Meet they are ideal for players who enjoy aggressive duels, risky dash-ins, and playing the executioner whenever a boss is staggered.",
    officialArt: "/weapons/official/wq1_fa52885f.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68998175cef2669e25ccXI9UTT1R03",
    localIcon: "/weapons/dualblades.png",
    buildLink: "/guides/builds#dual-blades",
  },
  {
    id: "sword",
    name: "Sword",
    role: "Balanced",
    tier: "B",
    description:
      "Sword is the all-rounder weapon for wanderers who value flexibility above all else. Its move set flows smoothly between offense and defense with clean combos, approachable timings, and just enough utility to slot into most builds without drama. In Where Winds Meet it is a strong recommendation for new players who want to learn core systems while still having a weapon that scales comfortably into late-game content.",
    officialArt: "/weapons/official/wq2_222b1a27.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e723794543d3ce61613fY6UrRbjb03",
    localIcon: "/weapons/sword.png",
    buildLink: "/guides/builds#sword-starter",
  },
  {
    id: "spear",
    name: "Spear",
    role: "Bleed",
    tier: "A",
    description:
      "Spear offers classic reach and control, letting you decide exactly when enemies are allowed to step into danger. Its thrusts and sweeps cover generous arcs, poking safely in PVE while still giving you tools to contest space in duels. In Where Winds Meet it works well for steady frontline builds that prefer structured fights, zone control, and reliable answers to mobile targets.",
    officialArt: "/weapons/official/wq3_12c4540a.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6866bdacee74aec95fcd9mUsWJ6p03",
    localIcon: "/weapons/spear.png",
    buildLink: "/guides/builds#sword-spear-bleed",
  },
  {
    id: "mo-blade",
    name: "Mo Blade",
    role: "Tank",
    tier: "A",
    description:
      "The Mo Blade is for players who want every swing to feel like it could decide the fight. It winds up slowly, but each strike can scatter groups, carve huge chunks off boss health bars, and shrug off chip damage when paired with the right sustain tools. In Where Winds Meet it fits patient bruiser builds that control the pace of battle instead of chasing every tiny opening.",
    officialArt: "/weapons/official/wq4_ee594198.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c682571f08da387bae062ioRsVf6s03",
    localIcon: "/weapons/moblade.png",
    buildLink: "/guides/builds#mo-blade",
  },
  {
    id: "fan",
    name: "Fan",
    role: "Support",
    tier: "B",
    description:
      "Leitet inneres Qi nach außen: elegante Gesten werden zu Fern-Druck + Support. Du chippst aus Distanz, weichst Gruppen mit weiten Skills auf und nutzt Heil-/Utility-Talente, um dich und Verbündete stabil zu halten. Passt zu Spielern mit sicherem Spacing, teamfokussierten Tools und ruhigerem Kampftempo.",
    officialArt: "/weapons/official/wq5_58ac46bd.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68778175cef2669e231f6hiIvVK103",
    localIcon: "/weapons/fan.png",
    buildLink: "/guides/builds#umbrella-healer",
  },
  {
    id: "umbrella",
    name: "Umbrella",
    role: "Parry/Konter",
    tier: "B",
    description:
      "Wirkt zart, verbirgt aber Defense- und Konter-Potenzial: Geschosse gleiten, Blocks anwinkeln, Schirm öffnen und in fließende Schläge übergehen, die Überdehnungen bestrafen. Passt zu reaktiven Spielern, die Mobilität, Parry und Stil in einer eleganten Defensive-DPS-Waffe verweben.",
    officialArt: "/weapons/official/wq6_f29046e1.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e7547f0a2d1e15a832beLfbRNdyu03",
    localIcon: "/weapons/umbrella.png",
    buildLink: "/guides/builds#umbrella-control",
  },
  {
    id: "rope-dart",
    name: "Rope Dart",
    role: "Mobile Control / Picks",
    tier: "S",
    description:
      "Stylishe Mischung aus Grapple und Execution-Tool: Aus Mid-Range Gegner aus dem Gleichgewicht reißen, Lücken sofort schließen oder Verbündete mit Pulls/Repositioning schützen. Belohnt Spieler mit gutem Movement-Reading, kreativem Positioning und dem Wunsch, Fluchtversuche in Niederlagen zu drehen.",
    officialArt: "/weapons/official/wq7_d8a85874.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6889be134a7f3324d9f6gQMKFy6i03",
    localIcon: "/martial-arts/weapons/mortal-rope-dart.png",
    buildLink: "/guides/builds#rope-dart-hunter",
  },
];
