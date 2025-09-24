import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Music } from "lucide-react";

export const StayConnectedSection = () => {
  const socialLinks = [
    { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/myagtv/?utm_source=ig_web_button_share_sheet" },
    { icon: Facebook, name: "Facebook", href: "https://www.facebook.com/share/1FxTroga19/" },
    { icon: Youtube, name: "YouTube", href: "https://youtube.com/@myagtv?si=AkZCr_WwT4eFFfGe" },
    { icon: Music, name: "Twitter", href: "https://twitter.com/myagtv" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stay Connected - Left Side */}
            <div className="bg-card rounded-2xl p-12 shadow-lg border">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Stay Connected</h2>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                    <social.icon className="h-6 w-6 text-background" />
                  </div>
                  <span className="text-xl font-semibold text-foreground">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* AGTV App - Right Side */}
          <div 
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
            }}
          >
            <div className="flex flex-col justify-center p-12 text-white h-full">
              <h2 className="text-4xl font-bold mb-6">The AGTV App</h2>
              <p className="text-white/90 mb-8 leading-relaxed text-lg max-w-md">
                Get everything you need for your spiritual experience and discover new ways to grow spiritually throughout the week.
              </p>
              <Button 
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold w-fit"
              >
                Download →
              </Button>
            </div>
            
            {/* Mock phone illustration */}
            <div className="absolute -right-8 top-8 bottom-8 w-48 opacity-20">
              <div className="w-full h-full bg-white/20 rounded-3xl border border-white/30 backdrop-blur-sm"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};