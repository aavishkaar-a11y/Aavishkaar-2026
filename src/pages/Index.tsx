import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { EventHighlights } from "@/components/home/EventHighlights";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ThemeVideo } from "@/components/home/ThemeVideo";
import { ProcessSection } from "@/components/home/ProcessSection";
import { MarqueeText } from "@/components/home/MarqueeText";
import { Guest } from "@/components/home/Guest";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import Popup from "@/components/ui/Popup"; // ✅ ADD THIS

const Index = () => {
  useAutoScroll();

  return (
    <Layout>

      <Popup /> {/* ✅ ADD THIS HERE */}

      {/* 🎥 Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/contact-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ================= SECTIONS ================= */}

      <HeroSection />
      <MarqueeText />
      <ThemeVideo />
      <EventHighlights />
      <ProcessSection />
      <Guest />
      <AboutPreview />

    </Layout>
  );
};

export default Index;