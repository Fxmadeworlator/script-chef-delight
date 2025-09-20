// ProgramsGrid.tsx
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ----------  DATA  ---------- */
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
    id: "bronze",
    name: "Bronze",
    price: 5,
    description: "Perfect for those starting their faith journey",
    features: [
      "Early access to episodes",
      "Monthly newsletter",
      "Community forum access",
      "Basic prayer support"
    ]
  },
  {
    id: "silver",
    name: "Silver",
    price: 15,
    description: "Enhanced experience for growing believers",
    features: [
      "All Bronze benefits",
      "Exclusive live Q&A sessions",
      "HD video downloads",
      "Priority prayer support",
      "Monthly devotionals"
    ],
    recommended: true
  },
  {
    id: "gold",
    name: "Gold",
    price: 25,
    description: "Premium support for dedicated partners",
    features: [
      "All Silver benefits",
      "Direct pastor access",
      "Priority prayer chain",
      "Exclusive events",
      "Quarterly retreats",
      "Personal mentorship"
    ]
  }
];

/* ----------  COMPONENT  ---------- */
export const ProgramsGrid = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    alert(`You selected the ${tierId} tier! Payment integration coming soon.`);
  };

  return (
    <>
      {/* Heading with background image + overlay */}
      <section className="relative py-20 px-4 text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/src/assets/vecteezy_abstract-black-fluid-wave-background_.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Support AGTV</h2>
          <p className="text-lg md:text-xl opacity-90">
            Join our community of partners and help spread the Gospel across Africa.
            Your monthly support keeps AGTV on air and reaching millions.
          </p>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-16 container mx-auto px-4">
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
                <div className="text-4xl font-extrabold mb-2">
                  ${tier.price}
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
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

      {/* Video Player - UNDER the tiers */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience AGTV Live</h2>
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Qx1HFNm94TE"
              title="AGTV Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-muted-foreground mt-4">
            Join thousands watching live. Your support keeps us on air.
          </p>
        </div>
      </section>
    </>
  );
};
