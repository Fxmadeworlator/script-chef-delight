import { Heart, Target, Users, Globe } from "lucide-react";

const missionValues = [
  {
    icon: Heart,
    title: "Our Mission",
    description: "Broadcasting the Gospel of Jesus Christ across Africa through innovative television programming that transforms lives and strengthens communities."
  },
  {
    icon: Target,
    title: "Our Vision",
    description: "To be Africa's premier Christian television network, reaching every home with life-changing messages of hope, faith, and spiritual transformation."
  },
  {
    icon: Users,
    title: "Our Values",
    description: "Integrity, Excellence, Compassion, and Unity guide our ministry as we faithfully serve God and His people across the African continent."
  },
  {
    icon: Globe,
    title: "Our Impact",
    description: "Currently reaching over 2.5 million viewers across 14 African countries with programming that inspires, educates, and transforms lives daily."
  }
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            About AGTV
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Faith That Transforms Lives - Broadcasting hope and inspiration across Africa
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="AGTV Broadcasting Studio"
              className="aspect-video rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] w-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground font-display">
              Broadcasting Faith Across Africa
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, AGTV has grown from a small local broadcast to Africa's fastest-growing Christian television network. Our commitment to bringing the transformative power of God's word to every home has made us a beacon of hope for millions across the continent.
              </p>
              <p>
                Our diverse programming lineup includes morning devotionals, family-centered shows, youth programs, business and entrepreneurship content, healing and deliverance services, and live worship experiences. Each program is carefully crafted to meet the spiritual needs of our African audience.
              </p>
              <p>
                From our state-of-the-art studios in Accra, Ghana, we broadcast 24/7 to viewers across West, East, and Southern Africa. Our multilingual programming in English, Twi, Hausa, and Swahili ensures that language is never a barrier to receiving God's word.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionValues.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="text-4xl text-gradient mb-6">
                  <IconComponent size={40} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground font-display">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
