import { FilmIcon } from "@heroicons/react/24/solid";
import CollaborationCard from "./Collaboration/CollaborationCard";
import { CollaborationItem } from "./Collaboration/types";
import SectionTitle from "./SectionTitle";

const collaborationItems: CollaborationItem[] = [
  { 
    title: "アンダーニンジャ", 
    image: "/images/ninja.webp",
    description: "現代忍者エンターテインメント開幕。忍者ニンジャは世界中に忍び、現代いまでも暗躍している。その数、約20万人――。",
    link: "https://underninja-mv.com/"
  },
  { 
    title: "晴れたらいいね", 
    image: "/images/haretara.webp",
    description: "永野芽郁主演の感動のヒューマンドラマ。現代の看護師が戦時中へタイムスリップ。困難な状況を強く生き抜こうとする前向きな物語。",
    link: "https://www.tv-tokyo.co.jp/haretara/"
  },
  { 
    title: "ゴジラ-1.0", 
    image: "/images/gozira.webp",
    description: "第96回アカデミー賞視覚効果賞ノミネート作品。第47回日本アカデミー賞 最優秀作品賞など多数受賞。",
    link: "https://godzilla-movie2023.toho.co.jp/"
  }
];

export default function CollaborationsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle icon={FilmIcon}>B.F.P. Collaborations</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collaborationItems.map((item, i) => (
          <CollaborationCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
} 