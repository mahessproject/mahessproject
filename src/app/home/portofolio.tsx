"use client";

import React, { useState } from "react";
import SpotlightCard from "@/components/SpotlightCard";

// Portfolio items dengan 6 kategori skill
const portfolioItems = [
  {
    image: "https://picsum.photos/seed/portfolio1/800/600",
    title: "UI/UX Design",
    description: "User Interface & Experience Design",
    link: "https://drive.google.com/drive/folders/1-pmwx6EVQITdTscvDyZzPC7xJKQD8eca?hl=id",
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
    title: "Desain Grafis",
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

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div id="portfolio" className="w-full bg-black text-white py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat'] mb-4">Portfolio</h2>
        <p className="text-lg md:text-xl text-gray-400 font-['Montserrat']">Explore my creative works and projects</p>
        <p className="text-sm md:text-base text-gray-500 mt-2">Click to view project details</p>
      </div>

      {/* Carousel for Mobile, Tablet, and Desktop */}
      <div className="block xl:hidden px-4">
        <div className="relative max-w-md mx-auto">
          {/* Carousel Container */}
          <div
            className="relative overflow-visible"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="min-w-full px-2">
                  <SpotlightCard className="overflow-hidden p-6" spotlightColor="rgba(249, 115, 22, 0.25)">
                    {/* Content */}
                    <div className="flex flex-col items-start">
                      <h3 className="text-xl font-bold font-['Montserrat'] text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 font-['Montserrat'] mb-4">{item.description}</p>
                      <button
                        onClick={() => handleOpenLink(item.link)}
                        className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold font-['Montserrat'] px-6 py-3 rounded-lg transition-colors duration-300"
                      >
                        View Project
                      </button>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid View only for Extra Large screens */}
      <div className="hidden xl:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <SpotlightCard key={index} className="cursor-pointer p-6" spotlightColor="rgba(249, 115, 22, 0.25)">
                {/* Content */}
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold font-['Montserrat'] text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-['Montserrat'] mb-4">{item.description}</p>
                  <button
                    onClick={() => handleOpenLink(item.link)}
                    className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold font-['Montserrat'] px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    View Project
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
