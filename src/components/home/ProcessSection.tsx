import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Participate", description: "Choose your event" },
  { title: "Register", description: "Fill the form" },
  { title: "Get Selected", description: "Qualify for finals" },
  { title: "Win Amazing Prizes", description: "Claim your glory" },
];

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-samarkan text-4xl md:text-5xl text-center neon-yellow mb-16">
          Your Process
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2 hidden md:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="glass-card rounded-xl p-6 text-center relative z-10 hover:neon-border-yellow transition-all duration-300 group">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Connection dots for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-6 bg-primary md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
