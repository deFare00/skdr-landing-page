"use client";

import React, { useState } from "react";
import { 
  X, 
  Activity, 
  MapPin, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  Search,
  Filter,
  BarChart2
} from "lucide-react";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardModal({ isOpen, onClose }: DashboardModalProps) {
  const [activeTab, setActiveTab] = useState("sinyal");

  if (!isOpen) return null;

  const mockSignals = [
    { id: 1, disease: "Antraks", location: "Kab. Gunungkidul, D.I. Yogyakarta", status: "Terverifikasi", date: "Hari ini, 08:30 WIB", level: "Waspada", faskes: "Puskesmas Semanu I" },
    { id: 2, disease: "Rabies", location: "Kab. Timor Tengah Selatan, NTT", status: "Investigasi Lapangan", date: "Kemarin, 14:15 WIB", level: "Siaga", faskes: "Puskesmas Niki-Niki" },
    { id: 3, disease: "Leptospirosis", location: "Kota Semarang, Jawa Tengah", status: "Terkendali", date: "07 Nov 2024", level: "Normal", faskes: "Puskesmas Genuk" },
    { id: 4, disease: "Campak", location: "Kab. Asmat, Papua Selatan", status: "Outbreak Response (ORI)", date: "06 Nov 2024", level: "KLB", faskes: "Puskesmas Agats" },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#009896] px-6 py-4 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#b6d31e]">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                Dasbor Pemantauan Nasional SKDR
              </h3>
              <p className="text-xs text-white/80">
                Pusat Data Surveilans Penyakit & Respon KLB Terkini
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Top Summary Bar */}
        <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-3 flex-shrink-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xs text-slate-500">Kelengkapan Laporan (W45)</div>
              <div className="text-lg font-bold text-slate-900">98.6%</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Ketepatan Waktu</div>
              <div className="text-lg font-bold text-emerald-600">96.2%</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Sinyal Aktif 24 Jam</div>
              <div className="text-lg font-bold text-amber-600">12 Sinyal</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Verifikasi & Respon &lt;24 Jam</div>
              <div className="text-lg font-bold text-[#009896]">100%</div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Signal Feeds */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#009896]" />
                <span>Sinyal Peringatan Dini Penyakit Terkini</span>
              </h4>
              <span className="text-[11px] text-slate-400">Diperbarui setiap 15 menit</span>
            </div>

            <div className="space-y-2.5">
              {mockSignals.map((sig) => (
                <div 
                  key={sig.id}
                  className="p-3.5 rounded-xl border border-slate-200/80 hover:border-[#009896]/50 bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      sig.level === "KLB" ? "bg-red-100 text-red-700" :
                      sig.level === "Siaga" ? "bg-amber-100 text-amber-700" :
                      sig.level === "Waspada" ? "bg-yellow-100 text-yellow-700" : "bg-teal-100 text-teal-700"
                    }`}>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{sig.disease}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          sig.level === "KLB" ? "bg-red-100 text-red-800" :
                          sig.level === "Siaga" ? "bg-amber-100 text-amber-800" :
                          sig.level === "Waspada" ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-800"
                        }`}>
                          {sig.level}
                        </span>
                      </div>
                      <p className="text-slate-500 mt-0.5">{sig.location} • {sig.faskes}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:border-l sm:border-slate-100 sm:pl-4">
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200/60">
                        {sig.status}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-0.5">{sig.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#009896] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Akses Publik Terbatas</p>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Data individual pasien dan titik geolokasi spesifik dilindungi sesuai regulasi rekam medis dan UU Perlindungan Data Pribadi (UU PDP). Faskes dan Dinas Kesehatan silakan masuk melalui tombol <strong>Akses SKDR</strong> untuk data komprehensif.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200/80 flex items-center justify-end gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

