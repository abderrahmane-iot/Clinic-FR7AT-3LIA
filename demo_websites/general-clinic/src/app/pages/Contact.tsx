import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    contactMethod: "phone",
    serviceCategory: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        contactMethod: "phone",
        serviceCategory: "",
        preferredDate: "",
        preferredTime: "",
        notes: "",
        consent: false,
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const whatsappNumber = "213XXXXXXXXX";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">احجز موعدك</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            نحن هنا لخدمتك. اختر الطريقة الأنسب لك للتواصل معنا وحجز موعدك
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div>
              <h2 className="text-2xl mb-6">نموذج الحجز</h2>
              {isSubmitted ? (
                <div className="bg-secondary/10 border border-secondary rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl mb-2">تم استلام طلبك بنجاح!</h3>
                  <p className="text-muted-foreground">
                    سنتواصل معك خلال 24 ساعة لتأكيد الموعد
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block mb-2">
                      الاسم الكامل <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      رقم الهاتف <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+213 XXX XXX XXX"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Contact Method */}
                  <div>
                    <label htmlFor="contactMethod" className="block mb-2">
                      طريقة التواصل المفضلة{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="phone">اتصال هاتفي</option>
                      <option value="whatsapp">واتساب</option>
                      <option value="sms">رسالة نصية</option>
                    </select>
                  </div>

                  {/* Service Category */}
                  <div>
                    <label htmlFor="serviceCategory" className="block mb-2">
                      نوع الخدمة <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      <option value="general">استشارة طبية عامة</option>
                      <option value="chronic">متابعة أمراض مزمنة</option>
                      <option value="preventive">فحص وقائي شامل</option>
                      <option value="family">طب العائلة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block mb-2">
                        التاريخ المفضل
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block mb-2">
                        الوقت المفضل
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">اختر الوقت</option>
                        <option value="morning">صباحاً (9-12)</option>
                        <option value="afternoon">ظهراً (12-3)</option>
                        <option value="evening">مساءً (3-5)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="block mb-2">
                      ملاحظات إضافية (اختياري)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="أي معلومات إضافية تود مشاركتها..."
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-muted-foreground"
                    >
                      أوافق على{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        سياسة الخصوصية
                      </a>{" "}
                      وأسمح بالتواصل معي لتأكيد الموعد{" "}
                      <span className="text-destructive">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    إرسال طلب الحجز
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    سنرد على طلبك خلال 24 ساعة
                  </p>
                </form>
              )}
            </div>

            {/* Quick Contact Options */}
            <div>
              <h2 className="text-2xl mb-6">طرق التواصل السريعة</h2>
              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-secondary/10 border border-secondary/30 rounded-lg hover:bg-secondary/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">واتساب</h3>
                    <p className="text-sm text-muted-foreground">
                      تواصل معنا مباشرة عبر واتساب
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+213XXXXXXXXX"
                  className="flex items-center gap-4 p-5 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">اتصال هاتفي</h3>
                    <p className="text-sm text-muted-foreground">
                      +213 XXX XXX XXX
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 p-5 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">البريد الإلكتروني</h3>
                    <p className="text-sm text-muted-foreground">
                      contact@example.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Clinic Hours */}
              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3>ساعات العمل</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>السبت - الخميس</span>
                    <span>9:00 ص - 5:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-4">سياسات العيادة</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      يُرجى الحضور قبل 10 دقائق من موعدك
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      للإلغاء أو إعادة الجدولة، يُرجى الإعلام قبل 24 ساعة
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      نحافظ على خصوصية جميع المعلومات الطبية
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
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

            {/* Address Details */}
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
                    المدينة، الولاية، الجزائر
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

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-5">
                <h4 className="mb-2">معلومات الوصول</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  توفر العيادة مواقف سيارات قريبة ويمكن الوصول إليها بسهولة عبر
                  وسائل النقل العامة
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                احصل على الاتجاهات
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
