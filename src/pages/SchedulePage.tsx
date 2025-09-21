// src/pages/SchedulePage.tsx  (single-channel, pop-out scroll)
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number; // minutes from 00:00
  duration: number; // minutes
  day: number; // 0-6 (Sun-Sat)
  category: string;
  host: string;
}

const schedulePrograms: ScheduleProgram[] = [
  {
    id: "morning-devotion",
    title: "Morning Devotion",
    startTime: 360, // 06:00
    duration: 60,
    day: 1,
    category: "Devotional",
    host: "Pastor Samuel Mensah",
  },
  {
    id: "sunday-service",
    title: "Sunday Service Live",
    startTime: 540, // 09:00
    duration: 150,
    day: 0,
    category: "Worship",
    host: "Pastor Emmanuel Asante",
  },
  {
    id: "youth-fire",
    title: "Youth Fire",
    startTime: 1140, // 19:00
    duration: 90,
    day: 3,
    category: "Youth",
    host: "Pastor Grace Owusu",
  },
  {
    id: "bible-study",
    title: "Midweek Bible Study",
    startTime: 1110, // 18:30
    duration: 90,
    day: 3,
    category: "Teaching",
    host: "Dr. Isaac Adjei",
  },
  {
    id: "women-fellowship",
    title: "Women of Faith",
    startTime: 600, // 10:00
    duration: 90,
    day: 6,
    category: "Fellowship",
    host: "Pastor Mary Asante",
  },
  {
    id: "healing-prayer",
    title: "Healing & Miracle Service",
    startTime: 900, // 15:00
    duration: 120,
    day: 5,
    category: "Prayer",
    host: "Prophet Daniel Mensah",
  },
  {
    id: "gospel-music-tue",
    title: "Gospel Music Hour",
    startTime: 1200, // 20:00
    duration: 60,
    day: 2,
    category: "Music",
    host: "Minister John Osei",
  },
  {
    id: "gospel-music-thu",
    title: "Gospel Music Hour",
    startTime: 1200, // 20:00
    duration: 60,
    day: 4,
    category: "Music",
    host: "Minister John Osei",
  },
  {
    id: "family-time",
    title: "Family Foundations",
    startTime: 960, // 16:00
    duration: 60,
    day: 6,
    category: "Family",
    host: "Pastor & Mrs. Kwame Asiedu",
  },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dates = Array.from({ length: 14 }, (_, i) => 21 + i); // 21 Sep – 4 Oct

const formatTime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};

/* ---------- COLOURS FROM IMAGE ---------- */
const categoryStyles: Record<string, string> = {
  Devotional: "bg-[#EOB4B2] text-white",
  Worship: "bg-[#622347] text-white",
  Youth: "bg-[#ABAFB5] text-black",
  Teaching: "bg-[#677E8A] text-white",
  Fellowship: "bg-[#122E34] text-white",
  Prayer: "bg-[#0E1D21] text-white",
  Music: "bg-[#EOB4B2] text-white",
  Family: "bg-[#ABAFB5] text-black",
};

export const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const timeSlots = Array.from({ length: 48 }, (_, i) => i * 30); // 00:00 – 23:30

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#F5F7FA] to-[#E4E8EC]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#122E34] font-display">TV Guide</h1>
          <p className="text-lg text-[#677E8A] mt-2">Your complete AGTV programming schedule</p>
        </div>

        {/* Date strip */}
        <div className="mb-6">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-4">
              {dates.map((d, idx) => (
                <Button
                  key={idx}
                  variant={selectedDate === idx ? "default" : "outline"}
                  onClick={() => setSelectedDate(idx)}
                  className={`min-w-[120px] h-16 flex flex-col items-center justify-center ${
                    selectedDate === idx
                      ? "bg-[#622347] text-white"
                      : "bg-white text-[#122E34] border border-[#ABAFB5]"
                  }`}
                >
                  <div className="text-sm font-medium">{days[idx % 7]}</div>
                  <div className="text-lg font-bold">{d} Sep</div>
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Schedule Grid – SINGLE CHANNEL */}
        <div className="border rounded-lg bg-white shadow-lg overflow-hidden">
          {/* Time header */}
          <div className="bg-[#E4E8EC] border-b">
            <ScrollArea className="w-full">
              <div className="flex">
                <div className="min-w-[80px] h-12 flex items-center justify-center border-r text-sm font-semibold text-[#122E34]">
                  Channel
                </div>
                {timeSlots.map((t) => (
                  <div
                    key={t}
                    className="min-w-[100px] h-12 flex items-center justify-center border-r text-xs font-medium text-[#677E8A]"
                  >
                    {formatTime(t)}
                  </div>
                ))}
              </div>
              {/* POP-OUT SCROLLBAR */}
              <ScrollBar
                orientation="horizontal"
                className="h-3 bg-transparent"
              />
              <style jsx global>{`
                .scroll-area-scrollbar[data-orientation="horizontal"] {
                  background: transparent;
                  height: 10px;
                }
                .scroll-area-scrollbar .scroll-area-thumb {
                  background: #622347;
                  border-radius: 4px;
                }
                .scroll-area-scrollbar .scroll-area-thumb:hover {
                  background: #122E34;
                }
                /* Firefox */
                .scroll-area-scrollbar {
                  scrollbar-width: thin;
                  scrollbar-color: #622347 transparent;
                }
              `}</style>
            </ScrollArea>
          </div>

          {/* AGTV row */}
          <div className="relative">
            <ScrollArea className="w-full h-[300px]">
              <div className="flex border-b">
                <div className="min-w-[80px] h-20 flex items-center justify-center border-r bg-[#F5F7FA]">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-[#122E34]">AGTV</div>
                    <div className="text-xs text-[#677E8A]">151</div>
                  </div>
                </div>
                <div className="relative flex-1 h-20">
                  {/* vertical grid lines */}
                  {timeSlots.map((t) => (
                    <div
                      key={t}
                      className="absolute border-r h-full"
                      style={{ left: `${(t / 1440) * 100}%`, width: `${(30 / 1440) * 100}%` }}
                    />
                  ))}

                  {/* programmes for selected day */}
                  {schedulePrograms
                    .filter((p) => p.day === selectedDate % 7)
                    .map((p) => (
                      <div
                        key={p.id}
                        className={`absolute h-16 mt-2 rounded px-2 py-1 text-xs overflow-hidden ${categoryStyles[p.category]}`}
                        style={{
                          left: `${(p.startTime / 1440) * 100}%`,
                          width: `${(p.duration / 1440) * 100}%`,
                        }}
                      >
                        <div className="font-semibold truncate">{p.title}</div>
                        <div className="opacity-90 truncate">{p.category}</div>
                        <div className="opacity-80 text-xs">
                          {formatTime(p.startTime)} – {formatTime(p.startTime + p.duration)}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <ScrollBar orientation="horizontal" className="h-3 bg-transparent" />
            </ScrollArea>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(categoryStyles).map(([cat, style]) => (
            <div key={cat} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded ${style.split(" ")[0]}`} />
              <span className="text-sm text-[#677E8A]">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
