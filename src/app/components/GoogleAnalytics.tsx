'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !GTM_ID) return;
    
    const hasConsent = getCookieConsent();
    if (!hasConsent) return;

    const handleRouteChange = () => {
      if (!window.dataLayer) return;

      // ページビューの送信
      const url = pathname + (searchParams?.toString() || '');
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        ga_measurement_id: GA_MEASUREMENT_ID
      });
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID || !GTM_ID) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
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