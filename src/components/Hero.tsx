"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Activity, Clock, FileText, ArrowRight } from "lucide-react";
import { triggerModal } from "@/components/GlobalModals";
import { SKDR_DASHBOARD_LOGIN_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <div id="beranda" className="scroll-mt-20 relative w-full bg-white overflow-hidden">
      {/* =========================================================================
          HERO BANNER DENGAN HEADER-BAWAH.WEBP & HEADER-ATAS.WEBP
          Foto dokter menggunakan dr.webp
          ========================================================================= */}
      <div className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-between overflow-hidden">
        
        {/* Layer 1: Background Teal & Lime Wave (header-bawah.webp) */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
          <Image
            src="/images/header-bawah.webp"
            alt="SKDR Teal Background"
            width={1440}
            height={500}
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-top sm:object-center"
          />
        </div>

        {/* Layer 2a: White Wave Cut Divider (Mobile & Tablet < lg) */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 w-full z-10 select-none pointer-events-none overflow-hidden leading-none">
          <Image
            src="/images/header-atas.webp"
            alt="SKDR Wave Cut"
            width={1440}
            height={318}
            loading="eager"
            sizes="100vw"
            className="w-full h-auto object-cover object-bottom block"
          />
        </div>

        {/* Layer 2b: Precision Organic White Wave Divider (Desktop >= lg) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full z-10 select-none pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <path
              d="M0,126 C250,70 535,68 725,178 C870,264 910,435 1050,445 C1185,455 1300,370 1440,325 L1440,600 L0,600 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Konten Hero (Teks di Kiri, Dokter di Kanan) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Kolom Teks Sebelah Kiri */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 lg:bg-teal-50/95 border border-white/40 lg:border-teal-200/80 text-xs font-semibold text-[#007e80] tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#b6d31e] animate-pulse" />
                Kementerian Kesehatan Republik Indonesia
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[52px] font-extrabold tracking-tight leading-[1.16]">
                <span className="text-white lg:text-[#0c2d2e]">Kenali Sinyal Lebih Awal,</span>{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#e2f56b] lg:text-[#007e80]">Respons Lebih Cepat.</span>
              </h1>

              <p className="text-white/95 lg:text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                <span className="font-semibold text-white lg:text-[#0c2d2e]">Sistem Kewaspadaan Dini dan Respon (SKDR)</span> untuk surveilans penyakit, deteksi dini, dan respons kesehatan lebih cepat di Indonesia.
              </p>

              {/* Tombol Aksi Kuning Amber */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={SKDR_DASHBOARD_LOGIN_URL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] hover:from-[#d97706] hover:to-[#ea580c] text-white font-semibold text-sm sm:text-base shadow-lg shadow-amber-950/20 active:scale-95 transition-all duration-200 cursor-pointer group"
                >
                  <span>Pantau Dasbor SKDR</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Kolom Dokter Sebelah Kanan (dr.webp) */}
            <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end self-end pt-4 lg:pt-0">
              
              {/* Container Foto Dokter dr.webp */}
              <div className="relative flex items-end justify-center">
                <Image
                  src="/images/dr.webp"
                  alt="Dokter Surveilans SKDR Kementerian Kesehatan RI"
                  width={985}
                  height={1446}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                  className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] h-auto object-contain object-bottom drop-shadow-lg select-none pointer-events-none"
                />

                {/* Badge Verifikasi Epidemiologi Mengambang */}
                <div className="absolute bottom-4 -left-2 sm:left-2 z-30 bg-white text-slate-800 px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-slate-900 leading-tight">Verifikasi Epidemiologi</p>
                    <p className="text-[10px] text-slate-500">Respon Terstandar 24 Jam</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* 3 Kartu Fitur Mengambang (Floating Cards) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 md:-mt-12 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Card 1: EBS Terintegrasi */}
          <div 
            onClick={() => triggerModal("ebs")}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-200">
                <Activity className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-[#009896] transition-colors">
                EBS Terintegrasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Akses data epidemiologi dan surveilans secara terintegrasi dalam satu sistem.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center text-xs font-semibold text-purple-600 group-hover:translate-x-1 transition-transform">
              <span>Pelajari EBS</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 2: 24 Jam Respons KLB */}
          <div 
            onClick={() => triggerModal("klb")}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-200">
                <Clock className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-[#009896] transition-colors">
                24 Jam Respons KLB
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Respon cepat terhadap kejadian luar biasa (KLB) di seluruh Indonesia.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
              <span>SOP Respons KLB</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 3: Laporan Kasus PE */}
          <div 
            onClick={() => triggerModal("pe")}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-200">
                <FileText className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-[#009896] transition-colors">
                Laporan Kasus PE
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pelaporan kasus penyakit potensial wabah secara real-time dan akurat.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center text-xs font-semibold text-amber-600 group-hover:translate-x-1 transition-transform">
              <span>Alur Form PE</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
