"use client";

import React from "react";
import { X, Activity, Clock, FileText, CheckCircle2 } from "lucide-react";

interface FeatureDetailModalProps {
  type: string | null;
  onClose: () => void;
}

export default function FeatureDetailModal({ type, onClose }: FeatureDetailModalProps) {
  if (!type) return null;

  const contentMap: Record<string, { title: string; subtitle: string; icon: any; iconBg: string; iconColor: string; description: string; points: string[] }> = {
    ebs: {
      title: "Event-Based Surveillance (EBS) Terintegrasi",
      subtitle: "Surveilans Berbasis Kejadian untuk Deteksi Dini Ancaman Kesehatan",
      icon: Activity,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      description: "EBS mengumpulkan, memantau, dan menganalisis laporan kejadian tidak biasa dari berbagai sumber informal maupun formal, termasuk media massa digital, laboratorium, faskes swasta, dan laporan warga untuk mengidentifikasi sinyal ancaman kesehatan masyarakat sedini mungkin.",
      points: [
        "Penyaringan rumor kesehatan dan potensi wabah secara otomatis",
        "Triase dan validasi sinyal oleh epidemiolog dalam hitungan jam",
        "Integrasi langsung ke sistem pelaporan SKDR indikator (IBS)",
        "Koordinasi lintas kementerian dan sektor terkait (One Health)"
      ]
    },
    klb: {
      title: "Standar 24 Jam Respons Kejadian Luar Biasa (KLB)",
      subtitle: "Protokol Siaga Penyelidikan Epidemiologi Cepat di Seluruh Wilayah",
      icon: Clock,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      description: "Setiap sinyal yang melampaui batas ambang kewaspadaan wajib diverifikasi dalam kurun waktu kurang dari 24 jam. Jika terkonfirmasi sebagai potensi KLB, Tim Gerak Cepat (TGC) segera dimobilisasi untuk penanggulangan sumber penularan.",
      points: [
        "Verifikasi sinyal otomatis oleh petugas surveilans Puskesmas & Dinkes",
        "Penerbitan surat tugas penyelidikan epidemiologi lapangan < 24 jam",
        "Pengambilan dan pengiriman spesimen laboratorium rujukan nasional",
        "Pemutusan rantai penularan dan pelaporan berkala hingga status KLB dicabut"
      ]
    },
    pe: {
      title: "Laporan Kasus Penyelidikan Epidemiologi (PE)",
      subtitle: "Instrumen Digital Terstandar Penelusuran Kontak dan Riwayat Paparan",
      icon: FileText,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      description: "Form PE digital mempermudah petugas surveilans di garda terdepan mengisi formulir investigasi kasus potensial wabah secara langsung di lapangan (online maupun offline) dengan standarisasi variabel Kementerian Kesehatan.",
      points: [
        "Pengisian formulir investigasi kontak kasus secara paperless",
        "Validasi data otomatis untuk mencegah duplikasi dan kesalahan entri",
        "Pelacakan riwayat perjalanan dan pemetaan geografis kluster kasus",
        "Ekspor laporan komprehensif format PDF/Excel untuk evaluasi pimpinan"
      ]
    },
    respons: {
      title: "Kerangka Respons Cepat Surveilans Nasional",
      subtitle: "Strategi Transformasi Digital Ketahanan Kesehatan Masyarakat Indonesia",
      icon: Activity,
      iconBg: "bg-teal-50",
      iconColor: "text-[#009896]",
      description: "Kementerian Kesehatan RI menerapkan kerangka kerja surveilans komprehensif berstandar global dengan target kinerja 7-1-7: mendeteksi ancaman kesehatan dalam 7 hari, melaporkan dan memverifikasi dalam 1 hari, serta menuntaskan respons awal dalam 7 hari.",
      points: [
        "Jaringan laboratorium surveilans terintegrasi genomic sequencing",
        "Penguatan kapasitas lebih dari 10.000 Puskesmas di 38 Provinsi",
        "Pendekatan One Health terpadu (Kemenkes, Kementan, KLHK)",
        "Dasbor analitik prediktif berbasis machine learning untuk proyeksi wabah"
      ]
    }
  };

  const current = contentMap[type] || contentMap.ebs;
  const Icon = current.icon;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#009896] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl ${current.iconBg} ${current.iconColor} flex items-center justify-center`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">{current.title}</h3>
              <p className="text-xs text-white/80">{current.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {current.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
              Fitur & Standar Operasional:
            </h4>
            <div className="space-y-2">
              {current.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#009896] flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#009896] hover:bg-[#008381] text-white text-xs font-semibold shadow transition-all cursor-pointer"
            >
              Mengerti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

