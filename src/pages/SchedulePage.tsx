interface ScheduleProgram {
  id: string;
  title: string;
  description: string;
  time: string;
  day: string;
  category: string;
  host: string;
}

const schedulePrograms: ScheduleProgram[] = [
  {
    id: "morning-devotion",
    title: "Morning Devotion",
    description: "Start your day with powerful prayers and biblical insights",
    time: "6:00 - 7:00 AM",
    day: "Monday - Friday",
    category: "Devotional",
    host: "Pastor Samuel Mensah"
  },
  {
    id: "sunday-service",
    title: "Sunday Service Live",
    description: "Join our weekly worship service with inspiring messages",
    time: "9:00 - 11:30 AM",
    day: "Sunday",
    category: "Worship",
    host: "Pastor Emmanuel Asante"
  },
  {
    id: "youth-fire",
    title: "Youth Fire",
    description: "High-energy program designed for young believers",
    time: "7:00 - 8:30 PM",
    day: "Wednesday",
    category: "Youth",
    host: "Pastor Grace Owusu"
  },
  {
    id: "bible-study",
    title: "Midweek Bible Study",
    description: "Deep dive into God's word with practical applications",
    time: "6:30 - 8:00 PM",
    day: "Wednesday",
    category: "Teaching",
    host: "Dr. Isaac Adjei"
  },
  {
    id: "women-fellowship",
    title: "Women of Faith",
    description: "Empowering women through biblical teaching and fellowship",
    time: "10:00 - 11:30 AM",
    day: "Saturday",
    category: "Fellowship",
    host: "Pastor Mary Asante"
  },
  {
    id: "healing-prayer",
    title: "Healing & Miracle Service",
    description: "Special service focusing on divine healing and miracles",
    time: "3:00 - 5:00 PM",
    day: "Friday",
    category: "Prayer",
    host: "Prophet Daniel Mensah"
  },
  {
    id: "gospel-music",
    title: "Gospel Music Hour",
    description: "Uplifting gospel music from across Africa and beyond",
    time: "8:00 - 9:00 PM",
    day: "Tuesday & Thursday",
    category: "Music",
    host: "Minister John Osei"
  },
  {
    id: "family-time",
    title: "Family Foundations",
    description: "Building strong Christian families with practical wisdom",
    time: "4:00 - 5:00 PM",
    day: "Saturday",
    category: "Family",
    host: "Pastor & Mrs. Kwame Asiedu"
  }
];

export const SchedulePage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Weekly Schedule
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tune in to AGTV for inspiring programs that will strengthen your faith and transform your life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedulePrograms.map((program) => (
            <div key={program.id} className="card-program group">
              <div className="relative h-32 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden">
                <div className="text-primary-foreground font-bold text-lg">{program.category}</div>
                
                {/* Live Badge for current programs */}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                  LIVE
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground font-display">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-primary-dark font-semibold">
                    <span className="mr-2">🕒</span>
                    {program.time}
                  </div>
                  <div className="flex items-center text-primary-dark font-semibold">
                    <span className="mr-2">📅</span>
                    {program.day}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <span className="mr-2">👨‍💼</span>
                    {program.host}
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