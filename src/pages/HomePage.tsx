import { HeroSection } from "@/components/HeroSection";
import { NewsClubSection } from "@/components/NewsClubSection";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { LiveSection } from "@/components/LiveSection";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage = ({ onPageChange }: HomePageProps) => {
  return (
    <div>
      <HeroSection onPageChange={onPageChange} />
      <NewsClubSection onPageChange={onPageChange} />
      <ProgramsGrid featured limit={6} />
      <LiveSection />
    </div>
  );
};