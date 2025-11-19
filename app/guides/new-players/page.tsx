import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Winds Meet Beginner Guide & First Week Roadmap",
  description:
    "A practical Where Winds Meet beginner guide that walks you from first launch to your first weekly reset with smart settings, priorities, and resource tips.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/new-players",
  },
};

export default function NewPlayersGuidePage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.png"
            alt="Where Winds Meet beginner guide background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet beginner guide: from first login to your first
            week.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            This Where Winds Meet beginner guide combines practical onboarding
            tips with long-term habits so your very first character scales
            cleanly into mid and late game. Instead of throwing dozens of
            disconnected tricks at you, it follows the same order you will
            actually experience: first-time settings, early combat, story
            progress, daily and weekly routines, and which systems are worth
            your attention right now.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            The advice here is grounded in detailed community technical guides
            and step-by-step newcomer wikis, then rewritten to match a simple
            goal: save time without killing your curiosity. You will see clear
            recommendations for your opening configuration, a safe main story
            route, what to do each day and week, and a short list of genuine
            pitfalls worth avoiding on your first trip through Jianghu.
          </p>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 1 – Tune your opening settings once, not twenty times.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet opens with a string of setup screens that quietly
          determine how readable and comfortable the game feels. You can change
          most of them later, but starting from a strong baseline means fewer
          restarts and fewer lost fights to camera or input issues instead of
          actual mistakes.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          For a typical new player on mouse and keyboard, this combination
          works well:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Guidance for exploration:</span>{" "}
            <span className="font-medium text-emerald-200">Detailed</span> –
            keeps quest markers, chest hints, and point-of-interest icons
            visible so you do not miss key unlocks while still learning the
            world.
          </li>
          <li>
            <span className="font-semibold">Control mode:</span>{" "}
            <span className="font-medium text-emerald-200">ARPG</span> – camera
            follows your movement automatically, which pairs naturally with
            parry-focused melee combat.
          </li>
          <li>
            <span className="font-semibold">Game difficulty:</span>{" "}
            <span className="font-medium text-emerald-200">Recommended</span> –
            the balanced baseline used for most testing. Story mode is fine if
            you want a relaxed tour; avoid locking in{" "}
            <span className="font-medium text-emerald-200">Legend</span> or{" "}
            <span className="font-medium text-emerald-200">Hardcore</span> on
            your very first character.
          </li>
          <li>
            <span className="font-semibold">Social preference:</span>{" "}
            <span className="font-medium text-emerald-200">Shared Journey</span>{" "}
            – enables co-op, guilds, social shops, and more. You can temporarily
            switch to solo play later if you want quiet time.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Most of these can be revisited later as you grow more comfortable. In
          the first few sessions, treat them like training wheels designed to
          keep you from losing key systems or wandering the map without
          direction.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 2 – Use a combat setup that flatters your reactions.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Where Winds Meet combat is built around{" "}
          <span className="font-semibold">parries</span>,{" "}
          <span className="font-semibold">dodges</span>, and well-timed skills
          rather than mashing. Even early enemies can punish greed, especially
          in groups. The game feels much better when your controls encourage
          quick reactions instead of finger gymnastics.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A simple layout for mouse and keyboard that many players find
          comfortable is:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Light attack:</span> Left Mouse
          </li>
          <li>
            <span className="font-semibold">Parry:</span> Forward Mouse Button
          </li>
          <li>
            <span className="font-semibold">Dodge:</span> Back Mouse Button
          </li>
          <li>
            <span className="font-semibold">Weapon skills:</span> Q / E
          </li>
          <li>
            <span className="font-semibold">Mystic Arts:</span> 1–4
          </li>
          <li>
            <span className="font-semibold">Movement / lightness skill:</span> F
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The idea is simple: put{" "}
          <span className="font-semibold">defense on the mouse</span> and{" "}
          <span className="font-semibold">offense on the keyboard</span>. That
          separation makes it easier to chain parry → dodge → counterattack
          without accidentally hitting the wrong key when enemies change tempo
          or camera angles.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Camera settings also matter:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Camera distance:</span> Wide – more
            of the battlefield on screen means earlier warning of big swings or
            projectiles.
          </li>
          <li>
            <span className="font-semibold">Horizontal sensitivity:</span>{" "}
            roughly 6–8;{" "}
            <span className="font-semibold">vertical sensitivity:</span> 5–6 –
            enough to track enemies smoothly without overshooting.
          </li>
          <li>
            <span className="font-semibold">Camera correction:</span> Off or
            Close – prevents automatic re-centering from pulling you
            unintentionally away from the enemy you are trying to read.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you are experimenting with{" "}
          <span className="font-semibold">Where Winds Meet aim assist</span>{" "}
          options on controller, start with a medium strength setting so the
          game helps you stay on target without completely removing the feeling
          of manual control.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 3 – Create a character you want to live with.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The character creator in Where Winds Meet is generous, but not
          infinite. You get several free appearance edits and then later changes
          require a customization item, so it is worth spending a little extra
          time up front making something you actually enjoy looking at.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          After appearance, you will be asked to choose an{" "}
          <span className="font-semibold">Aspiration Talent</span> such as{" "}
          <span className="font-semibold">Drunken Precision</span> or{" "}
          <span className="font-semibold">Rhetoric Edge</span>. These mostly
          affect specific mini-games (Pitch Pot and Gift of the Gab) rather than
          core combat or story. Pick the one that matches the side activity you
          are more curious about; you do not need to min-max here on your first
          run.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 4 – Learn the HUD once so it stops shouting at you.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The HUD in Where Winds Meet is dense the first time you see it:
          status icons, multiple health and Qi bars, skill rows, minimap,
          quest tracker, and more. Spend one or two fights simply watching what
          changes when you attack, get hit, or land a parry instead of trying to
          memorize every label.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          At minimum, know these pieces:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            Your <span className="font-semibold">Health bar</span> – obvious,
            but remember that potions refill at Boundary Stones and through
            crafting or purchases.
          </li>
          <li>
            Your <span className="font-semibold">Qi / stagger bar</span> – if it
            breaks, you enter an exhausted state and cannot block; back off and
            reset instead of forcing trades.
          </li>
          <li>
            <span className="font-semibold">Martial Arts skills</span> – tied to
            your weapon, forming your main combo tools.
          </li>
          <li>
            <span className="font-semibold">Mystic Arts skills</span> – more
            flexible abilities that add damage, crowd control, or puzzle
            solutions.
          </li>
          <li>
            The <span className="font-semibold">enemy Qi bar</span> – when you
            break this, the enemy becomes vulnerable to an Execution that chunks
            large amounts of health.
          </li>
          <li>
            The <span className="font-semibold">minimap</span> and{" "}
            <span className="font-semibold">quest objectives</span> – your main
            compass for story beats and nearby points of interest.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Once these elements feel familiar, the HUD will start reading like a
          quick status report instead of a wall of symbols, and you can glance
          at it between attacks instead of constantly scanning it under stress.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 5 – Push the main story first, then branch out.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          It is tempting to sprint in every direction as soon as the map opens,
          but your character&apos;s true ceiling is tied tightly to story
          progress. Level caps, breakthrough quests, and several major systems
          unlock through main quests rather than exploration alone.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A reliable early-game loop looks like this:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>Follow the main quest until you hit a level cap or hard gate.</li>
          <li>
            Complete the associated <span className="font-semibold">
              breakthrough
            </span>{" "}
            as soon as you unlock it.
          </li>
          <li>
            Only then detour into side quests, exploration, or strongholds using
            your remaining time and energy.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          This ensures that every hour you invest contributes to long-term
          scaling instead of pouring resources into a character that is
          artificially capped. Once you reach the end of the currently available
          main story, you can safely shift your focus to exploration, builds,
          and co-op without worrying that you are falling behind hidden caps.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 6 – Daily routine: five things worth doing most days.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Once you are past the very first sessions, the game opens into a loop
          of daily and weekly activities. You do not need to do everything every
          day. Instead, focus on a short checklist that keeps your account
          growing even on busy evenings.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Claim your Xiake Journey check-in.</span>{" "}
            Make it a habit to log in, open the Xiake Journey screen, and grab
            the daily login and task rewards. Traditional Chinese guides treat
            this as the single highest-value click you can do on a busy day.
          </li>
          <li>
            <span className="font-semibold">
              Clear a few Sect Orders / Jianghu Orders.
            </span>{" "}
            Even before you formally join a sect, you can pick up Jianghu Orders
            style dailies. There are usually around eight; focus on three of the
            fastest ones—group photos, drinking, playing instruments—to earn
            steady Jianghu reputation for fashion and prestige rewards.
          </li>
          <li>
            <span className="font-semibold">Play one co-op leisure game.</span>{" "}
            Join a round of cards, mahjong, or other social mini-games to earn
            Co-Play points. Those points convert into extra rewards over time
            and keep your routine from feeling like pure chores.
          </li>
          <li>
            <span className="font-semibold">
              Visit Leaf Bu Xiu&apos;s gambling board.
            </span>{" "}
            You can win against this NPC up to three times per day. Each win is
            not life-changing on its own, but over a week or two it adds up to a
            noticeable amount of currency and materials.
          </li>
          <li>
            <span className="font-semibold">
              Spend your Mental Energy and Stamina.
            </span>{" "}
            Do your best not to let either bar sit at cap. Mental Energy feeds
            into gear, Internal Arts, and other core power sources via
            strongholds and instanced content. Stamina ties into professions and
            trading—crafting items to sell slowly converts into long-term
            trading currency that can even be used for outfits later.
          </li>
        </ol>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          If you have more time after this list, that is when you push more main
          story, roam for collectibles, or hop into co-op sessions. The checklist
          simply protects your long-term growth on days when time is tight.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 7 – Weekly routine: caps matter more than errands.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Weekly content in Where Winds Meet is where permanent progression
          lives: dungeons, capped currencies, and limited-shop materials. If you
          are short on time, hitting weekly caps is more important than clearing
          every single daily task.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Key weekly priorities:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Weekly dungeons and raids.</span>{" "}
            Treat these like non-negotiable if you want steady gear and upgrade
            materials. Running them later in the week, after you have upgraded a
            bit, often makes them smoother.
          </li>
          <li>
            <span className="font-semibold">Weekly Jade and shop allocations.</span>{" "}
            Spend premium currencies on progression items first: Internal Arts,
            skill breakthroughs, and upgrade boxes. Cosmetics can wait.
          </li>
          <li>
            <span className="font-semibold">
              Stronghold farming tuned to your level.
            </span>{" "}
            Below around level 40, simply avoid Mental Energy capping. After
            that, target boss-type strongholds that drop set gear and higher
            tier mats.
          </li>
          <li>
            <span className="font-semibold">Recycle unused gear.</span> Do not
            hoard outdated items. Dismantling them turns past drops into
            permanent account power.
          </li>
          <li>
            <span className="font-semibold">
              Multi-day faction or guild tasks.
            </span>{" "}
            Anything that explicitly mentions taking several days should be
            started early in the week so there is slack for real-life delays.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The server treats a new day and new week based on specific reset
          times. Check in-game notices for your region&apos;s exact schedule,
          but in general, plan to clear weekly content before Monday resets and
          pay extra attention to weekend-only events like guild wars and certain
          city festivities.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 8 – Smart resource habits that scale with you.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          The difference between a stressed account and a relaxed one is often a
          handful of long-term habits. These principles keep your growth curve
          healthy without demanding obsessive grinding.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">
              Mental Energy rewards scale with progression.
            </span>{" "}
            Do not burn all of it in low-level areas early on. Use enough to
            avoid capping, then let later, stronger activities multiply its
            value.
          </li>
          <li>
            <span className="font-semibold">
              Weekly dungeon materials are time-gated.
            </span>{" "}
            Skipping them means you can never fully catch up on that specific
            stream of power. Even a single clear on tougher weeks is better than
            none.
          </li>
          <li>
            <span className="font-semibold">
              Weekly shop limits are like interest.
            </span>{" "}
            Buying capped upgrade materials every week is how veteran accounts
            gradually pull ahead. Missing a week slows that curve.
          </li>
          <li>
            <span className="font-semibold">Recycling gear is progression.</span>{" "}
            Treat dismantling unused gear as part of your upgrade loop, not an
            afterthought. This turns loot churn into permanent stats instead of
            inventory clutter.
          </li>
        </ul>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 9 – Explore, unlock travel points, and sample activities.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Once your daily and weekly anchor tasks are handled, Where Winds Meet
          becomes a playground of regions, secrets, and activities. The game
          rewards curiosity, but a few priorities make exploration much more
          efficient.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Unlock Boundary Stones early.</span>{" "}
            These serve as fast travel points and a major source of exploration
            points. Grabbing them as you naturally pass through a zone saves
            major backtracking later.
          </li>
          <li>
            <span className="font-semibold">Visit campfire icons.</span> Talking
            to the Wayfarer at these locations reveals the broader map for that
            region, making it easier to plan routes.
          </li>
          <li>
            <span className="font-semibold">
              Pick up materials as you go.
            </span>{" "}
            Herbs, ores, and animal drops that seem trivial early can become
            bottlenecks when you start crafting and upgrading in earnest.
          </li>
          <li>
            <span className="font-semibold">Sample varied activities.</span> Try
            a mix of story bosses, world bosses, mini-games, oddities, and
            social events to see what you genuinely enjoy. Your future build and
            gear priorities should follow that enjoyment, not the other way
            around.
          </li>
        </ul>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Step 10 – Performance tweaks and network basics.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Smooth frame pacing and stable network conditions are quietly crucial
          to a parry-heavy action RPG. You do not need a monster PC to enjoy
          Where Winds Meet, but a few settings can dramatically improve
          consistency.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Display mode:</span> Fullscreen –{" "}
            reduces focus-loss hitches when alt-tabbing or moving between
            monitors.
          </li>
          <li>
            <span className="font-semibold">FPS limit:</span> Uncapped or a high
            target your hardware can sustain – higher, stable framerates make
            input windows feel more forgiving.
          </li>
          <li>
            <span className="font-semibold">V-Sync and motion blur:</span> Off –
            cuts input latency and reduces visual smearing on attack telegraphs.
          </li>
          <li>
            <span className="font-semibold">Network:</span> Use wired Ethernet
            where possible, avoid unnecessary VPNs, and consider disabling any
            extra &quot;network smoothing&quot; options if attacks feel delayed
            or desynced.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          None of these are mandatory, but together they make the game feel much
          closer to its intended rhythm, especially in tougher duels and
          co-op-heavy content.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Bonus – Codes, bugs, and when to check back in.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          A few final notes can save you frustration and give you free boosts
          along the way:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold">Redeem codes regularly.</span> Use
            the in-game Settings &gt; Other &gt; Exchange Code menu to claim
            launch and event codes. They often include materials that smooth out
            early progression. For a live list of active and expired codes, see
            the dedicated <span className="font-semibold">Codes &amp; Rewards</span>{" "}
            guide in this site&apos;s main guides section.
          </li>
          <li>
            <span className="font-semibold">Keep an eye on known issues.</span>{" "}
            Community guides have flagged certain profession quests—especially
            healer-related lines—as potentially bugged in some versions, causing
            menu problems. Check recent patch notes or community hubs before
            committing heavily to any profession if you are worried.
          </li>
          <li>
            <span className="font-semibold">
              Revisit this page after major patches.
            </span>{" "}
            As Where Winds Meet evolves, reset times, reward structures, and
            activity recommendations will shift. Treat beginner guides as living
            documents rather than one-time manuals.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          With these steps in mind, you should be able to move from your very
          first login through your first weekly reset without feeling lost or
          pressured. From here, the natural next stops are the{" "}
          <span className="font-semibold">tier list</span>,{" "}
          <span className="font-semibold">builds</span>, and{" "}
          <span className="font-semibold">weapon overview</span> pages in this
          site&apos;s guides hub, which dive deeper into long-term specialization
          once the basics feel comfortable.
        </p>
      </section>
    </article>
  );
}
