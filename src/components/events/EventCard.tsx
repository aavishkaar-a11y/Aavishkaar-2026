import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  fee: string;
  prizes: string[];
  image?: string;
}

export function EventCard({ id, title, category, icon: Icon, description, fee, prizes }: EventCardProps) {
  return (
    <Link
      to={`/event/${id}`}
      className="group event-card glass-card rounded-xl overflow-hidden block"
    >
      {/* Image/Icon Header */}
      <div className="h-40 relative overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-secondary/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors group-hover:scale-110 duration-500" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-secondary">
          {category}
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Prize & Fee */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-primary font-medium">
            ₹{prizes[0]?.replace(/[^0-9]/g, "") || "TBA"}
          </span>
          <span className="text-muted-foreground">
            Entry: {fee}
          </span>
        </div>

        {/* View Details Arrow */}
        <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          View Details
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
