"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Calendar, Copy, MapPin } from "lucide-react";
import CardNav from "@/components/CardNav";
import EmailPopup from "@/components/EmailPopup";
import ActionButton from "./components/ActionButton";
import SocialRow from "./components/SocialRow";
import Toast from "./components/Toast";
import { CONTACT_INFO } from "./constants";
import { useLanguage } from "@/context/LanguageContext";

export default function GetInTouch() {
  const [copied, setCopied] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const { language } = useLanguage();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    {
      label: language === "en" ? "Work" : "Karya",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        {
          label: language === "en" ? "Portfolio" : "Portofolio",
          href: "/#portfolio",
          ariaLabel: "View portfolio",
        },
        {
          label: language === "en" ? "Skills" : "Keahlian",
          href: "/#skills",
          ariaLabel: "View skills",
        },
      ],
    },
    {
      label: language === "en" ? "About" : "Tentang",
      bgColor: "#f97316",
      textColor: "#ffffff",
      links: [
        { label: language === "en" ? "About Me" : "Tentang Saya", href: "/about", ariaLabel: "Learn about me" },
        {
          label: language === "en" ? "Experience" : "Pengalaman",
          href: "/about#experience",
          ariaLabel: "View experience",
        },
      ],
    },
    {
      label: language === "en" ? "Contact" : "Kontak",
      bgColor: "#3b82f6",
      textColor: "#ffffff",
      links: [
        { label: language === "en" ? "Get in Touch" : "Hubungi Kami", href: "/contacts", ariaLabel: "Contact me" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <CardNav
          logo="/logo.svg"
          logoAlt="Mahes Logo"
          items={navItems}
          baseColor="rgba(255, 255, 255, 0.1)"
          menuColor="#ffffff"
          buttonBgColor="#f97316"
          buttonTextColor="#ffffff"
          buttonText={language === "en" ? "Hire Me" : "Rekrut Saya"}
          onButtonClick={() => {
            setIsEmailPopupOpen(true);
          }}
        />
      </div>

      <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 pt-24">
        {/* Background decoration */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        <main className="container max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Content & Actions */}
            <div className="order-2 lg:order-1 space-y-10">
              {/* Header Section */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide uppercase mb-2 font-['Montserrat']"
                >
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  {language === "en" ? "Available for new projects" : "Tersedia untuk proyek baru"}
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-['Montserrat']"
                >
                  {language === "en" ? "Let's Start a " : "Mari Mulai "}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                    {language === "en" ? "Conversation." : "Percakapan."}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-zinc-400 max-w-lg leading-relaxed font-['Montserrat']"
                >
                  {language === "en"
                    ? "I'd love to hear from you. Whether you have a question, a project in mind, or just want to say hi, I'm all ears. No forms, just direct access."
                    : "Saya ingin mendengar kabar dari Anda. Apakah Anda memiliki pertanyaan, rencana proyek, atau hanya ingin menyapa, saya siap mendengarkan. Tanpa formulir, akses langsung."}
                </motion.p>
              </div>

              {/* Action Buttons Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid sm:grid-cols-1 gap-4"
              >
                {/* Primary Actions Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <ActionButton
                    icon={Calendar}
                    title={language === "en" ? "Book a Meeting" : "Jadwalkan Pertemuan"}
                    subtitle={language === "en" ? "Schedule via WhatsApp" : "Jadwalkan via WhatsApp"}
                    href={CONTACT_INFO.whatsappUrl}
                    variant="primary"
                  />
                  <ActionButton
                    icon={Mail}
                    title={language === "en" ? "Email Me" : "Email Saya"}
                    subtitle={CONTACT_INFO.email}
                    href={`mailto:${CONTACT_INFO.email}`}
                    variant="secondary"
                  />
                </div>

                {/* Secondary Actions Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <ActionButton
                    icon={Phone}
                    title={language === "en" ? "Call Me" : "Hubungi Saya"}
                    subtitle={CONTACT_INFO.phone}
                    href={CONTACT_INFO.whatsappUrl}
                    variant="secondary"
                  />
                  <ActionButton
                    icon={MessageCircle}
                    title="WhatsApp"
                    subtitle={language === "en" ? "Chat directly with me" : "Chat langsung dengan saya"}
                    href={CONTACT_INFO.whatsappUrl}
                    variant="secondary"
                  />
                </div>

                {/* Utility Row */}
                <div className="grid sm:grid-cols-1">
                  <ActionButton
                    icon={Copy}
                    title={language === "en" ? "Copy Email Address" : "Salin Alamat Email"}
                    subtitle={language === "en" ? "Save to clipboard for later" : "Simpan ke clipboard untuk nanti"}
                    onClick={handleCopyEmail}
                    variant="secondary"
                    className="bg-zinc-900 border-dashed"
                  />
                </div>
              </motion.div>

              {/* Footer / Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="social"
                className="pt-4 border-t border-zinc-800"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-['Montserrat']">
                    <MapPin size={16} />
                    <span>
                      {language === "en" ? "Jakarta, Indonesia • Remote Friendly" : "Jakarta, Indonesia • Bisa Remote"}
                    </span>
                  </div>
                  <SocialRow />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 relative hidden md:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Image */}
                <img
                  src="/aboutme/aboutme.svg"
                  alt="Mahes Satya Ramadhan"
                  className="w-full h-[600px] object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80"
                />

                {/* Floating Quote Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
                >
                  <p className="text-lg font-light italic text-white mb-4 font-['Montserrat']">
                    {language === "en"
                      ? '"Communication is the bridge between confusion and clarity."'
                      : '"Komunikasi adalah jembatan antara kebingungan dan kejelasan."'}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 relative shrink-0">
                      <img
                        src="/aboutme/dot.svg"
                        alt="Logo"
                        className="w-14 h-14 max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-['Montserrat']">Mahes Satya</div>
                      <div className="text-xs text-zinc-400 font-['Montserrat']">
                        {language === "en" ? "Creative Designer & Developer" : "Desainer Kreatif & Pengembang"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-zinc-800 rounded-3xl"></div>
            </motion.div>
          </div>
        </main>

        <Toast
          message={language === "en" ? "Email copied to clipboard!" : "Email berhasil disalin!"}
          isVisible={copied}
          onClose={() => setCopied(false)}
        />

        {/* Email Popup */}
        <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
      </div>
    </div>
  );
}
