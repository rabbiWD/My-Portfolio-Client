import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import SmoothScroll from "./components/SmoothScroll";


export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth gradient transitions without overflow
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(135deg, #0f172a, #1e293b, #0d9488)",
      "linear-gradient(135deg, #0f172a, #0d9488, #1e40af)",
      "linear-gradient(135deg, #1e293b, #0f172a, #0891b2)",
    ]
  );

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen text-slate-100 antialiased overflow-x-hidden bg-[#030712]">
      
      {/*  Smooth Scroll (Lenis) */}
      <SmoothScroll />

      {/*  Fixed Blue-Black Ambient Glow Background */}
      <div className="fixed inset-0 -z-10 bg-[#030712] overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[35rem] h-[35rem] bg-blue-700/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] bg-cyan-600/15 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-10 left-1/4 w-[32rem] h-[32rem] bg-indigo-700/20 rounded-full blur-[110px]"></div>
      </div>

      <Header />


      <motion.main
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        // className="space-y-0 md:space-y-0"
      >
        {/* Hero */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Hero />
        </motion.div>

        {/* About */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Experience />
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
      </motion.main>

      <Footer />

      {/* ⬆ Scroll-To-Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 md:p-4 rounded-full 
              bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 shadow-lg 
              hover:scale-110 transition"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
