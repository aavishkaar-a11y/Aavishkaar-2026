import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/events/EventCard";
import { day2Events } from "@/data/events";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import {
  ShoppingBag,
  Star,
  Users,
  User,
  Phone,
} from "lucide-react";

/* 🔥 EVENT IMAGES */
import stallImg from "@/assets/events/stall.jpg";
import rampWalkImg from "@/assets/events/ramp-walk.jpg";

/* 🎯 ICON MAP */
const eventIcons: Record<string, any> = {
  stall: ShoppingBag,
  "ramp-walk": Star,
};

/* 🖼 IMAGE MAP */
const eventImages: Record<string, string> = {
  stall: stallImg,
  "ramp-walk": rampWalkImg,
};

/* 👨‍🏫 FACULTY COORDINATOR */
const facultyCoordinators = [
  {
    name: "Dr. M. Gopinath",
    role: "Dean - Cultural Club's and Activities (CCA)",
    phone: "9994041130",
  },
];

const Day2 = () => {
  const soloEvents = day2Events.filter(e => e.category === "solo");
  const groupEvents = day2Events.filter(e => e.category === "group");

  return (
    <Layout>
      {/* 🎥 FULL PAGE BACKGROUND VIDEO */}
      <div className="relative min-h-screen">

        {/* VIDEO (FIXED BEHIND EVERYTHING) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            fixed top-0 left-0
            w-screen h-screen
            object-cover object-center
            -z-20
          "
        >
          <source src="/videos/day2-bg.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="fixed inset-0 bg-black/65 -z-10" />

        {/* ================= PAGE CONTENT ================= */}
        <div className="relative z-10 pt-28">

          {/* HEADER TEXT */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <ScrollAnimation>
                <div className="text-center max-w-3xl mx-auto">
                  <h1 className="font-samarkan text-5xl md:text-7xl neon-blue mb-6">
                    Day 2
                  </h1>
                  <p className="text-secondary uppercase tracking-widest text-sm mb-2">
                    March 14th, 2026
                  </p>
                  <p className="text-foreground/80 text-lg">
                    Creative Stalls • Ramp Walk • Showcase
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* FACULTY COORDINATOR */}
          <section className="py-10">
            <div className="container mx-auto px-4">
              {facultyCoordinators.map(c => (
                <div
                  key={c.name}
                  className="glass-card max-w-xl mx-auto p-6 text-center neon-border-blue"
                >
                  <p className="text-primary font-semibold">Faculty Coordinator</p>
                  <p className="text-lg font-medium">{c.name}</p>
                  <p className="text-muted-foreground">{c.role}</p>

                  <a
                    href={`tel:${c.phone}`}
                    className="flex justify-center items-center gap-2 mt-3 text-secondary hover:underline"
                  >
                    <Phone size={16} />
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* SOLO EVENTS */}
          <section className="py-12">
            <div className="container mx-auto px-4">
             
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {soloEvents.map((e, i) => (
                  <ScrollAnimation key={e.id} delay={i * 100}>
                    <EventCard
                      id={e.id}
                      title={e.title}
                      category="Solo"
                      icon={eventIcons[e.id]}
                      image={eventImages[e.id]}
                      description={e.description}
                      fee={e.fee}
                      prizes={e.prizes.map(p => `₹${p.amount}`)}
                    />
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* GROUP EVENTS */}
          <section className="py-12 pb-24">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-8 flex gap-2">
                <Users /> Group Events
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupEvents.map((e, i) => (
                  <ScrollAnimation key={e.id} delay={i * 100}>
                    <EventCard
                      id={e.id}
                      title={e.title}
                      category="Group"
                      icon={eventIcons[e.id]}
                      image={eventImages[e.id]}
                      description={e.description}
                      fee={e.fee}
                      prizes={e.prizes.map(p => `₹${p.amount}`)}
                    />
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Day2;