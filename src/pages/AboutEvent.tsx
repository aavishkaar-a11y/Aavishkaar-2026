import { Layout } from "@/components/layout/Layout";
import { Sparkles, Target, Users, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const AboutEvent = () => {
  return (
    <Layout>
      {/* 🎥 BACKGROUND VIDEO */}
      <div className="relative min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        >
          <source src="/videos/about-bg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* ================= HERO ================= */}
        <section className="pt-[calc(env(safe-area-inset-top)+4rem)] sm:pt-24 pb-14 sm:pb-20 relative z-10">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-secondary uppercase tracking-widest text-xs sm:text-sm mb-2">
                  Welcome to
                </p>

                <h1 className="font-samarkan text-3xl sm:text-5xl md:text-6xl neon-yellow mb-4 sm:mb-6">
                  aavishkaar-2026
                </h1>

                <p className="text-sm sm:text-lg text-foreground/80 italic">
                  "Unleashed Vibes; Unmatched Energy"
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ================= ABOUT CONTENT ================= */}
        <section className="py-10 sm:py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <ScrollAnimation>
                <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 mb-10 sm:mb-12">
                  <p className="text-sm sm:text-lg text-foreground/80 leading-relaxed mb-5">
                    <span className="text-primary font-semibold">
                      AAVISHKAAR-2026
                    </span>{" "}
                    is a landmark cultural event organized by{" "}
                    <span className="text-secondary font-medium">
                      Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
                    </span>
                    , Avadi, Chennai.
                  </p>

                  <p className="text-sm sm:text-lg text-foreground/80 leading-relaxed mb-5">
                    It celebrates{" "}
                    <span className="text-primary">talent</span>,{" "}
                    <span className="text-secondary">creativity</span>,{" "}
                    <span className="text-primary">innovation</span>, and{" "}
                    <span className="text-secondary">culture</span>, bringing
                    students together on one grand stage.
                  </p>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    From electrifying dance performances to mind-bending challenges,
                    from creative photography to thrilling e-sports — AAVISHKAAR
                    is where dreams come alive. This two-day extravaganza promises
                    unforgettable memories.
                  </p>
                </div>
              </ScrollAnimation>

              {/* ================= VALUES ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {[
                  {
                    icon: Sparkles,
                    title: "Talent",
                    desc: "Showcase your unique skills and abilities",
                    color: "primary",
                  },
                  {
                    icon: Lightbulb,
                    title: "Creativity",
                    desc: "Express your imagination without limits",
                    color: "secondary",
                  },
                  {
                    icon: Target,
                    title: "Innovation",
                    desc: "Push boundaries and think different",
                    color: "primary",
                  },
                  {
                    icon: Users,
                    title: "Culture",
                    desc: "Celebrate diversity and traditions",
                    color: "secondary",
                  },
                ].map((item, index) => (
                  <ScrollAnimation key={item.title} delay={index * 100}>
                    <div className="glass-card rounded-xl p-5 sm:p-6">
                      <div
                        className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${
                          item.color === "primary"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary/20 text-secondary"
                        }`}
                      >
                        <item.icon size={22} />
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="py-12 sm:py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { value: "2", label: "Days" },
                { value: "10+", label: "Events" },
                { value: "₹1L+", label: "In Prizes" },
                { value: "1000+", label: "Participants" },
              ].map((stat, index) => (
                <ScrollAnimation key={stat.label} delay={index * 100}>
                  <div className="glass-card rounded-xl p-5 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutEvent;