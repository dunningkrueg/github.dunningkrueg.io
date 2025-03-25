import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmailJSInitializer from "./components/EmailJSInitializer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "dunningkrueg - Portfolio",
  description: "Personal portfolio website of dunningkrueg, Software Engineer and MIT Master's Graduate",
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased">
        <EmailJSInitializer />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
