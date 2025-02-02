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
        data-cookieconsent="statistics"
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        data-cookieconsent="statistics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });

            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
              client_storage: 'none',
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              restricted_data_processing: true
            });
          `
        }}
      />
    </>
  );
} 