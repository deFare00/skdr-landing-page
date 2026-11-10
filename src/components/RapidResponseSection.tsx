"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, ShieldAlert, Zap, Users, BarChart3 } from "lucide-react";
import { triggerModal } from "@/components/GlobalModals";

export default function RapidResponseSection() {
  return (
    <section id="respons" className="scroll-mt-20 py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Gambar bawah.webp */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Container Gambar bawah.webp */}
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] flex items-center justify-center">
              
              {/* Gambar bawah.webp dengan ukuran eksplisit dan responsif */}
              <Image
                src="/images/bawah.webp"
                alt="Respons Cepat untuk Kesehatan Masyarakat SKDR"
                width={688}
                height={592}
                sizes="(max-width: 640px) 460px, (max-width: 1024px) 500px, 540px"
                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-md"
                priority
              />

              {/* Floating Real-Time Indicator Badge */}
              <div className="absolute -bottom-3 -right-2 sm:bottom-2 sm:right-2 z-20 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#009896] flex items-center justify-center">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Koordinasi Lintas Sektor</p>
                  <p className="text-[10px] text-slate-500 font-medium">One Health: Hewan, Manusia, Lingkungan</p>
                </div>
              </div>

            </div>

          </div>

          {/* Kolom Kanan: Narasi & Tombol Aksi */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-semibold text-[#009896]">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Kesiapsiagaan Kesehatan Nasional</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Respons Cepat untuk <br className="hidden sm:inline" />
              <span className="text-[#009896]">Kesehatan Masyarakat</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              Dengan sistem SKDR, respons terhadap potensi KLB dapat dilakukan lebih cepat melalui pemantauan real-time, analisis data yang akurat, dan koordinasi lintas sektor. Kami berkomitmen menjaga kesehatan masyarakat Indonesia dengan pendekatan surveilans yang modern, responsif, dan berbasis data.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-left">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <BarChart3 className="w-5 h-5 text-[#009896] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Analisis Algoritma Cerdas</h4>
                  <p className="text-[11px] text-slate-500">Mendeteksi lonjakan sinyal otomatis.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Tim Gerak Cepat (TGC)</h4>
                  <p className="text-[11px] text-slate-500">Kesiapan diterjunkan ke titik sinyal.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex justify-center lg:justify-start">
              <button
                onClick={() => triggerModal("respons")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#009896] hover:bg-[#008381] active:scale-95 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <span>Ikuti Selengkapnya</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
