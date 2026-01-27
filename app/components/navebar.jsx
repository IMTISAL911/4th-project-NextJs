"use client";

import { FaCode } from "react-icons/fa";
export default function Navebar(){
    return(
        <div className="p-4  text-white flex justify-between items-center py-6">

<h1 className="flex items-center gap-2 text-2xl font-bold"><FaCode  className="text-blue-500"/> Imtisal</h1>

<nav className="flex gap-15 mr-[2.5%]">
    <a className="hover:text-gray-400 transition-colors duration-100" href="#">Home</a>
    <a className="hover:text-gray-400 transition-colors duration-100" href="#">About</a>
    <a className="hover:text-gray-400 transition-colors duration-100" href="#">Contact</a>
    <a className="hover:text-gray-400 transition-colors duration-100" href="#">services</a>
</nav>
        </div>
    )
}