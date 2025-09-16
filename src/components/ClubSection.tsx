import { Crown, Sprout, Heart, HandHeart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const donationOptions = [
  {
    id: "partner",
    icon: Sprout,
    amount: "$25",
    frequency: "Monthly",
    title: "Become a Partner",
    features: [
      "Monthly prayer updates",
      "Digital devotionals",
      "AGTV partner badge"
    ]
  },
  {
    id: "champion",
    icon: Heart,
    amount: "$50",
    frequency: "Monthly",
    title: "Become a Champion",
    featured: true,
    features: [
      "All previous benefits",
      "Exclusive web content",
      "Quarterly ministry reports",
      "Special prayer requests"
    ]
  },
  {
    id: "leader",
    icon: HandHeart,
    amount: "$100",
    frequency: "Monthly",
    title: "Become a Leader",
    features: [
      "All previous benefits",
      "Personal thank you call",
      "Annual impact report",
      "Leadership updates"
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
            Become a sustaining partner and help spread the Gospel across Africa. Your monthly support keeps AGTV on air and reaching millions with life-changing content.
          </p>

          {/* Donation Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {donationOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={option.id}
                  className={cn(
                    "card-donation",
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