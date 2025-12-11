import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const PROJECTS = [
  {
    _id: "p1",
    title: "Financial Management Apps",
    desc: "A fully functional MERN stack e-commerce platform featuring secure payment processing, user authentication, cart management, and admin dashboard controls.",
    image: "https://i.ibb.co.com/gFjC1Rr3/finance.png",
    repo: "https://github.com/rabbiWD/Finance-Management-Apps-Client",
    live: "https://finance-management-apps-client.netlify.app/",
    tech: ["React", "Firebase", "Express", "MongoDB", "Tailwind", "Node.js"],
  },
  {
    _id: "p2",
    title: "Skill Platform",
    desc: "A responsive Kanban-style task management application built with Next.js for efficient workflow visualization, user collaboration, and data persistence.",
    image: "https://i.ibb.co.com/wq141jD/skillplatform.png",
    repo: "https://github.com/rabbiWD/Skill-Exchange-Platform",
    live: "https://skill-exchange-platform.netlify.app/",
    tech: ["React.js", "Tailwind CSS", "Firebase"],
  },
  {
    _id: "p3",
    title: "Hero App",
    desc: "A platform connecting employers and job seekers. Features dynamic job searching, filtering, and a dedicated dashboard for posting and tracking applications.",
    image: "https://i.ibb.co.com/B2wZwFcj/hero.png",
    repo: "https://github.com/rabbiWD/Hero-App",
    live: "https://heroioapp.netlify.app/",
    tech: ["React", "Tailwind", "Firebase"],
  },
];

const ProjectCard = ({ p, i }) => {
  return (
    <motion.article
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-cyan-300/50 hover:border-cyan-400"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative w-full aspect-video overflow-hidden border-b border-gray-100">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <FaCode className="text-4xl text-gray-300" />
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-bold text-2xl text-slate-800 group-hover:text-cyan-600 transition-colors">
            {p.title}
          </h4>
        </div>

        <p className="text-gray-600 text-base leading-relaxed flex-grow mb-4 line-clamp-3">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs uppercase tracking-wider font-bold text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full shadow-sm"
            >
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span className="text-xs text-gray-500 px-3 py-1">
              + {p.tech.length - 4} More
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
          <motion.a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-slate-800 transition-colors group/link font-medium"
            whileHover={{ x: 3 }}
          >
            <FaGithub className="text-xl group-hover/link:text-cyan-600 transition-colors" />{" "}
            View Code
          </motion.a>

          <div className="flex-grow"></div>

          <motion.a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-cyan-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  const projects = PROJECTS;

  return (
    <section id="projects" className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800">
            Featured Works
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            A collection of my recent full-stack projects using the MERN stack and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <AnimatePresence>
            {projects.length > 0 ? (
              projects.map((p, i) => (
                <ProjectCard key={p._id || p.title} p={p} i={i} />
              ))
            ) : (
              <div className="md:col-span-3 text-center py-20 text-gray-500">
                <p>No projects data available locally.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}