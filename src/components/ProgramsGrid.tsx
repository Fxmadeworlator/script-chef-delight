interface Program {
  id: string;
  title: string;
  description: string;
  time: string;
  emoji: string;
}

const programs: Program[] = [
  {
    id: "family-foundations",
    title: "Family Foundations",
    description: "Building stronger Christian families through biblical principles, practical advice, and real-life testimonies.",
    time: "Saturdays 4:00 PM - 5:00 PM",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    id: "praise-worship",
    title: "Praise & Worship",
    description: "Uplifting gospel music, contemporary Christian songs, and worship sessions that lift your spirit.",
    time: "Daily 7:00 PM - 8:00 PM",
    emoji: "🎵"
  },
  {
    id: "kingdom-business",
    title: "Kingdom Business",
    description: "Integrating faith with professional life, entrepreneurship tips, and success stories from Christian business leaders.",
    time: "Thursdays 8:00 PM - 9:00 PM",
    emoji: "💼"
  },
];

interface ProgramsGridProps {
  featured?: boolean;
  limit?: number;
}

export const ProgramsGrid = ({ featured = false, limit }: ProgramsGridProps) => {
  const displayPrograms = limit ? programs.slice(0, limit) : programs;

  return (
    <section className={featured ? "py-20" : "py-16"}>
      <div className="container mx-auto px-4">
        {featured && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
              Featured Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our most inspiring shows that strengthen faith and transform communities
            </p>
          </div>
        )}
        
        {/* Hero Image for Programs Page */}
        {!featured && !limit && (
          <div className="mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
              <img 
                src="/src/assets/hero-bg.jpg" 
                alt="AGTV Programs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                    Join Club 1000+
                  </h2>
                  <p className="text-xl md:text-2xl">
                    Exclusive access to premium faith content
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPrograms.map((program, index) => (
            <div key={program.id} className="card-program group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
                <img 
                  src={`https://picsum.photos/400/300?random=${index + 10}`}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground font-display">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="text-primary-dark font-bold text-sm">
                  {program.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Section for Programs Page */}
        {!featured && !limit && (
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
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};