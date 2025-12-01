"use client";

import React, { useState } from "react";
import CardNav from "@/components/CardNav";
import LogoLoop from "@/components/LogoLoop";
import SkillSlider from "./slider";
import EmailPopup from "@/components/EmailPopup";

export default function Main() {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

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
    { src: "/ae.svg", alt: "Company 1" },
    { src: "/pr.svg", alt: "Company 2" },
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
      label: "Work",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        {
          label: "Portfolio",
          href: "#portfolio",
          ariaLabel: "View portfolio",
          onClick: () => scrollToSection("portfolio"),
        },
        {
          label: "Skills",
          href: "#skills",
          ariaLabel: "View skills",
          onClick: () => scrollToSection("skills"),
        },
      ],
    },
    {
      label: "About",
      bgColor: "#f97316",
      textColor: "#ffffff",
      links: [
        { label: "About Me", href: "/about", ariaLabel: "Learn about me" },
        { label: "Experience", href: "/experience", ariaLabel: "View experience" },
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
    <div className="w-full h-screen relative bg-white overflow-hidden">
      {/* Background Video */}
      <video className="w-full h-full object-cover absolute inset-0 z-0" autoPlay muted loop playsInline>
        <source src="/home.mp4" type="video/mp4" />
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
          buttonText="Hire Me"
          onButtonClick={() => {
            setIsEmailPopupOpen(true);
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] mb-4">
            Hello There!
          </div>
          <div className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] mb-6">
            I'm Mahes Satya Ramadhan,
          </div>
          <div className="text-white text-lg md:text-xl lg:text-2xl font-medium font-['Montserrat'] leading-relaxed max-w-3xl">
            I'm a creative designer with a passion for UI/UX, photography, and videography. I focus on crafting visuals
            that are both aesthetic and functional.
          </div>
        </div>
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
