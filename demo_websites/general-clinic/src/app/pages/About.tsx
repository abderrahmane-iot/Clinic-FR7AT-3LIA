import { Link } from "react-router";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Stethoscope,
  Activity,
  FileHeart,
  Baby,
  HeartPulse,
} from "lucide-react";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "التعليم والتدريب",
      items: [
        "دكتوراه في الطب من جامعة معتمدة",
        "تخصص في الطب العام والرعاية الصحية الشاملة",
        "تدريب متقدم في متابعة الأمراض المزمنة",
      ],
    },
    {
      icon: Award,
      title: "الشهادات والاعتمادات",
      items: [
        "شهادة البورد في الطب العام",
        "عضوية الجمعية الطبية الوطنية",
        "تدريب معتمد في الطب الوقائي",
      ],
    },
    {
      icon: Stethoscope,
      title: "الخبرة المهنية",
      items: [
        "أكثر من 15 عاماً في الممارسة الطبية",
        "خبرة واسعة في طب العائلة والرعاية الشاملة",
        "متابعة آلاف الحالات بنجاح",
      ],
    },
  ];

  const philosophy = [
    {
      icon: Heart,
      title: "التعاطف والاحترام",
      description:
        "نؤمن بأن كل مريض يستحق الاستماع والاحترام والرعاية الشخصية",
    },
    {
      icon: Shield,
      title: "الخصوصية والسرية",
      description:
        "نحافظ على سرية معلوماتك الطبية بأعلى معايير الأمان والمهنية",
    },
    {
      icon: CheckCircle,
      title: "الطب المبني على الأدلة",
      description: "نعتمد على أحدث الأبحاث والبروتوكولات الطبية المعتمدة",
    },
    {
      icon: Users,
      title: "النهج الشامل",
      description:
        "ننظر إلى صحتك بشكل شامل، مع الاهتمام بالجوانب الجسدية والنفسية",
    },
  ];

  const focusAreas = [
    {
      icon: Activity,
      title: "متابعة الأمراض المزمنة",
      description: "السكري، ضغط الدم، أمراض القلب",
    },
    {
      icon: FileHeart,
      title: "الطب الوقائي",
      description: "الفحوصات الدورية والكشف المبكر",
    },
    {
      icon: Users,
      title: "طب العائلة",
      description: "رعاية شاملة لجميع الأعمار",
    },
    {
      icon: HeartPulse,
      title: "الإجراءات الطبية البسيطة",
      description: "إجراءات آمنة في بيئة معقمة",
    },
    {
      icon: Baby,
      title: "الرعاية الأولية للأطفال",
      description: "فحوصات نمو ومتابعة صحية",
    },
    {
      icon: Stethoscope,
      title: "إدارة الإحالات",
      description: "تنسيق مع الاختصاصيين عند الحاجة",
    },
  ];

  const standards = [
    {
      title: "النظافة والتعقيم",
      description:
        "نتبع أعلى معايير التعقيم والنظافة لضمان سلامة جميع المرضى",
    },
    {
      title: "الخصوصية التامة",
      description: "نحترم خصوصيتك ونحافظ على سرية معلوماتك الطبية بالكامل",
    },
    {
      title: "الالتزام بالمواعيد",
      description: "نحترم وقتك ونسعى لتقديم الخدمة في الوقت المحدد",
    },
    {
      title: "المتابعة المستمرة",
      description: "نوفر متابعة دقيقة ومستمرة لحالتك الصحية",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl mb-4">د. فرحات علية</h1>
              <p className="text-xl text-secondary mb-6">
                أخصائي في الطب العام
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                طبيب متخصص في الطب العام مع خبرة واسعة في تقديم رعاية صحية
                شاملة تركز على احتياجات المريض والعائلة
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                احجز موعد
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDU2MDA3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="د. فرحات علية"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              المؤهلات والخبرات المهنية
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              مؤهلات طبية متميزة وخبرة عملية واسعة
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <credential.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-4">{credential.title}</h3>
                <ul className="space-y-3">
                  {credential.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">فلسفتنا في العلاج</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              مبادئ الرعاية الصحية التي نلتزم بها
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Focus Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">مجالات التخصص</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              الخدمات الطبية التي نتخصص فيها
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Standards */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">معايير العيادة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              التزامنا بتقديم أعلى مستوى من الخدمة
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="mb-2">{standard.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NTk4NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="عيادة د. فرحات علية"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <p className="text-center text-muted-foreground mt-6 leading-relaxed">
              عيادة حديثة مجهزة بأحدث المعدات الطبية لتقديم أفضل رعاية صحية
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ابدأ رحلة صحية أفضل اليوم"
        description="احجز موعدك الآن واحصل على استشارة طبية شاملة من طبيب ذو خبرة وكفاءة عالية"
      />
    </div>
  );
}
