import { usePrograms } from "@/contexts/ProgramsContext";

export const EventsPage = () => {
  const { events } = usePrograms();

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
    };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 text-white overflow-hidden pt-20">
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

      <div className="container mx-auto px-4 pb-16">

        {/* EVENT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const eventDate = formatEventDate(event.date);
            return (
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
                    <div className="text-xl leading-none">{eventDate.day}</div>
                    <div className="text-sm">{eventDate.month}</div>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
