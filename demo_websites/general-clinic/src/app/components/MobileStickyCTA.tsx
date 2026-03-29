import { Link } from "react-router";
import { Calendar, Phone } from "lucide-react";

export function MobileStickyCTA() {
  const whatsappNumber = "213XXXXXXXXX";

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-40">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg active:bg-primary/90 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span>احجز موعد</span>
        </Link>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 rounded-lg active:bg-secondary/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>اتصل الآن</span>
        </a>
      </div>
    </div>
  );
}
