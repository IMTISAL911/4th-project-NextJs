"use client";

import Navbar from "@/app/components/navebar";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] flex items-center justify-center">
      <div className="w-[90%] max-w-6xl bg-[#121826] rounded-2xl shadow-2xl p-10 relative">
        <Navbar/>
        <Hero />
      </div>
    </main>
  );
}
