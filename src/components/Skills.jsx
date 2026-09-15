import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiReactquery,
  SiJsonwebtokens,
  SiAxios,
  SiGreensock,
  SiZod,
  SiTypescript,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    // Frontend
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, percentage: 85, category: "Frontend" },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" />, percentage: 98, category: "Frontend" },
    { name: "React.js", icon: <FaReact className="text-sky-400" />, percentage: 86, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, percentage: 90, category: "Frontend" },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" />, percentage: 78, category: "Frontend" },
    { name: "React Router", icon: <SiReactrouter className="text-red-500" />, percentage: 87, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, percentage: 76, category: "Frontend" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, percentage: 88, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, percentage: 78, category: "Frontend" },
    { name: "TanStack Query", icon: <SiReactquery className="text-red-400" />, percentage: 65, category: "Frontend" },
    { name: "Zod Validation", icon: <SiZod className="text-indigo-400" />, percentage: 82, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: <FaNodeJs className="text-emerald-400" />, percentage: 88, category: "Backend" },
    { name: "Express.js", icon: <SiExpress className="text-slate-200" />, percentage: 90, category: "Backend" },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-400" />, percentage: 85, category: "Backend" },

    // Database
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" />, percentage: 86, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, percentage: 78, category: "Database" },

    // Tools
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" />, percentage: 92, category: "Tools" },
    { name: "Postman", icon: <SiPostman className="text-orange-400" />, percentage: 88, category: "Tools" },
    { name: "Firebase", icon: <SiFirebase className="text-amber-400" />, percentage: 82, category: "Tools" },
    { name: "Figma", icon: <FaFigma className="text-purple-400" />, percentage: 75, category: "Tools" },

    // Utilities
    { name: "Axios", icon: <SiAxios className="text-blue-400" />, percentage: 92, category: "Utilities" },
    { name: "GSAP Animations", icon: <SiGreensock className="text-emerald-400" />, percentage: 70, category: "Utilities" },

    // Soft Skills
    { name: "Problem Solving", icon: <span className="text-2xl">🧩</span>, percentage: 90, category: "Soft Skills" },
    { name: "Communication", icon: <span className="text-2xl">💬</span>, percentage: 88, category: "Soft Skills" },
    { name: "Team Collaboration", icon: <span className="text-2xl">🤝</span>, percentage: 92, category: "Soft Skills" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Utilities", "Soft Skills"];

  const categoryTitles = {
    Frontend: "Frontend Development",
    Backend: "Backend Development",
    Database: "Database & Storage",
    Tools: "Tools & Ecosystem",
    Utilities: "Utilities & Libraries",
    "Soft Skills": "Soft Skills & Aptitude",
  };

  const activeCategoriesToDisplay =
    activeCategory === "All"
      ? ["Frontend", "Backend", "Database", "Tools", "Utilities", "Soft Skills"]
      : [activeCategory];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-32 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Core Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Technologies, frameworks, and tools I master to build performant, scalable applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer
                  ${
                    isActive
                      ? "bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-500/25"
                      : "bg-[#0b0e1b]/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-purple-400"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Displayed by Category Groups */}
        <div className="space-y-12">
          {activeCategoriesToDisplay.map((catKey) => {
            const catSkills = skills.filter((s) => s.category === catKey);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Category Header with Accent Dash */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-[4px] bg-purple-500 rounded-full inline-block"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {categoryTitles[catKey] || catKey}
                  </h3>
                </div>

                {/* Grid of Skill Cards */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
                >
                  <AnimatePresence mode="wait">
                    {catSkills.map((skill) => (
                      <motion.div
                        layout
                        key={skill.name}
                        variants={itemVariants}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="bg-[#0c0f1d] border border-slate-800/80 hover:border-purple-500/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between shadow-xl backdrop-blur-md transition-all duration-300 group"
                      >
                        {/* Icon Container */}
                        <div className="w-14 h-14 bg-[#141829] rounded-2xl border border-slate-800 flex items-center justify-center text-3xl mb-3 group-hover:scale-105 group-hover:border-purple-500/40 transition-all duration-300 shadow-inner">
                          {skill.icon}
                        </div>

                        {/* Skill Title */}
                        <p className="text-xs sm:text-sm font-semibold text-slate-100 text-center mb-4 min-h-[32px] flex items-center justify-center leading-tight group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </p>

                        {/* Progress Bar & Percentage */}
                        <div className="w-full">
                          {/* Progress Track */}
                          <div className="w-full bg-[#181d33] h-1.5 rounded-full overflow-hidden mb-2 relative">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                              className="h-full bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                            />
                          </div>

                          {/* Percentage Label */}
                          <div className="text-center">
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-400 tracking-wide">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}