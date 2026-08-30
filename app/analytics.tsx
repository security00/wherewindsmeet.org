"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useConsentPreferences } from "@/components/useConsentPreferences";

const GA_MEASUREMENT_ID = "G-CELX735FQH";
const ADSENSE_ID = "ca-pub-1548791648803369";
const PLAUSIBLE_SCRIPT_SRC = "https://plausible.shipsolo.io/js/pa-ygCIsSexYA3JT_gyd8Ht4.js";

const ANALYTICS_SCRIPT_IDS = [
  "ga4-loader",
  "ga4-init",
  "plausible-script",
  "plausible-init",
  "ms-clarity",
];

function expireFirstPartyCookies(prefixes: string[]) {
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim();
    if (!name || !prefixes.some((prefix) => name === prefix || name.startsWith(prefix))) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.wherewindsmeet.org; SameSite=Lax`;
  }
}

function removeScripts(ids: string[]) {
  for (const id of ids) document.getElementById(id)?.remove();
}

function removeScriptsBySource(sourceFragment: string) {
  document
    .querySelectorAll<HTMLScriptElement>(`script[src*="${sourceFragment}"]`)
    .forEach((script) => script.remove());
}

export function Analytics() {
  const isProd = process.env.NODE_ENV === "production";
  const { consent } = useConsentPreferences();
  const hasAnalyticsConsent = consent?.analytics === true;
  const hasAdsConsent = consent?.ads === true;
  const [analyticsReady, setAnalyticsReady] = useState(false);

  useEffect(() => {
    if (!isProd || !hasAnalyticsConsent) return;
    let cancelled = false;
    const timeoutId = window.setTimeout(() => {
      if (!cancelled) setAnalyticsReady(true);
    }, 2500);
    const idleId = window.requestIdleCallback?.(
      () => {
        window.clearTimeout(timeoutId);
        if (!cancelled) setAnalyticsReady(true);
      },
      { timeout: 4500 },
    );

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      if (idleId) window.cancelIdleCallback?.(idleId);
    };
  }, [hasAnalyticsConsent, isProd]);

  useEffect(() => {
    if (hasAnalyticsConsent) return;
    removeScripts(ANALYTICS_SCRIPT_IDS);
    removeScriptsBySource("clarity.ms/tag/");
    expireFirstPartyCookies(["_ga", "_clck", "_clsk"]);
  }, [hasAnalyticsConsent]);

  useEffect(() => {
    if (hasAdsConsent) return;
    removeScripts(["adsense-loader"]);
    removeScriptsBySource("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    expireFirstPartyCookies(["_gads", "_gpi", "__gads", "__gpi"]);
  }, [hasAdsConsent]);

  if (!isProd) return null;

  const shouldLoadTelemetry = hasAnalyticsConsent && analyticsReady;

  return (
    <>
      {hasAdsConsent ? (
        <Script
          id="adsense-loader"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      ) : null}

      {shouldLoadTelemetry ? (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {anonymize_ip: true});
            `}
          </Script>

          <Script
            id="plausible-script"
            async
            src={PLAUSIBLE_SCRIPT_SRC}
            strategy="afterInteractive"
          />
          <Script id="plausible-init" strategy="afterInteractive">
            {`
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init();
            `}
          </Script>

          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u71v7r3oy3");
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
