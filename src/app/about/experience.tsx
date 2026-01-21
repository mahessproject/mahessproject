"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import CardNav from "@/components/CardNav";
import EmailPopup from "@/components/EmailPopup";
import { MILESTONES_EN, MILESTONES_ID } from "./constants";
import Slide from "./components/Slide";
import Navigation from "./components/Navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const { language } = useLanguage();

  const milestones = useMemo(() => (language === "en" ? MILESTONES_EN : MILESTONES_ID), [language]);

  const handleNext = useCallback(() => {
    if (currentIndex < milestones.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, milestones.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleSelect = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToAboutMe = () => {
    const element = document.getElementById("about-me");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Data untuk CardNav
  const navItems = [
    {
      label: language === "en" ? "Work" : "Karya",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        {
          label: language === "en" ? "Portfolio" : "Portofolio",
          href: "/#portfolio",
          ariaLabel: "View portfolio",
        },
        {
          label: language === "en" ? "Skills" : "Keahlian",
          href: "/#skills",
          ariaLabel: "View skills",
        },
      ],
    },
    {
      label: language === "en" ? "About" : "Tentang",
      bgColor: "#f97316",
      textColor: "#ffffff",
      links: [
        {
          label: language === "en" ? "About Me" : "Tentang Saya",
          href: "#about-me",
          ariaLabel: "Learn about me",
          onClick: scrollToAboutMe,
        },
        {
          label: language === "en" ? "Experience" : "Pengalaman",
          href: "#experience",
          ariaLabel: "View experience",
          onClick: scrollToExperience,
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
    <div id="experience" className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <CardNav
          logo="/logo.svg"
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

      {/* Main Content */}
      <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide key={currentIndex} milestone={milestones[currentIndex]} direction={direction} />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <Navigation
        milestones={milestones}
        currentIndex={currentIndex}
        onSelect={handleSelect}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Email Popup */}
      <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
    </div>
  );
}
