import React from "react";
import Image from "next/image";
import { Phone, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="tentang" className="scroll-mt-20 py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tentang SKDR
          </h2>
          <div className="w-16 h-1 bg-[#009896] mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Untuk mendukung sistem kewaspadaan <span className="font-semibold text-slate-800">dini dan respon cepat</span> terhadap penyakit di Indonesia, SKDR hadir sebagai platform terintegrasi untuk surveilans kesehatan masyarakat.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Description & Official Endorsement */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
              Surveilans Digital Terpadu <br className="hidden sm:inline" />
              <span className="text-[#009896]">Kesehatan Masyarakat</span>
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              SKDR merupakan sistem yang terintegrasi dengan berbagai sumber data kesehatan, mulai dari fasilitas pelayanan kesehatan, laboratorium, hingga laporan masyarakat, guna memantau potensi wabah secara lebih cepat dan akurat.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              Cek informasi dan peringatan dini KLB, serta akses data surveilans terkini untuk mendukung pengambilan keputusan yang lebih tepat dalam melindungi kesehatan masyarakat Indonesia.
            </p>

            {/* Dirjen Profile Badge */}
            <div className="pt-4 flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 w-fit">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#009896] shadow-sm flex-shrink-0">
                <Image
                  src="/images/mockup_dr_edi.png"
                  alt="dr. H. Edi Suharmen"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  dr. H. Edi Suharmen
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Dirjen Pencegahan dan Pengendalian Penyakit
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule & Verification Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#f2fafb] border-2 border-[#64b1b7]/40 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              
              {/* Header Box */}
              <div className="mb-5 pb-3 border-b border-[#64b1b7]/30">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-[#009896]" />
                  <span className="text-xs font-bold text-[#009896] tracking-wider uppercase">
                    Monitoring Rutin
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Jadwal Pemantauan & Verifikasi Sinyal Hari/Mingguan
                </h4>
              </div>

              {/* Table Rows */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="font-semibold text-slate-700">Senin - Minggu</span>
                  <span className="font-mono font-medium text-slate-900 bg-white px-2.5 py-0.5 rounded border border-slate-200/80">
                    00 - 24.00
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="font-semibold text-slate-700">Puskesmas</span>
                  <span className="font-mono font-medium text-[#009896] bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/60">
                    24 Jam
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="font-semibold text-slate-700">Kabupaten / Kota</span>
                  <span className="font-medium text-slate-800 bg-white px-2.5 py-0.5 rounded border border-slate-200/80">
                    1x Sehari
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-slate-200">
                  <span className="font-semibold text-slate-700">Provinsi</span>
                  <span className="font-medium text-slate-800 bg-white px-2.5 py-0.5 rounded border border-slate-200/80">
                    1x Sehari
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold text-slate-700">Tingkat Verifikasi</span>
                  <span className="font-medium text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200/60">
                    7x24 - 5 Menit
                  </span>
                </div>
              </div>

              {/* Hello Titan Banner */}
              <div className="mt-6 pt-4 border-t border-[#64b1b7]/30">
                <a
                  href="tel:1500915"
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#64b1b7]/40 text-[#009896] hover:bg-teal-50/80 font-bold text-sm sm:text-base transition-colors shadow-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-teal-50 text-[#009896] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-4 h-4 fill-current" />
                  </span>
                  <span>HELLO TITAN 1500 915</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
