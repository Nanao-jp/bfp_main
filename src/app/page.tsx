import HeroSection from "./components/sections/HeroSection";
import NewsSection from "./components/sections/NewsSection";
import YouTubeSection from "./components/sections/YouTubeSection";
import CollaborationsSection from "./components/CollaborationsSection";
import ExternalSitesSection from "./components/sections/ExternalSitesSection";
import { collaborationItems } from "./data/collaborations";

const ITEMS_PER_PAGE = 6;

export default function Home() {
  // サーバー側で配列の順序を確定
  const displayedItems = collaborationItems.slice(0, ITEMS_PER_PAGE);

  return (
    <>
      <HeroSection />
      <div className="space-y-16 mt-16">
        <NewsSection limit={3} />
        <YouTubeSection />
        <CollaborationsSection items={displayedItems} />
        <ExternalSitesSection />
      </div>
    </>
  );
}
