'use client';

import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';
import { useEffect, useState } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    setIsConsented(getCookieConsent());
  }, []);

  if (!GA_ID || !isConsented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `
        }}
      />
    </>
  );
} 