"use client";

import HexagonImage from "@/app/components/HexagoneImage"
import useTypingEffect from "@/app/hooks/useTypingEffect";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const typedText = useTypingEffect(
    "I build modern, responsive and user-friendly web applications."
  );

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <p className="text-gray-400 text-sm mb-2">Hello, It's Me</p>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Imtisal Hussain
        </h1>

        <h2 className="text-xl sm:text-2xl text-white mb-4">
          And I'm a{" "}
          <span className="text-cyan-400 font-semibold">
            Frontend Developer
          </span>
        </h2>

        <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-6 min-h-[48px]">
          {typedText}
          <span className="text-cyan-400 animate-pulse">|</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center lg:justify-start gap-4 mb-8">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <div
              key={i}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400
              hover:bg-cyan-400 hover:text-black transition-all duration-300
              shadow-[0_0_18px_rgba(0,255,255,0.5)] cursor-pointer"
            >
              <Icon size={16} />
            </div>
          ))}
        </div>

        <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold
        hover:scale-105 transition-all duration-300
        shadow-[0_12px_35px_rgba(0,255,255,0.6)]">
          Download CV
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <HexagonImage />
      </div>
    </section>
  );
}
