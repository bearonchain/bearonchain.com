interface YouTubeEmbedProps {
  id: string;
}

export default function YouTubeEmbed({ id }: YouTubeEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg my-8" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}