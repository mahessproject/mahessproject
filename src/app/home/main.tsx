"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CardNav from "@/components/CardNav";
import LogoLoop from "@/components/LogoLoop";
import SkillSlider from "./slider";
import EmailPopup from "@/components/EmailPopup";
import { useLanguage } from "@/context/LanguageContext";

export default function Main() {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const { language } = useLanguage();

  // Function untuk smooth scroll ke section tertentu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Data untuk LogoLoop (11 logo)
  const logos = [
    { src: "/lr.svg", alt: "Company 3" },
    { src: "/ai.svg", alt: "Company 4" },
    { src: "/canva.svg", alt: "Company 5" },
    { src: "/figma.svg", alt: "Company 6" },
    { src: "/capcut.svg", alt: "Company 7" },
    { src: "/tsx.svg", alt: "Company 8" },
  ];

  // Data untuk CardNav
  const navItems = [
    {
      label: language === "en" ? "Work" : "Karya",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        {
          label: language === "en" ? "Portfolio" : "Portofolio",
          href: "#portfolio",
          ariaLabel: "View portfolio",
          onClick: () => scrollToSection("portfolio"),
        },
        {
          label: language === "en" ? "Skills" : "Keahlian",
          href: "#skills",
          ariaLabel: "View skills",
          onClick: () => scrollToSection("skills"),
        },
      ],
    },
    {
      label: language === "en" ? "About" : "Tentang",
      bgColor: "#f97316",
      textColor: "#ffffff",
      links: [
        { label: language === "en" ? "About Me" : "Tentang Saya", href: "/about", ariaLabel: "Learn about me" },
        {
          label: language === "en" ? "Experience" : "Pengalaman",
          href: "/about#experience",
          ariaLabel: "View experience",
        },
      ],
    },
    {
      label: language === "en" ? "Contact" : "Kontak",
      bgColor: "#3b82f6",
      textColor: "#ffffff",
      links: [
        { label: language === "en" ? "Get in Touch" : "Hubungi Kami", href: "/contacts", ariaLabel: "Contact me" },
      ],
    },
  ];

  return (
    <div className="w-full h-screen relative bg-white overflow-hidden">
      {/* Background Video */}
      <video className="w-full h-full object-cover absolute inset-0 z-0" autoPlay muted loop playsInline preload="auto">
        <source src="/home.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay untuk membuat text lebih readable */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <CardNav
          logo="/logo.svg" // Ganti dengan path logo Anda
          logoAlt="Mahes Logo"
          items={navItems}
          baseColor="rgba(255, 255, 255, 0.1)"
          menuColor="#ffffff"
          buttonBgColor="#f97316"
          buttonTextColor="#ffffff"
          buttonText={language === "en" ? "Hire Me" : "Rekrut Saya"}
          onButtonClick={() => {
            setIsEmailPopupOpen(true);
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-4 md:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] mb-4"
          >
            {language === "en" ? "Hello There!" : "Halo Semuanya!"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] mb-6"
          >
            {language === "en" ? "I'm Mahes Satya Ramadhan," : "Saya Mahes Satya Ramadhan,"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-white text-lg md:text-xl lg:text-2xl font-medium font-['Montserrat'] leading-relaxed max-w-3xl"
          >
            {language === "en"
              ? "I'm a versatile creative focused on Photography and Videography. I also specialize in UI Design and Graphic Arts, adaptable to bring any visual vision to life."
              : "Saya seorang kreatif serba bisa yang fokus pada Fotografi dan Videografi. Saya juga berspesialisasi dalam Desain UI dan Seni Grafis, siap mewujudkan berbagai visi visual."}
          </motion.div>
        </motion.div>
      </div>

      {/* Logo Loop - Partners/Clients */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mb-4 px-4 md:px-8 lg:px-16 xl:px-24"></div>
        <LogoLoop
          logos={logos}
          speed={60}
          direction="left"
          logoHeight={32}
          gap={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="rgba(0, 0, 0, 0.3)"
          scaleOnHover={true}
          ariaLabel="Partner and client logos"
          className="opacity-80 hover:opacity-100 transition-opacity duration-300 w-full"
        />
      </div>

      {/* Email Popup */}
      <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
    </div>
  );
}
