"use client";

import { motion } from "framer-motion";
import { education } from "../config";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-6xl mx-auto border-t border-white/10 font-mono relative w-full overflow-hidden">
      <div className="mb-20 flex flex-col items-start border-b border-white/10 pb-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference mb-4">
          Data Subroutine <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 tracking-widest italic">
            [Knowledge Base]
          </span>
        </h2>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block">Neural_Uplink</span>
      </div>

      <motion.div
        className="w-full bg-[#030303] border border-white/20 relative group p-1 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 pointer-events-none" />
        
        <div className="border-[0.5px] border-white/10 p-8 md:p-14 bg-black relative overflow-hidden">
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2vw_2vw] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <span className="w-3 h-3 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
                 <span className="text-[9px] text-white/50 uppercase tracking-[0.3em]">Sector 01 // Initialized</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight max-w-2xl leading-none">
                {education.degree}
              </h3>
              <p className="text-white/60 font-mono tracking-widest text-sm uppercase mt-2">
                &gt; {education.university}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 border-l md:border-l-0 md:border-r border-white/20 pl-4 md:pl-0 md:pr-4 py-2">
              <div className="text-white text-3xl font-bold font-mono">{education.cgpa}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-[0.3em]">GPA_Metric_Computed</div>
              
              <div className="mt-4 border border-white/20 bg-white/5 px-4 py-2">
                 <span className="text-xs text-white/80 font-mono tracking-widest">TIMEFRAME: {education.period}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
