import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import {
  FaCode,
  FaProjectDiagram,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaGraduationCap,
  FaUniversity,
  FaArrowRight,
  FaHourglassHalf,
  FaCheckCircle,
} from 'react-icons/fa';
import DeveloperBio from './DeveloperBio';

const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const endNumber = parseFloat(endValue.replace('+', ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const animateCount = timestamp => {
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
          observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.7 }
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
      {endValue.includes('+') ? '+' : ''}
    </span>
  );
};

const About = () => {
  const newStats = [
    {
      label: 'Years of Experience',
      value: '1+',
      unit: 'Years',
      icon: FaCode,
      bg: 'bg-indigo-500',
    },
    {
      label: 'Projects Completed',
      value: '15+',
      unit: 'Projects',
      icon: FaProjectDiagram,
      bg: 'bg-green-500',
    },
    {
      label: 'Coding Hours',
      value: '2000+',
      unit: 'Hours',
      icon: FaHourglassHalf,
      bg: 'bg-red-500',
    },
    {
      label: 'Happy Clients',
      value: '5+',
      unit: 'Clients',
      icon: FaCheckCircle,
      bg: 'bg-yellow-500',
    },
  ];

  const journey = [
    {
      title: 'React & Next.js Frontend',
      description:
        'Building dynamic, SEO-friendly, and highly responsive user interfaces using modern React features, Next.js for server-side rendering (SSR), and advanced state management.',
      icon: FaLayerGroup,
      color: 'bg-cyan-600',
      shadow: 'shadow-cyan-200',
    },
    {
      title: 'Node.js & Express Backend',
      description:
        'Developing robust, scalable RESTful APIs, implementing authentication (JWT, OAuth), and managing complex server-side logic efficiently with Node.js and Express.js.',
      icon: FaServer,
      color: 'bg-green-600',
      shadow: 'shadow-green-200',
    },
    {
      title: 'MongoDB Database Design',
      description:
        'Designing flexible and efficient non-relational database schemas, utilizing MongoDB aggregation pipelines, and ensuring data integrity and security.',
      icon: FaLaptopCode,
      color: 'bg-blue-600',
      shadow: 'shadow-blue-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-white text-gray-800"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-800">
            About Me
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A dedicated **MERN Stack Developer** focused on building high-performance, full-stack applications from concept to deployment.
          </p>
        </motion.div>

        
        <div className="mb-24 p-8 bg-gray-50 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <DeveloperBio />
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-700">
            Professional Achievements
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {newStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.05)' }}
              className="relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-slate-100 text-center"
            >
              
              <div
                className={`w-14 h-14 mx-auto flex items-center justify-center ${stat.bg} rounded-full mb-4 shadow-lg`}
              >
                <stat.icon className="text-white text-2xl" />
              </div>

              
              <p className="text-5xl font-extrabold text-slate-800 mb-1 leading-none">
                <Counter endValue={stat.value} duration={1800} />
              </p>

              
              <p className={`text-sm text-gray-500 font-semibold mb-1`}>
                {stat.unit}
              </p>
              
              <p className="text-sm text-slate-700 font-medium leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-700">
            MERN Stack Expertise
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My core focus is the MERN stack, allowing me to handle all aspects of web development efficiently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {journey.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: `0 20px 40px -10px rgba(0,0,0,0.1)` }}
              className={`relative bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200`}
            >
              
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 text-white text-2xl ${item.color} shadow-lg ${item.shadow}`}
              >
                <item.icon />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default About;