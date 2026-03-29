import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-20 lg:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">د. فرحات علية</h3>
            <p className="text-primary-foreground/80 mb-4">
              أخصائي في الطب العام
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              رعاية صحية شاملة وموثوقة تركز على المريض والعائلة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  عن الطبيب
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  الحجز والتواصل
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +213 XXX XXX XXX
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  contact@example.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  العنوان، المدينة، الجزائر
                </span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-3">ساعات العمل</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>السبت - الخميس</p>
                  <p>9:00 ص - 5:00 م</p>
                </div>
              </li>
              <li className="mr-6">
                <p>الجمعة: مغلق</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2026 د. فرحات علية - جميع الحقوق محفوظة</p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-primary-foreground transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary-foreground transition-colors"
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
