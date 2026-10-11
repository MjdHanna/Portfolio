"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Briefcase,
  Code2,
  Sparkles,
  Terminal,
  CheckCircle2,
} from "lucide-react";

interface SkillMetric {
  name: string;
  level: number;
}

const technicalSkills: SkillMetric[] = [
  { name: "React.js & Next.js (App Router)", level: 95 },
  { name: "TypeScript & Modern JavaScript", level: 92 },
  { name: "State Management (Redux Toolkit & Zustand)", level: 90 },
  { name: "Tailwind CSS & Responsive Architecture", level: 94 },
  { name: "Framer Motion & Interactive UI", level: 88 },
  { name: "Software Design Patterns & Clean Code", level: 86 },
];

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="relative w-full py-28 px-4 flex flex-col items-center dark:bg-[#030014] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/80 backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl dark: text-blue-600 dark:text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Software Engineering Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                {t("bio1")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {t("bio2")}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800/80 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  {t("experience")}
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("focalx")}
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("phoentiech")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/80 backdrop-blur-md shadow-sm flex flex-col gap-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("skillsTitle")}
                </h3>
              </div>
              <span className="text-xs font-semibold text-gray-400">
                0 — 100%
              </span>
            </div>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600/70" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
