import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const NotFoundClient = dynamic(() => import('./components/NotFoundClient'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">読み込み中...</h1>
      </div>
    </div>
  ),
});

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">読み込み中...</h1>
        </div>
      </div>
    }>
      <NotFoundClient />
    </Suspense>
  );
} 