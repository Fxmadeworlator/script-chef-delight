// src/pages/NewsPage.tsx  (left-aligned community block)
import { useState } from "react"; // kept for future extensibility
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

/* ---------- EXISTING DATA ---------- */
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: "new-studio-opening",
    title: "AGTV Opens New State-of-the-Art Studio",
    excerpt: "Our latest broadcasting facility will enable us to reach even more communities across Africa with high-quality Christian programming.",
    category: "Ministry News",
    date: "15 Nov 2024",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership with African Churches",
    excerpt: "AGTV announces new partnerships with major church networks to expand our reach and impact across the continent.",
    category: "Partnerships",
    date: "12 Nov 2024",
    image: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "youth-program-launch",
    title: "New Youth Program 'Next Generation' Launches",
    excerpt: "Exciting new weekly show designed specifically for young adults, addressing relevant topics from a biblical perspective.",
    category: "Programs",
    date: "08 Nov 2024",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "community-outreach",
    title: "AGTV Community Outreach Reaches 10,000 Families",
    excerpt: "Our latest humanitarian initiative has provided food, clothing, and spiritual support to communities in need across Ghana.",
    category: "Community",
    date: "05 Nov 2024",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "awards-recognition",
    title: "AGTV Wins Excellence in Christian Broadcasting",
    excerpt: "We are honored to receive this prestigious award recognizing our commitment to quality Christian television programming.",
    category: "Recognition",
    date: "01 Nov 2024",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "expansion-announcement",
    title: "Expanding to 5 New African Countries",
    excerpt: "AGTV's signal will soon reach millions more viewers as we expand our broadcasting coverage across West and East Africa.",
    category: "Expansion",
    date: "28 Oct 2024",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const featuredNews = newsItems.find(item => item.featured);
const regularNews = newsItems.filter(item => !item.featured);

export const NewsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* LEFT-ALIGNED HEADER BLOCK */}
        <div className="mb-16 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            AGTV Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Community Outreach Events<br />
            Join us in serving our community and sharing God's love through action
          </p>
        </div>

        {/* FEATURED NEWS – unchanged */}
        {featuredNews && (
          <div className="mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                FEATURED
              </div>
              <div className="absolute top-6 right-6 bg-white/90 text-foreground px-3 py-2 rounded-lg font-bold text-center shadow-lg">
                <div className="text-sm">{featuredNews.date}</div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="mb-3">
                  <span className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredNews.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display drop-shadow-lg">
                  {featuredNews.title}
                </h2>
                <p className="text-lg opacity-90 leading-relaxed drop-shadow-md max-w-3xl">
                  {featuredNews.excerpt}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* REGULAR NEWS GRID – unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item, index) => (
            <div key={item.id} className={`card-program group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`relative overflow-hidden ${index === 0 ? 'h-64' : 'h-48'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 text-foreground px-3 py-2 rounded-lg font-bold text-center z-10 shadow-lg">
                  <div className="text-xs">{item.date}</div>
                </div>
                <div className="absolute top-4 left-4 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {item.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className={`font-bold mb-2 font-display drop-shadow-lg ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <p className={`opacity-90 leading-relaxed drop-shadow-md ${index === 0 ? 'text-sm' : 'text-xs'} line-clamp-2`}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
