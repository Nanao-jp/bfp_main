'use client';

import { collaborationItems } from "../data/collaborations";
import CollaborationCardContent from "../components/Collaboration/CollaborationCardContent";
import CollaborationModal from "../components/Collaboration/CollaborationModal";
import { useState } from "react";
import Link from "next/link";

const ITEMS_PER_PAGE = 9;

export default function WorksPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const totalPages = Math.ceil(collaborationItems.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = collaborationItems.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">B.F.P. Collaborations</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentItems.map((item, index) => (
            <CollaborationCardContent
              key={index}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  currentPage === page
                    ? 'bg-[var(--accent-lime)] text-black font-bold'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#2D2D2D]'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <div className="w-px h-8 bg-gray-600 mx-4" />
          <Link
            href="/works/archive"
            className="px-6 py-2 rounded-md bg-[#1E1E1E] text-white hover:bg-[#2D2D2D] transition-colors duration-300 flex items-center gap-2"
          >
            過去作品
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {selectedItem && (
        <CollaborationModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </main>
  );
} 