
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center mb-12">
//       <h1 className="text-white text-xl font-semibold">
//         Portfolio<span className="text-cyan-400">.</span>
//       </h1>

//       <div className="flex gap-8 text-sm text-gray-300">
//         <Link href="/" className="text-cyan-400">Home</Link>
//         <Link href="about">About</Link>
//         <Link href="skills">Skills</Link>
//         <Link href="portfolio">Portfolio</Link>
//         <Link href="contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }


"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-16">
      <h1 className="text-white text-xl font-semibold">
        Portfolio<span className="text-cyan-400">.</span>
      </h1>

      <div className="flex gap-10 text-sm font-medium">
        <Link className="text-cyan-400" href="#">Home</Link>
        <Link className="text-gray-300 hover:text-white" href="#">About</Link>
        <Link className="text-gray-300 hover:text-white" href="#">Skills</Link>
        <Link className="text-gray-300 hover:text-white" href="#">Portfolio</Link>
        <Link className="text-gray-300 hover:text-white" href="#">Contact</Link>
      </div>
    </nav>
  );
}
