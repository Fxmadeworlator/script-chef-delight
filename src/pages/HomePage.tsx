import { HeroSection } from "@/components/HeroSection";
import { NewsClubSection } from "@/components/NewsClubSection";
import { StayConnectedSection } from "@/components/StayConnectedSection";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage = ({ onPageChange }: HomePageProps) => {
  return (
    <div className="pt-20">
      <HeroSection onPageChange={onPageChange} />
      <NewsClubSection onPageChange={onPageChange} />
      <StayConnectedSection />
    </div>
  );
};