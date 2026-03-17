import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate('/day-1');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-neon-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="font-samarkan text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            <span className="neon-yellow flicker">aavishkaar 2026</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 text-bold animate-slide-in-right font-light italic" style={{ animationDelay: "0.2s" }}>
            Unleashed Vibes; Unmatched Energy
          </p>

          {/* Dates */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full neon-border-yellow mb-10 animate-slide-in-right animate-pulse-glow" style={{ animationDelay: "0.3s" }}>
            <Sparkles className="text-primary" size={24} />
            <span className="text-lg md:text-xl font-semibold text-primary">
              May 8ᵗʰ & 9ᵗʰ – 2026
            </span>
            <Sparkles className="text-primary" size={24} />
                      </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={handleExploreClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
