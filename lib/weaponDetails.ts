import type { WeaponId } from "./weapons";

export type WeaponDetail = {
  slogan: string;
  difficulty: "Easy" | "Moderate" | "Advanced";
  recommendedFor: string;
  positioning: string[];
  pros: string[];
  cons: string[];
  practiceTips: string[];
  videoFocusPoints: string[];
};

export const weaponDetails: Record<WeaponId, WeaponDetail> = {
  "dual-blades": {
    slogan: "Kurzreichweiten-Burst, spielt direkt im Gesicht des Gegners.",
    difficulty: "Advanced",
    recommendedFor:
      "Spieler, die High-Risk-Melee mögen, Cancels/Timing üben und Ziele in einem Fenster löschen wollen.",
    positioning: [
      "Eher Exekutions-Waffe als gemütlicher Farmer: kurze Reichweite, aber schnelle Start-/Recovery und viele Cancel-/Movement-Fenster. Wer Öffnungen liest, packt viel Schaden in sehr kurze Zeit.",
      "PVE: ideal für Spieler, die Boss-Muster studieren und Flanken suchen. Warte, bis Aggro stabil ist, spring seitlich/hinten rein, erzwinge Stagger/Break, geh raus bevor die große Schwungphase kommt.",
      "PVP/kleine Duelle: spielt wie ein Assassine. Erst Verteidigungs-Tools des Gegners ziehen, dann voll committen. Verstärkt Stärken und Fehler gleichermaßen – für Spieler, die Ausführung pushen wollen.",
    ],
    pros: [
      "Sehr schneller Komborhythmus, hoher Burst in kurzen Fenstern.",
      "Gute Mobilität; Dash/Cancel erleichtern Rein/Raus.",
      "Bestraft Fehler exzellent, wenn Muster verstanden sind.",
      "Starker Impact, liefert oft „Highlight“-Momente.",
    ],
    cons: [
      "Kurze Reichweite: Positionsfehler werden schnell bestraft.",
      "Hohe Anforderungen an Rhythmus/Cancel-Timing; Gier wird bestraft.",
      "Braucht Übung über viele Bosse; nicht ideal für entspannte Sessions.",
      "Latenz-/FPS-empfindlicher als langsamere Langreichweiten-Waffen.",
    ],
    practiceTips: [
      "Trainingsmuster: Dash rein → 1 kurze Kombo → sofort raus. Keine zweite Kombo; Ziel ist „ein Durchgang, dann weg“.",
      "Wähle Bosse mit klaren Telegraphen, punish genau diese Animationen für 1 String, dann Rückzug.",
      "Baue eine Minimal-Kombo (wenige Kernangriffe + 1 Movement-Skill). Erst wenn die sitzt, weitere Skills ergänzen.",
      "Für den hypermobilen Stil (z. B. mit Rope Dart): Gegner herziehen, Dual Blades für eine saubere Kombo, dann disengage.",
    ],
    videoFocusPoints: [
      "Achte auf Distanz beim Reingehen: kurz rein, sofort raus – nicht dauerhaft kleben.",
      "Welche Moves eröffnen? Gerade Dashes, Seitenschritte in Back-Attacks etc. → Inspiration für eigene Openings.",
      "Wie reagiert der Spieler auf AoEs? Rausgehen, durchrollen oder resetten? Das entscheidet, ob es nur stylish oder auch praktisch ist.",
    ],
  },
  sword: {
    slogan: "Stabiles, ausgewogenes Schwert – perfekter Ersteinstieg.",
    difficulty: "Easy",
    recommendedFor:
      "Spieler, die erst Systeme lernen, extreme Vor-/Nachteile vermeiden und ein klassisches Schwert-Fantasy mögen.",
    positioning: [
      "Default-Antwort: nirgends absolut top, aber fast nie schlecht. Mittlere Reichweite, lesbarer Rhythmus, intuitive Defense – ideal als erste Main-Waffe.",
      "PVE: deckt Story, Trash, Dungeons solide ab. Gute Waffe, um Dodge-Fenster, Posture-Breaks und Aggro-Fluss zu lernen.",
      "Auch später verlässlicher Rückhalt: neue Bosse/Mechaniken oft leichter mit einem wartungsarmen Schwert zu lernen als mit High-Risk-Optionen.",
    ],
    pros: [
      "Ausgewogen, niedrige Einstiegshürde.",
      "Skills meist geradlinig, wenig Zielwinkel-/Prediction-Aufwand.",
      "Fehlerverzeihend; kleine Patzer brechen selten alles.",
      "„Überall gut genug“, erleichtert Build-/Rollenwechsel.",
    ],
    cons: [
      "Wer extreme Burst/Tankiness sucht, vermisst klare Spitze.",
      "Skill-Ceiling hängt mehr am Spieler-Verständnis als an Waffentricks.",
      "Auf reinen DPS-Charts nicht immer ganz oben, auch wenn es sich stark spielt.",
    ],
    practiceTips: [
      "Loop: Opener zum Posture-Break → kurze Kombo → lieber Dodge/Guard halten als gierig verlängern.",
      "Übe eine einzige schwere Gegner-Attacke gezielt zu blocken, bis sie sitzt.",
      "Beim Farmen: eigene Regel „max 3 Hits pro Anlauf“ gegen Gier.",
      "Entspannter Stil: Wenn Ausdauer voll ist, schweren Schlag aufladen; bei leerer Ausdauer kurz auf Partnerwaffe/Mystic wechseln, dann zurück.",
    ],
    videoFocusPoints: [
      "Achte auf Pausen zwischen Strings – das ist dein Entscheidungsfenster.",
      "Welche Skills haben Movement/Guard-Eigenschaften? Das sind Safety-Buttons.",
      "Bei mehreren Gegnern: Positionierung beobachten, um Umzingelung zu vermeiden.",
    ],
  },
  spear: {
    slogan: "Long weapon that balances reach, control, and steady frontline pressure.",
    difficulty: "Moderate",
    recommendedFor:
      "Players who like controlling space from a safe distance and do not mind being responsible for the pace of a fight.",
    positioning: [
      "Spear offers a comfortable middle ground: longer reach than swords without fully stepping into pure ranged territory. Strong thrusts and sweeps let you work from the edge of packs while denying enemies clean approaches.",
      "In PVE it works well as a “steady frontline” tool. You do not need to soak every hit like a dedicated tank, but you can keep danger at arm’s length by combining spacing and tempo control. For players still learning boss behavior, Spear tends to feel more forgiving than short‑range pure melee options.",
      "In small‑scale PVP or co‑op, Spear often acts as a line‑drawer: your effective range marks a zone enemies hesitate to cross. You may not top every damage chart, but you can make the battlefield much more comfortable for everyone behind you.",
    ],
    pros: [
      "Strong reach lets you begin trading before most enemies can touch you.",
      "Combination of sweeps and thrusts is good for line control and small packs.",
      "Stable, readable rhythm that does not demand extreme reactions.",
      "Great for learning spatial control, which transfers well to other weapons later.",
    ],
    cons: [
      "Its long range can encourage standing too far back, missing windows for stronger pressure.",
      "Against very mobile enemies, you still need solid prediction to land key hits.",
      "Reaching top performance still requires understanding enemy moves, not just relying on range.",
    ],
    practiceTips: [
      "During farming, deliberately fight at the edge of your effective range: step in, poke twice, then drift back. This builds comfort with ideal spacing instead of stationary habits.",
      "Pick enemies with obvious gap‑closers and practice intercepting them with thrusts or control skills; this trains your sense of hitbox length and timing.",
      "Imagine a line between your team and the enemy and use your movement plus attacks to keep that line stable, preventing enemies from easily reaching the backline.",
      "To sample the more advanced “Nine Swords Nine Spears” family from Traditional Chinese guides without memorizing full rotations, practice a short pattern: apply a fire or elemental mystic art, land one spear skill that clearly inflicts bleed or vulnerability, then swap to sword for a single detonation skill before resetting.",
    ],
    videoFocusPoints: [
      "Observe the average distance the player keeps from enemies: this is roughly where you want to stand in your own runs.",
      "Note when sweeps are used versus straight thrusts—sweeps for flanks or small groups, thrusts for interrupts or focused targets.",
      "Watch how long recovery is after each attack so you can mentally budget time for dodges or guards.",
    ],
  },
  "mo-blade": {
    slogan: "Langsam im Anlauf, schwer im Treffer.",
    difficulty: "Moderate",
    recommendedFor:
      "Spieler, die geduldig spielen, Animationen lesen und lieber wenige, entscheidende Treffer als Dauer-Buttonspam setzen.",
    positioning: [
      "Klassische Heavy-Waffe: langsamer Start, jeder Schlag zählt. Belohnt wenige, hochwertige Treffer statt Dauerhauen.",
      "PVE: für Front- oder Nähe-Front-Spieler, die kein Höchsttempo wollen. Große Bossmoves lesen, in deren Recovery treten und große Schadenspakete setzen, gestützt von Zähigkeit/Präsenz.",
      "Gruppe/PVP: wirkt wie eine Droh-Aura. Schon die Möglichkeit eines präzisen Hiebs zwingt Respekt; psychologischer Druck ist ebenfalls Kontrolle.",
    ],
    pros: [
      "Hoher Impact pro Hit, „jeder Schlag zählt“-Gefühl.",
      "Belohnt gutes Lesen/Bestrafen von Gegneraktionen.",
      "Starke Präsenz an der Front, kontrolliert Packs.",
      "Langsamer Input-Rhythmus, handfreundlicher als Spam.",
    ],
    cons: [
      "Langsamer Start; falsches Timing → leicht unterbrochen/whiff.",
      "Weniger mobil, verlangt überlegte Positionierung.",
      "Wirkt träge in reaktiven Mechaniken, bis der Fight sitzt.",
      "Bei Timing-Schwäche fühlt es sich an, als würde man ständig unterbrochen oder ins Leere schlagen.",
    ],
    practiceTips: [
      "Nur in klaren Boss-Recoveries angreifen, Rest: bewegen/defenden – verinnerliche, dass Mo Blade nicht dauernd schwingen muss.",
      "Geladene Basisangriffe auf verschiedene Gegnertypen nutzen, um Delay zwischen Input/Impact zu fühlen; passe Vorhaltezeit an.",
      "Übe Runs mit möglichst wenigen Schlägen: Fokus Korrektheit statt Roh-DPS.",
      "„Wheelchair“-Stil: Regeneration erneuern → Schild hoch → ein geladener Schlag → zurücksetzen; Gier vermeiden.",
    ],
    videoFocusPoints: [
      "Körperhaltung/FX beim Aufladen anschauen, Zeit von Anheben bis Treffer mitzählen.",
      "Kleine Sidesteps nutzen: Gegner in deinen Schwung laufen lassen statt hinterherjagen.",
      "Recovery-Zeit der Gegner nach Treffer beobachten → entscheidet, ob zweiter Schlag sicher ist.",
    ],
  },
  fan: {
    slogan: "Elegante Waffe, mischt Fern-Druck mit Support-Tools.",
    difficulty: "Moderate",
    recommendedFor:
      "Spieler, die gern sicher stehen, den Kampffluss steuern und nebenbei unterstützen.",
    positioning: [
      "Projiziert innere Energie nach außen: Fern-Druck + Support (Heil/Schilde/Slows).",
      "PVE: Rhythmus-Glätter fürs Team; nicht immer Top-DPS, aber erhöht Fehlertoleranz. Passt zu Spielern, die ruhigeres Tempo und Übersicht mögen.",
      "PVP/kleine Kämpfe: stark positions- und timingabhängig; sucht gute Sichtlinien und Auswege, setzt Soft-Control/Support ein, um Trades zu kippen.",
    ],
    pros: [
      "Angenehme Reichweite, hält Melee-Druck fern.",
      "Heil-/Support-Werkzeuge steigern Gruppen-Survivability spürbar.",
      "Ruhigeres Tempo als Voll-Melee, mehr Kopf frei für Awareness.",
      "Elegante Optik für „Cultivator/Support/Duelist“-Fantasy.",
    ],
    cons: [
      "Burst meist niedriger als reine DPS-Waffen → Kills dauern länger.",
      "Zu vorsichtiges Spiel lässt Solo-Content träge wirken.",
      "Braucht Übersicht über Verbündete, sonst verpufft Support.",
      "In extremen Fights kann es frustrierend sein, nicht alles „healen zu können“. ",
    ],
    practiceTips: [
      "Übe, leicht hinter/seitlich der Front zu stehen, damit du Front + Bedrohungen siehst.",
      "Kleines Ziel pro Run: ein Support-Tool sinnvoll einsetzen (z. B. Low-HP retten oder Zeit kaufen).",
      "Spiele ein paar Fights mit reduzierter Damage-Rotation, Fokus auf Ally/Enemy-Positionen → Awareness-Training.",
      "„Fan main“-Stil: halte eine durchgehende Wand aus Fan-Skills zwischen dir und Gegnern, näher erst heran, wenn Control-CDs bereit sind.",
    ],
    videoFocusPoints: [
      "Achte auf Flächen/Duration der Fan-Skills: wie viele Allies könntest du realistisch abdecken?",
      "Wie bleibt der Spieler sicher bei Dives/AoEs? Dein Überleben bestimmt deinen Support.",
      "Ist das Schadensmuster eher konstant oder burstig? Danach Build-Wahl ausrichten.",
    ],
  },
  umbrella: {
    slogan: "Wendige Schirmwaffe, die Defense/Movement in Offense wandelt.",
    difficulty: "Advanced",
    recommendedFor:
      "Spieler, die Angriffe lesen, Konter timen und den Kampfrhythmus selbst setzen wollen.",
    positioning: [
      "Filigran im Look, aber klar auf Defensive+Konter gebaut: blocken/parieren/umlenken und sofort in starke Offense drehen.",
      "PVE: ideal für Pattern-Lerner. Gute Parry/Guard-Timings erlauben \"stehen bleiben\" statt Dauerausweichen – spart Zeit und sieht stilvoll aus.",
      "PVP/Skirmish: mischt Ausweichmovement mit kurzen Schutzfenstern, stört Gegner-Timing; whiffs erzeugen schnelle Punish-Chancen.",
    ],
    pros: [
      "Starke Defensive; High-Skill kann viele Bedrohungen neutralisieren.",
      "Mobility + Guard schafft Comeback-Potenzial in engen Fights.",
      "Elegante Duell-Ästhetik.",
      "Mit Musterkenntnis werden Trash/Chip-Schaden deutlich weniger nervig.",
    ],
    cons: [
      "Hohe Lernkurve; falsches Block/Konter-Timing = voller Treffer.",
      "Weniger mobil als Leichtwaffen, verlangt bewusstere Positionierung.",
      "Fühlt sich in reaktiven Mechaniken träge, bis Rhythmus sitzt.",
      "Bei Timing-Schwäche wirkt es, als würde man ständig unterbrochen.",
    ],
    practiceTips: [
      "Übe eine einzige schwere Attacke zu blocken/parieren, bis sie sitzt – Vertrauen in die Defense ist Schlüssel.",
      "Low-Pressure-Content: Fokus \"block/deflect → Sofort-Punish\", keine langen Strings.",
      "Spacing-Drill: halben Schritt näher als bequem, blocken, kontern – lerne Guard-Reichweiten.",
      "Regen-Loop: Regeneration erneuern → Guard halten → einzelner Punish → Reset, nicht überziehen.",
    ],
    videoFocusPoints: [
      "Wie oft bleiben Spieler stehen und blocken statt rollen? Zeigt, wann Umbrella-Defense besser ist.",
      "Parry-Timing: zu früh = Treffer, zu spät = Fenster weg – Rhythmus kopieren.",
      "Zwischen Blocks: kurze Sidesteps, Gegner vor dir halten statt wegrollen.",
    ],
  },
  "rope-dart": {
    slogan: "Hochmobile Control-Waffe, die Positionierungsfehler in Chancen verwandelt.",
    difficulty: "Advanced",
    recommendedFor:
      "Spieler, die Movement vorhersagen, Terrain/Distanz kreativ nutzen und Feintuning mögen.",
    positioning: [
      "Hybrid aus Grappling-Line und Execution-Hook: stören, unterbrechen, repositionieren aus Mid-Range oder plötzlich closen/disengagen.",
      "PVE: nicht für stationären Output gedacht. Ständiges Bewegen, gefährliche Ziele aus Packs ziehen, in sicheren Raum verlagern und dort die Kombo abschließen. Sehr mobile Bosse lassen sich so handeln, wo statische Waffen kämpfen.",
      "PVP/Koop: erzeugt Chancen. Bestraft Positionierungsfehler mit Pulls/Forced Movement und wirft Gegner in Team-Damage-Zonen. Auch ohne Top-DPS fühlt man sich oft als derjenige, der den Gegnern das Leben schwer macht.",
    ],
    pros: [
      "Vielseitige Movement-/Control-Tools zum ständigen Reset der Distanz.",
      "Stark im Bestrafen von Fehlern und Repositionieren der Kämpfe.",
      "Hohe kreative Decke für Terrain- und Map-affine Spieler.",
      "Voll getroffene Sequenz fühlt sich extrem befriedigend und „predatory“ an.",
    ],
    cons: [
      "Hohe Ausführungs-Hürde; Fehl-Pulls/Gaps können dich ins Risiko werfen.",
      "Stark abhängig vom Verständnis gegnerischer Bewegungen; anfangs inkonsistent.",
      "Braucht kooperatives Team oder geballte Gegner, sonst wirkt es schwächer.",
      "Sehr timing/spacing-sensitiv, daher anfällig für Latenz/FPS-Einbrüche.",
    ],
    practiceTips: [
      "Übe Pull/Dash rein und sofort Seiten- oder Rückschritt – Rope Dart als Positionierungs-Tool, nicht Einbahnstraße nach vorn.",
      "Trainiere nur das Unterbrechen/Abfangen klarer Sprünge/Rushes bestimmter Gegner, bevor du komplette Kombos versuchst.",
      "Teste an komplexem Terrain; Höhen/Winkel geben Gefühl für Reichweite/Flugbahn.",
      "Hunter-Handoff: Ziel pullen → ins Team oder Dual-Blades-Setup → aufhören zu tunneln, stattdessen repositionieren.",
    ],
    videoFocusPoints: [
      "Enddistanz nach jedem Rope-Hit: entscheidet, ob Follow-up oder Disengage.",
      "Start-/Travel-Time der Rope-Skills: vor/während/nach Gegnerbewegung nutzen für bessere Treffer.",
      "Map-Kanten, Hänge, Höhen nutzen, um unerwartete Winkel zu schaffen.",
    ],
  },
};
