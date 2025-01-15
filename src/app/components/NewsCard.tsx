"use client";

import Image from "next/image";
import CollapsibleContent from "./CollapsibleContent";
import CardContent from "./CardContent";
import CardWrapper from "./CardWrapper";
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

type NewsCardProps = {
  news: NewsItem;
  layout?: {
    className?: string;
    imageClassName?: string;
    contentClassName?: string;
    aspectRatio?: "16:9" | "4:3" | "1:1";
  };
  options?: {
    expandable?: boolean;
    onClick?: () => void;
  };
};

export default function NewsCard({ 
  news,
  layout = {},
  options = {}
}: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { className = "", imageClassName = "", contentClassName = "", aspectRatio = "16:9" } = layout;
  const { expandable = true, onClick } = options;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  return (
    <CardWrapper link={news.link}>
      <div 
        className={`w-full bg-[var(--dark-surface)] rounded-lg overflow-hidden border border-[var(--dark-surface-2)] hover:border-[var(--accent-lime)] ${className}`}
        onClick={handleClick}
      >
        <div className={`flex flex-col md:flex-row items-stretch ${expandable ? 'cursor-pointer' : ''}`}>
          <div className={`relative w-full md:w-80 ${aspectRatioClass} ${imageClassName} bg-[var(--dark-surface-2)] flex-shrink-0`}>
            {!imageError ? (
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, 256px"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">No image</span>
              </div>
            )}
          </div>
          <CardContent
            {...news}
            isExpanded={isExpanded}
            expandable={expandable}
            className={contentClassName}
          />
        </div>
        {expandable && news.content && (
          <CollapsibleContent isExpanded={isExpanded}>
            <div className="p-4 md:p-6 pt-0 border-t border-[var(--dark-surface-2)]">
              <p className="text-gray-300 text-sm md:text-base whitespace-pre-line" dangerouslySetInnerHTML={{ __html: news.content }} />
            </div>
          </CollapsibleContent>
        )}
      </div>
    </CardWrapper>
  );
} 