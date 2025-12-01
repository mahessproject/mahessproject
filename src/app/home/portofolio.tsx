"use client";

import React, { useState } from "react";
import SpotlightCard from "@/components/SpotlightCard";

// Portfolio items dengan 5 kategori skill
const portfolioItems = [
  {
    image: "https://picsum.photos/seed/portfolio1/800/600",
    title: "UI/UX Design",
    description: "User Interface & Experience Design",
    link: "https://drive.google.com/drive/folders/DUMMY_LINK_UIUX",
  },
  {
    image: "https://picsum.photos/seed/portfolio2/800/600",
    title: "Video Editing",
    description: "Post Production & Color Grading",
    link: "https://drive.google.com/drive/folders/DUMMY_LINK_VIDEOEDITING",
  },
  {
    image: "https://picsum.photos/seed/portfolio3/800/600",
    title: "Videography",
    description: "Cinematography & Production",
    link: "https://drive.google.com/drive/folders/DUMMY_LINK_VIDEOGRAPHY",
  },
  {
    image: "https://picsum.photos/seed/portfolio4/800/600",
    title: "Photography",
    description: "Portrait & Event Coverage",
    link: "https://drive.google.com/drive/folders/DUMMY_LINK_PHOTOGRAPHY",
  },
  {
    image: "https://picsum.photos/seed/portfolio5/800/600",
    title: "Desain Grafis",
    description: "Brand Identity & Visual Design",
    link: "https://drive.google.com/drive/folders/DUMMY_LINK_DESAINGRAFIS",
  },
];

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
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
          <div className="relative overflow-visible">
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
