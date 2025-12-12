"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-CELX735FQH";
const ADSENSE_ID = "ca-pub-1548791648803369";

export function Analytics() {
  const isProd = process.env.NODE_ENV === "production";

  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!isProd) return;
    // Defer heavy third-party scripts until the user interacts or the page goes idle.
    let activated = false;
    const events = ["pointerdown", "scroll", "keydown", "touchstart"];

    const enable = () => {
      if (activated) return;
      activated = true;
      setShouldLoad(true);
      cleanup();
    };

    const timer = window.setTimeout(enable, 4000);
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(enable, { timeout: 5000 })
        : null;

    const cleanup = () => {
      events.forEach((event) => window.removeEventListener(event, enable));
      window.clearTimeout(timer);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };

    events.forEach((event) => window.addEventListener(event, enable, { passive: true }));

    return cleanup;
  }, [isProd]);

  if (!isProd || !shouldLoad) return null;

  return (
    <>
      {/* Google Adsense */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />

      {/* Google Analytics (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="ms-clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "u71v7r3oy3");
        `}
      </Script>
    </>
  );
}
