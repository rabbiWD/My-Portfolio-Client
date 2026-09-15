import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaInfoCircle,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";

const PROJECTS = [
  {
    _id: "p1",
    title: "Web Zen Platform",
    category: "MERN Stack",
    desc: "A fully functional MERN stack e-commerce & agency platform featuring secure payment processing, user authentication, cart management, and admin dashboard controls.",
    fullDesc:
      "Web Zen Platform is an enterprise-ready full-stack application built to deliver a seamless shopping and administrative experience. It incorporates robust JWT security, real-time cart state management, and an interactive admin portal for managing products, orders, and user permissions.",
    features: [
      "Secure Stripe/Payment Gateway Integration",
      "Comprehensive Admin Dashboard for Inventory & Sales",
      "Role-Based Access Control (Admin vs Customer)",
      "Real-time Cart Management with Instant Price Sync",
      "Firebase & Custom JWT Authentication",
    ],
    image: "https://i.ibb.co.com/SX2RR5g7/webzen.png",
    repo: "https://github.com/rabbiWD/Web-Zen",
    live: "https://web-zen-client.vercel.app/",
    tech: ["Next.js", "Firebase", "Express.js", "MongoDB", "Tailwind CSS", "Node.js"],
  },
  {
    _id: "p2",
    title: "Financial Management Apps",
    category: "MERN Stack",
    desc: "A web app for tracking personal finances, managing monthly budgets, visualizing expense charts, and monitoring transaction histories.",
    fullDesc:
      "Financial Management App simplifies monetary tracking for users by providing dynamic income/expense analytics, budget goal setting, and detailed monthly transaction summaries rendered with intuitive visualization charts.",
    features: [
      "Dynamic Expense & Income Analytics Charts",
      "Monthly Budget Goal Tracking & Alerts",
      "Categorized Transaction Logging & Filtering",
      "Secure Firebase User Authentication",
      "MongoDB Backend with Aggregation Queries",
    ],
    image: "https://i.ibb.co.com/gFjC1Rr3/finance.png",
    repo: "https://github.com/rabbiWD/Finance-Management-Apps-Client",
    live: "https://finance-management-apps-client.netlify.app/",
    tech: ["React", "Firebase", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js"],
  },
  {
    _id: "p3",
    title: "Skill Platform",
    category: "Next.js / Frontend",
    desc: "A responsive skill-sharing & task collaboration platform built for efficient workflow visualization, user collaboration, and skill exchange.",
    fullDesc:
      "Skill Platform connects individuals seeking to exchange knowledge and collaborate on tasks. Features include a Kanban-style task workflow board, skill search filters, and profile showcases.",
    features: [
      "Interactive Kanban Task Board for Workflow Management",
      "Category-based Skill Search & Filter Engine",
      "User Profile Skill Showcase & Ratings",
      "Responsive Layout with Smooth Animations",
      "Real-time Local & Cloud Data Sync",
    ],
    image: "https://i.ibb.co.com/wq141jD/skillplatform.png",
    repo: "https://github.com/rabbiWD/Skill-Exchange-Platform",
    live: "https://skill-exchange-platform.netlify.app/",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Framer Motion"],
  },
  {
    _id: "p4",
    title: "Hero Job Portal App",
    category: "Full Stack",
    desc: "A platform connecting employers and job seekers with dynamic job searching, filtering, applicant dashboards, and instant application tracking.",
    fullDesc:
      "Hero Job Portal App simplifies the recruitment lifecycle. Job seekers can browse verified listings, filter by salary/location, and submit applications, while employers manage posted jobs and candidate applications.",
    features: [
      "Advanced Job Search & Location/Salary Filter",
      "Employer Dashboard for Job Postings & Management",
      "Applicant Status Tracking (Applied, Reviewed, Hired)",
      "Secure JWT User Authentication",
      "Responsive Glassmorphic UI Design",
    ],
    image: "https://i.ibb.co.com/B2wZwFcj/hero.png",
    repo: "https://github.com/rabbiWD/Hero-App",
    live: "https://heroioapp.netlify.app/",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],
  },
];

const CATEGORIES = ["All", "MERN Stack", "Next.js / Frontend", "Full Stack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-32 text-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            My Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            A curated list of modern full-stack web applications, MERN platforms, and client solutions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border
                  ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/25"
                      : "bg-[#0f172a]/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-cyan-400"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <motion.article
                layout
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col h-full bg-[#070e24]/85 border border-blue-900/40 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)]"
              >
                {/* Image & Badge */}
                <div className="relative w-full aspect-video overflow-hidden border-b border-slate-800/80 bg-slate-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#0a0f1d]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-300 border border-cyan-500/30">
                    {p.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h4 className="font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {p.title}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-5 line-clamp-3">
                    {p.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/20 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="text-xs text-slate-400 px-2 py-1">
                        +{p.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Links & Details Button */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 mt-auto">
                    <button
                      onClick={() => setActiveModalProject(p)}
                      className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-slate-800/80 hover:bg-slate-700 px-3.5 py-2 rounded-xl transition border border-slate-700 hover:border-cyan-500/40"
                    >
                      <FaInfoCircle className="text-sm" />
                      Details
                    </button>

                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition border border-slate-700"
                      title="View Source Code"
                    >
                      <FaGithub className="text-base" />
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-4 py-2 rounded-xl shadow-lg transition"
                    >
                      Live Site <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#0f172a] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition border border-slate-700"
              >
                <FaTimes className="text-lg" />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-video w-full max-h-72 overflow-hidden bg-slate-900">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {activeModalProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.fullDesc || activeModalProject.desc}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                {activeModalProject.features && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <FaLayerGroup /> Key Highlights & Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalProject.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800 text-xs sm:text-sm text-slate-300"
                        >
                          <FaCheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Grid */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Tech Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-semibold text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={activeModalProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-xl border border-slate-700 transition"
                >
                  <FaGithub className="text-lg" /> Source Code
                </a>

                <a
                  href={activeModalProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 px-6 py-2.5 rounded-xl shadow-lg transition"
                >
                  Live Preview <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}