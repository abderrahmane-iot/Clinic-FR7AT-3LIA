import { LucideIcon } from "lucide-react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        {link && (
          <Link
            to={link}
            className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            <span>اعرف المزيد</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        )}
      </div>
    </div>
  );
}
