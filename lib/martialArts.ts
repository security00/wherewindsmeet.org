export type MartialArtPathId =
  | "bellstrike-splendor"
  | "bellstrike-umbra"
  | "silkbind-jade"
  | "silkbind-deluge"
  | "bamboocut-wind"
  | "stonesplit-might";

export type MartialArtPath = {
  id: MartialArtPathId;
  name: string;
  focus: string;
  flavor: string;
  relatedWeapons: string[];
};

export const martialArtPaths: MartialArtPath[] = [
  {
    id: "bellstrike-splendor",
    name: "Bellstrike - Splendor",
    focus: "High mobility, charged single-target strikes that excel on bosses.",
    flavor:
      "Built for movers who like darting in, chaining charge attacks, and slipping out before counters land.",
    relatedWeapons: ["Nameless Sword", "Nameless Spear"],
  },
  {
    id: "bellstrike-umbra",
    name: "Bellstrike - Umbra",
    focus: "Mobile bleed/wound pressure with swift hits and evasive options.",
    flavor:
      "Emphasizes opening wounds and letting enemies bleed while you keep repositioning.",
    relatedWeapons: ["Strategic Sword", "Heavenquaker Spear"],
  },
  {
    id: "silkbind-jade",
    name: "Silkbind - Jade",
    focus: "Ranged, aerial, and elegant zoning with strong mobility.",
    flavor:
      "Rewards precise timing and spacing-great for duels and stylish keep-away play.",
    relatedWeapons: ["Inkwell Fan", "Vernal Umbrella"],
  },
  {
    id: "silkbind-deluge",
    name: "Silkbind - Deluge",
    focus: "Supportive kit with heals, revives, and party damage buffs.",
    flavor:
      "Designed to keep teams alive and buffed while you weave in damage from a safer angle.",
    relatedWeapons: ["Panacea Fan", "Soulshade Umbrella"],
  },
  {
    id: "bamboocut-wind",
    name: "Bamboocut - Wind",
    focus: "Relentless DPS strings and extreme mobility with low built-in defense.",
    flavor:
      "Plays like a glass cannon-ideal for players who like suffocating targets with nonstop pressure.",
    relatedWeapons: ["Infernal Twinblades", "Mortal Rope Dart"],
  },
  {
    id: "stonesplit-might",
    name: "Stonesplit - Might",
    focus: "Tanky posture, crowd-resistant tools, and easy AoE coverage.",
    flavor:
      "Built to shrug off control, hold the line, and cleave through groups without folding.",
    relatedWeapons: ["Stormbreaker Spear", "Thundercry Blade"],
  },
];

export type MartialArtWeapon = {
  id: string;
  name: string;
  pathId: MartialArtPathId;
  image: string;
  mainSkills: string[];
  basicSkills: string[];
  chargedSkills: string[];
  unlockMethods: string[];
  notes?: string;
};

export const martialArtWeapons: MartialArtWeapon[] = [
  {
    id: "heavenquaker-spear",
    name: "Heavenquaker Spear",
    pathId: "bellstrike-umbra",
    image: "/martial-arts/weapons/heavenquaker-spear.png",
    mainSkills: ["Sweep All", "Sober Sorrow", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Drifting Thrust / Spear - Heavy Attack"],
    unlockMethods: [
      "Steal from the master in the Heavenquaker Spear Sanctum.",
      "Join the Raging Tides sect.",
    ],
  },
  {
    id: "infernal-twinblades",
    name: "Infernal Twinblades",
    pathId: "bamboocut-wind",
    image: "/martial-arts/weapons/infernal-twinblades.png",
    mainSkills: [
      "Calamity's Greed",
      "Addled Mind",
      "Dual Blades - Dual-Weapon Skill",
    ],
    basicSkills: ["Dual Blades - Light Attack / Heaven's Wrath"],
    chargedSkills: ["Flamelash"],
    unlockMethods: [
      "Steal from the master in Midnight Mercy Sanctum.",
      "Join the Midnight Mercy sect.",
      "From Qi Sheng after submitting your first Oddity.",
    ],
  },
  {
    id: "inkwell-fan",
    name: "Inkwell Fan",
    pathId: "silkbind-jade",
    image: "/martial-arts/weapons/inkwell-fan.png",
    mainSkills: ["Mountain Sky", "Jadewind Shield", "Fan - Conversion"],
    basicSkills: ["Fan - Light Attack / Forsaken Fame"],
    chargedSkills: ["Fan - Heavy Attack / Moonlit Spring"],
    unlockMethods: [
      "Steal from the master in Inkwell Fan Sanctum.",
      "Join the Silver Needle sect.",
    ],
  },
  {
    id: "mortal-rope-dart",
    name: "Mortal Rope Dart",
    pathId: "bamboocut-wind",
    image: "/martial-arts/weapons/mortal-rope-dart.png",
    mainSkills: ["Rodent Rampage", "Bladebound Thread", "Rope Dart - Conversion"],
    basicSkills: ["Rope Dart - Light Attack / Coiled Loong"],
    chargedSkills: ["Rodent's Resilience"],
    unlockMethods: [
      "Join the Nine Mortal Ways sect.",
      "Disguise yourself as a student to infiltrate the Nine Mortal Ways sect.",
    ],
  },
  {
    id: "nameless-spear",
    name: "Nameless Spear",
    pathId: "bellstrike-splendor",
    image: "/martial-arts/weapons/nameless-spear.png",
    mainSkills: ["Legion Breaker", "Qiankun's Lock", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Storm Dance / Spear - Heavy Attack"],
    unlockMethods: ["Unlocked by default."],
  },
  {
    id: "nameless-sword",
    name: "Nameless Sword",
    pathId: "bellstrike-splendor",
    image: "/martial-arts/weapons/nameless-sword.png",
    mainSkills: ["Shadow Step", "Fearless Lunge", "Sword - Conversion"],
    basicSkills: ["Sword - Light Attack"],
    chargedSkills: ["Homeless Charge"],
    unlockMethods: ["Unlocked by default."],
  },
  {
    id: "vernal-umbrella",
    name: "Vernal Umbrella",
    pathId: "silkbind-jade",
    image: "/martial-arts/weapons/vernal-umbrella.png",
    mainSkills: ["Unfaded Flower", "Spring Sorrow", "Umbrella - Conversion"],
    basicSkills: ["Umbrella - Light Attack / Spring Away"],
    chargedSkills: ["Apricot Heaven / Colorful Phoenix"],
    unlockMethods: [
      "Steal from the master in Time Tower.",
      "From Qi Sheng after submitting your first Oddity.",
    ],
  },
  {
    id: "panacea-fan",
    name: "Panacea Fan",
    pathId: "silkbind-deluge",
    image: "/martial-arts/weapons/panacea-fan.png",
    mainSkills: [
      "Light Dust After Morning Rain / Resurrection",
      "Mistbound Aid / Endless Cloud",
      "Fan - Conversion",
    ],
    basicSkills: ["Fourfold Inquiry"],
    chargedSkills: ["Emerald Dewtouch"],
    unlockMethods: [
      "Join the Silver Needle sect.",
      "From Qi Sheng after submitting your first Oddity.",
    ],
  },
  {
    id: "soulshade-umbrella",
    name: "Soulshade Umbrella",
    pathId: "silkbind-deluge",
    image: "/martial-arts/weapons/soulshade-umbrella.png",
    mainSkills: ["Echoes of a Thousand Plants", "Floating Grace", "Umbrella - Conversion"],
    basicSkills: ["Umbrella - Light Attack"],
    chargedSkills: ["Pale Petal / Umbrella Heavy Attack"],
    unlockMethods: [
      "Steal from the master in Soulshade Umbrella Post Station.",
      "Join the Hollow Vale sect.",
    ],
  },
  {
    id: "stormbreaker-spear",
    name: "Stormbreaker Spear",
    pathId: "stonesplit-might",
    image: "/martial-arts/weapons/stormbreaker-spear.png",
    mainSkills: ["Thunder Shock", "Storm Roar", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Fury Spear / Spear - Heavy Attack"],
    unlockMethods: [
      "Steal from the master in Silver Needle Sanctum.",
      "Received via in-game mail.",
    ],
  },
  {
    id: "strategic-sword",
    name: "Strategic Sword",
    pathId: "bellstrike-umbra",
    image: "/martial-arts/weapons/strategic-sword.png",
    mainSkills: ["Third Track Recoil", "Inner Track Slash", "Sword - Conversion"],
    basicSkills: ["Sword - Light Attack"],
    chargedSkills: ["Second Track Slash / Sword - Heavy Attack"],
    unlockMethods: ["Steal from the master in Strategic Sword Sanctum."],
  },
  {
    id: "thundercry-blade",
    name: "Thundercry Blade",
    pathId: "stonesplit-might",
    image: "/martial-arts/weapons/thundercry-blade.png",
    mainSkills: ["Sunrush Gale", "Predator's Shield / Shifting Heaven", "Mo Blade - Conversion"],
    basicSkills: ["Mo Blade - Light Attack / Galecloud Cleave"],
    chargedSkills: ["Avalanche"],
    unlockMethods: [
      "Steal from the master in Well of Heaven Martial Camp.",
      "Join the Well of Heaven sect.",
      "From Qi Sheng after submitting your first Oddity.",
    ],
  },
];
