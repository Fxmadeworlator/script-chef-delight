// File: src/pages/LivePage.tsx

import { PlayCircle, Users, Volume2, Maximize, ArrowRight, X } from "lucide-react";
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

  // Previous Live Sessions data
  const previousLiveSessions = [
    {
      title: "Healing Service",
      date: "September 15, 2024",
      pastor: "Pastor Sarah Johnson",
      duration: "2h 15m",
      views: "1.2k"
    },
    {
      title: "Youth Revival Night",
      date: "September 12, 2024",
      pastor: "Pastor Michael Brown",
      duration: "1h 45m",
      views: "890"
    },
    {
      title: "Prayer and Fasting",
      date: "September 10, 2024",
      pastor: "Pastor Emmanuel Asante",
      duration: "3h 30m",
      views: "2.1k"
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
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Previous Live Sessions Section - Added with larger font */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Previous Live Sessions</h2>
              <div className="space-y-4">
                {previousLiveSessions.map((session, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 shadow-md border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{session.title}</h3>
                      <span className="text-sm text-muted-foreground">{session.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{session.pastor}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{session.duration}</span>
                      <span>{session.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Programs - Right Side (1/3 width) */}
          <div>
            <div className="bg-card rounded-2xl p-6 shadow-lg border aspect-video">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Today's Programs</h3>
              <div className="space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
                {todaysPrograms.map((program, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer ${
                      program.status === 'live'
                        ? 'bg-red-50 dark:bg-red-950/20'
                        : 'bg-card'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-base text-foreground">{program.title}</h4>
                      <div className={`text-xs px-2 py-1 rounded-full flex items-center font-medium ${  // Changed from text-xs to text-xs (same as Minister Grace Owusu font size)
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
                    <p className="text-sm text-muted-foreground mb-1 font-medium">{program.time}</p>
                    <p className="text-sm text-muted-foreground">{program.pastor}</p>
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
