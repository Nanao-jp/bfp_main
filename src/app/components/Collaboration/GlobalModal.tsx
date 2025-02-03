'use client';

import { useEffect, useCallback, useRef } from 'react';
import Image from "next/image";
import { CollaborationModalProps } from "./types";

export default function GlobalModal({ item, onClose }: CollaborationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl h-[80vh] bg-dark-surface-2 rounded-xl overflow-hidden animate-modalFade focus:outline-none flex flex-col"
        onClick={handleContentClick}
        tabIndex={-1}
      >
        <div className="relative h-[60%] shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1536px) 100vw, 1536px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="p-6 space-y-6">
            {item.link && (
              <div className="flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-accent-lime hover:underline"
                  aria-label={`${item.title}の公式サイトへ`}
                >
                  <span>公式サイトへ</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
            <div className="space-y-4">
              <h2 id="modal-title" className="text-2xl font-bold text-white">{item.title}</h2>
              {item.description && (
                <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">{item.description}</p>
              )}
            </div>
          </div>
        </div>
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          onClick={onClose}
          aria-label="モーダルを閉じる"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
} 