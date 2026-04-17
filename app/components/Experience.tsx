"use client";

import { experience } from "../config";
import AnimatedSection from "./ui/AnimatedSection";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="text-accent">Experience</span> Timeline
        </h2>
      </AnimatedSection>

      <div className="relative border-l border-border ml-4 md:ml-8">
        {experience.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.15} direction="up">
            <div className="relative pl-8 mb-12 group">
              {/* Timeline marker node */}
              <div className="absolute w-4 h-4 rounded-full bg-accent -left-2 top-1.5 shadow-[0_0_10px_rgba(42,182,115,0.5)] flex items-center justify-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-background" />
              </div>
              
              <div className="bg-surface border border-border p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-1">{exp.role}</h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-foreground/50 text-sm mt-2 md:mt-0 font-mono text-left md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 text-foreground/80">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex text-sm md:text-base">
                      <span className="text-accent mr-2 mt-1">▹</span>
                      <span dangerouslySetInnerHTML={{ __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
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
