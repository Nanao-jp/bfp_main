'use client';

import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';
import { useEffect, useState } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function GoogleAnalytics() {
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    setIsConsented(getCookieConsent());
  }, []);

  if (!GTM_ID || !isConsented) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // 初期プライバシー設定
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'security_storage': 'granted',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'wait_for_update': 500
            });

            // GTMの非同期読み込み
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s);
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
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