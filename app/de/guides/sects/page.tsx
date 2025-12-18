import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Sekten – Fraktionen, Ideale & Spielstile (DE)",
  description:
    "Deutscher Überblick zu den wichtigsten Sekten in Where Winds Meet: Philosophie, typische Rollen und welcher Spielstil dazu passt – mit Ingame-Artwork.",
  alternates: buildHreflangAlternates("/guides/sects", { canonicalLanguage: "de" }),
};

type SectId =
  | "tianquan"
  | "qingxi"
  | "sangengtian"
  | "jiuliumen"
  | "kuanglan"
  | "liyuan"
  | "guyun"
  | "zuihuayin"
  | "wenjinguan"
  | "wuxingu"
  | "moshandao";

type Sect = {
  id: SectId;
  name: string;
  tagline: string;
  roleHint: string;
  description: string;
  image: string;
};

const sects: Sect[] = [
  {
    id: "tianquan",
    name: "Tianquan",
    tagline: "Klingen fürs Gewissen – nicht für Kronen.",
    roleHint: "Rechtschaffene Outlaws, Kämpfer für Gerechtigkeit.",
    description:
      "Tianquan weigert sich, die Klinge von Königen oder Händlern zu sein. Ihr Leitsatz ist schlicht: Versagt das Gesetz am Volk, muss das Messer sprechen. Sie nehmen den Korrupten, schützen die Wehrlosen und richten über sich selbst strenger als jedes Gericht. Tianquan passt, wenn du einen moralischen Kompass willst, der eher auf „keine Reue“ zeigt als auf makellose Reputation – mit harten Entscheidungen, riskanten Gefallen und Kämpfen, die man führt, weil es sonst niemand tut.",
    image: "/sect/tianquan.png",
  },
  {
    id: "qingxi",
    name: "Qingxi",
    tagline: "Ärzte, die Herzen ebenso wie Wunden abwägen.",
    roleHint: "Heiler, Supporter und moralische Fragesteller.",
    description:
      "Qingxi versteht Medizin als mehr als Kräuter und Nadeln: als Kunst, Herzen zu lesen – in einer Welt, die selten in gutem Glauben handelt. Für jedes gerettete Leben verlangen sie einen Preis, nicht aus Gier, sondern als Erinnerung daran, dass Heilung Konsequenzen hat. Qingxi passt, wenn du Geschichten über Triage, unmögliche Entscheidungen und Standhaftigkeit magst – gerade dann, wenn Patienten und Herrscher dich zum Werkzeug machen wollen.",
    image: "/sect/qingxi.png",
  },
  {
    id: "sangengtian",
    name: "Sangeng Sky",
    tagline: "Wandler der Mitternacht – sie tragen die Hölle anderer.",
    roleHint: "Assassinen mit der Last eines Mönchs.",
    description:
      "Sangeng-Jünger gehen freiwillig in die schmutzigsten Ecken der Welt. In Zeiten der Korruption glauben sie, dass leise Klingen und bitterer Entschluss manchmal die letzte Form von Barmherzigkeit sind. Karma tragen sie wie Ketten und tauschen den eigenen Seelenfrieden gegen die Chance, andere vor endlosem Leid zu bewahren. Diese Sekte passt, wenn dich Stealth, gezielte Ausschaltungen und das Spannungsfeld „notwendiges Übel“ reizt.",
    image: "/sect/sangengtian.png",
  },
  {
    id: "jiuliumen",
    name: "Jiuliu Sect",
    tagline: "Der Markt vergisst nicht, was Paläste verdrängen.",
    roleHint: "Gauner, Fixer, soziale Chamäleons.",
    description:
      "Jiuliu ist in Gassen, Spielhöllen und Nachtmärkten verwurzelt. Für sie spiegeln die Straßen das Reich wahrhaftiger als jeder Jadethron. Sie nehmen Ausreißer, Trickser und all jene auf, die gelernt haben, zwischen Regeln zu überleben statt unter ihnen. Jiuliu passt, wenn du Nebenjobs, Graumoral und Allianzen magst, die eher wie Deals wirken als wie Schwüre.",
    image: "/sect/jiuliumen.png",
  },
  {
    id: "kuanglan",
    name: "Kuanglan",
    tagline: "Ein Grenzschild, das nie abgelegt wird.",
    roleHint: "Soldatenmönche, Frontlinien wie eine Mauer.",
    description:
      "Kuanglan wurde aus dem Militär geboren und gehörte nie ganz zum Hof oder zum Jianghu. Seit Generationen halten sie die fernen Grenzen – meist außer Sicht, oft vergessen – weniger geführt von Befehlen als von einem alten Versprechen, einfache Menschen zu schützen. Kuanglan fühlt sich an wie Pflicht statt Ruhm: Man stabilisiert Fronten, erträgt harte Feldzüge und misst den eigenen Wert an geretteten Leben, nicht an Titeln.",
    image: "/sect/kuanglan.png",
  },
  {
    id: "liyuan",
    name: "Liyuan",
    tagline: "Schauspieler, deren Lächeln tiefer schneidet als Stahl.",
    roleHint: "Illusionisten, soziale Manipulatoren, stilvolle Duellanten.",
    description:
      "Liyuan behauptet, keine Schwerter zu führen – doch ihre Auftritte können Ruf und Rang sauberer stürzen als jedes Attentat. Ihre Waffen sind Seide, Make-up, Gerüchte und perfekt getimte Gesten. Auf der Bühne geben sie den Narren, abseits davon erkennen sie jede Maske. Liyuan passt, wenn du Täuschung, große Szenen und Kämpfe magst, in denen Finte, Lied oder Kostümwechsel so viel zählt wie der entscheidende Treffer.",
    image: "/sect/liyuan.png",
  },
  {
    id: "guyun",
    name: "Lonely Cloud",
    tagline: "Schwertkämpfer, die selbst mit dem Schicksal streiten.",
    roleHint: "Präzisionsduellanten und Taktiker.",
    description:
      "Lonely Cloud glaubt, dass hinter jedem Schlagabtausch ein Muster liegt – wer es lesen kann, schneidet direkt durch das Schicksal. Ihre Schwertkunst ist weniger Zierde als Timing: ein Schritt, ein Ziehen, eine unumkehrbare Entscheidung. Diese Sekte passt, wenn du Eins-gegen-Eins-Duelle, enges Spacing und die Fantasie magst, der Ungerechtigkeit der Welt mit einem einzigen makellosen Schnitt zu antworten.",
    image: "/sect/guyun.png",
  },
  {
    id: "zuihuayin",
    name: "Drunken Flowers",
    tagline: "Parfüm, Gift und Feste, die Intrigen überdauern.",
    roleHint: "Gesellschaftstalente, Spione, flexible Supports.",
    description:
      "An der Oberfläche ist Drunken Flowers nur Blüten und Lachen – Kupplerei, Bankette, halbe Geheimnisse. Darunter kann jeder Tanzschritt und jeder Becher Wein Teil eines langen Spiels sein. Sie leben von Verstrickungen: Liebe, Schulden, Erpressung und echte Zuneigung fließen ineinander. Drunken Flowers passt, wenn du Rollenspiel, Intrigen und Builds magst, die zwischen Charme und Gefahr verschwimmen.",
    image: "/sect/zuihuayin.png",
  },
  {
    id: "wenjinguan",
    name: "Wenjin Pavilion",
    tagline: "Klingen auf dem Tisch, Schriftrollen im Regal.",
    roleHint: "Gelehrte Krieger, Ermittler, Archivare.",
    description:
      "Wenjin Pavilion ist weder ganz Hofbeamter noch wandernder Held. Sie sammeln Geschichten, Gesetze und Schlachtberichte – und entscheiden dann leise, wie das nächste Kapitel aussehen soll. Eine einzige Zeile in ihren Akten kann das Schicksal einer Stadt so sicher ändern wie ein Duell vor den Mauern. Diese Sekte passt, wenn du Rätsel, Ermittlungsquests und die Fantasie magst, Kämpfe mit Informationen ebenso zu gewinnen wie mit Stahl.",
    image: "/sect/wenjinguan.png",
  },
  {
    id: "wuxingu",
    name: "Heartless Valley",
    tagline: "Meister der Gifte, die im Kopf beginnen.",
    roleHint: "Debuff-Spezialisten und High-Risk-Experimentierer.",
    description:
      "Heartless Valley weiß: Die tödlichsten Gifte werden nicht im Kessel gebraut, sondern ins Herz geflüstert. Sie leben zwischen vergessenen Gräbern und verlassenen Schluchten – gefürchtet sowohl für ihre Abgeschiedenheit als auch für ihr Handwerk. Ihre Kunst kann retten oder brechen, je nachdem, was der „Patient“ wirklich will. Diese Sekte passt, wenn du Damage-over-Time, Kontrolle und Stories magst, die fragen, ob man die Welt heilt – oder ihren Verfall nur beschleunigt.",
    image: "/sect/wuxingu.png",
  },
  {
    id: "moshandao",
    name: "Moshandaos",
    tagline: "Ingenieure versteckter Wege und Träume gen Himmel.",
    roleHint: "Tüftler, Fallensteller, Movement-Fans.",
    description:
      "Moshan Dao meißelt Zufluchten in steile Klippen und versteckt Mechanismen in scheinbar schlichtem Stein. Sie träumen von einer Zukunft, in der Brücken, Gleiter und Flugmaschinen das Leben so stark verändern wie jede Kampfkunst. Diese Sekte passt, wenn du Plattforming, Apparaturen und leichte Rätsel magst – und gerne das Terrain selbst zur Waffe oder zur Fluchtroute machst.",
    image: "/sect/moshandao.png",
  },
];

export default function SectsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet Sekten Hintergrundbild"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Sekten in Where Winds Meet – auf wessen Seite du stehst.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Sekten in Where Winds Meet sind mehr als Skilltrees. Sie sind Weltanschauungen, soziale Kreise und langfristige Story-Stränge, die auf Waffen
            und Innerer Kunst aufbauen. Ausführliche Community-Guides (TC) vergleichen sie seitenlang – diese Seite fasst den Kern kompakt zusammen, damit
            du zuerst nach Gefühl wählen kannst und später optimierst.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Jede Sekte unten beantwortet drei Fragen:{" "}
            <span className="font-semibold">Woran glauben sie?</span>,{" "}
            <span className="font-semibold">Wie leben oder kämpfen sie typischerweise?</span> und{" "}
            <span className="font-semibold">welcher Spielertyp fühlt sich dort meist zu Hause?</span>. Sieh das als Stimmungsbild, nicht als harte
            Einschränkung – dein Charakter kann sowohl die Sekte als auch die Welt überraschen.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Eine Sekte wählen, die zu deiner Geschichte passt.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Wenn du deinen ersten Charakter noch aufbaust, sollte die Sektenwahl keine „Falle“ sein. Viele Community-Guides empfehlen, zuerst nach
          Fantasy/Feeling zu wählen und sich erst später um maximal optimierte Setups zu kümmern. Builds lassen sich anpassen – eine lange Story in einer
          Gruppe, die dir nie gefallen hat, dagegen kaum.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Ein einfacher Ansatz: Überleg dir,{" "}
          <span className="font-semibold">was dir außerhalb des Kampfes Spaß macht</span>, und wähl eine Sekte, deren Alltag dazu passt – Fremde heilen,
          Gerüchte in Tavernen jagen, Karten/Mechaniken studieren oder still eine Grenze sichern. Der Rest deines Toolkits ergibt sich oft ganz
          natürlich.
        </p>
      </section>

      <section className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2 xl:grid-cols-3">
        {sects.map((sect) => (
          <article
            key={sect.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60"
          >
            <div className="relative h-32 w-full overflow-hidden bg-slate-900/80 sm:h-40">
              <CdnImage
                src={sect.image}
                alt={sect.name}
                fill
                className="object-cover object-center opacity-90"
                sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {sect.name}
                </h3>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                  {sect.roleHint}
                </span>
              </div>
              <p className="text-xs font-medium text-emerald-200">
                {sect.tagline}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">
                {sect.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
