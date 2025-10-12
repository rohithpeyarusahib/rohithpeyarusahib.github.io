"use client";

import { motion } from "framer-motion";
import { Database, Server, Shield, Search, HardDrive, Activity } from "lucide-react";

const services = [
  {
    title: "Database Performance Optimization",
    description: "Improve query speed, reduce latency, and enhance overall database performance.",
    icon: Database,
    keywords: "MySQL Performance Optimization, MongoDB Tuning, PostgreSQL Optimization",
  },
  {
    title: "Database Migration & Implementation",
    description: "Seamless migrations and end-to-end implementation for MySQL, MongoDB, and PostgreSQL with minimal downtime.",
    icon: Server,
    keywords: "MySQL Migration, MongoDB Implementation, PostgreSQL Migration",
  },
  {
    title: "High Availability & Replication Setup",
    description: "Implement replication, failover, and disaster recovery strategies for reliable and scalable databases.",
    icon: Shield,
    keywords: "PostgreSQL High Availability, MySQL Replication, MongoDB HA",
  },
  {
    title: "Database Health Audits",
    description: "Comprehensive audits to identify bottlenecks, slow queries, and configuration improvements.",
    icon: Search,
    keywords: "Database Audit, Query Optimization, DB Performance Review",
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Design secure backup strategies and restore solutions to prevent data loss and ensure business continuity.",
    icon: HardDrive,
    keywords: "MySQL Backup Strategy, MongoDB DR, PostgreSQL Recovery",
  },
  {
    title: "Database Monitoring & Automation",
    description: "Set up proactive monitoring, alerts, and automation scripts for optimal database performance.",
    icon: Activity,
    keywords: "Database Monitoring, Automation Scripts, Real-time Alerts",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-10 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-left mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={item}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <service.icon className="w-8 h-8 text-teal-400 mr-3" />
              </motion.div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-300 mb-2">{service.description}</p>
            <p className="text-sm text-teal-400">{service.keywords}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
