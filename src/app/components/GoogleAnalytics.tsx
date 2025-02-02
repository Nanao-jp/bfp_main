'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    
    const hasConsent = getCookieConsent();
    if (!hasConsent) return;

    const handleRouteChange = () => {
      if (!window.gtag) return;

      // ページビューの送信
      const url = pathname + (searchParams?.toString() || '');
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
              anonymize_ip: true,
              client_storage: 'none',
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              storage: 'none',
              storeGac: false,
              cookieExpires: 0,
              restrictDataProcessing: true
            });
          `,
        }}
      />
    </>
  );
} 