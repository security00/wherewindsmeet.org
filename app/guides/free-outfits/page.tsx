import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Free Outfits Guide",
  description:
    "Where Winds Meet free outfits, sets, cosmetics, and hairstyles from events, quests, codes, shops, and social rewards—claim zero-cost tiers to save currency.",
  alternates: {
    canonical: `${baseUrl}/guides/free-outfits`,
  },
  openGraph: {
    title: "Where Winds Meet Free Outfits Guide",
    description:
      "Where Winds Meet free outfits, sets, cosmetics, and hairstyles from events, quests, codes, shops, and social rewards—claim zero-cost tiers to save currency.",
    url: `${baseUrl}/guides/free-outfits`,
  },
  twitter: {
    title: "Where Winds Meet Free Outfits Guide",
    description:
      "Where Winds Meet free outfits, sets, cosmetics, and hairstyles from events, quests, codes, shops, and social rewards—claim zero-cost tiers to save currency.",
  },
};

const highlightCards = [
  {
    title: "Limited-time events & festivals",
    points: [
      "Log-in chains and festival quests often grant full outfits or accessories for free; claim before the event ends.",
      "Event currencies usually include a zero-cost tier—take the free claim first, then consider discounted picks.",
      "Daily/weekly event milestones can drop dyes or random accessory boxes; finish the checklist before reset.",
    ],
    image: "/free-outfits/all-free-outfits.webp",
  },
  {
    title: "Story quests & achievements",
    points: [
      "Main/side quest first-clears can reward outfit pieces or hairstyle vouchers—don’t skip dialogue chains.",
      "Achievements in Exploration/Combat/Social branches hide cosmetic rewards; clear pending claims regularly.",
      "Town NPCs, tavern boards, and sect elders can trigger hidden chains that end with free cosmetics.",
    ],
    image: "/free-outfits/free-outfits-grid.webp",
  },
  {
    title: "Redeem codes & zero-cost shop slots",
    points: [
      "Active codes often include universal cosmetic vouchers—redeem first to avoid expiry.",
      "Event shops sometimes feature 0-currency “trial” cosmetics; claim before buying anything else.",
      "Watch for 0→discounted tiers: grab the free tier, then decide if the paid upgrade is worth it.",
    ],
    image: "/free-outfits/free-sets.webp",
  },
  {
    title: "Social systems & co-op rewards",
    points: [
      "Guild contribution, friendship milestones, and social actions can be traded for accessories or emotes—avoid point cap overflow.",
      "Co-op dailies and first-time clears of group content can drop cosmetic boxes or dyes.",
      "Photo/UGC contests often reward themed cosmetics; check official notices during holidays.",
    ],
    image: "/free-outfits/free-hairstyles.webp",
  },
];

const checklist = [
  "Daily: claim logins, finish event dailies, check any 0-cost shop slots before spending currency.",
  "Weekly: finish guild/co-op missions, cap event currency, redeem random cosmetic boxes.",
  "Ongoing: clear pending achievements across Exploration/Combat/Social to scoop hidden cosmetics.",
  "Seasonal: prep required quests before festivals so you don’t miss limited-time outfit exchanges.",
  "Codes: redeem active codes (see Codes page) early to avoid expiration and double rewards with events.",
];

const freeSets = [
  { name: "Master Deceiver", source: "Open Beta pre-registration mail reward." },
  { name: "Mountain Pine", source: "Beta test reward." },
  { name: "Swaying Lotus", source: "Pre-registration milestone mail." },
  { name: "First Step", source: "Complete “Another New Wing” in Heaven Has No Pier." },
  { name: "Elegy of Petals", source: "Solemn Echo permanent banner (Echo Jade pulls are farmable)." },
  { name: "Return of Spring", source: "Solemn Echo permanent banner." },
  { name: "Crimson Curtain", source: "Solemn Echo permanent banner." },
  { name: "Blazing Passes", source: "Solemn Echo permanent banner." },
  { name: "Peaceful Life", source: "Finish 7 chapters of A Warrior's Journey." },
  { name: "Humble Hero", source: "Reach Lv61 in Path of the Strong event." },
  { name: "Blazing Midnight", source: "Join Midnight Blades sect, buy in sect shop." },
  { name: "Heavenly Frost", source: "Join Well of Heaven sect, buy in sect shop." },
  { name: "Silent Current", source: "Join Silver Needle sect, buy in sect shop." },
  { name: "Ninefold Freedom", source: "Join Nine Mortal Ways sect, buy in sect shop." },
  { name: "Enlightened Mind", source: "Season Shop for 520 Cosmetic Chests." },
  { name: "Chasing Red", source: "Still Shore campaign: 520 Cosmetic Chests or random from campaign chests." },
  { name: "Bounty Hunter", source: "Purchase in Bounty Shop." },
  { name: "Sound of Valor", source: "Reach exploration Lv5 in Qinghe." },
  { name: "Opulent Grace", source: "Reach exploration Lv5 in Kaifeng." },
  { name: "Penstroke Posy", source: "Advance in Scholar profession." },
  { name: "Art of Healing", source: "Advance in Healer profession." },
  { name: "Gray Wolf", source: "Buy with Adventure Slip (Social Shop: Wandering Paths)." },
  { name: "Purple Dew", source: "Buy with Adventure Slip (Social Shop: Wandering Paths)." },
  { name: "Loyal Heart", source: "Buy with Harmony Charm (Social Shop: Partnership)." },
  { name: "Twin Swallows", source: "Buy with Harmony Charm (Social Shop: Discipleship)." },
  { name: "Still Moonlight", source: "Buy with Harmony Charm (Social Shop: Sworn Cohort)." },
  { name: "Flawed Harmony", source: "Reach Partnership Lv3." },
  { name: "Yaksha", source: "Gather Sin Leaf in Perception Forest, buy in Sin Leaf Exchange." },
  { name: "Orchid Dew", source: "Guide Red Gold Boutique." },
  { name: "Alms Pilgrim", source: "Encounter “Hero & Beauty” near Bloomveil Monastery Outpost (Qinghe)." },
  { name: "Forgotten", source: "Complete Lifetime Lockup + Behind Bard Blues (≈200h jail sentence)." },
];

const freeOutfits = [
  { name: "Novice Wanderer", source: "Starter outfit." },
  { name: "Taming Storms", source: "Complete “A Horse Neighs in the Forest” (Heaven Has No Pier chapter)." },
  { name: "Jianghu: Wanderer", source: "Solemn Echo permanent banner (Echo Jade pulls are farmable)." },
  { name: "Blue Clouds", source: "Season Shop for 360 Cosmetic Chests." },
  { name: "Autumn Orchid", source: "Season Shop for 360 Cosmetic Chests." },
  { name: "Bathrobe: Golden Threads", source: "Finish “Golden Guest” achievement." },
];

const freeHairstyles = [
  {
    name: "Starter Hairstyles (1–12)",
    source:
      "Brush hair with the bronze mirror in Blissful Retreat twice per day until all starter styles are unlocked.",
  },
  { name: "Unbound: Hair", source: "Solemn Echo permanent banner." },
  {
    name: "Daily combing tip",
    source:
      "Visit the house south of Blissful Retreat waypoint; interact twice daily to collect missed starter styles.",
  },
];

export default function FreeOutfitsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/guides/free-outfits`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${baseUrl}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Free Outfits",
          item: `${baseUrl}/guides/free-outfits`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet free outfit sets",
      itemListOrder: "Unordered",
      numberOfItems: freeSets.length,
      itemListElement: freeSets.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.source,
        url: `${baseUrl}/guides/free-outfits#free-sets`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet free outfits (non-set)",
      itemListOrder: "Unordered",
      numberOfItems: freeOutfits.length,
      itemListElement: freeOutfits.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.source,
        url: `${baseUrl}/guides/free-outfits#free-outfits`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet free hairstyles",
      itemListOrder: "Unordered",
      numberOfItems: freeHairstyles.length,
      itemListElement: freeHairstyles.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.source,
        url: `${baseUrl}/guides/free-outfits#free-hairstyles`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I get Where Winds Meet free outfits fast?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Redeem active codes first, claim zero-cost tiers in event shops, finish early quests and achievement chains, and use Echo Jade pulls on the permanent banner for free set pieces.",
          },
        },
        {
          "@type": "Question",
          name: "Are there free hairstyles in Where Winds Meet?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Starter hairstyles can be unlocked by brushing hair at Blissful Retreat twice daily, and the Unbound: Hair style appears on the Solemn Echo permanent banner.",
          },
        },
        {
          "@type": "Question",
          name: "Do social systems give free outfits or accessories?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guild contributions, friendship points, co-op milestones, and social shop currencies can be traded for outfits, accessories, or cosmetic boxes—spend points before weekly reset.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: `${baseUrl}/free-outfits/all-free-outfits.webp`,
      caption: "Where Winds Meet free outfits montage from recent events",
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.webp"
            alt="Where Winds Meet free outfits background art"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet free outfits, cosmetics, and hairstyles.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            A concise hub for zero-cost or low-cost outfits, accessories, hairstyles, and dyes—prioritizing current events, codes, achievements, and social rewards so you don’t waste premium currency on items you can earn for free.
            If you came here searching for Where Winds Meet free outfits, this page front-loads the exact paths so you can claim them fast.
          </p>
          <p className="text-xs text-slate-400">
            Note: rewards shift with patches. Always claim the free tier first, then decide if paid upgrades are worth it. In-game notices and official posts take priority if details change.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-emerald-200">
            <Link
              href="/guides/codes"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              See latest codes
            </Link>
            <Link
              href="/guides/cosmetics"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              Cosmetics Gallery
            </Link>
            <Link
              href="#free-sets"
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
            >
              Jump to free sets
            </Link>
          </div>
          <div className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 text-sm text-slate-200 sm:grid-cols-2">
            <p className="text-sm text-slate-100">
              Browse the full free sets, outfits, and hairstyles below—ordered by the quickest wins first.
            </p>
          </div>
        </div>
      </section>

      <section
        id="free-sets"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Free sets and how to unlock them
          </h2>
          <span className="text-xs text-slate-400">
            Permanent + time-limited sources; claim free/gacha pulls via Echo Jade when possible. This is the core Where Winds Meet free outfits list for full looks.
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <h3 className="sr-only">Full free set list</h3>
          {freeSets.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50"
            >
              <p className="text-sm font-semibold text-slate-50">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="free-outfits"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Free outfits (non-set) and locations
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          <h3 className="sr-only">Free outfits list</h3>
          {freeOutfits.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50"
            >
              <p className="text-sm font-semibold text-slate-50">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="free-hairstyles"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Free hairstyles and how to claim them
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          <h3 className="sr-only">Free hairstyles list</h3>
          {freeHairstyles.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50"
            >
              <p className="text-sm font-semibold text-slate-50">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {highlightCards.map((card) => (
          <article
            key={card.title}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm shadow-slate-950/60"
          >
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-slate-950/80" />
            </div>
            <div className="relative space-y-3">
              <h2 className="text-lg font-semibold text-slate-50">{card.title}</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Free outfit examples (recent event drops)
          </h2>
          <span className="text-xs text-slate-400">
            Images sourced from current community highlights; availability may rotate.
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              src: "/free-outfits/all-free-outfits.webp",
              alt: "Where Winds Meet free outfits montage",
              caption: "Event shop freebies: claim the zero-cost tier first.",
            },
            {
              src: "/free-outfits/free-outfits-grid.webp",
              alt: "Quest rewards outfits",
              caption: "Quest/achievement rewards often bundle full looks.",
            },
            {
              src: "/free-outfits/free-hairstyles.webp",
              alt: "Free hairstyles grid",
              caption: "Hairstyle vouchers drop from codes, events, and social milestones.",
            },
          ].map((item) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </div>
              <p className="px-4 py-3 text-sm text-slate-200">{item.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Quick checklist for free cosmetics
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item} (keeps you on track for Where Winds Meet free outfits and dyes).</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Route tips and priorities
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          <p>
            Codes first: many Where Winds Meet free outfits or hairstyle vouchers come from limited-time codes. Redeem on the{" "}
            <Link
              href="/guides/codes"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Codes
            </Link>{" "}
            page before you dive into dailies so nothing expires.
          </p>
          <p>
            Event currency: grab the free tier in event shops, then spend remaining coins on limited outfits/dyes before touching rare currency.
          </p>
          <p>
            Achievements/hidden quests: exploration milestones, town NPC chains, and sect trials often drop accessories or hairstyle vouchers—check your achievements panel weekly.
          </p>
          <p>
            Social systems: guild contributions, friendship points, and co-op activities can be traded for cosmetic boxes—spend points before weekly reset to avoid capping out.
          </p>
          <p>
            Patch cadence: big patches and holidays tend to rotate or rerun sets. Pre-clear prerequisites so you’re ready when the shop opens.
          </p>
        </div>
      </section>
    </article>
  );
}
