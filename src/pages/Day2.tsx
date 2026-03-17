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
        <div className="relative z-10 pt-20">

          {/* HEADER TEXT */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <ScrollAnimation>
                <div className="text-center max-w-3xl mx-auto">
                  <h1 className="font-samarkan text-7xl md:text-7xl neon-yellow mb-6">
                    Day 2 Event
                  </h1>
                  
                  <p className="text-foreground/80 text-lg">
                    SALES • STYLES • SHOWCASE
                  </p>
                   <p className="text-secondary uppercase tracking-widest text-xl mb-2 pt-6">
                    May 9ᵗʰ, 2026
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
         
          {/* GROUP EVENTS */}
          <section className="py-12 pb-12">
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