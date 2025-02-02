"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlideshowProps {
  slides: readonly string[];
}

export default function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('Slideshow mounted, current index:', currentIndex);
    
    const interval = setInterval(() => {
      console.log('Interval triggered');
      setCurrentIndex((current) => {
        const next = (current + 1) % slides.length;
        console.log('Updating index:', current, '->', next);
        return next;
      });
    }, 5000);

    return () => {
      console.log('Cleaning up interval');
      clearInterval(interval);
    };
  }, [slides.length]);

  console.log('Rendering with index:', currentIndex);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
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