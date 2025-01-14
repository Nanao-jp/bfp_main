"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HeroSlideshowProps = {
  slides: string[];
  duration?: number;
  transitionDuration?: number;
};

export default function HeroSlideshow({ 
  slides, 
  duration = 5000,
  transitionDuration = 1000
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % slides.length);
      }, duration);
      
      return () => clearInterval(interval);
    }, duration);

    return () => clearTimeout(timer);
  }, [slides.length, duration]);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className="absolute inset-0 transition-opacity"
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            transitionDuration: `${transitionDuration}ms`
          }}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
} 