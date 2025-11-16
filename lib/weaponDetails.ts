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
    slogan: "Short‑range burst weapon that lives in your opponent’s face.",
    difficulty: "Advanced",
    recommendedFor:
      "Players who enjoy high‑risk melee, practicing cancels and timing windows, and deleting targets in a single opening.",
    positioning: [
      "Dual Blades behaves more like an execution tool than a relaxed farming weapon. The range is short, but start‑up and recovery are quick and there are plenty of cancel and movement windows. If you can read openings, you can compress a surprising amount of damage into very short moments.",
      "In PVE it suits players who study enemy patterns and like circling bosses for flanks. You rarely plant yourself on the very front line; instead you wait for a tank or co‑op partner to stabilize aggro, then slip in from the side or back, force stagger or breaks, and get out before big swings land.",
      "In PVP or small‑scale duels it naturally leans into an assassin role. You use movement and harassment to burn your opponent’s defensive tools, then commit fully when they misstep. This playstyle amplifies both your strengths and mistakes, so it is best for players who enjoy pushing execution limits rather than playing safe.",
    ],
    pros: [
      "Very fast combo rhythm, allowing high burst during small openings.",
      "Good mobility; dash and cancel options make it easy to dip in and out of danger.",
      "Excellent at punishing mistakes once you understand boss patterns or opponent habits.",
      "Impact and visuals feel rewarding, often producing satisfying “highlight” moments.",
    ],
    cons: [
      "Short range means positional mistakes are punished quickly by area attacks.",
      "Relatively high demand on rhythm and cancel timing; greedy strings are often punished.",
      "Takes practice to perform consistently across different bosses, so it is not ideal for laid‑back sessions.",
      "More sensitive to latency and frame drops than slower, longer‑range weapons.",
    ],
    practiceTips: [
      "In a training area or low‑pressure content, practice a fixed pattern: dash in → perform one short combo → immediately reposition out. Do not go for a second combo; the goal is to build “one pass, then leave” muscle memory.",
      "Pick a few bosses with exaggerated, clearly telegraphed moves and only focus on punishing those. Whenever you see the tell, get in for one clean string and then retreat. Over time your brain will map “this animation = free opening.”",
      "Try to create a comfortable “minimal button” combo using just a couple of core attacks plus one movement tool. Once that feels natural, slowly add more skills instead of chasing a perfect, complicated rotation on day one.",
    ],
    videoFocusPoints: [
      "Watch how far the player stands when they commit: Dual Blades is at its best when it dips in briefly and then leaves, not when it hugs the boss forever.",
      "Notice which moves are used to start engagements—straight dashes, side steps into back attacks, or something else. Those patterns can inspire your own openers.",
      "Pay attention to how the player reacts to big boss area attacks: do they step out, roll through, or reset entirely? These choices define whether Dual Blades feels stylish and practical or just stylish.",
    ],
  },
  sword: {
    slogan: "Stable, balanced sword that makes a great first main weapon.",
    difficulty: "Easy",
    recommendedFor:
      "Players who want to learn the game systems first, avoid extreme pros and cons, and enjoy a classic swordsman fantasy.",
    positioning: [
      "Sword acts as the “default answer” in the arsenal. It may not be the absolute best at any single thing, but it rarely feels bad at anything either. Medium range, readable combo rhythm, and intuitive defensive tools make it an ideal first main weapon.",
      "In PVE it covers most everyday situations: story progression, trash clearing, and dungeon follow‑up damage. You can learn dodge windows, posture breaks, and threat flow without wrestling with extreme range or speed requirements from the start.",
      "Later on, even after you unlock more specialized weapons, Sword remains a reliable fallback. When facing a new boss or unfamiliar mechanic, it is often easier to learn the fight with a low‑maintenance sword than with a high‑risk, high‑reward pick.",
    ],
    pros: [
      "Balanced offense and defense, very low barrier to entry for new players.",
      "Most skills are straightforward, with minimal angle or prediction requirements.",
      "Reasonable forgiveness: small mistakes usually do not cause instant collapse.",
      "A “good enough everywhere” option that makes swapping builds or roles less stressful.",
    ],
    cons: [
      "Its balanced kit means players chasing extreme burst or extreme tankiness may feel it lacks sharp identity.",
      "At very high play levels, Sword’s ceiling depends more on player understanding than on flashy weapon quirks.",
      "On pure theory DPS charts it may not sit in the very top slots, even when it feels excellent in practice.",
    ],
    practiceTips: [
      "Build a simple loop: opener that breaks posture → short combo → hold a dodge or guard input instead of chasing extra hits. Learning when to stop matters more than squeezing one extra swing.",
      "Pick a single obvious heavy enemy attack and practice blocking only that one until you rarely miss it, rather than trying to perfect every block at once.",
      "During casual farming, impose a personal rule like “no more than three hits per approach” to gently correct greedy tendencies.",
    ],
    videoFocusPoints: [
      "Watch the base combo rhythm: how long the player pauses after each string before recommitting. That pause is your decision point in real fights.",
      "Identify which sword skills provide clear movement or guard properties; those are your safety buttons against new bosses.",
      "In multi‑enemy clips, note how the player positions to avoid being surrounded—Sword benefits a lot from subtle footwork and funneling enemies into one side.",
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
    ],
    videoFocusPoints: [
      "Observe the average distance the player keeps from enemies: this is roughly where you want to stand in your own runs.",
      "Note when sweeps are used versus straight thrusts—sweeps for flanks or small groups, thrusts for interrupts or focused targets.",
      "Watch how long recovery is after each attack so you can mentally budget time for dodges or guards.",
    ],
  },
  "mo-blade": {
    slogan: "Slow to start, heavy when it lands.",
    difficulty: "Moderate",
    recommendedFor:
      "Players who like patient play, reading animations, and landing a few decisive blows instead of constant button mashing.",
    positioning: [
      "Mo Blade follows the classic heavy‑weapon route: start‑up is slow, but each swing feels significant. It does not reward constant flailing; it rewards placing a few high‑value hits that force enemies to respect your pacing.",
      "In PVE it fits players who are comfortable on or near the front line but do not want to play at blistering speed. You read big boss moves, step into their recovery windows, and cash in large chunks of damage while relying on sturdiness and presence to hold your ground.",
      "In group or PVP scenarios, Mo Blade often acts as a threat aura. Even when you are not swinging, opponents must respect the zone around you because a single well‑timed blow can flip a trade. That psychological pressure is a form of control in itself.",
    ],
    pros: [
      "High impact per hit, satisfying “every swing matters” feeling.",
      "Rewards players who enjoy reading and punishing enemy actions.",
      "Provides strong presence when holding a frontline or controlling packs.",
      "Slower input rhythm can be friendlier on hands than constant spam.",
    ],
    cons: [
      "Slow start‑up; mistimed attacks are easily interrupted or whiffed.",
      "Lower mobility than light weapons, demanding more deliberate positioning.",
      "Can feel clumsy in mechanics that require rapid responses until you know the fight well.",
      "If you struggle with timing, it may feel like you are always getting interrupted or swinging at air.",
    ],
    practiceTips: [
      "Practice only attacking during obvious boss recovery windows; spend the rest of the time just moving and defending to internalize that Mo Blade does not need constant swings.",
      "Use a basic charged attack on multiple enemy types to feel the delay between input and impact, then adjust how early you start each swing.",
      "In practice sessions, challenge yourself to clear encounters with as few swings as possible, focusing on correctness of each hit rather than raw DPS.",
    ],
    videoFocusPoints: [
      "Watch the character’s body language and effects during charge‑up and mentally count the time from lift to impact.",
      "Notice how small sidesteps or repositioning make enemies walk into your swing instead of forcing you to chase.",
      "Pay attention to how long enemies stay in recovery after being hit—that informs whether you can safely go for a second swing or must back off.",
    ],
  },
  fan: {
    slogan: "Elegant weapon that blends ranged pressure with supportive tools.",
    difficulty: "Moderate",
    recommendedFor:
      "Players who enjoy staying at a safe distance, controlling the flow of battle, and supporting teammates while still dealing damage.",
    positioning: [
      "Fan turns the idea of projecting inner energy outward into ranged pressure and supportive effects. You can chip away from afar, apply slows or debuffs, and use healing or shielding tools to give your frontline more breathing room.",
      "In PVE it functions as a rhythm smoother for the team. You will not always be the top damage dealer, but your presence significantly raises the group’s forgiveness. It is friendly for players who prefer a wider camera view and a calmer pace while still feeling involved.",
      "In duels or small‑scale PVP, Fan leans heavily on positioning and timing. You look for spots with good sightlines and clean escape routes, using soft control and support skills to tip trades in your team’s favor.",
    ],
    pros: [
      "Comfortable attack range that keeps melee pressure at bay.",
      "Access to healing or supportive tools that noticeably increase party survivability.",
      "Generally smoother pace than full melee, leaving more mental space for awareness.",
      "Elegant visuals that fit “cultivator / support / refined duelist” fantasies.",
    ],
    cons: [
      "Burst damage is usually lower than pure DPS weapons, so kills may take longer.",
      "Overly cautious play can make solo content feel slow or tedious.",
      "Requires decent awareness of ally positioning; support skills can easily be wasted otherwise.",
      "In very high‑pressure fights with frequent mistakes, you may feel you cannot “heal through” everything, which can be frustrating.",
    ],
    practiceTips: [
      "In easy dungeons, practice always standing slightly behind and off to the side of your frontline so you can see both them and incoming threats.",
      "Set a small goal for each run: use one support tool to meaningfully save a teammate from danger, such as stabilizing low health or buying time during a messy pull.",
      "Play a few encounters using a reduced damage rotation so you can put more attention on tracking ally and enemy positions, training your overall battlefield awareness.",
    ],
    videoFocusPoints: [
      "Look at how wide each Fan skill’s area is and how long effects last. Imagine where allies would stand and how many you could realistically cover.",
      "Notice how the player keeps themselves safe when enemies dive or cast large attacks; your ability to stay alive directly affects how much support you can provide.",
      "Watch whether the damage pattern is more constant pressure or short bursts, and think about how that should influence your build choices.",
    ],
  },
  umbrella: {
    slogan: "Agile umbrella weapon that turns defense and movement into offense.",
    difficulty: "Advanced",
    recommendedFor:
      "Players who enjoy reading attacks, timing counters, and keeping fights on their own rhythm.",
    positioning: [
      "Umbrella looks delicate but is clearly built around defensive play and counters. You can block, deflect, or redirect attacks and then immediately turn those moments into high‑quality offense.",
      "In PVE it suits players who like studying boss patterns. Well‑timed parries or guards let you handle many attacks in place instead of constantly rolling, saving time and looking stylish—once you have a feel for the rhythm.",
      "In PVP or skirmishes, Umbrella can scramble opponents’ timing by mixing evasive movement with short windows of protection. Once the other side hesitates or whiffs multiple strings, your opportunities grow quickly.",
    ],
    pros: [
      "Strong defensive tools; high‑skill play can neutralize many threats in visually satisfying ways.",
      "Blend of mobility and guarding creates big comeback potential in close fights.",
      "Distinct, graceful aesthetic that sells a composed duelist fantasy.",
      "Once you learn patterns, small enemies and chip damage become much less annoying.",
    ],
    cons: [
      "High learning curve; mistimed blocks or counters often mean taking full hits.",
      "Requires significant familiarity with enemy moves, especially early on.",
      "Timing‑dependent play feels worse in high‑latency environments.",
      "Can be mentally demanding; several mistakes in a row may feel punishing.",
    ],
    practiceTips: [
      "In a safe environment, pick one obvious telegraphed attack and always attempt to block or parry it with your umbrella until the response becomes automatic.",
      "In easier content, set a goal of cleanly handling just one dangerous skill per fight with umbrella tools, instead of trying to perfect every interaction immediately.",
      "Experiment with chaining Umbrella’s movement and evasion skills into a full “avoidance route” through enemy attacks to understand its positional range.",
    ],
    videoFocusPoints: [
      "Watch which attacks are handled with the umbrella and which are avoided with movement; mentally tag which category each type falls into.",
      "Observe the timing from closed umbrella to open guard to follow‑up strike to gauge how much advance input you will need.",
      "Pay close attention to how quickly the player transitions from defense back into offense—those tempo shifts are the core joy of Umbrella.",
    ],
  },
  "rope-dart": {
    slogan: "Mobile, pick‑oriented weapon that turns positioning mistakes into openings.",
    difficulty: "Advanced",
    recommendedFor:
      "Players who like predicting movement, using terrain and distance creatively, and refining mechanical details.",
    positioning: [
      "Rope Dart feels like a hybrid between a grappling line and an execution hook. You can harass, interrupt, and reposition enemies from mid‑range, or commit to sudden gap‑closing or disengages that reshape the battlefield.",
      "In PVE it is not built for stationary output. Instead it encourages constant movement: peel dangerous targets from packs, drag them into safer spaces, and then finish your combo where you have more control. Against very mobile bosses, Rope Dart offers solutions that static weapons cannot.",
      "In PVP or coordinated runs, Rope Dart excels at creating opportunities. You punish positioning mistakes with pulls or forced movement, throwing enemies into your team’s damage zones. Even if you are not topping charts, you often feel like the one making opponents miserable.",
    ],
    pros: [
      "Rich set of movement and control tools to constantly reset engagement ranges.",
      "Strong at punishing mistakes and repositioning fights into favorable layouts.",
      "High creative ceiling for players who enjoy studying maps and terrain.",
      "Landing a full sequence feels extremely satisfying and “predatory.”",
    ],
    cons: [
      "High execution barrier; mis‑aimed pulls or gap closers can throw you into danger.",
      "Heavily reliant on understanding how enemies move; early attempts may feel inconsistent.",
      "Needs either cooperative teammates or clustered enemies to shine; scattered fights feel worse.",
      "Sensitive to latency and frame stability because timing and spacing are so important.",
    ],
    practiceTips: [
      "In training, practice pulling or dashing in and then immediately sidestepping or backing off, so Rope Dart becomes a positioning tool rather than a one‑way ticket forward.",
      "Find enemies with obvious leaps or rushes and only practice interrupting or intercepting those movements, instead of trying full combos right away.",
      "Experiment around complex terrain, using different elevations and angles to get a feel for rope range and travel paths.",
    ],
    videoFocusPoints: [
      "Watch the final distance between the character and the target after each rope hit; that spacing determines whether you can follow up or must disengage.",
      "Notice the start‑up and travel time of rope skills, and consider whether they are used before, during, or after enemy movement for higher hit rates.",
      "Observe how the player uses map edges, slopes, or height differences to create unexpected approach angles.",
    ],
  },
};
