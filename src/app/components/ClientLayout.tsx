'use client';

import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import CookieConsent from "./CookieConsent";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import SkipLink from "./SkipLink";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <SkipLink />
      <Header />
      <main id="main-content">
        {children}
      </main>
      <footer className="bg-[#1E1E1E] text-white py-8 border-t border-[#2D2D2D]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400">© 2024 Big Fighter Project. All rights reserved.</p>
            <div className="text-xs">
              <PrivacyPolicyModal />
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </ErrorBoundary>
  );
} 