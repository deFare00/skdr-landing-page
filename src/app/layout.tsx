import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKDR - Sistem Kewaspadaan Dini dan Respon | Kementerian Kesehatan RI",
  description: "Platform terpadu Kementerian Kesehatan Republik Indonesia untuk surveilans penyakit, deteksi dini KLB, dan respons kesehatan masyarakat.",
  icons: {
    icon: "/images/logo_kemenkes.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#009896] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
