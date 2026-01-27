import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CoordinatorCard } from "@/components/events/CoordinatorCard";
import { day1Events, day2Events } from "@/data/events";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { eventForms } from "@/data/eventForms";
import { eventFormMap } from "@/data/eventFormMap";
import {
  ArrowLeft,
  Trophy,
  Ticket,
  CheckCircle,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find event
  const event = [...day1Events, ...day2Events].find((e) => e.id === id);

  // Google Form link & form type (SAFE)
  const formLink = id ? eventForms[id] : undefined;
  const formType = id ? eventFormMap[id] : undefined;

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(day1Events.find((e) => e.id === id) ? "/day-1" : "/day-2");
  };

  if (!event) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-samarkan text-3xl sm:text-4xl neon-yellow mb-4">
              Event Not Found
            </h1>
            <Button asChild>
              <Link to="/day-1">
                <ArrowLeft className="mr-2" />
                Back to Events
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        >
          <source src="/videos/event-bg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* HERO */}
        <section className="pt-24 pb-10 relative z-10">
          <div className="container mx-auto px-4">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowLeft size={18} />
              Back to {day1Events.find((e) => e.id === id) ? "Day 1" : "Day 2"}
            </button>

            <ScrollAnimation>
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm mb-3">
                  {event.category} Event
                </span>

                {formType && (
                  <span className="ml-3 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                    {formType.toUpperCase()} EVENT
                  </span>
                )}

                <h1 className="font-samarkan text-3xl md:text-5xl neon-yellow mb-4">
                  {event.title}
                </h1>

                <p className="text-foreground/80 text-base md:text-lg">
                  {event.description}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* LEFT */}
              <div className="lg:col-span-2 space-y-8">

                {/* POSTER */}
                <ScrollAnimation>
                  <div className="glass-card rounded-xl overflow-hidden">
                    <div className="aspect-video bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="mx-auto mb-2 text-primary/50" size={48} />
                        <p className="font-semibold">Event Poster</p>
                        <p className="text-muted-foreground text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* RULES */}
                <ScrollAnimation delay={100}>
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="text-primary" />
                      Rules & Guidelines
                    </h2>
                    <ul className="space-y-3">
                      {event.rules.map((rule, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">
                            {index + 1}
                          </span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                {/* COORDINATORS */}
                <ScrollAnimation delay={200}>
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Student Coordinators
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {event.coordinators.map((coord) => (
                        <CoordinatorCard key={coord.name} {...coord} />
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">

                {/* PRIZES */}
                <ScrollAnimation delay={150}>
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="text-primary" />
                      Cash Prizes
                    </h2>
                    {event.prizes.map((prize, i) => (
                      <div key={i} className="flex justify-between bg-muted/30 p-3 rounded-lg mb-2">
                        <span>{prize.position}</span>
                        <span className="text-primary font-semibold">
                          {prize.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>

                {/* ENTRY FEE */}
                <ScrollAnimation delay={250}>
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Ticket className="text-secondary" />
                      Entry Fee
                    </h2>
                    <p className="text-2xl font-bold text-secondary">
                      {event.fee}
                    </p>
                  </div>
                </ScrollAnimation>

                {/* REGISTER */}
                <ScrollAnimation delay={350}>
                  <Button
                    asChild
                    size="lg"
                    className="w-full py-6 text-lg font-semibold"
                    disabled={!formLink}
                  >
                    <a
                      href={formLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EventDetail;