"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-CELX735FQH";
const ADSENSE_ID = "ca-pub-1548791648803369";

export function Analytics() {
  const isProd = process.env.NODE_ENV === "production";

  const [shouldLoadAdsense, setShouldLoadAdsense] = useState(false);
  const [shouldLoadTelemetry, setShouldLoadTelemetry] = useState(false);

  useEffect(() => {
    if (!isProd) return;

    // Keep third-party script loading off the critical path to protect INP.
    let cancelled = false;

    const schedule = (run: () => void, delayMs: number, idleTimeoutMs: number) => {
      const timeoutId = window.setTimeout(run, delayMs);
      const idleId =
        typeof window.requestIdleCallback === "function"
          ? window.requestIdleCallback(
              () => {
                window.clearTimeout(timeoutId);
                run();
              },
              { timeout: idleTimeoutMs }
            )
          : null;

      return () => {
        window.clearTimeout(timeoutId);
        if (idleId && typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleId);
        }
      };
    };

    const cleanupAdsense = schedule(() => {
      if (cancelled) return;
      setShouldLoadAdsense(true);
    }, 2000, 4000);

    const cleanupTelemetry = schedule(() => {
      if (cancelled) return;
      setShouldLoadTelemetry(true);
    }, 4500, 6500);

    return () => {
      cancelled = true;
      cleanupAdsense();
      cleanupTelemetry();
    };
  }, [isProd]);

  if (!isProd) return null;

  return (
    <>
      {shouldLoadAdsense ? (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      ) : null}

      {shouldLoadTelemetry ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
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
