import { Eye, Star, Zap, Target } from "lucide-react";

const visionElements = [
  {
    icon: Eye,
    title: "Clear Vision",
    description: "To be Africa's leading Christian television network, recognized for excellence in Gospel broadcasting and spiritual transformation."
  },
  {
    icon: Star,
    title: "Excellence in Broadcasting",
    description: "Setting the standard for quality Christian programming that inspires, educates, and transforms lives across the continent."
  },
  {
    icon: Zap,
    title: "Spiritual Transformation",
    description: "Creating content that brings about genuine spiritual awakening and lasting change in individuals and communities."
  },
  {
    icon: Target,
    title: "Strategic Impact",
    description: "Strategically positioned to reach every corner of Africa with targeted programming that meets diverse spiritual needs."
  }
];

const goals = [
  {
    year: "2025",
    title: "Continental Reach",
    description: "Expand broadcasting to reach 25 African countries with 24/7 Christian programming"
  },
  {
    year: "2026",
    title: "Digital Innovation",
    description: "Launch advanced streaming platforms and mobile apps for global accessibility"
  },
  {
    year: "2027",
    title: "Community Impact",
    description: "Establish 100 community outreach centers across Africa for local ministry support"
  },
  {
    year: "2030",
    title: "Global Influence",
    description: "Become the premier Christian television network influencing spiritual growth worldwide"
  }
];

export const VisionPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Our Vision
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Looking ahead to transform Africa through the power of Christian television
          </p>
        </div>

        {/* Vision Statement */}
        <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-12 mb-16 text-center text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Broadcasting Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-display">
            Our Vision Statement
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "To be Africa's premier Christian television network by 2030, reaching every home, hospital, prison, and village with life-transforming Gospel content. We envision a spiritually awakened Africa where the message of Jesus Christ is accessible to all, creating a generation of strong believers who will impact their communities and nations for the Kingdom of God, establishing AGTV as the most trusted voice in Christian broadcasting across the continent."
          </p>
          </div>
        </div>

        {/* Vision Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visionElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-xl p-6 text-center shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <img
                    src={index === 0 ? "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" :
                         index === 1 ? "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" :
                         index === 2 ? "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800" :
                         "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt={element.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                <div className="text-4xl text-primary mb-4">
                  <IconComponent size={40} className="mx-auto" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground font-display">
                  {element.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {element.description}
                </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground font-display">
            Our Vision Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="relative bg-card rounded-xl p-6 shadow-lg border-l-4 border-primary"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {goal.year}
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground font-display">
                  {goal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-card to-card-secondary rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground font-display">
            Be Part of Our Vision
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Your partnership helps us achieve this vision. Together, we can transform Africa through the power of Christian television.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Partner With Us
            </button>
            <button className="btn-secondary">
              Watch Our Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};