import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { NavigationProps } from "../types";

// Lucide-react icons as SVG components
const ChevronLeft = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Navigation: React.FC<NavigationProps> = ({ milestones, currentIndex, onSelect, onNext, onPrev }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the timeline to keep the active dot in view
  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.children[currentIndex] as HTMLElement;
      if (activeElement) {
        const container = scrollRef.current;
        const scrollLeft = activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-40 flex items-center justify-between px-4 md:px-12">
      {/* Prev Button */}
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`p-3 rounded-full border border-gray-700 bg-black/50 backdrop-blur-sm text-white transition-all hover:bg-accent hover:border-accent hover:text-black disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex`}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Timeline Container */}
      <div className="flex-1 mx-4 md:mx-12 relative h-full flex items-center">
        {/* The connecting line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800 -translate-y-1/2 hidden md:block" />

        {/* Scrollable Container for Dots */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto flex items-center md:justify-between space-x-12 md:space-x-0 px-4 no-scrollbar h-full"
        >
          {milestones.map((milestone, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={milestone.id}
                onClick={() => onSelect(index)}
                className="group relative hidden md:flex flex-col items-center justify-center min-w-[60px] focus:outline-none"
              >
                {/* Dot Container */}
                <div
                  className={`relative z-10 w-4 h-4 rounded-full transition-all duration-300 ${
                    isActive ? "bg-accent scale-150 ring-4 ring-accent/20" : "bg-gray-600 group-hover:bg-gray-400"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-glow"
                      className="absolute inset-0 rounded-full bg-accent blur-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentIndex === milestones.length - 1}
        className={`p-3 rounded-full border border-gray-700 bg-black/50 backdrop-blur-sm text-white transition-all hover:bg-accent hover:border-accent hover:text-black disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex`}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Mobile Navigation Arrows (Overlay on sides instead of bottom bar to save space) */}
      <div className="md:hidden absolute inset-x-0 top-[-50vh] flex justify-between px-2 pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={currentIndex === 0}
          className="pointer-events-auto p-2 bg-black/20 backdrop-blur-sm rounded-full text-white/70 disabled:opacity-0"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={currentIndex === milestones.length - 1}
          className="pointer-events-auto p-2 bg-black/20 backdrop-blur-sm rounded-full text-white/70 disabled:opacity-0"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
