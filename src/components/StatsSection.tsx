import React from "react";
import { CheckCircle2, Globe2, Gauge } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "100%",
      label: "Verifikasi <24 Jam",
      sublabel: "Target respon sinyal peringatan dini",
      icon: CheckCircle2,
      accentColor: "text-[#009896]",
      bgAccent: "bg-teal-50",
    },
    {
      value: "38",
      label: "Provinsi Terkoneksi",
      sublabel: "514 Kabupaten/Kota di seluruh Indonesia",
      icon: Globe2,
      accentColor: "text-[#009896]",
      bgAccent: "bg-teal-50",
    },
    {
      value: "Kinerja 7-1-7",
      label: "Respons Cepat",
      sublabel: "7 hari deteksi, 1 hari notifikasi, 7 hari respon tuntas",
      icon: Gauge,
      accentColor: "text-[#009896]",
      bgAccent: "bg-teal-50",
    },
  ];

  return (
    <section className="py-10 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bgAccent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${stat.accentColor}`} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1 group-hover:text-[#009896] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

