// カスタムウィンドウインターフェースの定義
declare global {
  interface Window {
    dataLayer: Array<{
      'gtm.start'?: number;
      event?: string;
      consent?: 'granted' | 'denied';
      [key: string]: unknown;
    }>;
  }
}

export const getCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

export const setThirdPartyCookies = (enabled: boolean) => {
  if (typeof window === 'undefined') return;

  // Google Tag Manager
  if (enabled) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
      consent: 'granted'
    });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      consent: 'denied'
    });
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
};

export const initializeCookieConsent = () => {
  const consent = getCookieConsent();
  setThirdPartyCookies(consent);
}; 