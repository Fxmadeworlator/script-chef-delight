import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { SchedulePage } from "@/pages/SchedulePage";
import { EventsPage } from "@/pages/EventsPage";
import { NewsPage } from "@/pages/NewsPage";
import { AboutPage } from "@/pages/AboutPage";
import { LivePage } from "@/pages/LivePage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={setCurrentPage} />;
      case "programs":
        return <ProgramsPage />;
      case "live":
        return <LivePage />;
      case "schedule":
        return <SchedulePage />;
      case "events":
        return <EventsPage />;
      case "news":
        return <NewsPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
