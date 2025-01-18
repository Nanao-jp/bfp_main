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
