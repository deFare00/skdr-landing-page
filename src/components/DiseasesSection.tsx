"use client";

import React, { useState } from "react";
import { 
  Bug, 
  Dog, 
  Rat, 
  Bird, 
  Baby, 
  Wind, 
  AlertTriangle, 
  ShieldCheck, 
  Info,
  Thermometer,
  Stethoscope
} from "lucide-react";

interface DiseaseInfo {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
  isSelected?: boolean;
  definition: string;
  symptoms: string[];
  alertThreshold: string;
  actionProtocol: string;
}

const diseases: DiseaseInfo[] = [
  {
    id: "antraks",
    name: "Antraks",
    category: "Zoonosis Bakteri",
    icon: Bug,
    bgColor: "bg-[#009896]",
    borderColor: "border-[#008583]",
    iconColor: "text-white",
    textColor: "text-white",
    isSelected: true,
    definition: "Penyakit menular akut yang disebabkan bakteri Bacillus anthracis, ditularkan melalui kontak langsung dengan hewan terinfeksi atau produk hewani.",
    symptoms: ["Luka keropeng hitam (eschar)", "Demam tinggi mendadak", "Sesak napas", "Mual & nyeri perut"],
    alertThreshold: "1 kasus tersangka (suspek) langsung memicu sinyal kewaspadaan dini.",
    actionProtocol: "Verifikasi lapangan <24 jam, investigasi sumber paparan ternak, profilaksis kontak erat."
  },
  {
    id: "rabies",
    name: "Rabies",
    category: "Zoonosis Viral",
    icon: Dog,
    bgColor: "bg-[#fde8e5]",
    borderColor: "border-[#fbcbc4]",
    iconColor: "text-rose-600",
    textColor: "text-slate-800",
    definition: "Ensefalitis virus mematikan yang ditularkan lewat gigitan atau cakaran Hewan Penular Rabies (HPR) seperti anjing dan kucing.",
    symptoms: ["Demam & kesemutan di area luka", "Hidrofobia (takut air)", "Aerofobia (takut angin)", "Agitasi & kejang"],
    alertThreshold: "Adanya Kasus Gigitan HPR (GHPR) di wilayah eliminasi atau kasus lyssa tersangka.",
    actionProtocol: "Pemberian VAR (Vaksin Anti Rabies) dan SAR segera, pelacakan HPR bersama Dinas Peternakan."
  },
  {
    id: "leptospirosis",
    name: "Leptospirosis",
    category: "Zoonosis Bakteri",
    icon: Rat,
    bgColor: "bg-[#dcf5e6]",
    borderColor: "border-[#b8ebd0]",
    iconColor: "text-emerald-700",
    textColor: "text-slate-800",
    definition: "Infeksi bakteri Leptospira yang ditularkan melalui air atau tanah yang terkontaminasi urin hewan pengerat (tikus), sering meningkat pasca banjir.",
    symptoms: ["Demam tinggi menggigil", "Nyeri otot betis khas", "Mata merah (conjunctival suffusion)", "Ikterus / penyakit kuning"],
    alertThreshold: "Kenaikan 2x lipat kasus suspek dibanding rata-rata mingguan atau 1 kasus meninggal.",
    actionProtocol: "Distribusi doksisiklin profilaksis pada populasi berisiko banjir, sanitasi lingkungan massal."
  },
  {
    id: "flu-burung",
    name: "Flu Burung",
    category: "Avian Influenza",
    icon: Bird,
    bgColor: "bg-[#e9eefd]",
    borderColor: "border-[#cbd8fc]",
    iconColor: "text-indigo-600",
    textColor: "text-slate-800",
    definition: "Infeksi virus influenza tipe A (H5N1 / H7N9) yang bersumber dari unggas dengan tingkat fatalitas kasus tinggi pada manusia.",
    symptoms: ["Demam > 38°C", "Batuk pilek berat & sesak", "Riwayat kontak unggas mati mendadak", "Pneumonia progresif cepat"],
    alertThreshold: "Kluster 2 atau lebih kasus ISPA berat dengan riwayat unggas mati mendadak dalam 14 hari.",
    actionProtocol: "Isolasi di RS rujukan rujukan flu burung, pemberian Oseltamivir, desinfeksi kandang bersama One Health."
  },
  {
    id: "campak",
    name: "Campak",
    category: "PD3I (Dapat Dicegah Imunisasi)",
    icon: Baby,
    bgColor: "bg-[#feedd9]",
    borderColor: "border-[#fed6b0]",
    iconColor: "text-amber-600",
    textColor: "text-slate-800",
    definition: "Penyakit menular sangat tinggi yang disebabkan virus Measles morbillivirus, berpotensi komplikasi bronkopneumonia dan kebutaan.",
    symptoms: ["Ruam makulopapular menyebar", "Demam tinggi", "Batuk, pilek, konjungtivitis (3C)", "Bercak Koplik mulut"],
    alertThreshold: "≥ 5 kasus tersangka klinis campak dalam 4 minggu berturut-turut pada satu wilayah puskesmas.",
    actionProtocol: "Outbreak Response Immunization (ORI), pelacakan status imunisasi balita sekitar, vitamin A dosis tinggi."
  },
  {
    id: "ispa",
    name: "ISPA / Arbovirus",
    category: "Vektor & Saluran Napas",
    icon: Wind,
    bgColor: "bg-[#f0f0f2]",
    borderColor: "border-[#dcdce0]",
    iconColor: "text-slate-600",
    textColor: "text-slate-800",
    definition: "Pemantauan komprehensif spektrum infeksi saluran pernapasan akut berat (SARI) dan penyakit arbovirus tular vektor seperti Dengue, Chikungunya, dan Zika.",
    symptoms: ["Demam akut mendadak", "Nyeri sendi hebat", "Trombositopenia", "Distres pernapasan"],
    alertThreshold: "Peningkatan tren pelaporan mingguan melampaui kurva ambang batas maksimum 5 tahunan.",
    actionProtocol: "Penyelidikan epidemiologi cepat, pengendalian vektor (fogging fokus/larvasidasi), audit logistik faskes."
  }
];

export default function DiseasesSection() {
  const [selectedId, setSelectedId] = useState<string>("antraks");
  const selectedDisease = diseases.find((d) => d.id === selectedId) || diseases[0];
  const SelectedIcon = selectedDisease.icon;

  return (
    <section id="penyakit" className="scroll-mt-20 py-16 md:py-24 bg-slate-50/60 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prioritas Penyakit Potensial KLB & Zoonosis
          </h2>
          <div className="w-16 h-1 bg-[#009896] mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kategori penyakit yang diamati secara mandiri dan dipantau sebagai prioritas surveilans nasional.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {diseases.map((item) => {
            const Icon = item.icon;
            const isCurrent = selectedId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-center relative ${
                  isCurrent
                    ? "bg-[#009896] border-[#008583] text-white shadow-lg shadow-teal-900/15 -translate-y-1 ring-2 ring-[#009896]/30"
                    : `${item.bgColor} ${item.borderColor} ${item.textColor} hover:-translate-y-0.5 hover:shadow-md`
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-transform ${
                    isCurrent ? "bg-white/20 text-white" : `${item.iconColor}`
                  }`}
                >
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className={`text-xs sm:text-sm font-bold tracking-tight ${isCurrent ? "text-white" : "text-slate-800"}`}>
                  {item.name}
                </span>
                <span className={`text-[10px] mt-0.5 opacity-80 ${isCurrent ? "text-white/90" : "text-slate-500"}`}>
                  {item.category.split(" ")[0]}
                </span>
                
                {isCurrent && (
                  <span className="absolute -bottom-1.5 w-3 h-3 bg-[#009896] rotate-45 rounded-sm" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Disease Surveillance Details Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#009896] flex items-center justify-center font-bold">
                <SelectedIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Surveilans Terpadu: {selectedDisease.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700">
                    {selectedDisease.category}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Protokol verifikasi sinyal SKDR Kementerian Kesehatan RI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200/80">
                <AlertTriangle className="w-3.5 h-3.5" />
                Ambang Batas Dini Aktif
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            
            {/* Box 1: Definisi & Karakteristik */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <Info className="w-4 h-4 text-[#009896]" />
                <span>Definisi Operasional Kasus</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                {selectedDisease.definition}
              </p>
            </div>

            {/* Box 2: Gejala Klinis */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <Thermometer className="w-4 h-4 text-rose-500" />
                <span>Gejala & Tanda Kunci</span>
              </div>
              <ul className="space-y-1.5">
                {selectedDisease.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Respon & Investigasi */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SOP Respon Cepat (7-1-7)</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                <p className="font-semibold text-[11px] text-[#009896] uppercase tracking-wider mb-1">
                  Ambang Batas:
                </p>
                <p className="text-xs mb-2 text-slate-600">
                  {selectedDisease.alertThreshold}
                </p>
                <p className="font-semibold text-[11px] text-emerald-700 uppercase tracking-wider mb-1">
                  Respon Tim Gerak Cepat (TGC):
                </p>
                <p className="text-xs text-slate-600">
                  {selectedDisease.actionProtocol}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

