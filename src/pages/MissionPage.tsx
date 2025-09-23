import { Heart, Globe, Users, BookOpen } from "lucide-react";

const missionValues = [
  {
    icon: Heart,
    title: "Spreading God's Love",
    description: "We are committed to sharing the unconditional love of Jesus Christ with every person across Africa, bringing hope to the hopeless and healing to the broken-hearted."
  },
  {
    icon: Globe,
    title: "Reaching Every Nation",
    description: "Our mission extends beyond borders, reaching every tribe, tongue, and nation across the African continent with the transformative power of the Gospel."
  },
  {
    icon: Users,
    title: "Building Strong Communities",
    description: "We believe in strengthening local communities through faith-based programs, education, and social support that creates lasting positive change."
  },
  {
    icon: BookOpen,
    title: "Teaching Biblical Truth",
    description: "We are dedicated to teaching sound biblical doctrine that equips believers to live victorious Christian lives and impact their communities."
  }
];

export const MissionPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Our Mission
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Called to transform lives and communities across Africa through the power of Christian television
          </p>
        </div>

        {/* Mission Statement */}
        <div className="relative bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl p-12 mb-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Community Gathering"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-foreground font-display">
            Our Mission Statement
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            "To be the leading voice of Christian broadcasting across Africa, bringing the Gospel of Jesus Christ to every home, hospital, prison, and village through innovative television programming. We exist to transform lives, strengthen communities, and build the Kingdom of God one viewer at a time, producing content that inspires faith, educates minds, and empowers believers to live victorious Christian lives."
          </p>
          </div>
        </div>

        {/* Mission Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {missionValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <img
                    src={index === 0 ? "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" :
                         index === 1 ? "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" :
                         index === 2 ? "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" :
                         "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                <div className="text-4xl text-primary mb-6">
                  <IconComponent size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground font-display">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground font-display">
            Join Our Mission
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of this great commission. Your support helps us reach millions across Africa with the life-changing message of Jesus Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Support Our Mission
            </button>
            <button className="btn-secondary">
              Learn More About AGTV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};