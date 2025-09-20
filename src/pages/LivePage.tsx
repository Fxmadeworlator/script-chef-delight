// LivePage.tsx
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LivePageProps {
  onPageChange?: (page: string) => void;
}

export const LivePage = ({ onPageChange }: LivePageProps = {}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const todaysPrograms = [
    { title: "Morning Devotion", time: "6:00 AM", pastor: "Pastor Emmanuel Asante", status: "completed" },
    { title: "Sunday Service",  time: "9:00 AM", pastor: "Pastor Emmanuel Asante", status: "live" },
    { title: "Gospel Music Hour", time: "3:00 PM", pastor: "Minister Grace Owusu", status: "upcoming" }
  ];

  const handleWatchNow = () => setIsFullscreen(true);
  const handleCloseFullscreen = () => setIsFullscreen(false);

  /*  PREVIOUS SESSIONS  –  edit here only  */
  const previousSessions = [
    { id: "Qx1HFNm94TE", title: "Sunday Revival 2024-06-09" },
    { id: "jfKfPfyJRdk", title: "Mid-Week Prayer 2024-06-05" },
    { id: "dQw4w9WgXcQ", title: "Youth Praise Night 2024-05-26" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        {/*  LIVE PLAYER + TODAY'S PROGRAMS  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/*  Video Player  */}
          <div className="lg:col-span-2">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black relative overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/*  Overlay Text  */}
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-3xl font-bold mb-3 drop-shadow-lg">Faith That Transforms</h2>
                  <p className="text-white/90 text-xl mb-6 drop-shadow-md">Pastor Emmanuel Asante | Sunday Service</p>
                  <Button onClick={handleWatchNow} className="bg-primary hover:bg-primary/80 text-black font-semibold px-8 py-3 text-lg">
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/*  Today's Programs  */}
          <div>
            <div className="bg-card rounded-2xl p-4 shadow-lg border h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-foreground shrink-0">Today's Programs</h3>
              <div className="space-y-4 overflow-hidden grow">
                {todaysPrograms.map((program, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer ${
                      program.status === 'live' ? 'bg-red-50 dark:bg-red-950/20' : 'bg-card'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-base text-foreground">{program.title}</h4>
                      <div className={`text-xs px-2 py-1 rounded-full flex items-center font-medium ${
                        program.status === 'live' ? 'bg-red-500 text-white' :
                        program.status === 'completed' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {program.status === 'live' && <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>}
                        {program.status === 'live' ? 'LIVE' : program.status === 'completed' ? 'COMPLETED' : 'UPCOMING'}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1 font-medium">{program.time}</p>
                    <p className="text-xs text-muted-foreground">{program.pastor}</p>
                  </div>
                ))}
                <button onClick={() => onPageChange?.('schedule')} className="w-full p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors group">
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

      {/*  FULLSCREEN MODAL  */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button onClick={handleCloseFullscreen} className="absolute top-4 right-4 text-white hover:text-primary z-10 p-2">
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full h-full">
            <video className="w-full h-full object-contain" autoPlay controls playsInline>
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/*  PREVIOUS LIVE SESSIONS  –  heading & first card share the same line  */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Previous Live Sessions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {previousSessions.map((s) => (
            <a
              key={s.id}
              href={`https://www.youtube.com/watch?v=${s.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/*  Thumbnail (no play button)  */}
              <div className="aspect-video bg-black relative">
                <img
                  src={`https://img.youtube.com/vi/${s.id}/maxresdefault.jpg`}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              </div>

              {/*  Title  */}
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-sm text-foreground line-clamp-2">{s.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
