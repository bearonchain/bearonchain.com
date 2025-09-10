interface YouTubeEmbedProps {
  id: string;
}

export default function YouTubeEmbed({ id }: YouTubeEmbedProps) {
  return (
    <div className="relative aspect-video w-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}