interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isMain?: boolean;
}

export default function YouTubeEmbed({ videoId, title, isMain = false }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`w-full h-full rounded-lg border-2 ${
          isMain ? "border-[var(--accent-lime)]" : "border-[var(--dark-surface-2)]"
        }`}
      />
    </div>
  );
} 