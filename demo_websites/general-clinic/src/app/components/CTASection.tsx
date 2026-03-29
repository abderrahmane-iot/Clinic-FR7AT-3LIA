import { Link } from "react-router";
import { Calendar, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  showWhatsApp?: boolean;
}

export function CTASection({
  title = "جاهز لحجز موعدك؟",
  description = "نحن هنا لخدمتك. احجز موعدك الآن واحصل على الرعاية الصحية التي تستحقها",
  showWhatsApp = true,
}: CTASectionProps) {
  const whatsappNumber = "213XXXXXXXXX";

  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors text-lg"
          >
            <Calendar className="w-5 h-5" />
            احجز موعد
          </Link>
          {showWhatsApp && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
