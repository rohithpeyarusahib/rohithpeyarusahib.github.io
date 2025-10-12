"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../config";

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-10 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Key Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description.length > 100
                ? `${project.description.substring(0, 100)}...`
                : project.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-teal-400">Click for details</span>
              {expanded === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {expanded === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 text-gray-700 dark:text-gray-300"
              >
                {project.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
