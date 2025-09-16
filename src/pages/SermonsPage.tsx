interface Sermon {
  id: string;
  title: string;
  description: string;
  preacher: string;
  emoji: string;
}

const sermons: Sermon[] = [
  {
    id: "faith-moves-mountains",
    title: "Faith That Moves Mountains",
    description: "Discover the power of unwavering faith and how it can overcome any obstacle in your life.",
    preacher: "Pastor John Mensah",
    emoji: "⛰️"
  },
  {
    id: "walking-in-purpose",
    title: "Walking in Your Divine Purpose",
    description: "Understanding God's unique calling on your life and stepping boldly into your destiny.",
    preacher: "Pastor Grace Asante",
    emoji: "🚶‍♂️"
  },
  {
    id: "power-of-prayer",
    title: "The Power of Persistent Prayer",
    description: "Learn how to develop a prayer life that brings breakthrough and transformation.",
    preacher: "Pastor Emmanuel Owusu",
    emoji: "🤲"
  },
  {
    id: "love-without-limits",
    title: "Love Without Limits",
    description: "Exploring God's unconditional love and how it transforms our relationships with others.",
    preacher: "Pastor Mary Boateng",
    emoji: "❤️"
  },
  {
    id: "restoration-and-healing",
    title: "Restoration & Healing",
    description: "God's promise to restore what was lost and bring healing to every broken area.",
    preacher: "Pastor David Adjei",
    emoji: "🌱"
  },
  {
    id: "victorious-living",
    title: "Victorious Living",
    description: "Keys to living a life of victory through Christ's finished work on the cross.",
    preacher: "Pastor Ruth Appiah",
    emoji: "👑"
  }
];

export const SermonsPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Inspiring Sermons
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Life-changing messages that strengthen your faith and transform your walk with God
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="card-program group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl text-primary-foreground overflow-hidden">
                {sermon.emoji}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-5xl">▶</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground font-display">
                  {sermon.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {sermon.description}
                </p>
                <div className="text-primary-dark font-bold text-sm flex items-center">
                  <span className="mr-2">👨‍💼</span>
                  {sermon.preacher}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};