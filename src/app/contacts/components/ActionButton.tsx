import React from "react";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  title,
  subtitle,
  onClick,
  href,
  variant = "secondary",
  className = "",
}) => {
  const baseClasses =
    "group flex items-center p-5 rounded-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black w-full text-left";

  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-900/20",
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700",
    outline: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10",
  };

  const content = (
    <>
      <div
        className={`p-3 rounded-xl mr-5 transition-colors ${
          variant === "primary" ? "bg-white/20" : "bg-zinc-800 group-hover:bg-zinc-700"
        } `}
      >
        <Icon size={28} className={variant === "primary" ? "text-white" : "text-orange-500"} />
      </div>
      <div>
        <h3 className="font-bold text-lg leading-tight font-['Montserrat']">{title}</h3>
        <p className={`text-sm mt-1 ${variant === "primary" ? "text-orange-100" : "text-zinc-400"}`}>{subtitle}</p>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={variant === "primary" ? "text-white" : "text-orange-500"}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        aria-label={`${title} - ${subtitle}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      type="button"
      aria-label={`${title} - ${subtitle}`}
    >
      {content}
    </button>
  );
};

export default ActionButton;
