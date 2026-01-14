import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
              About The Event
            </p>
            <h2 className="font-samarkan text-4xl md:text-5xl neon-yellow mb-6">
              aavishkaar-2026
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              AAVISHKAAR-2026 is a landmark cultural event organized by 
              <span className="text-primary font-medium"> Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College</span>, 
              Avadi, Chennai.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It celebrates talent, creativity, innovation, and culture, bringing students 
              together on one grand stage. From electrifying dance performances to 
              mind-bending challenges, from creative photography to thrilling e-sports — 
              AAVISHKAR is where dreams come alive.
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

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden neon-border-blue relative">
              {/* Abstract geometric design */}
              <div className="absolute inset-0 glass-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Rotating ring */}
                    <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-rotate-slow" />
                    <div className="absolute inset-4 border-2 border-secondary/30 rounded-full animate-rotate-slow" style={{ animationDirection: "reverse" }} />
                    <div className="absolute inset-8 border-2 border-primary/30 rounded-full animate-rotate-slow" />
                    
                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="font-samarkan text-5xl neon-yellow flicker block">2</span>
                        <span className="text-muted-foreground text-sm uppercase tracking-widest">Days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-secondary" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-secondary" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/30">
              10+ Events
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm shadow-lg shadow-secondary/30">
              ₹1 Lakh+ Prizes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
