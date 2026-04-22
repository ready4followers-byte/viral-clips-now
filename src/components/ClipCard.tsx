import { Play } from "lucide-react";

interface ClipCardProps {
  thumbnail: string;
  title: string;
  metric: string;
  metricLabel: string;
  videoUrl?: string;
}

const ClipCard = ({ thumbnail, title, metric, metricLabel, videoUrl }: ClipCardProps) => {
  return (
    <a
      href={videoUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-card shadow-card-dark ring-1 ring-border transition hover:ring-primary/60"
    >
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      {/* Play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/95 text-primary-foreground shadow-cta transition group-hover:scale-110">
          <Play className="h-6 w-6 fill-current" />
        </div>
      </div>

      {/* Metric */}
      <div className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
        <span className="text-primary">{metric}</span>
        <span className="ml-1 text-muted-foreground">{metricLabel}</span>
      </div>

      {/* Title */}
      <div className="absolute inset-x-3 bottom-3">
        <p className="line-clamp-2 text-sm font-medium text-foreground">{title}</p>
      </div>
    </a>
  );
};

export default ClipCard;
