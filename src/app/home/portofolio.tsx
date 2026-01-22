"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

// Portfolio items dengan 6 kategori skill
const portfolioItemsEn = [
  {
    image: "https://picsum.photos/seed/portfolio1/800/600",
    title: "UI/UX Design",
    description: "User Interface & Experience Design",
    link: "https://drive.google.com/drive/folders/1GNyGqtNWBwP87S9fJRnCXQXuKvdmO1le?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio2/800/600",
    title: "Video Editing",
    description: "Post Production & Color Grading",
    link: "https://drive.google.com/drive/folders/1uqO4sli0w4L37NbyosLdLURpJNuukc4A?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio3/800/600",
    title: "Videography",
    description: "Cinematography & Production",
    link: "https://drive.google.com/drive/folders/1uqO4sli0w4L37NbyosLdLURpJNuukc4A?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio4/800/600",
    title: "Photography",
    description: "Portrait & Event Coverage",
    link: "https://drive.google.com/drive/folders/1dwovS40a1ZvUQAevqnuzp1_Ghaa4uUbP?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio5/800/600",
    title: "Graphic Design",
    description: "Brand Identity & Visual Design",
    link: "https://drive.google.com/drive/folders/1U7w_MOHvlvXJp8k91-UeakF06244fLaD?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio6/800/600",
    title: "Certificates",
    description: "Professional Certifications & Achievements",
    link: "https://drive.google.com/drive/folders/1v0LbHQCWnhY1iNb2emslASKnkJr4iRO0?hl=id",
  },
];

const portfolioItemsId = [
  {
    image: "https://picsum.photos/seed/portfolio1/800/600",
    title: "Desain UI/UX",
    description: "Desain Antarmuka & Pengalaman Pengguna",
    link: "https://drive.google.com/drive/folders/1GNyGqtNWBwP87S9fJRnCXQXuKvdmO1le?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio2/800/600",
    title: "Pengeditan Video",
    description: "Pasca Produksi & Color Grading",
    link: "https://drive.google.com/drive/folders/1uqO4sli0w4L37NbyosLdLURpJNuukc4A?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio3/800/600",
    title: "Videografi",
    description: "Sinematografi & Produksi",
    link: "https://drive.google.com/drive/folders/1uqO4sli0w4L37NbyosLdLURpJNuukc4A?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio4/800/600",
    title: "Fotografi",
    description: "Potret & Liputan Acara",
    link: "https://drive.google.com/drive/folders/1dwovS40a1ZvUQAevqnuzp1_Ghaa4uUbP?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio5/800/600",
    title: "Desain Grafis",
    description: "Identitas Brand & Desain Visual",
    link: "https://drive.google.com/drive/folders/1U7w_MOHvlvXJp8k91-UeakF06244fLaD?hl=id",
  },
  {
    image: "https://picsum.photos/seed/portfolio6/800/600",
    title: "Sertifikat",
    description: "Sertifikasi Profesional & Pencapaian",
    link: "https://drive.google.com/drive/folders/1v0LbHQCWnhY1iNb2emslASKnkJr4iRO0?hl=id",
  },
];

export default function Portfolio() {
  const { language } = useLanguage();

  const portfolioItems = language === "en" ? portfolioItemsEn : portfolioItemsId;

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="portfolio" className="w-full bg-black text-white py-16 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat'] mb-4">
          {language === "en" ? "Portfolio" : "Portofolio"}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-['Montserrat']">
          {language === "en" ? "Explore my creative works and projects" : "Jelajahi karya kreatif dan proyek saya"}
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          {language === "en" ? "Click to view project details" : "Klik untuk melihat detail proyek"}
        </p>
      </motion.div>

      {/* Scrollable List for Mobile, Tablet, and Desktop (< XL) */}
      <div className="block xl:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 touch-pan-x scrollbar-hide">
          {portfolioItems.map((item, index) => (
            <div key={index} className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] snap-center">
              <SpotlightCard className="overflow-hidden p-6 h-full" spotlightColor="rgba(249, 115, 22, 0.25)">
                {/* Content */}
                <div className="flex flex-col items-start h-full justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-['Montserrat'] text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-['Montserrat'] mb-4">{item.description}</p>
                  </div>
                  <button
                    onClick={() => handleOpenLink(item.link)}
                    className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold font-['Montserrat'] px-6 py-3 rounded-lg transition-colors duration-300 w-full md:w-auto"
                  >
                    {language === "en" ? "View Project" : "Lihat Proyek"}
                  </button>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      {/* Grid View only for Extra Large screens */}
      <div className="hidden xl:block">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <SpotlightCard className="cursor-pointer p-6" spotlightColor="rgba(249, 115, 22, 0.25)">
                  {/* Content */}
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold font-['Montserrat'] text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-['Montserrat'] mb-4">{item.description}</p>
                    <button
                      onClick={() => handleOpenLink(item.link)}
                      className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold font-['Montserrat'] px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      {language === "en" ? "View Project" : "Lihat Proyek"}
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
