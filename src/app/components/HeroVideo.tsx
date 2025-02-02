"use client";

import { useEffect, useRef, useCallback } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  onLoad?: () => void;
  onEnded?: () => void;
  onError?: () => void;
  isPlaying: boolean;
};

export default function HeroVideo({ 
  src, 
  poster,
  onLoad,
  onEnded,
  onError,
  isPlaying 
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // エラーハンドリング
  const handleError = useCallback(() => {
    onError?.();
  }, [onError]);

  // ビデオの読み込み完了
  const handleLoadedData = useCallback(() => {
    onLoad?.();
  }, [onLoad]);

  // ビデオの再生終了
  const handleEnded = useCallback(() => {
    onEnded?.();
  }, [onEnded]);

  // ビデオの再生制御
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        handleError();
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', () => handleError());

    if (isPlaying) {
      playVideo();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', () => handleError());
      video.pause();
    };
  }, [isPlaying, handleLoadedData, handleEnded, handleError]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover"
      poster={poster}
      aria-hidden="true"
      role="presentation"
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      <p className="sr-only">お使いのブラウザは動画の再生に対応していません。</p>
    </video>
  );
} 