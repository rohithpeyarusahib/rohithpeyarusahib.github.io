"use client";

import { experience } from "../config";
import AnimatedSection from "./ui/AnimatedSection";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 max-w-6xl mx-auto relative z-10 w-full overflow-hidden">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference">
          Operational <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 font-mono tracking-widest">
            [Uptime]
          </span>
        </h2>
        <p className="text-white/40 max-w-sm text-xs font-mono uppercase tracking-widest mt-6 md:mt-0">
          &gt; Historical Deployment Logs
        </p>
      </div>

      <div className="relative border-l-[0.5px] border-white/20 ml-2 md:ml-4">
        {experience.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.15} direction="up">
            <div className="relative pl-8 md:pl-12 mb-16 group">
              {/* Terminal Timeline marker node */}
              <div className="absolute w-3 h-3 bg-white border border-black rounded-none -left-[6px] top-2 transition-all duration-500 group-hover:bg-[#000000] group-hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
              
              <div className="bg-transparent border border-white/10 p-6 md:p-10 rounded-none hover:border-white/40 transition-colors hover:bg-white/5 backdrop-blur-sm relative">
                <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Node_{index + 1}</div>
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-2 tracking-tighter uppercase leading-none">{exp.role}</h3>
                    <p className="text-white/60 font-mono text-xs uppercase tracking-[0.2em]">{exp.company}</p>
                  </div>
                  <div className="text-white/40 text-[10px] mt-6 md:mt-0 font-mono text-left md:text-right uppercase tracking-[0.1em]">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-4 text-white/70 font-light text-sm md:text-base selection:bg-white selection:text-black">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex group/li relative leading-relaxed">
                      <span className="text-white/30 mr-4 font-mono font-bold mt-0.5 group-hover/li:text-white transition-colors">&gt;_</span>
                      <span dangerouslySetInnerHTML={{ __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold font-mono tracking-wide">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Experience;
