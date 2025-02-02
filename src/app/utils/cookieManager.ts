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
    '__Secure-3PSIDCC'
  ];

  cookiesToRemove.forEach(cookieName => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict`;
  });

  if (enabled) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_update',
      analytics_storage: 'granted'
    });
  } else {
    // Analytics Cookieを削除
    ['_ga', '_gid'].forEach(cookieName => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict`;
    });
  }
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setAnalyticsCookies(consent);
}; 