'use client';

import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function GoogleAnalytics() {
  if (!GTM_ID || !getCookieConsent()) {
    return null;
  }

  return (
    <>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'analytics_storage': 'granted',
              'ad_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'restrict_third_party_cookies': true,
              'cookie_domain': 'bigfighterproject.com'
            });
          `
        }}
      />
      <Script
        id="gtm-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
          `
        }}
      />
      <Script
        id="gtm"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}&gtm_auth=&gtm_preview=&gtm_cookies_win=x`}
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