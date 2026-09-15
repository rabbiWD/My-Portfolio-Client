import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileDownload,
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const cvDownloadLink = "../../Rabbi Resume FullStack.pdf";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: FaHome },
    { name: "About", href: "#about", id: "about", icon: FaUser },
    { name: "Experience", href: "#experience", id: "experience", icon: FaBriefcase },
    { name: "Skills", href: "#skills", id: "skills", icon: FaCode },
    { name: "Projects", href: "#projects", id: "projects", icon: FaFolderOpen },
    { name: "Contact", href: "#contact", id: "contact", icon: FaEnvelope },
  ];

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8
        ${scrolled ? "py-3" : "py-4 sm:py-5"}
      `}
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Glass Container */}
      <div
        className={`
          relative max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300
          bg-[#060e26]/95 backdrop-blur-xl border border-blue-600/40 overflow-hidden
          ${
            scrolled
              ? "shadow-[0_12px_40px_rgba(2,8,25,0.95)] border-blue-500/50 px-5 sm:px-7 py-2.5 sm:py-3"
              : "shadow-[0_8px_30px_rgba(2,8,25,0.85)] px-5 sm:px-8 py-3 sm:py-3.5"
          }
          flex items-center justify-between gap-4
        `}
      >
        {/* Futuristic Glowing Top Edge Beam */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"></div>

        {/* Brand / Logo (Matched to Site's Cyan & Blue-Black UI Palette) */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          {/* Cyan/Blue Squircle Icon Box with </> */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/30 border border-cyan-400/40 flex items-center justify-center font-mono font-extrabold text-white text-lg sm:text-xl group-hover:scale-105 group-hover:shadow-cyan-400/50 transition-all duration-300">
            &lt;/&gt;
          </div>

          {/* Name & Subtitle */}
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors duration-300">
              RABBI KHAN
            </span>
            <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wide -mt-0.5">
              MERN Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#03091b]/95 p-1.5 rounded-full border border-blue-900/60 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`
                  relative px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 flex items-center gap-2 z-10
                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-blue-950/50"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-[0_0_18px_rgba(6,182,212,0.45)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`text-sm ${isActive ? "text-cyan-200" : "text-slate-400"}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-3">
          <motion.a
            href={cvDownloadLink}
            download
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.55)] border border-cyan-400/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer Overlay */}
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
            <FaFileDownload className="text-sm text-cyan-100" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </motion.a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-blue-950/80 text-cyan-400 border border-blue-800 hover:bg-blue-900 transition shadow-md"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden max-w-7xl mx-auto mt-2 bg-[#060e26]/95 backdrop-blur-xl border border-blue-600/40 rounded-2xl p-4 shadow-2xl space-y-1.5"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all
                    ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-cyan-300"
                    }
                  `}
                >
                  <Icon className="text-base" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}