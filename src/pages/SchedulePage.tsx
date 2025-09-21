// src/pages/SchedulePage.tsx  (longer shows + blank slots + no vert scrollbar)
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number;
  duration: number;
  day: number;
  color: string;
}

/* ---------- LONGER SHOWS (60-120 min) + BLANK HOURS ---------- */
const schedulePrograms: ScheduleProgram[] = [
  { id: "06:00", title: "Morning Glory", startTime: 360, duration: 120, day: 0, color: "bg-amber-500" },
  { id: "08:00", title: "Sun-rise Music", startTime: 480, duration: 60, day: 0, color: "bg-emerald-500" },
  { id: "09:00", title: "Sunday Service Live", startTime: 540, duration: 120, day: 0, color: "bg-rose-500" },
  { id: "12:00", title: "Mid-Day Encouragement", startTime: 720, duration: 60, day: 0, color: "bg-teal-500" },
  { id: "14:00", title: "Teaching Time", startTime: 840, duration: 60, day: 0, color: "bg-orange-500" },
  { id: "15:00", title: "Healing & Miracle", startTime: 900, duration: 120, day: 0, color: "bg-red-500" },
  { id: "18:00", title: "Evening Word", startTime: 1080, duration: 60, day: 0, color: "bg-yellow-400" },
  { id: "19:00", title: "Youth Fire", startTime: 1140, duration: 90, day: 0, color: "bg-pink-500" },
  { id: "21:00", title: "Gospel Music Hour", startTime: 1260, duration: 60, day: 0, color: "bg-cyan-500" },
  { id: "22:00", title: "Late-Night Sermon", startTime: 1320, duration: 60, day: 0, color: "bg-purple-500" },
];

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

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#F5F7FA] to-[#E4E8EC]">
      <div className="container mx-auto px-4">
        {/* LEFT TITLE */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#122E34] font-display">TV Guide</h1>
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
                  ? "bg-[#622347] text-white"
                  : "bg-white text-[#122E34] border border-[#ABAFB5]"
              }`}
            >
              <div className="font-medium">{d.label}</div>
              <div className="font-bold">{d.date} {d.month}</div>
            </Button>
          ))}
        </div>

        {/* SHARED HORIZONTAL SCROLL – time + programmes only */}
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

            {/* longer shows – blanks automatically appear where no card is placed */}
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

          {/* HIDDEN VERTICAL SCROLLBAR – only horizontal shows */}
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
