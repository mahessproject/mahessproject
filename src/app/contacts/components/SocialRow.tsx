import React from "react";
import { SOCIAL_LINKS } from "../constants";

const SocialRow: React.FC = () => {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-white/5 rounded-full text-white transition-all duration-300 ${item.color} hover:bg-white/10 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black`}
          aria-label={item.label}
        >
          <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default SocialRow;
