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
  color: string; // bright tailwind class
}

/* ---------- MOCK PROGRAMS – TIMES ALIGN TO 30-MIN GRID ---------- */
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
const dates = Array.from({ length: 14 }, (_, i) => 21 + i); // 21 Sep – 4 Oct

const formatTime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};

export const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const timeSlots = Array.from({ length: 48 }, (_, i) => i * 30); // 00:00 – 23:30

  /* pick programmes for selected day (same grid every day here) */
  const programmesToday = schedulePrograms.map((p) => ({ ...p, day: selectedDate % 7 }));

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#F5F7FA] to-[#E4E8EC]">
      <div className="container mx-auto px-4">
        {/* LEFT-ALIGNED HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#122E34] font-display">TV Guide</h1>
        </div>

        {/* DATE STRIP – horizontal scroll */}
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
            <ScrollBar orientation="horizontal" className="h-3 bg-transparent" />
          </ScrollArea>
        </div>

        {/* PROGRAMME GRID – horizontal scroll */}
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
              <ScrollBar orientation="horizontal" className="h-3 bg-transparent" />
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

                  {/* programmes – times align to grid */}
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
              </div>
              <ScrollBar orientation="horizontal" className="h-3 bg-transparent" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};
