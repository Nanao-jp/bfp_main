// カスタムウィンドウインターフェースの定義は削除し、gtm.d.tsを使用

export const getCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

export const setAnalyticsCookies = (enabled: boolean) => {
  if (typeof window === 'undefined') return;

  // クッキーパターンの定義
  const cookiePatterns = [
    // Google Analytics関連
    /^_ga/,
    /^_gid/,
    /^_gat/,
    // Google Tag Manager関連
    /^_dc_gtm_/,
    /^_gat_gtag_/,
    // Google一般
    /^COMPASS$/,
    /^__Secure-/,
    /^__Host-/,
    /^AID$/,
    /^LSOLH$/,
    /^NID$/,
    /^APISID$/,
    /^SAPISID$/,
    /^HSID$/,
    /^SID$/,
    /^SSID$/,
    /^SIDCC$/,
  ];

  const domains = [
    '',
    '.google.com',
    'www.google.com',
    '.youtube.com',
    'www.youtube.com'
  ];

  // すべてのクッキーを取得
  const cookies = document.cookie.split(';');

  // クッキーの削除
  cookies.forEach(cookie => {
    const [name] = cookie.split('=').map(part => part.trim());
    
    // パターンマッチングでクッキーを確認
    const shouldDelete = cookiePatterns.some(pattern => pattern.test(name));
    
    if (shouldDelete) {
      domains.forEach(domain => {
        const cookieOptions = [
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}; secure; samesite=strict`,
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`,
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}; secure; samesite=strict; httponly`
        ];
        
        cookieOptions.forEach(option => {
          document.cookie = option;
        });
      });
    }
  });

  if (enabled) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_update',
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      security_storage: 'granted',
      functionality_storage: 'denied',
      personalization_storage: 'denied'
    });
  }
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setAnalyticsCookies(consent);
}; 