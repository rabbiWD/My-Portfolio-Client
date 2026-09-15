import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaArrowRight,
  FaCode,
  FaShieldAlt,
  FaBriefcase,
} from "react-icons/fa";
import photo from "../assets/Rabbi.jpg";

// Interactive Particle & Constellation Canvas Animation Component (Subtle Dark Mode)
const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const parent = canvas.parentElement;
    let width = (canvas.width = parent.offsetWidth);
    let height = (canvas.height = parent.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: null, y: null, radius: 170 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    // Particle pool setup with subtle, elegant dark theme colors
    const particleCount = Math.min(Math.floor((width * height) / 16000), 55);
    const particles = [];
    const colors = ["#38bdf8", "#818cf8", "#c084fc", "#34d399"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.8 + 1.0,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Particles & Constellation Lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Render dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 120) * 0.18;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor position
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = "#38bdf8";
            ctx.globalAlpha = (1 - mdist / mouse.radius) * 0.35;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};

export default function Hero() {
  const whatsappNumber = "+8801824903989";
  const linkedInUrl = "https://www.linkedin.com/in/rabbikhan19/";
  const githubUrl = "https://github.com/rabbiWD";
  const emailAddress = "krabby2244@gmail.com";

  return (
    <section
      id="home"
      className="relative text-slate-100 min-h-screen w-full pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#030712]"
    >
      {/* High-Tech Subtle Dark Grid Pattern Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#38bdf812_1px,transparent_1px),linear-gradient(to_bottom,#38bdf812_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_75%,transparent_100%)] pointer-events-none"></div>

      {/* Interactive Particle & Constellation Canvas */}
      <HeroCanvas />

      {/* Soft Dark Glowing Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-[32rem] h-[32rem] bg-purple-600/08 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Centered Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#060e26]/90 border border-blue-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Open for Full-Time Roles & Freelance Projects</span>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-slate-300 mb-2 tracking-wide">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-extrabold">Rabbi Khan</span>
          </p>

          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[2.2rem] xl:text-4xl font-extrabold leading-tight text-white min-h-[44px] sm:min-h-[56px] flex items-center whitespace-nowrap">
            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer",
                1800,
                "Next.js & React Architect",
                1800,
                "Scalable Web App Developer",
                1800,
                "Full-Stack Architect",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap inline-block"
            />
          </h1>

          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            A results-driven <strong className="text-cyan-300 font-bold">Full-Stack Web Developer</strong> specializing in crafting modern web solutions from initial concept to cloud deployment. I transform complex ideas into secure, scalable, and responsive digital products.
          </p>

          {/* Quick Highlights Micro Row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#060e26]/90 border border-blue-900/50 text-slate-300 shadow-md">
              <FaCode className="text-cyan-400" /> Full-Stack & Next.js Specialist
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#060e26]/90 border border-blue-900/50 text-slate-300 shadow-md">
              <FaBriefcase className="text-blue-400" /> 15+ Projects Delivered
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#060e26]/90 border border-blue-900/50 text-slate-300 shadow-md">
              <FaShieldAlt className="text-emerald-400" /> Clean Code & REST APIs
            </span>
          </div>

          {/* Action CTAs & Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border border-cyan-400/40 flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <span>Explore Featured Works</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="px-6 py-3.5 rounded-full bg-[#060e26]/90 hover:bg-[#0c1840] text-slate-200 font-bold text-sm sm:text-base border border-blue-800/80 hover:border-cyan-400/60 transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 ml-2 border-l border-blue-900/60 pl-4 py-1">
              <motion.a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#060e26]/90 text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-blue-900/80 shadow-md"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>

              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#060e26]/90 text-slate-200 hover:text-white hover:bg-slate-700 transition-all duration-300 border border-blue-900/80 shadow-md"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="GitHub Repositories"
              >
                <FaGithub className="text-lg" />
              </motion.a>

              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#060e26]/90 text-emerald-400 hover:text-white hover:bg-emerald-600 transition-all duration-300 border border-blue-900/80 shadow-md"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="Contact via WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Fully Rounded Avatar with Orbital Ring & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
            
            {/* Soft Ambient Glowing Blur Halo */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-indigo-600/25 blur-3xl opacity-75"></div>

            {/* Animated Spinning Dashed Outer Orbit */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/30 animate-[spin_30s_linear_infinite]"></div>

            {/* Fully Rounded Picture Frame Container */}
            <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-br from-cyan-400/80 via-blue-600/80 to-indigo-600/80 shadow-[0_0_35px_rgba(37,99,235,0.35)] transition-transform duration-500 hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#030712] bg-[#030712] shadow-inner">
                <img
                  src={photo}
                  alt="Rabbi Khan Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Pill Badge 1 (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-2 -left-2 sm:top-2 sm:left-0 bg-[#060e26]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-bold text-cyan-300 border border-blue-500/30 flex items-center gap-2"
            >
              <FaCode className="text-cyan-400 text-sm" />
              <span>React & Next.js Expert</span>
            </motion.div>

            {/* Floating Pill Badge 2 (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-2 bg-[#060e26]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-bold text-emerald-300 border border-blue-500/30 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Full-Stack Architect</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}