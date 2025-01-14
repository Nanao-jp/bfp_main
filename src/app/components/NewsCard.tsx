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
  const [imageError, setImageError] = useState(false);

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
    <div className={`p-4 md:p-6 flex-grow ${contentClassName}`}>
      <div className="flex gap-4 items-start">
        <div className="min-w-0 flex-grow">
          <div className="flex gap-2 items-center mb-2">
            {category && (
              <span className="px-2 py-1 bg-[var(--accent-lime)] text-black text-xs font-bold rounded">
                {category}
              </span>
            )}
            <span className="text-[var(--accent-lime)] text-sm">{date}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-300 text-sm md:text-base line-clamp-2">{summary}</p>
        </div>
        {expandable && (
          <ChevronDownIcon 
            className={`w-6 h-6 text-[var(--accent-lime)] ${isExpanded ? '-rotate-180' : ''}`}
          />
        )}
      </div>
    </div>
  );

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a href={link} className="block hover:opacity-90">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <Wrapper>
      <div 
        className={`bg-[var(--dark-surface)] rounded-lg overflow-hidden border border-[var(--dark-surface-2)] hover:border-[var(--accent-lime)] ${className}`}
        onClick={handleClick}
      >
        <div className={`flex flex-col md:flex-row ${expandable ? 'cursor-pointer' : ''}`}>
          <div className={`relative w-full md:w-64 ${aspectRatioClass} ${imageClassName} bg-[var(--dark-surface-2)]`}>
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, 256px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">No image</span>
              </div>
            )}
          </div>
          <CardContent />
        </div>
        {expandable && content && isExpanded && (
          <div className="p-4 md:p-6 pt-0 border-t border-[var(--dark-surface-2)] mt-4">
            <p className="text-gray-300 text-sm md:text-base whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </div>
    </Wrapper>
  );
} 