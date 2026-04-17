"use client";

import { skills, skillProficiency } from "../config";
import AnimatedSection from "./ui/AnimatedSection";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto border-t border-white/10 mt-20 font-mono relative z-10">
      <AnimatedSection>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 uppercase tracking-tighter mix-blend-difference">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Protocols</span>
          </h2>
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block mt-4">Cluster_Health_Indexing</span>
        </div>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Radar/Bar Chart Approximation for Proficiency */}
        <AnimatedSection direction="left">
          <h3 className="text-[10px] text-white/50 uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-2 flex justify-between">
            <span>Primary_Nodes</span>
            <span>Status</span>
          </h3>
          <div className="space-y-6">
            {Object.entries(skillProficiency).map(([skill, level], i) => (
              <div key={i} className="group cursor-default relative">
                <div className="flex justify-between mb-2 text-xs uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" /> {skill}_CLUSTER</span>
                  <span className="font-bold">H_IDX: 0.{level}</span>
                </div>
                <div className="w-full bg-transparent border-[0.5px] border-white/20 h-1.5 overflow-hidden flex shadow-[inset_0_0_5px_rgba(255,255,255,0.05)]">
                  <div className="bg-white h-1.5 transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ width: `${level}%` }}></div>
                  <div className="bg-white/10 flex-1 h-1.5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:10px_100%] opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Categories */}
        <AnimatedSection direction="right">
          <h3 className="text-[10px] text-white/50 uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-2">
            Secondary_Compute_Stack
          </h3>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i} className="mb-4">
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                  <span className="text-white">&gt;_</span> {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span key={j} className="px-3 py-1.5 bg-transparent border border-[0.5px] border-white/20 text-white/80 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
