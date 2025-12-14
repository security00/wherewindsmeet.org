import type { NewsItem } from "./news";

// German-localized summaries of official Where Winds Meet news.
// Source links are kept identical to the English list for parity.
export const newsItems: NewsItem[] = [
  {
    id: "updates-game-installation-playstation-store",
    title: "Update zu Installation & PlayStation Store",
    date: "2025-12-12",
    type: "announcement",
    summary:
      "Hinweis für Closed-Beta-Spieler: Bitte den Playtest-Client deinstallieren und die offizielle Release-Version neu installieren. PlayStation-Store-Käufe sind plattformgebunden: Echo Beads und der Monats-Pass sind nur auf PSN sichtbar/nutzbar; der Erstkauf-Bonus für Echo Jade ist pro Account plattformübergreifend nur einmal verfügbar; Battle-Pass-Premium-Belohnungen und Level-Claims richten sich nach der Plattform, auf der der Kauf erfolgte (Elite+Premium erlaubt Claims auf beiden).",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/1212notice.html",
    tags: ["PlayStation", "Installation", "Aufladen", "Battle Pass", "Plattformübergreifend"],
  },
  {
    id: "timeless-bonds-1-1-overview",
    title: "[Timeless Bonds] Version 1.1 – Update-Übersicht (12. Dez.)",
    date: "2025-12-11",
    type: "announcement",
    summary:
      "Version 1.1 startet am 11. Dezember um 21:00 UTC: neue Karte Roaring Sands (Kaifeng), neuer World Boss Feng Ruzhi, die Sekte Velvet Shade, Taiping Mausoleum Path Trials, das Event The Great Faceologist, neue Outfits sowie eine lange Liste an Combat-/UI-Fixes und Server-/Netzwerk-Optimierungen.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/TimelessBonds.html",
    tags: ["Version 1.1", "Update-Übersicht", "Neue Karte", "World Boss", "Events"],
  },
  {
    id: "mobile-launch-faq",
    title: "Mobile-Launch FAQ",
    date: "2025-12-09",
    type: "guide",
    summary:
      "Bestätigt Cross-Progression und Cross-Play auf Mobile, warnt aber: Bestehende PC-/Konsolen-Spieler sollten den Account verknüpfen, bevor sie auf Mobile einen neuen Charakter erstellen. Mobile startet zunächst mit Story/Recommended; Expert wird ab Level 30 freigeschaltet (Legend vom PC wird übernommen). Assist Deflection ist standardmäßig aktiv, Tastenlayouts sind noch nicht frei konfigurierbar, und einige Cutscenes laufen bis zur weiteren Optimierung als Video.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/MobileFAQ.html",
    tags: ["Mobile", "Cross-Progression", "Schwierigkeit", "Steuerung"],
  },
  {
    id: "closed-beta-lucky-draw",
    title: "Hinweis: Closed-Beta Vorregistrierungs-Lucky-Draw",
    date: "2025-12-08",
    type: "event",
    summary:
      "Teilnehmer des Closed-Beta Lucky Draw können die Belohnungen jetzt über die Event-Seite prüfen; Deadline für Einreichung/Verknüpfung wurde bis 14. Dezember (UTC) verlängert. Verknüpfe den ursprünglichen Event-Account mit deinem aktuellen Charakter, damit Rewards nach dem 20. Dezember in Wellen zugestellt werden. Wenn Accounts nicht verknüpft werden können: E-Mail an wherewindsmeet@global.netease.com mit Event-Mailadresse und Belohnungsnachweis.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/luckydraw.html",
    tags: ["Lucky Draw", "Closed Beta", "Belohnungen"],
  },
  {
    id: "account-suspension-dec-2025",
    title: "Sperrungen wegen Verstößen (Ban Report)",
    date: "2025-12-06",
    type: "announcement",
    summary:
      "Anti-Cheat-Update: Eastwind Pavilion meldet rund 5.000 gebannte Accounts (15. Nov. – 5. Dez.) wegen Cheats, Speed-Hacks, Makros und anderen unfairen Tools. Sanktionen umfassen Leaderboard-Entfernung, Modus-Einschränkungen sowie temporäre oder permanente Sperren. Spieler sollen Verstöße melden und sich bei Fragen an den Support wenden.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/BanReport.html",
    tags: ["Anti-Cheat", "Ban Report", "Fair Play"],
  },
  {
    id: "hearts-unite-post-launch-letter",
    title: "Hearts Unite as the Winds Meet – Brief nach Launch",
    date: "2025-11-23",
    type: "announcement",
    summary:
      "Dev-Letter nach Launch: Fixes für Routing und Online-Latenz, kurzfristige Verbesserungen an Lokalisierung, Voiceover, Tutorials und Puzzle-Hinweisen sowie Solo-Latenz-Fixes Mitte Dezember. Außerdem: PS5-Performance-Arbeit, Lösungen für Multi-Charakter, und kommende Updates wie Steam-Deck-Support, Multi-Zeitzonen-Anzeige, Outfit-Splits, PS5 Pro PSSR und Audio-Upgrades.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/official/251123.html",
    tags: ["Stabilität", "Lokalisierung", "PS5", "Steam Deck"],
  },
  {
    id: "global-launch-event-rewards",
    title: "Wind's Welcome Gifts – Launch-Events & Belohnungen",
    date: "2025-11-14",
    type: "event",
    summary:
      "Übersicht der Global-Launch-Events und Reward-Tracks: mehrstufige Login-Boni, Aktivitäts-Missionen und besondere Cosmetics, die du dir einfach durchs Spielen im Launch-Zeitfenster sichern kannst.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/LaunchGifts.html",
    tags: ["Global Launch", "Events", "Belohnungen"],
  },
  {
    id: "global-launch-redefine-everything",
    title: "Redefine Everything – Global Launch",
    date: "2025-11-14",
    type: "announcement",
    summary:
      "Die 1.0-Launch-Botschaft der Entwickler: Vision für Wuxia, Umfang der Open World, Combat-Philosophie hinter jeder Waffe – plus das klare Versprechen, Monetarisierung kosmetikfokussiert zu halten und Pay-to-win zu vermeiden.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/SeversLive.html",
    tags: ["Global Launch", "Dev-Letter", "Monetarisierung"],
  },
  {
    id: "cross-progression-account-linking-guide",
    title: "Cross-Progression: Account verknüpfen (Guide)",
    date: "2025-11-10",
    type: "guide",
    summary:
      "Erklärt, wie du Where-Winds-Meet-Accounts über Steam, Epic, den offiziellen PC-Launcher und PlayStation verknüpfst, damit Fortschritt geteilt werden kann. Wichtig: Verknüpfen, bevor du auf einer neuen Plattform einen frischen Charakter erstellst. Zudem wird erklärt, wie Beta- und Vorbesteller-Rewards zugestellt werden.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/CrossPlatform.html",
    tags: ["Cross-Progression", "Account", "Multi-Plattform"],
  },
  {
    id: "pc-launcher-installation-guide",
    title: "PC-Launcher installieren (Guide)",
    date: "2025-11-03",
    type: "guide",
    summary:
      "Schritt-für-Schritt zur Installation des offiziellen PC-Launchers: Download, SSD-Empfehlung, Sprach-/Pfad-Hinweise beim Installationsverzeichnis sowie minimale, empfohlene und High-Spec-Systemanforderungen für PCs und Laptops.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/GlobalLaunch/InstallGuide.html",
    tags: ["PC", "Launcher", "Systemanforderungen"],
  },
  {
    id: "beta-access-download-guide",
    title: "Beta-Zugang & Download (Guide)",
    date: "2025-07-23",
    type: "beta",
    summary:
      "Details, wie ausgewählte Beta-Tester ihre Codes einlösen und Where Winds Meet auf Steam und PlayStation herunterladen. Enthält Hinweise zur SSD-Installation und plattformspezifische Schritte zum Finden und Starten des Clients.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/2025/installguide.html",
    tags: ["Closed Beta", "Download", "Steam", "PS5"],
  },
  {
    id: "final-test-announcement",
    title: "Where Winds Meet – The Final Test (Ankündigung)",
    date: "2025-06-30",
    type: "beta",
    summary:
      "Ankündigung der Closed-Beta „The Final Test“: Registrierungszeitraum, genaue Testzeiten, unterstützte Sprachen und Plattformen sowie ein kurzes FAQ zu Auswahl, Progress-Übernahme, Input-Support und PC-Hardware-Spezifikationen.",
    officialUrl: "https://www.wherewindsmeetgame.com/news/official/2025/thefinaltestEN.html",
    tags: ["Final Test", "Closed Beta", "Registrierung"],
  },
];

export const latestNewsDate = newsItems.reduce(
  (latest, item) => (item.date > latest ? item.date : latest),
  "1970-01-01",
);

