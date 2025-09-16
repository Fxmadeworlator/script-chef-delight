import { Button } from "@/components/ui/button";

export const LiveSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Live Indicator */}
          <div className="inline-flex items-center bg-primary text-primary-foreground px-6 py-2 rounded-full mb-6 font-bold">
            <span className="w-2 h-2 bg-foreground rounded-full mr-3 animate-pulse"></span>
            LIVE NOW
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Experience AGTV Live
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of viewers watching inspiring content that transforms lives and strengthens communities across Africa
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button className="btn-primary">
              Join Live Stream
            </Button>
            <Button className="btn-secondary">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};