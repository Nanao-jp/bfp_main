'use client';

import { useState } from 'react';
import Image from 'next/image';
import { YouTubeEmbedProps } from '@/app/types/youtube';

export default function YouTubeEmbed({ videoId, title, isMain = false }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 高品質なサムネイル画像を使用
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  
  // プライバシーに配慮したYouTube埋め込みURL
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?` + 
    new URLSearchParams({
      autoplay: '1',
      rel: '0',
      modestbranding: '1',
      controls: '1',
      nocookie: '1',
      enablejsapi: '0',
      origin: typeof window !== 'undefined' ? window.location.origin : '',
      widget_referrer: '0',
      playsinline: '1'
    }).toString();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!isPlaying) {
    return (
      <button
        onClick={handlePlay}
        className={`group relative aspect-video w-full rounded-lg overflow-hidden border-2 transition-colors ${
          isMain ? "border-[var(--accent-lime)]" : "border-[var(--dark-surface-2)]"
        }`}
        aria-label={`${title}を再生`}
      >
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity group-hover:bg-black/60">
          <div className="rounded-full bg-[var(--accent-lime)] p-4 transition-transform group-hover:scale-110">
            <svg 
              className="w-8 h-8 text-black" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className={`aspect-video rounded-lg overflow-hidden border-2 ${
      isMain ? "border-[var(--accent-lime)]" : "border-[var(--dark-surface-2)]"
    }`}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="w-full h-full"
        sandbox="allow-same-origin allow-scripts allow-presentation"
      />
    </div>
  );
} 