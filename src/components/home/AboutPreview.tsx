import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background fade */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">

          {/* ================= TEXT ================= */}
          <div>
            <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
              About The Event
            </p>

            <h2 className="font-samarkan text-3xl sm:text-4xl md:text-5xl neon-yellow mb-6">
              aavishkaar-2026
            </h2>

            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed mb-6">
              AAVISHKAAR-2026 is a landmark cultural fest organized by{" "}
              <span className="text-primary font-medium">
                Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
              </span>
              , Avadi, Chennai.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              A grand 2-day celebration featuring 10+ events, massive cash prizes,
              and an electrifying professional show.
            </p>

            <Button
              asChild
              variant="outline"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/about-event">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* ================= VISUAL ================= */}
          <div className="relative flex justify-center px-3 sm:px-0">
            <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square rounded-2xl preview-card">

              {/* Static glow border */}
              <div className="absolute inset-0 rounded-2xl glow-border pointer-events-none" />

              {/* Video */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                <video
                  src="/videos/aavishkar-logo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>

              {/* ===== FLOATING BADGES ===== */}

              {/* Top Right */}
              <div className="absolute top-0 right-0 translate-x-[35%] -translate-y-[35%] flex flex-col gap-1.5 items-end">
                <span className="badge-yellow">10+ Events</span>
                <span className="badge-cyan">Pro Show</span>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-0 left-0 -translate-x-[35%] translate-y-[35%] flex flex-col gap-1.5 items-start">
                <span className="badge-yellow">2 Days Event</span>
                <span className="badge-cyan">₹1.5+ Lakhs Prizes</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>
        {`
          .glow-border {
            border: 2px solid #facc15;
            box-shadow:
              0 0 18px rgba(250, 204, 21, 0.45),
              inset 0 0 10px rgba(250, 204, 21, 0.25);
          }

          .badge-yellow {
            padding: 5px 14px;
            border-radius: 999px;
            background: #facc15;
            color: #000;
            font-size: 0.7rem;
            font-weight: 600;
            box-shadow: 0 0 12px rgba(250, 204, 21, 0.45);
            white-space: nowrap;
          }

          .badge-cyan {
            padding: 5px 14px;
            border-radius: 999px;
            background: #22d3ee;
            color: #000;
            font-size: 0.7rem;
            font-weight: 600;
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.45);
            white-space: nowrap;
          }
        `}
      </style>
    </section>
  );
}