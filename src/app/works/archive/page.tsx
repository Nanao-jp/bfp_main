'use client';

import Link from "next/link";
import { archiveWorks } from "@/app/data/archiveWorks";
import ArchiveCard from "@/app/components/Archive/ArchiveCard";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <Link
            href="/works"
            className="px-4 py-2 rounded-md bg-[#1E1E1E] text-white hover:bg-[#2D2D2D] transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            戻る
          </Link>
          <h1 className="text-4xl font-bold text-white">2022年以前の協力作品</h1>
        </div>
        
        <div className="space-y-6">
          {archiveWorks.map((work) => (
            <ArchiveCard key={`${work.title}-${work.type}`} work={work} />
          ))}
        </div>
      </div>
    </main>
  );
} 