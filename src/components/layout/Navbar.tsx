import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoCircular from "@/assets/logo-circular.png";

const topNavItems = [
  { label: "Home", path: "/" },
  { label: "Patrons", path: "/patrons" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const eventNavItems = [
  { label: "About Event", path: "/about-event" },
  { label: "Day 1", path: "/day-1" },
  { label: "Day 2", path: "/day-2" },
  { label: "Concert", path: "/concert" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Navbar - Static */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Text Only */}
            <Link to="/" className="flex items-center group">
              <span className="font-samarkan text-2xl neon-yellow tracking-wider">
                aavishkaar-2026
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {topNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn("nav-link", isActive(item.path) && "active")}
                >
                  {item.label}
                </Link>
              ))}
            </div>

  {/* College Name with Logo - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
  <div className="text-right leading-tight space-y-0.5">
    <p className="text-xs text-muted-foreground">
      Vel Tech High Tech
    </p>
    <p className="text-xs text-muted-foreground">
      Dr. Rangarajan Dr. Sakunthala
    </p>
    <p className="text-xs text-primary font-semibold">
      Engineering College
    </p>
    <p className="text-[10px] text-yellow-400 font-medium tracking-wide">
      An Autonomous Institution
    </p>
  </div>
              <img 
                src={logoCircular} 
                alt="College Logo" 
                className="w-10 h-10 rounded-full border-2 border-primary/50 shadow-lg shadow-primary/20"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Event Navbar - Sticky */}
      <nav
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300 border-b border-primary/20",
          isScrolled
            ? "top-16 bg-background/95 backdrop-blur-lg shadow-lg shadow-primary/5"
            : "top-16 bg-muted/50 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center gap-2 h-12">
            {eventNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-6 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
  className={cn(
    "fixed top-16 left-0 right-0 bottom-0 z-30 lg:hidden transition-all duration-300",
    isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
  )}
>

        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-4 p-10">
          <p className="text-xs text-muted-foreground text-center mb-4">
            Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College 
             An Autonomous Institution
          </p>
           
          <div className="flex flex-col items-center gap-2 mb-6">
            {topNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "text-xl font-medium py-2 transition-colors",
                  isActive(item.path) ? "neon-yellow" : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="flex flex-col items-center gap-2 mt-4">
            {eventNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "text-lg py-2 transition-colors",
                  isActive(item.path) ? "neon-blue" : "text-foreground/70 hover:text-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbars */}
      <div className="h-28" />
    </>
  );
}
