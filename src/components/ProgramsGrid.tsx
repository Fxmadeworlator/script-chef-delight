// ProgramsGrid.tsx  (Club 1000+ page – Ghana edition)
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePrograms } from "@/contexts/ProgramsContext";

export const ProgramsGrid = () => {
  const { tiers, headerContent } = usePrograms();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    const tierName = tierId === 'online' ? 'Give Online' : 'Give In Person';
    alert(`You selected ${tierName}! ${tierId === 'online' ? 'Payment integration coming soon.' : 'Visit us during service or office hours.'}`);
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">{headerContent.title}</h2>

          {headerContent.description.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl opacity-90 leading-relaxed mt-4">
              {paragraph.includes('partner') ? (
                <>
                  {paragraph.split('partner')[0]}
                  <strong>partner</strong>
                  {paragraph.split('partner')[1]}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </section>

      {/*  GIVING OPTIONS  –  bigger, minimal, no prices  */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
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
                  "w-full text-base py-6",
                  tier.recommended ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTierSelect(tier.id);
                }}
              >
                {tier.name === "Give Online" ? "Give Online Now" : "Learn More"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All donations are tax-deductible. 100% of proceeds go directly to ministry operations.
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
