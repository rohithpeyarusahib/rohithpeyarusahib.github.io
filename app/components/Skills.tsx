"use client";

import { motion } from "framer-motion";
import { skills, skillProficiency } from "../config";

const Skills = () => {
  const skillCategories = [
    { title: "Databases", items: skills.databases },
    { title: "Performance Tuning", items: skills.performanceTuning },
    { title: "Automation", items: skills.automation },
    { title: "Monitoring Tools", items: skills.monitoring },
    { title: "Cloud Platforms", items: skills.cloud },
  ];

  return (
    <section id="skills" className="py-10 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-400">{category.title}</h3>
            <div className="space-y-4">
              {category.items.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    <span className="text-teal-400">{skillProficiency[skill as keyof typeof skillProficiency] || 80}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-teal-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillProficiency[skill as keyof typeof skillProficiency] || 80}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
