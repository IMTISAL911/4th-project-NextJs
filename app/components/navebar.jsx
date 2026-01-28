"use client";

import { FaCode } from "react-icons/fa";
import Link from "next/link";
export default function Navebar(){
    return(
        <div className="p-4  text-white flex justify-between items-center py-6">

<h1 className="flex items-center gap-2 text-2xl font-bold"><FaCode  className="text-blue-500"/> Imtisal</h1>

<nav className="flex gap-15 mr-[2.5%]">
    <Link className="hover:text-gray-400 transition-colors duration-100" href="home">Home</Link>
    <Link className="hover:text-gray-400 transition-colors duration-100" href="about">About</Link>
    <Link className="hover:text-gray-400 transition-colors duration-100" href="contact">Contact</Link>
    <Link className="hover:text-gray-400 transition-colors duration-100" href="services">services</Link>
</nav>
        </div>
    )
}