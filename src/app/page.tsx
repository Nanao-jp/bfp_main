import Image from "next/image";
import Link from "next/link";
import { SparklesIcon, VideoCameraIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import NewsCard, { NewsItem } from "./components/NewsCard";
import HeroBackground from "./components/HeroBackground";
import SectionTitle from "./components/SectionTitle";
import CollaborationsSection from "./components/CollaborationsSection";

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
          <div className="space-y-4 max-w-4xl mx-auto">
            {newsItems.map((news, i) => (
              <NewsCard 
                key={i} 
                news={news}
                layout={{
                  aspectRatio: "16:9"
                }}
                options={{
                  expandable: true
                }}
              />
            ))}
          </div>
        </section>

        {/* YouTubeセクション */}
        <section className="bg-[var(--dark-surface)] py-16">
          <div className="container mx-auto px-4">
            <SectionTitle icon={VideoCameraIcon}>YouTube</SectionTitle>
            {/* メイン動画 */}
            <div className="mb-8">
              <div className="aspect-video w-[60%] ml-4">
                <iframe
                  src="https://www.youtube.com/embed/WK1KPTP_ZwQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg border-2 border-[var(--accent-lime)]"
                ></iframe>
              </div>
              <div className="w-[60%] ml-4 mt-4">
                <h3 className="text-xl font-bold text-[var(--accent-lime)]">『UNFIX』第13話「史上最大の特外(前編)」</h3>
                <p className="text-sm text-gray-400">陸上自衛隊の対地球外生命体部隊・通称【特外隊】の日常と活躍を描く、連続特撮ドラマ第13話。</p>
              </div>
            </div>

            {/* サブ動画グリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/DjJu9SV8Zbw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg border-2 border-[var(--dark-surface-2)]"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--accent-lime)]">コラボCM「シティーハンターwith Uber eats」</h3>
                  <p className="text-sm text-gray-400">4月24日より1クールOA弊社より18人出演</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/TBm473lA5Bk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg border-2 border-[var(--dark-surface-2)]"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--accent-lime)]">「絶絶絶絶対聖域」 ano feat. 幾田りら</h3>
                  <p className="text-sm text-gray-400">エンドロールに大注目!!弊社協力作品</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/gWuL6dgZk1c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg border-2 border-[var(--dark-surface-2)]"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--accent-lime)]">B.F.P.ミリタリーアクション部！</h3>
                  <p className="text-sm text-gray-400">開設しました！</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborationsセクション */}
        <CollaborationsSection />

        {/* External siteセクション */}
        <section className="bg-[#1E1E1E] py-16">
          <div className="container mx-auto px-4">
            <SectionTitle icon={GlobeAltIcon}>External Sites</SectionTitle>
            <div className="space-y-6">
              <a href="#" className="block group">
                <div className="bg-[#2D2D2D] rounded-xl overflow-hidden hover:bg-[#353535] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-[600px] aspect-[3.36/1]">
                      <Image
                        src="/images/BBB.jpg"
                        alt="Big Bang Box"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                            Big Bang Box
                          </h3>
                        </div>
                        <div className="ml-4">
                          <div className="bg-[var(--accent-lime)] text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#" className="block group">
                <div className="bg-[#2D2D2D] rounded-xl overflow-hidden hover:bg-[#353535] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-[600px] aspect-[3.36/1]">
                      <Image
                        src="/images/MAWS.jpg"
                        alt="MAWS"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                            MAWS
                          </h3>
                        </div>
                        <div className="ml-4">
                          <div className="bg-[var(--accent-lime)] text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#" className="block group">
                <div className="bg-[#2D2D2D] rounded-xl overflow-hidden hover:bg-[#353535] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-[600px] aspect-[3.36/1]">
                      <Image
                        src="/images/youtube.jpg"
                        alt="YouTube"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                            YouTube
                          </h3>
                        </div>
                        <div className="ml-4">
                          <div className="bg-[var(--accent-lime)] text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
