import { PlayCircle, Users, Volume2, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LivePage = () => {
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
    },
    {
      title: "Evening Prayer",
      time: "6:00 PM",
      pastor: "Pastor Samuel Adjei",
      status: "upcoming"
    },
    {
      title: "Youth Service",
      time: "7:30 PM",
      pastor: "Pastor David Mensah",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Video Player - Left Side */}
          <div>
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
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Faith That Transforms</h2>
                  <p className="text-white/90 text-lg mb-4">Pastor Emmanuel Asante | Sunday Service</p>
                  <Button className="bg-primary hover:bg-primary/80 text-black font-semibold">
                    Watch Now
                  </Button>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                      <PlayCircle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                      <Volume2 className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Today's Programs - Right Side */}
          <div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-foreground">Today's Programs</h3>
              <div className="space-y-3">
                {todaysPrograms.map((program, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border transition-colors cursor-pointer hover:bg-muted/50 ${
                      program.status === 'live' 
                        ? 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800' 
                        : 'bg-card border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{program.title}</h4>
                      <div className={`text-xs px-2 py-1 rounded flex items-center ${
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
                    <p className="text-xs text-muted-foreground mb-1">{program.time}</p>
                    <p className="text-xs text-muted-foreground">{program.pastor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};