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
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            WATCH
          </h1>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Video Player - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Video Player Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    LATEST MESSAGE
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">Deciding To Engage</h2>
                  <p className="text-white/80 mb-6">Pastor Emmanuel Asante | Sep 14, 2025</p>
                  
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    <PlayCircle className="mr-2 h-5 w-5" />
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
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      2,847 watching
                    </div>
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