import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-4 p-8 bg-[#1E1E1E] rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6">ページが見つかりません</h2>
        <p className="text-gray-300 mb-8">
          お探しのページは削除されたか、URLが変更された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[var(--accent-lime)] text-black rounded-lg hover:bg-[var(--accent-lime-dark)] transition-colors"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
} 