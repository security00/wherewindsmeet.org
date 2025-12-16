export type BossId =
  | "dao-lord"
  | "god-of-avaric"
  | "heartseeker"
  | "lucky-seventeen"
  | "murong-yuan"
  | "qianye"
  | "the-void-king"
  | "tian-ying"
  | "ye-wanshan"
  | "zheng-e";

export type Boss = {
  id: BossId;
  name: string;
  tagline: string;
  description: string;
  encounterType: string;
  theme: string;
  backgroundVideo: string;
  titleImage: string;
};

export const bosses: Boss[] = [
  {
    id: "dao-lord",
    name: "Dao Lord",
    tagline: "Elusive leader of the black market and the Nine Mortal Ways.",
    description:
      "Operates from the shadows, steering the black market and the Nine Mortal Ways with a calm, unreadable presence. Every appearance feels more like a test of trust and perception than a straightforward brawl.",
    encounterType: "Shadow boss / underworld confrontation",
    theme: "Contracts, information, hidden power",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e440aa64b1cb56a20c39SXz41N4r03",
    titleImage: "/bosses/6_tit_0a00d079.png",
  },
  {
    id: "god-of-avaric",
    name: "God of Avarice",
    tagline: "A mortal obsessed with hoarding wealth into godhood.",
    description:
      "Chases endless riches despite the personal cost. Serving the wrong masters twisted ambition into something darker and far more dangerous.",
    encounterType: "Trial of greed / larger-than-life duel",
    theme: "Wealth, ambition, false loyalty",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5cc6cd30209c0511f69xZfM5GC503",
    titleImage: "/bosses/10_tit_22cc1602.png",
  },
  {
    id: "heartseeker",
    name: "Heartseeker",
    tagline: "A shape born from inner demons—familiar, yet unsettling.",
    description:
      "A confrontation with your own fears and memories—less a traditional enemy and more a psychological trial.",
    encounterType: "Inner world / psychological trial",
    theme: "Inner demons, memory, distorted reflections",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e66d629ae6e2c037d5a6XMt2Twli03",
    titleImage: "/bosses/3_tit_f504b30e.png",
  },
  {
    id: "lucky-seventeen",
    name: "Lucky Seventeen",
    tagline: "Pure-hearted guardian of the Palace of Annals and master smith.",
    description:
      "Fuses duty with craftsmanship; the encounter feels like a duel fought for tradition and the preservation of history.",
    encounterType: "Guardian duel / palace defense",
    theme: "Duty, craftsmanship, keeper of knowledge",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e657629ae6e2c037d428oNjEcOO703",
    titleImage: "/bosses/1_tit_85fcd171.png",
  },
  {
    id: "murong-yuan",
    name: "Murong Yuan",
    tagline: "A vengeful mechanist who betrayed the Mohists.",
    description:
      "A mechanical genius who created the Quintadent warship. The encounter revolves around devices, traps, and the cost of turning ideals into weapons.",
    encounterType: "Mechanics boss / gadget-heavy encounter",
    theme: "Technology, betrayal, ideals as weapons",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5f9ec073ee12006cc49NBwJjrMe03",
    titleImage: "/bosses/7_tit_79faa323.png",
  },
  {
    id: "qianye",
    name: "Qianye",
    tagline: "Ruthless, cunning, always hiding behind shifting masks.",
    description:
      "A master of disguise and manipulation—an exercise in perception and patience, where nothing is quite what it seems.",
    encounterType: "Deception duel / shadow blades",
    theme: "Masquerade, manipulation, seeing through the facade",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5eb5e38916dd27deaf2bqROEQRE03",
    titleImage: "/bosses/8_tit_8ae9cdaf.png",
  },
  {
    id: "the-void-king",
    name: "The Void King",
    tagline: "A warrior determined to break the limits of the body.",
    description:
      "Pure, honed power taken to an extreme—less trickery, more endurance and timing under pressure.",
    encounterType: "High-intensity duel / test of strength",
    theme: "Limits, discipline, overwhelming strength",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e61aa78083738d6d492c26GNDq8t03",
    titleImage: "/bosses/4_tit_8b3e8cfc.png",
  },
  {
    id: "tian-ying",
    name: "Tian Ying",
    tagline: "A legendary assassin with no known past or family.",
    description:
      "A ghostlike killer who seems to be everywhere and leaves almost no trace. Mystery comes before loyalty.",
    encounterType: "Assassin encounter / shadow duel",
    theme: "Assassination, anonymity, life between missions",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e60972bc64d11682a8dakS0hHk2g03",
    titleImage: "/bosses/5_tit_f82610c3.png",
  },
  {
    id: "ye-wanshan",
    name: "Ye Wanshan",
    tagline: "Once a defender of the north—now a relentless attacker of the central plains.",
    description:
      "A fallen general; the battle carries the weight of broken oaths and shifting loyalties. What turns a protector into an executioner?",
    encounterType: "Warlord encounter / large-scale battle",
    theme: "War, betrayal, fall of a hero",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e68c41a5c8a28ad3c2c07BGR5fzX03",
    titleImage: "/bosses/2_tit_6ec8679b.png",
  },
  {
    id: "zheng-e",
    name: "Zheng E",
    tagline: "A weary swordsman—once a savior, now walking alone.",
    description:
      "Once wanted to save the world, then turned against humanity. A tragic figure caught between idealism and disillusionment, now traveling onward alone.",
    encounterType: "Story duel / tragic swordfight",
    theme: "Idealism, disillusionment, solitary path",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e69aeb28216c8722c417KSsSJULb03",
    titleImage: "/bosses/9_tit_33d334bf.png",
  },
];
