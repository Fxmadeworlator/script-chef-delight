// src/pages/SchedulePage.tsx
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

/* ---------- MOCK PROGRAMMES – 30-MIN GRID, FULL DAY ---------- */
const schedulePrograms: ScheduleProgram[] = Array.from({ length: 48 }, (_, i) => {
  const start = i * 30;
  const titles = [
    "Night Prayers","Quiet Time","Reflections","Dawn Worship","Early Word","Morning Glory",
    "Sun-rise Music","Devotion Plus","Faith Boost","Bible Insight","Worship Hour","Mid-Day Encouragement",
    "Youth Fire","Teaching Time","Family Talk","Healing Service","Gospel Music","Evening Word",
    "Late Sermon","Midnight Praise"
  ];
  return {
    id: `slot-${i}`,
    title: titles[i % titles.length],
    startTime: start,
    duration: 30,
    day: 0, // will be overridden per selected date
    color: [
      "bg-fuchsia-500","bg-indigo-500","bg-sky-500","bg-amber-500","bg-emerald-500","bg-teal-500",
      "bg-rose-500","bg-orange-500","bg-yellow-400","bg-red-500","bg-pink-500","bg-lime-500",
      "bg-cyan-500","bg-violet-500","bg-purple-500","bg-blue-500","bg-green-500","bg-amber-600"
    ][i % 18],
  };
});

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ---------- CORRECT 14-DAY CALENDAR ---------- */
const calendar = Array.from({ length: 14 }, (_, i) => {
  const base = new Date(2025, 8, 21 + i); // 21 Sep 2025
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
  const programmesToday = schedulePrograms.map((p) => ({ ...p, day: selectedDate % 7 }));

  /* dark scrollbar thumb */
  const darkScrollBar = (
    <ScrollBar
      orientation="horizontal"
      className="h-3 bg-transparent"
      style={{
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

        {/* TIME RULER – pinned */}
        <div className="mb-2">
          <ScrollArea className="w-full whitespace-nowrap">
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

        {/* PROGRAMMES – independent horizontal scroll + tall cards + grab cursor */}
        <div className="border rounded-lg bg-white shadow-lg overflow-hidden">
          <ScrollArea className="w-full h-[380px] cursor-grab active:cursor-grabbing">
            <div className="relative h-20 py-2">
              {/* vertical grid lines */}
              {timeSlots.map((t) => (
                <div
                  key={t}
                  className="absolute border-r h-full"
                  style={{ left: `${(t / 1440) * 100}%`, width: `${(30 / 1440) * 100}%` }}
                />
              ))}

              {/* tall programme cards */}
              {programmesToday.map((p) => (
                <div
                  key={p.id}
                  className={`absolute h-20 rounded px-3 py-2 text-sm text-white overflow-hidden ${p.color}`}
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
