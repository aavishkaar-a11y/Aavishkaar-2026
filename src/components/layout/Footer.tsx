import { Link, useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Event", path: "/about-event" },
  { label: "Day 1 Events", path: "/day-1" },
  { label: "Day 2 Events", path: "/day-2" },
  { label: "Concert", path: "/concert" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="font-samarkan text-2xl neon-yellow mb-4">aavishkaar-2026</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A landmark cultural event celebrating talent, creativity, innovation, 
              and culture, bringing students together on one grand stage.
            </p>
            <p className="text-primary font-semibold italic">
              "Unleashed Vibes; Unmatched Energy"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary" />
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:aavishkar@veltech.edu.in"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                aavishkaar@velhightech.com
              </a>
              <a
                href="tel:+919363972364"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm"
              >
                <Phone size={16} />
                +91 9363972364
              </a>
              <a
                href="tel:+917010877900"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm"
              >
                <Phone size={16} />
                +91 7010877900
              </a>
             <div className="flex gap-4 pt-2">
  <a
    href="https://www.instagram.com/life_at_vtht"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-pink-500 transition-colors"
    aria-label="Instagram"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.youtube.com/channel/UC-9Ir_kBKGjq6j6ThCMDk7w"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-red-500 transition-colors"
    aria-label="YouTube"
  >
    <Youtube size={20} />
  </a>
</div>
            </div>
          </div>

          {/* Address & Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Our Location
            </h4>
            <div className="flex items-start gap-2 text-muted-foreground text-sm mb-4">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
              <address className="not-italic leading-relaxed">
                60, Avadi – Vel Tech Road,<br />
                Vel Nagar, Avadi,<br />
                Chennai, Tamil Nadu – 600055
              </address>
            </div>
            <div className="rounded-lg overflow-hidden border border-border/50 neon-border-blue">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.581956750222!2d80.10184697492227!3d13.188737487146948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5287e728c5c629%3A0x5126c6875672ddbb!2s54Q3%2BFQV%2C%20Morai%2C%20Tamil%20Nadu%20600055!5e0!3m2!1sen!2sin!4v1769319183485!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2026 AAVISHKAR – Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
            </p>
            <p className="text-xs text-muted-foreground/60">
              March 13th & 14th – 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
