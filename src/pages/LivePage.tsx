import { PlayCircle, Users, Volume2, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LivePage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Watch AGTV Live
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience God's presence through our live broadcast
          </p>
        </div>
        
        {/* Live Video Player Area */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Video Player Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full mb-6 font-bold">
                  <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                  LIVE NOW
                </div>
                
                <PlayCircle size={80} className="mx-auto mb-4 text-white/80" />
                <h2 className="text-2xl font-bold mb-2">Sunday Service Live</h2>
                <p className="text-white/80 mb-6">Join thousands of viewers in worship and word</p>
                
                <Button className="btn-live">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Start Watching
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
                  <span className="text-sm">Sunday Service - Pastor Emmanuel Asante</span>
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
        
        {/* Live Chat & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Live Chat */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Live Chat</h3>
              <div className="h-96 bg-muted rounded-lg p-4 overflow-y-auto">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-primary">Grace K.</span>
                    <span className="text-muted-foreground">Praise God! This message is touching my heart 🙏</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-primary">Samuel A.</span>
                    <span className="text-muted-foreground">Watching from Kumasi. God bless AGTV!</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-primary">Mary O.</span>
                    <span className="text-muted-foreground">Amen! The Lord is good 🔥</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-primary">David M.</span>
                    <span className="text-muted-foreground">Thank you Pastor for this powerful word</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Today's Schedule */}
          <div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Today's Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-semibold text-sm">Morning Devotion</div>
                    <div className="text-xs text-muted-foreground">6:00 - 7:00 AM</div>
                  </div>
                  <div className="text-xs bg-green-500 text-white px-2 py-1 rounded">Completed</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <div>
                    <div className="font-semibold text-sm">Sunday Service</div>
                    <div className="text-xs text-muted-foreground">9:00 - 11:30 AM</div>
                  </div>
                  <div className="text-xs bg-red-500 text-white px-2 py-1 rounded flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                    LIVE
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-semibold text-sm">Gospel Music Hour</div>
                    <div className="text-xs text-muted-foreground">3:00 - 4:00 PM</div>
                  </div>
                  <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Upcoming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};