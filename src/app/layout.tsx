import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "./components/Logo";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Fighter Project",
  description: "Big Fighter Project 公式ウェブサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={outfit.className}>
        <header className="bg-[#1E1E1E] text-white border-b border-[#2D2D2D]">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
              <Logo />
              <ul className="flex space-x-8">
                <li>
                  <Link href="/" className="relative group">
                    <span>HOME</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9EFF00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/talents" className="relative group">
                    <span>タレント</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9EFF00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="relative group">
                    <span>関連作品</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9EFF00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="relative group">
                    <span>お問い合わせ</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9EFF00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
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
