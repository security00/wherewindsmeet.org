import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet Hub Terms of Use & Guidelines",
  description:
    "Review the Where Winds Meet fan hub terms of use, content guidelines, disclaimers, and contact details for support@wherewindsmeet.org before using the site.",
  alternates: {
    canonical: "https://wherewindsmeet.org/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-relaxed text-slate-200 shadow-lg shadow-slate-950/60 sm:p-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Terms of use for the Where Winds Meet fan hub.
        </h1>
        <p className="text-sm text-slate-300">
          These terms govern your access to and use of this unofficial Where
          Winds Meet fan site. They are intended to keep the experience clear,
          respectful, and sustainable for everyone who reads guides, watches
          embedded videos, or shares the site with friends.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Unofficial status and relationship to the game.
        </h2>
        <p>
          This site is an independent fan project focused on Where Winds Meet
          guides, tier lists, builds, codes, and related information. It is not
          affiliated with, sponsored by, or endorsed by the game&apos;s
          publisher or developers. All trademarks, logos, and game assets
          referenced remain the property of their respective owners.
        </p>
        <p>
          Any opinions, recommendations, or rankings expressed on this site are
          the views of the fan hub maintainers and contributors, not official
          statements from the creators of Where Winds Meet. Always refer to
          official channels for authoritative information about the game,
          including support policies, store purchases, and server operations.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          2. Using the site and its content.
        </h2>
        <p>
          You are welcome to browse the site, read guides, and watch embedded
          videos for personal, non-commercial use. You may share links to pages
          with friends, stream viewers, or community groups as long as you do so
          in a way that does not misrepresent the site as official or claim
          ownership over the content.
        </p>
        <p>
          Copying significant portions of guides, tier lists, or other written
          material for reposting elsewhere is discouraged. If you quote or adapt
          parts of the content, please provide clear attribution and a link back
          to the relevant page. This helps other players find the full context
          and up-to-date versions of the information they are reading.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          3. No account system and limited user input.
        </h2>
        <p>
          At the moment, this fan hub does not offer account registration,
          public comments, or an in-site forum. That means you do not need to
          create a profile or log in to use the site, and there is no direct
          mechanism for posting user-generated content such as screenshots,
          builds, or discussions.
        </p>
        <p>
          If new interactive features are added in the future, such as a
          comment system or feedback forms, additional rules may apply to how
          those features should be used. Any such changes will be reflected in
          updated terms of use and, where relevant, an updated privacy policy.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Embedded content and external links.
        </h2>
        <p>
          Many guides and overview pages embed third-party content, including
          gameplay videos hosted on platforms such as YouTube. Interacting with
          these embeds may be subject to the terms of use and privacy policies
          of those external services. This fan hub does not control the
          behavior, availability, or policies of those platforms.
        </p>
        <p>
          The site may also link to official Where Winds Meet websites, forums,
          and social channels, as well as to general gaming resources. These
          links are provided for convenience and context. Visiting them means
          you are leaving this site and entering environments with their own
          terms and rules. You are responsible for reviewing and complying with
          those separate terms if you choose to use those services.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          5. Reliability and accuracy of information.
        </h2>
        <p>
          The game Where Winds Meet is likely to evolve over time through
          patches, balance updates, and new content. While reasonable effort is
          made to keep guides, tier lists, builds, and codes pages current, the
          information on this site may occasionally become outdated or
          incomplete as the game changes.
        </p>
        <p>
          All content is provided on an &quot;as is&quot; basis, without
          warranties of any kind. You should treat the site as a helpful
          companion for planning your play, not as a guaranteed source of
          perfect or permanent answers. Before making important decisions, such
          as real-money purchases or major in-game commitments, consider
          double-checking details with official sources or multiple community
          perspectives.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          6. Limitation of liability.
        </h2>
        <p>
          Because this is a fan-run information site, it cannot guarantee
          uninterrupted availability, compatibility with every device, or
          complete freedom from errors. To the fullest extent permitted by law,
          the maintainers of this site will not be liable for any indirect or
          consequential damages arising from your use of the site, including but
          not limited to lost progress, missed rewards, or misinterpreted build
          recommendations.
        </p>
        <p>
          Nothing in these terms is intended to exclude or limit any rights you
          may have under the laws that apply in your place of residence if those
          laws do not allow such exclusions or limitations. If a particular
          clause is found to be unenforceable, the remaining provisions should
          still be interpreted in a way that reflects their original intent.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          7. Contact and feedback.
        </h2>
        <p>
          If you spot an error in a guide, disagree with a tier list placement,
          or have concerns about how the site presents information, you are
          welcome to reach out. You can contact the maintainers by email at{" "}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="text-emerald-300 hover:text-emerald-200"
          >
            support@wherewindsmeet.org
          </a>
          . Please keep in mind that this is a fan project, so response times
          may vary, but feedback is appreciated and may inform future updates.
        </p>
        <p>
          By sending feedback, you grant permission for non-confidential
          suggestions to be used to improve the site, including incorporating
          ideas into future guides or interface changes. This does not grant any
          rights over your own original creative works, such as videos, fan art,
          or extensive written content, which remain yours.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          8. Changes to these terms.
        </h2>
        <p>
          These terms may be updated from time to time, for example when new
          features are added to the site or when legal requirements change. The
          updated version will be posted on this page with a revised description
          so you can see what has changed.
        </p>
        <p>
          Continuing to use the site after changes are posted means you accept
          the updated terms. If you do not agree with a particular update, you
          can choose to stop using the site. For questions about specific
          changes, you can always contact{" "}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="text-emerald-300 hover:text-emerald-200"
          >
            support@wherewindsmeet.org
          </a>
          .
        </p>
      </section>

      <footer className="border-t border-slate-800 pt-4 text-xs text-slate-400">
        <p>
          These terms are meant to provide a clear, player-friendly explanation
          of how this Where Winds Meet fan hub is intended to be used. They do
          not replace any rights or obligations set out in the official terms of
          service for the game itself or for any third-party services linked or
          embedded on this site.
        </p>
        <p className="mt-2">
          For a description of how information may be handled when you use the
          site, please also review the{" "}
          <Link
            href="/privacy"
            className="text-emerald-300 hover:text-emerald-200"
          >
            privacy policy
          </Link>
          .
        </p>
        <p className="mt-2">
          You can return to the{" "}
          <Link
            href="/"
            className="text-emerald-300 hover:text-emerald-200"
          >
            Where Winds Meet hub homepage
          </Link>{" "}
          at any time.
        </p>
      </footer>
    </article>
  );
}

