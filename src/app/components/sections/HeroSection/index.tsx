import HeroBackground from "../../HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[2/1]">
      {/* 背景オーバーレイ - より薄いグラデーションに調整 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-surface z-10" />
      
      <HeroBackground
        videoSrc="/videos/main.mp4"
        imageSrc="/images/ninja.webp"
        imageAlt="Hero Background"
      />
    </section>
  );
} 