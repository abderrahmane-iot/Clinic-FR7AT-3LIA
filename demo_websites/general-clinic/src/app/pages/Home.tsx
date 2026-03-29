import { Link } from "react-router";
import {
  Stethoscope,
  Heart,
  Activity,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Award,
  FileText,
  Syringe,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: Stethoscope,
      title: "استشارات طبية عامة",
      description: "فحص شامل وتشخيص دقيق لمختلف الحالات الصحية",
      link: "/services",
    },
    {
      icon: Activity,
      title: "متابعة الأمراض المزمنة",
      description: "برنامج متابعة شامل للسكري وضغط الدم والأمراض المزمنة الأخرى",
      link: "/chronic-disease",
    },
    {
      icon: Heart,
      title: "الطب الوقائي والفحوصات",
      description: "فحوصات دورية شاملة للحفاظ على صحتك وكشف المشاكل مبكراً",
      link: "/preventive-medicine",
    },
    {
      icon: Users,
      title: "طب العائلة",
      description: "رعاية صحية شاملة لجميع أفراد العائلة من جميع الأعمار",
      link: "/services",
    },
    {
      icon: Syringe,
      title: "الإجراءات الطبية البسيطة",
      description: "إجراءات طبية بسيطة وآمنة في بيئة معقمة",
      link: "/services",
    },
    {
      icon: FileText,
      title: "تنسيق الفحوصات المخبرية",
      description: "طلب وتفسير نتائج الفحوصات المخبرية والتحاليل الطبية",
      link: "/services",
    },
  ];

  const trustPillars = [
    {
      icon: Shield,
      title: "الخصوصية والسرية",
      description: "نحافظ على سرية معلوماتك الطبية بأعلى معايير الأمان",
    },
    {
      icon: CheckCircle,
      title: "معايير السلامة",
      description: "بيئة معقمة وبروتوكولات صحية صارمة لضمان سلامتك",
    },
    {
      icon: Clock,
      title: "متابعة مستمرة",
      description: "رعاية شاملة ومتابعة دقيقة لحالتك الصحية",
    },
    {
      icon: Award,
      title: "معدات حديثة",
      description: "أحدث الأجهزة والمعدات الطبية لتشخيص دقيق",
    },
  ];

  const faqs = [
    {
      question: "كيف يمكنني حجز موعد؟",
      answer:
        "يمكنك حجز موعد عبر صفحة الحجز على الموقع، أو الاتصال بنا مباشرة عبر الهاتف أو واتساب. نحن نرد على جميع طلبات الحجز خلال ساعات قليلة.",
    },
    {
      question: "ما هي ساعات عمل العيادة؟",
      answer:
        "العيادة مفتوحة من السبت إلى الخميس من الساعة 9:00 صباحاً حتى 5:00 مساءً. العيادة مغلقة يوم الجمعة.",
    },
    {
      question: "هل تقبلون التأمين الصحي؟",
      answer:
        "نرجو التواصل معنا مباشرة لمعرفة تفاصيل التأمين المقبول. نحن نعمل مع عدة شركات تأمين ويمكننا مساعدتك في إجراءات التأمين.",
    },
    {
      question: "ماذا يجب أن أحضر معي للموعد الأول؟",
      answer:
        "يُفضل إحضار بطاقة الهوية، أي تقارير طبية سابقة، قائمة بالأدوية الحالية، ونتائج أي فحوصات مخبرية حديثة.",
    },
    {
      question: "هل تقدمون خدمات الزيارات المنزلية؟",
      answer:
        "نعم، نقدم خدمات الزيارات المنزلية للحالات التي تتطلب ذلك. يرجى التواصل معنا لمعرفة التفاصيل والتكاليف.",
    },
    {
      question: "ما هي سياسة الإلغاء أو إعادة الجدولة؟",
      answer:
        "نقدر وقتك ووقت المرضى الآخرين. يرجى إعلامنا قبل 24 ساعة على الأقل إذا كنت بحاجة لإلغاء أو إعادة جدولة موعدك.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-bl from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm">رعاية صحية شاملة وموثوقة</span>
              </div>
              <h1 className="text-4xl md:text-5xl mb-4">د. فرحات علية</h1>
              <p className="text-xl text-secondary mb-6">
                أخصائي في الطب العام
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                رعاية طبية شاملة تركز على احتياجاتك الصحية وصحة عائلتك بمهنية
                وخبرة عالية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  احجز موعد
                </Link>
                <a
                  href="https://wa.me/213XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors text-lg"
                >
                  واتساب
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>العنوان، المدينة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>السبت - الخميس: 9:00 ص - 5:00 م</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDU2MDA3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="د. فرحات علية"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Snapshot */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-semibold text-primary mb-2">
                15+
              </div>
              <p className="text-sm text-muted-foreground">سنوات خبرة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-primary mb-2">
                5000+
              </div>
              <p className="text-sm text-muted-foreground">مريض سعيد</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-primary mb-2">
                100%
              </div>
              <p className="text-sm text-muted-foreground">رعاية شاملة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-primary mb-2">
                24/7
              </div>
              <p className="text-sm text-muted-foreground">دعم ومتابعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">خدماتنا الطبية</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الخدمات الطبية لتلبية جميع احتياجاتك الصحية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              اعرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">لماذا تختار عيادتنا؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نلتزم بتقديم أعلى معايير الرعاية الصحية في بيئة آمنة ومريحة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Path */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">كيف نعتني بك؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              رحلة رعاية صحية بسيطة ومريحة
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="mb-2">اختر الخدمة</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                حدد الخدمة المناسبة من خدماتنا الطبية الشاملة
              </p>
            </div>
            <div className="relative text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="mb-2">احجز موعدك</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                احجز موعداً مناسباً لك عبر الهاتف أو واتساب أو الموقع
              </p>
            </div>
            <div className="relative text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="mb-2">الزيارة والمتابعة</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                احصل على فحص شامل ومتابعة دقيقة لحالتك الصحية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29uc3VsdGF0aW9uJTIwcGF0aWVudHxlbnwxfHx8fDE3NzQ2NTkzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="استشارة طبية"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">د. فرحات علية</h2>
              <p className="text-xl text-secondary mb-6">
                أخصائي في الطب العام
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                <p>
                  تتمتع الدكتور فرحات علية بخبرة واسعة في الطب العام، حيث
                  يلتزم بتقديم رعاية طبية شاملة ومتخصصة لجميع المرضى.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>شهادات معتمدة في الطب العام والرعاية الصحية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>خبرة أكثر من 15 عاماً في تقديم الخدمات الطبية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>نهج شامل يركز على المريض والرعاية الوقائية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      متخصص في متابعة الأمراض المزمنة والطب الوقائي
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                اعرف المزيد عن الطبيب
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">آراء مرضانا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نفخر بثقة مرضانا ورضاهم عن خدماتنا
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "أحمد م.",
                comment:
                  "دكتورة رائعة ومتفهمة، تستمع بعناية وتشرح كل شيء بوضوح. أنصح بها بشدة.",
                rating: 5,
              },
              {
                name: "فاطمة ب.",
                comment:
                  "عيادة نظيفة ومريحة، والدكتور محترف جداً. المتابعة ممتازة والاهتمام بالتفاصيل رائع.",
                rating: 5,
              },
              {
                name: "خالد ع.",
                comment:
                  "أفضل طبيب قابلته. تعامله الإنساني والمهني يجعلك تشعر بالاطمئنان والثقة.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">الأسئلة الشائعة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              إجابات على أكثر الأسئلة شيوعاً
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">موقع العيادة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نحن في موقع مناسب وسهل الوصول
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.1573374361644!2d3.042048315198!3d36.75257797996892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb27e3296b539%3A0x200b0000000!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">العنوان</h4>
                  <p className="text-muted-foreground">
                    العنوان الكامل للعيادة
                    <br />
                    المدينة، الجزائر
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">الهاتف</h4>
                  <p className="text-muted-foreground">+213 XXX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">ساعات العمل</h4>
                  <p className="text-muted-foreground">
                    السبت - الخميس: 9:00 ص - 5:00 م
                    <br />
                    الجمعة: مغلق
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
