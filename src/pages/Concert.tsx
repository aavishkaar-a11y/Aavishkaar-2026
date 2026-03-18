import { Layout } from "@/components/layout/Layout";
import {
  Music,
  Sparkles,
  Calendar,
  Image as ImageIcon,
  Users,
  Clock,
  MapPin,
  Import,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import proShowPoster from "@/assets/pro-show.jpeg";
import guest1 from "@/assets/guest1.jpg";
import guest2 from "@/assets/guest2.jpg";
import guest3 from "@/assets/guest3.jpg";
import guest4 from "@/assets/guest4.jpg";
import guest5 from "@/assets/guest5.jpg";

const Concert = () => {
  return (
    <Layout>
      {/* 🎥 FULL PAGE BACKGROUND VIDEO */}
      <div className="relative min-h-screen">

        {/* VIDEO */}
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
          <source src="/videos/concert-bg.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex items-center pt-28">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              

              {/* 🔥 ONLY GLOW HERE */}
              <ScrollAnimation delay={100}>
                <h1 className="font-samarkan text-8xl md:text-9xl lg:text-10xl  neon-blue">Mega</h1>
                <h1 className="font-samarkan text-6xl md:text-7xl lg:text-8xl mb-6">
                  <span className="neon-yellow">Pro Show</span>
                  
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                  An unforgettable night of music, energy, and celebration
                </p>
              </ScrollAnimation>
<ScrollAnimation>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  <Calendar size={16} />
                  May 9ᵗʰ, 2026 – Evening
                </div>
              </ScrollAnimation>
              {/* POSTER */}
        <ScrollAnimation delay={300}>
  <div className="w-full max-w-4xl mx-auto mb-12 px-4">
    <div className="rounded-2xl neon-border-yellow overflow-hidden bg-black/40">
      <img
        src={proShowPoster}
        alt="Pro Show Poster"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</ScrollAnimation>


              {/* COUNTDOWN */}
              <ScrollAnimation delay={500}>
                <div className="mb-8">
                  <p className="text-muted-foreground mb-4 text-sm uppercase tracking-wider">
                    Countdown to Concert
                  </p>
                  <CountdownTimer targetDate="2026-05-08T18:00:00" />
                </div>
              </ScrollAnimation>

            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="font-samarkan text-4xl md:text-5xl text-center neon-yellow mb-12">
                About The Concert
              </h2>
            </ScrollAnimation>

            <div className="max-w-4xl mx-auto">
              <ScrollAnimation delay={100}>
                <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
                  <p className="text-lg leading-relaxed mb-6">
                    Get ready for the most electrifying night of AAVISHKAR 2026.
                    A night filled with music, energy, lights, and unforgettable memories.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Join thousands of students as we close the fest with a grand musical celebration.
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-3 gap-6">
                <ScrollAnimation delay={200}>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <Clock className="mx-auto mb-3" size={32} />
                    <h3 className="text-lg font-semibold mb-1">Timing</h3>
                    <p className="text-muted-foreground">6:00 PM Onwards</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <MapPin className="mx-auto mb-3" size={32} />
                    <h3 className="text-lg font-semibold mb-1">Venue</h3>
                    <p className="text-muted-foreground">Main Ground</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={400}>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <Users className="mx-auto mb-3" size={32} />
                    <h3 className="text-lg font-semibold mb-1">Open For</h3>
                    <p className="text-muted-foreground">All Students</p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* ================= GUIDELINES (NO MASK EFFECT) ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="font-samarkan text-4xl md:text-5xl text-center neon-blue mb-12">
                Concert Guidelines
              </h2>
            </ScrollAnimation>

            <div className="max-w-3xl mx-auto grid gap-4">
              {[
                "Valid college ID card is mandatory",
                "Gates open at 5:30 PM",
                "No outside food or beverages",
                "Follow volunteer instructions",
                "No re-entry once exited",
                "Maintain discipline and safety",
              ].map((item, index) => (
                <ScrollAnimation key={index} delay={index * 50}>
                  <div className="glass-card rounded-lg p-4 flex gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20">
                      {index + 1}
                    </span>
                    <p>{item}</p>
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

export default Concert;