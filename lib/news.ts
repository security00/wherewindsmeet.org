export type NewsType = "announcement" | "event" | "guide" | "beta";

export type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO date string, e.g. 2025-11-14
  type: NewsType;
  summary: string;
  officialUrl?: string;
  tags?: string[];
};

// News items based on official Where Winds Meet articles mirrored under ref-page/news.
export const newsItems: NewsItem[] = [
  {
    id: "account-suspension-dec-2025",
    title: "Account Suspension for Violations (Ban Report)",
    date: "2025-12-06",
    type: "announcement",
    summary:
      "Anti-cheat update: Eastwind Pavilion reports ~5,000 accounts banned for cheating, speed hacks, macros, and other unfair tools between Nov 15–Dec 5. Penalties include leaderboard removal, mode restrictions, and temporary or permanent bans. Players are urged to report misconduct and contact customer support with questions.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/BanReport.html",
    tags: ["Anti-cheat", "Ban report", "Fair play"],
  },
  {
    id: "hearts-unite-post-launch-letter",
    title: "Hearts Unite as the Winds Meet — Post-Launch Letter",
    date: "2025-11-23",
    type: "announcement",
    summary:
      "Post-launch dev letter outlining fixes to routing and online latency, near-term improvements to localization, voiceover, tutorials, and puzzle clues, plus mid-December solo latency fixes. The team also details PS5 performance work, multi-character solutions, and upcoming updates such as Steam Deck support, multi-timezone display, split outfits, PS5 Pro PSSR, and audio upgrades.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/official/251123.html",
    tags: ["Stability", "Localization", "PS5", "Steam Deck"],
  },
  {
    id: "global-launch-event-rewards",
    title: "Wind's Welcome Gifts — Global Launch Events & Rewards",
    date: "2025-11-14",
    type: "event",
    summary:
      "Overview of the global launch celebration events and reward tracks, including multi-step login bonuses, activity missions, and special cosmetics you can earn simply by playing during the launch window.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/LaunchGifts.html",
    tags: ["Global launch", "Events", "Rewards"],
  },
  {
    id: "global-launch-redefine-everything",
    title: "Redefine Everything — Where Winds Meet Global Launch",
    date: "2025-11-14",
    type: "announcement",
    summary:
      "The 1.0 global launch letter from the developers, setting out the team’s vision for wuxia, the breadth of the open world, the combat philosophy behind each weapon, and a clear promise to keep monetization cosmetic-focused and free from pay-to-win.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/SeversLive.html",
    tags: ["Global launch", "Developer letter", "Monetization"],
  },
  {
    id: "cross-progression-account-linking-guide",
    title: "Cross-Progression Account Linking Guide",
    date: "2025-11-10",
    type: "guide",
    summary:
      "Explains how to link your Where Winds Meet accounts across Steam, Epic, the official PC launcher, and PlayStation so you can share progress. Highlights the rule that you must link before creating a new character on a fresh platform and clarifies how beta and preorder rewards are delivered.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/CrossPlatform.html",
    tags: ["Cross-progression", "Account", "Multi-platform"],
  },
  {
    id: "pc-launcher-installation-guide",
    title: "Where Winds Meet PC Launcher Installation Guide",
    date: "2025-11-03",
    type: "guide",
    summary:
      "Walks you through downloading and installing the official PC launcher, including recommended SSD installation, language restrictions for the install path, and detailed minimum, recommended, and high-spec PC and laptop requirements.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/InstallGuide.html",
    tags: ["PC", "Launcher", "System requirements"],
  },
  {
    id: "beta-access-download-guide",
    title: "Beta Access & Download Guide",
    date: "2025-07-23",
    type: "beta",
    summary:
      "Details how selected beta testers redeem their codes and download Where Winds Meet on Steam and PlayStation, with notes about installing on SSDs and platform-specific steps for finding and launching the game client.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/2025/installguide.html",
    tags: ["Closed beta", "Download", "Steam", "PS5"],
  },
  {
    id: "final-test-announcement",
    title: "Where Winds Meet – The Final Test",
    date: "2025-06-30",
    type: "beta",
    summary:
      "Announces The Final Test closed beta, including registration period, exact test dates and times, supported languages, platforms, and a concise FAQ covering selection, progress carry-over, input support, and PC hardware specifications.",
    officialUrl:
      "https://www.wherewindsmeetgame.com/news/official/2025/thefinaltestEN.html",
    tags: ["Final test", "Closed beta", "Registration"],
  },
];
