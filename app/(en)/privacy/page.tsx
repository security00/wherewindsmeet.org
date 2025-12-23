import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Hub Privacy Policy & Data",
  description:
    "Read the Where Winds Meet fan hub privacy policy covering what limited data this site handles, how embedded videos work, and how to contact support@wherewindsmeet.org.",
  alternates: buildHreflangAlternates("/privacy"),
};

export default function PrivacyPage() {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-relaxed text-slate-200 shadow-lg shadow-slate-950/60 sm:p-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Privacy policy for the Where Winds Meet fan hub.
        </h1>
        <p className="text-sm text-slate-300">
          This page explains how this unofficial Where Winds Meet fan site
          approaches privacy and data. It is written in plain language so you
          can quickly understand what the site does and does not do with the
          information generated when you browse guides, watch embedded videos,
          or contact us at{" "}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="text-emerald-300 hover:text-emerald-200"
          >
            support@wherewindsmeet.org
          </a>
          .
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Who operates this site.
        </h2>
        <p>
          This website is an independent fan-made hub for Where Winds Meet. It
          is not owned, operated, or endorsed by the game&apos;s publisher or
          developers. References to Where Winds Meet, logos, and other
          trademarks remain the property of their respective owners. The site
          exists to help players find guides, tier lists, builds, codes, and
          related information in one place.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          2. What information this site collects.
        </h2>
        <p>
          The site is designed to be lightweight and does not require you to
          create an account or log in. You can read guides and watch videos
          without providing your name, address, or payment details directly to
          this fan hub. However, like most modern websites, basic technical
          information is generated automatically whenever you access a page.
        </p>
        <p>
          Depending on how the site is hosted, that technical information can
          include your IP address, the pages you viewed, the time of your visit,
          and details about your browser or device. This information is used in
          aggregate to keep the site secure, understand which pages are helpful,
          and make decisions about future content for Where Winds Meet players.
          We do not attempt to use this information to identify you personally.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Cookies, analytics, and similar technologies.
        </h2>
        <p>
          This site may use basic analytics tools to understand how many people
          visit, which pages are popular, and how long readers stay on certain
          sections. When enabled, these tools typically rely on cookies or
          similar identifiers set in your browser. The goal is to measure
          interest in different Where Winds Meet topics so the most useful
          guides can be expanded over time.
        </p>
        <p>
          Any analytics that are added in the future will be configured to focus
          on aggregated trends rather than tracking individuals across the
          internet. If a particular analytics provider offers additional privacy
          controls—such as IP anonymization or opt-out mechanisms—those options
          will be enabled wherever practical. If the analytics setup changes in
          a meaningful way, this privacy policy will be updated to describe that
          change.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Embedded content and third-party services.
        </h2>
        <p>
          Many pages on this site include embedded videos from platforms such as
          YouTube. These embeds exist to show Where Winds Meet gameplay
          highlights, combat showcases, exploration clips, and community
          creations. When you interact with an embedded video, the third-party
          provider may collect data about your usage according to its own
          privacy policy.
        </p>
        <p>
          Where possible, the site uses the{" "}
          <code className="rounded bg-slate-900 px-1 py-0.5 text-xs">
            youtube-nocookie.com
          </code>{" "}
          domain to reduce the number of cookies set before you explicitly
          interact with a video. However, once you press play, the third-party
          service may still set cookies, log your IP address, or link your
          activity to an existing account with that provider. Reviewing those
          services&apos; own privacy policies is the best way to understand how
          they handle your information.
        </p>
        <p>
          Links to external sites—such as official Where Winds Meet pages,
          forums, or social media—are provided for convenience. Visiting those
          links will take you away from this fan hub and into environments with
          their own privacy practices, which may differ significantly from what
          is described here.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          5. Contacting us about privacy.
        </h2>
        <p>
          If you have questions about this privacy policy or how the site
          handles information, you can reach the maintainers at{" "}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="text-emerald-300 hover:text-emerald-200"
          >
            support@wherewindsmeet.org
          </a>
          . Please include enough detail in your message to help us understand
          your concern, such as which page you were visiting and roughly when.
        </p>
        <p>
          While this site is operated as a fan project and may not have the same
          resources as a commercial publisher, reasonable efforts will be made
          to respond to privacy-related questions in a timely manner. If
          responding requires updating this policy—for example, to clarify a
          practice or correct an error—those updates will be made as soon as
          practical.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          6. Children and sensitive information.
        </h2>
        <p>
          The content on this site is aimed at general gaming audiences and does
          not knowingly target children under the age required by local law to
          give independent consent to data processing. Because the site does not
          include account registration, purchases, or comment systems, there is
          no intentional collection of names, addresses, payment information, or
          similarly sensitive details.
        </p>
        <p>
          If you believe that the site has inadvertently collected personal
          information about a child in a way that is inconsistent with this
          description, please contact{" "}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="text-emerald-300 hover:text-emerald-200"
          >
            support@wherewindsmeet.org
          </a>{" "}
          so the situation can be reviewed and appropriate action taken.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          7. Changes to this privacy policy.
        </h2>
        <p>
          As the site evolves, this privacy policy may change. For example, new
          sections may be added if additional analytics tools are introduced or
          if features such as comments or account-based personalization are ever
          implemented. When material changes occur, a note will be added near
          the top of this page indicating when the update took place.
        </p>
        <p>
          Continuing to use the site after an updated privacy policy is posted
          means you accept the revised explanation of how information is
          handled. If you do not agree with a particular change, you can choose
          to stop using the site and, where relevant, clear cookies or adjust
          your browser settings to limit tracking across the web.
        </p>
      </section>

      <footer className="border-t border-slate-800 pt-4 text-xs text-slate-400">
        <p>
          This privacy policy is provided for transparency and general
          informational purposes. It does not replace any rights you may have
          under the laws that apply in your place of residence.
        </p>
        <p className="mt-2">
          For questions about this document, please reach out to{" "}
          <a
            href="mailto:support@wherewindsmeet.org"
            className="text-emerald-300 hover:text-emerald-200"
          >
            support@wherewindsmeet.org
          </a>
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
