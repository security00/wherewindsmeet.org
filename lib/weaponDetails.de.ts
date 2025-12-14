import type { WeaponDetail } from "./weaponDetails";
import type { WeaponId } from "./weapons";

export const weaponDetails: Record<WeaponId, WeaponDetail> = {
  "dual-blades": {
    slogan: "Kurzreichweiten-Burst, spielt direkt im Gesicht des Gegners.",
    difficulty: "Advanced",
    recommendedFor:
      "Spieler, die High-Risk-Melee mögen, Cancels/Timing üben und Ziele in einem Fenster löschen wollen.",
    positioning: [
      "Eher Exekutions-Waffe als gemütlicher Farmer: kurze Reichweite, aber schnelle Start-/Recovery und viele Cancel-/Movement-Fenster. Wer Öffnungen liest, packt viel Schaden in sehr kurze Zeit.",
      "PVE: ideal für Spieler, die Boss-Muster studieren und Flanken suchen. Warten, bis Aggro stabil ist, seitlich/hinten rein, Stagger/Break erzwingen, raus bevor die große Schwungphase kommt.",
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
      "Bosse mit klaren Telegraphen wählen, genau diese Animationen für 1 String punishen, dann Rückzug.",
      "Eine Minimal-Kombo bauen (wenige Kernangriffe + 1 Movement-Skill). Erst wenn die sitzt, weitere Skills ergänzen.",
      "Für den hypermobilen Stil (z. B. mit Rope Dart): Gegner herziehen, Dual Blades für eine saubere Kombo, dann disengagen.",
    ],
    videoFocusPoints: [
      "Achte beim Reingehen auf Abstand: kurz rein, sofort raus – nicht dauerhaft dran kleben.",
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
      "Eine einzige schwere Gegner-Attacke gezielt blocken, bis sie sitzt.",
      "Beim Farmen: eigene Regel „max 3 Hits pro Anlauf“ gegen Gier.",
      "Entspannter Stil: Wenn Ausdauer voll ist, schweren Schlag aufladen; bei leerer Ausdauer kurz auf Partnerwaffe/Mystic wechseln, dann zurück.",
    ],
    videoFocusPoints: [
      "Achte auf Pausen zwischen Strings – das ist das Entscheidungsfenster.",
      "Welche Skills haben Movement/Guard-Eigenschaften? Das sind Safety-Buttons.",
      "Bei mehreren Gegnern: Positionierung beobachten, um Umzingelung zu vermeiden.",
    ],
  },
  spear: {
    slogan: "Langwaffe, die Reichweite, Kontrolle und stabilen Frontline-Druck verbindet.",
    difficulty: "Moderate",
    recommendedFor:
      "Spieler, die gern aus sicherer Distanz Raum kontrollieren und kein Problem damit haben, das Tempo eines Kampfes mitzubestimmen.",
    positioning: [
      "Spear bietet eine bequeme Mitte: mehr Reichweite als das Schwert, ohne vollständig in reinen Fernkampf abzudriften. Starke Stöße und Sweeps erlauben es, am Rand von Packs zu arbeiten und Gegnern saubere Approaches zu verwehren.",
      "Im PVE funktioniert Spear gut als „stabile Frontline“-Option. Man muss nicht wie ein Tank jeden Treffer einstecken, kann Gefahr aber auf Armlänge halten, indem Spacing und Tempo kontrolliert werden. Für Spieler, die Boss-Verhalten noch lernen, fühlt sich Spear oft verzeihender an als reine Kurzreichweiten-Melee-Waffen.",
      "In kleinem PVP oder im Koop zieht Spear oft eine Linie: Die effektive Reichweite markiert eine Zone, die Gegner ungern überschreiten. Nicht immer Top-DPS, aber die Arena wird für alle hinter dir deutlich komfortabler.",
    ],
    pros: [
      "Reichweite erlaubt Trades, bevor viele Gegner überhaupt treffen können.",
      "Mix aus Sweeps und Stößen ist stark für Linienkontrolle und kleine Packs.",
      "Stabiler, gut lesbarer Rhythmus ohne extreme Reaktionsanforderungen.",
      "Ideal, um Raumkontrolle zu lernen – das transferiert gut auf andere Waffen.",
    ],
    cons: [
      "Die Reichweite verleitet dazu, zu weit hinten zu stehen und Druckfenster zu verpassen.",
      "Gegen sehr mobile Gegner braucht es trotzdem gutes Lesen/Prediction für wichtige Treffer.",
      "Top-Performance kommt durch Gegnerverständnis – nicht nur durch Range.",
    ],
    practiceTips: [
      "Beim Farmen bewusst am Rand der effektiven Reichweite kämpfen: ein Schritt rein, zwei Pokes, dann wieder zurückdriften. Das baut Spacing-Gefühl auf statt stationäre Gewohnheiten.",
      "Gegner mit klaren Gap-Closern wählen und das Abfangen mit Stößen oder Control-Skills trainieren; so sitzen Hitbox-Länge und Timing schneller.",
      "Eine gedachte Linie zwischen Team und Gegner ziehen und mit Movement + Attacks stabil halten, damit Gegner nicht einfach in die Backline kommen.",
      "Für einen Einstieg in die „Nine Swords Nine Spears“-Familie (Trad.-Chinesische Community-Guides), ohne ganze Rotationen zu lernen: kurzes Muster üben – Feuer/Element-Mystic setzen, eine Spear-Skill landen, die klar Blutung/Vulnerability aufbaut, dann kurz auf Sword wechseln und eine einzelne Detonations-Skill nutzen, danach resetten.",
    ],
    videoFocusPoints: [
      "Achte auf die durchschnittliche Distanz: Das ist ungefähr der Bereich, in dem du selbst stehen möchtest.",
      "Wann werden Sweeps genutzt vs. Stöße? Sweeps für Flanken/kleine Gruppen, Stöße für Interrupts oder fokussierte Ziele.",
      "Recovery-Zeiten nach Attacks beachten, um Zeit für Dodges/Guards sauber einzuplanen.",
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
      "Gruppe/PVP: wirkt wie eine Droh-Aura. Schon die Möglichkeit eines präzisen Hiebs erzwingt Respekt; psychologischer Druck ist ebenfalls Kontrolle.",
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
      "Nur in klaren Boss-Recoveries angreifen, Rest: bewegen/defenden – verinnerlichen, dass Mo Blade nicht dauernd schwingen muss.",
      "Geladene Basisangriffe auf verschiedene Gegnertypen nutzen, um Delay zwischen Input/Impact zu fühlen; Vorhaltezeit anpassen.",
      "Runs mit möglichst wenigen Schlägen üben: Fokus auf Korrektheit statt Roh-DPS.",
      "„Wheelchair“-Stil: Regeneration erneuern → Schild hoch → ein geladener Schlag → zurücksetzen; Gier vermeiden.",
    ],
    videoFocusPoints: [
      "Körperhaltung/FX beim Aufladen anschauen, Zeit von Anheben bis Treffer mitzählen.",
      "Kleine Sidesteps nutzen: Gegner in den eigenen Schwung laufen lassen statt hinterherjagen.",
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
      "Üb dich darin, leicht hinter/seitlich der Front zu stehen, damit du Front und Bedrohungen gleichzeitig im Blick hast.",
      "Kleines Ziel pro Run: ein Support-Tool sinnvoll einsetzen (z. B. Low-HP retten oder Zeit kaufen).",
      "Ein paar Fights mit reduzierter Damage-Rotation spielen, Fokus auf Ally/Enemy-Positionen → Awareness-Training.",
      "Als „Fan Main“: eine durchgehende Wand aus Fan-Skills zwischen dir und Gegnern halten; erst näher heran, wenn Control-CDs bereit sind.",
    ],
    videoFocusPoints: [
      "Achte auf Flächen/Duration der Fan-Skills: Wie viele Verbündete könntest du realistisch abdecken?",
      "Wie bleibt man bei Dives/AoEs sicher? Dein Überleben bestimmt den Support.",
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
      "PVE: ideal für Pattern-Lerner. Gute Parry/Guard-Timings erlauben „stehen bleiben“ statt Dauerausweichen – spart Zeit und sieht stilvoll aus.",
      "PVP/Skirmish: mischt Ausweichmovement mit kurzen Schutzfenstern, stört Gegner-Timing; Fehlschläge erzeugen schnelle Punish-Chancen.",
    ],
    pros: [
      "Starke Defensive; High-Skill kann viele Bedrohungen neutralisieren.",
      "Mobility + Guard schafft Comeback-Potenzial in engen Fights.",
      "Elegante Duell-Ästhetik.",
      "Mit Musterkenntnis werden Trash/Chip-Schaden deutlich weniger nervig.",
    ],
    cons: [
      "Hohe Lernkurve; falsches Block-/Konter-Timing = voller Treffer.",
      "Weniger mobil als Leichtwaffen, verlangt bewusstere Positionierung.",
      "Fühlt sich in reaktiven Mechaniken träge, bis der Rhythmus sitzt.",
      "Bei Timing-Schwäche wirkt es, als würde man ständig unterbrochen.",
    ],
    practiceTips: [
      "Eine einzige schwere Attacke blocken/parieren üben, bis sie sitzt – Vertrauen in die Defense ist der Schlüssel.",
      "Low-Pressure-Content: Fokus „Block/Deflect → Sofort-Punish“, keine langen Strings.",
      "Spacing-Drill: einen halben Schritt näher als bequem, blocken, kontern – Guard-Reichweiten lernen.",
      "Regen-Loop: Regeneration erneuern → Guard halten → einzelner Punish → Reset, nicht überziehen.",
    ],
    videoFocusPoints: [
      "Wie oft bleiben Spieler stehen und blocken statt zu rollen? Das zeigt, wann Umbrella-Defense besser ist.",
      "Parry-Timing: zu früh = Treffer, zu spät = Fenster weg – Rhythmus kopieren.",
      "Zwischen Blocks: kurze Sidesteps, Gegner vor sich halten statt wegrollen.",
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
      "Eine vollständig getroffene Sequenz fühlt sich extrem befriedigend an – wie ein sauberer Jagdmoment.",
    ],
    cons: [
      "Hohe Ausführungshürde; Fehl-Pulls/Gaps können dich in Gefahr bringen.",
      "Stark abhängig vom Verständnis gegnerischer Bewegungen; anfangs inkonsistent.",
      "Braucht kooperatives Team oder geballte Gegner, sonst wirkt es schwächer.",
      "Sehr timing-/spacing-sensitiv, daher anfällig für Latenz/FPS-Einbrüche.",
    ],
    practiceTips: [
      "Pull/Dash rein üben und sofort Seiten- oder Rückschritt – Rope Dart als Positionierungs-Tool, nicht als Einbahnstraße nach vorn.",
      "Zuerst nur das Unterbrechen/Abfangen klarer Sprünge/Rushes bestimmter Gegner trainieren, bevor komplette Kombos geübt werden.",
      "An komplexem Terrain testen; Höhen/Winkel geben Gefühl für Reichweite/Flugbahn.",
      "Hunter-Handoff: Ziel pullen → ins Team oder Dual-Blades-Setup → nicht tunneln, stattdessen repositionieren.",
    ],
    videoFocusPoints: [
      "Enddistanz nach jedem Rope-Hit: entscheidet über Anschluss oder Rückzug.",
      "Start-/Travel-Time der Rope-Skills: vor/während/nach Gegnerbewegung nutzen für bessere Treffer.",
      "Map-Kanten, Hänge und Höhen nutzen, um unerwartete Winkel zu schaffen.",
    ],
  },
};
