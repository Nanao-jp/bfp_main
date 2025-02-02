// カスタムウィンドウインターフェースの定義は削除し、gtm.d.tsを使用

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_EXPIRY = 365; // 日数

interface CookieOptions {
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  expires?: Date | number;
  httpOnly?: boolean;
}

const defaultCookieOptions: CookieOptions = {
  path: '/',
  secure: true,
  sameSite: 'Strict',
};

export const getCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent === 'accepted';
};

const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
  const opts = { ...defaultCookieOptions, ...options };
  let cookieString = `${name}=${value}`;

  if (opts.path) cookieString += `; path=${opts.path}`;
  if (opts.domain) cookieString += `; domain=${opts.domain}`;
  if (opts.secure) cookieString += '; secure';
  if (opts.sameSite) cookieString += `; samesite=${opts.sameSite}`;
  if (opts.httpOnly) cookieString += '; httponly';
  
  if (opts.expires) {
    const expirationDate = typeof opts.expires === 'number' 
      ? new Date(Date.now() + opts.expires * 24 * 60 * 60 * 1000)
      : opts.expires;
    cookieString += `; expires=${expirationDate.toUTCString()}`;
  }

  document.cookie = cookieString;
};

const deleteCookie = (name: string, options: CookieOptions = {}) => {
  setCookie(name, '', { ...options, expires: new Date(0) });
};

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

const getDomains = () => {
  if (typeof window === 'undefined') return [];
  return [
    window.location.hostname,
    `.${window.location.hostname}`,
    '.google.com',
    'www.google.com',
    '.youtube.com',
    'www.youtube.com'
  ];
};

export const setAnalyticsCookies = (enabled: boolean) => {
  if (typeof window === 'undefined') return;

  // 同意状態を保存
  localStorage.setItem(COOKIE_CONSENT_KEY, enabled ? 'accepted' : 'declined');

  if (!enabled) {
    // すべてのクッキーを取得
    const cookies = document.cookie.split(';');
    const domains = getDomains();

    // クッキーの削除
    cookies.forEach(cookie => {
      const [name] = cookie.split('=').map(part => part.trim());
      
      // パターンマッチングでクッキーを確認
      const shouldDelete = cookiePatterns.some(pattern => pattern.test(name));
      
      if (shouldDelete) {
        domains.forEach(domain => {
          deleteCookie(name, { domain, path: '/' });
          deleteCookie(name, { domain, path: '/', secure: true });
          deleteCookie(name, { domain, path: '/', secure: true, sameSite: 'Strict' });
        });
      }
    });
  }

  // GTMの設定を更新
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cookie_consent_update',
    analytics_storage: enabled ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    security_storage: 'granted',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    wait_for_update: 500
  });
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setAnalyticsCookies(consent);
}; 