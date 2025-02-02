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
    if (!contentRef.current) return;
    
    setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
  }, [isExpanded]);

  return (
    <div 
      ref={contentRef}
      style={{ height: `${height}px` }}
      className="overflow-hidden transition-[height] duration-300 ease-in-out"
    >
      {children}
    </div>
  );
} 