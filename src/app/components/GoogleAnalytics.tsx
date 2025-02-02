'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { getCookieConsent } from '../utils/cookieManager';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// 環境変数のデバッグ
console.log('Environment Variables:', {
  GA_MEASUREMENT_ID,
  GTM_ID,
  NODE_ENV: process.env.NODE_ENV
});

// デバッグ用：スクリプトの読み込みを監視
const monitorScripts = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'SCRIPT') {
          const script = node as HTMLScriptElement;
          console.log('Script loaded:', {
            src: script.src,
            type: script.type,
            async: script.async,
            defer: script.defer
          });
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  return observer;
};

// デバッグ用：Cookieの変更を監視
const monitorCookies = () => {
  let lastCookies = document.cookie;
  
  setInterval(() => {
    const currentCookies = document.cookie;
    if (currentCookies !== lastCookies) {
      console.log('Cookie changed:', {
        old: lastCookies,
        new: currentCookies,
        timestamp: new Date().toISOString()
      });
      lastCookies = currentCookies;
    }
  }, 1000);
};

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
    // デバッグ用の監視を開始
    const scriptObserver = monitorScripts();
    monitorCookies();

    // クリーンアップ
    return () => {
      scriptObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // データレイヤーの初期化（同意状態に関係なく実行）
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(initialDataLayer);

      // Cookieの制御を強化
      const restrictCookies = () => {
        const cookies = document.cookie.split(';');
        console.log('Current cookies before restriction:', cookies);

        cookies.forEach(cookie => {
          const [name] = cookie.split('=');
          if (name.trim().startsWith('_ga') || 
              name.trim().startsWith('_gid') || 
              name.trim().startsWith('_gat') ||
              name.trim().startsWith('COMPASS') ||
              name.trim().startsWith('__Secure-OSID')) {
            try {
              document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
              document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
              document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
              console.log(`Attempted to remove cookie: ${name}`);
            } catch (error) {
              console.error(`Failed to remove cookie ${name}:`, error);
            }
          }
        });

        console.log('Cookies after restriction:', document.cookie.split(';'));
      };

      // 同意がない場合はCookieを制限
      const hasConsent = getCookieConsent();
      console.log('Cookie consent status:', hasConsent);
      
      if (!hasConsent) {
        restrictCookies();
      }
    }

    if (!GA_MEASUREMENT_ID || !GTM_ID) {
      console.warn('Google Analytics または Google Tag Manager の設定が見つかりません。');
      return;
    }
    
    const hasConsent = getCookieConsent();
    window.dataLayer?.push({
      event: hasConsent ? 'consent_granted' : 'consent_denied',
      user_consent: hasConsent
    });

    if (!hasConsent) return;

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
        onLoad={() => {
          console.log('GTM init script loaded');
        }}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            // サードパーティCookieをブロック
            document.cookie = 'same-site-cookie=value; SameSite=Lax; Secure';
            
            // デフォルトですべてのストレージを無効化
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'denied'
            });

            // Cookieの設定を制限
            gtag('set', {
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false,
              'restrict_data_processing': true,
              'client_storage': 'none',
              'client_id': false
            });

            // デバッグ情報
            console.log('GTM init configuration complete');
          `
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('GTM main script loaded');
        }}
        onError={(e) => {
          console.error('GTMスクリプトの読み込みエラー:', e);
        }}
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              try {
                if (w[l]) {
                  console.log('GTM already initialized');
                  return;
                }
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js',
                  'gtm.blocklist': ['customScripts', 'html', 'nonjs', 'customPixels', 'adv']
                });

                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s);
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                j.crossOrigin='anonymous';
                j.addEventListener('load', function() {
                  console.log('GTM script loaded successfully');
                });
                j.addEventListener('error', function(error) {
                  console.error('GTM script load error:', error);
                });
                f.parentNode.insertBefore(j,f);
                
                // デバッグ情報
                console.log('GTM initialization attempted with ID:', i);
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