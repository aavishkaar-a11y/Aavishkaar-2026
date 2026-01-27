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

export function EventCard({
  id,
  title,
  category,
  icon: Icon,
  description,
  fee,
  prizes,
  image,
}: EventCardProps) {
  return (
    <Link
      to={`/event/${id}`}
      className="group glass-card rounded-xl overflow-hidden block hover:scale-[1.03] transition"
    >
      {/* IMAGE / ICON */}
      <div className="h-40 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-muted to-secondary/20">
            <Icon className="w-16 h-16 text-primary/60" />
          </div>
        )}

        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 text-xs font-medium">
          {category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex justify-between text-sm">
          <span className="text-primary font-medium">
            💰 Prize ₹{prizes[0]?.replace(/[^0-9]/g, "") || "TBA"}
          </span>
          <span className="text-muted-foreground">Entry: {fee}</span>
        </div>

        <div className="mt-4 text-secondary text-sm opacity-0 group-hover:opacity-100 transition">
          View Details →
        </div>
      </div>
    </Link>
  );
}