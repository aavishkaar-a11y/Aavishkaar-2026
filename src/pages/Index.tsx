import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { EventHighlights } from "@/components/home/EventHighlights";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ThemeVideo } from "@/components/home/ThemeVideo";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { MarqueeText } from "@/components/home/MarqueeText";

const Index = () => {
  return (
    <Layout>
      <ParticleBackground />
      <HeroSection />
      <MarqueeText />
      <ThemeVideo />
      <ProcessSection />
      <EventHighlights />
      <AboutPreview />
    </Layout>
  );
};

export default Index;
