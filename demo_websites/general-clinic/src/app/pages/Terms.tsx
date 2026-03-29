import { FileText, AlertCircle, Shield, Clock } from "lucide-react";

export function Terms() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">الشروط والأحكام</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            آخر تحديث: 28 مارس 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Medical Disclaimer */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-8 mb-12">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h2 className="text-2xl mb-4">إخلاء المسؤولية الطبية</h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>مهم:</strong> المعلومات المقدمة على هذا الموقع هي
                      لأغراض تعليمية وإعلامية فقط ولا تشكل استشارة طبية مباشرة أو
                      تشخيصاً أو علاجاً.
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li>
                        • المحتوى لا يحل محل الاستشارة الطبية المباشرة مع طبيب
                        مؤهل
                      </li>
                      <li>• لا تتجاهل النصائح الطبية المهنية بسبب معلومات قرأتها هنا</li>
                      <li>
                        • في حالة الطوارئ الطبية، اتصل بخدمات الطوارئ فوراً
                      </li>
                      <li>
                        • النتائج الطبية تختلف من شخص لآخر وليست مضمونة
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">شروط الخدمة</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    1. قبول الشروط
                  </h3>
                  <p>
                    باستخدام موقعنا الإلكتروني أو خدماتنا الطبية، فإنك توافق على
                    الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء
                    من هذه الشروط، يرجى عدم استخدام خدماتنا.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    2. الخدمات الطبية
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>• نقدم خدمات طبية عامة ورعاية صحية شاملة</li>
                    <li>• جميع الخدمات يقدم من قبل طبيب مرخص ومؤهل</li>
                    <li>• قد تختلف الخدمات المتاحة بناءً على حالتك الصحية</li>
                    <li>• نحتفظ بالحق في رفض الخدمة في حالات معينة</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">3. المواعيد</h3>
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p>
                        <strong>الحجز:</strong> يجب حجز المواعيد مسبقاً عبر
                        الهاتف أو واتساب أو الموقع
                      </p>
                      <p>
                        <strong>الحضور:</strong> يُرجى الحضور قبل 10 دقائق من
                        موعدك المحدد
                      </p>
                      <p>
                        <strong>الإلغاء:</strong> للإلغاء أو إعادة الجدولة، يُرجى
                        الإعلام قبل 24 ساعة على الأقل
                      </p>
                      <p>
                        <strong>التأخير:</strong> التأخير لأكثر من 15 دقيقة قد
                        يتطلب إعادة جدولة الموعد
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    4. الرسوم والدفع
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>• الرسوم قابلة للتغيير وستُبلغ بها مسبقاً</li>
                    <li>• الدفع مستحق وقت تقديم الخدمة</li>
                    <li>• نقبل النقد والطرق الأخرى المتفق عليها</li>
                    <li>
                      • قد تختلف التكاليف بناءً على التأمين الصحي (إن وجد)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    5. مسؤوليات المريض
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>• تقديم معلومات طبية دقيقة وكاملة</li>
                    <li>• إعلام الطبيب بأي تغييرات في حالتك الصحية</li>
                    <li>• الالتزام بالعلاج والتعليمات الموصى بها</li>
                    <li>• إحضار جميع المستندات الطبية ذات الصلة</li>
                    <li>• احترام موظفي العيادة والمرضى الآخرين</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    6. الخصوصية والسرية
                  </h3>
                  <p>
                    نحافظ على سرية جميع معلوماتك الطبية وفقاً لقوانين الخصوصية
                    الطبية. يُرجى الاطلاع على{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      سياسة الخصوصية
                    </a>{" "}
                    لمزيد من التفاصيل.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    7. حدود المسؤولية
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>
                      • نسعى لتقديم أفضل رعاية ممكنة لكن لا نضمن نتائج محددة
                    </li>
                    <li>• الاستجابة للعلاج تختلف من مريض لآخر</li>
                    <li>
                      • لسنا مسؤولين عن المضاعفات الناتجة عن عدم الالتزام
                      بالتعليمات
                    </li>
                    <li>• لسنا مسؤولين عن قرارات طبية اتُخذت من قبل أطراف أخرى</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    8. حالات الطوارئ
                  </h3>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-5">
                    <p className="mb-2">
                      <strong>مهم جداً:</strong> عيادتنا ليست مجهزة لحالات
                      الطوارئ الحادة.
                    </p>
                    <p>
                      في حالة الطوارئ الطبية (ألم صدر حاد، صعوبة تنفس شديدة،
                      نزيف غزير، فقدان وعي)، اتصل بخدمات الطوارئ فوراً أو توجه
                      إلى أقرب مستشفى.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    9. استخدام الموقع الإلكتروني
                  </h3>
                  <ul className="space-y-2 mr-6">
                    <li>• يجب استخدام الموقع للأغراض المشروعة فقط</li>
                    <li>• لا تحاول الوصول غير المصرح به إلى أي جزء من الموقع</li>
                    <li>• لا تنشر محتوى غير قانوني أو مسيء</li>
                    <li>• نحتفظ بالحق في تعليق أو إنهاء وصولك للموقع</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    10. الملكية الفكرية
                  </h3>
                  <p>
                    جميع المحتويات على هذا الموقع (النصوص، الصور، الشعارات)
                    محمية بحقوق الملكية الفكرية. لا يجوز نسخها أو توزيعها دون
                    إذن كتابي.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    11. التعديلات
                  </h3>
                  <p>
                    نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. ستُنشر
                    التعديلات على هذه الصفحة مع تحديث تاريخ آخر تعديل.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-foreground mb-2">
                    12. القانون الواجب التطبيق
                  </h3>
                  <p>
                    تخضع هذه الشروط والأحكام لقوانين الجمهورية الجزائرية
                    الديمقراطية الشعبية. أي نزاع يخضع لاختصاص المحاكم الجزائرية.
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">حقوق المريض</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>كمريض، لديك الحق في:</p>
                <ul className="space-y-2 mr-6">
                  <li>• الحصول على رعاية طبية محترمة ومهنية</li>
                  <li>• المشاركة في قرارات العلاج الخاصة بك</li>
                  <li>• الحصول على معلومات واضحة عن حالتك وعلاجك</li>
                  <li>• الخصوصية والسرية التامة لمعلوماتك الطبية</li>
                  <li>• رفض العلاج أو طلب رأي طبي ثانٍ</li>
                  <li>• تقديم شكوى إذا لم تكن راضياً عن الخدمة</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl mb-4">أسئلة أو استفسارات؟</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  إذا كانت لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل
                  معنا:
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
