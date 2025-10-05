// SubscriptionTiers.tsx
import { useState } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Tier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

const tiers: Tier[] = [
  {
    id: "online",
    name: "Give Online",
    price: 0,
    description: "Support AGTV conveniently through secure online giving",
    features: [
      "Instant digital receipt",
      "Secure payment processing",
      "Monthly giving options",
      "Tax-deductible contributions",
      "Automatic recurring donations available",
      "Multiple payment methods accepted"
    ],
    recommended: true
  },
  {
    id: "in-person",
    name: "Give In Person",
    price: 0,
    description: "Make your contribution during service or at our office",
    features: [
      "Cash or check accepted",
      "Give during Sunday service",
      "Visit our office during business hours",
      "Personal receipt provided",
      "Envelope giving available",
      "Direct hand delivery"
    ]
  }
];

export const SubscriptionTiers = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    const tierName = tierId === 'online' ? 'Give Online' : 'Give In Person';
    alert(`You selected ${tierName}! ${tierId === 'online' ? 'Payment integration coming soon.' : 'Visit us during service or office hours.'}`);
  };

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
          Support AGTV
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our community of partners and help spread the Gospel across Africa. 
          Your monthly support keeps AGTV on air and reaching millions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "relative rounded-2xl border bg-card p-6 shadow-lg transition-all duration-300",
              "hover:shadow-xl hover:scale-105 cursor-pointer",
              selectedTier === tier.id && "ring-2 ring-primary",
              tier.recommended && "border-primary shadow-primary/20"
            )}
            onClick={() => handleTierSelect(tier.id)}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mt-4">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className={cn(
                "w-full",
                tier.recommended ? "bg-primary text-primary-foreground" : "bg-secondary"
              )}
              onClick={(e) => {
                e.stopPropagation();
                handleTierSelect(tier.id);
              }}
            >
              Choose {tier.name}
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground">
          All subscriptions auto-renew monthly. Cancel anytime. 
          100% of proceeds go directly to ministry operations.
        </p>
      </div>
    </section>
  );
};
