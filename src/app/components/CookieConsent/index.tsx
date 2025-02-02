'use client';

import { useState, useEffect, useCallback } from 'react';
import { setAnalyticsCookies } from '../../utils/cookieManager';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem('cookie-consent', 'accepted');
    setAnalyticsCookies(true);
    setIsVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem('cookie-consent', 'declined');
    setAnalyticsCookies(false);
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isVisible) return;
      if (e.key === 'Escape') {
        handleDecline();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, handleDecline]);

  if (!isVisible) return null;

  return (
    <div 
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] border-t border-[#2D2D2D] p-4 z-50"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white text-sm flex-1">
          <h2 id="cookie-consent-title" className="sr-only">Cookieの使用について</h2>
          <p id="cookie-consent-description">
            当サイトでは、ユーザーエクスペリエンスの向上のためにCookieを使用しています。
            Cookieの使用に同意いただける場合は「同意する」を、同意いただけない場合は「同意しない」をクリックしてください。
            <a
              href="/privacy-policy"
              className="text-[var(--accent-lime)] hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              プライバシーポリシー
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-6 py-2 text-sm text-white hover:bg-[#2D2D2D] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-lime)]"
            aria-label="Cookieの使用を拒否"
          >
            同意しない
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-sm bg-[var(--accent-lime)] text-black hover:bg-[var(--accent-lime-dark)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-lime)]"
            aria-label="Cookieの使用を許可"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
} 