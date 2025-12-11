import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaFileDownload, FaHome, FaInfoCircle } from "react-icons/fa";

export default function Header() {
  const cvDownloadLink = "../../public/Rabbi Resume.pdf.pdf";

  return (
    // Outer container for Fixed Header (covers full width of viewport)
    <motion.header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-200/50  
        py-4 sm:py-5
      "
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        {/* Inner Container to limit content width and center it */}
        <div className="
            max-w-7xl mx-auto px-12 sm:px-8
            flex flex-col sm:flex-row items-center
            justify-between gap-5 sm:gap-6
        ">
            <div className="text-center sm:text-left">
                {/* Name: Gradient remains for visual appeal */}
                <motion.h1
                    className="text-3xl font-extrabold tracking-tight
                    bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                    cursor-pointer
                    "
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    Rabbi Khan
                </motion.h1>
                {/* Title: Changed to a darker slate color */}
                <p className="text-sm text-slate-500 mt-0.5">MERN Stack Web Developer</p>
            </div>

            {/* Navigation Links */}
            <nav
                className="
                    flex items-center gap-4 sm:gap-7 text-base font-medium
                    order-3 sm:order-none
                "
            >
                {/* Links: Changed text color to a darker slate, hover color remains vibrant */}
                <a href="#home" className="flex items-center gap-1 text-slate-700 hover:text-cyan-600 transition hover:scale-105">
                    <FaHome className="text-lg" />
                    Home
                </a>
                <a href="#about" className="flex items-center gap-1 text-slate-700 hover:text-cyan-600 transition hover:scale-105">
                    <FaInfoCircle className="text-lg" />
                    About
                </a>
                <a href="#skills" className="text-slate-700 hover:text-cyan-600 transition hover:scale-105">
                    Skills
                </a>
                <a href="#projects" className="text-slate-700 hover:text-cyan-600 transition hover:scale-105">
                    Projects
                </a>
                <a href="#contact" className="text-slate-700 hover:text-cyan-600 transition hover:scale-105">
                    Contact
                </a>
            </nav>

            {/* Right Side Nav (Download CV) */}
            <nav
                className="
                    flex items-center gap-2 sm:gap-3 text-sm
                    order-2 sm:order-none
                "
            >
                {/* Download CV Button: Gradient maintained for prominence, text color remains dark */}
                <motion.a
                    href={cvDownloadLink}
                    download
                    className="flex items-center gap-1 sm:gap-2 px-4 py-2
                        rounded-full bg-gradient-to-r from-blue-600 to-purple-600
                        text-white font-bold shadow-lg hover:shadow-cyan-400/50 transition-all"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaFileDownload className="text-lg" />
                    <span className="hidden sm:block">Download CV</span>
                </motion.a>
            </nav>
        </div>
    </motion.header>
  );
}