import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ProgramTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number;
  duration: number;
  day: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

interface ProgramsContextType {
  tiers: ProgramTier[];
  headerContent: {
    title: string;
    description: string[];
  };
  schedulePrograms: ScheduleProgram[];
  events: Event[];
  updateTier: (id: string, tier: ProgramTier) => void;
  updateHeaderContent: (content: { title: string; description: string[] }) => void;
  addScheduleProgram: (program: ScheduleProgram) => void;
  updateScheduleProgram: (id: string, program: ScheduleProgram) => void;
  deleteScheduleProgram: (id: string) => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: string, event: Event) => void;
  deleteEvent: (id: string) => void;
}

const ProgramsContext = createContext<ProgramsContextType | undefined>(undefined);

const defaultTiers: ProgramTier[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: 5,
    description: "Perfect for those starting their faith journey",
    features: [
      "Early access to episodes",
      "Monthly newsletter (Twi + English)",
      "Community forum access",
      "Basic prayer support"
    ]
  },
  {
    id: "silver",
    name: "Silver",
    price: 15,
    description: "Enhanced experience for growing believers",
    features: [
      "All Bronze benefits",
      "HD video downloads (Twi subtitles)",
      "Exclusive live Q&A sessions",
      "Priority prayer support",
      "Monthly devotionals"
    ],
    recommended: true
  },
  {
    id: "gold",
    name: "Gold",
    price: 25,
    description: "Premium support for dedicated partners",
    features: [
      "All Silver benefits",
      "Direct pastor access (Accra studio)",
      "Priority prayer chain",
      "Exclusive village crusade invites",
      "Quarterly retreats in Ghana",
      "Personal mentorship (Twi/English)"
    ]
  }
];

const defaultHeaderContent = {
  title: "Support AGTV",
  description: [
    "AGTV is Ghana's 24-hour Christian television network, broadcasting from Accra to every region, village and hospital. Every cedi you give keeps the signal on air, produces fresh Twi/English Gospel content, and reaches millions who have never heard the name of Jesus.",
    "When you subscribe you don't just watch — you partner. You fund village crusades in the Northern Region, youth outreaches in Kumasi, emergency relief in Takoradi, and the daily costs of our Accra studio uplink. In return you get early access, HD downloads with Twi subtitles, direct pastor chat, and the joy of knowing you are literally sending the Gospel into homes, hospitals, prisons and remote villages across Ghana.",
    "Join the family today. Cancel anytime. 100 % of every cedi goes to ministry operations — no admin fees, no middle-men, just Jesus on air, 24/7."
  ]
};

const defaultSchedulePrograms: ScheduleProgram[] = [
  { id: "sun-06:00", title: "Morning Glory", startTime: 360, duration: 120, day: 0 },
  { id: "sun-08:00", title: "Sun-rise Music", startTime: 480, duration: 60, day: 0 },
  { id: "sun-09:00", title: "Sunday Service Live", startTime: 540, duration: 120, day: 0 },
  { id: "sun-12:00", title: "Mid-Day Encouragement", startTime: 720, duration: 60, day: 0 },
  { id: "sun-14:00", title: "Teaching Time", startTime: 840, duration: 60, day: 0 },
  { id: "sun-15:00", title: "Healing & Miracle", startTime: 900, duration: 120, day: 0 },
  { id: "sun-18:00", title: "Evening Word", startTime: 1080, duration: 60, day: 0 },
  { id: "sun-19:00", title: "Youth Fire", startTime: 1140, duration: 90, day: 0 },
  { id: "sun-21:00", title: "Gospel Music Hour", startTime: 1260, duration: 60, day: 0 },
  { id: "sun-22:00", title: "Late-Night Sermon", startTime: 1320, duration: 60, day: 0 },
];

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Youth Conference 2024",
    date: "2024-12-15",
    time: "9:00 AM",
    location: "AGTV Main Auditorium",
    description: "Join us for an inspiring youth conference featuring dynamic speakers and worship.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800"
  },
  {
    id: "2",
    title: "Christmas Celebration Service",
    date: "2024-12-25",
    time: "6:00 PM",
    location: "AGTV Studios",
    description: "Celebrate the birth of Christ with us in a special Christmas service.",
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800"
  },
  {
    id: "3",
    title: "Gospel Concert Night",
    date: "2025-01-10",
    time: "7:00 PM",
    location: "National Theatre, Accra",
    description: "Join us for an evening of praise and worship with renowned gospel artists from across Ghana.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800"
  },
  {
    id: "4",
    title: "Community Outreach - Kumasi",
    date: "2025-01-18",
    time: "9:00 AM",
    location: "Kumasi Central Market",
    description: "Reaching out to our community with love, support, and the Gospel message.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800"
  },
  {
    id: "5",
    title: "Family Fun Day",
    date: "2025-02-02",
    time: "10:00 AM",
    location: "AGTV Church Grounds",
    description: "A day of fun activities, games, and fellowship for the whole family.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800"
  },
  {
    id: "6",
    title: "Women's Conference 2025",
    date: "2025-02-14",
    time: "5:00 PM",
    location: "Conference Hall, Accra",
    description: "Empowering women through faith, fellowship, and spiritual growth with inspiring speakers.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800"
  },
  {
    id: "7",
    title: "Prayer & Fasting Week",
    date: "2025-03-03",
    time: "6:00 AM",
    location: "AGTV Prayer Room",
    description: "Week-long prayer and fasting program for spiritual breakthrough and divine intervention.",
    image: "https://images.unsplash.com/photo-1518331485707-f5c7b18831f0?w=800"
  },
  {
    id: "8",
    title: "Easter Sunrise Service",
    date: "2025-04-20",
    time: "6:00 AM",
    location: "AGTV Main Auditorium",
    description: "Celebrate the resurrection of Jesus Christ with a special sunrise worship service.",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800"
  },
  {
    id: "9",
    title: "Leadership Summit",
    date: "2025-05-15",
    time: "8:00 AM",
    location: "Leadership Training Center",
    description: "Equipping and empowering church leaders for effective ministry and kingdom impact.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800"
  },
  {
    id: "10",
    title: "Youth Crusade - Takoradi",
    date: "2025-06-07",
    time: "4:00 PM",
    location: "Takoradi Sports Stadium",
    description: "Massive youth evangelism crusade with contemporary worship and powerful preaching.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800"
  },
  {
    id: "11",
    title: "Marriage Enrichment Seminar",
    date: "2025-07-12",
    time: "4:00 PM",
    location: "AGTV Main Hall",
    description: "Strengthening marriages through biblical principles and practical guidance from experienced counselors.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800"
  },
  {
    id: "12",
    title: "Back to School Blessing",
    date: "2025-08-30",
    time: "10:00 AM",
    location: "AGTV Church Campus",
    description: "Special service to pray and bless students as they prepare for the new academic year.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
  }
];

export const ProgramsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tiers, setTiers] = useState<ProgramTier[]>(defaultTiers);
  const [headerContent, setHeaderContent] = useState(defaultHeaderContent);
  const [schedulePrograms, setSchedulePrograms] = useState<ScheduleProgram[]>(defaultSchedulePrograms);
  const [events, setEvents] = useState<Event[]>(defaultEvents);

  const updateTier = (id: string, tier: ProgramTier) => {
    setTiers(prevTiers => prevTiers.map(t => t.id === id ? tier : t));
  };

  const updateHeaderContent = (content: { title: string; description: string[] }) => {
    setHeaderContent(content);
  };

  const addScheduleProgram = (program: ScheduleProgram) => {
    setSchedulePrograms(prev => [...prev, program]);
  };

  const updateScheduleProgram = (id: string, program: ScheduleProgram) => {
    setSchedulePrograms(prev => prev.map(p => p.id === id ? program : p));
  };

  const deleteScheduleProgram = (id: string) => {
    setSchedulePrograms(prev => prev.filter(p => p.id !== id));
  };

  const addEvent = (event: Event) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (id: string, event: Event) => {
    setEvents(prev => prev.map(e => e.id === id ? event : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <ProgramsContext.Provider value={{ 
      tiers, 
      headerContent, 
      schedulePrograms,
      events,
      updateTier, 
      updateHeaderContent,
      addScheduleProgram,
      updateScheduleProgram,
      deleteScheduleProgram,
      addEvent,
      updateEvent,
      deleteEvent
    }}>
      {children}
    </ProgramsContext.Provider>
  );
};

export const usePrograms = () => {
  const context = useContext(ProgramsContext);
  if (!context) {
    throw new Error('usePrograms must be used within ProgramsProvider');
  }
  return context;
};
