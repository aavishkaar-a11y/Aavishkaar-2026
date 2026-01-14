import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CoordinatorCard } from "@/components/events/CoordinatorCard";
import { day1Events, day2Events } from "@/data/events";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ArrowLeft, Trophy, Ticket, CheckCircle, ExternalLink, Image as ImageIcon } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const event = [...day1Events, ...day2Events].find((e) => e.id === id);

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(day1Events.find(e => e.id === id) ? '/day-1' : '/day-2');
  };

  if (!event) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-samarkan text-4xl neon-yellow mb-4">Event Not Found</h1>
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
      {/* Hero */}
      <section className="pt-8 pb-12 relative overflow-hidden thunder-bg">
        <div className="container mx-auto px-4">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to {day1Events.find(e => e.id === id) ? "Day 1" : "Day 2"}
          </button>

          <ScrollAnimation>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4 capitalize">
                {event.category} Event
              </span>
              <h1 className="font-samarkan text-4xl md:text-5xl neon-yellow mb-4">
                {event.title}
              </h1>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {event.description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Poster */}
            <ScrollAnimation>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="text-primary/50 mx-auto mb-4" size={64} />
                    <p className="text-foreground font-semibold">Event Poster</p>
                    <p className="text-muted-foreground text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Rules */}
            <ScrollAnimation delay={100}>
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Rules & Guidelines
                </h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Coordinators */}
            <ScrollAnimation delay={200}>
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Student Coordinators
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.coordinators.map((coord) => (
                    <CoordinatorCard
                      key={coord.name}
                      name={coord.name}
                      department={coord.department}
                      year={coord.year}
                      phone={coord.phone}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prizes */}
            <ScrollAnimation delay={150}>
              <div className="glass-card rounded-xl p-6 neon-border-yellow">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Trophy className="text-primary" />
                  Prizes
                </h2>
                <div className="space-y-3">
                  {event.prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <span className="text-foreground/80">{prize.position}</span>
                      <span className="text-primary font-semibold">{prize.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Entry Fee */}
            <ScrollAnimation delay={250}>
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Ticket className="text-secondary" />
                  Entry Fee
                </h2>
                <p className="text-2xl font-bold text-secondary">{event.fee}</p>
              </div>
            </ScrollAnimation>

            {/* Register Button */}
            <ScrollAnimation delay={350}>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold shadow-lg shadow-primary/30"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
