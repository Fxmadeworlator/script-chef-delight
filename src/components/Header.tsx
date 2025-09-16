import { useState } from "react";
import { Facebook, Twitter, Youtube, Instagram, PlayCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "programs", label: "Programs" },
    { id: "sermons", label: "Sermons" },
    { id: "events", label: "Events" },
    { id: "news", label: "News" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-dark to-zinc-800 py-2 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <span>📺</span>
            <span>Watch AGTV Live 24/7 | Faith That Transforms</span>
          </div>
          <div className="social-links flex gap-3">
            <a href="#" className="text-white hover:text-primary transition-all duration-300 hover:transform hover:translate-y-[-2px]">
              <Facebook size={14} />
            </a>
            <a href="#" className="text-white hover:text-primary transition-all duration-300 hover:transform hover:translate-y-[-2px]">
              <Twitter size={14} />
            </a>
            <a href="#" className="text-white hover:text-primary transition-all duration-300 hover:transform hover:translate-y-[-2px]">
              <Youtube size={14} />
            </a>
            <a href="#" className="text-white hover:text-primary transition-all duration-300 hover:transform hover:translate-y-[-2px]">
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-[0_2px_15px_rgba(0,0,0,0.1)] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavClick('home')}
            >
              <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mr-4 text-primary-foreground font-bold text-2xl shadow-[0_4px_10px_rgba(255,215,0,0.3)]">
                ✝
              </div>
              <div className="text-3xl font-bold text-foreground font-display drop-shadow-sm">
                AGTV
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-8">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "font-semibold text-base py-2 border-b-3 border-transparent transition-all duration-300",
                        currentPage === item.id
                          ? "text-primary-dark border-primary"
                          : "text-foreground hover:text-primary-dark hover:border-primary"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Watch Live Button */}
            <div className="hidden lg:block">
              <Button className="btn-live">
                <PlayCircle className="mr-2 h-4 w-4" />
                WATCH LIVE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <nav className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "text-left font-semibold py-2 px-4 rounded-lg transition-colors",
                      currentPage === item.id
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <Button className="btn-live mt-4">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  WATCH LIVE
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};