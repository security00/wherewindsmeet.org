export type ItemVerificationStatus = "verified" | "pending";
export type ItemMediaKind = "placeholder" | "official" | "own" | "unverified";

export type ItemCandidate = {
  name: string;
  image?: string;
  use: string;
  location: string;
  verificationStatus?: ItemVerificationStatus;
  sourceUrl?: string;
  highValue?: boolean;
  mediaKind?: ItemMediaKind;
  mediaSourceUrl?: string;
};

export type ItemMedia =
  | { kind: "placeholder" | "unverified" }
  | { kind: "own"; src: string }
  | { kind: "official"; src: string; sourceUrl: string };

export type PublishedItem = Omit<
  ItemCandidate,
  "image" | "mediaKind" | "mediaSourceUrl" | "verificationStatus"
> & {
  verificationStatus: "verified";
  sourceUrl: string;
  highValue: true;
  media: ItemMedia;
};

export type ItemCoverage = {
  catalogued: number;
  verified: number;
  pending: number;
  published: number;
};

export function buildItemIndex(records: ItemCandidate[]): {
  published: PublishedItem[];
  coverage: ItemCoverage;
};
