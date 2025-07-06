import type { Metadata } from "next";
import { /* Geist, Geist_Mono, */ Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ContactForm from "@/components/main/ContactForm";
const inter = Inter({subsets: ["latin"]});
/* 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "WEB Portofolio",
  description: "Ini website porotfolio saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#271203] overflow-y-scroll overflow-x-hidden`}
        >
        <StarCanvas />
        <Navbar />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
