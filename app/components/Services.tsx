"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Cluster Performance Tuning",
    description: "Deep indexing analysis, IOPS optimization, and critical query restructuring to destroy latency.",
    keywords: "B-Tree Optimization, Query Explains, IOPS Scaling",
  },
  {
    title: "Zero-Downtime Migrations",
    description: "Architecting seamless cross-cloud data migrations utilizing binlog routing and logical replication.",
    keywords: "AWS DMS, MySQL Binlog, pglogical",
  },
  {
    title: "High-Availability Matrices",
    description: "Deploying multi-region Active-Passive and Active-Active data meshes. Guaranteed 99.999% uptime.",
    keywords: "Galera Cluster, Patroni, Redis Sentinel",
  },
  {
    title: "Deep System Audits",
    description: "Ruthless examination of security groups, weak schemas, and transactional deadlocks.",
    keywords: "Deadlock Analysis, ACID Compliance, InfoSec Validation",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto border-t border-white/10 font-mono mt-12 relative z-10 w-full overflow-hidden">
      <div className="mb-20 flex flex-col items-start border-b border-white/10 pb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference mb-4">
          Operational <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 tracking-widest">
            [Capabilities]
          </span>
        </h2>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block">Sys.Execution.Vectors</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/20 bg-[#020202]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-10 border-white/10 hover:bg-white/5 hover:border-white/30 transition-colors duration-500 group relative ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3 mb-6">
              <span className="text-white font-bold text-xs uppercase tracking-widest animate-pulse">&gt;_</span>
              <h3 className="text-xl font-bold tracking-tight text-white uppercase">{service.title}</h3>
            </div>
            <p className="text-white/60 mb-8 text-sm leading-relaxed tracking-wide">{service.description}</p>
            <div className="mt-auto border-t border-white/10 pt-4">
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] break-words">
                Tags: <span className="text-white/80">{service.keywords}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
