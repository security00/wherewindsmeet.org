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
    tagline:
      "Elusive ruler of the Black Market and the Nine Mortal Ways.",
    description:
      "Dao Lord runs the Black Market from the shadows, guiding the Nine Mortal Ways with a calm, unreadable presence. Official descriptions frame them as someone who glides through back alleys and whispered deals rather than open battlefields, making every appearance feel like a test of trust and perception as much as raw strength.",
    encounterType: "Shadow boss / underworld confrontation",
    theme: "contracts, information, hidden power in the dark",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e440aa64b1cb56a20c39SXz41N4r03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/6_tit_0a00d079.png",
  },
  {
    id: "god-of-avaric",
    name: "God of Avarice",
    tagline: "A mortal obsessed with hoarding enough wealth to touch godhood.",
    description:
      "The so‑called God of Avarice was born mortal but never satisfied with human limits. Official material paints them as someone still chasing infinite wealth, even after paying steep personal costs. Serving unjust masters has only twisted that hunger, turning what might have been ambition into something darker and more dangerous.",
    encounterType: "Greed‑themed trial / larger‑than‑life duel",
    theme: "wealth, ambition, the cost of serving the wrong cause",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5cc6cd30209c0511f69xZfM5GC503",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/10_tit_22cc1602.png",
  },
  {
    id: "heartseeker",
    name: "Heartseeker",
    tagline: "A haunting shape born from inner demons and familiar faces.",
    description:
      "Heartseeker is described as inner demons given form, reshaping themselves into a disturbing yet familiar visage. Rather than a simple external enemy, this encounter leans into the feeling of fighting your own fears and memories, with the design emphasizing unease over straightforward villainy.",
    encounterType: "Inner‑world trial / psychological confrontation",
    theme: "inner demons, memory, distorted reflections of the self",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e66d629ae6e2c037d5a6XMt2Twli03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/3_tit_f504b30e.png",
  },
  {
    id: "lucky-seventeen",
    name: "Lucky Seventeen",
    tagline: "Pure‑hearted guardian of the Palace of Annals and master armor‑forger.",
    description:
      "Lucky Seventeen guards the Palace of Annals and is renowned for their pure heart and unmatched armor‑forging skill. The official description hints at a character who cares as much about duty and craft as about combat itself, making any encounter with them feel tied to tradition, legacy, and what it means to protect history.",
    encounterType: "Guardian duel / palace defense",
    theme: "duty, craftsmanship, guardianship of knowledge",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e657629ae6e2c037d428oNjEcOO703",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/1_tit_85fcd171.png",
  },
  {
    id: "murong-yuan",
    name: "Murong Yuan",
    tagline: "Vengeful mechanist who betrayed the Mohists.",
    description:
      "Murong Yuan is a genius of mechanisms who turned against the Mohist school and went on to forge the legendary Quintadent Warship. Their story sits at the crossroads of invention and betrayal, suggesting encounters that revolve around intricate devices, traps, and the consequences of weaponizing ideals.",
    encounterType: "Mechanist boss / device‑heavy confrontation",
    theme: "technology, betrayal, turning ideals into war machines",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5f9ec073ee12006cc49NBwJjrMe03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/7_tit_79faa323.png",
  },
  {
    id: "qianye",
    name: "Qianye",
    tagline: "Ruthless, cunning figure who lives behind shifting masks.",
    description:
      "Qianye is introduced as a mysterious figure, ruthless and cunning, skilled in disguise and manipulation. They represent the side of Jianghu where appearances are rarely what they seem, and every gesture might hide a deeper plot. Even without knowing full mechanics, the official description frames them as a test of perception and patience.",
    encounterType: "Deception‑focused duel / cloak‑and‑dagger clash",
    theme: "disguise, manipulation, reading what lies beneath the mask",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5eb5e38916dd27deaf2bqROEQRE03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/8_tit_8ae9cdaf.png",
  },
  {
    id: "the-void-king",
    name: "The Void King",
    tagline: "A warrior intent on shattering the limits of the human body.",
    description:
      "The Void King is described as a warrior determined to surpass physical limits, unleashing extraordinary power in combat. Rather than leaning on tricks or politics, this character embodies raw, honed strength pushed to extremes, giving their fights the feeling of an all‑or‑nothing test of endurance and timing.",
    encounterType: "High‑intensity duel / power trial",
    theme: "limits, discipline, overwhelming physical force",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e61aa78083738d6d492c26GNDq8t03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/4_tit_8b3e8cfc.png",
  },
  {
    id: "tian-ying",
    name: "Tian Ying",
    tagline: "Legendary assassin with no past on record and no family ties.",
    description:
      "Tian Ying is introduced as a legendary assassin and master of shadows, with no known family and an origin story that no one truly understands. They sit firmly in the archetype of the ghostlike killer: present everywhere, leaving almost nothing behind. Official material emphasizes their mystery more than any single allegiance.",
    encounterType: "Assassin encounter / shadow duel",
    theme: "assassination, anonymity, life lived between missions",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e60972bc64d11682a8dakS0hHk2g03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/5_tit_f82610c3.png",
  },
  {
    id: "ye-wanshan",
    name: "Ye Wanshan",
    tagline:
      "Once a northern defender, now leading a brutal assault on the central plains.",
    description:
      "Ye Wanshan was once a celebrated general defending the northern cities, but now leads his troops in a ruthless massacre of the central plains. That reversal turns his encounters into more than simple boss fights: they carry the weight of broken oaths, shifting loyalties, and the question of what could push a protector to become an executioner.",
    encounterType: "Battlefield commander / large‑scale clash",
    theme: "war, betrayal, the fall of once‑honorable heroes",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e68c41a5c8a28ad3c2c07BGR5fzX03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/2_tit_6ec8679b.png",
  },
  {
    id: "zheng-e",
    name: "Zheng E",
    tagline: "A weary swordsman who once tried to save the world and now walks alone.",
    description:
      "Zheng E once set out to save the world, but repeated trials left him a tired swordsman who turned his blade against humanity. The Changping blaze halted his descent into despair, yet with old friends gone he is left to carve out a path by himself. Official descriptions present him as one of the most tragic figures in Jianghu—caught between what he tried to protect and what he has done.",
    encounterType: "Story‑defining duel / tragic swordsman battle",
    theme: "idealism, disillusionment, walking forward alone",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e69aeb28216c8722c417KSsSJULb03",
    titleImage:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/9_tit_33d334bf.png",
  },
];

