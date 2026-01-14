import { Layout } from "@/components/layout/Layout";
import { Music, Sparkles, Calendar, Image as ImageIcon, Users, Clock, MapPin } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CountdownTimer } from "@/components/home/CountdownTimer";

const Concert = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] relative overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full animate-rotate-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-secondary/10 rounded-full animate-rotate-slow" style={{ animationDirection: "reverse" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <Calendar size={16} />
                March 14th, 2026 - Evening
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <h1 className="font-samarkan text-6xl md:text-7xl lg:text-8xl mb-6">
                <span className="neon-yellow flicker">THE</span>
                <span className="block neon-blue">CONCERT</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                An unforgettable night of music, energy, and celebration
              </p>
            </ScrollAnimation>

            {/* Concert Poster Placeholder */}
            <ScrollAnimation delay={300}>
              <div className="max-w-2xl mx-auto mb-12">
                <div className="aspect-[3/4] rounded-2xl neon-border-yellow overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <ImageIcon className="text-primary/50 mx-auto mb-4" size={80} />
                    <p className="text-foreground text-xl font-semibold mb-2">Concert Poster</p>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Coming Soon Badge */}
            <ScrollAnimation delay={400}>
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass-card neon-border-blue mb-12">
                <Music className="text-secondary animate-pulse" size={28} />
                <span className="text-lg md:text-xl font-semibold text-secondary">
                  Artist Reveal Coming Soon
                </span>
                <Sparkles className="text-secondary animate-pulse" size={28} />
              </div>
            </ScrollAnimation>

            {/* Working Countdown Timer */}
            <ScrollAnimation delay={500}>
              <div className="mb-8">
                <p className="text-muted-foreground mb-4 text-sm uppercase tracking-wider">Countdown to Concert</p>
                <CountdownTimer targetDate="2026-03-14T18:00:00" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Concert Description Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="font-samarkan text-4xl md:text-5xl text-center neon-yellow mb-12">
              About The Concert
            </h2>
          </ScrollAnimation>
          
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={100}>
              <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Get ready for the most electrifying night of AAVISHKAR 2026! Our grand concert brings together 
                  incredible performances, stunning visuals, and an atmosphere that will leave you breathless. 
                  Whether you're a music enthusiast or just looking for an unforgettable experience, this is 
                  THE event you cannot miss.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Join thousands of students as we celebrate the culmination of two amazing days of creativity, 
                  talent, and cultural festivities with a night of pure musical magic. The energy, the crowd, 
                  the music - it all comes together for one spectacular evening!
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ScrollAnimation delay={200}>
                <div className="glass-card rounded-xl p-6 text-center">
                  <Clock className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-foreground mb-1">Timing</h3>
                  <p className="text-muted-foreground">6:00 PM Onwards</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <div className="glass-card rounded-xl p-6 text-center">
                  <MapPin className="text-secondary mx-auto mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-foreground mb-1">Venue</h3>
                  <p className="text-muted-foreground">Main Ground</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={400}>
                <div className="glass-card rounded-xl p-6 text-center">
                  <Users className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-foreground mb-1">Open For</h3>
                  <p className="text-muted-foreground">All Students</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="font-samarkan text-4xl md:text-5xl text-center neon-blue mb-12">
              Concert Guidelines
            </h2>
          </ScrollAnimation>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {[
                "Valid college ID card is mandatory for entry",
                "Gates open at 5:30 PM - arrive early to get the best spots",
                "No outside food or beverages allowed inside the venue",
                "Follow all safety instructions from event volunteers",
                "Photography and videography for personal use only",
                "Maintain discipline and respect fellow attendees",
                "Lost and found counter available near the entrance",
                "Emergency exits clearly marked - familiarize yourself",
                "No re-entry once you leave the concert area",
                "Have fun and create unforgettable memories!"
              ].map((guideline, index) => (
                <ScrollAnimation key={index} delay={index * 50}>
                  <div className="flex items-start gap-4 glass-card rounded-lg p-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground/90">{guideline}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Live Performance", desc: "Experience music like never before" },
              { title: "Visual Spectacle", desc: "Stunning lights and effects" },
              { title: "Unforgettable Night", desc: "Create memories that last forever" },
            ].map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 100}>
                <div className="text-center glass-card rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Concert;
