"use client";

import HexagonImage from "@/app/components/HexagoneImage";
import useTypingEffect from "@/app/hooks/useTypingEffect";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Navbar Component
function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 lg:px-16 bg-black bg-opacity-80 fixed top-0 z-50 shadow-md">
      <div className="text-white font-bold text-xl">Portfolio</div>
      <div className="flex gap-6 text-gray-300 text-sm lg:text-base">
        <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
}

export default function Home() {
  const typedText = useTypingEffect(
    "Hello, It's Me! Imtisal Hussain. I am a Frontend Developer with one year of experience building modern, user-friendly, and responsive web and mobile applications using HTML, CSS, JavaScript, React.js, Next.js, and React Native."
  );

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 pt-32 lg:pt-40 px-4 lg:px-16"
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* TYPING TEXT */}
          <p className="text-gray-400 mb-3 text-sm sm:text-base min-h-[30px]">
            {typedText}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>

          {/* NAME */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-3">
            Imtisal Hussain
          </h1>

          {/* ROLE */}
          <h2 className="text-xl sm:text-2xl text-white mb-6">
            And I’m a{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent font-semibold">
              Frontend Developer
            </span>
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400
                  hover:bg-cyan-400 hover:text-black transition-all duration-300
                  shadow-[0_0_20px_rgba(0,255,255,0.45)] cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>

          {/* BUTTON */}
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500 text-black font-semibold
          shadow-[0_12px_35px_rgba(0,255,255,0.55)] hover:scale-105 transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
            <HexagonImage />
          </div>
        </div>
      </section>

      {/* PORTFOLIO TITLE */}
      <section className="text-center mt-16 lg:mt-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My Portfolio
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          A collection of projects that showcase my skills in frontend development and UI/UX design.
        </p>
      </section>
    </div>
  );
}
