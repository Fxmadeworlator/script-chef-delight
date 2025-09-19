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
    id: "feeding-homeless",
    title: "Feed the Homeless Outreach",
    description: "Join us in serving hot meals and sharing God's love with the homeless community in Accra.",
    location: "Accra Central Market Area",
    date: { day: "18", month: "NOV" },
    emoji: "🍽️"
  },
  {
    id: "school-visit",
    title: "School Evangelism Program",
    description: "Visiting local schools to share the gospel and provide educational support to students.",
    location: "Kaneshie Methodist School",
    date: { day: "25", month: "NOV" },
    emoji: "🏫"
  },
  {
    id: "roadside-preaching",
    title: "Roadside Preaching & Testimony",
    description: "Taking the gospel to the streets with powerful testimonies and open-air preaching.",
    location: "Circle Intersection, Accra",
    date: { day: "02", month: "DEC" },
    emoji: "📢"
  },
  {
    id: "hospital-visit",
    title: "Hospital Ministry Visit",
    description: "Ministering to patients and families, bringing comfort and prayer to those in need.",
    location: "Korle-Bu Teaching Hospital",
    date: { day: "09", month: "DEC" },
    emoji: "🏥"
  },
  {
    id: "prison-outreach",
    title: "Prison Ministry Outreach",
    description: "Sharing hope and redemption with inmates through worship, testimony, and counseling.",
    location: "Nsawam Medium Security Prison",
    date: { day: "16", month: "DEC" },
    emoji: "🔓"
  },
  {
    id: "community-cleanup",
    title: "Community Clean-Up Day",
    description: "Serving our neighborhood by cleaning public spaces and showing Christ's love through action.",
    location: "Dansoman Community",
    date: { day: "23", month: "DEC" },
    emoji: "🧹"
  },
  {
    id: "christmas-gift",
    title: "Christmas Gift Distribution",
    description: "Distributing gifts and food packages to underprivileged families during the Christmas season.",
    location: "Various Communities in Accra",
    date: { day: "24", month: "DEC" },
    emoji: "🎁"
  },
  {
    id: "new-year-prayer",
    title: "New Year Prayer Walk",
    description: "Walking through our community, praying for God's blessing and breakthrough in the new year.",
    location: "Starting from AGTV Studios",
    date: { day: "01", month: "JAN" },
    emoji: "🚶‍♂️"
  }
];

export const EventsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Community Outreach Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us in serving our community and sharing God's love through action
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