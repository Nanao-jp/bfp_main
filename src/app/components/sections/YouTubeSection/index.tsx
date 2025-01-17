import { VideoCameraIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";
import YouTubeEmbed from "../../ui/YouTubeEmbed";
import { youtubeVideos } from "../../../data/youtubeItems";

export default function YouTubeSection() {
  const mainVideo = youtubeVideos.find(video => video.isMain);
  const subVideos = youtubeVideos.filter(video => !video.isMain);

  return (
    <section className="bg-[var(--dark-surface)] py-16">
      <div className="container mx-auto px-4">
        <SectionTitle icon={VideoCameraIcon}>YouTube</SectionTitle>
        
        {/* メイン動画 */}
        {mainVideo && (
          <div className="mb-8">
            <div className="w-[60%] ml-4">
              <YouTubeEmbed
                videoId={mainVideo.id}
                title={mainVideo.title}
                isMain
              />
            </div>
            <div className="w-[60%] ml-4 mt-4">
              <h3 className="text-xl font-bold text-[var(--accent-lime)]">{mainVideo.title}</h3>
              <p className="text-sm text-gray-400">{mainVideo.description}</p>
            </div>
          </div>
        )}

        {/* サブ動画グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subVideos.map((video, index) => (
            <div key={video.id} className="space-y-3">
              <YouTubeEmbed
                videoId={video.id}
                title={video.title}
              />
              <div>
                <h3 className="text-lg font-bold text-[var(--accent-lime)]">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 