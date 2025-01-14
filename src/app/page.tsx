import Image from "next/image";
import Link from "next/link";
import { SparklesIcon, FilmIcon, VideoCameraIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import NewsCard, { NewsItem } from "./components/NewsCard";
import HeroBackground from "./components/HeroBackground";

function SectionTitle({ icon: Icon, children }: { icon: any, children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="bg-[#9EFF00] p-2 rounded-lg">
        <Icon className="w-8 h-8 text-black" />
      </div>
      <h2 className="text-4xl font-bold">{children}</h2>
    </div>
  );
}

export default function Home() {
  // ニュースデータ
  const newsItems: NewsItem[] = [
    {
      date: "2025.01.14",
      title: "協力作品：映画『アンダーニンジャ』公開！",
      summary: "現代忍者エンターテインメント開幕",
      content: `公式HP：<a href="https://underninja-mv.com/" target="_blank" class="text-[#9EFF00] hover:underline">https://underninja-mv.com/</a>\n\n忍者ニンジャは世界中に忍び、現代いまでも暗躍している。\n\nその数、約20万人――。\n誰も観たことが無い\n"現代忍者エンターテインメント" が幕を開ける!!`,
      imageUrl: "/images/ninja.webp"
    },
    {
      date: "2025.01.13",
      title: "テレビ東京開局60周年特別企画ドラマスペシャル『晴れたらいいね』公開！",
      summary: "永野芽郁主演の感動のヒューマンドラマ",
      content: `公式HP：<a href="https://www.tv-tokyo.co.jp/haretara/" target="_blank" class="text-[#9EFF00] hover:underline">https://www.tv-tokyo.co.jp/haretara/</a>\n\n永野芽郁 主演\n芳根京子はじめ、萩原利久、江口のりこ、稲垣吾郎 が出演！\n\n現代の看護師が戦時中へタイムスリップ。\n困難な状況を強く生き抜こうとするー　\n"前向きになれる"感動のヒューマンドラマ\n\nテレビ東京開局60周年特別企画「晴れたらいいね」\n2025年1月10日（金）よりPrime Videoで世界配信！`,
      imageUrl: "/images/haretara.webp"
    },
    {
      date: "2023.02.14",
      title: "映画「ゴジラ-1.0」公開！",
      summary: "第96回アカデミー賞視覚効果賞ノミネート作品",
      content: `公式HP：<a href="https://godzilla-movie2023.toho.co.jp/" target="_blank" class="text-[#9EFF00] hover:underline">https://godzilla-movie2023.toho.co.jp/</a>\n\n映画「ゴジラ-1.0」2023年11月3日公開\n\n第９６回アカデミー賞視覚効果賞\n第４７回日本アカデミー賞\n\n再優秀賞作品賞、最優秀脚本賞、監督賞、主演男優賞、主演女優賞\n最優秀主演女優賞、最優秀助演女優賞、音楽賞、最優秀賞撮影賞\n最優秀賞撮影賞、最優秀賞録音賞、最優秀賞編集賞、会長特別賞`,
      imageUrl: "/images/gozira.webp"
    }
  ];

  return (
    <>
      {/* ヒーローセクション - フルワイド */}
      <section className="relative w-full aspect-video">
        {/* 背景オーバーレイ - より薄いグラデーションに調整 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#121212] z-10" />
        
        <HeroBackground
          videoSrc="/videos/main.mp4"
          imageSrc="/images/ninja.webp"
          imageAlt="Hero Background"
        />
      </section>

      {/* メインコンテンツ */}
      <div className="space-y-16 mt-16">
        {/* News & Topicsセクション */}
        <section id="news" className="container mx-auto px-4">
          <SectionTitle icon={SparklesIcon}>News & Topics</SectionTitle>
          <div className="space-y-4">
            {newsItems.map((news, i) => (
              <NewsCard key={i} {...news} />
            ))}
          </div>
        </section>

        {/* YouTubeセクション */}
        {/* 一時的にコメントアウト
        <section className="bg-[#1E1E1E] py-16">
          <div className="container mx-auto px-4">
            <SectionTitle icon={VideoCameraIcon}>YouTube Channel</SectionTitle>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/PLACEHOLDER"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[500px] rounded-lg border-2 border-[#2D2D2D]"
              ></iframe>
            </div>
          </div>
        </section>
        */}

        {/* Collaborationsセクション */}
        {/* 一時的にコメントアウト - 画像ファイルが必要
        <section className="container mx-auto px-4">
          <SectionTitle icon={FilmIcon}>B.F.P. Collaborations</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative">
                <div className="relative h-64 rounded-lg overflow-hidden border border-[#2D2D2D] group-hover:border-[#9EFF00] transition-colors">
                  <Image
                    src={`/images/work-${i}.jpg`}
                    alt={`Collaboration ${i}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold group-hover:text-[#9EFF00] transition-colors">コラボレーション作品 {i}</h3>
              </div>
            ))}
          </div>
        </section>
        */}

        {/* External siteセクション */}
        <section className="bg-[#1E1E1E] py-16">
          <div className="container mx-auto px-4">
            <SectionTitle icon={GlobeAltIcon}>External Sites</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="#" className="block p-6 bg-[#2D2D2D] rounded-lg hover:bg-[#9EFF00] hover:text-black transition-all">
                <h3 className="text-xl font-bold mb-2">Twitter</h3>
                <p>最新情報をチェック</p>
              </a>
              <a href="#" className="block p-6 bg-[#2D2D2D] rounded-lg hover:bg-[#9EFF00] hover:text-black transition-all">
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p>写真や動画をチェック</p>
              </a>
              <a href="#" className="block p-6 bg-[#2D2D2D] rounded-lg hover:bg-[#9EFF00] hover:text-black transition-all">
                <h3 className="text-xl font-bold mb-2">TikTok</h3>
                <p>ショート動画をチェック</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
