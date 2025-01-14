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
      date: "2024.01.20",
      title: "新規タレント募集開始",
      summary: "次世代のスターを募集します",
      content: `新規タレント募集を開始しました。\n\n歌唱力、演技力、ダンススキルなど、あなたの才能を活かせる場所です。\n\n応募資格：\n・15歳以上35歳以下\n・未経験者歓迎\n・プロフェッショナルとしての自覚を持てる方\n\n詳細は応募フォームをご確認ください。`,
      imageUrl: "/images/news-1.jpg"
    },
    {
      date: "2024.01.18",
      title: "新作ドラマ出演決定",
      summary: "所属タレントが話題の新作ドラマに出演",
      content: `所属タレントの山田太郎が、来期放送予定の新作ドラマ「明日への道」にメインキャストとして出演することが決定しました。\n\n放送開始：2024年4月\n放送局：○○テレビ\n放送時間：毎週金曜日 21:00～`,
      imageUrl: "/images/news-2.jpg"
    },
    {
      date: "2024.01.15",
      title: "音楽フェス出演決定",
      summary: "夏の大型音楽フェスに出演決定",
      content: `今年の夏に開催される「SUMMER SONIC 2024」への出演が決定しました。\n\n日程：2024年8月15日\n会場：○○スタジアム\n\nチケット情報は後日発表いたします。`,
      imageUrl: "/images/news-3.jpg"
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
          imageSrc="/images/hero-bg.jpg"
          imageAlt="Hero Background"
        />
      </section>

      {/* メインコンテンツ */}
      <div className="space-y-16 mt-0">
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

        {/* Collaborationsセクション */}
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
