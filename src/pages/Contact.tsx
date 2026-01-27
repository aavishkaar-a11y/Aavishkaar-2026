import { Layout } from "@/components/layout/Layout";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Youtube,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const Contact = () => {
  return (
    <Layout>
      {/* 🎥 BACKGROUND VIDEO */}
      <div className="relative min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* ================= HERO ================= */}
        <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative z-10 px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary uppercase tracking-widest text-xs sm:text-sm mb-2">
                Get In Touch
              </p>
              <h1 className="font-samarkan text-3xl sm:text-5xl md:text-6xl neon-yellow mb-4">
                CONTACT US
              </h1>
              <p className="text-muted-foreground text-sm sm:text-lg">
                We'd love to hear from you. Reach out for any queries.
              </p>
            </div>
          </ScrollAnimation>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-10 sm:py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

              {/* CONTACT INFO */}
              <ScrollAnimation>
                <div className="glass-card rounded-xl p-5 sm:p-6 space-y-5">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Contact Information
                  </h2>

                  {/* EMAIL */}
                  <a
                    href="mailto:aavishkar@veltech.edu.in"
                    className="flex items-start sm:items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Event Email</p>
                      <p className="font-medium break-all">
                        aavishkaar@velhightech.com
                      </p>
                    </div>
                  </a>

                  {/* PHONE */}
                  <a
                    href="tel:+919789037651"
                    className="flex items-start sm:items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition"
                  >
                    <div className="w-11 h-11 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 97890 37651</p>
                    </div>
                  </a>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/20">
                    <div className="w-11 h-11 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="font-medium leading-snug">
                        Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala
                        Engineering College
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Avadi, Chennai – 600055
                      </p>
                    </div>
                  </div>

                  {/* DATES */}
                  <div className="flex items-start sm:items-center gap-4 p-4 rounded-lg bg-muted/20">
                    <div className="w-11 h-11 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Event Dates</p>
                      <p className="font-medium">
                        March 13th & 14th – 2026
                      </p>
                    </div>
                  </div>

                  {/* SOCIALS */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">
                      Follow us on social media
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/life_at_vtht"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC-9Ir_kBKGjq6j6ThCMDk7w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition"
                      >
                        <Youtube size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* MAP */}
              <ScrollAnimation delay={150}>
                <div className="glass-card rounded-xl overflow-hidden neon-border-blue h-[280px] sm:h-[380px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.581956750222!2d80.10184697492227!3d13.188737487146948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5287e728c5c629%3A0x5126c6875672ddbb!2s54Q3%2BFQV%2C%20Morai%2C%20Tamil%20Nadu%20600055!5e0!3m2!1sen!2sin!4v1769319183485!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-90 hover:opacity-100 transition"
                  />
                </div>
              </ScrollAnimation>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;