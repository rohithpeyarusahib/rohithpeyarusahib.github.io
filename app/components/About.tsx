"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../config";

const About = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {personalInfo.summary}
      </motion.p>
    </section>
  );
};

export default About;
