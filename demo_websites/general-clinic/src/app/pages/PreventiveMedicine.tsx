import { Link } from "react-router";
import {
  Heart,
  Activity,
  Shield,
  Droplet,
  HeartPulse,
  Stethoscope,
  FileText,
  Users,
  CheckCircle,
  AlertTriangle,
  Baby,
  User,
} from "lucide-react";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";

export function PreventiveMedicine() {
  const services = [
    {
      icon: Stethoscope,
      title: "الفحص الصحي الشامل",
      description:
        "فحص دقيق لجميع الأعضاء الحيوية وتقييم شامل للحالة الصحية العامة",
    },
    {
      icon: HeartPulse,
      title: "فحص القلب والأوعية الدموية",
      description:
        "قياس ضغط الدم، فحص القلب، وتقييم عوامل خطر أمراض القلب",
    },
    {
      icon: Droplet,
      title: "فحص السكر والكوليسترول",
      description:
        "فحوصات دورية لمستويات السكر والدهون في الدم للكشف المبكر",
    },
    {
      icon: Activity,
      title: "فحص ضغط الدم",
      description: "مراقبة منتظمة لضغط الدم للكشف عن أي تغيرات مبكرة",
    },
    {
      icon: FileText,
      title: "الشهادات الصحية",
      description: "إصدار شهادات طبية للعمل، الدراسة، والسفر",
    },
    {
      icon: Shield,
      title: "إرشادات التطعيمات",
      description: "نصائح حول التطعيمات اللازمة وفق العمر والاحتياجات",
    },
    {
      icon: Users,
      title: "استشارات نمط الحياة",
      description: "نصائح مخصصة حول التغذية، الرياضة، والعادات الصحية",
    },
    {
      icon: Heart,
      title: "تقييم المخاطر الصحية",
      description: "تحديد عوامل الخطر ووضع خطة وقائية شخصية",
    },
  ];

  const ageGuidance = [
    {
      icon: Baby,
      age: "الأطفال والمراهقون",
      recommendations: [
        "فحوصات النمو والتطور",
        "متابعة التطعيمات الأساسية",
        "فحص النظر والسمع",
        "تقييم التغذية والنمو",
      ],
    },
    {
      icon: User,
      age: "البالغون (18-50 سنة)",
      recommendations: [
        "فحص ضغط الدم والسكر والكوليسترول",
        "فحص مؤشر كتلة الجسم",
        "فحوصات الكشف المبكر حسب الجنس",
        "تقييم نمط الحياة والعادات الصحية",
      ],
    },
    {
      icon: Users,
      age: "كبار السن (50+ سنة)",
      recommendations: [
        "فحوصات شاملة أكثر تكراراً",
        "فحص كثافة العظام",
        "فحوصات القلب والأوعية الدموية",
        "تقييم الوظائف الإدراكية والحركية",
      ],
    },
  ];

  const journeySteps = [
    {
      number: 1,
      title: "الحجز والاستعداد",
      description:
        "احجز موعدك واستعد بالصيام (إن لزم) وإحضار أي تقارير طبية سابقة",
    },
    {
      number: 2,
      title: "الفحص الشامل",
      description:
        "فحص دقيق يشمل قياس العلامات الحيوية، فحص الأعضاء، وطلب الفحوصات المخبرية",
    },
    {
      number: 3,
      title: "مناقشة النتائج",
      description:
        "شرح مفصل للنتائج، تحديد عوامل الخطر، ووضع خطة صحية مخصصة",
    },
    {
      number: 4,
      title: "المتابعة والتنفيذ",
      description: "تطبيق التوصيات ومتابعة دورية لضمان تحسن صحتك",
    },
  ];

  const warningSign = [
    "ألم في الصدر أو صعوبة في التنفس",
    "تغيرات مفاجئة في الوزن دون سبب واضح",
    "تعب غير مبرر ومستمر",
    "تغيرات في عادات الأمعاء أو المثانة",
    "نزيف غير طبيعي",
    "تاريخ عائلي لأمراض مزمنة",
    "أعراض جديدة أو غير عادية",
  ];

  const faqs = [
    {
      question: "ما الفرق بين الفحص الشامل والاستشارة العادية؟",
      answer:
        "الفحص الشامل هو فحص وقائي شامل لجميع أجهزة الجسم حتى في غياب الأعراض، بهدف الكشف المبكر عن أي مشاكل. أما الاستشارة العادية فتركز على أعراض أو مشكلة صحية محددة.",
    },
    {
      question: "كم مرة يجب أن أجري فحصاً صحياً شاملاً؟",
      answer:
        "يعتمد ذلك على عمرك وحالتك الصحية وعوامل الخطر. بشكل عام، ننصح البالغين الأصحاء بفحص سنوي، بينما قد يحتاج من لديهم عوامل خطر لفحوصات أكثر تكراراً.",
    },
    {
      question: "هل أحتاج للصيام قبل الفحص الشامل؟",
      answer:
        "إذا كان الفحص يتضمن فحوصات للسكر والدهون، فنعم، يُفضل الصيام لمدة 8-12 ساعة قبل الفحص. سنعلمك بالتعليمات المحددة عند حجز موعدك.",
    },
    {
      question: "كم يستغرق الفحص الصحي الشامل؟",
      answer:
        "عادة يستغرق الفحص الأولي حوالي 45-60 دقيقة. قد تحتاج لزيارة أخرى لمناقشة نتائج الفحوصات المخبرية إذا تم طلبها.",
    },
    {
      question: "هل الفحص الوقائي مناسب للأطفال؟",
      answer:
        "نعم! الفحوصات الوقائية مهمة جداً للأطفال لمتابعة النمو والتطور والتأكد من أخذ جميع التطعيمات اللازمة.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm">الوقاية خير من العلاج</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">
              الطب الوقائي والفحوصات الشاملة
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              استثمر في صحتك اليوم لمستقبل أفضل. فحوصات شاملة للكشف المبكر عن
              المشاكل الصحية والحفاظ على صحة ممتازة
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              احجز فحصك الشامل
            </Link>
          </div>
        </div>
      </section>

      {/* Importance of Prevention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
              <h2 className="text-2xl mb-4 text-center">
                لماذا الطب الوقائي مهم؟
              </h2>
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                الطب الوقائي يساعدك على:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="mb-1">الكشف المبكر</h4>
                    <p className="text-sm text-muted-foreground">
                      اكتشاف الأمراض في مراحلها المبكرة حين يكون العلاج أسهل
                      وأكثر فعالية
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="mb-1">منع المضاعفات</h4>
                    <p className="text-sm text-muted-foreground">
                      تجنب تطور المشاكل الصحية البسيطة إلى أمراض خطيرة
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="mb-1">تحسين نوعية الحياة</h4>
                    <p className="text-sm text-muted-foreground">
                      الحفاظ على صحة جيدة ونشاط يومي أفضل
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="mb-1">توفير التكاليف</h4>
                    <p className="text-sm text-muted-foreground">
                      الوقاية أقل تكلفة بكثير من علاج الأمراض المتقدمة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">الخدمات الوقائية</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              مجموعة شاملة من الفحوصات والخدمات الوقائية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Guidance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              إرشادات حسب المرحلة العمرية
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              توصيات الفحوصات تختلف حسب العمر والاحتياجات
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGuidance.map((group, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <group.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-center mb-4">{group.age}</h3>
                <ul className="space-y-3">
                  {group.recommendations.map((rec, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            ملاحظة: هذه إرشادات عامة. سيتم تحديد الفحوصات المناسبة لك بناءً على
            تقييم شخصي لحالتك.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              رحلة الفحص الشامل
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ماذا تتوقع عند زيارتك للفحص الوقائي
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.number}
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Medical Attention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h2 className="text-2xl mb-3">
                    متى يجب استشارة الطبيب؟
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    لا تنتظر الفحص الدوري إذا كنت تعاني من أي من الأعراض
                    التالية:
                  </p>
                  <ul className="space-y-2">
                    {warningSign.map((sign, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    تنبيه: في حالات الطوارئ (ألم صدر حاد، صعوبة تنفس شديدة،
                    نزيف غزير)، اتصل بالطوارئ فوراً.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">أسئلة شائعة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعاً حول الفحوصات الوقائية
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="استثمر في صحتك اليوم"
        description="احجز فحصك الصحي الشامل الآن واطمئن على صحتك وصحة عائلتك"
      />
    </div>
  );
}
