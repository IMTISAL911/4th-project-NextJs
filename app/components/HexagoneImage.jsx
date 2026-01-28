"use client";

import Image from "next/image";

export default function HexagonImage() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-40 rounded-full"></div>

      {/* Hexagon */}
      <div
        className="w-64 h-72 bg-cyan-400 p-1"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div
          className="w-full h-full bg-[#121826]"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <Image
            src="/profile.png" // put image in public folder
            alt="Profile"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
