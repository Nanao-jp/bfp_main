'use client';

import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function GoogleAnalytics() {
  const hasConsent = getCookieConsent();
  if (!GTM_ID || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        id="gtm-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            document.cookie = 'same-site-cookie=value; SameSite=Lax; Secure';
            window.dataLayer = window.dataLayer || [];
          `
        }}
      />
      <Script
        id="gtm"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
} 