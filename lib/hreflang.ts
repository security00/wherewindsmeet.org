import type { Metadata } from "next";
import {
  buildLocaleUrls,
  buildLocalizedPath,
  SITE_URL,
} from "@/i18n/routing.mjs";

export type SupportedLanguageCode = "en" | "vi" | "de";

type BuildHreflangOptions = {
  canonicalLanguage?: SupportedLanguageCode;
  includeXDefault?: boolean;
};

export const buildHreflangAlternates = (
  path: string,
  options: BuildHreflangOptions = {}
): Metadata["alternates"] => {
  const canonicalCode = options.canonicalLanguage || "en";
  const languages: Record<string, string> = Object.fromEntries(
    Object.entries(buildLocaleUrls(path)),
  );

  if (options.includeXDefault === false) {
    delete languages["x-default"];
  }

  const canonicalPath =
    buildLocalizedPath(path, canonicalCode) || buildLocalizedPath(path, "en") || "/";
  const canonical = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

  return {
    canonical,
    languages,
  };
};
