"use client";

import { skills, skillProficiency } from "../config";
import AnimatedSection from "./ui/AnimatedSection";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto border-t border-border mt-20">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-accent">Skills</span>
        </h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Radar/Bar Chart Approximation for Proficiency */}
        <AnimatedSection direction="left">
          <h3 className="text-xl font-mono text-foreground mb-6 mb-8 text-center md:text-left">Core Proficiency</h3>
          <div className="space-y-6">
            {Object.entries(skillProficiency).map(([skill, level], i) => (
              <div key={i}>
                <div className="flex justify-between mb-1 text-sm font-mono">
                  <span className="text-foreground/80">{skill}</span>
                  <span className="text-accent">{level}%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-1.5 overflow-hidden">
                  <div className="bg-accent h-1.5 rounded-full" style={{ width: `${level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Categories */}
        <AnimatedSection direction="right">
          <h3 className="text-xl font-mono text-foreground mb-6 mt-12 md:mt-0 text-center md:text-left">Tech Stack</h3>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i} className="mb-4">
                <h4 className="text-sm uppercase tracking-widest text-foreground/50 mb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span key={j} className="px-3 py-1 bg-surface border border-border text-foreground/80 rounded-full text-xs font-mono">
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
