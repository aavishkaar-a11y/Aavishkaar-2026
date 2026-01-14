import { User } from "lucide-react";

interface CoordinatorCardProps {
  name: string;
  department: string;
  year: string;
  phone?: string;
  role?: string;
  isStaff?: boolean;
}

export function CoordinatorCard({ name, department, year, phone, role, isStaff }: CoordinatorCardProps) {
  return (
    <div className={`glass-card rounded-xl p-4 flex items-center gap-4 ${isStaff ? "neon-border-yellow" : ""}`}>
      {/* Avatar */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
        isStaff 
          ? "bg-primary/20 text-primary" 
          : "bg-secondary/20 text-secondary"
      }`}>
        <User size={24} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{name}</h4>
        <p className="text-muted-foreground text-sm">{department} • {year}</p>
        {role && <p className="text-primary text-xs font-medium mt-1">{role}</p>}
      </div>

      {/* Phone */}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          {phone}
        </a>
      )}
    </div>
  );
}
