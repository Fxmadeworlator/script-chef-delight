import { Crown, Sprout, Heart, HandHeart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const subscriptionOptions = [
  {
    id: "basic",
    icon: Sprout,
    amount: "₵200",
    frequency: "Monthly",
    title: "Basic Club Member",
    features: [
      "Access to live streams",
      "Monthly devotionals", 
      "AGTV club member badge",
      "Weekly inspirational emails",
      "Prayer request submissions"
    ]
  },
  {
    id: "premium",
    icon: Heart,
    amount: "₵500",
    frequency: "Monthly",
    title: "Premium Club Member",
    featured: true,
    features: [
      "All basic benefits",
      "Exclusive premium content library",
      "Monthly pastor Q&A sessions",
      "Early access to new programs",
      "Quarterly ministry impact reports",
      "Priority prayer line access"
    ]
  },
  {
    id: "platinum",
    icon: Crown,
    amount: "₵1000",
    frequency: "Monthly",
    title: "Platinum Club Member",
    features: [
      "All premium benefits",
      "Personal ministry consultation calls",
      "Annual exclusive retreat invitations",
      "Behind-the-scenes content access",
      "Direct pastor communication line",
      "Custom prayer and blessing videos"
    ]
  }
];

const stats = [
  { number: "1,247", label: "Club Members" },
  { number: "$62,350", label: "Monthly Support" },
  { number: "14", label: "Countries Reached" }
];

export const ClubSection = () => {
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
            Join AGTV Club 1000+
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our exclusive Club 1000+ community and become a vital partner in keeping AGTV on air! Your monthly subscription ensures we continue reaching millions across Africa with transformative Gospel content, quality programming, and life-changing messages.
          </p>

          {/* Subscription Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {subscriptionOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={option.id}
                  className={cn(
                    "card-donation min-h-[480px] flex flex-col justify-between",
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
                  
                  <div className="text-3xl font-bold mb-2 text-foreground">
                    {option.amount}
                  </div>
                  <div className="text-sm opacity-80 mb-6 text-muted-foreground">
                    {option.frequency}
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
                      "w-full",
                      option.featured 
                        ? "bg-foreground text-primary hover:bg-foreground/90" 
                        : "btn-primary"
                    )}
                  >
                    {option.title}
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