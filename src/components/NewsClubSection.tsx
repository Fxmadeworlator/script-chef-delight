import { Button } from "@/components/ui/button";
import { Newspaper, Users } from "lucide-react";

interface NewsClubSectionProps {
  onPageChange: (page: string) => void;
}

export const NewsClubSection = ({ onPageChange }: NewsClubSectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* News Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Newspaper className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Latest News</h2>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Stay updated with the latest happenings at AGTV. From ministry updates to community outreach programs, get all the news that matters to our faith community.
            </p>
            <Button 
              onClick={() => onPageChange('news')}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
            >
              Read Latest News
            </Button>
          </div>

          {/* Club 1000+ Section */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Join AGTV Club 1000+</h2>
            </div>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Become a sustaining partner and help spread the Gospel across Africa. Your monthly support keeps AGTV on air and reaching millions with life-changing content.
            </p>
            <Button 
              onClick={() => onPageChange('programs')}
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold"
            >
              Join Club 1000+
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};