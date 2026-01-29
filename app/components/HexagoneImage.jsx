"use client";
import Image from "next/image";

export default function HexagonImage() {
  return (
    <div className="relative">

      {/* outer glow */}
      <div className="absolute inset-0 bg-cyan-400 blur-[80px] opacity-60 rounded-full"></div>

      {/* neon border */}
      <div
        className="w-[300px] h-[340px] p-[3px] bg-gradient-to-b from-cyan-300 to-cyan-500"
        style={{
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
      >
        <div
          className="w-full h-full bg-[#121826]"
          style={{
            clipPath:
              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          }}
        >
          <Image
            src="/imtisal.png"
            alt="profile"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
