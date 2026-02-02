import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate("/day-1");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-neon-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Title */}
          <h1 className="font-samarkan text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 animate-slide-in-right">
            <span className="neon-yellow flicker">aavishkaar</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 neon-blue">
              -2026
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light italic animate-slide-in-right">
            Unleashed Vibes; Unmatched Energy
          </p>

          {/* DATE + BADGE (ONE BELOW ONE) */}
          <div className="flex flex-col items-center gap-3 mb-10">

            {/* Date Pill */}
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full neon-border-yellow animate-pulse-glow">
              <Sparkles className="text-primary" size={22} />
              <span className="text-lg md:text-xl font-semibold text-primary">
                March 13th & 14th – 2026
              </span>
              <Sparkles className="text-primary" size={22} />
            </div>

            {/* Registration Badge */}
            <div
              onClick={() =>
                alert("🚀 Registrations will open shortly. Stay tuned!")
              }
              className="
                inline-flex items-center gap-2
                px-6 py-2
                rounded-full
                bg-black/60 backdrop-blur
                border border-yellow-400/60
                text-yellow-300 font-semibold
                text-sm sm:text-base
                shadow-[0_0_25px_rgba(250,204,21,0.6)]
                animate-pop-badge animate-pulse-glow
                cursor-pointer
                hover:scale-105 transition
              "
            >
              🚀 Registration Opens Soon
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
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

      {/* CSS */}
      <style>{`
        @keyframes popBadge {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(6px);
          }
          60% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pop-badge {
          animation: popBadge 0.5s ease-out forwards;
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 18px rgba(250, 204, 21, 0.4);
          }
          50% {
            box-shadow: 0 0 32px rgba(250, 204, 21, 0.9);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
