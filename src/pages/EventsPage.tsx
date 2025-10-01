// src/pages/EventsPage.tsx  (left-aligned heading block)
import { useState } from "react"; // kept for future extensibility

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: { day: string; month: string };
  image: string;
}

const events: Event[] = [
  {
    id: "feeding-homeless",
    title: "Feed the Homeless Outreach",
    description: "Join us in serving hot meals and sharing God's love with the homeless community in Accra.",
    location: "Accra Central Market Area",
    date: { day: "18", month: "NOV" },
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "school-visit",
    title: "School Evangelism Program",
    description: "Visiting local schools to share the gospel and provide educational support to students.",
    location: "Kaneshie Methodist School",
    date: { day: "25", month: "NOV" },
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "roadside-preaching",
    title: "Roadside Preaching & Testimony",
    description: "Taking the gospel to the streets with powerful testimonies and open-air preaching.",
    location: "Circle Intersection, Accra",
    date: { day: "02", month: "DEC" },
    image: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "hospital-visit",
    title: "Hospital Ministry Visit",
    description: "Ministering to patients and families, bringing comfort and prayer to those in need.",
    location: "Korle-Bu Teaching Hospital",
    date: { day: "09", month: "DEC" },
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "prison-outreach",
    title: "Prison Ministry Outreach",
    description: "Sharing hope and redemption with inmates through worship, testimony, and counseling.",
    location: "Nsawam Medium Security Prison",
    date: { day: "16", month: "DEC" },
    image: "https://images.pexels.com/photos/8468691/pexels-photo-8468691.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "community-cleanup",
    title: "Community Clean-Up Day",
    description: "Serving our neighborhood by cleaning public spaces and showing Christ's love through action.",
    location: "Dansoman Community",
    date: { day: "23", month: "DEC" },
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "christmas-gift",
    title: "Christmas Gift Distribution",
    description: "Distributing gifts and food packages to underprivileged families during the Christmas season.",
    location: "Various Communities in Accra",
    date: { day: "24", month: "DEC" },
    image: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "new-year-prayer",
    title: "New Year Prayer Walk",
    description: "Walking through our community, praying for God's blessing and breakthrough in the new year.",
    location: "Starting from AGTV Studios",
    date: { day: "01", month: "JAN" },
    image: "https://images.pexels.com/photos/8468542/pexels-photo-8468542.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const EventsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 text-white overflow-hidden mb-16">
        <img
          src="https://images.pexels.com/photos/8674576/pexels-photo-8674576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Community Outreach Events
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Join us in serving our community and sharing God's love through action. 
            Together, we can make a difference in the lives of those around us.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* EVENT CARDS GRID – unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="card-program group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg font-bold text-center z-10 shadow-lg">
                  <div className="text-xl leading-none">{event.date.day}</div>
                  <div className="text-sm">{event.date.month}</div>
                </div>

                {/* Text Overlay at Bottom Left */}
                <div className="absolute bottom-4 left-4 text-white max-w-[calc(100%-2rem)]">
                  <h3 className="text-lg font-bold mb-2 font-display drop-shadow-lg">
                    {event.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-2 leading-relaxed drop-shadow-md line-clamp-2">
                    {event.description}
                  </p>
                  <div className="text-xs font-semibold flex items-center drop-shadow-md">
                    <span className="mr-1">📍</span>
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
