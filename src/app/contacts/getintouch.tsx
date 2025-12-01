"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageCircle, Calendar, Copy, MapPin } from "lucide-react";
import CardNav from "@/components/CardNav";
import EmailPopup from "@/components/EmailPopup";
import ActionButton from "./components/ActionButton";
import SocialRow from "./components/SocialRow";
import Toast from "./components/Toast";
import { CONTACT_INFO } from "./constants";

export default function GetInTouch() {
  const [copied, setCopied] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

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
      label: "Work",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        {
          label: "Portfolio",
          href: "/#portfolio",
          ariaLabel: "View portfolio",
        },
        {
          label: "Skills",
          href: "/#skills",
          ariaLabel: "View skills",
        },
      ],
    },
    {
      label: "About",
      bgColor: "#f97316",
      textColor: "#ffffff",
      links: [
        { label: "About Me", href: "/about", ariaLabel: "Learn about me" },
        { label: "Experience", href: "/about#experience", ariaLabel: "View experience" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#3b82f6",
      textColor: "#ffffff",
      links: [{ label: "Get in Touch", href: "/contacts", ariaLabel: "Contact me" }],
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
          buttonText="Hire Me"
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
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide uppercase mb-2 font-['Montserrat']">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  Available for new projects
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-['Montserrat']">
                  Let's Start a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                    Conversation.
                  </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-['Montserrat']">
                  I'd love to hear from you. Whether you have a question, a project in mind, or just want to say hi, I'm
                  all ears. No forms, just direct access.
                </p>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid sm:grid-cols-1 gap-4">
                {/* Primary Actions Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <ActionButton
                    icon={Calendar}
                    title="Book a Meeting"
                    subtitle="Schedule via WhatsApp"
                    href={CONTACT_INFO.whatsappUrl}
                    variant="primary"
                  />
                  <ActionButton
                    icon={Mail}
                    title="Email Me"
                    subtitle={CONTACT_INFO.email}
                    href={`mailto:${CONTACT_INFO.email}`}
                    variant="secondary"
                  />
                </div>

                {/* Secondary Actions Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <ActionButton
                    icon={Phone}
                    title="Call Me"
                    subtitle={CONTACT_INFO.phone}
                    href={CONTACT_INFO.whatsappUrl}
                    variant="secondary"
                  />
                  <ActionButton
                    icon={MessageCircle}
                    title="WhatsApp"
                    subtitle="Chat directly with me"
                    href={CONTACT_INFO.whatsappUrl}
                    variant="secondary"
                  />
                </div>

                {/* Utility Row */}
                <div className="grid sm:grid-cols-1">
                  <ActionButton
                    icon={Copy}
                    title="Copy Email Address"
                    subtitle="Save to clipboard for later"
                    onClick={handleCopyEmail}
                    variant="secondary"
                    className="bg-zinc-900 border-dashed"
                  />
                </div>
              </div>

              {/* Footer / Socials */}
              <div id="social" className="pt-4 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-['Montserrat']">
                    <MapPin size={16} />
                    <span>Jakarta, Indonesia • Remote Friendly</span>
                  </div>
                  <SocialRow />
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="order-1 lg:order-2 relative hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Image */}
                <img
                  src="/aboutme/aboutme.jpg"
                  alt="Mahes Satya Ramadhan"
                  className="w-full h-[600px] object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80"
                />

                {/* Floating Quote Card */}
                <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <p className="text-lg font-light italic text-white mb-4 font-['Montserrat']">
                    "Communication is the bridge between confusion and clarity."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white font-['Montserrat']">
                      MS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-['Montserrat']">Mahes Satya</div>
                      <div className="text-xs text-zinc-400 font-['Montserrat']">Creative Designer & Developer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-zinc-800 rounded-3xl"></div>
            </div>
          </div>
        </main>

        <Toast message="Email copied to clipboard!" isVisible={copied} onClose={() => setCopied(false)} />

        {/* Email Popup */}
        <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
      </div>
    </div>
  );
}
