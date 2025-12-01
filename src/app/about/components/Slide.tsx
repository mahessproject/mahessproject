import React from "react";
import { motion } from "framer-motion";
import { SlideProps } from "../types";

const Slide: React.FC<SlideProps> = ({ milestone }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      {/* Text Content Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-start z-10 md:pr-12 order-2 md:order-1 mt-8 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span
          className="text-accent text-xl md:text-2xl font-bold tracking-widest mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {milestone.year}
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {milestone.title}
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {milestone.description}
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative order-1 md:order-2"
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3 translate-x-4 translate-y-4" />
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900">
          {/* Image loader placeholder */}
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          <img
            src={milestone.image}
            alt={milestone.title}
            className="w-full h-full object-cover relative z-10"
            loading="eager"
          />

          {/* Overlay Gradient for better text readability if image is dark (optional but good for aesthetics) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default Slide;
