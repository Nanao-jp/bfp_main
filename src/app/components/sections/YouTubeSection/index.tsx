import { VideoCameraIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";
import YouTubeEmbed from "../../ui/YouTubeEmbed";
import Container from "../../ui/Container";
import { youtubeVideos } from "../../../data/youtubeItems";
import { styles } from "../../../styles/constants";

export default function YouTubeSection() {
  const mainVideo = youtubeVideos.find(video => video.isMain);
  const subVideos = youtubeVideos.filter(video => !video.isMain);

  return (
    <section className={`bg-dark-surface ${styles.layout.section.default}`}>
      <Container>
        <SectionTitle icon={VideoCameraIcon}>YouTube</SectionTitle>
        
        {/* メイン動画 */}
        {mainVideo && (
          <div className={`${styles.layout.section.spacing} mb-16`}>
            <div className="w-full lg:w-[60%] lg:ml-4">
              <YouTubeEmbed
                videoId={mainVideo.id}
                title={mainVideo.title}
                isMain
              />
            </div>
            <div className="w-full lg:w-[60%] lg:ml-4 mt-4">
              <h3 className="text-xl font-bold text-accent-lime">{mainVideo.title}</h3>
              <p className="text-sm text-gray-400">{mainVideo.description}</p>
            </div>
          </div>
        )}

        {/* サブ動画グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {subVideos.map((video) => (
            <div key={video.id} className="h-full">
              <YouTubeEmbed
                videoId={video.id}
                title={video.title}
              />
              <div className="mt-3">
                <h3 className="text-lg font-bold text-accent-lime line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 