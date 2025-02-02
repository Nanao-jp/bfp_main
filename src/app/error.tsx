'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('エラーが発生しました:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--dark-surface)]">
      <div className="max-w-md w-full mx-4 p-8 bg-[#1E1E1E] rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">
          申し訳ありません
        </h2>
        <p className="text-gray-300 mb-6">
          予期せぬエラーが発生しました。ページを再読み込みするか、しばらく時間をおいてから再度アクセスしてください。
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="px-6 py-2 bg-[var(--accent-lime)] text-black rounded-lg hover:bg-[var(--accent-lime-dark)] transition-colors"
          >
            再試行
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 text-white border border-[#353535] rounded-lg hover:bg-[#2D2D2D] transition-colors"
          >
            トップページへ
          </button>
        </div>
      </div>
    </div>
  );
} 