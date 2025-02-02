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
  const youtubeEmbeds = document.querySelectorAll<HTMLIFrameElement>('iframe[src*="youtube.com"]');
  Array.from(youtubeEmbeds).forEach((embed) => {
    // プライバシー強化モードを常時有効化
    if (embed.src.includes('youtube.com')) {
      embed.src = embed.src.replace('youtube.com', 'youtube-nocookie.com');
    }
    // 追加のプライバシー設定
    embed.setAttribute('loading', 'lazy');
    embed.setAttribute('data-no-cookie', 'true');
  });

  // その他のサードパーティCookieの制御をここに追加
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setThirdPartyCookies(consent);
}; 