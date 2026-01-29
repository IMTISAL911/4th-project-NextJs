"use client";

import Navbar from "@/app/components/navebar";
import Hero from "@/app/components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#05070f] to-[#0b0f1a] flex items-center justify-center">
      <div className="relative w-[92%] max-w-7xl rounded-3xl bg-[#121826]/90 backdrop-blur-xl p-12 shadow-[0_30px_80px_rgba(0,255,255,0.15)]">

        {/* Bottom cyan glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-24 bg-cyan-400 blur-3xl opacity-60 rounded-full"></div>

        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
