"use client";

import React, { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CardNav from "@/components/CardNav";
import EmailPopup from "@/components/EmailPopup";
import { MILESTONES } from "./constants";
import Slide from "./components/Slide";
import Navigation from "./components/Navigation";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  const handleNext = useCallback(() => {
    if (currentIndex < MILESTONES.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

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
    [currentIndex]
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
      label: "Work",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        {
          label: "Portfolio",
          href: "/#portfolio",
          ariaLabel: "View portfolio",
        },
        {
          label: "Skills",
          href: "/#skills",
          ariaLabel: "View skills",
        },
      ],
    },
    {
      label: "About",
      bgColor: "#f97316",
      textColor: "#ffffff",
      links: [
        { label: "About Me", href: "#about-me", ariaLabel: "Learn about me", onClick: scrollToAboutMe },
        { label: "Experience", href: "#experience", ariaLabel: "View experience", onClick: scrollToExperience },
      ],
    },
    {
      label: "Contact",
      bgColor: "#3b82f6",
      textColor: "#ffffff",
      links: [{ label: "Get in Touch", href: "/contacts", ariaLabel: "Contact me" }],
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
          buttonText="Hire Me"
          onButtonClick={() => {
            setIsEmailPopupOpen(true);
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide key={currentIndex} milestone={MILESTONES[currentIndex]} direction={direction} />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <Navigation
        milestones={MILESTONES}
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
