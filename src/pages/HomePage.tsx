import { HeroSection } from "@/components/HeroSection";
import { ClubSection } from "@/components/ClubSection";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { LiveSection } from "@/components/LiveSection";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ClubSection />
      <ProgramsGrid featured limit={6} />
      <LiveSection />
    </div>
  );
};