import { Link } from "react-router";
import {
  Stethoscope,
  Activity,
  Heart,
  Users,
  Syringe,
  FileText,
  ClipboardList,
  Shield,
  Baby,
  Pill,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "الاستشارات الطبية العامة",
      description:
        "فحص شامل للحالة الصحية، تشخيص دقيق للأمراض، ووصف العلاج المناسب",
      link: "/contact",
    },
    {
      icon: Activity,
      title: "متابعة الأمراض المزمنة",
      description:
        "برنامج متابعة شامل للسكري، ضغط الدم، أمراض القلب، والأمراض المزمنة الأخرى",
      link: "/chronic-disease",
    },
    {
      icon: Heart,
      title: "الفحوصات الوقائية الشاملة",
      description:
        "فحوصات دورية شاملة للكشف المبكر عن الأمراض والحفاظ على صحتك",
      link: "/preventive-medicine",
    },
    {
      icon: Users,
      title: "طب العائلة",
      description: "رعاية صحية شاملة لجميع أفراد العائلة من جميع الأعمار",
      link: "/contact",
    },
    {
      icon: Syringe,
      title: "الإجراءات الطبية البسيطة",
      description: "إجراءات طبية آمنة مثل التطعيمات، الحقن، وتضميد الجروح",
      link: "/contact",
    },
    {
      icon: FlaskConical,
      title: "تنسيق الفحوصات المخبرية",
      description:
        "طلب وتفسير الفحوصات المخبرية والتحاليل الطبية الضرورية",
      link: "/contact",
    },
    {
      icon: ClipboardList,
      title: "إدارة الإحالات الطبية",
      description:
        "تنسيق الإحالات إلى الأطباء الاختصاصيين عند الحاجة ومتابعة الحالة",
      link: "/contact",
    },
    {
      icon: FileText,
      title: "الشهادات الطبية",
      description:
        "إصدار الشهادات الطبية للعمل، الدراسة، والأغراض الرسمية الأخرى",
      link: "/contact",
    },
    {
      icon: Baby,
      title: "الرعاية الصحية للأطفال",
      description: "فحوصات النمو، التطعيمات، ومتابعة صحة الأطفال",
      link: "/contact",
    },
    {
      icon: Pill,
      title: "إدارة الأدوية",
      description:
        "مراجعة الأدوية الحالية، تجنب التفاعلات الدوائية، وتحسين العلاج",
      link: "/contact",
    },
    {
      icon: HeartPulse,
      title: "تقييم المخاطر الصحية",
      description:
        "تقييم عوامل الخطر للأمراض وتقديم خطة وقائية شخصية",
      link: "/preventive-medicine",
    },
    {
      icon: Shield,
      title: "الاستشارات الصحية",
      description:
        "نصائح حول التغذية، الرياضة، وأسلوب الحياة الصحي",
      link: "/contact",
    },
  ];

  const featuredPathways = [
    {
      title: "متابعة الأمراض المزمنة",
      description:
        "برنامج متابعة شامل ومخصص للمرضى الذين يعانون من الأمراض المزمنة مثل السكري، ضغط الدم، الربو، وأمراض الغدة الدرقية",
      icon: Activity,
      link: "/chronic-disease",
      features: [
        "تقييم شامل للحالة الصحية",
        "خطة متابعة مخصصة",
        "تنسيق الفحوصات المخبرية",
        "إدارة الأدوية",
        "استشارات غذائية ونمط حياة",
        "متابعة دورية منتظمة",
      ],
    },
    {
      title: "الفحص الشامل والطب الوقائي",
      description:
        "برنامج فحوصات وقائية شاملة مصمم للكشف المبكر عن المشاكل الصحية والحفاظ على صحة ممتازة",
      icon: Heart,
      link: "/preventive-medicine",
      features: [
        "فحص صحي شامل",
        "فحوصات القلب والأوعية الدموية",
        "فحوصات السكري والكوليسترول",
        "فحص ضغط الدم",
        "استشارات وقائية",
        "خطة صحية شخصية",
      ],
    },
  ];

  const faqs = [
    {
      question: "كم تستغرق الاستشارة الطبية؟",
      answer:
        "عادةً تستغرق الاستشارة الأولى بين 30-45 دقيقة للسماح بفحص شامل وتقييم دقيق. الزيارات المتابعة قد تكون أقصر حسب الحالة.",
    },
    {
      question: "هل أحتاج إلى حجز موعد مسبق؟",
      answer:
        "نعم، نوصي بشدة بحجز موعد مسبق لضمان توفر الوقت المناسب لك ولتجنب الانتظار. يمكنك الحجز عبر الهاتف، واتساب، أو من خلال موقعنا.",
    },
    {
      question: "ما هي الخدمات المشملة في الفحص الشامل؟",
      answer:
        "الفحص الشامل يتضمن فحص علامات الحياة الأساسية، فحص القلب والرئتين، قياس ضغط الدم والسكر، وتقييم عام للحالة الصحية. قد نوصي بفحوصات مخبرية إضافية حسب العمر وعوامل الخطر.",
    },
    {
      question: "هل تقدمون خدمة التطعيمات؟",
      answer:
        "نعم، نقدم جميع التطعيمات الروتينية للأطفال والبالغين، بما في ذلك التطعيمات الموسمية والتطعيمات للمسافرين.",
    },
    {
      question: "كيف تتم متابعة الأمراض المزمنة؟",
      answer:
        "نقدم برنامج متابعة شامل يتضمن زيارات منتظمة، فحوصات دورية، تعديل الأدوية عند الحاجة، وتقديم النصائح حول نمط الحياة الصحي.",
    },
    {
      question: "هل يمكنني الحصول على نتائج الفحوصات عبر الهاتف؟",
      answer:
        "نعم، يمكننا مناقشة نتائج الفحوصات عبر الهاتف إذا كانت النتائج طبيعية. في حالة وجود نتائج تحتاج إلى مناقشة تفصيلية، قد نطلب زيارة شخصية.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">خدماتنا الطبية</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg mb-8">
            نقدم مجموعة شاملة من الخدمات الطبية لتلبية جميع احتياجاتك الصحية
            وصحة عائلتك
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            احجز موعد
          </Link>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">جميع الخدمات</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              خدمات طبية متكاملة بأعلى معايير الجودة والمهنية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pathways */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">البرامج المتخصصة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              برامج رعاية صحية شاملة ومخصصة لاحتياجاتك
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <pathway.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4">{pathway.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pathway.description}
                </p>
                <div className="space-y-3 mb-6">
                  {pathway.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to={pathway.link}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  اعرف المزيد
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">أسئلة شائعة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="جاهز لبدء رحلتك الصحية؟"
        description="احجز موعدك الآن واحصل على الرعاية الصحية التي تستحقها"
      />
    </div>
  );
}
