import { Layout } from "@/components/layout/Layout";
import { MapPin, Mail, Phone, Clock, Instagram, Youtube } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
                Get In Touch
              </p>
              <h1 className="font-samarkan text-5xl md:text-6xl neon-yellow mb-4">
                CONTACT US
              </h1>
              <p className="text-muted-foreground text-lg">
                We'd love to hear from you. Reach out for any queries.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:aavishkar@veltech.edu.in"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Event Email</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          aavishkar@veltech.edu.in
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+914426840129"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground group-hover:text-secondary transition-colors">
                          +91 44 2684 0129
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium text-foreground">
                          Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          60, Avadi – Vel Tech Road, Vel Nagar, Avadi, Chennai, Tamil Nadu – 600055
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Event Dates</p>
                        <p className="font-medium text-foreground">
                          March 13th & 14th – 2026
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                    <div className="flex gap-4">
                      {[Instagram, Youtube].map((Icon, index) => (
                        <a
                          key={index}
                          href="#"
                          className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                        >
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Map */}
            <ScrollAnimation delay={200}>
              <div className="glass-card rounded-xl overflow-hidden neon-border-blue h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0!2d80.1!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f26c9a2d67%3A0x4f5e5a5a5a5a5a5a!2sVel%20Tech%20High%20Tech%20Engineering%20College!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
