import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaCertificate,
  FaSpinner,
  FaBuilding,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("All");

  const timelineItems = [
    {
      id: 1,
      category: "Work Experience",
      title: "Frontend Developer",
      organization: "Akaar IT (Amar Solution)",
      period: "6 Months",
      type: "Full-Time Job",
      status: "Completed",
      icon: FaBriefcase,
      accentGlow: "from-cyan-500 via-blue-500 to-indigo-500",
      nodeBorder: "border-cyan-400 text-cyan-300 shadow-cyan-500/60 bg-[#06112a]",
      cardBorder: "hover:border-cyan-400/60 hover:shadow-[0_10px_35px_rgba(6,182,212,0.25)]",
      badgeStyle: "bg-cyan-950/90 text-cyan-300 border-cyan-500/40",
      topLineGradient: "from-transparent via-cyan-400 to-transparent",
      description:
        "Engineered enterprise-level ERP (Enterprise Resource Planning) solutions and client management platforms using modern JavaScript technologies.",
      highlights: [
        "Architected scalable frontend modules using React, Next.js, and TypeScript for ERP software.",
        "Utilized RTK Query for high-performance API integration, state management, and real-time caching.",
        "Implemented strict type safety and schema validations using Zod for complex enterprise forms.",
        "Collaborated closely with cross-functional engineering teams to integrate backend RESTful services.",
      ],
      skills: ["React.js", "Next.js", "TypeScript", "RTK Query", "Zod", "ERP Software", "Tailwind CSS"],
    },
    {
      id: 2,
      category: "Training & Education",
      title: "Next Level AI-Driven Software Engineering",
      organization: "Programming Hero",
      period: "2024 - Present",
      type: "Advanced Track",
      status: "Currently Pursuing (Ongoing)",
      ongoing: true,
      icon: FaGraduationCap,
      accentGlow: "from-amber-500 via-orange-500 to-red-500",
      nodeBorder: "border-amber-400 text-amber-300 shadow-amber-500/60 bg-[#1c1204]",
      cardBorder: "hover:border-amber-400/60 hover:shadow-[0_10px_35px_rgba(245,158,11,0.25)]",
      badgeStyle: "bg-amber-950/90 text-amber-300 border-amber-500/40",
      topLineGradient: "from-transparent via-amber-400 to-transparent",
      description:
        "Advanced software engineering curriculum focusing on enterprise system design, modern full-stack architectures, and AI-assisted developer workflows.",
      highlights: [
        "Deep diving into microservices, system design patterns, and clean code practices.",
        "Building production-grade applications with advanced TypeScript, Next.js App Router, and cloud tools.",
      ],
      skills: ["System Design", "Microservices", "Advanced TypeScript", "AI Workflows", "Next.js"],
    },
    {
      id: 3,
      category: "Training & Education",
      title: "Full Stack Web Development (MERN)",
      organization: "Ostad",
      period: "2023 - 2024",
      type: "Professional Certification",
      status: "Completed",
      ongoing: false,
      icon: FaCertificate,
      accentGlow: "from-emerald-500 via-teal-500 to-cyan-500",
      nodeBorder: "border-emerald-400 text-emerald-300 shadow-emerald-500/60 bg-[#041a14]",
      cardBorder: "hover:border-emerald-400/60 hover:shadow-[0_10px_35px_rgba(16,185,129,0.25)]",
      badgeStyle: "bg-emerald-950/90 text-emerald-300 border-emerald-500/40",
      topLineGradient: "from-transparent via-emerald-400 to-transparent",
      description:
        "In-depth professional training covering full-stack MERN (MongoDB, Express.js, React.js, Node.js), API design, authentication, and cloud deployment.",
      highlights: [
        "Mastered RESTful API engineering, JWT auth flow, and Express middleware architecture.",
        "Designed relational & non-relational database models with MongoDB and PostgreSQL.",
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
    },
    {
      id: 4,
      category: "Training & Education",
      title: "Complete Web Development Course",
      organization: "Programming Hero",
      period: "2023",
      type: "Core Development",
      status: "Completed",
      ongoing: false,
      icon: FaLaptopCode,
      accentGlow: "from-purple-500 via-fuchsia-500 to-indigo-500",
      nodeBorder: "border-purple-400 text-purple-300 shadow-purple-500/60 bg-[#160628]",
      cardBorder: "hover:border-purple-400/60 hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)]",
      badgeStyle: "bg-purple-950/90 text-purple-300 border-purple-500/40",
      topLineGradient: "from-transparent via-purple-400 to-transparent",
      description:
        "Comprehensive core web development program covering HTML5, CSS3, JavaScript (ES6+), React, Firebase, Node.js, Express, and MongoDB.",
      highlights: [
        "Built over 12+ real-world responsive web projects from scratch.",
        "Mastered Git version control, GitHub workflows, and Vercel/Netlify cloud deployments.",
      ],
      skills: ["JavaScript ES6+", "React.js", "Firebase", "HTML5/CSS3", "Git & GitHub"],
    },
  ];

  const filteredItems =
    activeTab === "All"
      ? timelineItems
      : timelineItems.filter((item) => item.category === activeTab);

  return (
    <section id="experience" className="py-20 sm:py-32 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#060e26]/90 border border-blue-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
            Professional Roadmap
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Experience & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Training Timeline</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            An interactive chronological timeline highlighting my software development roles, industry accomplishments, and specialized engineering training.
          </p>
        </motion.div>

        {/* Timeline Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {["All", "Work Experience", "Training & Education"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer flex items-center gap-2
                  ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105"
                      : "bg-[#0b0e1b]/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-cyan-400"
                  }
                `}
              >
                {tab === "Work Experience" && <FaBriefcase className="text-xs" />}
                {tab === "Training & Education" && <FaGraduationCap className="text-xs" />}
                {tab === "All" && <FaLayerGroup className="text-xs" />}
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Alternating Center Timeline Tree Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Glowing Center Vertical Axis Line (Desktop: Centered, Mobile: Left side) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 via-amber-500 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] -translate-x-1/2"></div>

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative flex flex-col md:flex-row items-center group"
                  >
                    {/* Glowing Central Timeline Node Circle */}
                    <div className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-125 z-20 ${item.nodeBorder}`}>
                      <Icon className="text-base sm:text-lg" />
                    </div>

                    {/* Timeline Card Container (Alternating Left/Right on Desktop, Stacked on Mobile) */}
                    <div
                      className={`w-full pl-12 md:pl-0 ${
                        isEven
                          ? "md:w-1/2 md:pr-12 md:mr-auto"
                          : "md:w-1/2 md:pl-12 md:ml-auto"
                      }`}
                    >
                      <div className={`relative p-6 sm:p-8 rounded-3xl bg-[#070c1e]/95 border border-slate-800/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${item.cardBorder}`}>
                        
                        {/* Glowing Top Beam */}
                        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.topLineGradient}`}></div>

                        {/* Top Metadata Row: Category & Period */}
                        <div className="flex flex-wrap justify-between items-start gap-2.5 mb-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeStyle}`}>
                              {item.category}
                            </span>
                            <span className="text-xs text-slate-400 font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800">
                              {item.type}
                            </span>
                          </div>

                          {/* Period / Status Tag */}
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030816] border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-sm">
                              <FaCalendarAlt className="text-xs text-cyan-400" />
                              <span>{item.period}</span>
                            </span>
                            {item.ongoing && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 text-[11px] font-bold shadow-sm">
                                <FaSpinner className="animate-spin text-[10px]" /> Ongoing
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Role / Certification Title */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>

                        {/* Organization Name */}
                        <p className="text-cyan-400 font-bold text-sm sm:text-base mb-4 flex items-center gap-2">
                          <FaBuilding className="text-blue-400 text-xs sm:text-sm" />
                          <span>{item.organization}</span>
                        </p>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Key Accomplishments / Highlights */}
                        {item.highlights && (
                          <div className="space-y-2 mb-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                              <FaRocket className="text-cyan-400 text-xs" /> Key Highlights & Impact:
                            </h4>
                            {item.highlights.map((h, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Stack Chips */}
                        {item.skills && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                            {item.skills.map((s) => (
                              <span
                                key={s}
                                className="px-3 py-1 rounded-xl bg-[#03091b] text-cyan-300 text-xs font-semibold border border-cyan-500/30 hover:border-cyan-400/60 transition-colors"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
