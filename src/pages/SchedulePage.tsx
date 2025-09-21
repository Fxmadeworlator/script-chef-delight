// src/pages/SchedulePage.tsx  (longer shows + blank hours + no vert scrollbar + horiz scroll only)
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

/* ---------- LONGER SHOWS – 60-120 min + BLANK HOURS ---------- */
const schedulePrograms: ScheduleProgram[] = [
  // SUN (day 0)
  { id: "sun-06:00", title: "Morning Glory", startTime: 360, duration: 120, day: 0, color: "bg-amber-500" },
  { id: "sun-08:00", title: "Sun-rise Music", startTime: 480, duration: 60, day: 0, color: "bg-emerald-500" },
  { id: "sun-09:00", title: "Sunday Service Live", startTime: 540, duration: 120, day: 0, color: "bg-rose-500" },
  { id: "sun-12:00", title: "Mid-Day Encouragement", startTime: 720, duration: 60, day: 0, color: "bg-teal-500" },
  { id: "sun-14:00", title: "Teaching Time", startTime: 840, duration: 60, day: 0, color: "bg-orange-500" },
  { id: "sun-15:00", title: "Healing & Miracle", startTime: 900, duration: 120, day: 0, color: "bg-red-500" },
  { id: "sun-18:00", title: "Evening Word", startTime: 1080, duration: 60, day: 0, color: "bg-yellow-400" },
  { id: "sun-19:00", title: "Youth Fire", startTime: 1140, duration: 90, day: 0, color: "bg-pink-500" },
  { id: "sun-21:00", title: "Gospel Music Hour", startTime: 1260, duration: 60, day: 0, color: "bg-cyan-500" },
  { id: "sun-22:00", title: "Late-Night Sermon", startTime: 1320, duration: 60, day: 0, color: "bg-purple-500" },

  // MON (day 1) – longer random shows
  { id: "mon-06:00", title: "Mon Morning Glory", startTime: 360, duration: 120, day: 1, color: "bg-indigo-500" },
  { id: "mon-08:30", title: "Mon Teaching", startTime: 510, duration: 90, day: 1, color: "bg-sky-500" },
  { id: "mon-10:30", title: "Mon Mid-Day", startTime: 630, duration: 60, day: 1, color: "bg-emerald-500" },
  { id: "mon-12:00", title: "Mon Family Talk", startTime: 720, duration: 60, day: 1, color: "bg-amber-500" },
  { id: "mon-14:00", title: "Mon Healing", startTime: 840, duration: 120, day: 1, color: "bg-rose-500" },
  { id: "mon-16:30", title: "Mon Youth Fire", startTime: 990, duration: 90, day: 1, color: "bg-pink-500" },
  { id: "mon-18:30", title: "Mon Evening Word", startTime: 1110, duration: 60, day: 1, color: "bg-yellow-400" },
  { id: "mon-20:00", title: "Mon Gospel Music", startTime: 1200, duration: 60, day: 1, color: "bg-cyan-500" },
  { id: "mon-22:00", title: "Mon Late Sermon", startTime: 1320, duration: 60, day: 1, color: "bg-purple-500" },

  // TUE (day 2)
  { id: "tue-06:00", title: "Tue Morning Glory", startTime: 360, duration: 120, day: 2, color: "bg-teal-500" },
  { id: "tue-08:30", title: "Tue Teaching", startTime: 510, duration: 90, day: 2, color: "bg-orange-500" },
  { id: "tue-10:30", title: "Tue Mid-Day", startTime: 630, duration: 60, day: 2, color: "bg-green-500" },
  { id: "tue-12:00", title: "Tue Family Talk", startTime: 720, duration: 60, day: 2, color: "bg-amber-600" },
  { id: "tue-14:00", title: "Tue Healing", startTime: 840, duration: 120, day: 2, color: "bg-rose-600" },
  { id: "tue-16:30", title: "Tue Youth Fire", startTime: 990, duration: 90, day: 2, color: "bg-pink-600" },
  { id: "tue-18:30", title: "Tue Evening Word", startTime: 1110, duration: 60, day: 2, color: "bg-yellow-500" },
  { id: "tue-20:00", title: "Tue Gospel Music", startTime: 1200, duration: 60, day: 2, color: "bg-cyan-600" },
  { id: "tue-22:00", title: "Tue Late Sermon", startTime: 1320, duration: 60, day: 2, color: "bg-purple-600" },

  // WED (day 3)
  { id: "wed-06:00", title: "Wed Morning Glory", startTime: 360, duration: 120, day: 3, color: "bg-indigo-600" },
  { id: "wed-08:30", title: "Wed Teaching", startTime: 510, duration: 90, day: 3, color: "bg-sky-600" },
  { id: "wed-10:30", title: "Wed Mid-Day", startTime: 630, duration: 60, day: 3, color: "bg-emerald-600" },
  { id: "wed-12:00", title: "Wed Family Talk", startTime: 720, duration: 60, day: 3, color: "bg-amber-700" },
  { id: "wed-14:00", title: "Wed Healing", startTime: 840, duration: 120, day: 3, color: "bg-rose-700" },
  { id: "wed-16:30", title: "Wed Youth Fire", startTime: 990, duration: 90, day: 3, color: "bg-pink-700" },
  { id: "wed-18:30", title: "Wed Evening Word", startTime: 1110, duration: 60, day: 3, color: "bg-yellow-600" },
  { id: "wed-20:00", title: "Wed Gospel Music", startTime: 1200, duration: 60, day: 3, color: "bg-cyan-700" },
  { id: "wed-22:00", title: "Wed Late Sermon", startTime: 1320, duration: 60, day: 3, color: "bg-purple-700" },

  // THU (day 4)
  { id: "thu-06:00", title: "Thu Morning Glory", startTime: 360, duration: 120, day: 4, color: "bg-teal-700" },
  { id: "thu-08:30", title: "Thu Teaching", startTime: 510, duration: 90, day: 4, color: "bg-orange-700" },
  { id: "thu-10:30", title: "Thu Mid-Day", startTime: 630, duration: 60, day: 4, color: "bg-green-700" },
  { id: "thu-12:00", title: "Thu Family Talk", startTime: 720, duration: 60, day: 4, color: "bg-lime-700" },
  { id: "thu-14:00", title: "Thu Healing", startTime: 840, duration: 120, day: 4, color: "bg-rose-800" },
  { id: "thu-16:30", title: "Thu Youth Fire", startTime: 990, duration: 90, day: 4, color: "bg-pink-800" },
  { id: "thu-18:30", title: "Thu Evening Word", startTime: 1110, duration: 60, day: 4, color: "bg-yellow-700" },
  { id: "thu-20:00", title: "Thu Gospel Music", startTime: 1200, duration: 60, day: 4, color: "bg-cyan-800" },
  { id: "thu-22:00", title: "Thu Late Sermon", startTime: 1320, duration: 60, day: 4, color: "bg-purple-800" },
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

          {/* TALL PROGRAMME CARDS – 32 px high (h-32) – blanks appear automatically where no card is placed */}
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

          {/* HORIZONTAL SCROLLBAR ONLY – no vertical scrollbar */}
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
