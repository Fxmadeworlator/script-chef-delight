import { Button } from "@/components/ui/button";

interface NewsClubSectionProps {
  onPageChange: (page: string) => void;
}

export const NewsClubSection = ({ onPageChange }: NewsClubSectionProps) => {
  return (
    <section className="py-32 bg-muted/30 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* News Section */}
          <div 
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <p className="text-white/95 mb-6 leading-relaxed text-lg drop-shadow-md">
                Stay updated with the latest happenings at AGTV. From ministry updates to community outreach programs, get all the news that matters to our faith community.
              </p>
              <Button 
                onClick={() => onPageChange('news')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Read Latest News
              </Button>
            </div>
          </div>

          {/* Club 1000+ Section */}
          <div 
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <p className="text-white/95 mb-6 leading-relaxed text-lg drop-shadow-md">
                Become a sustaining partner and help spread the Gospel across Africa. Your monthly support keeps AGTV on air and reaching millions with life-changing content.
              </p>
              <Button 
                onClick={() => onPageChange('programs')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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