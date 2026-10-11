"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code2, Layers, Smartphone, Wrench } from "lucide-react";

// قمنا بتنظيم المهارات في مصفوفة ذكية لسهولة التعديل والعرض
const skillCategories = [
  {
    id: "frontend",
    title: "Front-End & Core Web",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    shadow: "group-hover:shadow-blue-500/20",
    border: "group-hover:border-blue-500/50",
    skills: [
      "Next.js",
      "React",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Redux",
      "Bootstrap",
      "i18n",
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Backend",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    shadow: "group-hover:shadow-purple-500/20",
    border: "group-hover:border-purple-500/50",
    skills: [
      "Flutter",
      "Dart",
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    id: "tools",
    title: "Architecture & Tools",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    shadow: "group-hover:shadow-orange-500/20",
    border: "group-hover:border-orange-500/50",
    skills: [
      "Design Patterns",
      "SSG & ISR",
      "Git/GitHub",
      "Postman",
      "Netlify",
      "Vite",
      "ESLint",
    ],
  },
];

export default function Skills() {
  const t = useTranslations("Skills");

  // إعدادات حركة الظهور المتتالي الناعمة (لا تستهلك أداء)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center dark:bg-[#030014] transition-colors duration-500 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* عنوان القسم */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* شبكة المهارات (Bento Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`group relative flex flex-col p-8 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${category.shadow} ${category.border}`}
            >
              {/* أيقونة القسم مع تدرج لوني */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <category.icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors z-10" />
              </div>

              {/* عنوان القسم */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              {/* رقاقات التقنيات (Chips) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-white/5 rounded-xl border border-transparent dark:border-white/5 transition-colors group-hover:border-gray-200 dark:group-hover:border-white/10 hover:!bg-blue-500 hover:!text-white dark:hover:!bg-blue-600 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
