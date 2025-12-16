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
    slogan: "Close-range burst that plays right in your opponent’s face.",
    difficulty: "Advanced",
    recommendedFor:
      "Players who enjoy high-risk melee, like practicing cancels/timing, and want to delete targets in a single window.",
    positioning: [
      "More of an execution weapon than a comfy farmer: short reach, but fast startup/recovery and lots of cancel and movement windows. If you can read openings, you can pack a lot of damage into a very short time.",
      "PVE: ideal for players who study boss patterns and look for flanks. Wait until aggro is stable, slip in from the side/back, force stagger/break, then get out before the big swing phase starts.",
      "PVP / small duels: it plays like an assassin. First draw out the opponent’s defensive tools, then fully commit. It amplifies both strengths and mistakes—great for players who want to push execution.",
    ],
    pros: [
      "Very fast combo rhythm and high burst in short windows.",
      "Strong mobility; dash/cancels make in-and-out patterns easier.",
      "Punishes mistakes extremely well once you understand patterns.",
      "High impact and frequent “highlight” moments.",
    ],
    cons: [
      "Short reach: positioning mistakes get punished quickly.",
      "High demands on rhythm/cancel timing; greed gets punished.",
      "Needs practice across many bosses; not ideal for ultra-relaxed sessions.",
      "More sensitive to latency/FPS issues than slower long-reach weapons.",
    ],
    practiceTips: [
      "Training pattern: dash in → 1 short combo → immediately out. No second combo; the goal is “one pass, then leave.”",
      "Pick bosses with clear telegraphs and punish exactly those animations for one string, then reset.",
      "Build a minimal combo (a few core hits + 1 movement skill). Only add more skills once that baseline is consistent.",
      "For a hyper-mobile style (e.g., paired with Rope Dart): pull the target in, swap to Dual Blades for a clean combo, then disengage.",
    ],
    videoFocusPoints: [
      "Watch the entry distance: short in, immediate out—don’t stick to the target forever.",
      "Which moves start the engagement? Dashes, side-steps into back attacks, etc. Use that as inspiration for your own openers.",
      "How does the player handle AoEs—back out, roll through, or fully reset? That’s the difference between stylish and practical.",
    ],
  },
  sword: {
    slogan: "Stable, balanced sword—an ideal first pick.",
    difficulty: "Easy",
    recommendedFor:
      "Players who are still learning systems, want to avoid extreme pros/cons, and like classic sword fantasy.",
    positioning: [
      "The default answer: never the absolute best, but almost never bad. Medium reach, readable rhythm, intuitive defense—ideal as a first main weapon.",
      "PVE: handles story, trash packs, and dungeons reliably. A great weapon for learning dodge windows, posture breaks, and aggro flow.",
      "Still a dependable anchor later: new bosses/mechanics are often easier to learn with a low-maintenance sword than with high-risk options.",
    ],
    pros: [
      "Balanced and easy to pick up.",
      "Mostly straightforward skills with low prediction/angle management burden.",
      "Forgiving—small mistakes rarely break the run.",
      "“Good enough everywhere,” making role/build swaps smoother.",
    ],
    cons: [
      "If you want extreme burst or tankiness, it can feel less specialized.",
      "The skill ceiling comes more from player fundamentals than weapon gimmicks.",
      "Not always at the top of pure DPS charts, even when it feels strong in practice.",
    ],
    practiceTips: [
      "Loop: opener toward a posture break → short combo → hold dodge/guard instead of extending greedily.",
      "Practice deliberately blocking one heavy enemy attack until it becomes consistent.",
      "For farming, use a simple anti-greed rule: “max 3 hits per approach.”",
      "Relaxed style: when stamina is full, charge a heavy hit; when stamina is low, briefly swap to your partner weapon/mystic, then reset.",
    ],
    videoFocusPoints: [
      "Notice the pauses between strings—those are your decision windows.",
      "Which skills include movement/guard properties? Those are your safety buttons.",
      "Against multiple enemies, watch positioning to avoid getting surrounded.",
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
    slogan: "Slow to wind up, heavy on impact.",
    difficulty: "Moderate",
    recommendedFor:
      "Players who enjoy patience, reading animations, and landing a few decisive hits instead of constant button spam.",
    positioning: [
      "A classic heavy weapon: slower startup, and every swing matters. It rewards a few high-value hits instead of constant spam.",
      "PVE: great for frontliners who don’t want maximum tempo. Read big boss moves, step in during recovery, and land huge damage packets backed by toughness and presence.",
      "Group play / PVP: it functions like a threat aura. Even the possibility of a precise hit demands respect—psychological pressure is also a form of control.",
    ],
    pros: [
      "High impact per hit with a “every swing matters” feel.",
      "Rewards good reads and clean punishes on enemy actions.",
      "Strong frontline presence and good pack control.",
      "Slower input rhythm—more hand-friendly than spam-heavy styles.",
    ],
    cons: [
      "Slow startup; bad timing gets you interrupted or causes whiffs.",
      "Less mobility, demanding more deliberate positioning.",
      "Can feel sluggish in reactive mechanics until you learn the fight.",
      "If your timing is off, it can feel like you’re constantly getting stuffed or swinging at air.",
    ],
    practiceTips: [
      "Only attack during clear boss recovery windows; otherwise move/defend. Internalize that Mo Blade doesn’t need to swing nonstop.",
      "Use charged basic attacks on different enemy types to feel the delay between input and impact, then adjust your lead time.",
      "Do a few runs with as few swings as possible—focus on correctness over raw DPS.",
      "“Wheelchair” style: refresh regeneration → hold guard → one charged hit → reset. Avoid greed.",
    ],
    videoFocusPoints: [
      "Watch posture/FX during charge-up and count the time from lift to impact.",
      "Use small side-steps: let enemies walk into your swing instead of chasing.",
      "Track enemy recovery after you hit—this decides whether a second swing is actually safe.",
    ],
  },
  fan: {
    slogan: "An elegant weapon that blends ranged pressure with support tools.",
    difficulty: "Moderate",
    recommendedFor:
      "Players who like staying safe, controlling the flow of combat, and supporting on the side.",
    positioning: [
      "Projects inner energy outward: ranged pressure plus support (heals, shields, slows).",
      "PVE: a rhythm-smoother for the team. Not always top DPS, but it raises overall error tolerance. Great for players who prefer a calmer tempo and strong awareness.",
      "PVP / small fights: very position- and timing-dependent. Look for clean sight lines and escape routes, then use soft control/support to flip trades.",
    ],
    pros: [
      "Comfortable range that keeps melee pressure away.",
      "Healing/support tools noticeably increase group survivability.",
      "Calmer tempo than full melee, leaving more mental space for awareness.",
      "Elegant aesthetic for a “cultivator/support/duelist” fantasy.",
    ],
    cons: [
      "Burst is often lower than pure DPS weapons, so kills can take longer.",
      "Overly cautious play can make solo content feel slow.",
      "Requires awareness of allies; otherwise your support value evaporates.",
      "In extreme fights it can be frustrating that you can’t “heal everything.”",
    ],
    practiceTips: [
      "Practice standing slightly behind/to the side of the frontline so you can see both threats and allies.",
      "Set one small goal per run: use a single support tool well (save low HP, buy time, stabilize a bad moment).",
      "Do a few fights with a reduced damage rotation and focus on ally/enemy positioning to train awareness.",
      "“Fan main” style: keep a continuous wall of fan skills between you and enemies, only stepping closer when your control cooldowns are ready.",
    ],
    videoFocusPoints: [
      "Watch the area and duration of fan skills: how many allies could you realistically cover?",
      "How does the player stay safe during dives/AoEs? Your survival determines your support uptime.",
      "Is the damage pattern constant or bursty? Use that to guide build choices.",
    ],
  },
  umbrella: {
    slogan: "A nimble umbrella weapon that turns defense and movement into offense.",
    difficulty: "Advanced",
    recommendedFor:
      "Players who read attacks, time counters, and want to set the combat rhythm themselves.",
    positioning: [
      "Delicate in appearance, but built around defense and counters: block/parry/redirect and immediately convert into offense.",
      "PVE: ideal for pattern learners. Clean parry/guard timings let you “hold your ground” instead of constant rolling—saving time and looking stylish.",
      "PVP / skirmishes: mixes evasive movement with short protection windows to disrupt opponent timing; whiffs create fast punish opportunities.",
    ],
    pros: [
      "Strong defense; high skill play can neutralize many threats.",
      "Mobility plus guard creates comeback potential in tight fights.",
      "Elegant dueling aesthetic.",
      "With pattern knowledge, trash and chip damage feel far less annoying.",
    ],
    cons: [
      "Steep learning curve; bad block/counter timing often means eating full damage.",
      "Less forgiving than it looks—demands more deliberate positioning than ultra-light weapons.",
      "Can feel sluggish in reactive mechanics until your rhythm clicks.",
      "If your timing is off, it can feel like you’re constantly getting interrupted.",
    ],
    practiceTips: [
      "Practice blocking/parrying one heavy attack until it’s consistent—trust in your defense is the key.",
      "In low-pressure content, focus on “block/deflect → immediate punish,” not long strings.",
      "Spacing drill: stand half a step closer than comfortable, block, counter—learn your guard ranges.",
      "Regen loop: refresh regeneration → hold guard → one punish → reset. Don’t overextend.",
    ],
    videoFocusPoints: [
      "How often does the player stand and block instead of rolling? That shows when umbrella defense is worth it.",
      "Parry timing: too early eats damage, too late misses the window—copy the rhythm.",
      "Between blocks: use short side-steps to keep the enemy in front of you instead of rolling away.",
    ],
  },
  "rope-dart": {
    slogan: "A highly mobile control weapon that turns positioning mistakes into opportunities.",
    difficulty: "Advanced",
    recommendedFor:
      "Players who predict movement, use terrain and distance creatively, and enjoy fine-tuning.",
    positioning: [
      "A hybrid of grappling line and execution hook: disrupt, interrupt, and reposition from mid-range—or suddenly close and disengage.",
      "PVE: not designed for stationary output. Keep moving, pull dangerous targets out of packs, drag fights into safer space, and finish combos there. Extremely mobile bosses can feel more manageable with this approach than with static weapons.",
      "PVP / co-op: it creates opportunities. It punishes positioning mistakes with pulls and forced movement, throwing enemies into team damage zones. Even without top DPS, you often feel like the player making life difficult for opponents.",
    ],
    pros: [
      "Versatile movement/control tools for constantly resetting distance.",
      "Excellent at punishing mistakes and repositioning fights.",
      "High creative ceiling for terrain- and map-aware players.",
      "A fully landed sequence feels extremely satisfying and “predatory.”",
    ],
    cons: [
      "High execution barrier; bad pulls or gap closes can throw you into danger.",
      "Very dependent on understanding enemy movement, so it can feel inconsistent early on.",
      "Feels weaker without clustered enemies or a cooperative team to capitalize on your pulls.",
      "Very timing/spacing sensitive, so latency/FPS drops can hurt more than usual.",
    ],
    practiceTips: [
      "Practice pull/dash in and immediately side-step or back-step—use Rope Dart as a positioning tool, not a one-way ticket forward.",
      "Before attempting full combos, train only the interrupt/catch on clear jumps or rushes from specific enemies.",
      "Test on complex terrain; heights and angles build intuition for range and trajectory.",
      "Hunter handoff: pull a target → feed it to your team or a Dual Blades setup → stop tunneling and reposition instead.",
    ],
    videoFocusPoints: [
      "Your end distance after each rope hit decides whether you can follow up or should disengage.",
      "Pay attention to startup/travel time: use rope skills before/during/after enemy movement for higher hit rates.",
      "Use map edges, slopes, and height to create unexpected angles.",
    ],
  },
};
