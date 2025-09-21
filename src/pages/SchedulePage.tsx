// src/pages/SchedulePage.tsx
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number; // minutes from 00:00
  duration: number; // minutes
  day: number; // 0-6 (Sun-Sat)
  color: string;
}

/* ---------- 30-MIN MOCK PROGRAMMES – GRID-ALIGNED ---------- */
const schedulePrograms: ScheduleProgram[] = [
  { id: "00:00", title: "Night Prayers", startTime: 0, duration: 30, day: 0, color: "bg-fuchsia-500" },
  { id: "00:30", title: "Quiet Time", startTime: 30, duration: 30, day: 0, color: "bg-indigo-500" },
  { id: "01:00", title: "Reflections", startTime: 60, duration: 30, day: 0, color: "bg-sky-500" },
  { id: "06:00", title: "Morning Glory", startTime: 360, duration: 60, day: 0, color: "bg-amber-500" },
  { id: "09:00", title: "Sunday Service Live", startTime: 540, duration: 120, day: 0, color: "bg-emerald-500" },
  { id: "12:00", title: "Mid-Day Encouragement", startTime: 720, duration: 30, day: 0, color: "bg-teal-500" },
  { id: "15:00", title: "Healing & Miracle", startTime: 900, duration: 120, day: 0, color: "bg-rose-500" },
  { id: "18:30", title: "Evening Word", startTime: 1110, duration: 60, day: 0, color: "bg-orange-500" },
  { id: "20:00", title: "Gospel Music Hour", startTime: 1200, duration: 60, day: 0, color: "bg-yellow-400" },
  { id: "22:00", title: "Late-Night Sermon", startTime: 1320, duration: 60, day: 0, color: "bg-red-500" },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ---------- CORRECT 14-DAY CALENDAR ---------- */
const calendar = Array.from({ length: 14 }, (_, i) => {
  const base = new Date(2025, 8, 21 + i); // 21 Sep 2025
  return {
    label: days[base.getDay()],
    date: base.getDate(),
    month: base.getMonth() === 8 ? "Sep" : "Oct", // roll into Oct
    index: i,
  };
});

const formatTime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};

export const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [scrollTime, setScrollTime] = useState(0); // keeps scroll position if needed

  const timeSlots = Array.from({ length: 48 }, (_, i) => i * 30); // 00:00 – 23:30

  const programmesToday = schedulePrograms.map((p) => ({ ...p, day: selectedDate % 7 }));

  /* reusable dark scrollbar */
  const darkScrollBar = (
    <ScrollBar
      orientation="horizontal"
      className="h-3 bg-transparent"
      style={{
        // web-kit
        "--scroll-thumb": "#622347",
        "--scroll-track": "transparent",
      } as React.CSSProperties}
    />
  );

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#F5F7FA] to-[#E4E8EC]">
      <div className="container mx-auto px-4">
        {/* LEFT TITLE */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#122E34] font-display">TV Guide</h1>
        </div>

        {/* DATE SCROLL */}
        <div className="mb-6">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-4">
              {calendar.map((d) => (
                <Button
                  key={d.index}
                  variant={selectedDate === d.index ? "default" : "outline"}
                  onClick={() => setSelectedDate(d.index)}
                  className={`min-w-[120px] h-16 flex flex-col items-center justify-center ${
                    selectedDate === d.index
                      ? "bg-[#622347] text-white"
                      : "bg-white text-[#122E34] border border-[#ABAFB5]"
                  }`}
                >
                  <div className="text-sm font-medium">{d.label}</div>
                  <div className="text-lg font-bold">
                    {d.date} {d.month}
                  </div>
                </Button>
              ))}
            </div>
            {darkScrollBar}
          </ScrollArea>
        </div>

        {/* TIME RULER SCROLL */}
        <div className="mb-2">
          <ScrollArea className="w-full whitespace-nowrap" onScrollCapture={(e) => setScrollTime(e.currentTarget.scrollLeft)}>
            <div className="flex h-12 bg-[#E4E8EC] border-y">
              <div className="min-w-[80px] h-full flex items-center justify-center border-r text-sm font-semibold text-[#122E34]">Time</div>
              {timeSlots.map((t) => (
                <div key={t} className="min-w-[100px] h-full flex items-center justify-center border-r text-xs font-medium text-[#677E8A]">
                  {formatTime(t)}
                </div>
              ))}
            </div>
            {darkScrollBar}
          </ScrollArea>
        </div>

        {/* PROGRAMME GRID – SINGLE CHANNEL */}
        <div className="border rounded-lg bg-white shadow-lg overflow-hidden">
          <ScrollArea className="w-full h-[320px]">
            <div className="relative h-20">
              {/* vertical grid lines */}
              {timeSlots.map((t) => (
                <div
                  key={t}
                  className="absolute border-r h-full"
                  style={{ left: `${(t / 1440) * 100}%`, width: `${(30 / 1440) * 100}%` }}
                />
              ))}

              {/* programmes – times match ruler exactly */}
              {programmesToday.map((p) => (
                <div
                  key={p.id}
                  className={`absolute h-16 mt-2 rounded px-2 py-1 text-xs text-white overflow-hidden ${p.color}`}
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
            {darkScrollBar}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
