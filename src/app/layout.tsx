import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Suspense } from 'react';
import ClientLayout from "./components/ClientLayout";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E1E1E",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bigfighterproject.com'),
  title: {
    template: '%s | Big Fighter Project',
    default: 'Big Fighter Project | 芸能プロダクション',
  },
  description: "芸能プロダクション ビッグファイタープロジェクト - タレント、格闘家のマネジメントやプロモーション、イベント企画・運営を行っています。",
  keywords: ["芸能プロダクション", "ビッグファイタープロジェクト", "BFP", "タレント", "格闘技", "エンターテインメント", "マネジメント", "プロモーション", "イベント企画"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bigfighterproject.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  openGraph: {
    title: "Big Fighter Project | 芸能プロダクション",
    description: "芸能プロダクション ビッグファイタープロジェクト - タレント、格闘家のマネジメントやプロモーション、イベント企画・運営を行っています。",
    images: [
      {
        url: "/OGP.webp",
        width: 1200,
        height: 630,
        alt: "Big Fighter Project - タレントと格闘家のマネジメント・プロモーション",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "Big Fighter Project",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Fighter Project | 芸能プロダクション",
    description: "芸能プロダクション ビッグファイタープロジェクト - タレント、格闘家のマネジメントやプロモーション、イベント企画・運営を行っています。",
    images: ["/OGP.webp"],
    creator: "@bigfighterproject",
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'format-detection': 'telephone=no',
    'Cache-Control': 'public, max-age=31536000, immutable',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <JsonLd />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.className} bg-[var(--dark-surface)] text-white`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
