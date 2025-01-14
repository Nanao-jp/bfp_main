import Image from "next/image";
import { CollaborationCardContentProps } from "./types";

export default function CollaborationCardContent({ item, onClick }: CollaborationCardContentProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-64 sm:h-72 md:h-80">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          {item.description && (
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-white/80 text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {item.description}
              </p>
            </div>
          )}
        </div>
        <div className="p-4 bg-[#1E1E1E] border-t border-[#2D2D2D]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
              {item.title}
            </h3>
            <div className="flex items-center text-sm text-gray-400 group-hover:text-[var(--accent-lime)] transition-colors duration-300">
              <span>詳細を見る</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 