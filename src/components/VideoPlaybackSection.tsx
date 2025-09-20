import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const VideoPlaybackSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleWatchNow = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="mt-16">
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="aspect-video bg-black relative overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay Content */}
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-sm mb-2 font-medium">Why We Give</p>
              <Button 
                onClick={handleWatchNow}
                className="bg-primary hover:bg-primary/80 text-black font-semibold px-6 py-2"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 text-white hover:text-primary z-10 p-2"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};