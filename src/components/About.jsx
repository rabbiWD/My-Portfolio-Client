import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaProjectDiagram,
  FaHourglassHalf,
  FaCheckCircle,
  FaDatabase,
  FaServer,
  FaBolt,
  FaTachometerAlt,
  FaAward,
  FaGraduationCap,
  FaUserCheck,
  FaBullseye,
} from "react-icons/fa";

const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const endNumber = parseFloat(endValue.replace("+", ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentCount = Math.floor(percentage * endNumber);

            setCount(currentCount);

            if (progress < duration) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(endNumber);
            }
          };
          requestAnimationFrame(animateCount);
          if (counterRef.current) observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [endNumber, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {endValue.includes("+") ? "+" : ""}
    </span>
  );
};

export default function About() {
  const techStack = [
    { name: "JavaScript", dotColor: "bg-yellow-400" },
    { name: "TypeScript", dotColor: "bg-blue-400" },
    { name: "React.js", dotColor: "bg-sky-400" },
    { name: "Next.js", dotColor: "bg-slate-100" },
    { name: "Node.js", dotColor: "bg-emerald-400" },
    { name: "Express.js", dotColor: "bg-purple-400" },
    { name: "MongoDB", dotColor: "bg-green-500" },
    { name: "PostgreSQL", dotColor: "bg-indigo-400" },
  ];

  const whatIDo = [
    {
      title: "Full-Stack Architecture",
      description:
        "Designing and building robust full-stack applications with JavaScript, TypeScript, React, Next.js, Node.js, and Express.",
      icon: FaCode,
      glow: "border-blue-500/30 text-blue-400 bg-blue-950/40",
    },
    {
      title: "Scalable Data Modeling",
      description:
        "Designing efficient database schemas with MongoDB & PostgreSQL, optimizing queries for performance and scalability.",
      icon: FaDatabase,
      glow: "border-purple-500/30 text-purple-400 bg-purple-950/40",
    },
    {
      title: "System Design & DevOps",
      description:
        "Creating future-ready, maintainable solutions with a focus on security, high availability, and cloud deployment.",
      icon: FaServer,
      glow: "border-cyan-500/30 text-cyan-400 bg-cyan-950/40",
    },
  ];

  const keyStrengths = [
    { label: "Scalable system design", icon: FaBullseye, color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30 hover:border-emerald-500/60" },
    { label: "Security-first mindset", icon: FaBolt, color: "text-amber-400 border-amber-500/30 bg-amber-950/30 hover:border-amber-500/60" },
    { label: "Advanced data modeling", icon: FaDatabase, color: "text-blue-400 border-blue-500/30 bg-blue-950/30 hover:border-blue-500/60" },
    { label: "Clean code advocate", icon: FaCode, color: "text-purple-400 border-purple-500/30 bg-purple-950/30 hover:border-purple-500/60" },
    { label: "Performance tuning", icon: FaTachometerAlt, color: "text-pink-400 border-pink-500/30 bg-pink-950/30 hover:border-pink-500/60" },
    { label: "Future-proof architecture", icon: FaAward, color: "text-orange-400 border-orange-500/30 bg-orange-950/30 hover:border-orange-500/60" },
    { label: "Continuous learning", icon: FaGraduationCap, color: "text-teal-400 border-teal-500/30 bg-teal-950/30 hover:border-teal-500/60" },
    { label: "User-centric solutions", icon: FaUserCheck, color: "text-rose-400 border-rose-500/30 bg-rose-950/30 hover:border-rose-500/60" },
  ];

  const stats = [
    {
      label: "Months of Experience",
      value: "6+",
      unit: "Months",
      icon: FaCode,
      glow: "shadow-purple-500/10 border-purple-500/30 text-purple-400 bg-[#080d22]",
    },
    {
      label: "Projects Completed",
      value: "15+",
      unit: "Projects",
      icon: FaProjectDiagram,
      glow: "shadow-cyan-500/10 border-cyan-500/30 text-cyan-400 bg-[#080d22]",
    },
    {
      label: "Coding Hours",
      value: "2000+",
      unit: "Hours",
      icon: FaHourglassHalf,
      glow: "shadow-blue-500/10 border-blue-500/30 text-blue-400 bg-[#080d22]",
    },
    {
      label: "Happy Clients",
      value: "5+",
      unit: "Clients",
      icon: FaCheckCircle,
      glow: "shadow-emerald-500/10 border-emerald-500/30 text-emerald-400 bg-[#080d22]",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[4px] bg-purple-500 rounded-full inline-block"></span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              About Me
            </h2>
          </div>
        </motion.div>

        {/* Intro Paragraph & Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14 text-slate-300 text-base sm:text-lg leading-relaxed max-w-5xl"
        >
          <p className="mb-4">
            Hi, I'm <strong className="text-white font-bold">Rabbi Khan</strong> – a passionate web developer with over <strong className="text-white font-bold">6+ months of experience</strong> building modern full-stack applications. I love transforming ideas into scalable, intelligent, and impactful digital products that solve real-world problems.
          </p>
          <p className="mb-6">
            I specialize in <strong className="text-white font-bold">designing</strong> and <strong className="text-white font-bold">building robust full-stack applications</strong>. My focus is on <strong className="text-white font-bold">system design</strong>, <strong className="text-white font-bold">backend engineering</strong>, and <strong className="text-white font-bold">DevOps</strong>, with a strong emphasis on building scalable, secure, maintainable, and future-ready solutions. Here are some of the key technologies I work with:
          </p>

          {/* Technology Chips */}
          <div className="flex flex-wrap items-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1226] border border-slate-800/80 text-slate-200 text-xs sm:text-sm font-semibold hover:border-purple-500/40 hover:text-white transition-all shadow-sm"
              >
                <span className={`w-2 h-2 rounded-full ${tech.dotColor}`}></span>
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Two-Column Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16"
        >
          {/* Left Column: What I Do */}
          <div className="bg-[#070b19]/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300">
            <div>
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-[4px] bg-cyan-500 rounded-full inline-block"></span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  What I Do
                </h3>
              </div>

              {/* What I Do Cards */}
              <div className="space-y-4">
                {whatIDo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0c1126] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4 group"
                    >
                      <div className={`p-3.5 rounded-xl border flex-shrink-0 ${item.glow} group-hover:scale-105 transition-transform`}>
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Key Strengths & Strategies */}
          <div className="bg-[#070b19]/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-[4px] bg-purple-500 rounded-full inline-block"></span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Key Strengths & Strategies
                </h3>
              </div>

              {/* 2-Column Grid of Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {keyStrengths.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border flex items-center gap-3.5 transition-all duration-300 hover:scale-[1.02] shadow-sm ${item.color}`}
                    >
                      <div className="p-2 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-base sm:text-lg" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-slate-800/60"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Key Accomplishments & Track Record
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Proven results and milestone metrics achieved across engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border shadow-xl text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${stat.glow}`}
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl mb-3 border border-slate-700/50 bg-black/40">
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    <Counter endValue={stat.value} duration={1800} />
                  </p>
                  <p className="text-xs text-slate-400 font-medium tracking-wider uppercase mb-1">
                    {stat.unit}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}