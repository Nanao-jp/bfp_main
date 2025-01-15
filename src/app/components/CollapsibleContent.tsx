"use client";

import { useRef, useState, useEffect } from "react";

type CollapsibleContentProps = {
  isExpanded: boolean;
  children: React.ReactNode;
};

export default function CollapsibleContent({ isExpanded, children }: CollapsibleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!isExpanded) {
      setHeight(0);
      return;
    }
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  return (
    <div 
      ref={contentRef}
      style={{ height: `${height}px` }}
      className={`overflow-hidden ${isExpanded ? 'transition-[height] duration-300 ease-in-out' : ''}`}
    >
      {children}
    </div>
  );
} 