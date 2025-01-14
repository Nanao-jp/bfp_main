"use client";

import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category?: string;
  link?: string;
};

type NewsCardProps = NewsItem & {
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  expandable?: boolean;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  onClick?: () => void;
};

export default function NewsCard({ 
  date, 
  title, 
  summary, 
  content,
  imageUrl,
  category,
  link,
  className = "",
  imageClassName = "",
  contentClassName = "",
  expandable = true,
  aspectRatio = "16:9",
  onClick
}: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  const aspectRatioClass = {
    "16:9": "aspect-video",
    "4:3": "aspect-4/3",
    "1:1": "aspect-square"
  }[aspectRatio];

  const CardContent = () => (
    <div className={`flex-grow p-4 md:p-6 ${contentClassName}`}>
      <div className="flex justify-between items-start gap-4">
        <div className="min-w-0 flex-grow">
          <div className="flex flex-wrap gap-2 items-center mb-2">
            {category && (
              <span className="inline-block px-2 py-1 bg-[#9EFF00] text-black text-xs font-bold rounded">
                {category}
              </span>
            )}
            <span className="text-sm text-[#9EFF00]">{date}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-300 text-sm md:text-base line-clamp-2 md:line-clamp-none">{summary}</p>
        </div>
        {expandable && (
          <ChevronDownIcon 
            className={`w-6 h-6 text-[#9EFF00] transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
          />
        )}
      </div>
    </div>
  );

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a href={link} className="block hover:opacity-95 transition-opacity">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <Wrapper>
      <div 
        className={`bg-[#1E1E1E] rounded-lg overflow-hidden border border-[#2D2D2D] hover:border-[#9EFF00] transition-all ${className}`}
        onClick={handleClick}
      >
        <div className={`flex flex-col md:flex-row ${expandable ? 'cursor-pointer' : ''}`}>
          {/* サムネイル */}
          <div className={`relative w-full md:w-64 ${aspectRatioClass} flex-shrink-0 ${imageClassName}`}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent />
        </div>
        {/* 展開時の詳細コンテンツ */}
        {expandable && content && (
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 md:p-6 pt-0 border-t border-[#2D2D2D] mt-4">
              <p className="text-gray-300 whitespace-pre-line text-sm md:text-base">{content}</p>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
} 