"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Layout, Cpu, Gauge, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: any;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  relatedProject: string;
  gradient: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "frontend-dev",
    icon: Layout,
    titleAr: "تطوير واجهات المستخدم والمنصات الحديثة",
    titleEn: "Modern Web & Enterprise Front-End",
    descAr:
      "تحويل التصاميم إلى واجهات مستخدم متجاوبة وفائقة السرعة باستخدام Next.js وReact مع دعم كامل للغات (i18n) والوضع الليلي.",
    descEn:
      "Translating complex designs into pixel-perfect, responsive web apps using Next.js & React with full i18n and theme support.",
    deliverablesAr: [
      "أنظمة مكونات قابلة لإعادة الاستخدام",
      "تجربة مستخدم تفاعلية وسلسة",
      "بنية كود نظيفة وعالية الجودة",
    ],
    deliverablesEn: [
      "Reusable component systems",
      "Fluid interactive motion",
      "Clean, maintainable codebase",
    ],
    relatedProject: "LearNova & Wishly",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "state-architecture",
    icon: Cpu,
    titleAr: "معمارية الحالة وهندسة النظم المعقدة",
    titleEn: "Scalable Architecture & State Logic",
    descAr:
      "بناء منطق الأعمال المعقد داخل الواجهات باستخدام Redux Toolkit وZustand وتطبيق أنماط التصميم لضمان استقرار التطبيق عند التوسع.",
    descEn:
      "Architecting resilient client-side business logic using Redux Toolkit & Zustand with production-grade design patterns.",
    deliverablesAr: [
      "إدارة حالة مركزية وقابلة للتتبع",
      "تكامل فائق مع واجهات الـ API",
      "فصل دقيق للمسؤوليات (Clean Architecture)",
    ],
    deliverablesEn: [
      "Predictable state management",
      "Robust API integration flows",
      "Strict separation of concerns",
    ],
    relatedProject: "Wishly Store Platform",
    gradient: "from-purple-600 to-indigo-500",
  },
  {
    id: "performance-motion",
    icon: Gauge,
    titleAr: "تحسين الأداء والحركات التفاعلية الفاخرة",
    titleEn: "Web Performance & Creative Motion",
    descAr:
      "تسريع تحميل الصفحات وتجهيزها لمحركات البحث (SEO/SSR/ISR) وتضمين حركات دقيقة بواسطة Framer Motion تزيد من تفاعل العملاء.",
    descEn:
      "Boosting Core Web Vitals, optimizing rendering cycles, and implementing purposeful animations using Framer Motion.",
    deliverablesAr: [
      "تحسين مؤشرات الـ Core Web Vitals",
      "تقنيات ريندر متطورة (SSG/ISR)",
      "موشن احترافي دون استهلاك موارد الجهاز",
    ],
    deliverablesEn: [
      "High Core Web Vitals score",
      "Advanced rendering (SSG/ISR)",
      "Smooth 60FPS UI interactions",
    ],
    relatedProject: "Portfolio & LearNova",
    gradient: "from-emerald-600 to-teal-500",
  },
];

export default function Services() {
  const t = useTranslations("Services");
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative w-full py-32 px-4 flex flex-col items-center  dark:bg-[#030014] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-gray-900 dark:text-white"
          >
            {t("title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">
              {t("highlight")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                      {t("Contract & Freelance")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {isArabic ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {isArabic ? service.descAr : service.descEn}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {(isArabic
                      ? service.deliverablesAr
                      : service.deliverablesEn
                    ).map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800/80 flex flex-col gap-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
                    <span>{t("caseStudy")}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {service.relatedProject}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-bold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
                  >
                    <span>{t("cta")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
