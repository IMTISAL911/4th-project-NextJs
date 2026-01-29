"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-16">
      <h1 className="text-white text-xl font-semibold tracking-wide">
        Portfolio<span className="text-cyan-400">.</span>
      </h1>

      <div className="hidden md:flex gap-10 text-sm font-medium">
        <Link className="text-cyan-400" href="#">Home</Link>
        <Link className="text-gray-300 hover:text-white transition" href="#">About</Link>
        <Link className="text-gray-300 hover:text-white transition" href="#">Skills</Link>
        <Link className="text-gray-300 hover:text-white transition" href="#">Portfolio</Link>
        <Link className="text-gray-300 hover:text-white transition" href="#">Contact</Link>
      </div>
    </nav>
  );
}
