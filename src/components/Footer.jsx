import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "+8801824903989";
  const facebookUrl = "https://www.facebook.com/abir.khan.rabby.589376/";

  return (
    <motion.footer
      className="bg-[#060a12] border-t border-slate-800/80 py-12 text-slate-300 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1440px] mx-auto px-6 text-center space-y-6">
        
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-5 text-xl">
          <motion.a
            href="mailto:krabby2244@gmail.com"
            whileHover={{ scale: 1.25, y: -3 }}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-all shadow-md"
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://github.com/rabbiWD"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -3 }}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rabbikhan19/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -3 }}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-md"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -3 }}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all shadow-md"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>

          <motion.a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -3 }}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500/40 transition-all shadow-md"
            aria-label="Facebook"
          >
            <FaFacebook />
          </motion.a>
        </div>

        {/* Brand & Description */}
        <div className="space-y-1">
          <p className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Rabbi Khan
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            MERN Stack Web Developer — Crafting scalable, modern, & responsive digital applications.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-900/90 text-xs text-slate-500">
          © {new Date().getFullYear()} Rabbi Khan. All rights reserved.
        </div>

      </div>
    </motion.footer>
  );
}