"use client";

import { motion } from "framer-motion";
import { Download, Linkedin } from "lucide-react";
import { personalInfo } from "../config";
import { useEffect, useState } from "react";

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number }>>([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    updateDimensions();

    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [dimensions.width, dimensions.height]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-20"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        {/* Data flow lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0 200 Q 300 100 600 200 T 1200 200"
            stroke="rgba(20, 184, 166, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M0 400 Q 300 300 600 400 T 1200 400"
            stroke="rgba(20, 184, 166, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.title}
        </motion.p>
        <motion.p
          className="text-lg text-teal-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalInfo.tagline}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-teal-500 hover:bg-teal-500 rounded-lg transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
