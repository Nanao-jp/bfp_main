import HeroSection from "./components/sections/HeroSection";
import NewsSection from "./components/sections/NewsSection";
import YouTubeSection from "./components/sections/YouTubeSection";
import CollaborationsSection from "./components/CollaborationsSection";
import ExternalSitesSection from "./components/sections/ExternalSitesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="space-y-16 mt-16">
        <NewsSection />
        <YouTubeSection />
        <CollaborationsSection />
        <ExternalSitesSection />
      </div>
    </>
  );
}
