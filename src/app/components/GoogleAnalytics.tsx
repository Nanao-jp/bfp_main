'use client';

import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  // 同意がない場合は何も読み込まない
  if (!GA_ID || !getCookieConsent()) return null;

  // 最小限の設定でGAを読み込む
  return (
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: false,
            client_storage: 'none',
            anonymize_ip: true,
            restricted_data_processing: true
          });
        `
      }}
    />
  );
} 