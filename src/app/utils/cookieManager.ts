// カスタムウィンドウインターフェースの定義は削除し、gtm.d.tsを使用

export const getCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

export const setAnalyticsCookies = (enabled: boolean) => {
  if (typeof window === 'undefined') return;

  // 不要なCookieを削除
  const cookiesToRemove = [
    'COMPASS',
    '__Secure-OSID',
    'AID',
    '__Host-3PLSID',
    'LSOLH',
    '__Secure-3PAPISID',
    '__Secure-3PSID',
    'NID',
    '__Secure-3PSIDTS',
    '__Secure-3PSIDCC',
    '__Secure-1PSID',
    '__Secure-1PAPISID',
    '__Secure-1PSIDTS',
    '__Secure-1PSIDCC',
    '__Secure-3PSIDTS',
    'SIDCC',
    'APISID',
    'SAPISID',
    'HSID',
    'SID',
    'SSID'
  ];

  const domains = [
    '',
    '.google.com',
    'www.google.com',
    '.youtube.com',
    'www.youtube.com'
  ];

  cookiesToRemove.forEach(cookieName => {
    domains.forEach(domain => {
      // ルートパスでのCookie削除
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}; secure; samesite=strict`;
      // 特定のパスでのCookie削除
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      // HTTPOnlyフラグ付きのCookie削除
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}; secure; samesite=strict; httponly`;
    });
  });

  if (enabled) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_update',
      analytics_storage: 'granted',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted'
    });
  } else {
    // Analytics Cookieを削除
    const analyticsCookies = ['_ga', '_gid', '_ga_*'];
    analyticsCookies.forEach(cookieName => {
      if (cookieName === '_ga_*') {
        // _ga_で始まるすべてのCookieを検索して削除
        document.cookie.split(';').forEach(cookie => {
          const name = cookie.split('=')[0].trim();
          if (name.startsWith('_ga_')) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict`;
          }
        });
      } else {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict`;
      }
    });
  }
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setAnalyticsCookies(consent);
}; 