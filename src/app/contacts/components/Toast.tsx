import React, { useEffect } from "react";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 animate-fade-in-up">
      <div className="bg-zinc-900 text-white border border-zinc-700 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
        <div className="bg-green-500/20 text-green-500 p-1 rounded-full">
          <Check size={16} strokeWidth={3} />
        </div>
        <span className="font-medium font-['Montserrat']">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
