import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import npcPins from "@/public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { type MapPin } from "@/app/(en)/guides/npc-list/NpcMapClient";
import { npcMapPath, npcPortraitPath } from "@/lib/npc-media";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC-Liste - Old Friends Orte & Rewards",
  description:
    "Durchsuche eine datierte redaktionelle Momentaufnahme mit NPC-Ortshinweisen, Old-Friends-Kontext und AI-Chat-Zeilen.",
  alternates: buildHreflangAlternates("/guides/npc-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet NPC-Liste - Old Friends Orte & Rewards",
    description:
      "Datierte redaktionelle Momentaufnahme mit NPC-Ortshinweisen und AI-Chat-Tipps.",
    url: `${baseUrl}/de/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Where Winds Meet Old-Friends-NPC-Verzeichnis, datierte Momentaufnahme",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet NPC-Liste - Old Friends",
    description:
      "Datierte redaktionelle Momentaufnahme mit NPC-Ortshinweisen und AI-Chat-Tipps.",
  },
};

const quickFacts = [
  { label: "Umfang", value: "Old Friends / AI-Chat-NPCs", icon: "💬" },
  { label: "Regionen", value: "Qinghe und darüber hinaus", icon: "🧭" },
  { label: "Grundmuster", value: "Zuhören, Empathie, (Klammern) Lösung, Abschied", icon: "🧩" },
  { label: "Belohnungen", value: "Im aktuellen Beziehungsmenü prüfen", icon: "🎁" },
];

const aiChatBasics = [
  "Den Hinweis über dem Chat lesen und einmal in eigenen Worten wiederholen.",
  "Eine Empathie-Zeile, eine Lösung in Klammern, dann ein klarer Abschied.",
  "Kurz halten (3–6 Zeilen); bei Entgleisung resetten und erneut starten.",
  "Konkrete Beats funktionieren besser als vage Trösterei; keine „Mind-Control“-Einzeiler.",
];

const copyLines = [
  "Erzähl mir deine Geschichte. Ich höre dir zu.",
  "Erzähl weiter – was belastet dich?",
  "(hilft dir, die Sache zu klären und zur Ruhe zu kommen)",
  "(wir werden Freunde und vertrauen einander)",
  "Lebewohl (verbeugt sich und geht).",
];

const searchIntentAnswers = [
  {
    title: "NPC-Orte",
    summary:
      "Nutze das datierte Textverzeichnis, um NPC-Hinweise nach Region, Gebiet oder Name zu durchsuchen. Prüfe jede Route im aktuellen Spielclient.",
  },
  {
    title: "Old-Friends-Belohnungen",
    summary:
      "Die redaktionellen Notizen nennen teils Geschenke, regionale Completion oder kleine Story-Szenen. Prüfe das aktuelle Beziehungsmenü, bevor du mit wiederkehrenden Belohnungen planst.",
  },
  {
    title: "AI-Chat-Skript",
    summary:
      "Das schnelle Muster: Hinweis wiederholen, eine Empathie-Zeile schreiben, eine Lösung in Klammern formulieren und höflich verabschieden. Nutze die Copy-Zeilen, wenn ein NPC in der Schleife hängt.",
  },
  {
    title: "Qin Caiwei und schwere NPCs",
    summary:
      "Wenn ein NPC kurze Antworten ablehnt, wechsle zu vollem Rollenspiel. Qin Caiwei ist das wichtigste Beispiel; spring zum eigenen Guide, wenn ihr Friendship-Schritt hängt.",
  },
];

const npcFaqs = [
  {
    q: "Wo finde ich NPCs in Where Winds Meet?",
    a: "Durchsuche das datierte redaktionelle Verzeichnis nach Region oder NPC-Name. Jeder Routenhinweis muss im aktuellen Spielclient geprüft werden.",
  },
  {
    q: "Was sind Old Friends in Where Winds Meet?",
    a: "Old Friends sind NPC-Beziehungen rund um Gespräche und AI Chat. Belohnungen und Completion können sich ändern; das aktuelle Beziehungsmenü ist maßgeblich.",
  },
  {
    q: "Wie befreunde ich NPCs per AI Chat?",
    a: "Lies den Hinweis, spiegel die Sorge des NPCs, füge eine Handlung in Klammern hinzu und beende das Gespräch höflich. Wenn es entgleist, resetten und anders formulieren.",
  },
  {
    q: "Warum ist Qin Caiwei schwieriger als andere NPCs?",
    a: "Qin Caiwei braucht oft mehr Rollenspiel als eine kurze Trostzeile. Nutze den eigenen Qin-Caiwei-Guide, wenn der Old-Friends-Schritt wiederholt scheitert.",
  },
  {
    q: "Sind Qi Sheng und Yao Yaoyao Old-Friends-NPCs?",
    a: "Nein. Sie sind in der Welt sichtbar und bieten Services, öffnen aber kein Old Friends oder AI Chat. Deshalb stehen sie separat bei den nicht interaktiven NPCs.",
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
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Im Lager beim General's Shrine: bei einer Gruppe Untergebener neben dem Schrein." },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Oben auf einem Gerüst neben der Arena. Ein paar Mal mit ihm sparren, dann ansprechen." },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Am Fluss südlich des General's Shrine. Sie bittet um Hilfe bei der Suche nach ihren Brüdern." },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Nahe dem Hauptschrein im General's Shrine, beim Training." },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Südlich des General's Shrine beim Baumfällen." },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "Vom Eingang des General's Shrine ins rechte Gebäude. Je nach Tag auch draußen beim Schrein." },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Auf dem Schlickfeld südlich des Verdant Wilds Wayfarer." },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Oben links, neben einer Steinsäule." },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Sitzend beim Angeln am Flussrand links vom General's Shrine, nördlich des Stonewash Strand Boundary Stone." },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Auf dem Schlickfeld südlich des Verdant Wilds Wayfarer." },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "Am See gegenüber vom General's Shrine Boundary Stone beim Angeln." },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "Neben einem Tisch vor einem Haus zu finden." },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "Auf einem Berg nahe eines Tempels." },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Nördlich des Starfall Spring Boundary Stone, nahe der Straße bei Battlecrest Slope – beim Holzfällen." },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Vor einer zerstörten Hütte nordöstlich des Starfall Spring Boundary Stone." },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Ganz links an den Docks." },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Nahe der Brücke, hinter hohem Gras." },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Am Straßenrand südlich des Tiger Fort (Battlecrest Slope)." },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Haus (drinnen leicht zu sehen)." },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Am Straßenrand südlich des Tiger Fort (Battlecrest Slope)." },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Auf den Stufen am Fluss sitzend." },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Tanzend hinter einer Statue." },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Haus (drinnen)." },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Norden des Dorfes beim Hacken, nahe eines zerstörten Hauses." },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Draußen vor seinem Haus." },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Norden der Stadt am Boden spielend, nahe des Wegs zum Mercyheart Monastery." },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Auf Stonewash Strand südlich des Boundary Stone beim Holzfällen." },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Nahe dem Eingang des Divinecraft Dungeon." },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Auf dem Canopy/Vordach am Stonewash Strand östlich des Moonveil Mountain Wayfarer." },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Beim Pflücken von Buddhist Flowers zu sehen." },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Am Weg nördlich des Halo Peak Landmark." },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Entlang des Wegs Richtung Halo Peak." },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Beim Holzfällen nahe dem Path of Karma Landmark." },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Steht zwischen mehreren Katzen." },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "In der Nähe des Heaven's Pier Landmark." },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Beim Trinken aus einem großen Behälter." },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Vor dem Stand von Yuan Tiantian." },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Neben mehreren großen Behältern." },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Im Wirtshaus beim Fegen." },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Am Fluss beim Wäschewaschen." },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Im Haus hinter Yuan Tiantians Stand." },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Vor der Feuerbrauerei (Fire-forced brewing)." },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Unter einem weißen Blütenbaum." },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Hinter einem Haus, bei dem Blütenblätter zum Trocknen ausgelegt sind." },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Unter einem Baum am Rand des Gebiets." },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Vom Moonveil Peak Landmark nach rechts; er hackt Holz unterhalb des Berges." },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Auf dem Weg zwischen Peacebell Tower und Crimson Cliff." },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Ganz rechts bei Heaven Pier beim Holzfällen." },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Nahe dem Crimson Cliff Landmark, sammelt Blätter von einem einsamen roten Baum." },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hinter hohem Gras nahe der Klippenkante." },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Neben Wagen, nahe den Docks." },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Vom Stillwind Slope Landmark nach Norden; dort beim Baumfällen." },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen." },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen." },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen." },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Vom Stillslope Landmark nach rechts; sie tanzt nahe eines Felsens." },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "An den Docks unten links beim Stillwind Slope Marker." },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Südlich vom Back Mountain Landmark, im Lager mit Boss Qian." },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Südlich vom Back Mountain Landmark, im Lager mit Zhang the Diviner." },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Vom Back Mountain Landmark nach Norden, die Felswand hochklettern; oben zu finden." },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "In der Nähe des Deer Pond Landmark." },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Nahe einer Klippe zu sehen." },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Gräbt nahe einem Holzstapel." },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Steht nahe dem Fluss." },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Hinter einem Bambuscluster nahe dem Fluss." },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Am Straßenrand zu finden." },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Am Straßenrand zusammen mit ihrem Begleiter Xie Changgong." },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Nahe etwas Bambus zu finden." },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem Banditenlager zu finden." },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem einsamen Baum zu finden." },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Entlang der Straße zusammen mit ihrem Sword Servant." },
  { name: "Hong Yang", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem See zusammen mit Lu Ke." },
  { name: "Wen Gao", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Zwischen einem Baum und einem Wagen." },
  { name: "Ya Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "An den Docks zu finden." },
  { name: "Hu Da", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Vom Encircling Lake Landmark dem Weg nach links folgen; er steht links beim Outdoor-Sitzbereich." },
  { name: "Elder Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "An den Docks unten rechts vom Back Mountain Landmark." },
  { name: "Meng Da", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Nordöstlich vom Harvest Village Landmark." },
  { name: "Hao Jiu", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Nahe dem Zaun." },
  { name: "Lu Kangge", region: "Moonveil Mountain", area: "Blissful Retreat", hint: "Südwestlich vom Source of Still Shore Landmark." },
  { name: "Jin Nanshou", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Beim Deerforage Grove Landmark starten, der Straße nach Norden bis zur Gabelung folgen, dann rechts. Er steht am Straßenrand." },
  { name: "Jing'an", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "An der Gabelung in der Mitte der Straße. Erreichbar: südlich vom Porcelain Kiln Landmark oder nördlich vom Deerforage Grove Landmark." },
  { name: "Lin Jin", region: "Moonveil Mountain", area: "Witherwilds", hint: "Vom Porcelain Kiln Landmark die südliche Straße nehmen; er hackt Holz am Straßenrand." },
  { name: "Sun Mang", region: "Moonveil Mountain", area: "Witherwilds", hint: "Vom Porcelain Kiln Boundary Stone der südlichen Straße folgen; er steht am Rand der Weggabelung." },
  { name: "Li Yueniang", region: "Moonveil Mountain", area: "Riverside Station", hint: "Zusammen mit Yu Songfeng nahe dem Eingang der Fährstation." },
  { name: "Yu Songfeng", region: "Moonveil Mountain", area: "Riverside Station", hint: "Zusammen mit Li Yueniang nahe dem Eingang der Fährstation." },
  { name: "Wang Duoli", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Südlich des Sees nahe dem Starfall Spring Boundary Stone." },
  { name: "Ren Shuiliu", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude neben Meng Zhixia." },
  { name: "Meng Zhixia", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude neben Ren Shuiliu." },
  { name: "Yu Nu", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude mit Blick aufs Meer." },
  { name: "Jiang Nanyi", region: "Moonveil Mountain", area: "Riverside Station", hint: "Unter einem weißen Blütenbaum an den Docks, hinter einigen Damen." },
  { name: "Zhou Canying", region: "Moonveil Mountain", area: "Riverside Station", hint: "An einem der Tische im roten Gebäude sitzend." },
  { name: "Tian Heng", region: "Moonveil Mountain", area: "Riverside Station", hint: "An einem der Tische im roten Gebäude sitzend." },
  { name: "Wu Cezhi", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "In der linken Toilette/Latreine zu finden." },
  { name: "Angler", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Sitzend am Ufer im Nordosten des Dorfes." },
  { name: "Cao Jinyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Tao Jingjing im Erdgeschoss der Revelry Hall, an der Nordseite des Gebaeudes." },
  { name: "Chu Yuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Oestlich des Velvet Shade Landmark, auf der Strasse stehend." },
  { name: "He Ruiyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Li Yushan im Erdgeschoss der Revelry Hall, an der Suedwestseite des Gebaeudes." },
  { name: "Jiang Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Von Springwave Pavilion nach Sueden gehen, dann rechts; hinter dem Haus, in dem Yiluo (Graceful Memory) wohnt." },
  { name: "Jiang Yulang", region: "Kaifeng City", area: "Velvet Shade", hint: "Noerdlich von Springwave Pavilion, im Blumenladen mit Rong Xiaoxiao." },
  { name: "Jing Chaoyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, am Fenster." },
  { name: "Leng Daculi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen in einem Privatraum." },
  { name: "Li Youxin", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe dem Velvet Shade Landmark bei den Docks." },
  { name: "Li Yuerong", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe dem Velvet Shade Landmark, vor einem Antiquitaetengeschaeft." },
  { name: "Lu Zhuo", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall neben Wu Peng, nahe der Osttreppe zum dritten Stock." },
  { name: "Mu Huaishan", region: "Kaifeng City", area: "Velvet Shade", hint: "Suedlich von Springwave Pavilion, im Gespraech mit Huo Tinglan." },
  { name: "Murong Chan", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe einigen Blumenarrangements." },
  { name: "Qi Wuyu", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, vorne in der Mitte bei der Auffuehrung." },
  { name: "Qin Zhu", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Suedseite des Gebaeudes." },
  { name: "Qiu Fengxi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Westseite des Gebaeudes." },
  { name: "Ruan Sese", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe dem Velvet Shade Landmark, vor dem Laden einen Drachen betrachtend." },
  { name: "Shen Moxuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Auf der anderen Seite der Bruecke oestlich des Velvet Shade Landmark." },
  { name: "Song Shiheng", region: "Kaifeng City", area: "Velvet Shade", hint: "Auf der Bruecke oestlich des Velvet Shade Landmark, im Gespraech mit Yan Chuchu." },
  { name: "Su Xinlu", region: "Kaifeng City", area: "Velvet Shade", hint: "Suedlich von Springwave Pavilion, im Gespraech mit Yang Chunnuan und drei weiteren NPCs." },
  { name: "Tan Xiangchen", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall neben Yin Yan, nahe der Westtreppe zum ersten Stock." },
  { name: "Tao Jingjing", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Cao Jinyang im Erdgeschoss der Revelry Hall, an der Nordseite des Gebaeudes." },
  { name: "Tu Er", region: "Kaifeng City", area: "Velvet Shade", hint: "Noerdlich von Springwave Pavilion, im Gespraech mit Tu Dakuan." },
  { name: "Xu Lijun", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Ye Zhiqiu im Erdgeschoss der Revelry Hall, an der Ostseite des Gebaeudes." },
  { name: "Xu Yingyu", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Westseite des Gebaeudes." },
  { name: "Xue Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen mit Zhuang Zhengzhi." },
  { name: "Yan Chuchu", region: "Kaifeng City", area: "Velvet Shade", hint: "Auf der Bruecke rechts vom Velvet Shade Landmark, im Gespraech mit Song Shiheng." },
  { name: "Yan Ziyan", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Suedseite des Gebaeudes." },
  { name: "Yang Chunnuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Suedlich von Springwave Pavilion, im Gespraech mit Su Xinlu und drei weiteren NPCs." },
  { name: "Ye Zhiqiu", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Xu Lijun im Erdgeschoss der Revelry Hall, an der Ostseite des Gebaeudes." },
  { name: "Yi Xi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen mit Guo Zhixiang." },
  { name: "Yu Hui", region: "Kaifeng City", area: "Velvet Shade", hint: "Am Ende der Strasse, westlich des Velvet Shade Landmark." },
  { name: "Zhen Huo", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Suedseite des Gebaeudes." },
  { name: "Zhuang Zhengzhi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen mit Xue Li." },
];

const npcDetailsSorted = npcDetails
  .map((npc) => ({ ...npc, image: npcPortraitPath(npc.name) }))
  .sort((a, b) => a.name.localeCompare(b.name));

const npcDetailsByName = new Map(npcDetailsSorted.map((npc) => [npc.name, npc]));
const allPins: MapPin[] = (npcPins as unknown as Array<Partial<MapPin>>).map((pin) => {
  const detail = pin.name ? npcDetailsByName.get(pin.name) : undefined;
  return {
    name: pin.name ?? detail?.name ?? "Unbekannter NPC",
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
    role: "Oddity Collector (kein AI-Chat)",
    region: "Verdant Wilds",
    area: "Südöstlich vom General's Shrine, westlich vom Wayfarer",
    details:
      "Oddities bei Qi Sheng tauschen, um Melodies of Peace zu verbessern. NPC ist vorhanden, löst aber kein Old Friends / AI Chat aus.",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer (kein AI-Chat)",
    region: "Qinghe",
    area: "Evercare Clinic, nördlich von Moonveil Mountain und südlich von Blissful Retreat",
    details:
      "Heilt gegen Gebühr und kann die Medizinkapazität erweitern (über Medicinal Tales). Kein Old Friends / AI Chat verfügbar.",
  },
];

export default function NpcListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/npc-list`,
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
      <HomeHubBacklink language="de" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-50">
              Redaktionelle Momentaufnahme, zuletzt am 2026-06-24 geprüft. Dies ist keine vollständige Live-Spiel-Datenbank; Namen, Wege, Interaktionen und Belohnungen müssen im aktuellen Client geprüft werden.
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Where Winds Meet NPC-Liste: Old Friends Orte, Rewards und AI Chat.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Suchst du eine Where Winds Meet NPC-Liste? Dieses datierte visuelle Verzeichnis bündelt redaktionelle Ortshinweise, Old-Friends-Kontext, nicht interaktive NPCs und AI-Chat-Zeilen für Freunde wie Qin Caiwei.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#npc-directory"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🗂️ Datiertes NPC-Verzeichnis öffnen
              </Link>
              <Link
                href="/de/guides/qin-caiwei"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                💬 Qin Caiwei Chat-Guide
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
            Schnelle Antwort fur Suchende
          </p>
          <h2 className="text-2xl font-bold text-slate-50">
            Nutze diese Seite als Ausgangspunkt für NPC-Ortshinweise, Old-Friends-Kontext oder AI-Chat-Zeilen.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/90">
            Die Seite ist auf die wichtigsten Where Winds Meet NPC-Suchen ausgerichtet: wo ein NPC steht, ob er als Old Friend zählt, welche Belohnung oder Completion er bringt und was du schreiben kannst, wenn AI Chat eine kurze Antwort ablehnt.
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

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">So nutzt du das redaktionelle Verzeichnis</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Durchsuche die Karten nach Name, Region oder Gebiet oder nutze die importierte Karten-Momentaufnahme. Game8-Medien in genau diesem Verzeichnis haben eine vom Seiteninhaber bestätigte autorisierte Wiederverwendung; dadurch werden die Daten weder aktuell noch offiziell oder vollständig.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#npc-directory"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70 hover:text-emerald-50"
            >
              Visuelles Verzeichnis öffnen
            </Link>
            <Link
              href="/de/guides/gift-of-gab"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              AI-Chat-Grundlagen (Gift of Gab)
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">Praktisches AI-Chat-Muster zum Ausprobieren</h2>
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
            <p className="text-sm font-semibold text-slate-100">Chatzeilen zum Kopieren</p>
            <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
              {copyLines.map((line) => (
                <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-400">
              Dieses redaktionelle Muster kann bei einigen Old Friends helfen. Wenn ein NPC es ablehnt, folge dem aktuellen In-Game-Hinweis, statt ein universelles Skript anzunehmen.
            </p>
          </div>
        </div>
      </section>

      <section id="npc-map" className="space-y-4 rounded-3xl border border-cyan-400/30 bg-slate-950/70 p-6 shadow-lg">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Autorisierte Bildreferenz · datierte Momentaufnahme</p>
          <h2 className="text-2xl font-bold text-slate-50">Durchsuchbare visuelle Old-Friends-Referenz</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Einträge und Porträts gehören zur redaktionellen Momentaufnahme vom 2026-06-24. Die große Übersichtskarte wird nur auf Wunsch geladen und zeigt absichtlich keine Pin-Überlagerung, weil die importierten Koordinaten nicht auf dieses Bild kalibriert sind.
          </p>
        </div>
        <NpcMapClient
          pins={allPins}
          mapSrc={npcMapPath}
          uiText={{
            regionLabel: "Region",
            allOption: "Alle",
            searchLabel: "NPC-Namen durchsuchen",
            searchPlaceholder: "NPC suchen …",
            showingPrefix: "Angezeigt",
            showingSuffix: "Einträge",
            mapAlt: "Datierte Where Winds Meet Old-Friends-Karten-Momentaufnahme",
            closeAriaLabel: "Schließen",
            regionPrefix: "Region:",
            areaPrefix: "Gebiet:",
            unknownValue: "Unbekannt",
            portraitAltSuffix: "NPC-Referenzbild",
            defaultHint: "Hinweis im aktuellen Client prüfen.",
            loadMap: "2,5-MB-Kartenreferenz laden",
            hideMap: "Kartenreferenz ausblenden",
            mapDisclosure: "Die Übersichtskarte ist eine datierte visuelle Referenz. NPC-Pins werden nicht darübergelegt, weil die importierten Koordinaten für dieses Bild nicht kalibriert sind.",
            selectPrompt: "Wähle einen Treffer, um genau ein Porträt zu laden.",
            resultLimitSuffix: "Die ersten 24 Treffer werden angezeigt; grenze die Suche für weitere NPCs ein.",
          }}
          imagePreviewUiText={{
            instruction: "Scrollen oder Tasten zum Zoomen; Hintergrund schließt die Ansicht",
            zoomIn: "Vergrößern",
            zoomOut: "Verkleinern",
            reset: "1×",
            close: "Schließen",
          }}
        />
        <p className="text-xs leading-relaxed text-slate-400">
          Datensatz und Medien: {" "}
          <a
            href="https://game8.co/games/Where-Winds-Meet/archives/565812"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200 underline decoration-cyan-400/50 underline-offset-4"
          >
            Game8 NPC-Guide
          </a>
          . Die Bestätigung des Seiteninhabers zur autorisierten Wiederverwendung ist im Repository mit Datum 2026-08-29 dokumentiert.
        </p>
      </section>

      <section id="npc-directory" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗂️</span>
          <h2 className="text-2xl font-bold text-slate-50">Redaktionell erfasste interaktive NPCs (Old Friends)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Momentaufnahme, zuletzt am 2026-06-24 geprüft. Dieses visuelle Verzeichnis bewahrt redaktionelle NPC-Notizen und autorisierte Game8-Porträts, ist aber keine vollständige Live-Spiel-Datenbank. Prüfe Namen, Wege, Interaktionen und Belohnungen im aktuellen Client.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {npcDetailsSorted.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <span className="text-[11px] uppercase tracking-wide text-slate-400">{npc.region || "Region unbekannt"}</span>
                </div>
              <p className="text-xs text-emerald-200">Gebiet: {npc.area || "Nicht angegeben"}</p>
              <p className="text-xs text-slate-300 leading-relaxed">Hinweis: {npc.hint || "Im aktuellen Client prüfen und empathisch ansprechen."}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Warum Old Friends früh abschließen?</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Prüfe wiederkehrende oder einmalige Belohnungen im aktuellen Beziehungsmenü, bevor du einen NPC priorisierst.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Old-Friends-Listen helfen bei Completion-Zielen je Region.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Ein Muster einmal lernen und bei vielen NPCs wiederverwenden.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚫</span>
          <h3 className="text-2xl font-bold text-slate-50">Nicht interaktive NPCs (kein AI-Chat)</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Diese NPCs sind in der Welt sichtbar, öffnen aber kein Old Friends / AI Chat. Trotzdem bieten sie Services – also merk sie dir.
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
                  Kein AI-Chat
                </span>
              </div>
              <p className="text-xs text-emerald-200">Region: {npc.region}</p>
              <p className="text-xs text-slate-200">Gebiet: {npc.area}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{npc.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h3 className="text-2xl font-bold text-slate-50">NPC-Liste FAQ</h3>
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
          <h3 className="text-2xl font-bold text-slate-50">Mehr Guides</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Freundschaft mit Qin Caiwei",
              href: "/de/guides/qin-caiwei",
              note: "Kompletter AI-Chat-Plan für den „stursten“ Old Friend.",
            },
            {
              title: "Gift of Gab",
              href: "/de/guides/gift-of-gab",
              note: "Kartensystem-Grundlagen als Ergänzung zum AI Chat.",
            },
            {
              title: "Woven with Malice",
              href: "/de/guides/woven-with-malice",
              note: "Story-Quest, wenn du mehr Story willst.",
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
