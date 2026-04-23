import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface ClipCardProps {
  thumbnail: string;
  title: string;
  metric: string;
  metricLabel: string;
  videoUrl?: string;
}

const ClipCard = ({ thumbnail, title, metric, metricLabel, videoUrl }: ClipCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRawVideo = videoUrl?.endsWith(".mp4") || videoUrl?.includes("dl=1") || videoUrl?.includes("/videos/");

  const handleClick = (e: React.MouseEvent) => {
    if (videoUrl) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="group relative block aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-card shadow-card-dark ring-1 ring-border transition hover:ring-primary/60"
      >
        {isRawVideo ? (
          <video
            src={videoUrl}
            poster={thumbnail}
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Play Icon */}
        {!isRawVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/95 text-primary-foreground shadow-cta transition group-hover:scale-110">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
        )}

        {/* Metric Badge */}
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1">
          <div className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
            {metricLabel}
          </div>
          <div className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span className="text-primary">{metric}</span>
          </div>
        </div>

        {/* Title */}
        <div className="absolute inset-x-3 bottom-3">
          <p className="line-clamp-2 text-sm font-medium text-foreground">{title}</p>
        </div>
      </div>

      {videoUrl && (
        <VideoModal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          videoUrl={videoUrl}
        />
      )}
    </>
  );
};

export default ClipCard;
