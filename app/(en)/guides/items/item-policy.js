const PENDING_COPY = /\b(?:pending|to be confirmed|tbc|unknown)\b/i;

const hasConcreteDetail = (value) =>
  typeof value === "string" && value.trim().length > 0 && !PENDING_COPY.test(value);

const hasValidSource = (value) => {
  if (typeof value !== "string") return false;
  try {
    const source = new URL(value);
    return source.protocol === "https:" || source.protocol === "http:";
  } catch {
    return false;
  }
};

const hasLocalImage = (value) => typeof value === "string" && value.startsWith("/");

const normalizeMedia = (record) => {
  if (record.mediaKind === "placeholder" || record.image?.includes("placeholder.svg")) {
    return { kind: "placeholder" };
  }
  if (record.mediaKind === "own" && hasLocalImage(record.image)) {
    return { kind: "own", src: record.image };
  }
  if (
    record.mediaKind === "official" &&
    hasLocalImage(record.image) &&
    hasValidSource(record.mediaSourceUrl)
  ) {
    return {
      kind: "official",
      src: record.image,
      sourceUrl: record.mediaSourceUrl,
    };
  }
  return { kind: "unverified" };
};

/**
 * Stable data-policy seam for the item index. Records are deliberately opt-in:
 * legacy entries stay pending until an editor supplies verification metadata.
 */
function buildItemIndex(records) {
  const normalized = records.map((record) => {
    const content = { ...record };
    delete content.image;
    delete content.mediaKind;
    delete content.mediaSourceUrl;
    return {
      ...content,
      verificationStatus:
        record.verificationStatus === "verified" ? "verified" : "pending",
      media: normalizeMedia(record),
    };
  });
  const published = normalized.filter(
    (record) =>
      record.verificationStatus === "verified" &&
      record.highValue === true &&
      hasValidSource(record.sourceUrl) &&
      (hasConcreteDetail(record.use) || hasConcreteDetail(record.location)),
  );

  return {
    published,
    coverage: {
      catalogued: normalized.length,
      verified: normalized.filter((record) => record.verificationStatus === "verified").length,
      pending: normalized.filter((record) => record.verificationStatus === "pending").length,
      published: published.length,
    },
  };
}

module.exports = { buildItemIndex };
