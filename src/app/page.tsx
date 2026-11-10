import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DiseasesSection from "@/components/DiseasesSection";
import RapidResponseSection from "@/components/RapidResponseSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import GlobalModals from "@/components/GlobalModals";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white" suppressHydrationWarning>
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section with Wave & 3 Overlapping Cards */}
      <Hero />

      {/* Tentang SKDR & Schedule Verification Section */}
      <AboutSection />

      {/* Prioritas Penyakit Potensial KLB & Zoonosis Section */}
      <DiseasesSection />

      {/* Respons Cepat untuk Kesehatan Masyarakat Section */}
      <RapidResponseSection />

      {/* Key Metrics / Stat Cards */}
      <StatsSection />

      {/* Official Kemenkes Footer */}
      <Footer />

      {/* Standalone Modals (Rendered On-Demand via Global Trigger) */}
      <GlobalModals />
    </main>
  );
}
