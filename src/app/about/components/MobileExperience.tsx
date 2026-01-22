import React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Milestone } from "../types";

interface MobileExperienceProps {
  milestones: Milestone[];
  currentIndex: number;
  onNext: (visualDirection?: number) => void;
  onPrev: () => void;
  direction: number;
}

export const MobileExperience: React.FC<MobileExperienceProps> = ({
  milestones,
  currentIndex,
  onNext,
  onPrev,
  direction,
}) => {
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    // Both Swipe LEFT and Swipe RIGHT trigger Next content
    if (info.offset.x < -threshold) {
      onNext(1); // Exit Left
    } else if (info.offset.x > threshold) {
      onNext(2); // Exit Right
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-10 pb-20 relative">
      {/* Cards Stack */}
      <div className="relative w-[280px] h-[350px] mb-12 perspective-1000">
        <AnimatePresence initial={false} custom={direction}>
          {milestones.map((milestone, index) => {
            // Logic to render only visible cards (current and a few next ones)
            // But we also need to allow the "previous" card to exist for a moment effectively to animate out
            if (index < currentIndex) return null;
            if (index > currentIndex + 2) return null;

            const isCurrent = index === currentIndex;
            const offset = index - currentIndex; // 0, 1, 2

            // Determine animations based on position in stack
            return (
              <motion.div
                key={milestone.id}
                custom={direction}
                layout // Helps with smooth reordering
                initial={
                  direction === 3 // Shuffle In (Reset)
                    ? {
                        y: -800, // Fly in from top (like being dealt/inserted)
                        x: 0,
                        scale: 1.1,
                        opacity: 0,
                        rotate: (Math.random() - 0.5) * 10, // Random initial rotation
                      }
                    : direction > 0
                      ? { opacity: 0, scale: 0.9, y: -(offset + 1) * 20 }
                      : { x: -300, opacity: 0, rotate: -20, scale: 1 }
                }
                animate={{
                  x: 0,
                  y: -offset * 10, // Tighter stack
                  scale: 1 - offset * 0.04, // Less scale reduction
                  zIndex: 50 - offset,
                  opacity: 1 - offset * 0.1,
                  rotate: isCurrent ? 0 : (index % 2 === 0 ? 2 : -1) + (index % 3 === 0 ? 1 : -1), // More random rotation
                }}
                exit={
                  direction > 0
                    ? {
                        x: direction === 2 ? 300 : -300,
                        opacity: 0,
                        rotate: direction === 2 ? 20 : -20,
                        transition: { duration: 0.4 },
                      }
                    : { opacity: 0, scale: 0.9, y: -(offset + 1) * 20, transition: { duration: 0.4 } }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  opacity: { duration: 0.2 },
                  delay: direction === 3 ? offset * 0.15 : 0, // Staggered delay for shuffle effect (Top first)
                }}
                drag={isCurrent ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1} // Full elasticity for "tidak pasif" feel (follows finger completely)
                onDragEnd={isCurrent ? handleDragEnd : undefined}
                whileDrag={{ scale: 1.05, rotate: 0, cursor: "grabbing" }}
                className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 origin-bottom"
              >
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Year Badge removed as requested */}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Text Container */}
      <div className="w-full px-6 min-h-[140px] flex flex-col items-center justify-start text-center z-20">
        <AnimatePresence mode="wait" custom={direction}>
          {milestones[currentIndex] && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{milestones[currentIndex].title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{milestones[currentIndex].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
