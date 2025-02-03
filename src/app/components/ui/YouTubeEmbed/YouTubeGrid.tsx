import { YouTubeGridProps } from '@/app/types/youtube';
import YouTubeEmbed from './index';

export default function YouTubeGrid({ videos, columns = 3 }: YouTubeGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }[columns];

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {videos.map((video) => (
        <div key={video.videoId}>
          <YouTubeEmbed {...video} />
          <div className="mt-3">
            <h3 className="text-lg font-bold text-accent-lime line-clamp-2">
              {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
} 