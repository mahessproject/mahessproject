"use client";

import React, { useState } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import SpotlightCard from "@/components/SpotlightCard";

// Custom Icon for Mobile
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Arrow Icons for Navigation
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

interface Skill {
  id: string;
  title: string;
  color: string;
  items: {
    name: string;
    description: string;
  }[];
}

const skills: Skill[] = [
  {
    id: "uiux",
    title: "UI/UX",
    color: "bg-gray-800",
    items: [
      { name: "User Research", description: "Understanding user needs and behaviors" },
      { name: "Wireframing", description: "Creating structure and layout blueprints" },
      { name: "Prototyping", description: "Building interactive design mockups" },
      { name: "User Testing", description: "Validating design decisions with real users" },
    ],
  },
  {
    id: "graphic",
    title: "Desain Grafis",
    color: "bg-gray-800",
    items: [
      { name: "Brand Identity", description: "Creating cohesive visual brand systems" },
      { name: "Logo Design", description: "Crafting memorable brand marks" },
    ],
  },
  {
    id: "video",
    title: "Video Editing",
    color: "bg-gray-800",
    items: [
      { name: "Post Production", description: "Professional video editing and assembly" },
      { name: "Color Grading", description: "Enhancing visual mood and aesthetics" },
      { name: "Motion Graphics", description: "Adding animated elements and effects" },
    ],
  },
  {
    id: "videography",
    title: "Videography",
    color: "bg-gray-800",
    items: [
      { name: "Cinematography", description: "Professional video shooting techniques" },
      { name: "Lighting Setup", description: "Creating perfect lighting conditions" },
      { name: "Camera Operation", description: "Expert handling of video equipment" },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    color: "bg-gray-800",
    items: [
      { name: "Portrait Photography", description: "Capturing stunning personal portraits" },
      { name: "Event Photography", description: "Documenting special moments and occasions" },
      { name: "Photo Editing", description: "Professional post-processing and retouching" },
    ],
  },
];

export default function Skills() {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
    setIsPaused(true);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
    setIsPaused(true);
  };

  return (
    <div id="skills" className="w-full bg-black text-white py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat'] mb-4">
          <span className="text-orange-400">Creative Design</span>, Video Production, Photography, UI/UX,
          <br className="hidden md:block" />
          Digital Arts, Visual Communication.
        </h2>
      </div>

      {/* Desktop Auto-Play Stack */}
      <div
        className="hidden xl:block py-16 overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative max-w-6xl mx-auto px-4 h-96">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous skill"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Next skill"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
          {skills.map((skill, index) => {
            const isActive = index === currentIndex;
            const stackIndex = (index - currentIndex + skills.length) % skills.length;
            const isVisible = stackIndex < 3; // Show max 3 cards

            return (
              <div
                key={skill.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: `scale(${1 - stackIndex * 0.05}) translateY(${stackIndex * -20}px) translateZ(0)`,
                  zIndex: skills.length - stackIndex,
                }}
              >
                <SpotlightCard
                  className={`${skill.color} rounded-2xl p-12 text-white relative overflow-hidden h-full`}
                  spotlightColor="rgba(249, 115, 22, 0.25)"
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-4xl font-bold font-['Montserrat'] mb-8">{skill.title}</h3>
                    <div className="grid grid-cols-2 gap-8 flex-1">
                      {skill.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-3">
                          <h4 className="text-xl font-bold font-['Montserrat']">{item.name}</h4>
                          <p className="text-white/95 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="xl:hidden px-4 md:px-8 lg:px-16">
        <div className="space-y-3 md:space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.id} className="overflow-hidden">
              <SpotlightCard
                className={`w-full ${skill.color} rounded-2xl overflow-hidden`}
                spotlightColor="rgba(249, 115, 22, 0.25)"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`w-full px-6 py-3 md:px-8 md:py-4 text-white font-medium font-['Montserrat'] text-base md:text-lg lg:text-xl flex items-center justify-between transition-colors duration-300`}
                >
                  <span>{skill.title}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${
                      openDropdowns.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content - Inside same container */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdowns.includes(index) ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`px-6 pb-4 md:px-8 md:pb-6 lg:px-8 lg:pb-8 pt-2 space-y-3 md:space-y-4`}>
                    {skill.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="space-y-1 md:space-y-2 border-l-2 md:border-l-3 border-white/30 pl-3 md:pl-4 lg:pl-6"
                      >
                        <h4 className="text-base md:text-lg lg:text-xl font-semibold font-['Montserrat'] text-white">
                          {item.name}
                        </h4>
                        <p className="text-white/85 text-sm md:text-base lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
