import React from 'react';
import {
  FaUserTie, // Changed icon for professionalism
  FaCodeBranch, // Code Structure
  FaLaptopHouse, // Full Stack
  FaBolt, // Performance
  FaRocket, // Deployment
} from 'react-icons/fa';

const DeveloperBio = () => (
  <div className="relative p-8 lg:p-12 bg-white rounded-3xl shadow-xl border border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100">
    <div className="flex items-center gap-4 mb-8 pb-3 border-b-2 border-cyan-300">
      <FaUserTie className="text-4xl text-cyan-600" />
      <h3 className="text-3xl font-extrabold text-slate-800">
       Developer Bio
      </h3>
    </div>

    {/* Grid Container for Main Philosophy Blocks */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* --- Focus Block 1: MERN Specialization & Clean Code --- */}
      <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
        <div className="flex-shrink-0 pt-1">
          <FaCodeBranch className="text-2xl text-blue-600 mt-1" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">MERN Focus & Scalability</h4>
          <p className="text-gray-700 leading-relaxed text-base">
            I am a dedicated **MERN Stack Developer**, specializing in building end-to-end applications. My focus is on **scalable architecture, RESTful API design, and modular code** that ensures long-term maintainability and performance across the full stack.
          </p>
        </div>
      </div>

      {/* --- Focus Block 2: Performance & Deployment --- */}
      <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50/50 border border-green-100">
        <div className="flex-shrink-0 pt-1">
          <FaBolt className="text-2xl text-green-600 mt-1" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">Speed, UX & Quality</h4>
          <p className="text-gray-700 leading-relaxed text-base">
            Every project is optimized for speed and user experience (UX). I prioritize fast loading times, responsive design, and error-free deployment. I deliver **production-ready applications** with clear documentation and version control (Git/GitHub).
          </p>
        </div>
      </div>
    </div>
    
    {/* --- Bottom Block: Goal & Collaboration --- */}
    <div className="mt-10 pt-6 border-t border-slate-200">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
                <FaLaptopHouse className="text-3xl text-purple-600" />
            </div>
            <div>
                <h4 className="text-2xl font-bold text-purple-700 mb-2">My Commitment to You</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                    My objective is to translate complex requirements into elegant digital solutions. I thrive on problem-solving and collaboration. I am actively looking for opportunities where I can leverage my MERN expertise to drive successful digital transformation.
                </p>
                <p className="mt-4 text-base font-semibold text-slate-800">
                    Let's connect to discuss your project. I am ready to start building!
                </p>
            </div>
        </div>
    </div>
  </div>
);

export default DeveloperBio;