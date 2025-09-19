import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import agLogo from "@/assets/ag-logo.png";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "live", label: "Watch Live" },
    { id: "programs", label: "Club 1000+" },
    { id: "schedule", label: "Schedule" },
    { id: "events", label: "Events" },
    { id: "news", label: "News" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-background shadow-[0_2px_15px_rgba(0,0,0,0.1)] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavClick('home')}
            >
              <img 
                src={agLogo} 
                alt="Assemblies of God" 
                className="h-12 w-auto mr-3"
              />
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
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};