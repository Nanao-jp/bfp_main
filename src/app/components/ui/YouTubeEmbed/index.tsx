interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isMain?: boolean;
}

export default function YouTubeEmbed({ videoId, title, isMain = false }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&nocookie=1&enablejsapi=0&origin=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL || '')}&widget_referrer=0&autoplay=0&mute=1&playsinline=1`}
        title={title}
        allow="encrypted-media"
        loading="lazy"
        referrerPolicy="strict-origin"
        sandbox="allow-same-origin allow-scripts"
        className={`w-full h-full rounded-lg border-2 ${
          isMain ? "border-[var(--accent-lime)]" : "border-[var(--dark-surface-2)]"
        }`}
      />
    </div>
  );
} 