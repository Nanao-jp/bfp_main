'use client';

import Image from "next/image";
import { CollaborationCardProps } from "./types";

export default function CollaborationCard({ item, onClick, className = "" }: CollaborationCardProps) {
  return (
    <div className={`group cursor-pointer h-full ${className}`} onClick={onClick}>
      <div className="rounded-xl bg-dark-surface-2 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
        <div className="relative aspect-video shrink-0 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>
        <div className="p-4 bg-dark-surface-2 border-t border-dark-surface-3 flex-1 flex items-center">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-bold text-white group-hover:text-accent-lime transition-colors duration-300 line-clamp-2 flex-1 mr-4">
              {item.title}
            </h3>
            <div className="flex items-center text-sm text-gray-400 group-hover:text-accent-lime transition-colors duration-300 shrink-0">
              <span>詳細を見る</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 