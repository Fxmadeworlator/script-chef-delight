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
  {
    id: "little-lights",
    title: "Little Lights",
    description: "Fun, educational, and faith-filled content designed to nurture young hearts and minds in Christian values.",
    time: "Saturdays 10:00 AM - 11:00 AM",
    emoji: "👶"
  }
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
          {displayPrograms.map((program) => (
            <div key={program.id} className="card-program group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl text-primary-foreground overflow-hidden">
                {program.emoji}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-5xl">▶</span>
                </div>
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
      </div>
    </section>
  );
};