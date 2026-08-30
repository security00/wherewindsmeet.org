import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import npcPins from "@/public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { type MapPin } from "./NpcMapClient";
import { npcMapPath, npcPortraitPath } from "@/lib/npc-media";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC List - Old Friends Locations & Rewards",
  description:
    "Browse a dated editorial snapshot of Where Winds Meet NPC location notes, Old Friends context, AI Chat lines, and Qin Caiwei help.",
  alternates: buildHreflangAlternates("/guides/npc-list"),
  openGraph: {
    title: "Where Winds Meet NPC List - Old Friends Locations & Rewards",
    description:
      "Browse a dated editorial snapshot of Old Friends NPC location notes and AI Chat tips.",
    url: `${baseUrl}/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Where Winds Meet Old Friends NPC directory snapshot",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet NPC List - Old Friends Locations & Rewards",
    description:
      "Browse a dated editorial snapshot of Old Friends NPC location notes and AI Chat tips.",
  },
};

const quickFacts = [
  { label: "Scope", value: "Old Friends / AI Chat NPCs", icon: "💬" },
  { label: "Regions", value: "Qinghe and beyond", icon: "🧭" },
  { label: "Main actions", value: "Talk, empathize, bracketed resolution, farewell", icon: "🧩" },
  { label: "Rewards", value: "Verify in the current relationship panel", icon: "🎁" },
];

const aiChatBasics = [
  "Read the hint above the chat box and restate it once.",
  "Use one empathy line, one bracketed resolution, and one clear farewell.",
  "Keep each thread short (3-6 lines); reset if it derails.",
  "Specific beats work better than vague comfort; avoid one-line mind control.",
];

const copyLines = [
  "Tell me your story. I am listening.",
  "Go on, what is troubling you?",
  "(helps you resolve the matter and find peace)",
  "(we become friends and trust each other)",
  "Farewell (bows and leaves).",
];

const searchIntentAnswers = [
  {
    title: "NPC locations",
    summary:
      "Use the dated text directory to browse NPC notes by region, area, and name. Verify every route in the current client because positions and interactions can change.",
  },
  {
    title: "Old Friends rewards",
    summary:
      "Some catalogued Old Friends show gifts, flavor rewards, regional completion, or small story scenes in the captured source data. Verify the current relationship panel before planning around a recurring reward.",
  },
  {
    title: "AI Chat script",
    summary:
      "The fastest pattern is: restate the hint, add one empathy line, write one bracketed resolution, then say farewell. Use the copy-paste lines below when an NPC loops.",
  },
  {
    title: "Qin Caiwei and stubborn NPCs",
    summary:
      "If the NPC keeps rejecting short answers, switch to full roleplay. Qin Caiwei is the main example, so jump to the dedicated guide when her friendship step stalls.",
  },
];

const npcLongTailFocus = [
  {
    name: "Zhou Yihang",
    query: "zhou yihang where winds meet",
    region: "Moonveil Mountain",
    area: "Palace of Annals",
    route:
      "Look around the docks on the lower-left side of the Stillwind Slope Marker. If the pin feels missing, sweep the dock edge before moving inland.",
  },
  {
    name: "Feng Rusong",
    query: "feng rusong where winds meet",
    region: "Sundara Land",
    area: "Mercyheart Monastery",
    route:
      "Go to the entrance of Divinecraft Dungeon near Mercyheart Monastery. Check the doorway and nearby path before restarting the Old Friends scan.",
  },
];

const npcFaqs = [
  {
    q: "Where do I find NPCs in Where Winds Meet?",
    a: "Browse the dated editorial directory by region or NPC name. Each card lists an area and route note that must be verified in the current client.",
  },
  {
    q: "What are Old Friends in Where Winds Meet?",
    a: "Old Friends are interactable NPC relationships built around conversation and AI Chat. Reward and completion behavior can change, so use the current relationship panel as the authority.",
  },
  {
    q: "How do I befriend NPCs with AI Chat?",
    a: "Read the hint, mirror the NPC's concern, add a bracketed action that resolves the situation, and end politely. Reset and rephrase if the chat derails.",
  },
  {
    q: "Why is Qin Caiwei harder than other NPCs?",
    a: "Qin Caiwei often needs a fuller roleplay answer rather than a short comfort line. Use the dedicated Qin Caiwei guide if the Old Friends step loops.",
  },
  {
    q: "Are Qi Sheng and Yao Yaoyao Old Friends NPCs?",
    a: "No. They appear in the world and provide services, but they do not open Old Friends or AI Chat. They are listed separately as non-interactable NPCs.",
  },
  {
    q: "Where are Zhou Yihang and Feng Rusong?",
    a: "Zhou Yihang is at Palace of Annals in Moonveil Mountain near the docks by Stillwind Slope. Feng Rusong is near the Divinecraft Dungeon entrance at Mercyheart Monastery in Sundara Land.",
  },
];

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Li Laizuo can be found with a group of subornidates next to the general's shrine in the compound." },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Fang Xu can be found resting on top of some scaffolding next to the arena. Spar with him a few times and then engage in conversation." },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Lie Buxi can be found near the river south of the General's Shrine. She seeks ask aid in finding her brothers." },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Zhao Dali can be found near the main shrine in General's Shrine, doing training exercises." },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Chopping a tree to the south of the General's Shrine." },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "From the entrance of General's Shrine, go to the building on the right to meet Fu Lushou. He could also be outside the General's Shrine depending on the day." },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "On the mudflat to the south of Verdant Wilds Wayfarer." },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Upper left side beside a stone pillar" },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Found sitting while fishing at the edge of the river at the left side of the General's Shrine and north of Stonewash Strand Boundary Stone." },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "On the mudflat to the south of Verdant Wilds Wayfarer." },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "By the lake fishing across the General's Shrine Boundary Stone" },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "This NPC is found near the table besides a house." },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "On top of a mountain near a temple" },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Li Daniu can be seen chopping trees near the road of Battlecrest Scope and to the north of Starfall Spring Boundary Stone" },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Li Shaokui is located at the front of a destroyed shack to the northeast of Starfall Spring Boundary Stone" },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Standing at the docks at the far left side." },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Standing near the bridge behind some tall grasses." },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "On the side of the road south of the Tiger Fort in Battlecrest Slope" },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Inside the house. Can be easily seen on the inside." },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "On the side of the road south of the Tiger Fort in Battlecrest Slope" },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Sitting at the stairs near the river." },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen dancing behind a statue." },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen inside the house." },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen hoeing at the northern part of the village near a destroyed house." },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be found outside of his house." },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen playing in the ground at the north part of town, near the pathway going to the Mercyheart Monastery." },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Located on Stonewash Strand cutting trees to the south of the Boundary Stone." },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Located near the entrance of Divinecraft Dungeon." },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "In the canopy on Stonewash Strand to the east of Moonveil Mountain Wayfarer" },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Can be seen plucking Buddhist Flowers" },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Can be seen standing near the path north of Halo Peak Landmark" },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Can be seen standing along the path going to Halo Peak" },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Can be seen chopping wood near the Path of Karma landmark." },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Can be seen standing with cats surrounding him." },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen standing near the Heaven's Pier Landmark" },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen drinking from a large container" },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen in front of the stall of Yuan Tiantian" },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen beside numerous large containers." },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen sweeping inside of the tavern." },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "She can be seen cleaning her laundry by the river." },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "She can be seen inside the house at the back of Yuan Tiantian's stall." },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Can be seen in front of the Fire-forced brewing" },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen under a white petal tree." },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "It can be seen behind a house where flower petals are being sun-dried" },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "He can be seen under a tree near the outskirts of the area." },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can use the Moonveil Peak landmark and go right to see him chopping wood below the mountain" },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "You can find him in the path between Peacebell Tower and Crimson Cliff" },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen chopping wood at the far right side of Heaven Pier." },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "She can be found near the Crimson Cliff Landmark. Getting some leaves from a lonely red tree." },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen behind some tall grasses, near the edge of the cliff." },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "You can find him besides some wagons, near the docks." },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Walk north from the Stillwind Slope Landmark. Then you will see him cutting a tree." },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees." },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees." },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "He can be seen a little north from the Stillwind Slope with the other refugees." },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Move right from the Stillslope Landmark and you will see her dancing near a rock." },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "He can be seen standing on the docks at the lower-left side of the Stillwind Slope Marker." },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "She can be found by heading south from the Back Mountain landmark, at a camp where she is with Boss Qian." },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "He can be found by heading south from the Back Mountain landmark, at a camp where he is with Zhang the Diviner." },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "From the Back Mountain landmark, go north and climb the rocky wall until you find him at the top" },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "He can be found standing near the Deer Pond Landmark." },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "He can be seen standing near a cliff." },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "It can be seen digging near some pile of wood." },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can see him standing near the river." },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find him behind a cluster of bamboo near the river." },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him on the side of the road." },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find her at the side of the road with her companion, Xie Changgong" },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find him near some bamboos" },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing near a bandit camp." },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing near a lonely tree." },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "You can find her along the road with her Sword Servant." },
  { name: "Hong Yang", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him near a lake with Lu Ke" },
  { name: "Wen Gao", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him in between a tree and a wagon." },
  { name: "Ya Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him standing at the docks." },
  { name: "Hu Da", region: "Moonveil Mountain", area: "Encircling Lake", hint: "From the Encircling Lake landmark, follow the path to the left, where you'll find him standing near the left side of the outdoor dining area." },
  { name: "Elder Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "You can find him at the docks on the lower right of the Back Mountain Landmark." },
  { name: "Meng Da", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him northeast of the Harvest Village Landmark." },
  { name: "Hao Jiu", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him near the fence." },
  { name: "Lu Kangge", region: "Moonveil Mountain", area: "Blissful Retreat", hint: "You can find him soutwest from the Source of Still Shore Landmark" },
  { name: "Jin Nanshou", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can find him by using the Deerforage Grove Landmark. Follow the road north until you reach a fork, then turn right. You'll see him at the side of the road." },
  { name: "Jing'an", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "You can find him by following the road, where he is located in the middle of the fork. You can either go south from the Porcelain Kiln Landmark or north from Deerforage Grove Landmark." },
  { name: "Lin Jin", region: "Moonveil Mountain", area: "Witherwilds", hint: "You can find him by following the south road from the Porcelain Kiln Landmark. Where you can see him chopping wood near the side of the road." },
  { name: "Sun Mang", region: "Moonveil Mountain", area: "Witherwilds", hint: "You can find him by following the south road from the Porcelain Kiln Boundary Stone. Where you can see him standing at the side of the fork." },
  { name: "Li Yueniang", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her with her beloved Yu Songfeng near the ferry station entrance." },
  { name: "Yu Songfeng", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him with his beloved Li Yueniang near the ferry station entrance." },
  { name: "Wang Duoli", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Wang Duoli is located to the south of the lake near the Starfall Spring Boundary Stone" },
  { name: "Ren Shuiliu", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him in the red building besides Meng Zhixia." },
  { name: "Meng Zhixia", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him in the red building besides Ren Shuiliu." },
  { name: "Yu Nu", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her in the red building  looking at the ocean." },
  { name: "Jiang Nanyi", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him under a white blossom tree at the docks, behind some ladies." },
  { name: "Zhou Canying", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find her sitting in one of the tables inside the red building." },
  { name: "Tian Heng", region: "Moonveil Mountain", area: "Riverside Station", hint: "You can find him sitting in one of the tables inside the red building." },
  { name: "Wu Cezhi", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him in the left-side toilet" },
  { name: "Angler", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "You can find him sitting by the shoreline on the northeast side of the village." },
  { name: "Cao Jinyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Tao Jingjing on the ground floor of Revelry Hall, on the north side of the building." },
  { name: "Chu Yuan", region: "Kaifeng City", area: "Velvet Shade", hint: "East of the Velvet Shade Landmark, standing on the street." },
  { name: "He Ruiyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Li Yushan on the ground floor of Revelry Hall, on the southwest side of the building." },
  { name: "Jiang Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Go south from Springwave Pavilion, then right; he is behind the house where Yiluo (Graceful Memory) resides." },
  { name: "Jiang Yulang", region: "Kaifeng City", area: "Velvet Shade", hint: "North of Springwave Pavilion, inside the flower shop with Rong Xiaoxiao." },
  { name: "Jing Chaoyang", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, looking out the window." },
  { name: "Leng Daculi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, eating in a private room." },
  { name: "Li Youxin", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the Velvet Shade Landmark by the docks." },
  { name: "Li Yuerong", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the Velvet Shade Landmark, outside an antique shop." },
  { name: "Lu Zhuo", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall beside Wu Peng, near the east-side stairs to the third floor." },
  { name: "Mu Huaishan", region: "Kaifeng City", area: "Velvet Shade", hint: "South of Springwave Pavilion, talking with Huo Tinglan." },
  { name: "Murong Chan", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the flower pot arrangements." },
  { name: "Qi Wuyu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, watching the performance up close in the center." },
  { name: "Qin Zhu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the south side of the building." },
  { name: "Qiu Fengxi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the west side of the building." },
  { name: "Ruan Sese", region: "Kaifeng City", area: "Velvet Shade", hint: "Near the Velvet Shade Landmark, admiring a kite outside the shop." },
  { name: "Shen Moxuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Across the bridge east of the Velvet Shade Landmark." },
  { name: "Song Shiheng", region: "Kaifeng City", area: "Velvet Shade", hint: "On the bridge east of the Velvet Shade Landmark, talking with Yan Chuchu." },
  { name: "Su Xinlu", region: "Kaifeng City", area: "Velvet Shade", hint: "South of Springwave Pavilion, talking with Yang Chunnuan and three other NPCs." },
  { name: "Tan Xiangchen", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall beside Yin Yan, near the west-side stairs to the first floor." },
  { name: "Tao Jingjing", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Cao Jinyang on the ground floor of Revelry Hall, on the north side of the building." },
  { name: "Tu Er", region: "Kaifeng City", area: "Velvet Shade", hint: "North of Springwave Pavilion, talking with Tu Dakuan." },
  { name: "Xu Lijun", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Ye Zhiqiu on the ground floor of Revelry Hall, on the east side of the building." },
  { name: "Xu Yingyu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the west side of the building." },
  { name: "Xue Li", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, dining with Zhuang Zhengzhi." },
  { name: "Yan Chuchu", region: "Kaifeng City", area: "Velvet Shade", hint: "On the bridge to the right of the Velvet Shade Landmark, talking with Song Shiheng." },
  { name: "Yan Ziyan", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the south side of the building." },
  { name: "Yang Chunnuan", region: "Kaifeng City", area: "Velvet Shade", hint: "South of Springwave Pavilion, talking with Su Xinlu and three other NPCs." },
  { name: "Ye Zhiqiu", region: "Kaifeng City", area: "Velvet Shade", hint: "Beside Xu Lijun on the ground floor of Revelry Hall, on the east side of the building." },
  { name: "Yi Xi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, dining with Guo Zhixiang." },
  { name: "Yu Hui", region: "Kaifeng City", area: "Velvet Shade", hint: "At the far end of the street, west of the Velvet Shade Landmark." },
  { name: "Zhen Huo", region: "Kaifeng City", area: "Velvet Shade", hint: "On the ground floor of Revelry Hall, on the south side of the building." },
  { name: "Zhuang Zhengzhi", region: "Kaifeng City", area: "Velvet Shade", hint: "On the second floor of Revelry Hall, dining with Xue Li." },
];

const npcDetailsSorted = npcDetails
  .map((npc) => ({ ...npc, image: npcPortraitPath(npc.name) }))
  .sort((a, b) => a.name.localeCompare(b.name));

const npcDetailsByName = new Map(npcDetailsSorted.map((npc) => [npc.name, npc]));
const allPins: MapPin[] = (npcPins as unknown as Array<Partial<MapPin>>).map((pin) => {
  const detail = pin.name ? npcDetailsByName.get(pin.name) : undefined;
  return {
    name: pin.name ?? detail?.name ?? "Unknown NPC",
    x: pin.x ?? 0,
    y: pin.y ?? 0,
    region: detail?.region ?? pin.region,
    area: detail?.area ?? pin.area,
    hint: detail?.hint ?? pin.hint,
    image: detail?.image ?? (pin.name ? npcPortraitPath(pin.name) : undefined),
  };
});

const nonInteractableNpcs = [
  {
    name: "Qi Sheng",
    role: "Oddity Collector (non-interactable for chat)",
    region: "Verdant Wilds",
    area: "Southeast of General's Shrine, west of the Wayfarer",
    details:
      "Exchange Oddities with Qi Sheng to upgrade Melodies of Peace. He is present but does not trigger Old Friends / AI Chat.",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer (non-interactable for chat)",
    region: "Qinghe",
    area: "Evercare Clinic, north of Moonveil Mountain and south of Blissful Retreat",
    details:
      "Provides healing for a fee and can expand medicine capacity when you trade Medicinal Tales. No Old Friends / AI Chat available.",
  },
];

export default function NpcListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/npc-list`,
      dateModified: "2026-08-29",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: npcFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="en" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <div className="mb-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-50">
              This page is a dated editorial snapshot reviewed on 2026-06-24. It is not an exhaustive live-game database; verify names, routes, interactions, and rewards in the current client.
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Where Winds Meet NPC List: Old Friends locations, rewards, and AI Chat.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Looking for a Where Winds Meet NPC list? Start with this dated visual directory of editorial location notes, Old Friends context, non-interactable NPC notes, and AI Chat lines for friends like Qin Caiwei.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#npc-directory"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🗂️ Browse dated NPC directory
              </Link>
              <Link
                href="/guides/qin-caiwei"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                💬 Qin Caiwei chat guide
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/20">
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
            Fast answer for searchers
          </p>
          <h2 className="text-2xl font-bold text-slate-50">
            Use this page as a starting point for an NPC location note, Old Friends context, or AI Chat line.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/90">
            The page is built around the most common Where Winds Meet NPC searches: where an NPC is, whether they count as an Old Friend, what reward or completion progress they provide, and what to type when the AI Chat refuses a short answer.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {searchIntentAnswers.map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-400/30 bg-slate-950/60 p-4">
              <h3 className="text-sm font-semibold text-emerald-100">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="npc-long-tail-answers" className="space-y-5 rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 shadow-lg shadow-cyan-950/30">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
            Search intent: NPC name locations
          </p>
          <h2 className="text-2xl font-bold text-slate-50">
            Zhou Yihang and Feng Rusong locations in Where Winds Meet.
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            GSC is starting to show individual NPC name searches. These two answers keep the exact long-tail terms
            near the top of the NPC guide while still linking back into the dated editorial directory.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {npcLongTailFocus.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">{npc.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">{npc.query}</p>
                </div>
                <span className="rounded-full border border-cyan-300/40 px-2 py-0.5 text-[11px] font-semibold text-cyan-100">
                  Old Friend
                </span>
              </div>
              <div className="mt-3 space-y-2 text-xs leading-relaxed text-slate-300">
                <p><span className="font-semibold text-emerald-200">Region:</span> {npc.region}</p>
                <p><span className="font-semibold text-emerald-200">Area:</span> {npc.area}</p>
                <p><span className="font-semibold text-emerald-200">Route:</span> {npc.route}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">How to use this editorial directory</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Search the cards below by name, region, or area, or use the imported map snapshot. Game8 media in this exact directory is authorized for site reuse by the site owner; the authorization does not make the June snapshot current, official, or exhaustive.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#npc-directory"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70 hover:text-emerald-50"
            >
              Browse visual directory
            </Link>
            <Link
              href="/guides/gift-of-gab"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              AI Chat basics (Gift of Gab)
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">A practical AI Chat pattern to try</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {aiChatBasics.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-emerald-300">-</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-100">Copy-paste chat lines</p>
            <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
              {copyLines.map((line) => (
                <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-400">
              This editorial pattern may help with some Old Friends. If an NPC rejects it, follow the current in-game hint instead of assuming one script works everywhere.
            </p>
          </div>
        </div>
      </section>

      <section id="npc-map" className="space-y-4 rounded-3xl border border-cyan-400/30 bg-slate-950/70 p-6 shadow-lg">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Authorized visual reference · dated snapshot</p>
          <h2 className="text-2xl font-bold text-slate-50">Searchable Old Friends visual reference</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            The searchable records and portraits belong to the 2026-06-24 editorial snapshot. The large composite map is optional and intentionally has no overlaid pins because its imported coordinates are not calibrated to the image.
          </p>
        </div>
        <NpcMapClient pins={allPins} mapSrc={npcMapPath} />
        <p className="text-xs leading-relaxed text-slate-400">
          Source dataset and media: {" "}
          <a
            href="https://game8.co/games/Where-Winds-Meet/archives/565812"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200 underline decoration-cyan-400/50 underline-offset-4"
          >
            Game8 NPC guide
          </a>
          . The site owner confirmed that this Game8 media is authorized for site reuse on 2026-08-29; the repository does not claim to have independently reviewed the underlying legal instrument.
        </p>
      </section>

      <section id="npc-directory" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗂️</span>
          <h2 className="text-2xl font-bold text-slate-50">Catalogued interactable NPCs (Old Friends)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Snapshot last reviewed 2026-06-24. This visual directory preserves editorial NPC notes and authorized Game8 portraits, but it is not an exhaustive live-game database. Verify every name, route, interaction, and reward in your current client.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {npcDetailsSorted.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                <span className="text-[11px] uppercase tracking-wide text-slate-400">{npc.region || "Region unknown"}</span>
              </div>
              <p className="text-xs text-emerald-200">Area: {npc.area || "Not specified"}</p>
              <p className="text-xs text-slate-300 leading-relaxed">Hint: {npc.hint || "Check the map and talk with empathy."}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Why finish Old Friends early</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Check the current relationship panel for any recurring or one-time reward before prioritizing an NPC.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Old Friends lists help completion goals in each region.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Try the AI Chat pattern, then adapt it to the current hint for each NPC.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚫</span>
          <h3 className="text-2xl font-bold text-slate-50">Non-interactable NPCs (no AI Chat)</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          These NPCs appear in the world but do not open Old Friends / AI Chat. They still provide services, so keep them handy.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {nonInteractableNpcs.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-amber-200">{npc.role}</p>
                </div>
                <span className="rounded-full border border-amber-400/50 bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                  Non-interactable
                </span>
              </div>
              <p className="text-xs text-emerald-200">Region: {npc.region}</p>
              <p className="text-xs text-slate-200">Area: {npc.area}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{npc.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h3 className="text-2xl font-bold text-slate-50">NPC list FAQ</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {npcFaqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">{faq.q}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">?</span>
          <h3 className="text-2xl font-bold text-slate-50">More guides</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Qin Caiwei Friendship",
              href: "/guides/qin-caiwei",
              note: "Full AI Chat playbook for the most stubborn Old Friend.",
            },
            {
              title: "Gift of Gab",
              href: "/guides/gift-of-gab",
              note: "Card-based persuasion basics to complement AI Chat.",
            },
            {
              title: "Woven with Malice",
              href: "/guides/woven-with-malice",
              note: "Narrative quest if you want more story-driven encounters.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
