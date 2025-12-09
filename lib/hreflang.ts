import type { Metadata } from "next";

const SITE_URL = "https://wherewindsmeet.org";

const SUPPORTED_LANGUAGES = [
  { code: "en", hrefLang: "en-US", prefix: "" },
  { code: "vi", hrefLang: "vi-VN", prefix: "/vn" },
] as const;

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

type BuildHreflangOptions = {
  canonicalLanguage?: SupportedLanguageCode;
  includeXDefault?: boolean;
};

const normalizePath = (path: string) => {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
};

export const buildHreflangAlternates = (
  path: string,
  options: BuildHreflangOptions = {}
): Metadata["alternates"] => {
  const normalizedPath = normalizePath(path);
  const canonicalCode = options.canonicalLanguage || "en";
  const canonicalLang = SUPPORTED_LANGUAGES.find((lang) => lang.code === canonicalCode) || SUPPORTED_LANGUAGES[0];

  const languages = SUPPORTED_LANGUAGES.reduce<Record<string, string>>((acc, lang) => {
    acc[lang.hrefLang] = `${SITE_URL}${lang.prefix}${normalizedPath}`;
    return acc;
  }, {});

  if (options.includeXDefault !== false) {
    languages["x-default"] = `${SITE_URL}${normalizedPath}`;
  }

  const canonical = `${SITE_URL}${canonicalLang.prefix}${normalizedPath}`;

  return {
    canonical,
    languages,
  };
};
