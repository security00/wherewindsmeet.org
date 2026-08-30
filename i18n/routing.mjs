export const SITE_URL = "https://wherewindsmeet.org";

export const LOCALE_CONFIG = Object.freeze({
  en: Object.freeze({ htmlLang: "en-US", hrefLang: "en-US", prefix: "", label: "English", flag: "🇺🇸" }),
  vi: Object.freeze({ htmlLang: "vi-VN", hrefLang: "vi-VN", prefix: "/vn", label: "Tiếng Việt", flag: "🇻🇳" }),
  de: Object.freeze({ htmlLang: "de-DE", hrefLang: "de-DE", prefix: "/de", label: "Deutsch", flag: "🇩🇪" }),
});

export const LOCALES = Object.freeze(["en", "vi", "de"]);

// Positive allowlist: a new English route is English-only until a reviewed
// localized page is explicitly added here. This prevents accidental hreflang
// and language-switch links to English re-exports under /de or /vn.
const REVIEWED_DE_AND_VI_PATHS = new Set([
  "/",
  "/guides",
  "/guides/bosses",
  "/guides/bosses/dao-lord",
  "/guides/bosses/god-of-avaric",
  "/guides/bosses/heartseeker",
  "/guides/bosses/lucky-seventeen",
  "/guides/bosses/murong-yuan",
  "/guides/bosses/qianye",
  "/guides/bosses/the-void-king",
  "/guides/bosses/tian-ying",
  "/guides/bosses/ye-wanshan",
  "/guides/bosses/zheng-e",
  "/guides/builds",
  "/guides/character-creation-codes",
  "/guides/clouded-revelation",
  "/guides/commerce-coins",
  "/guides/cosmetics",
  "/guides/desktop-widget",
  "/guides/endgame",
  "/guides/evershift-labyrinth",
  "/guides/find-officer-nan",
  "/guides/flicker-of-faces",
  "/guides/free-morph",
  "/guides/free-outfits",
  "/guides/gift-of-gab",
  "/guides/heavens-threshold-cloudstair",
  "/guides/hidden-mountain",
  "/guides/items",
  "/guides/jiangnan-hangzhou",
  "/guides/martial-arts-weapons",
  "/guides/mist-shrouded-prison",
  "/guides/mistveil-city",
  "/guides/murong-yuan-adoptive-father",
  "/guides/new-players",
  "/guides/npc-list",
  "/guides/patch-notes",
  "/guides/platforms",
  "/guides/qin-caiwei",
  "/guides/sects",
  "/guides/skill-theft",
  "/guides/the-great-faceologist",
  "/guides/wall-puzzle",
  "/guides/weapons",
  "/guides/weapons/dual-blades",
  "/guides/weapons/fan",
  "/guides/weapons/mo-blade",
  "/guides/weapons/rope-dart",
  "/guides/weapons/spear",
  "/guides/weapons/sword",
  "/guides/weapons/umbrella",
  "/guides/which-faction-controls-ghost-revelry-hall",
  "/guides/who-is-destined-to-face-the-purple-star-catastrophe",
  "/guides/woven-with-malice",
  "/guides/xiangqi",
  "/news",
  "/privacy",
  "/terms",
  "/tools",
  "/tools/checklist",
  "/tools/interactive-map",
  "/tools/pvp-combos",
  "/tools/reset-timer",
  "/videos",
]);

const REVIEWED_DE_ONLY_PATHS = new Set([
  "/guides/one-leaf-one-life",
]);

export const normalizeBasePath = (path) => {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.replace(/\/+$/, "") || "/";
};

export const localeFromPathname = (pathname) => {
  const normalized = normalizeBasePath(pathname);
  if (normalized === "/vn" || normalized.startsWith("/vn/")) return "vi";
  if (normalized === "/de" || normalized.startsWith("/de/")) return "de";
  return "en";
};

export const stripLocalePrefix = (pathname) => {
  const normalized = normalizeBasePath(pathname);
  const locale = localeFromPathname(normalized);
  const prefix = LOCALE_CONFIG[locale].prefix;
  if (!prefix) return normalized;
  if (normalized === prefix) return "/";
  return normalizeBasePath(normalized.slice(prefix.length));
};

export const getAvailableLocales = (path) => {
  const normalized = normalizeBasePath(path);
  if (REVIEWED_DE_AND_VI_PATHS.has(normalized)) return [...LOCALES];
  if (REVIEWED_DE_ONLY_PATHS.has(normalized)) return ["en", "de"];
  return ["en"];
};

export const buildLocalizedPath = (path, locale) => {
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const normalized = normalizeBasePath(pathname);
  if (!getAvailableLocales(normalized).includes(locale)) return null;
  const prefix = LOCALE_CONFIG[locale]?.prefix;
  if (prefix === undefined) return null;
  if (normalized === "/") return `${prefix || "/"}${suffix}`;
  return `${prefix}${normalized}${suffix}`;
};

export const buildLocaleUrls = (path) => {
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const urls = {};
  for (const locale of getAvailableLocales(pathname)) {
    const localizedPath = buildLocalizedPath(path, locale);
    if (localizedPath) {
      urls[LOCALE_CONFIG[locale].hrefLang] = `${SITE_URL}${localizedPath === "/" ? "" : localizedPath}`;
    }
  }
  const defaultPath = buildLocalizedPath(path, "en");
  if (defaultPath) {
    urls["x-default"] = `${SITE_URL}${defaultPath === "/" ? "" : defaultPath}`;
  }
  return urls;
};
