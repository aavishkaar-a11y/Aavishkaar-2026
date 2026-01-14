import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/events/EventCard";
import { day1Events } from "@/data/events";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { 
  Music, Camera, Ghost, Puzzle, Trophy, Users, Film, Gamepad2,
  User, Phone
} from "lucide-react";

const eventIcons: Record<string, any> = {
  "solo-dance": Music,
  "photography": Camera,
  "haunt-hunt": Ghost,
  "connexions": Puzzle,
  "ipl-auction": Trophy,
  "group-dance": Users,
  "short-film": Film,
  "esports": Gamepad2,
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

const Day1 = () => {
  const soloEvents = day1Events.filter((e) => e.category === "solo");
  const duoEvents = day1Events.filter((e) => e.category === "duo");
  const groupEvents = day1Events.filter((e) => e.category === "group");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-16 relative overflow-hidden thunder-bg">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-samarkan text-5xl md:text-7xl neon-yellow mb-6">
                Culturals
              </h1>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Showcase your dance moves in Group Dance or Solo Dance (Fusion), captivate with your voice in Group Singing (Band) and Solo Singing, or express your artistic vision through Short Film, Photography, and Channel Surfing. Test your intellect in the exciting Quiz Competition, game your way to glory in E-Sports, or dazzle with confidence in the Ramp Walk.
              </p>
              <p className="text-secondary font-medium text-xl">
                Join us at Aavishkaar-2026 and let your creativity and passion shine!
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Faculty Coordinator - Main */}
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

      {/* Solo Events */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <User className="text-secondary" />
              Solo Events
            </h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {soloEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 100}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  category="Solo"
                  icon={eventIcons[event.id] || Music}
                  description={event.description}
                  fee={event.fee}
                  prizes={event.prizes.map((p) => p.amount)}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Duo Events */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Users className="text-primary" size={24} />
              Duo Events
            </h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {duoEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 100}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  category="Duo"
                  icon={eventIcons[event.id] || Puzzle}
                  description={event.description}
                  fee={event.fee}
                  prizes={event.prizes.map((p) => p.amount)}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Group Events */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Users className="text-secondary" />
              Group Events
            </h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 100}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  category="Group"
                  icon={eventIcons[event.id] || Users}
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

export default Day1;
