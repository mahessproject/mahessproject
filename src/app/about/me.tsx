"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutMe() {
  const { t, language } = useLanguage();

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
          {t("about_me", "About Me", "Tentang Saya")}
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
                src="/aboutme/aboutme.svg"
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
            <p className="text-lg md:text-xl font-['Montserrat'] leading-relaxed text-left">
              {language === "en" ? (
                <>
                  I'm <span className="font-semibold">Mahes Satya Ramadhan Lubis</span>, also known as{" "}
                  <span className="font-semibold">Mahes</span>, a student from{" "}
                  <span className="font-medium">SMK Negeri 40 Jakarta</span>. While I have a background in software
                  engineering, my true passion lies in the <span className="font-medium">visual arts</span>. I aspire to
                  pursue a career in <span className="font-medium">Photography</span> and{" "}
                  <span className="font-medium">Videography</span>, capturing moments and telling stories through the
                  lens. Additionally, I am proficient in <span className="font-medium">UI Design</span> and{" "}
                  <span className="font-medium">Graphic Design</span>, creating engaging social media feeds, posters,
                  and digital interfaces. I consider myself a <span className="font-medium">universal creative</span>,
                  ready to apply my visual skills wherever they are needed to create impactful work.
                </>
              ) : (
                <>
                  Saya <span className="font-semibold">Mahes Satya Ramadhan Lubis</span>, atau biasa dipanggil{" "}
                  <span className="font-semibold">Mahes</span>, seorang siswa dari{" "}
                  <span className="font-medium">SMK Negeri 40 Jakarta</span>. Meskipun saya memiliki latar belakang di
                  rekayasa perangkat lunak, hasrat terbesar saya ada pada{" "}
                  <span className="font-medium">seni visual</span>. Saya bercita-cita untuk berkarir di bidang{" "}
                  <span className="font-medium">Fotografi</span> dan <span className="font-medium">Videografi</span>,
                  mengabadikan momen dan bercerita melalui lensa. Selain itu, saya juga mahir dalam{" "}
                  <span className="font-medium">Desain UI</span> dan <span className="font-medium">Desain Grafis</span>,
                  membuat konten media sosial, poster, dan antarmuka digital yang menarik. Saya menganggap diri saya
                  sebagai <span className="font-medium">kreator visual yang universal</span>, siap menerapkan
                  keterampilan visual saya di mana pun dibutuhkan untuk menghasilkan karya yang berdampak.
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
