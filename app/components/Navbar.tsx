"use client";

import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Sun,
  Moon,
  Globe,
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  Cpu,
} from "lucide-react";
import logo from "../../public/logo.png";
export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("Navbar");

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "ar" ? "en" : "ar";
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
    const newPath = `/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    router.push(newPath);
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const navLinks = [
    { name: t("home"), id: "hero", icon: <Home className="w-4 h-4" /> },
    { name: t("about"), id: "about", icon: <User className="w-4 h-4" /> },
    { name: t("services"), id: "services", icon: <Cpu className="w-4 h-4" /> },
    {
      name: t("projects"),
      id: "projects",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: t("contact"), id: "contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto w-full h-20"
      >
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 group -my-4"
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
            <Image
              src={logo}
              alt="Majd Hanna Logo"
              fill
              priority
              sizes="(max-width: 768px) 96px, 112px"
              className="object-contain drop-shadow-sm transition-all duration-300"
            />
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="w-auto h-12 transition-transform duration-300 hover:scale-110"
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-medium text-sm bg-gray-100 dark:bg-gray-900 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-200  dark:hover:bg-gray-800 transition-all cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span>{currentLocale === "ar" ? "EN" : "عربي"}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-full transition-all hover:ring-2 ring-gray-300 dark:ring-gray-700 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.div>

      {/* قائمة الموبايل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-950/95 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-3 font-medium text-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors w-full text-start cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
