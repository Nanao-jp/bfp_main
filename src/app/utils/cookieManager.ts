// カスタムウィンドウインターフェースの定義
declare global {
  interface Window {
    'ga-disable-GA_MEASUREMENT_ID': boolean;
  }
}

export const getCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

export const setThirdPartyCookies = (enabled: boolean) => {
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (enabled) {
    window['ga-disable-GA_MEASUREMENT_ID'] = false;
  } else {
    window['ga-disable-GA_MEASUREMENT_ID'] = true;
  }

  // YouTube埋め込み
  const youtubeEmbeds = document.querySelectorAll('iframe[src*="youtube.com"]');
  youtubeEmbeds.forEach((embed: HTMLIFrameElement) => {
    if (enabled) {
      embed.src = embed.src.replace('youtube-nocookie.com', 'youtube.com');
    } else {
      embed.src = embed.src.replace('youtube.com', 'youtube-nocookie.com');
    }
  });

  // その他のサードパーティCookieの制御をここに追加
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setThirdPartyCookies(consent);
}; 