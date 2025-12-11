import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa"; // Added WhatsApp and Facebook

export default function Footer() {
  const whatsappNumber = "+8801824903989"; // আপনার WhatsApp নম্বর দিন
  const facebookUrl = "https://www.facebook.com/abir.khan.rabby.589376/"; // আপনার Facebook প্রোফাইল URL দিন

  return (
    <motion.footer
      // New light theme design
      className="bg-gray-50 border-t border-gray-200 mt-24 py-10 sm:py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
        
        {/* Social Icons (New Look) */}
        <div className="flex justify-center gap-6 text-2xl">
          {/* Email */}
          <motion.a
            href="mailto:krabby2244@gmail.com"
            whileHover={{ scale: 1.3, color: "#EA4335" }} // Red accent
            className="text-gray-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/rabbiWD"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3, color: "#171515" }} // Dark accent
            className="text-gray-500 transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
          
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/rabbikhan19/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3, color: "#0A66C2" }} // LinkedIn Blue
            className="text-gray-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          
          
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3, color: "#25D366" }} // WhatsApp Green
            className="text-gray-500 transition-colors duration-300"
          >
            <FaWhatsapp />
          </motion.a>

          
          <motion.a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3, color: "#1877F2" }} // Facebook Blue
            className="text-gray-500 transition-colors duration-300"
          >
            <FaFacebook />
          </motion.a>

        </div>

        {/* Copyright and Info */}
        <p className="text-base font-semibold text-slate-700">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Rabbi Khan
          </span>
        </p>
        <p className="text-sm text-gray-600">
          MERN Stack Web Developer — Building fast, modern, and scalable web solutions.
        </p>
        <p className="text-xs pt-2 text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </motion.footer>
  );
}