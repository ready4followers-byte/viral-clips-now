import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onOpenChange, videoUrl }: VideoModalProps) => {
  const getEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("youtube.com/shorts/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("youtube.com/watch?v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }
    
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    }
    return url;
  };

  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[350px] md:max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 p-4 shadow-lg duration-200 animate-in fade-in zoom-in-95 sm:rounded-lg">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-card shadow-card-dark ring-1 ring-border">
            {isYouTube ? (
              <iframe
                src={embedUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="h-full w-full"
              />
            )}
            <Dialog.Close className="absolute right-4 top-4 rounded-full bg-background/80 p-2 text-muted-foreground transition-opacity hover:opacity-100 hover:text-foreground focus:outline-none ring-1 ring-border">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoModal;
