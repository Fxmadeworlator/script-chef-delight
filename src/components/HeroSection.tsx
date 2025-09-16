import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative h-[80vh] flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display drop-shadow-lg">
          Faith That <span className="text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">Transforms</span> Lives
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Experience the power of God's word through inspiring programs, uplifting worship, and life-changing messages that bring hope to every home across Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button className="btn-hero">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Live Now
          </Button>
          <Button className="btn-secondary">
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  );
};