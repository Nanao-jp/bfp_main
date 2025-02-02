'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// 初期データレイヤーの設定
const initialDataLayer = {
  page_type: 'default',
  user_consent: false,
  ga_measurement_id: GA_MEASUREMENT_ID,
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // データレイヤーの初期化
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(initialDataLayer);
    }

    if (!GA_MEASUREMENT_ID || !GTM_ID) {
      console.warn('Google Analytics または Google Tag Manager の設定が見つかりません。');
      return;
    }
    
    const hasConsent = getCookieConsent();
    if (!hasConsent) {
      window.dataLayer?.push({ user_consent: false });
      return;
    }

    window.dataLayer?.push({ user_consent: true });

    const handleRouteChange = () => {
      try {
        if (!window.dataLayer) {
          console.warn('データレイヤーが初期化されていません。');
          return;
        }

        const url = pathname + (searchParams?.toString() || '');
        window.dataLayer.push({
          event: 'page_view',
          page_path: url,
          page_type: 'default',
          ga_measurement_id: GA_MEASUREMENT_ID
        });
      } catch (error) {
        console.error('ページビューの送信中にエラーが発生しました:', error);
      }
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID || !GTM_ID) return null;

  return (
    <>
      <Script
        id="gtm-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
          `
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('GTMスクリプトの読み込みエラー:', e);
        }}
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              try {
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s);
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                j.onerror = function() {
                  console.error('GTMの読み込みに失敗しました');
                };
                f.parentNode.insertBefore(j,f);
              } catch (error) {
                console.error('GTMの初期化中にエラーが発生しました:', error);
              }
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