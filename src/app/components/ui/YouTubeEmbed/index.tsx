interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isMain?: boolean;
}

export default function YouTubeEmbed({ videoId, title, isMain = false }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&nocookie=1&enablejsapi=0`}
        title={title}
        allow="encrypted-media"
        loading="lazy"
        className={`w-full h-full rounded-lg border-2 ${
          isMain ? "border-[var(--accent-lime)]" : "border-[var(--dark-surface-2)]"
        }`}
      />
    </div>
  );
} 