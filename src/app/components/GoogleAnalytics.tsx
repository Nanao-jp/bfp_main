'use client';

import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function GoogleAnalytics() {
  if (!GA_ID || !getCookieConsent()) {
    return null;
  }

  return (
    <>
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=Strict;Secure',
              cookie_expires: 7200,
              restricted_data_processing: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `
        }}
      />
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
    </>
  );
} 