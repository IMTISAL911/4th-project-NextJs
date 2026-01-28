"use client";

import HexagonImage from "@/app/components/HexagoneImage";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex items-center justify-between gap-10">
      
      {/* LEFT CONTENT */}
      <div className="w-1/2 text-white">
        <p className="text-gray-400 mb-2">Hello, It’s Me</p>

        <h1 className="text-4xl font-bold mb-2">
          John Kendric
        </h1>

        <h2 className="text-xl mb-4">
          And I’m a{" "}
          <span className="text-cyan-400 font-semibold">
            Frontend Developer
          </span>
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus
          nulla sed saepe rerum, animi expedita.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mb-6">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-9 h-9 flex items-center justify-center border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                <Icon size={14} />
              </div>
            )
          )}
        </div>

        {/* BUTTON */}
        <button className="px-6 py-2 rounded-full bg-cyan-400 text-black font-medium shadow-lg shadow-cyan-500/40 hover:scale-105 transition">
          Download CV
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 flex justify-center">
        <HexagonImage />
      </div>
    </section>
  );
}
