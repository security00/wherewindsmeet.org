import type { Metadata } from "next";
import Link from "next/link";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const path = "/guides/inn-character-record";
const title = "Inn Character Record Answers for Mount Tai Blizzard | Where Winds Meet";
const description = "Check the ten guest records one at a time. Find each guest’s name, occupation, killer and cause of death, with help for the two Wei choices.";

export const metadata: Metadata = {
  title,
  description,
  alternates: buildHreflangAlternates(path),
  openGraph: { title, description, type: "article", url: `https://wherewindsmeet.org${path}` },
};

// Case-file order. Occupations and causes are English descriptions of the choices.
const guests = [
  ["001", "Scholar", "Jian Xingzhi", "Inkbound Order disciple", "Qi Zhiheng", "Suffocation"],
  ["002", "Reticent Patron", "Gao Sheng", "Imperial attendant", "Wei Ang", "Arrow to the heart"],
  ["003", "Old Woman", "Gao Muchun", "Palace maid", "Murong Qiu", "Stab wound to the chest"],
  ["004", "Steadfast Warrior", "Tantai Jiming", "Constable", "Gao Sheng", "Stab wound to the back"],
  ["005", "Young Woman", "Taohua (no surname)", "Courtesan", "Gao Muchun", "Snakebite"],
  ["006", "Kind Man", "Geshu Di", "Turk", "Murong Qiu", "Blow to the head"],
  ["007", "Drinking Man", "Wei Ang", "Bandit", "Gao Muchun", "Poison"],
  ["008", "Innkeeper", "Murong Qiu", "Shadow assassin", "Fiend", "Blade to the throat"],
  ["009", "Young Patron", "Qi Zhiheng", "Merchant", "Zhi Yuyan", "Fire"],
  ["010", "Drunken Patron", "Zhi Yuyan", "Demoted official", "Zhi Yuyan", "Fire"],
] as const;

export default function InnCharacterRecordPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-7 text-slate-200">
      <header className="space-y-3">
        <Link href="/guides/mount-tai-blizzard" className="text-emerald-300 underline">Mount Tai Blizzard campaign guide</Link>
        <h1 className="text-3xl font-bold text-slate-50 sm:text-4xl">Inn Character Record answers</h1>
        <p>Match the number or guest description on your sheet to a record below. Open just that guest to see the four answers. You can leave “Reason for Visit” blank.</p>
        <a href="#video-walkthrough" className="text-emerald-300 underline">Jump to the video walkthrough</a>
      </header>
      <section aria-label="Answers by guest" className="space-y-2">
        {guests.map(([number, guest, name, occupation, killer, cause]) => (
          <details key={number} id={`guest-${number}`} className="rounded-xl border border-slate-700 bg-slate-950/75">
            <summary className="cursor-pointer p-4 font-semibold text-slate-50"><span className="mr-3 font-mono text-emerald-300">{number}</span>{guest}</summary>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 px-5 pb-4 text-sm">
              <dt>Name</dt><dd>{name}</dd>
              <dt>Occupation</dt><dd>{occupation}</dd>
              <dt>Killer</dt><dd>{killer}</dd>
              <dt>Cause of death</dt><dd>{cause}</dd>
            </dl>
            {number === "007" && <p className="px-5 pb-4 text-sm">If your English dropdown shows two entries called Wei, players report that the second Wei works for the bandit.</p>}
            {number === "008" && <p className="px-5 pb-4 text-sm">Use the killer label shown here for the sheet. The follow-up story adds context to this answer.</p>}
          </details>
        ))}
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Check a clue in the inn</h2>
        <p>To work out a guest yourself, return to the scene from the Case Room. Walk around the frozen moment in the Gong-Note Zither and compare what you can see with the letters and keepsakes you collected. If you have already concluded the case, use Reverse to revisit it.</p>
      </section>
      <section id="video-walkthrough" aria-labelledby="walkthrough-title" className="scroll-mt-24 space-y-3">
        <h2 id="walkthrough-title" className="text-2xl font-semibold">Inn Character Record video walkthrough</h2>
        <p>ChromaGlitch’s walkthrough starts here at 46:22, when the guest record answers begin.</p>
        <LiteYouTubeEmbed
          videoId="C4-qzxGR5So"
          start={2782}
          title="ChromaGlitch’s Mount Tai Blizzard Inn Character Record walkthrough"
          analytics={{ eventName: "guide_video_play", params: { guide: "inn-character-record", start_seconds: 2782 } }}
        />
      </section>
      <footer className="space-y-2 border-t border-slate-800 pt-4 text-sm text-slate-400">
        <p>Answer fields are summarized in English from the <a className="underline" href="https://www.gamingdeputy.com/france/where-winds-meet-mont-tai-blizzard-solution/">Gamingdeputy guest guide</a>. Wording can vary by client language. The duplicate Wei choice is documented in a <a className="underline" href="https://www.reddit.com/r/WhereWindsMeet/comments/1xjt7k5/spoilers_for_mount_tai_blizzard_campaign/">player’s replay notes (story spoilers)</a>.</p>
        <p>Investigation mechanics: <a className="underline" href="https://www.wherewindsmeetgame.com/news/official/1028devletter.html">October 28 developer letter</a>.</p>
      </footer>
    </article>
  );
}
