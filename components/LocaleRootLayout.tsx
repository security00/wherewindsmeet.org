import type { ReactNode } from "react";
import { preconnect } from "react-dom";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@/app/analytics";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import { ConsentManager } from "@/components/ConsentManager";
import { LanguageSwitchPrompt } from "@/components/LanguageSwitchPrompt";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getMessages, type LocaleCode } from "@/i18n/messages";

const htmlLang: Record<LocaleCode, string> = {
  en: "en-US",
  vi: "vi-VN",
  de: "de-DE",
};

export async function LocaleRootLayout({
  locale,
  children,
}: {
  locale: LocaleCode;
  children: ReactNode;
}) {
  const messages = await getMessages(locale);
  preconnect("https://static.wherewindsmeet.org", { crossOrigin: "anonymous" });

  return (
    <html lang={htmlLang[locale]}>
      <body className="antialiased text-slate-50 bg-slate-950">
        <script
          id="cdn-image-fallback"
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            function applyFallback(img) {
              if (!img) return;
              var fallbackSrc = img.getAttribute('data-fallback-src');
              if (!fallbackSrc) return;
              if (img.getAttribute('data-fallback-applied') === 'true') return;
              if (img.getAttribute('src') === fallbackSrc) return;
              img.setAttribute('data-fallback-applied', 'true');
              img.removeAttribute('srcset');
              img.setAttribute('src', fallbackSrc);
            }

            window.addEventListener('error', function (event) {
              var target = event && event.target;
              if (!target || !target.tagName || target.tagName !== 'IMG') return;
              applyFallback(target);
            }, true);
          })();
        `,
          }}
        />
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          formats={{}}
          now={new Date()}
          timeZone="UTC"
        >
          <Analytics />
          <ConsentManager />
          <BackgroundWrapper />

          <div className="relative min-h-screen z-10">
            <SiteHeader />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <LanguageSwitchPrompt />
            </div>

            <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
              {children}
            </main>

            <SiteFooter />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
