import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AboutEvent from "./pages/AboutEvent";
import Patrons from "./pages/Patrons";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Concert from "./pages/Concert";
import EventDetail from "./pages/EventDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Prizes from "./pages/Prizes";
import Team from "@/pages/team";

import BackgroundMusic from "@/components/ui/BackgroundMusic";
import IntroVideo from "@/components/ui/IntroVideo";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {showIntro ? (
          <IntroVideo onFinish={() => setShowIntro(false)} />
        ) : (
          <BrowserRouter>
            <BackgroundMusic />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-event" element={<AboutEvent />} />
              <Route path="/patrons" element={<Patrons />} />
              <Route path="/day-1" element={<Day1 />} />
              <Route path="/day-2" element={<Day2 />} />
              <Route path="/concert" element={<Concert />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prizes" element={<Prizes />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;