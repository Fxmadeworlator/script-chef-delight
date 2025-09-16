import { PlayCircle, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroBg from "@/assets/hero-bg.jpg";
import heroNews from "@/assets/hero-news.jpg";
import heroJoin from "@/assets/hero-join.jpg";
import heroLive from "@/assets/hero-live.jpg";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: heroLive,
    title: "Watch AGTV Live",
    subtitle: "Faith That Transforms Lives",
    description: "Experience the power of God's word through inspiring programs, uplifting worship, and life-changing messages that bring hope to every home across Africa.",
    primaryButton: { text: "Watch Live Now", icon: PlayCircle },
    secondaryButton: { text: "View Schedule" }
  },
  {
    image: heroNews,
    title: "Latest News & Updates",
    subtitle: "Stay Connected",
    description: "Get the latest updates from AGTV, upcoming events, testimonies, and inspiring stories from our community of believers across Africa.",
    primaryButton: { text: "Read Latest News", icon: BookOpen },
    secondaryButton: { text: "View All Updates" }
  },
  {
    image: heroJoin,
    title: "Give Your Life to Christ",
    subtitle: "Join Our Church Family",
    description: "Take the most important step of your life. Experience God's love, find your purpose, and become part of a community that will support your spiritual journey.",
    primaryButton: { text: "Join Us Today", icon: Heart },
    secondaryButton: { text: "Learn More" }
  }
];

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh]">
      <Carousel 
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
                <div className="max-w-4xl px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display drop-shadow-lg">
                    {slide.title.split(' ').map((word, i) => 
                      word === 'AGTV' || word === 'Christ' || word === 'News' ? (
                        <span key={i} className="text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">{word} </span>
                      ) : word + ' '
                    )}
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 text-primary-glow font-semibold">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <Button className="btn-hero">
                      <slide.primaryButton.icon className="mr-2 h-5 w-5" />
                      {slide.primaryButton.text}
                    </Button>
                    <Button className="btn-secondary">
                      {slide.secondaryButton.text}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};