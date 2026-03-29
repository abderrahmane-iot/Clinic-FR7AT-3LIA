import { Shield, Lock, Eye, Database, Mail } from "lucide-react";

export function Privacy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">سياسة الخصوصية</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            آخر تحديث: 28 مارس 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-rtl">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                تلتزم عيادة د. فرحات علية بحماية خصوصيتك وسرية معلوماتك الطبية.
                توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية
                والطبية.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">المعلومات التي نجمعها</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    معلومات شخصية
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>• الاسم الكامل وتاريخ الميلاد</li>
                    <li>• معلومات الاتصال (الهاتف، البريد الإلكتروني، العنوان)</li>
                    <li>• رقم بطاقة الهوية أو وثائق التعريف الرسمية</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    معلومات طبية
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>• التاريخ الطبي والأعراض الحالية</li>
                    <li>• نتائج الفحوصات والتحاليل المخبرية</li>
                    <li>• الأدوية الموصوفة والحساسية الدوائية</li>
                    <li>• معلومات التأمين الصحي (إن وجدت)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">كيف نستخدم معلوماتك</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>نستخدم معلوماتك الشخصية والطبية للأغراض التالية:</p>
                <ul className="space-y-2 mr-6">
                  <li>• تقديم الرعاية الطبية والاستشارات الصحية</li>
                  <li>• تحديد مواعيد الزيارات والمتابعة</li>
                  <li>• طلب ومتابعة الفحوصات المخبرية</li>
                  <li>• التواصل معك بخصوص حالتك الصحية</li>
                  <li>• إصدار الوصفات الطبية والشهادات الصحية</li>
                  <li>• تحسين جودة الخدمات الطبية المقدمة</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">حماية معلوماتك</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>نتخذ تدابير أمنية صارمة لحماية معلوماتك:</p>
                <ul className="space-y-2 mr-6">
                  <li>
                    • تخزين السجلات الطبية في أنظمة آمنة محمية بكلمات مرور قوية
                  </li>
                  <li>• الوصول المحدود للمعلومات فقط للأطباء والموظفين المخولين</li>
                  <li>• عدم مشاركة معلوماتك مع أي طرف ثالث دون موافقتك الصريحة</li>
                  <li>• الالتزام بقوانين حماية البيانات والخصوصية الطبية</li>
                  <li>• التخلص الآمن من المستندات الطبية عند انتهاء الحاجة إليها</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">مشاركة المعلومات</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>قد نشارك معلوماتك فقط في الحالات التالية:</p>
                <ul className="space-y-2 mr-6">
                  <li>• عند إحالتك إلى طبيب اختصاصي آخر للحصول على رعاية متخصصة</li>
                  <li>• مع المختبرات الطبية لإجراء الفحوصات اللازمة</li>
                  <li>• مع شركات التأمين الصحي لمعالجة المطالبات (بموافقتك)</li>
                  <li>• عند الحاجة القانونية أو بأمر من السلطات المختصة</li>
                  <li>• في حالات الطوارئ الطبية لإنقاذ حياتك</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">حقوقك</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>لديك الحق في:</p>
                <ul className="space-y-2 mr-6">
                  <li>• الوصول إلى سجلاتك الطبية وطلب نسخة منها</li>
                  <li>• تصحيح أي معلومات خاطئة في سجلاتك</li>
                  <li>• طلب حذف بياناتك (مع مراعاة الالتزامات القانونية)</li>
                  <li>• سحب موافقتك على معالجة بياناتك في أي وقت</li>
                  <li>• تقديم شكوى إذا كنت تعتقد أننا انتهكنا خصوصيتك</li>
                </ul>
              </div>
            </div>

            {/* Cookies and Website */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">ملفات تعريف الارتباط والموقع</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  قد يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط (Cookies)
                  لتحسين تجربتك. هذه الملفات لا تحتوي على معلومات طبية ويمكنك
                  تعطيلها من إعدادات المتصفح الخاص بك.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">التعديلات على السياسة</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي
                  تغييرات على هذه الصفحة مع تحديث تاريخ آخر تعديل. ننصحك بمراجعة
                  هذه السياسة بشكل دوري.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">تواصل معنا</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  إذا كانت لديك أي أسئلة أو مخاوف بشأن خصوصيتك أو كيفية استخدام
                  معلوماتك، يرجى التواصل معنا:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>الهاتف:</strong> +213 XXX XXX XXX
                  </p>
                  <p>
                    <strong>البريد الإلكتروني:</strong> contact@example.com
                  </p>
                  <p>
                    <strong>العنوان:</strong> العنوان الكامل، المدينة، الجزائر
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
