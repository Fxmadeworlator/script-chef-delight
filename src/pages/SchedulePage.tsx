// src/pages/SchedulePage.tsx  (AGTV Guide + auto-scroll to 19:00)
import { useState, useEffect, useRef } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { usePrograms } from "@/contexts/ProgramsContext";

/* 1. KILL VERTICAL SCROLLBAR */
const hideVertCSS = (
  <style>{`
    .no-v-scroll::-webkit-scrollbar {
      display: none;
    }
    .no-v-scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number;
  duration: number;
  day: number;
}


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendar = Array.from({ length: 14 }, (_, i) => {
  const base = new Date(2025, 8, 21 + i);
  return {
    label: days[base.getDay()],
    date: base.getDate(),
    month: base.getMonth() === 8 ? "Sep" : "Oct",
    index: i,
  };
});

const formatTime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
};

export const SchedulePage = () => {
  const { schedulePrograms } = usePrograms();
  const [selectedDate, setSelectedDate] = useState(0);
  const timeSlots = Array.from({ length: 48 }, (_, i) => i * 30);
  const programmesToday = schedulePrograms.filter((p) => p.day === selectedDate % 7);

  /* 2. AUTO-SCROLL TO 19:00 (7 pm) on mount */
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef.current) return;
    // 19:00 = 1140 min → left edge
    const leftPx = (1140 / 1440) * (timeSlots.length * 100); // rough pixel count
    scrollRef.current.scrollLeft = leftPx;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {hideVertCSS}

      {/* Hero Section with Overlay */}
      <div 
        className="relative h-[400px] pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display drop-shadow-lg">
              Your TV Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Plan your viewing experience with our complete program schedule
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-16">
        {/* 3. TEXT CHANGED → "AGTV Guide" */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display">AGTV Guide</h1>
        </div>

        {/* PINNED – SMALL DATE STRIP */}
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {calendar.map((d) => (
            <Button
              key={d.index}
              variant={selectedDate === d.index ? "default" : "outline"}
              onClick={() => setSelectedDate(d.index)}
              className={`min-w-[90px] h-12 flex flex-col items-center justify-center text-xs ${
                selectedDate === d.index
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              <div className="font-medium">{d.label}</div>
              <div className="font-bold">{d.date} {d.month}</div>
            </Button>
          ))}
        </div>

        {/* 4. SHARED HORIZONTAL SCROLL – auto-scrolled to 19:00 */}
        <ScrollArea
          ref={scrollRef}
          className="w-full whitespace-nowrap cursor-grab active:cursor-grabbing no-v-scroll"
        >
          {/* TIME RULER */}
          <div className="flex h-12 bg-muted border-y">
            <div className="min-w-[80px] h-full flex items-center justify-center border-r text-sm font-semibold text-foreground">Time</div>
            {timeSlots.map((t) => (
              <div key={t} className="min-w-[100px] h-full flex items-center justify-center border-r text-xs font-medium text-muted-foreground">
                {formatTime(t)}
              </div>
            ))}
          </div>

          {/* TALL PROGRAMME CARDS – only #677E8A tiles – NO vertical scrollbar */}
          <div className="relative h-32 py-2">
            {/* vertical grid lines */}
            {timeSlots.map((t) => (
              <div
                key={t}
                className="absolute border-r h-full"
                style={{ left: `${(t / 1440) * 100}%`, width: `${(30 / 1440) * 100}%` }}
              />
            ))}

            {programmesToday.map((p) => (
              <div
                key={p.id}
                className="absolute h-32 rounded px-3 py-2 text-sm text-white overflow-hidden bg-[#677E8A]"
                style={{
                  left: `${(p.startTime / 1440) * 100}%`,
                  width: `${(p.duration / 1440) * 100}%`,
                }}
              >
                <div className="font-semibold truncate">{p.title}</div>
                <div className="opacity-90 text-xs">
                  {formatTime(p.startTime)} – {formatTime(p.startTime + p.duration)}
                </div>
              </div>
            ))}
          </div>

          {/* HORIZONTAL SCROLLBAR ONLY – no vertical scrollbar rendered */}
          <ScrollBar
            orientation="horizontal"
            className="h-3 bg-transparent"
            style={{ "--scroll-thumb": "#622347", "--scroll-track": "transparent" } as React.CSSProperties}
          />
        </ScrollArea>
      </div>
    </div>
  );
};
