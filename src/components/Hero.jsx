import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import photo from '../assets/Rabbi.jpg';

export default function Hero() {
  const whatsappNumber = "+8801824903989";
  const linkedInUrl = "https://www.linkedin.com/in/rabbikhan19/";
  const githubUrl = "https://github.com/rabbiWD";
  const emailAddress = "krabby2244@gmail.com";

  return (
    <section 
      id="home" 
      className="
        bg-white text-slate-800 min-h-screen pt-40 pb-20
        max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center
      "
    >
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl font-medium text-cyan-600 mb-2">Hello, I am Rabbi Khan</p>
        <h2 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-tight">
          <TypeAnimation
            sequence={[
              "Building modern web apps with React and Next.js",
              1500,
              "Crafting scalable backends with Node.js & MongoDB",
              1500,
              "Designing smooth UIs with Tailwind CSS",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="mt-6 text-slate-600 max-w-xl text-lg">
          I’m a MERN Stack Web Developer focused on creating clean user
          experiences and scalable backends. Let's build something amazing together!
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-700 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="text-3xl" />
          </motion.a>
          
          <motion.a
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-900 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="text-3xl" />
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp className="text-3xl" />
          </motion.a>

          <a
            href={`mailto:${emailAddress}`}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold
                        transition transform hover:scale-105 ml-4"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/80 to-teal-500/80 blur-xl opacity-70 animate-pulse-slow"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <img
                    src={photo}
                    alt="Rabbi Khan Profile"
                    className="w-full h-full object-cover transition-all duration-500 "
                />
            </div>
            <div className="absolute bottom-5 right-5 bg-white px-3 py-1 rounded-full shadow-xl text-xs font-semibold text-cyan-600 border border-slate-200">
                MERN Stack
            </div>
        </div>
      </motion.div>

    </section>
  );
}