import React from "react";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Shield
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="scroll-mt-20 w-full bg-[#028486] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Kemenkes Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Kemenkes Resmi */}
            <div className="py-1">
              <Image
                src="/images/Logo-Kemenkes.png"
                alt="Kementerian Kesehatan Republik Indonesia"
                width={180}
                height={42}
                className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
              />
            </div>

            <div className="pt-2 text-white/90 space-y-1">
              <p className="text-sm font-semibold tracking-wide">
                Sehat Negeriku, Tangguh Bangsaku
              </p>
              <p className="text-xs text-white/80">
                Untuk Indonesia yang lebih sehat.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/kemenkesRI"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Kementerian Kesehatan"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/kemenkes_ri"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Kementerian Kesehatan"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/@KemenkesRI"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Kementerian Kesehatan"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:info@kemkes.go.id"
                aria-label="Email Kementerian Kesehatan"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Tautan Cepat */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-xs text-white/85">
              <li>
                <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Profil SKDR
                </a>
              </li>
              <li>
                <a href="#respons" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Dokumentasi & SOP
                </a>
              </li>
              <li>
                <a href="#penyakit" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Daftar Penyakit KLB
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dasbor & Data */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2">
              Dasbor & Data
            </h4>
            <ul className="space-y-2 text-xs text-white/85">
              <li>
                <a href="#dasbor" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Dasbor Nasional
                </a>
              </li>
              <li>
                <a href="#laporan" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Laporan Kasus
                </a>
              </li>
              <li>
                <a href="#laporan-mingguan" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Laporan Mingguan (W2)
                </a>
              </li>
              <li>
                <a href="#ebs" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <span className="text-[#b6d31e]">▸</span> Surveilans Kejadian
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak Layanan */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2">
              Kontak Layanan
            </h4>
            <div className="space-y-2.5 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b6d31e] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Alamat:</strong> Jl. H.R. Rasuna Said Blok X-5 Kav. 4-9, Jakarta Selatan 12950
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b6d31e] flex-shrink-0" />
                <span>
                  <strong className="text-white">Telepon:</strong> 021-52906111 / Halo Kemenkes 1500-567
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b6d31e] flex-shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong> info@kemkes.go.id / skdr@kemkes.go.id
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="w-full bg-[#006f70] py-4 border-t border-teal-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <div>
            Hak Cipta © 2024 Kementerian Kesehatan Republik Indonesia. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/70">Surveilans Terakreditasi Nasional</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/90">
              <Shield className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
