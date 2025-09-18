import { Button } from "@/components/ui/button";
import { Newspaper, Users } from "lucide-react";

interface NewsClubSectionProps {
  onPageChange: (page: string) => void;
}

export const NewsClubSection = ({ onPageChange }: NewsClubSectionProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* News Section */}
          <div 
            className="relative h-80 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${"/assets/hero-news.jpg"})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <div className="flex items-center mb-4">
                <Newspaper className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Latest News</h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                Stay updated with the latest happenings at AGTV. From ministry updates to community outreach programs, get all the news that matters to our faith community.
              </p>
              <Button 
                onClick={() => onPageChange('news')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold w-fit"
              >
                Read Latest News
              </Button>
            </div>
          </div>

          {/* Club 1000+ Section */}
          <div 
            className="relative h-80 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${"/assets/hero-join.jpg"})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Join AGTV Club 1000+</h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                Become a sustaining partner and help spread the Gospel across Africa. Your monthly support keeps AGTV on air and reaching millions with life-changing content.
              </p>
              <Button 
                onClick={() => onPageChange('programs')}
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold w-fit"
              >
                Join Club 1000+
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};