import { Crown, Sprout, Heart, HandHeart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClub } from "@/contexts/ClubContext";

const iconMap: Record<string, any> = {
  Crown,
  Sprout,
  Heart,
  HandHeart
};

export const ClubSection = () => {
  const { tiers, stats } = useClub();

  const subscriptionOptions = tiers.map(tier => ({
    ...tier,
    icon: iconMap[tier.icon] || Heart
  }));
  return (
    <section className="section-bg py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23FFD700' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-6 py-2 rounded-full mb-6 font-bold shadow-[0_4px_10px_rgba(255,215,0,0.3)]">
            <Crown className="mr-3 h-4 w-4" />
            EXCLUSIVE COMMUNITY
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Support AGTV
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our community of partners and help spread the Gospel across Africa. Your support keeps AGTV on air and reaching millions with transformative content. Choose your preferred way to give below.
          </p>
          
          {/* Giving Methods Explanation */}
          <div className="bg-card rounded-xl p-8 mb-12 max-w-4xl mx-auto shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-foreground font-display">Choose Your Giving Method</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer two convenient ways to support AGTV's mission. Whether you prefer the convenience of online giving or the personal touch of giving in person, every contribution makes a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold mb-1">Give Online</div>
                <div className="text-muted-foreground">Fast, secure, and convenient digital giving with instant receipts and recurring options</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <HandHeart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-primary font-bold mb-1">Give In Person</div>
                <div className="text-muted-foreground">Traditional giving during service or at our office with personal receipts</div>
              </div>
            </div>
          </div>

          {/* Giving Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch max-w-4xl mx-auto">
            {subscriptionOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={option.id}
                  className={cn(
                    "card-donation min-h-[600px] flex flex-col justify-between",
                    option.featured && "featured relative"
                  )}
                >
                  {option.featured && (
                    <div className="absolute top-4 right-[-30px] bg-primary text-primary-foreground px-8 py-1 text-xs font-bold transform rotate-45">
                      POPULAR
                    </div>
                  )}
                  
                  <div className={cn(
                    "text-4xl mb-6",
                    option.featured ? "text-foreground" : "text-gradient"
                  )}>
                    <IconComponent size={40} className="mx-auto" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground font-display">
                    {option.title}
                  </h3>
                  
                  <div className="text-3xl font-bold mb-2 text-foreground">
                    {option.amount}
                  </div>
                  <div className="text-sm opacity-80 mb-6 text-muted-foreground">
                    {option.frequency}
                  </div>
                  
                  {/* Giving Times/Methods */}
                  <div className="mb-6 space-y-2 bg-muted/30 p-4 rounded-lg">
                    {option.subTiers.map((tier, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground font-medium">{tier.name}</span>
                        <div className="text-right">
                          <span className="font-semibold text-foreground text-xs">{tier.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <ul className="text-left space-y-3 mb-8">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Check 
                          size={16} 
                          className={cn(
                            "mr-3 flex-shrink-0",
                            option.featured ? "text-foreground" : "text-primary"
                          )} 
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={cn(
                      "w-full font-bold text-base py-6",
                      option.featured 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "bg-secondary hover:bg-secondary/90"
                    )}
                  >
                    {option.name === "Online" ? "Give Online Now" : "Learn More"}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};