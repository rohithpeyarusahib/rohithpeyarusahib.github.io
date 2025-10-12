"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../config";

const About = () => {
  return (
    <section id="about" className="py-10 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-left mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          I’m Rohith Peyarusahib, a hands-on Database Consultant specializing in MySQL, MongoDB, and PostgreSQL. I help businesses achieve <strong>high-performance, reliable, and scalable databases</strong> through performance optimization, seamless migrations, and end-to-end implementation. I am <strong>certified in MySQL 8 and MongoDB</strong>, ensuring industry-standard expertise in managing and optimizing modern database systems.
        </p>
        <p className="mt-4">
          With 3 years of experience managing databases across cloud and on-prem environments, I have successfully <strong>optimized multiple database instances, executed migrations, and implemented automation for monitoring and alerts</strong>. My focus is on delivering <strong>tangible results</strong>: faster queries, minimal downtime, and reliable database systems.
        </p>
        <p className="mt-4">
          I work closely with clients to understand their unique challenges and provide <strong>practical, results-driven solutions</strong> — from optimizing slow queries and setting up replication strategies to implementing complete database solutions. If you’re looking for a consultant who not only advises but <strong>executes solutions efficiently and reliably</strong>, I can help you achieve <strong>robust, high-performing databases that scale with your business</strong>.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-teal-400">50+</h3>
          <p className="text-gray-300 mt-2">Databases Optimized</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-teal-400">10+</h3>
          <p className="text-gray-300 mt-2">Migrations Completed</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-teal-400">Multiple</h3>
          <p className="text-gray-300 mt-2">Clients Served</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
