import type { Metadata } from "next";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import ZoomableGuideImage from "./ZoomableGuideImage";

const baseUrl = "https://wherewindsmeet.org";
const slug = "imperial-decree";
const pageUrl = `${baseUrl}/guides/${slug}`;
const updated = "2026-06-04";
const cdnBaseUrl = "https://static.wherewindsmeet.org";
const imageBaseUrl = `${cdnBaseUrl}/guides/${slug}`;

const images = {
  hero: {
    src: `${imageBaseUrl}/imperial-decree-review-memorials.png`,
    alt: "Imperial Decree memorial review screen in Where Winds Meet",
  },
  map: {
    src: `${imageBaseUrl}/imperial-decree-map-location.png`,
    alt: "Imperial Decree map location in Kaifeng Imperial Palace",
  },
  location: {
    src: `${imageBaseUrl}/imperial-decree-locations-overview.png`,
    alt: "Imperial Decree locations overview in Where Winds Meet",
  },
  talkToQuChunqiu: {
    src: `${imageBaseUrl}/imperial-decree-talk-to-qu-chunqiu.png`,
    alt: "Talk to Qu Chunqiu to start Imperial Decree in Where Winds Meet",
  },
  unrollScroll: {
    src: `${imageBaseUrl}/imperial-decree-unroll-scroll-and-write.png`,
    alt: "Unroll the Imperial Decree scroll and write remarks",
  },
  financeVolume: {
    src: `${imageBaseUrl}/imperial-decree-finance-volume.png`,
    alt: "Imperial Decree Finance volume prompts",
  },
  overallGrade: {
    src: `${imageBaseUrl}/imperial-decree-overall-grade.png`,
    alt: "Imperial Decree overall grade screen",
  },
  palaceChronicle: {
    src: `${imageBaseUrl}/imperial-decree-palace-chronicle-event.png`,
    alt: "Palace Chronicle event tied to Imperial Decree",
  },
  rearGardenSentient: {
    src: `${imageBaseUrl}/imperial-decree-rear-garden-sentient-being.png`,
    alt: "Rear Garden Imperial Decree Sentient Being entry",
  },
  sideQuestCard: {
    src: `${imageBaseUrl}/imperial-decree-side-quest-card.png`,
    alt: "Imperial Decree side quest card in Where Winds Meet",
  },
};
const heroImageUrl = images.hero.src;

const imageCardClass = "overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80";

const financeVideo = {
  id: "yya5lX4KgOg",
  title: "Finance Imperial Decree Solution - Where Winds Meet",
  url: "https://www.youtube.com/watch?v=yya5lX4KgOg",
};

const quickFacts = [
  { label: "Content type", value: "Exploration side quest and Palace Exploration activity" },
  { label: "Region", value: "Inner Chambers, Kaifeng Imperial Palace" },
  { label: "Start NPC", value: "Qu Chunqiu in the Rear Garden" },
  { label: "Unlock gate", value: "Start Throne and Tempest I to access the Palace" },
];

const unlockSteps = [
  {
    title: "Enter the Imperial Palace",
    detail:
      "Progress into the Version 1.7 Imperial Palace content first. If the Rear Garden is still unavailable, start the Worldly Affairs quest Throne and Tempest I and return after Palace access opens.",
    image: images.sideQuestCard,
    imageAlt: images.sideQuestCard.alt,
    imageHeight: 370,
  },
  {
    title: "Go to the Rear Garden",
    detail:
      "Head to the Inner Chambers side of Kaifeng Imperial Palace. The activity is tied to a building around the Rear Garden area, near the Yuchen Hall side of the Palace route.",
    image: images.map,
    imageAlt: images.map.alt,
    imageHeight: 410,
  },
  {
    title: "Talk to Qu Chunqiu",
    detail:
      "Qu Chunqiu introduces the problem: the court has too many memorials waiting for the Emperor. Accept the help request to start the Imperial Decree sequence.",
    image: images.talkToQuChunqiu,
    imageAlt: images.talkToQuChunqiu.alt,
    imageHeight: 410,
  },
  {
    title: "Review the memorials on the table",
    detail:
      "Interact with the scrolls to open the Finance volume. The activity asks you to choose or type remarks for public-affairs disputes, then grades the result.",
    image: images.unrollScroll,
    imageAlt: images.unrollScroll.alt,
    imageHeight: 410,
  },
  {
    title: "Retake if you want S rewards",
    detail:
      "The quest can finish without a perfect score, but reward hunters should retake the Finance volume until every prompt lands at S grade.",
    image: images.overallGrade,
    imageAlt: images.overallGrade.alt,
    imageHeight: 410,
  },
];

const extraVisuals = [
  {
    title: "Open the Finance volume",
    detail:
      "The first volume asks you to resolve several finance-related public affairs prompts before grading your overall approach.",
    image: images.financeVolume,
    height: 410,
  },
  {
    title: "Palace Chronicle event context",
    detail:
      "Imperial Decree is tied to the Version 1.7 Palace content cycle, so it also matters for event and exploration cleanup.",
    image: images.palaceChronicle,
    height: 410,
  },
  {
    title: "Rear Garden Sentient Being progress",
    detail:
      "After clearing the Finance volume, the activity contributes to the Imperial Palace Rear Garden exploration checklist.",
    image: images.rearGardenSentient,
    height: 410,
  },
];

const financeAnswers = [
  {
    prompt: "Plea for Night Markets",
    answer: "Approve the night market idea around Jinming Pool rather than shutting it down.",
  },
  {
    prompt: "On Revenue",
    answer: "Reject revenue plans that sacrifice farmland; protect food production first.",
  },
  {
    prompt: "On Austerity",
    answer: "Say austerity by itself is not enough and should not be the only policy.",
  },
  {
    prompt: "On Seeds and Food",
    answer: "Preserve surplus supplies and put the fields back into production.",
  },
  {
    prompt: "Vow Unto Death",
    answer: "Deny the proposal instead of encouraging a reckless death vow.",
  },
  {
    prompt: "Market Opening Memorial",
    answer: "Treat the extra market-opening request as unnecessary.",
  },
];

const rewardRows = [
  { target: "A rating for 1 memorial", reward: "Exploration Points x20" },
  { target: "A rating for 3 memorials", reward: "Echo Jade x5" },
  { target: "A rating for all memorials", reward: "Echo Jade x10" },
  { target: "S rating for all memorials", reward: "Inner Way Note: Chest x2" },
];

const blockers = [
  {
    title: "Imperial Decree is not on the map",
    detail:
      "Check Palace access first. Most reports place the unlock after starting Throne and Tempest I, because that quest opens access to the Kaifeng Imperial Palace route.",
  },
  {
    title: "The emote answers feel inconsistent",
    detail:
      "Use the meaning of the Finance choices above as your target. Some players report that manual wording is more predictable than picking an emote-only response.",
  },
  {
    title: "You cleared the quest but missed the best reward",
    detail:
      "Completion does not require S grade. If you only want the highest reward tier, retake the Finance volume and adjust any prompt that drops below S.",
  },
  {
    title: "You found one Imperial Decree pin but expect more",
    detail:
      "The first public map data shows one Rear Garden Imperial Decree location, while the activity can test multiple volumes. Treat this page as the Finance-volume route until more volumes are verified.",
  },
];

const faqs = [
  {
    question: "What is Imperial Decree in Where Winds Meet?",
    answer:
      "Imperial Decree is a Version 1.7 Imperial Palace exploration quest and activity where you review court memorials, choose remarks, receive grades, and earn Palace exploration rewards.",
  },
  {
    question: "Where do I start Imperial Decree?",
    answer:
      "Start it in the Rear Garden / Inner Chambers area of Kaifeng Imperial Palace by talking to Qu Chunqiu, then interact with the scrolls on the table.",
  },
  {
    question: "Do I need an S rating to complete Imperial Decree?",
    answer:
      "No. The quest can progress without a perfect score, but S ratings unlock the best Finance-volume reward tier.",
  },
  {
    question: "What are the Farming Affairs answers in Imperial Decree?",
    answer:
      "For the Finance / Farming Affairs prompts, aim for practical public-welfare remarks: support the Jinming Pool night market, protect farmland, avoid austerity-only policy, restore fields and food supplies, deny reckless death vows, and reject unnecessary market-opening paperwork.",
  },
  {
    question: "Why are people searching for Imperial Decree now?",
    answer:
      "It belongs to the new Imperial Palace update cycle, so players are looking for the unlock location, the Finance answers, reward thresholds, and whether the activity counts toward Palace exploration.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Imperial Decree Answers & S Rank Guide",
  description:
    "Where Winds Meet Imperial Decree answers for Finance and Farming Affairs: start at Rear Garden, talk to Qu Chunqiu, choose S-rank remarks, and claim rewards.",
  alternates: buildHreflangAlternates(`/guides/${slug}`),
  openGraph: {
    title: "Where Winds Meet Imperial Decree Answers & S Rank Guide",
    description:
      "Start Imperial Decree in the Imperial Palace, find Qu Chunqiu, review Finance and Farming Affairs memorials, and understand the S-rank answer route.",
    url: pageUrl,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: heroImageUrl,
        width: 728,
        height: 370,
        alt: images.hero.alt,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Imperial Decree Answers",
    description:
      "Start location, Finance and Farming Affairs answer meanings, S-rank route, and rewards.",
    images: [
      {
        url: heroImageUrl,
        alt: images.hero.alt,
      },
    ],
  },
};

export default function ImperialDecreeGuidePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: metadata.title,
      description: metadata.description,
      dateModified: updated,
      mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
        { "@type": "ListItem", position: 3, name: "Imperial Decree", item: pageUrl },
      ],
    },
  ];

  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHubBacklink language="en" />

      <section className="overflow-hidden rounded-3xl border border-amber-400/30 bg-slate-950/85 shadow-2xl shadow-slate-950/50">
        <div className="grid gap-0 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              Version 1.7 Imperial Palace guide
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Where Winds Meet Imperial Decree answers: Farming Affairs, Finance S rank, and location.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Imperial Decree is a Palace exploration activity in Where Winds Meet. Go to the Rear Garden in
              Kaifeng Imperial Palace, speak with Qu Chunqiu, then review the Finance memorials on the table.
              For S-grade attempts, pick responses that support practical public welfare: approve the Jinming
              Pool night market, protect farmland, avoid austerity-only policy, restore fields, deny reckless
              vows, and reject unnecessary market-opening paperwork.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="flex flex-col justify-center border-t border-slate-800 bg-slate-900/60 lg:border-l lg:border-t-0">
            <ZoomableGuideImage
              src={images.hero.src}
              alt={images.hero.alt}
              priority
              width={728}
              height={370}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-auto w-full object-contain"
            />
            <figcaption className="border-t border-slate-800 bg-slate-950/80 px-4 py-3 text-xs leading-5 text-slate-300">
              Review the Imperial Decree memorials on the Palace table, then tune your remarks for a better grade.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.66fr_0.34fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Answer-first route</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">How to unlock Imperial Decree.</h2>
          </div>
          <ol className="space-y-4">
            {unlockSteps.map((step, index) => (
              <li key={step.title} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                <div className="grid gap-0 md:grid-cols-[0.48fr_0.52fr]">
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Step {index + 1}</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-50">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
                  </div>
                  <figure className="border-t border-slate-800 bg-slate-950/70 md:border-l md:border-t-0">
                    <ZoomableGuideImage
                      src={step.image.src}
                      alt={step.imageAlt}
                      width={728}
                      height={step.imageHeight}
                      sizes="(min-width: 1024px) 36vw, 100vw"
                      className="h-auto w-full"
                    />
                  </figure>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-4 rounded-3xl border border-amber-400/20 bg-amber-500/10 p-6">
          <h2 className="text-xl font-bold text-slate-50">Quick answer</h2>
          <p className="text-sm leading-6 text-slate-200">
            If you only need the search answer: Imperial Decree starts in the Rear Garden of Kaifeng Imperial
            Palace. It is not a combat dungeon; it is a scroll-review activity where your Finance / Farming
            Affairs remarks are graded for rewards.
          </p>
          <div className="rounded-2xl border border-amber-300/30 bg-slate-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Best use of this page</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Use the Finance table below when you are stuck on the first Imperial Decree volume or trying to
              convert a clear grade into an S-grade reward run.
            </p>
          </div>
        </aside>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">More screenshots</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">Finance and Palace exploration checkpoints.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            After you open the scroll review, use these screens to confirm that you are in the Finance volume and that the
            activity is counting toward the Imperial Palace exploration checklist.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {extraVisuals.map((item) => (
            <figure key={item.title} className={imageCardClass}>
              <ZoomableGuideImage
                src={item.image.src}
                alt={item.image.alt}
                width={728}
                height={item.height}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-slate-800 px-4 py-3">
                <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="finance-video" className="grid gap-5 rounded-3xl border border-amber-400/25 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Video walkthrough</p>
          <h2 className="text-2xl font-bold text-slate-50">Finance Imperial Decree solution video.</h2>
          <p className="text-sm leading-6 text-slate-300">
            Watch this route if you want to see the Finance volume flow before matching the answer meanings below.
            It pairs well with the S-grade intent table because the video shows where the prompts appear in-game.
          </p>
          <a
            href={financeVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-full border border-amber-300/60 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:text-white"
          >
            Open on YouTube
          </a>
        </div>
        <LiteYouTubeEmbed
          videoId={financeVideo.id}
          title={financeVideo.title}
          poster={images.financeVolume.src}
          analytics={{
            eventName: "video_play",
            params: { page: "imperial_decree", placement: "finance_video", video_topic: "finance_solution" },
          }}
        />
      </section>

      <section className="space-y-5 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Finance volume</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">Imperial Decree Finance S answer meanings.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            These are phrased as answer meanings rather than copied scripts, because the game may accept
            slightly different manual wording. If an emote response misses S, retry with a direct typed remark
            that matches the intent below.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Prompt</th>
                <th className="px-4 py-3">S-grade intent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {financeAnswers.map((row) => (
                <tr key={row.prompt}>
                  <td className="px-4 py-3 font-semibold text-slate-50">{row.prompt}</td>
                  <td className="px-4 py-3 leading-6">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className={`${imageCardClass} mx-auto max-w-[728px]`}>
          <ZoomableGuideImage
            src={images.location.src}
            alt={images.location.alt}
            width={728}
            height={370}
            sizes="(min-width: 1024px) 72vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="px-4 py-3 text-xs leading-5 text-slate-400">
            Imperial Decree is tracked as a Palace exploration / Sentient Beings activity, so the location pin matters for completion.
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <h2 className="text-2xl font-bold text-slate-50">Imperial Decree rewards.</h2>
          <div className="space-y-3">
            {rewardRows.map((row) => (
              <div key={row.target} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-sm font-semibold text-slate-50">{row.target}</p>
                <p className="mt-1 text-sm text-emerald-200">{row.reward}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <h2 className="text-2xl font-bold text-slate-50">Common blockers.</h2>
          <div className="space-y-3">
            {blockers.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
        <h2 className="text-2xl font-bold text-slate-50">Imperial Decree FAQ.</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
        <h2 className="text-xl font-bold text-slate-50">Related Version 1.7 guides.</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link href="/guides/patch-notes" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm font-semibold text-emerald-200 hover:border-emerald-300/60">
            Patch notes and Version 1.7 tracker
          </Link>
          <Link href="/news" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm font-semibold text-emerald-200 hover:border-emerald-300/60">
            Official news and roadmap hub
          </Link>
          <Link href="/tools/interactive-map" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm font-semibold text-emerald-200 hover:border-emerald-300/60">
            Interactive map
          </Link>
        </div>
      </section>
    </article>
  );
}
