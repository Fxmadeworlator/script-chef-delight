// src/components/Header.tsx  (drop-down stays on hover – buffer added)
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/*  LOGO  */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange("home")}
          >
            <img src="/src/assets/ag-logo.png" alt="AGTV" className="h-8 w-8" />
            <span className="text-xl font-bold">AGTV</span>
          </div>

          {/*  NAVIGATION  –  desktop  */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={() => onPageChange("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => onPageChange("live")}>
              Watch Live
            </Button>

            {/*  ABOUT DROPDOWN  –  zero-gap, invisible buffer  */}
            <div className="relative group">
              <Button variant="ghost" className="flex items-center gap-1">
                About <ChevronDown className="h-4 w-4" />
              </Button>

              {/*  invisible 4px bridge so cursor never leaves hover area  */}
              <div className="absolute top-full left-0 w-full h-1" />

              {/*  DROPDOWN MENU  –  stays on hover  */}
              <div className="absolute top-full left-0 mt-0 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none"
                  onClick={() => onPageChange("mission")}
                >
                  Our Mission
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none"
                  onClick={() => onPageChange("vision")}
                >
                  Our Vision
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none"
                  onClick={() => onPageChange("pastors")}
                >
                  Our Pastors
                </Button>
              </div>
            </div>

            <Button variant="ghost" onClick={() => onPageChange("schedule")}>
              Schedule
            </Button>
            <Button variant="ghost" onClick={() => onPageChange("events")}>
              Events
            </Button>
            <Button variant="ghost" onClick={() => onPageChange("news")}>
              News
            </Button>
            <Button variant="ghost" onClick={() => onPageChange("contact")}>
              Contact
            </Button>

            {/*  CLUB 1000+  */}
            <Button onClick={() => onPageChange("club")}>Club 1000+</Button>
          </nav>

          {/*  MOBILE MENU  */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
