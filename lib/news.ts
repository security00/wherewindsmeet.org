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
    id: "live-to-game-1-2-overview",
    title: "[Live to Game] Version 1.2 Update Overview",
    date: "2026-01-08",
    type: "announcement",
    summary:
      "Version 1.2 arrives after maintenance on Jan 9 (UTC+8, 05:00–10:00) with Echo Jade ×50 compensation for eligible accounts registered before the update. Highlights include new areas such as Nine Mortal Ways Base and Mistveil Prison, new story chapters and encounters, Guild Battle preseason, multiple limited-time events, an appearance showcase, plus broad QoL improvements and performance/bug-fix optimizations (including Photo Mode and controller updates).",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/LivetoGame.html",
    tags: ["Version 1.2", "Maintenance", "New areas", "Guild Battle", "Events", "Optimizations"],
  },
  {
    id: "updates-game-installation-playstation-store",
    title: "Updates on Game Installation and PlayStation Store",
    date: "2025-12-12",
    type: "announcement",
    summary:
      "Notice for Closed Beta participants: uninstall the playtest client and reinstall the official release build. PlayStation Store purchases are platform-bound: Echo Beads and monthly pass value are only visible/usable on PlayStation Network, first-purchase Echo Jade bonus is one-time per account across platforms, and Battle Pass premium rewards/level-up claims depend on the platform where you purchased (with an Elite+Premium split allowing claims on both).",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/1212notice.html",
    tags: ["PlayStation", "Installation", "Top-up", "Battle Pass", "Cross-platform"],
  },
  {
    id: "timeless-bonds-1-1-overview",
    title: "[Timeless Bonds] Version 1.1 Update Overview (December 12)",
    date: "2025-12-11",
    type: "announcement",
    summary:
      "Version 1.1 lands December 11, 21:00 UTC with the Roaring Sands map in Kaifeng, new world boss Feng Ruzhi, the Velvet Shade sect, Taiping Mausoleum path trials, the Great Faceologist event, fresh appearances, and a long list of combat/UI fixes plus server/network optimizations.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/TimelessBonds.html",
    tags: ["Version 1.1", "Update overview", "New map", "Boss", "Events"],
  },
  {
    id: "mobile-launch-faq",
    title: "Mobile Launch FAQ",
    date: "2025-12-09",
    type: "guide",
    summary:
      "Confirms mobile supports cross-progression and cross-play but warns existing PC/console players must link accounts before creating a mobile character; initial mobile difficulty caps at Story/Recommended with Expert unlocked at Lv30, Legend via PC carries over, Assist Deflection is on by default, mobile key layouts are not yet customizable, and some cutscenes use video until optimization improves.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/MobileFAQ.html",
    tags: ["Mobile", "Cross-progression", "Difficulty", "Controls"],
  },
  {
    id: "closed-beta-lucky-draw",
    title: "Notice: Closed Beta Pre-Registration Lucky Draw Event",
    date: "2025-12-08",
    type: "event",
    summary:
      "Lucky Draw participants from the closed beta can now check rewards via the event page; submission/linking deadline extended to December 14 (UTC). Link the original event account to your current character so rewards can be delivered in batches after December 20. For accounts that cannot be linked, email wherewindsmeet@global.netease.com with your event email and reward proof.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/luckydraw.html",
    tags: ["Lucky Draw", "Closed beta", "Rewards"],
  },
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

export const latestNewsDate = newsItems.reduce(
  (latest, item) => (item.date > latest ? item.date : latest),
  "1970-01-01",
);
