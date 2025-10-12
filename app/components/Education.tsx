"use client";

import { motion } from "framer-motion";
import { education } from "../config";

const Education = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <motion.div
        className="bg-gray-800 rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-2">{education.degree}</h3>
        <p className="text-teal-400 mb-2">{education.university}</p>
        <p className="text-gray-300 mb-2">CGPA: {education.cgpa}</p>
        <p className="text-gray-400">{education.period}</p>
      </motion.div>
    </section>
  );
};

export default Education;
