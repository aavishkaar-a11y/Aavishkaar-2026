import { Link } from "react-router-dom";
import { Calendar, Music, Users, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "Day 1",
    subtitle: "8 Exciting Events",
    description: "Solo Dance, Group Dance, Photography, Short Film, E-Sports & more",
    path: "/day-1",
    color: "primary",
  },
  {
    icon: Users,
    title: "Day 2",
    subtitle: "Grand Showcase",
    description: "Ramp Walk, Creative Stalls & Cultural Exhibitions",
    path: "/day-2",
    color: "secondary",
  },
  {
    icon: Music,
    title: "Pro Show",
    subtitle: "Live Performance",
    description: "An unforgettable night of music and entertainment",
    path: "/concert",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Prizes",
    subtitle: "Worth ₹1.5 Lakh+",
    description: "Exciting cash prizes and recognition for winners",
    path: "/prizes",
    color: "secondary",
  },
];

export function EventHighlights() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
     
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-stranger text-4xl md:text-5xl neon-yellow mb-4">
            What Awaits You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two days of non-stop entertainment, creativity, and cultural celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Link
              key={item.title}
              to={item.path}
              className="group event-card glass-card rounded-xl p-6 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                item.color === "primary" ? "bg-primary/5" : "bg-secondary/5"
              }`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                item.color === "primary" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-secondary/20 text-secondary"
              }`}>
                <item.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className={`text-sm font-medium mb-2 ${
                item.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                {item.subtitle}
              </p>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>

              {/* Arrow indicator */}
              <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                item.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
