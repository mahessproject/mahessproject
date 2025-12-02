"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div id="about-me" className="w-full bg-orange-500 text-white py-16 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-8 text-center"
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 flex-shrink-0"
          >
            <div className="relative w-64 h-80 md:w-full md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/aboutme/aboutme.jpg"
                alt="Mahes Satya Ramadhan Lubis"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-lg md:text-xl font-['Montserrat'] leading-relaxed text-center md:text-left">
              I'm <span className="font-semibold">Mahes Satya Ramadhan Lubis</span>, known as{" "}
              <span className="font-semibold">Mahes</span>, a passionate student from{" "}
              <span className="font-medium">SMK Negeri 40 Jakarta</span> majoring in{" "}
              <span className="font-medium">Software Engineering</span> (Rekayasa Perangkat Lunak). I possess strong
              skills and talent in developing <span className="font-medium">CMS-based websites</span> (Content
              Management System) and creating intuitive <span className="font-medium">UI/UX designs</span>. With a keen
              eye for detail and a passion for innovation, I strive to craft digital experiences that are both visually
              appealing and functionally robust, bridging the gap between creative design and technical implementation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
