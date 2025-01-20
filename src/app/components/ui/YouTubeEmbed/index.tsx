interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isMain?: boolean;
}

export default function YouTubeEmbed({ videoId, title, isMain = false }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=0&rel=0&modestbranding=1&playsinline=1&controls=1&fs=0&loop=0&autoplay=0&mute=1`}
        title={title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        className={`w-full h-full rounded-lg border-2 ${
          isMain ? "border-[var(--accent-lime)]" : "border-[var(--dark-surface-2)]"
        }`}
      />
    </div>
  );
} 