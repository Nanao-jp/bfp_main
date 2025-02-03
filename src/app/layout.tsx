import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
  metadataBase: new URL('https://www.bfp54.com'),
  title: {
    template: '%s | BFP - Big Fighter Project',
    default: 'BFP - Big Fighter Project | 芸能プロダクション',
  },
  description: "BFP（ビッグファイタープロジェクト）は芸能プロダクションとして、タレントのマネジメントやプロモーション、軍事や医療の演技指導、イベント企画・運営を行っています。",
  keywords: ["芸能プロダクション", "ビッグファイタープロジェクト", "BFP", "タレント", "演技指導", "軍事訓練", "医療演習", "ミリタリー", "エンターテインメント", "マネジメント", "プロモーション", "イベント企画"],
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
    canonical: 'https://www.bfp54.com',
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
    title: "BFP - Big Fighter Project | 芸能プロダクション",
    description: "BFP（ビッグファイタープロジェクト）は芸能プロダクションとして、タレントのマネジメントやプロモーション、軍事や医療の演技指導、イベント企画・運営を行っています。",
    images: [
      {
        url: "/OGP.webp",
        width: 1200,
        height: 630,
        alt: "BFP - タレントマネジメントと演技指導のプロフェッショナル",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "Big Fighter Project",
  },
  twitter: {
    card: "summary_large_image",
    title: "BFP - Big Fighter Project | 芸能プロダクション",
    description: "BFP（ビッグファイタープロジェクト）は芸能プロダクションとして、タレントのマネジメントやプロモーション、軍事や医療の演技指導、イベント企画・運営を行っています。",
    images: ["/OGP.webp"],
    creator: "@bigfighterproject",
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'format-detection': 'telephone=no',
    'Cache-Control': 'public, max-age=31536000, immutable',
    'viewport-fit': 'cover'
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
      </head>
      <body className={`${outfit.className} bg-[var(--dark-surface)] text-white`}>
        <GoogleAnalytics />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
