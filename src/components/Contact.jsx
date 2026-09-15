import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaPhoneAlt,
} from 'react-icons/fa';

const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID || import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY || import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const OWNER_TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_OWNER_TEMPLATE_ID || import.meta.env.REACT_APP_EMAILJS_OWNER_TEMPLATE_ID;
const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID || import.meta.env.REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    if (!SERVICE_ID || !PUBLIC_KEY || !OWNER_TEMPLATE_ID || !AUTO_REPLY_TEMPLATE_ID) {
      console.error("EmailJS credentials missing in environment.");
      setStatus('error');
      setTimeout(() => setStatus(''), 7000);
      return;
    }

    const templateParams = { ...formData };

    try {
      await emailjs.send(
        SERVICE_ID,
        OWNER_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 7000);
    }
  };

  const handleEmailClick = () =>
    (window.location.href = 'mailto:krabby2244@gmail.com');
  const handleLocationClick = () =>
    window.open(
      'https://maps.google.com/?cid=2611912027865683040', 
      '_blank'
    );

  return (
    <section id="contact" className="py-20 sm:py-32 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Contact Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let's Connect & Collaborate
            </h3>
            <p className="text-slate-300 leading-relaxed border-l-4 border-cyan-500 pl-4 text-base">
              I am currently available for full-stack engineering roles, freelance projects, and remote engineering opportunities. Send me a message and I will reply within 24 hours!
            </p>

            <div className="space-y-5 pt-2">
              {/* Email Card */}
              <motion.div
                whileHover={{ x: 5 }}
                onClick={handleEmailClick}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 hover:border-cyan-500/40 shadow-xl cursor-pointer backdrop-blur-md transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-500/30 flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                    krabby2244@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Call Card */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 hover:border-emerald-500/40 shadow-xl backdrop-blur-md transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-950 text-emerald-400 rounded-xl border border-emerald-500/30 flex-shrink-0">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+8801824903989"
                    className="font-bold text-lg text-white hover:text-emerald-300 transition-colors"
                  >
                    +880 1824-903989
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ x: 5 }}
                onClick={handleLocationClick}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 hover:border-purple-500/40 shadow-xl cursor-pointer backdrop-blur-md transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-950 text-purple-400 rounded-xl border border-purple-500/30 flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Location
                  </p>
                  <p className="font-bold text-lg text-white hover:text-purple-300 transition-colors">
                    Azimpur, Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#0f172a]/80 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-extrabold text-white mb-2">Send Me a Message</h3>

            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 px-6 font-bold text-base rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider ${
                status === 'sending'
                  ? 'bg-slate-700 cursor-not-allowed text-slate-400'
                  : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-cyan-950'
              }`}
            >
              {status === 'sending' ? (
                <>
                  <FaPaperPlane className="animate-pulse" /> Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-center font-semibold flex items-center justify-center gap-2 mt-4 text-sm">
                <FaCheckCircle /> Your message has been sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center font-semibold flex items-center justify-center gap-2 mt-4 text-sm">
                <FaTimesCircle /> Failed to send message. Please check EmailJS setup or try again.
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;