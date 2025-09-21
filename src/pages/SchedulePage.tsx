// src/pages/SchedulePage.tsx  (taller cards + random programmes for first 5 days)
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number; // minutes from 00:00
  duration: number; // minutes
  day: number;
  color: string;
}

/* ---------- RANDOM PROGRAMMES – FIRST 5 DAYS (00:00-23:30) ---------- */
const programmeTitles = [
  "Night Prayers","Quiet Time","Reflections","Dawn Worship","Early Word","Morning Glory",
  "Sun-rise Music","Devotion Plus","Faith Boost","Bible Insight","Worship Hour","Mid-Day Encouragement",
  "Youth Fire","Teaching Time","Family Talk","Healing Service","Gospel Music","Evening Word",
  "Late Sermon","Midnight Praise","Prayer Line","Song of Hope","Revival Hour","Q&A with Pastors"
];

const brightPalette = [
  "bg-fuchsia-500","bg-indigo-500","bg-sky-500","bg-amber-500","bg-emerald-500","bg-teal-500",
  "bg-rose-500","bg-orange-500","bg-yellow-400","bg-red-500","bg-pink-500","bg-lime-500",
  "bg-cyan-500","bg-violet-500","bg-purple-500","bg-blue-500","bg-green-500","bg-amber-600"
];

const schedulePrograms: ScheduleProgram[] = Array.from({ length: 5 * 48 }, (_, i) => {
  const day = Math.floor(i / 48);
  const slot = i % 48;
  const start = slot * 30;
  return {
    id: `d${day}-s${slot}`,
    title: programmeTitles[Math.floor(Math.random() * programmeTitles.length)],
    startTime: start,
    duration: 30,
    day: day, // 0-4 (Sun-Thu)
    color: brightPalette[Math.floor(Math.random() * brightPalette.length)],
  };
});

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
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};

export const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const timeSlots = Array.from({ length: 48 }, (_, i) => i * 30); // 00:00 … 23:30
  const programmesToday = schedulePrograms.filter((p) => p.day === selectedDate % 7);

  /* dark scrollbar thumb */
  const darkScrollBar = (
    <ScrollBar
      orientation="horizontal"
      className="h-3 bg-transparent"
      style={{ "--scroll-thumb": "#622347", "--scroll-track": "transparent" } as React.CSSProperties}
    />
  );

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#F5F7FA] to-[#E4E8EC]">
      <div className="container mx-auto px-4">
        {/* LEFT TITLE */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#122E34] font-display">TV Guide</h1>
        </div>

        {/* PINNED – SMALLER DATE STRIP */}
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {calendar.map((d) => (
            <Button
              key={d.index}
              variant={selectedDate === d.index ? "default" : "outline"}
              onClick={() => setSelectedDate(d.index)}
              className={`min-w-[90px] h-12 flex flex-col items-center justify-center text-xs ${
                selectedDate === d.index
                  ? "bg-[#622347] text-white"
                  : "bg-white text-[#122E34] border border-[#ABAFB5]"
              }`}
            >
              <div className="font-medium">{d.label}</div>
              <div className="font-bold">
                {d.date} {d.month}
              </div>
            </Button>
          ))}
        </div>

        {/* TIME + PROGRAMMES – single scroll lane with grab cursor */}
        <ScrollArea className="w-full whitespace-nowrap cursor-grab active:cursor-grabbing">
          {/* TIME RULER */}
          <div className="flex h-12 bg-[#E4E8EC] border-y">
            <div className="min-w-[80px] h-full flex items-center justify-center border-r text-sm font-semibold text-[#122E34]">Time</div>
            {timeSlots.map((t) => (
              <div key={t} className="min-w-[100px] h-full flex items-center justify-center border-r text-xs font-medium text-[#677E8A]">
                {formatTime(t)}
              </div>
            ))}
          </div>

          {/* TALL PROGRAMME CARDS – 32 px high (h-32) */}
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
                className={`absolute h-32 rounded px-3 py-2 text-sm text-white overflow-hidden ${p.color}`}
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
  );
};
