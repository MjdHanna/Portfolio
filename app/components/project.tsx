"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  const projectsData = [
    {
      id: "wishly",
      link: "https://wishly-store-v1.netlify.app/",
      image: "/wishly.jpg",
      techStack: ["React", "Redux", "Tailwind", "Framer Motion", "i18n"],
    },
    {
      id: "learnova",
      link: "https://learnovaeducation.netlify.app/",
      image: "/learnova.jpg",
      techStack: ["React", "Redux", "Tailwind", "Quiz Logic"],
    },
    {
      id: "todo",
      link: "https://todos-li.netlify.app/",
      image: "/todo.jpg",
      techStack: ["React", "Tailwind CSS", "State Management"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <main className="relative min-h-screen py-24 px-4 lg:px-8 overflow-hidden dark:bg-[#030014] transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white"
          >
            {t("title")} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">
              {t("highlight")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={t(`${project.id}.title`)}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="flex flex-col flex-1 p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(`${project.id}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {t(`${project.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-bold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
                  >
                    <span>{t("visitSite")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
