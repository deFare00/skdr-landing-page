import React from "react";

interface KemenkesLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

export default function KemenkesLogo({
  variant = "dark",
  className = "",
  showText = true,
}: KemenkesLogoProps) {
  const isDarkBg = variant === "light"; // variant "light" means light text for dark background

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Kemenkes heart-shape emblem SVG */}
      <svg
        viewBox="0 0 120 100"
        className="h-10 w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Kementerian Kesehatan"
      >
        {/* Heart Swoosh Right (Teal) */}
        <path
          d="M62 18 C78 4, 110 12, 114 42 C118 70, 78 92, 58 98 C54 99, 48 97, 44 94 C60 88, 88 72, 86 50 C84 32, 68 28, 62 18 Z"
          fill={isDarkBg ? "#ffffff" : "#009896"}
        />
        {/* Heart Swoosh Left / Lower curve (Teal) */}
        <path
          d="M50 24 C36 10, 10 18, 8 46 C6 72, 38 92, 54 98 C50 90, 36 78, 30 64 C24 50, 26 38, 36 32 C42 28, 46 26, 50 24 Z"
          fill={isDarkBg ? "#e6f7f7" : "#008583"}
        />
        {/* Center Swoosh / Droplet (Lime Green) */}
        <path
          d="M44 40 C44 28, 56 22, 64 30 C72 38, 68 56, 56 64 C48 58, 44 50, 44 40 Z"
          fill={isDarkBg ? "#b6d31e" : "#b6d31e"}
        />
      </svg>

      {showText && (
        <div
          className={`flex flex-col text-left font-bold tracking-tight uppercase leading-[1.05] text-[10px] md:text-[11px] ${
            isDarkBg ? "text-white" : "text-slate-800"
          }`}
        >
          <span>KEMENTERIAN</span>
          <span>KESEHATAN</span>
          <span className="font-semibold text-[9px] md:text-[10px] opacity-90">REPUBLIK</span>
          <span className="font-semibold text-[9px] md:text-[10px] opacity-90">INDONESIA</span>
        </div>
      )}
    </div>
  );
}

