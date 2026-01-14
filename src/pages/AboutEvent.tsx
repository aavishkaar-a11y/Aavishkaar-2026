import { Layout } from "@/components/layout/Layout";
import { Sparkles, Target, Users, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const AboutEvent = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
                Welcome to
              </p>
              <h1 className="font-samarkan text-5xl md:text-6xl neon-yellow mb-6">
                aavishkaar-2026
              </h1>
              <p className="text-xl text-foreground/80 italic">
                "Unleashed Vibes; Unmatched Energy"
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="glass-card rounded-2xl p-8 md:p-12 mb-12">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  <span className="text-primary font-semibold">AAVISHKAAR-2026</span> is a landmark cultural event organized by 
                  <span className="text-secondary font-medium"> Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College</span>, 
                  Avadi, Chennai.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  It celebrates <span className="text-primary">talent</span>, <span className="text-secondary">creativity</span>, 
                  <span className="text-primary"> innovation</span>, and <span className="text-secondary">culture</span>, 
                  bringing students together on one grand stage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From electrifying dance performances to mind-bending challenges, from creative photography 
                  to thrilling e-sports — AAVISHKAR is where dreams come alive. This two-day extravaganza 
                  promises to be an unforgettable experience filled with competitions, performances, and celebrations.
                </p>
              </div>
            </ScrollAnimation>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Sparkles, title: "Talent", desc: "Showcase your unique skills and abilities", color: "primary" },
                { icon: Lightbulb, title: "Creativity", desc: "Express your imagination without limits", color: "secondary" },
                { icon: Target, title: "Innovation", desc: "Push boundaries and think different", color: "primary" },
                { icon: Users, title: "Culture", desc: "Celebrate diversity and traditions", color: "secondary" },
              ].map((item, index) => (
                <ScrollAnimation key={item.title} delay={index * 100}>
                  <div className="glass-card rounded-xl p-6 group event-card">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      item.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                    }`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "2", label: "Days" },
              { value: "10+", label: "Events" },
              { value: "₹1L+", label: "In Prizes" },
              { value: "1000+", label: "Participants" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={index * 100}>
                <div className="text-center glass-card rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutEvent;
