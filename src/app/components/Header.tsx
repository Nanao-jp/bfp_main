"use client";

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[var(--dark-surface-2)] text-white border-b border-[#2D2D2D]">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          
          {/* デスクトップメニュー */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="relative group h-8 flex items-center">
                <span>HOME</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-lime)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="/talents" className="relative group h-8 flex items-center">
                <span>TALENTS</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-lime)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="/works" className="relative group h-8 flex items-center">
                <span>WORKS</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-lime)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative group h-8 flex items-center">
                <span>CONTACT</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-lime)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          </ul>

          {/* ハンバーガーメニューボタン */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* モバイルメニュー */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[var(--dark-surface-2)] transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden z-50`}
          >
            <div className="p-6">
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-white"
                aria-label="メニューを閉じる"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="mt-12 space-y-6">
                <li>
                  <Link
                    href="/"
                    className="block text-lg hover:text-[var(--accent-lime)] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/talents"
                    className="block text-lg hover:text-[var(--accent-lime)] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    TALENTS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className="block text-lg hover:text-[var(--accent-lime)] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    WORKS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-lg hover:text-[var(--accent-lime)] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* オーバーレイ背景 */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
              onClick={toggleMenu}
            />
          )}
        </nav>
      </div>
    </header>
  );
} 