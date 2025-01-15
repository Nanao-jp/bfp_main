'use client';

import Link from "next/link";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/works"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            戻る
          </Link>
          <h1 className="text-4xl font-bold text-white">過去作品アーカイブ</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">2020年以前の作品</h2>
            <div className="space-y-4">
              {/* ここに過去作品のリストを追加 */}
              <p className="text-gray-400">準備中...</p>
            </div>
          </div>
          
          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">その他の活動</h2>
            <div className="space-y-4">
              {/* ここにその他の活動情報を追加 */}
              <p className="text-gray-400">準備中...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 