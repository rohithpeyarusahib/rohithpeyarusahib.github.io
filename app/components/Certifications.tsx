"use client";

import { motion } from "framer-motion";
import { certifications } from "../config";

const Certifications = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold">{cert}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
