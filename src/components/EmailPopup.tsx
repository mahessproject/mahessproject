"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Set timestamp
    const now = new Date();
    const timeString = now.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const timeField = document.getElementById("time_hidden") as HTMLInputElement;
    if (timeField) timeField.value = timeString;

    setIsSending(true);

    emailjs.sendForm("service_ggz0wnb", "template_p0m9zfa", form.current, "6yu3me9CoQhcHqAqd").then(
      (result) => {
        console.log("Email berhasil dikirim:", result.text);
        toast.success("Email berhasil dikirim!");
        form.current?.reset();
        setIsSending(false);
        onClose();
      },
      (error) => {
        console.error("Gagal mengirim email:", error.text);
        toast.error("Gagal mengirim email.");
        setIsSending(false);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Hire Me</h2>
          <p className="text-gray-600">Fill out the form below and I'll get back to you soon.</p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Hidden fields untuk EmailJS template */}
          <input type="hidden" name="title" value="New Hire Request" />
          <input type="hidden" name="user_email" value="" id="user_email_hidden" />
          <input type="hidden" name="time" value="" id="time_hidden" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="Your name"
              onChange={(e) => {
                const name = e.target.value.trim();
                const initials = name
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase())
                  .slice(0, 2)
                  .join("");
                const hiddenField = document.getElementById("initials_hidden") as HTMLInputElement;
                if (hiddenField) hiddenField.value = initials || "??";
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="your.email@example.com"
              onChange={(e) => {
                const hiddenField = document.getElementById("user_email_hidden") as HTMLInputElement;
                if (hiddenField) hiddenField.value = e.target.value;
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
            <textarea
              name="message"
              required
              rows={4}
              autoComplete="off"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailPopup;
