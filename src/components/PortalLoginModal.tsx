"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Lock, User, Building2, Key, CheckCircle } from "lucide-react";
import KemenkesLogo from "./KemenkesLogo";

interface PortalLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortalLoginModal({ isOpen, onClose }: PortalLoginModalProps) {
  const [role, setRole] = useState("puskesmas");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#009896] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#b6d31e]" />
            <div>
              <h3 className="font-bold text-base leading-tight">Portal Akses SKDR</h3>
              <p className="text-xs text-white/80">Sistem Kewaspadaan Dini & Respon</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">Autentikasi Berhasil</h4>
              <p className="text-xs text-slate-500">Mengarahkan ke dashboard surveilans wilayah Anda...</p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Tingkat Instansi Pengguna
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "puskesmas", label: "Puskesmas / Faskes" },
                    { id: "kabkota", label: "Dinkes Kab/Kota" },
                    { id: "provinsi", label: "Dinkes Provinsi" },
                    { id: "pusat", label: "Kemenkes Pusat" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRole(item.id)}
                      className={`py-2 px-2.5 rounded-xl border text-center font-medium transition-all ${
                        role === item.id
                          ? "bg-teal-50 border-[#009896] text-[#009896] font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ID Pengguna / Kode Faskes
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Contoh: P3171010101 atau nama pengguna"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009896] focus:border-transparent text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kata Sandi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009896] focus:border-transparent text-slate-800"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl bg-[#009896] hover:bg-[#008381] text-white font-semibold text-xs sm:text-sm shadow-md active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Key className="w-4 h-4" />
                      <span>Masuk ke Sistem SKDR</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="tel:1500915"
                  className="text-[11px] text-[#009896] hover:underline"
                >
                  Lupa kata sandi? Hubungi Helpdesk Hello Titan (1500 915)
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

