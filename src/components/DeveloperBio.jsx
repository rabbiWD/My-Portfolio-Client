import React from 'react';
import {
  FaUserTie,
  FaCodeBranch,
  FaLaptopHouse,
  FaBolt,
  FaCheckCircle,
} from 'react-icons/fa';

const DeveloperBio = () => (
  <div className="relative p-8 lg:p-12 bg-[#060e26]/95 rounded-3xl shadow-2xl border border-blue-600/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60">
    {/* Header */}
    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-blue-900/60">
      <div className="p-3.5 rounded-2xl bg-blue-950/90 text-cyan-400 border border-blue-500/40 shadow-md">
        <FaUserTie className="text-3xl" />
      </div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          Developer Bio & Core Philosophy
        </h3>
        <p className="text-xs sm:text-sm text-cyan-300 font-semibold tracking-wider uppercase mt-0.5">
          Engineering Scalable, User-Centric Full-Stack Solutions
        </p>
      </div>
    </div>

    {/* Philosophy Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Block 1 */}
      <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#03091b]/95 border border-blue-900/60 hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
        <div className="flex-shrink-0 p-3 rounded-xl bg-blue-950/90 text-cyan-400 border border-blue-500/40">
          <FaCodeBranch className="text-2xl" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-1.5">Full-Stack Specialization & Clean Code</h4>
          <p className="text-slate-300 leading-relaxed text-sm">
            I specialize in building end-to-end JavaScript applications using modern React, Next.js, Node.js, Express, and MongoDB. I enforce modular architecture, reusable design systems, and robust RESTful API designs to ensure long-term codebase maintainability.
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#03091b]/95 border border-blue-900/60 hover:border-emerald-500/50 transition-all duration-300 shadow-lg">
        <div className="flex-shrink-0 p-3 rounded-xl bg-emerald-950/90 text-emerald-400 border border-emerald-500/40">
          <FaBolt className="text-2xl" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-1.5">Performance Optimization & UX First</h4>
          <p className="text-slate-300 leading-relaxed text-sm">
            Every digital product I engineer is optimized for lightning-fast loading speeds, high SEO ranking, accessibility, and fluid user experiences. I deliver production-ready software adhering to strict version control and security best practices.
          </p>
        </div>
      </div>
    </div>
    
    {/* Bottom Commitment */}
    <div className="mt-8 pt-6 border-t border-blue-900/60">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-xl bg-indigo-950/90 text-indigo-400 border border-indigo-500/40">
          <FaLaptopHouse className="text-2xl" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-indigo-300 mb-1">Commitment to High-Impact Results</h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            My primary objective is to bridge technical execution with business strategy. Whether building dynamic admin dashboards, e-commerce platforms, or custom web portals, I strive for technical excellence and total client satisfaction.
          </p>
          <p className="mt-3 text-sm font-semibold text-cyan-300 flex items-center gap-2">
            <FaCheckCircle className="text-emerald-400 text-base" /> Ready to bring your next web platform to life with precision!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DeveloperBio;