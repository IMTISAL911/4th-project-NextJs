"use client";
import Image from "next/image";

export default function HexagonImage() {
  return (
    <div className="relative">

      {/* glow */}
      <div className="absolute inset-0 bg-cyan-400 blur-[90px] opacity-50 rounded-full" />

      {/* hexagon */}
      <div
        className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[360px] p-[3px]
        bg-gradient-to-b from-cyan-300 to-cyan-500"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      >
        <div
          className="w-full h-full bg-[#121826]"
          style={{
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          }}
        >
          <Image
            src="/imtisal.png"
            alt="profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
