import materials from "./materials.json";
import development from "./development.json";
import consumables from "./consumables.json";
import common from "./common.json";
import { buildItemIndex } from "./item-policy";
import type {
  ItemCandidate,
  ItemCoverage,
  PublishedItem,
} from "./item-policy";

export type ItemCategoryId =
  | "materials"
  | "development"
  | "consumables"
  | "common";

export type Item = PublishedItem;
export type { ItemCoverage };

export type ItemCategory = {
  id: ItemCategoryId;
  title: string;
  blurb: string;
  items: Item[];
  coverage: ItemCoverage;
  groups?: {
    id: string;
    title: string;
    items: Item[];
  }[];
};

const materialsIndex = buildItemIndex(materials as ItemCandidate[]);
const developmentIndex = buildItemIndex(development as ItemCandidate[]);
const consumablesIndex = buildItemIndex(consumables as ItemCandidate[]);
const commonIndex = buildItemIndex(common as ItemCandidate[]);

const devMap = new Map<string, Item>();
for (const item of developmentIndex.published) {
  if (!devMap.has(item.name)) {
    devMap.set(item.name, item);
  }
}

const dev = (names: string[]) =>
  names
    .map((name) => devMap.get(name))
    .filter((item): item is Item => Boolean(item));

export const itemCategories: ItemCategory[] = [
  {
    id: "materials",
    title: "Materials",
    blurb: "Basic harvesting and hunting resources used for crafting gear, furniture, or commission deliveries.",
    items: materialsIndex.published,
    coverage: materialsIndex.coverage,
  },
  {
    id: "development",
    title: "Development Materials",
    blurb: "Used for weapon breakthroughs, inner skill enhancement, mechanism blueprints, and other advanced crafting.",
    items: developmentIndex.published,
    coverage: developmentIndex.coverage,
    groups: [
      {
        id: "inner-way-passives",
        title: "Inner Way Passives",
        items: dev(["Evening Snow: Page", "Beef Tendon", "Blinding Mist", "Medicinal Tales"]),
      },
      {
        id: "martial-arts-upgrades",
        title: "Martial Arts Upgrades",
        items: dev([
          "Bluestone Lock",
          "Legendary Martial Codex I",
          "Legendary Martial Codex II",
          "Pine Resin Ointment",
          "Scarlet Flame Ointment",
          "Ultimate Jianghu Secret",
          "Wolframite Weight",
          "Wind Beneath Wings: Leopard",
        ]),
      },
      {
        id: "miscellaneous",
        title: "Miscellaneous",
        items: dev(["Career Notebook", "Spiritual Therapy"]),
      },
      {
        id: "verified-systems-and-tuning",
        title: "Verified Systems & Tuning",
        items: dev([
          "Horse Gallop Tactic",
          "Modulating Stone",
          "Retuning Stone: Mirage",
        ]),
      },
      {
        id: "mystic-arts-upgrades",
        title: "Mystic Arts Upgrades",
        items: dev([
          "Ebon Iron",
          "Ebon Iron Lv. 2",
          "Meteor Flight",
          "Oscillating Jade",
          "Vicious Fruit",
        ]),
      },
      {
        id: "gear-tuning",
        title: "Gear Tuning",
        items: dev([
          "Large Tuning Stone: Doom",
          "Large Tuning Stone: Gold Inlay",
          "Large Tuning Stone: Rhapsody",
          "Large Tuning Stone: Snowshield",
          "Tuning Stone",
        ]),
      },
    ].filter((group) => group.items.length > 0),
  },
  {
    id: "consumables",
    title: "Consumables",
    blurb: "Combat and life-buff foods, wines, and baits—one-time use items.",
    items: consumablesIndex.published,
    coverage: consumablesIndex.coverage,
  },
  {
    id: "common",
    title: "Common Items",
    blurb: "Miscellaneous collectibles, gifts, and decorations often used for favor or achievement hunting.",
    items: commonIndex.published,
    coverage: commonIndex.coverage,
  },
];

export const itemCoverage = itemCategories.reduce<ItemCoverage>(
  (total, category) => ({
    catalogued: total.catalogued + category.coverage.catalogued,
    verified: total.verified + category.coverage.verified,
    pending: total.pending + category.coverage.pending,
    published: total.published + category.coverage.published,
  }),
  { catalogued: 0, verified: 0, pending: 0, published: 0 },
);

export default itemCategories;
