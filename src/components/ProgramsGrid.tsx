// ProgramsGrid.tsx  (Club 1000+ page – Ghana edition)
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/*  SUBSCRIPTION TIERS  –  Ghana benefits  */
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
      "Monthly newsletter (Twi + English)",
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
      "HD video downloads (Twi subtitles)",
      "Exclusive live Q&A sessions",
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
      "Direct pastor access (Accra studio)",
      "Priority prayer chain",
      "Exclusive village crusade invites",
      "Quarterly retreats in Ghana",
      "Personal mentorship (Twi/English)"
    ]
  }
];

export const ProgramsGrid = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    alert(`You selected the ${tierId} tier! Payment integration coming soon.`);
  };

  return (
    <>
      {/*  GHANA-SPECIFIC HEADING + BIGGER PICTURE  */}
      <section className="relative py-20 px-4 text-white text-center overflow-hidden">
        {/*  background picture – swap file name only  */}
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="absolute inset-0 w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Support AGTV</h2>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            AGTV is Ghana’s 24-hour Christian television network, broadcasting from Accra to every region, village and hospital.
            Every cedi you give keeps the signal on air, produces fresh Twi/English Gospel content, and reaches millions who have never heard the name of Jesus.
          </p>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed mt-4">
            When you subscribe you don’t just watch — you <strong>partner</strong>.
            You fund village crusades in the Northern Region, youth outreaches in Kumasi, emergency relief in Takoradi, and the daily costs of our Accra studio uplink.
            In return you get early access, HD downloads with Twi subtitles, direct pastor chat, and the joy of knowing you are literally sending the Gospel into homes, hospitals, prisons and remote villages across Ghana.
          </p>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed mt-4">
            Join the family today. Cancel anytime. 100 % of every cedi goes to ministry operations — no admin fees, no middle-men, just Jesus on air, 24/7.
          </p>
        </div>
      </section>

      {/*  SUBSCRIPTION TIERS  –  bigger, minimal, no captions  */}
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
            100 % of proceeds go directly to ministry operations.
          </p>
        </div>
      </section>

      {/*  VIDEO PLAYER  –  under the tiers, bigger, no caption  */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </section>
    </>
  );
};
