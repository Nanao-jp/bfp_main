'use client';

import { useState, useMemo } from 'react';
import { collaborationItems } from "../data/collaborations";
import CollaborationCard from "../components/Collaboration/CollaborationCard";
import GlobalModal from "../components/Collaboration/GlobalModal";
import { CollaborationItem } from '../components/Collaboration/types';

const ITEMS_PER_PAGE = 9;

export default function WorksPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<CollaborationItem | null>(null);

  // ページネーション関連の計算をメモ化
  const { totalPages, currentItems, pageNumbers } = useMemo(() => {
    const total = Math.ceil(collaborationItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const items = collaborationItems.slice(startIndex, endIndex);
    const numbers = Array.from({ length: total }, (_, i) => i + 1);

    return {
      totalPages: total,
      currentItems: items,
      pageNumbers: numbers
    };
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">B.F.P. Collaborations</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentItems.map((item, index) => (
            <CollaborationCard
              key={`${item.title}-${index}`}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <nav aria-label="ページナビゲーション">
              <ul className="flex gap-2">
                {pageNumbers.map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                        currentPage === page
                          ? 'bg-[var(--accent-lime)] text-black font-bold'
                          : 'bg-[#1E1E1E] text-white hover:bg-[#2D2D2D]'
                      }`}
                      aria-current={currentPage === page ? "page" : undefined}
                      aria-label={`${page}ページ目へ`}
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {selectedItem && (
        <GlobalModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </main>
  );
} 