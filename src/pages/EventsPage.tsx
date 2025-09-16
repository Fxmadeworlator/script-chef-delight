interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: {
    day: string;
    month: string;
  };
  emoji: string;
}

const events: Event[] = [
  {
    id: "revival-conference",
    title: "African Revival Conference 2024",
    description: "A powerful gathering of believers from across Africa for worship, teaching, and spiritual renewal.",
    location: "Accra International Conference Centre",
    date: { day: "15", month: "DEC" },
    emoji: "🔥"
  },
  {
    id: "youth-summit",
    title: "Youth Leadership Summit",
    description: "Empowering the next generation of Christian leaders with vision, purpose, and practical skills.",
    location: "University of Ghana, Legon",
    date: { day: "22", month: "NOV" },
    emoji: "👥"
  },
  {
    id: "family-festival",
    title: "Family Festival & Fun Day",
    description: "A celebration of Christian families with activities, games, and inspiring messages for all ages.",
    location: "Independence Square, Accra",
    date: { day: "30", month: "NOV" },
    emoji: "🎪"
  },
  {
    id: "prayer-marathon",
    title: "24-Hour Prayer Marathon",
    description: "Join us for continuous prayer and worship as we seek God's face for breakthrough and blessing.",
    location: "AGTV Studios & Online",
    date: { day: "08", month: "DEC" },
    emoji: "🕊️"
  },
  {
    id: "business-conference",
    title: "Kingdom Business Conference",
    description: "Integrating faith and business for Christian entrepreneurs and marketplace ministers.",
    location: "Kempinski Hotel, Accra",
    date: { day: "12", month: "JAN" },
    emoji: "💼"
  },
  {
    id: "worship-concert",
    title: "Worship Under the Stars",
    description: "An evening of praise and worship featuring top gospel artists from across Africa.",
    location: "National Theatre, Accra",
    date: { day: "25", month: "DEC" },
    emoji: "🌟"
  }
];

export const EventsPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Upcoming Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for life-changing events that strengthen community and deepen faith
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="card-program group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl text-primary-foreground overflow-hidden">
                {event.emoji}
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-foreground px-3 py-2 rounded-lg font-bold text-center z-10">
                  <div className="text-xl leading-none">{event.date.day}</div>
                  <div className="text-sm">{event.date.month}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground font-display">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="text-primary-dark font-bold text-sm flex items-center">
                  <span className="mr-2">📍</span>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};