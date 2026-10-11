import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import "../globals.css";
import type { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Majd Hanna | Front-End Developer",
  description: "Portfolio of Majd Hanna, Front-End Developer",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
