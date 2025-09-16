import { PlayCircle, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import heroBg from "@/assets/hero-bg.jpg";
import heroNews from "@/assets/hero-news.jpg";
import heroJoin from "@/assets/hero-join.jpg";
import heroLive from "@/assets/hero-live.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const slides = [
  {
    image: heroLive,
    title: "Watch AGTV Live",
    subtitle: "Faith That Transforms Lives",
    description: "Experience the power of God's word through inspiring programs, uplifting worship, and life-changing messages that bring hope to every home across Africa.",
    primaryButton: { text: "Watch Live Now", icon: PlayCircle }
  },
  {
    image: heroNews,
    title: "Latest News & Updates",
    subtitle: "Stay Connected",
    description: "Get the latest updates from AGTV, upcoming events, testimonies, and inspiring stories from our community of believers across Africa.",
    primaryButton: { text: "Read Latest News", icon: BookOpen }
  },
  {
    image: heroJoin,
    title: "Give Your Life to Christ",
    subtitle: "Join Our Church Family",
    description: "Take the most important step of your life. Experience God's love, find your purpose, and become part of a community that will support your spiritual journey.",
    primaryButton: { text: "Join Us Today", icon: Heart }
  }
];

export const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative h-[80vh]">
      <Carousel 
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div 
                className="relative h-[80vh] flex items-center justify-center text-white text-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                 }}
               >
                 <div className="absolute bottom-8 left-8 max-w-lg">
                   <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight font-display drop-shadow-lg">
                     {slide.title.split(' ').map((word, i) => 
                       word === 'AGTV' || word === 'Christ' || word === 'News' ? (
                         <span key={i} className="text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">{word} </span>
                       ) : word + ' '
                     )}
                   </h1>
                   <p className="text-lg md:text-xl mb-2 text-primary-glow font-semibold">
                     {slide.subtitle}
                   </p>
                   <p className="text-sm md:text-base mb-4 opacity-90 leading-relaxed">
                     {slide.description}
                   </p>
                   <div className="flex justify-start">
                     <Button className="btn-hero">
                       <slide.primaryButton.icon className="mr-2 h-4 w-4" />
                       {slide.primaryButton.text}
                     </Button>
                   </div>
                 </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index + 1 === current ? 'bg-primary' : 'bg-white/50'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};