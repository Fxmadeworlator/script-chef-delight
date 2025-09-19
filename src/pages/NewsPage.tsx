interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  emoji: string;
}

const newsItems: NewsItem[] = [
  {
    id: "new-studio-opening",
    title: "AGTV Opens New State-of-the-Art Studio",
    excerpt: "Our latest broadcasting facility will enable us to reach even more communities across Africa with high-quality Christian programming.",
    category: "Ministry News",
    date: "15 Nov 2024",
    emoji: "📺"
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership with African Churches",
    excerpt: "AGTV announces new partnerships with major church networks to expand our reach and impact across the continent.",
    category: "Partnerships",
    date: "12 Nov 2024",
    emoji: "🤝"
  },
  {
    id: "youth-program-launch",
    title: "New Youth Program 'Next Generation' Launches",
    excerpt: "Exciting new weekly show designed specifically for young adults, addressing relevant topics from a biblical perspective.",
    category: "Programs",
    date: "08 Nov 2024",
    emoji: "🌟"
  },
  {
    id: "community-outreach",
    title: "AGTV Community Outreach Reaches 10,000 Families",
    excerpt: "Our latest humanitarian initiative has provided food, clothing, and spiritual support to communities in need across Ghana.",
    category: "Community",
    date: "05 Nov 2024",
    emoji: "❤️"
  },
  {
    id: "awards-recognition",
    title: "AGTV Wins Excellence in Christian Broadcasting",
    excerpt: "We are honored to receive this prestigious award recognizing our commitment to quality Christian television programming.",
    category: "Recognition",
    date: "01 Nov 2024",
    emoji: "🏆"
  },
  {
    id: "expansion-announcement",
    title: "Expanding to 5 New African Countries",
    excerpt: "AGTV's signal will soon reach millions more viewers as we expand our broadcasting coverage across West and East Africa.",
    category: "Expansion",
    date: "28 Oct 2024",
    emoji: "🌍"
  }
];

export const NewsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Latest News
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments in our ministry and Christian broadcasting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="card-program group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl text-primary-foreground overflow-hidden">
                {item.emoji}
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-foreground px-3 py-2 rounded-lg font-bold text-center z-10">
                  <div className="text-xs">{item.date}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground font-display">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="text-primary-dark font-bold text-sm flex items-center">
                  <span className="mr-2">📂</span>
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};