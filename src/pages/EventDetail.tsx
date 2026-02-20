import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CoordinatorCard } from "@/components/events/CoordinatorCard";
import { day1Events, day2Events } from "@/data/events";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { eventForms } from "@/data/eventForms";
import { eventFormMap } from "@/data/eventFormMap";
import { eventPosters } from "@/data/eventPosters";
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
  const posterImage = id ? eventPosters[id] : undefined;

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
  <div className="max-w-3xl mx-auto text-center">

    {/* Category Badge */}
    <div className="flex justify-center gap-3 mb-4 flex-wrap">
      <span className="px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold">
        {event.category} Event
      </span>

      {formType && (
        <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
          {formType.toUpperCase()}
        </span>
      )}
    </div>

    {/* Event Title */}
    <h1 className="font-samarkan text-3xl md:text-5xl neon-yellow mb-6">
      {event.title}
    </h1>

    {/* Description */}
    <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
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

      {/* LEFT : POSTER */}
      <div className="lg:col-span-2">
        <ScrollAnimation>
          <div className="glass-card rounded-xl overflow-hidden">
            {posterImage ? (
              <img
                src={posterImage}
                alt={`${event.title} Poster`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="aspect-video bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="mx-auto mb-2 text-primary/50" size={42} />
                  <p className="font-semibold">Poster not available</p>
                </div>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>

      {/* RIGHT : DETAILS */}
      <div className="space-y-6">

       {/* RULES */}
<ScrollAnimation>
  <div className="glass-card rounded-xl p-10 space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <CheckCircle className="text-primary" size={24} />
      Rules & Guidelines
    </h2>

    <ul className="space-y-5">
      {event.rules.map((rule, index) => (
        <li
          key={index}
          className="flex gap-4 text-base md:text-lg text-foreground/90 leading-relaxed"
        >
          <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold shrink-0 mb-6">
            {index + 1}
          </span>
          <span>{rule}</span>
        </li>
      ))}
    </ul>
  </div>
</ScrollAnimation>

        {/* PRIZES */}
        <ScrollAnimation delay={100}>
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="text-primary" />
              Cash Prizes
            </h2>

            {event.prizes.map((prize, i) => (
              <div
                key={i}
                className="flex justify-between bg-muted/20 p-3 rounded-lg mb-2"
              >
                <span>{prize.position}</span>
                <span className="text-primary font-semibold">
                  {prize.amount}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* ENTRY FEE */}
        <ScrollAnimation delay={200}>
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

        {/* REGISTER BUTTON */}
        <ScrollAnimation delay={300}>
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

    {/* COORDINATORS FULL WIDTH BELOW */}
    <div className="mt-16">
      <ScrollAnimation>
        <div className=" rounded-xl p-8">
          <h2 className="text-2xl neon-blue font-semibold mb-6 text-center">
            Student Coordinators
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {event.coordinators.map((coord) => (
              <div
                key={coord.name}
                className="rounded-lg border border-white/10 bg-black/50 p-4 text-center hover:scale-105 transition-all duration-300"
              >
                <p className="font-semibold text-lg neon-yellow">
                  {coord.name}
                </p>
                <p className="font-semibold text-sm text-white">
                  {coord.department}{coord.year ? `, ${coord.year}` : ""}
                </p>
                <a
  href={`tel:${coord.phone}`}
  className="block text-sm mt-1 text-green-400 font-semibold hover:text-green-300 transition-colors duration-200"
>
  {coord.phone}
</a>
              </div>
            ))}

          </div>
        </div>
      </ScrollAnimation>
    </div>

  </div>
</section>
      </div>
    </Layout>
  );
};

export default EventDetail;