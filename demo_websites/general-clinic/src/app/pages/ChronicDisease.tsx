import { Link } from "react-router";
import {
  Activity,
  Heart,
  Droplet,
  Wind,
  Pill,
  Calendar,
  ClipboardList,
  FileText,
  CheckCircle,
  AlertCircle,
  Stethoscope,
} from "lucide-react";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";

export function ChronicDisease() {
  const includedServices = [
    {
      icon: Stethoscope,
      title: "التقييم الأولي الشامل",
      description:
        "فحص دقيق للحالة الصحية وتقييم شامل للمرض المزمن وتأثيره على حياتك",
    },
    {
      icon: Calendar,
      title: "خطة متابعة مخصصة",
      description:
        "برنامج متابعة منتظم مصمم خصيصاً لحالتك مع جدول زيارات واضح",
    },
    {
      icon: FileText,
      title: "تنسيق الفحوصات المخبرية",
      description:
        "طلب ومتابعة جميع الفحوصات اللازمة وتفسير النتائج بوضوح",
    },
    {
      icon: Pill,
      title: "إدارة الأدوية",
      description:
        "مراجعة دورية للأدوية، تعديل الجرعات، وتجنب التفاعلات الدوائية",
    },
    {
      icon: ClipboardList,
      title: "إرشادات نمط الحياة",
      description:
        "نصائح مخصصة حول التغذية، الرياضة، والعادات الصحية المناسبة لحالتك",
    },
    {
      icon: Activity,
      title: "إحالة للاختصاصيين",
      description:
        "تنسيق الإحالات إلى الأطباء الاختصاصيين عند الحاجة مع متابعة مستمرة",
    },
  ];

  const conditions = [
    {
      icon: Droplet,
      title: "السكري (النوع 1 والنوع 2)",
      description:
        "متابعة مستويات السكر، تعديل الأدوية، ومنع المضاعفات",
    },
    {
      icon: Heart,
      title: "ضغط الدم (ارتفاع أو انخفاض)",
      description:
        "مراقبة دقيقة لضغط الدم وتعديل العلاج للوصول للمستوى المثالي",
    },
    {
      icon: Wind,
      title: "الأمراض التنفسية المزمنة",
      description: "متابعة الربو، الانسداد الرئوي، والأمراض التنفسية الأخرى",
    },
    {
      icon: Activity,
      title: "أمراض الغدة الدرقية",
      description: "متابعة وظائف الغدة الدرقية وتعديل جرعات الأدوية",
    },
    {
      icon: Heart,
      title: "ارتفاع الكوليسترول",
      description:
        "متابعة مستويات الدهون في الدم وتقديم نصائح غذائية مناسبة",
    },
    {
      icon: Stethoscope,
      title: "آلام المفاصل المزمنة",
      description:
        "إدارة الألم المزمن وتقديم نصائح للحفاظ على الحركة والنشاط",
    },
  ];

  const preparation = [
    "أحضر جميع التقارير الطبية السابقة",
    "قائمة بجميع الأدوية الحالية (بما في ذلك الجرعات)",
    "نتائج أحدث الفحوصات المخبرية",
    "سجل لقياسات السكر أو الضغط المنزلية (إن وجدت)",
    "قائمة بأي أعراض جديدة أو تغييرات في الحالة",
    "أسئلة أو مخاوف تريد مناقشتها",
  ];

  const faqs = [
    {
      question: "كم مرة أحتاج لزيارة الطبيب للمتابعة؟",
      answer:
        "يعتمد ذلك على نوع المرض ومدى استقرار حالتك. بشكل عام، قد تكون الزيارات شهرية في البداية، ثم كل 3-6 أشهر عندما تستقر الحالة. سنضع خطة متابعة مخصصة لك.",
    },
    {
      question: "هل أحتاج لفحوصات مخبرية دورية؟",
      answer:
        "نعم، الفحوصات المخبرية الدورية مهمة لمتابعة تطور المرض وفعالية العلاج. سنحدد الفحوصات اللازمة وتوقيتها حسب حالتك.",
    },
    {
      question: "ماذا لو احتجت لتعديل جرعة الدواء؟",
      answer:
        "يمكنك التواصل معنا في أي وقت إذا شعرت بأعراض غير عادية أو احتجت لتعديل الدواء. لا تعدل الجرعة بنفسك دون استشارة الطبيب.",
    },
    {
      question: "هل يمكنني التواصل بين الزيارات إذا كانت لدي أسئلة؟",
      answer:
        "بالطبع! يمكنك التواصل معنا عبر الهاتف أو واتساب. نحن هنا لدعمك ومتابعتك بشكل مستمر.",
    },
    {
      question: "كيف يمكنني منع مضاعفات المرض المزمن؟",
      answer:
        "الالتزام بخطة العلاج، المتابعة المنتظمة، نمط حياة صحي، والكشف المبكر عن أي مشاكل هي مفاتيح منع المضاعفات. سنعمل معاً لتحقيق ذلك.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-sm">برنامج متابعة شامل</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">
              متابعة الأمراض المزمنة
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              برنامج رعاية صحية متكامل للمرضى الذين يعانون من أمراض مزمنة، مع
              متابعة دقيقة وخطة علاجية مخصصة
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              احجز موعد للمتابعة
            </Link>
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h2 className="text-2xl mb-3">متى تحتاج للمتابعة الدورية؟</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    إذا كنت مصاباً بمرض مزمن، فإن المتابعة المنتظمة ضرورية
                    للحفاظ على صحتك ومنع المضاعفات. ننصح بالمتابعة في الحالات
                    التالية:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>تم تشخيصك حديثاً بمرض مزمن</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>تحتاج لضبط جرعات الأدوية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>ظهور أعراض جديدة أو تغير في الحالة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>حان موعد الفحوصات الدورية</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    ملاحظة: هذه معلومات عامة ولا تغني عن الاستشارة الطبية
                    المتخصصة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">ما الذي يشمله البرنامج؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              رعاية شاملة ومتكاملة لإدارة حالتك الصحية بأفضل طريقة ممكنة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {includedServices.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-secondary" />
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

      {/* Conditions Managed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              الأمراض المزمنة التي نتابعها
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              متخصصون في متابعة مجموعة واسعة من الأمراض المزمنة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <condition.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">{condition.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {condition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              لا ترى حالتك في القائمة؟{" "}
              <Link to="/contact" className="text-primary hover:underline">
                تواصل معنا
              </Link>{" "}
              لمعرفة كيف يمكننا مساعدتك
            </p>
          </div>
        </div>
      </section>

      {/* Patient Preparation */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">
                كيف تستعد لموعد المتابعة؟
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                للحصول على أقصى استفادة من موعدك، يُرجى إحضار ما يلي:
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4">
                {preparation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>ملاحظة مهمة:</strong> نحن ملتزمون بالحفاظ على سرية
                  جميع معلوماتك الطبية. جميع المعلومات التي تشاركها معنا محمية
                  بموجب قوانين الخصوصية الطبية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">أسئلة شائعة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعاً حول برنامج المتابعة
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Doctor Reassurance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              رعاية مستمرة تركز على احتياجاتك
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              تلتزم د. فرحات علية بتقديم رعاية طبية شاملة ومستمرة لجميع مرضاها.
              مع خبرة واسعة في متابعة الأمراض المزمنة، ستحصل على رعاية شخصية
              ومتابعة دقيقة لضمان أفضل النتائج الصحية لك.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              اعرف المزيد عن الطبيب
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ابدأ برنامج المتابعة اليوم"
        description="احجز موعدك الأول واحصل على خطة متابعة مخصصة لإدارة حالتك الصحية بأفضل طريقة"
      />
    </div>
  );
}
