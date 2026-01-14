import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/events/EventCard";
import { day2Events } from "@/data/events";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Store, Sparkles, Phone } from "lucide-react";

const eventIcons: Record<string, any> = {
  "stall": Store,
  "ramp-walk": Sparkles,
};

const facultyCoordinators = [
  { 
    name: "Dr. M. Gopinath", 
    role: "Dean - Cultural Club's and Activities (CCA)", 
    phone: "9994041130" 
  },
];

const hods = [
  { name: "Dr. D.S. Manoj Kumar", role: "Head - AIML" },
  { name: "Mrs. L. Geetha", role: "Head - AI&DS" },
];

const Day2 = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-16 relative overflow-hidden thunder-bg">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-samarkan text-5xl md:text-7xl neon-blue mb-6">
                Day 2
              </h1>
              <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
                March 14th, 2026
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Grand showcase featuring Creative Stalls and the spectacular Ramp Walk
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation delay={100}>
            <div className="max-w-3xl mx-auto">
              {facultyCoordinators.map((coord) => (
                <div key={coord.name} className="glass-card rounded-xl p-6 text-center neon-border-blue mb-8">
                  <h3 className="text-primary font-semibold text-xl mb-2">Faculty Coordinator</h3>
                  <p className="text-foreground text-lg font-medium">{coord.name}</p>
                  <p className="text-muted-foreground">{coord.role}</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-secondary">
                    <Phone size={16} />
                    <span>{coord.phone}</span>
                  </div>
                </div>
              ))}

              {/* HODs */}
              <div className="grid md:grid-cols-2 gap-6">
                {hods.map((hod, index) => (
                  <ScrollAnimation key={hod.name} delay={200 + index * 100}>
                    <div className="glass-card rounded-xl p-6 text-center neon-border-blue">
                      <h3 className="text-primary font-semibold text-lg mb-2">Faculty Coordinator</h3>
                      <p className="text-foreground font-medium">{hod.name}</p>
                      <p className="text-muted-foreground text-sm">{hod.role}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {day2Events.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 150}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  category={event.category === "solo" ? "Solo" : "Group"}
                  icon={eventIcons[event.id] || Store}
                  description={event.description}
                  fee={event.fee}
                  prizes={event.prizes.map((p) => p.amount)}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Day2;
