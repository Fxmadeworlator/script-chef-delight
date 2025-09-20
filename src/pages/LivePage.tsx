import { PlayCircle, Users, Volume2, Maximize, ArrowRight, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LivePageProps {
  onPageChange?: (page: string) => void;
}

export const LivePage = ({ onPageChange }: LivePageProps = {}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const todaysPrograms = [
    {
      title: "Morning Devotion",
      time: "6:00 AM",
      pastor: "Pastor Emmanuel Asante",
      status: "completed"
    },
    {
      title: "Sunday Service",
      time: "9:00 AM",
      pastor: "Pastor Emmanuel Asante",
      status: "live"
    },
    {
      title: "Gospel Music Hour",
      time: "3:00 PM",
      pastor: "Minister Grace Owusu",
      status: "upcoming"
    }
  ];

  const handleWatchNow = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Video Player - Left Side (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Mock Video Player */}
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
                
                {/* Video Overlay Content - Bottom Left */}
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-3xl font-bold mb-3 drop-shadow-lg">Faith That Transforms</h2>
                  <p className="text-white/90 text-xl mb-6 drop-shadow-md">Pastor Emmanuel Asante | Sunday Service</p>
                  <Button 
                    onClick={handleWatchNow}
                    className="bg-primary hover:bg-primary/80 text-black font-semibold px-8 py-3 text-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Today's Programs - Right Side (1/3 width) */}
          <div>
            <div className="bg-card rounded-2xl p-6 shadow-lg border h-full flex flex-col">
  <h3 className="text-2xl font-bold mb-6 text-foreground shrink-0">Today's Programs</h3>
  <div className="space-y-4 overflow-hidden grow">
                {todaysPrograms.map((program, index) => (
  <div
    key={index}
    className={`p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer ${
      program.status === 'live'
        ? 'bg-red-50 dark:bg-red-950/20'
        : 'bg-card'
    }`}
  >
    <div className="flex items-start justify-between mb-1">
      <h4 className="font-semibold text-sm text-foreground">{program.title}</h4>
      <div className={`text-xs px-2 py-1 rounded-full flex items-center font-medium ${
        program.status === 'live'
          ? 'bg-red-500 text-white'
          : program.status === 'completed'
          ? 'bg-green-500 text-white'
          : 'bg-blue-500 text-white'
      }`}>
        {program.status === 'live' && (
          <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
        )}
        {program.status === 'live' ? 'LIVE' :
         program.status === 'completed' ? 'COMPLETED' : 'UPCOMING'}
      </div>
    </div>
    <p className="text-xs text-muted-foreground mb-0.5 font-medium">{program.time}</p>
    <p className="text-xs text-muted-foreground">{program.pastor}</p>
  </div>
))}
                {/* See More Button */}
                <button 
                  onClick={() => onPageChange?.('schedule')}
                  className="w-full p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base text-primary">See More</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Live Videos Section */}
        <div className="mt-16 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Watch Previous Live Sessions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((videoNum) => (
              <div key={videoNum} className="bg-card rounded-2xl overflow-hidden shadow-lg border">
                <div className="relative aspect-video bg-black">
                  <video
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    poster={`https://picsum.photos/400/225?random=${videoNum}`}
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-foreground">Live Session {videoNum}</h4>
                  <p className="text-muted-foreground mb-4">
                    {videoNum === 1 ? "Faith That Overcomes - Pastor Emmanuel Asante" :
                     videoNum === 2 ? "Kingdom Principles - Minister Grace Owusu" :
                     "Prophetic Declarations - Pastor David Mensah"}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                    <Play className="w-4 h-4 mr-2" />
                    Watch the Replay
                  </Button>
                </div>
              </div>
            ))}
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
    </div>
  );
};
