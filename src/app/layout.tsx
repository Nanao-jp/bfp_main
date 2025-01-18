import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Fighter Project",
  description: "芸能プロダクション ビッグファイタープロジェクト",
  keywords: ["芸能プロダクション", "ビッグファイタープロジェクト", "BFP", "タレント", "格闘技", "エンターテインメント"],
  themeColor: "#1E1E1E",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Big Fighter Project",
    description: "芸能プロダクション ビッグファイタープロジェクト",
    images: [
      {
        url: "/OGP.webp",
        width: 1200,
        height: 630,
        alt: "Big Fighter Project",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "Big Fighter Project",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Fighter Project",
    description: "芸能プロダクション ビッグファイタープロジェクト",
    images: ["/OGP.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${outfit.className} bg-[var(--dark-surface)] text-white`}>
        <Header />
        <main>
          {children}
        </main>
        <footer className="bg-[#1E1E1E] text-white py-8 border-t border-[#2D2D2D]">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Big Fighter Project. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
