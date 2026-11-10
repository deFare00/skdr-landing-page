"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ShieldCheck } from "lucide-react";
import { triggerModal } from "@/components/GlobalModals";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Beranda");

  const navItems = [
    { label: "Beranda", href: "#", type: "top" },
    { label: "Dasbor Surveilans", href: "#dasbor", type: "dashboard" },
    { label: "Penyakit & Sinyal", href: "#penyakit", type: "scroll" },
    { label: "Form PE", href: "#form-pe", type: "pe" },
    { label: "Integrasi EBS", href: "#tentang", type: "scroll" },
    { label: "Dokumentasi", href: "#respons", type: "scroll" },
    { label: "Kontak", href: "#kontak", type: "scroll" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[number]
  ) => {
    e.preventDefault();
    setActiveItem(item.label);
    setMobileMenuOpen(false);

    if (item.type === "dashboard") {
      triggerModal("dashboard");
      return;
    }

    if (item.type === "pe") {
      triggerModal("pe");
      return;
    }

    if (item.type === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (item.type === "scroll") {
      const targetId = item.href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Kemenkes */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveItem("Beranda");
            }}
            className="flex items-center group py-2"
          >
            <Image
              src="/images/Logo-Kemenkes.png"
              alt="Kementerian Kesehatan Republik Indonesia"
              width={180}
              height={42}
              priority
              className="h-8 sm:h-9 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-2.5 py-1.5 text-xs xl:text-[13px] font-medium rounded-md transition-colors relative cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-[#009896] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-[#009896] after:rounded-full"
                      : "text-slate-600 hover:text-[#009896] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Live Status */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-[11px] font-medium text-emerald-700 select-none whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sistem Online 24/7
            </div>

            <button
              onClick={() => triggerModal("portal")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#009896] hover:bg-[#008381] active:scale-95 text-white text-xs md:text-[13px] font-medium shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Akses SKDR</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => triggerModal("portal")}
              className="px-3 py-1.5 rounded-full bg-[#009896] text-white text-xs font-medium cursor-pointer"
            >
              Akses SKDR
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer ${
                  activeItem === item.label
                    ? "text-[#009896] bg-teal-50 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerModal("portal");
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#009896] text-white font-medium text-sm shadow cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                Masuk ke Portal SKDR
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
