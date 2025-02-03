export interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isMain?: boolean;
}

export interface YouTubeGridProps {
  videos: YouTubeEmbedProps[];
  columns?: 1 | 2 | 3;
} 