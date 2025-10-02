import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClubProvider } from "@/contexts/ClubContext";
import { NewsProvider } from "@/contexts/NewsContext";
import { ProgramsProvider } from "@/contexts/ProgramsContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ClubLoginRoute } from "./routes/ClubLoginRoute";
import { NewsLoginRoute } from "./routes/NewsLoginRoute";
import { ProgramsLoginRoute } from "./routes/ProgramsLoginRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ClubProvider>
      <NewsProvider>
        <ProgramsProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/club-login" element={<ClubLoginRoute />} />
                <Route path="/news-login" element={<NewsLoginRoute />} />
                <Route path="/programs-login" element={<ProgramsLoginRoute />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ProgramsProvider>
      </NewsProvider>
    </ClubProvider>
  </QueryClientProvider>
);

export default App;
