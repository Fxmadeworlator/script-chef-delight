import { HeroSection } from "@/components/HeroSection";
import { ClubSection } from "@/components/ClubSection";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { LiveSection } from "@/components/LiveSection";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage = ({ onPageChange }: HomePageProps) => {
  return (
    <div>
      <HeroSection onPageChange={onPageChange} />
      <ClubSection />
      <ProgramsGrid featured limit={6} />
      <LiveSection />
    </div>
  );
};