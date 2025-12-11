import React from "react";
import { motion } from "framer-motion";

// ---- FA Icons ----
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

// ---- SI Icons ----
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
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { TbBellRinging } from "react-icons/tb";

export default function Skills() {
  const skills = [
    // ---------- Frontend ----------
    { name: "React.js", icon: <FaReact className="text-sky-500" />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-slate-800" />, category: "Frontend" },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-600" />, category: "Frontend" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, category: "Frontend" },
    
    // ---------- Backend & Database ----------
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress className="text-slate-800" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "Database" },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-red-500" />, category: "Backend" },
    
    // ---------- Tools & Platforms ----------
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" />, category: "Tools" },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, category: "Tools" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "Tools" },
    { name: "Axios", icon: <SiAxios className="text-blue-500" />, category: "Utilities" },
    { name: "Figma", icon: <FaFigma className="text-pink-600" />, category: "Tools" },

    // ---------- Libraries & Utilities ----------
    { name: "TanStack Query", icon: <SiReactquery className="text-red-500" />, category: "Utilities" },
    { name: "GSAP", icon: <SiGreensock className="text-green-500" />, category: "Utilities" },
    
    // ---------- Soft Skills (Styling changed for lighter BG) ----------
    { name: "Problem Solving", icon: <span className="text-slate-700 text-3xl">🧩</span>, category: "Soft Skills" },
    { name: "Communication", icon: <span className="text-slate-700 text-3xl">💬</span>, category: "Soft Skills" },
    { name: "Teamwork", icon: <span className="text-slate-700 text-3xl">🤝</span>, category: "Soft Skills" },
  ];

  // Group skills by category
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="bg-white text-slate-800 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-800">
            Technical Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tools, technologies, and core competencies I utilize to build modern web solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        {Object.keys(categorizedSkills).map(category => (
          <div key={category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-2xl font-bold mb-6 border-l-4 border-cyan-500 pl-3 text-slate-700 inline-block"
            >
              {category}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {categorizedSkills[category].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
                  className="bg-white rounded-xl p-5 flex flex-col items-center justify-center shadow-lg border border-gray-100 transition-all duration-300 transform"
                >
                  {/* Icon */}
                  <div className="text-4xl mb-2">
                    {skill.icon}
                  </div>
                  {/* Name */}
                  <p className="text-sm font-semibold text-slate-700 text-center">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}