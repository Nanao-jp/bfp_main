import { VideoCameraIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";

export default function YouTubeSection() {
  return (
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
  );
} 