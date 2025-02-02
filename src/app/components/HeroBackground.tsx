"use client";

import { useState } from "react";
import HeroSlideshow from "./HeroSlideshow";

type HeroBackgroundProps = {
  videoSrc: string;
  slides: readonly string[];
};

export default function HeroBackground({ videoSrc, slides }: HeroBackgroundProps) {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="absolute inset-0">
      <video
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoEnded ? 'opacity-0' : 'opacity-100'
        }`}
        onEnded={() => setVideoEnded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        videoEnded ? 'opacity-100' : 'opacity-0'
      }`}>
        <HeroSlideshow slides={slides} />
      </div>
    </div>
  );
} 