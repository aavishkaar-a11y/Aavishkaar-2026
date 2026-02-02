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
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6">

          {/* TITLE */}
          <h1 className="font-samarkan text-6xl sm:text-7xl md:text-8xl lg:text-9xl no-lines">
            <span className="neon-yellow glow-text no-lines block">
              aavishkaar
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 neon-blue no-lines">
              2026
            </span>
          </h1>

          {/* TAGLINE */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 italic">
            Unleashed Vibes; Unmatched Energy
          </p>

          {/* DATE BADGE */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full neon-border-yellow glow-soft">
              <Sparkles className="text-primary" size={20} />
              <span className="text-sm sm:text-base md:text-lg font-semibold text-primary">
                March 13th & 14th – 2026
              </span>
              <Sparkles className="text-primary" size={20} />
            </div>
          </div>

          {/* REGISTRATION BADGE */}
          <div className="flex justify-center">
            <div
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
              onClick={() =>
                alert("🚀 Registrations will open shortly. Stay tuned!")
              }
            >
              🚀 Registration Opens Soon
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              onClick={handleExploreClick}
              className="
                bg-primary text-primary-foreground
                hover:bg-primary/90
                px-10 py-6 text-lg font-semibold
                shadow-lg shadow-primary/30
                hover:shadow-primary/50
                transition-all duration-300
              "
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>

      {/* 🔧 FIXED CSS */}
      <style>{`
        /* REMOVE ALL DECORATIVE LINES */
        .no-lines::before,
        .no-lines::after {
          content: none !important;
          display: none !important;
        }

        /* CLEAN GLOW (NO BARS) */
        .glow-text {
          text-shadow:
            0 0 12px rgba(250,204,21,0.6),
            0 0 28px rgba(250,204,21,0.4);
        }

        .glow-soft {
          box-shadow: 0 0 22px rgba(250,204,21,0.6);
        }

        /* BADGE POP */
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

        /* PULSE GLOW */
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 18px rgba(250,204,21,0.4);
          }
          50% {
            box-shadow: 0 0 32px rgba(250,204,21,0.9);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.5s infinite;
        }
      `}</style>
    </section>
  );
}
