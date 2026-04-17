"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { projects } from "../config";
import FadeIn from "./ui/FadeIn";

interface Project {
  title: string;
  description: string;
  [key: string]: unknown;
}

function ProjectCard({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Staggered parallax based on odd/even grid
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, index % 2 === 0 ? -100 : -200]);

  return (
    <motion.div ref={ref} style={{ y: yParallax }} className="h-full">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="relative p-8 bg-black rounded-none border-[0.5px] border-white/10 cursor-pointer hover:border-white/30 transition-colors h-full flex flex-col group shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
          style={{ transform: "translateZ(-20px)" }} 
        />
        <h3 className="text-2xl md:text-3xl font-mono tracking-tighter mb-4 text-white flex justify-between items-start uppercase" style={{ transform: "translateZ(40px)" }}>
          {project.title}
          <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
        </h3>
        <p className="text-white/50 text-sm line-clamp-3 mb-8 leading-relaxed font-light" style={{ transform: "translateZ(20px)" }}>
          {project.description}
        </p>
        <div className="mt-auto pt-6 border-t border-white/5" style={{ transform: "translateZ(10px)" }}>
          <span className="inline-flex text-white/80 text-[10px] font-mono uppercase tracking-[0.3em] items-center transition-all before:content-['>_'] before:mr-2">
            View Protocol
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (typeof document !== "undefined") {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-4 relative z-10 w-full overflow-hidden">
      <FadeIn>
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference">
            Storage <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 font-mono tracking-widest">
              [Clusters]
            </span>
          </h2>
          <p className="text-white/40 max-w-sm text-xs font-mono uppercase tracking-widest mt-6 md:mt-0">
            &gt; High Availability & Disaster Recovery Matrices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ perspective: 1200 }}>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} onClick={() => setSelectedProject(proj)} />
          ))}
        </div>
      </FadeIn>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-3xl bg-[#111] border border-accent/30 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(42,182,115,0.15)] overflow-y-auto max-h-[90vh] z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface text-foreground/70 transition-colors bg-black/50"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-white tracking-tight mb-4 pr-10">
                {selectedProject.title}
              </h2>
              
              <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p className="text-base md:text-lg">
                  {selectedProject.description}
                </p>
                {selectedProject.description.includes('MongoDB') && (
                  <div className="mt-8 p-6 bg-black/50 rounded-xl border border-accent/20">
                    <h4 className="font-semibold text-accent font-mono mb-4 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Technical Execution
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-2 text-foreground/80 marker:text-accent">
                      <li>Cross-platform topology migration (Windows to Linux).</li>
                      <li>Ensuring replica sets sync state reliably.</li>
                      <li>Datafile consistency validation with zero-data-loss SLAs.</li>
                    </ul>
                  </div>
                )}
                {selectedProject.description.includes('MySQL') && (
                  <div className="mt-8 p-6 bg-black/50 rounded-xl border border-accent/20">
                    <h4 className="font-semibold text-accent font-mono mb-4 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Technical Execution
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-2 text-foreground/80 marker:text-accent">
                      <li>Automated Version upgrade testing (5.x to 8.x).</li>
                      <li>Query profiling via Performance Schema and index adjustments.</li>
                      <li>GTID-based replication configurations and ProxySQL routing.</li>
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
