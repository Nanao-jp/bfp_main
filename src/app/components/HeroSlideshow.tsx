"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlideshowProps {
  slides: readonly string[];
}

export default function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // フェードイン完了後にスライドショーを開始
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % slides.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }, 2000); // フェードイン後、1秒待ってから開始

    return () => clearTimeout(timer);
  }, [slides.length]);

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
            alt={`スライド ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
} 