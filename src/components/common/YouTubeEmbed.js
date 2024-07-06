export default function YouTubeEmbed({ src }) {
  return (
    <iframe className="youtube-player" src={src} allowFullScreen />
  );
}
