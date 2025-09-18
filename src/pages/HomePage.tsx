import { HeroSection } from "@/components/HeroSection";
import { NewsClubSection } from "@/components/NewsClubSection";
import { StayConnectedSection } from "@/components/StayConnectedSection";
import { LiveSection } from "@/components/LiveSection";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage = ({ onPageChange }: HomePageProps) => {
  return (
    <div>
      <HeroSection onPageChange={onPageChange} />
      <NewsClubSection onPageChange={onPageChange} />
      <StayConnectedSection />
      <LiveSection />
    </div>
  );
};