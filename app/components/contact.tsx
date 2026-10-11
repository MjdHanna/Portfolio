"use client";

import { useTranslations } from "next-intl";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { MouseEvent } from "react";
import { IconType } from "react-icons";

function ContactCard({
  href,
  icon: Icon,
  title,
  handle,
  delay,
  brandColor,
}: {
  href: string;
  icon: IconType;
  title: string;
  handle: string;
  delay: number;
  brandColor: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
      className="relative group h-full"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div
          onMouseMove={handleMouseMove}
          className="relative h-full bg-white/40 dark:bg-black/40 backdrop-blur-xl backdrop-saturate-150 border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]"
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.1),
                  transparent 80%
                )
              `,
            }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full gap-6">
            <div className="flex items-start justify-between">
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-lg ${brandColor}`}
              >
                {Icon && <Icon className="w-7 h-7" />}
              </div>
              <ArrowUpRight className="w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {handle}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  const socialLinks = [
    {
      title: "WhatsApp",
      handle: "+963 98 155 8640",
      href: "https://wa.me/963981558640",
      icon: FaWhatsapp,
      brandColor: "group-hover:text-green-500",
    },
    {
      title: "LinkedIn",
      handle: "Majd Hanna",
      href: "https://www.linkedin.com/in/mjd-hanna-16151b28a/",
      icon: FaLinkedin,
      brandColor: "group-hover:text-blue-500",
    },
    {
      title: "GitHub",
      handle: "Mjd Hanna",
      href: "https://github.com/MjdHanna",
      icon: FaGithub,
      brandColor: "group-hover:text-gray-900 dark:group-hover:text-white",
    },
    {
      title: "Facebook",
      handle: "Mjd Hanna",
      href: "https://www.facebook.com/share/1DzbVkuhGN/",
      icon: FaFacebook,
      brandColor: "group-hover:text-blue-600",
    },
    {
      title: "Instagram",
      handle: "Mjd Hanna",
      href: "https://www.instagram.com/mjd.hanna.92?mdxt=MWcxbmVuNm53NDU4bw==",
      icon: FaInstagram,
      brandColor: "group-hover:text-pink-500",
    },
  ];

  return (
    <main className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden dark:bg-[#030014] transition-colors duration-500">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
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
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-20"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mjdhna67@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="group relative flex items-center justify-center gap-3 px-10 py-5 font-bold rounded-full bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:!bg-blue-600 hover:!text-white dark:hover:!bg-blue-600 dark:hover:!text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-blue-600/30">
              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              <span>{t("email")}</span>
            </div>
          </a>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
          {socialLinks.map((link, index) => (
            <div
              key={link.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ContactCard
                title={link.title}
                handle={link.handle}
                href={link.href}
                icon={link.icon}
                brandColor={link.brandColor}
                delay={0.3 + index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
