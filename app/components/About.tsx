"use client";

import { personalInfo } from "../config";
import AnimatedSection from "./ui/AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto z-10 relative">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold text-left mb-8">
          About <span className="text-accent">Me</span>
        </h2>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <div className="text-lg text-foreground/80 leading-relaxed mb-12 text-justify space-y-4 max-w-4xl">
          <p>
            I’m Rohith Peyarusahib, a hands-on Database Consultant specializing in MySQL, MongoDB, and PostgreSQL. I help businesses achieve <strong className="text-foreground">high-performance, reliable, and scalable databases</strong> through performance optimization, seamless migrations, and end-to-end implementation. I am <strong className="text-foreground">certified in MySQL 8 and MongoDB</strong>, ensuring industry-standard expertise in managing and optimizing modern database systems.
          </p>
          <p>
            With 3 years of experience managing databases across cloud and on-prem environments, I have successfully <strong className="text-foreground">optimized multiple database instances, executed migrations, and implemented automation for monitoring and alerts</strong>. My focus is on delivering <strong className="text-foreground">tangible results</strong>: faster queries, minimal downtime, and reliable database systems.
          </p>
          <p>
            I work closely with clients to understand their unique challenges and provide <strong className="text-foreground">practical, results-driven solutions</strong> — from optimizing slow queries and setting up replication strategies to implementing complete database solutions. If you’re looking for a consultant who not only advises but <strong className="text-foreground">executes solutions efficiently and reliably</strong>, I can help you achieve <strong className="text-foreground">robust, high-performing databases that scale with your business</strong>.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[
          { metric: "50+", desc: "Databases Optimized" },
          { metric: "10+", desc: "Migrations Completed" },
          { metric: "Multiple", desc: "Clients Served" }
        ].map((item, i) => (
          <AnimatedSection key={i} delay={0.4 + i * 0.1}>
            <div className="bg-surface border border-border p-8 rounded-2xl text-center hover:border-accent/50 transition-colors">
              <h3 className="text-3xl font-bold text-accent mb-2 font-mono">{item.metric}</h3>
              <p className="text-foreground/70 uppercase text-sm tracking-wide">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default About;
