// src/pages/NewsPage.tsx  (exact heading text + left-aligned community block)
import { useState } from "react"; // kept for future extensibility
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useNews } from "@/contexts/NewsContext";

export const NewsPage = () => {
  const { newsItems } = useNews();
  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 text-white overflow-hidden mb-16">
        <img
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Latest News
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Stay updated with the latest developments in our ministry and Christian broadcasting
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">

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
