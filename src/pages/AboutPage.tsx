import { Heart, Target, Users, Globe } from "lucide-react";

const missionValues = [
  {
    icon: Heart,
    title: "Our Mission",
    description: "To broadcast the Gospel of Jesus Christ across Africa, transforming lives and strengthening communities through faith-based programming."
  },
  {
    icon: Target,
    title: "Our Vision",
    description: "To be Africa's leading Christian television network, reaching every home with messages of hope, faith, and transformation."
  },
  {
    icon: Users,
    title: "Our Values",
    description: "Integrity, Excellence, Compassion, and Unity guide everything we do as we serve God and His people across the continent."
  },
  {
    icon: Globe,
    title: "Our Impact",
    description: "Reaching millions of viewers across 14 African countries with programming that inspires, educates, and transforms lives daily."
  }
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
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
            <div className="aspect-video bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center justify-center text-8xl text-primary-foreground">
              📺
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground font-display">
              Transforming Lives Through Faith
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Since our founding, AGTV has been committed to bringing the transformative power of God's word to every home across Africa. Through inspiring programs, uplifting worship, and life-changing messages, we've become a beacon of hope for millions.
              </p>
              <p>
                Our programming covers every aspect of Christian living - from morning devotionals that start your day with purpose, to family shows that strengthen relationships, to business programs that integrate faith with professional life.
              </p>
              <p>
                What started as a vision to reach one community has grown into a continental ministry, touching lives in 14 countries and continuing to expand God's kingdom through the power of Christian television.
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