"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react"; // Assuming lucide-react is installed as mostly used in nextjs projects, or I can use an SVG

export default function FloatingLanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const constraintsRef = useRef(null);

  return (
    <>
      {/* Invisible constraint container covering the whole viewport */}
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[9998]" />

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-4 md:bottom-12 md:right-12 z-[9999] cursor-grab active:cursor-grabbing pointer-events-auto"
      >
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg text-white hover:bg-white/20 transition-all group"
          aria-label="Switch Language"
        >
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
            {/* Simple Text Icon */}
            <span className="text-xs font-bold">{language === "en" ? "EN" : "ID"}</span>
          </div>
          <span className="text-sm font-medium hidden md:block group-hover:block transition-all duration-300">
            {language === "en" ? "English" : "Indonesia"}
          </span>
        </button>
      </motion.div>
    </>
  );
}
