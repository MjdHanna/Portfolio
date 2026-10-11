"use client";

import { useTranslations } from "next-intl";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Zap, Download } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import me from "./../../public/me.png";
import Projects from "../components/project";
import Contact from "../components/contact";
import About from "../components/about";
import Services from "../components/services";

export default function Home() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const floatX1 = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const floatY1 = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);
  const floatX2 = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const floatY2 = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-10 lg:px-20 overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="z-10 relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-12 lg:gap-8 mt-10 lg:mt-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium text-sm w-fit"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            {isArabic
              ? "متاح للعمل والمشاريع الجديدة"
              : "Available for new opportunities"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight flex flex-col"
          >
            <span className="text-gray-900 dark:text-white pb-2">
              {isArabic ? "مرحباً، أنا" : "Hello, I'm"}
            </span>
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="bg-[length:200%_auto] bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500-500 bg-clip-text text-transparent"
            >
              {isArabic ? "مجد حنا" : "Majd Hanna"}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-xl leading-relaxed mb-8"
          >
            {isArabic
              ? "مطور واجهات أمامية ومهندس برمجيات. أصنع تجارب رقمية خارقة للعادة بلمسة إبداعية وأداء استثنائي."
              : "Front-End Developer & Software Engineer. I build extraordinary digital experiences with a creative touch and exceptional performance."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 font-bold rounded-full bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:!bg-blue-600 hover:!text-white dark:hover:!bg-blue-600 dark:hover:!text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-blue-600/30"
            >
              <Code2 className="w-5 h-5" />
              <span>{isArabic ? "شاهد أعمالي" : "View My Projects"}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isArabic
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>

            <a
              href="/cv.pdf"
              download="Majd_Hanna_CV.pdf"
              className="group px-8 py-4 font-bold rounded-full bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:!bg-blue-600 hover:!text-white dark:hover:!bg-blue-600 dark:hover:!text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-blue-600/30"
            >
              <Download className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-white transition-colors" />
              <span>{isArabic ? "تحميل السيرة الذاتية" : "Download CV"}</span>
            </a>
          </motion.div>
        </div>

        <div
          className="flex-1 flex justify-center items-center relative w-full max-w-[400px] lg:max-w-none perspective-1000 mt-10 lg:mt-0"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[440px] md:w-[380px] md:h-[480px] flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 rounded-[3rem] blur-2xl -z-10"
            />

            <div className="relative w-full h-full rounded-[2.5rem] p-1.5 bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-indigo-500/40 shadow-2xl">
              <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-gradient-to-b from-blue-600/10 via-cyan-500/10 to-indigo-600/20 dark:from-blue-950/40 dark:via-gray-900/60 dark:to-indigo-950/40 backdrop-blur-xl border border-white/20 dark:border-white/10 flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent pointer-events-none" />

                <div className="relative w-full h-[95%]">
                  <Image
                    src={me}
                    alt="Majd Hanna - Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_15px_25px_rgba(37,99,235,0.25)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <About />
      <Services />

      <section id="projects" className="w-full scroll-mt-24">
        <Projects />
      </section>

      <section id="contact" className="w-full scroll-mt-24">
        <Contact />
      </section>
    </main>
  );
}
