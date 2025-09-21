import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ScheduleProgram {
  id: string;
  title: string;
  startTime: number; // minutes from 00:00
  duration: number; // duration in minutes
  day: number; // 0-6 (Sunday-Saturday)
  category: string;
  host: string;
}

const schedulePrograms: ScheduleProgram[] = [
  {
    id: "morning-devotion",
    title: "Morning Devotion",
    startTime: 360, // 6:00 AM
    duration: 60,
    day: 1, // Monday
    category: "Devotional",
    host: "Pastor Samuel Mensah"
  },
  {
    id: "sunday-service",
    title: "Sunday Service Live",
    startTime: 540, // 9:00 AM
    duration: 150,
    day: 0, // Sunday
    category: "Worship",
    host: "Pastor Emmanuel Asante"
  },
  {
    id: "youth-fire",
    title: "Youth Fire",
    startTime: 1140, // 7:00 PM
    duration: 90,
    day: 3, // Wednesday
    category: "Youth",
    host: "Pastor Grace Owusu"
  },
  {
    id: "bible-study",
    title: "Midweek Bible Study",
    startTime: 1110, // 6:30 PM
    duration: 90,
    day: 3, // Wednesday
    category: "Teaching",
    host: "Dr. Isaac Adjei"
  },
  {
    id: "women-fellowship",
    title: "Women of Faith",
    startTime: 600, // 10:00 AM
    duration: 90,
    day: 6, // Saturday
    category: "Fellowship",
    host: "Pastor Mary Asante"
  },
  {
    id: "healing-prayer",
    title: "Healing & Miracle Service",
    startTime: 900, // 3:00 PM
    duration: 120,
    day: 5, // Friday
    category: "Prayer",
    host: "Prophet Daniel Mensah"
  },
  {
    id: "gospel-music-tue",
    title: "Gospel Music Hour",
    startTime: 1200, // 8:00 PM
    duration: 60,
    day: 2, // Tuesday
    category: "Music",
    host: "Minister John Osei"
  },
  {
    id: "gospel-music-thu",
    title: "Gospel Music Hour",
    startTime: 1200, // 8:00 PM
    duration: 60,
    day: 4, // Thursday
    category: "Music",
    host: "Minister John Osei"
  },
  {
    id: "family-time",
    title: "Family Foundations",
    startTime: 960, // 4:00 PM
    duration: 60,
    day: 6, // Saturday
    category: "Family",
    host: "Pastor & Mrs. Kwame Asiedu"
  }
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4]; // Sample dates

const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

const getCategoryColor = (category: string) => {
  const colors = {
    'Devotional': 'bg-blue-500',
    'Worship': 'bg-purple-500',
    'Youth': 'bg-green-500',
    'Teaching': 'bg-orange-500',
    'Fellowship': 'bg-pink-500',
    'Prayer': 'bg-red-500',
    'Music': 'bg-yellow-500',
    'Family': 'bg-indigo-500'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-500';
};

export const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  // Generate time slots from 00:00 to 23:30 (30-minute intervals)
  const timeSlots = [];
  for (let i = 0; i < 1440; i += 30) {
    timeSlots.push(i);
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-display">
            TV Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Your complete AGTV programming schedule
          </p>
        </div>

        {/* Date Navigation */}
        <div className="mb-6">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-4">
              {dates.map((date, index) => (
                <Button
                  key={index}
                  variant={selectedDate === index ? "default" : "outline"}
                  className={`min-w-[120px] h-16 flex flex-col items-center justify-center ${
                    selectedDate === index ? 'bg-primary text-primary-foreground' : 'bg-card'
                  }`}
                  onClick={() => setSelectedDate(index)}
                >
                  <div className="text-sm font-medium">{days[index % 7]}</div>
                  <div className="text-lg font-bold">{date} Sep</div>
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Schedule Grid */}
        <div className="border rounded-lg bg-card shadow-lg overflow-hidden">
          {/* Time Header */}
          <div className="bg-muted/50 border-b">
            <ScrollArea className="w-full">
              <div className="flex">
                <div className="min-w-[80px] h-12 flex items-center justify-center border-r bg-muted text-sm font-semibold">
                  Channel
                </div>
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className="min-w-[100px] h-12 flex items-center justify-center border-r text-xs font-medium"
                  >
                    {formatTime(time)}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Program Grid */}
          <div className="relative">
            <ScrollArea className="w-full h-[600px]">
              <div className="flex flex-col">
                {/* AGTV Channel Row */}
                <div className="flex border-b">
                  <div className="min-w-[80px] h-20 flex items-center justify-center border-r bg-muted">
                    <div className="text-center">
                      <div className="text-xs font-semibold">AGTV</div>
                      <div className="text-xs text-muted-foreground">151</div>
                    </div>
                  </div>
                  
                  {/* Time slots with programs */}
                  <div className="relative flex-1 h-20">
                    {timeSlots.map((time) => (
                      <div
                        key={time}
                        className="absolute border-r h-full"
                        style={{ left: `${(time / 1440) * 100}%`, width: `${(30 / 1440) * 100}%` }}
                      />
                    ))}
                    
                    {/* Programs for selected day */}
                    {schedulePrograms
                      .filter(program => program.day === selectedDate % 7)
                      .map((program) => (
                        <div
                          key={program.id}
                          className={`absolute h-16 mt-2 rounded px-2 py-1 text-white text-xs overflow-hidden ${getCategoryColor(program.category)}`}
                          style={{
                            left: `${(program.startTime / 1440) * 100}%`,
                            width: `${(program.duration / 1440) * 100}%`
                          }}
                        >
                          <div className="font-semibold truncate">{program.title}</div>
                          <div className="text-white/80 truncate">{program.category}</div>
                          <div className="text-white/70 text-xs">
                            {formatTime(program.startTime)} - {formatTime(program.startTime + program.duration)}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Additional channel rows for variety */}
                {[2, 3, 4, 5].map((channelNum) => (
                  <div key={channelNum} className="flex border-b">
                    <div className="min-w-[80px] h-20 flex items-center justify-center border-r bg-muted">
                      <div className="text-center">
                        <div className="text-xs font-semibold">AGTV {channelNum}</div>
                        <div className="text-xs text-muted-foreground">{150 + channelNum}</div>
                      </div>
                    </div>
                    
                    <div className="relative flex-1 h-20">
                      {timeSlots.map((time) => (
                        <div
                          key={time}
                          className="absolute border-r h-full"
                          style={{ left: `${(time / 1440) * 100}%`, width: `${(30 / 1440) * 100}%` }}
                        />
                      ))}
                      
                      {/* Sample programs for other channels */}
                      <div
                        className="absolute h-16 mt-2 rounded px-2 py-1 bg-gray-500 text-white text-xs"
                        style={{ left: '20%', width: '15%' }}
                      >
                        <div className="font-semibold">Repeat Programs</div>
                        <div className="text-white/80">Various</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries({
            'Devotional': 'bg-blue-500',
            'Worship': 'bg-purple-500',
            'Youth': 'bg-green-500',
            'Teaching': 'bg-orange-500',
            'Fellowship': 'bg-pink-500',
            'Prayer': 'bg-red-500',
            'Music': 'bg-yellow-500',
            'Family': 'bg-indigo-500'
          }).map(([category, color]) => (
            <div key={category} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded ${color}`}></div>
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};