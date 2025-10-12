"use client";

import { motion } from "framer-motion";
import { experience } from "../config";

const Experience = () => {
  return (
    <section id="experience" className="py-10 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-left mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-teal-500 h-full"></div>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-teal-400 mb-2">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period} • {exp.location}</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      className="relative pl-4 before:absolute before:left-0 before:w-2 before:h-2 before:bg-teal-500 before:rounded-full before:-translate-x-1/2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="w-1/2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mx-auto"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
