"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSlideshow from "./HeroSlideshow";

type HeroBackgroundProps = {
  videoSrc: string;
  imageSrc: string;
  imageAlt: string;
};

const SLIDES = [
  "/images/ninja.webp",
  "/images/haretara.webp",
  "/images/gozira.webp"
] as const;

export default function HeroBackground({ videoSrc, imageSrc, imageAlt }: HeroBackgroundProps) {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="absolute inset-0">
      {/* 初期の静的画像とビデオ */}
      {!videoEnded && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
          />
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={() => setVideoEnded(true)}
            onError={() => setVideoEnded(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </>
      )}

      {/* スライドショー */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        videoEnded ? 'opacity-100' : 'opacity-0'
      }`}>
        <HeroSlideshow 
          slides={SLIDES}
        />
      </div>
    </div>
  );
} 