"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { projects } from "../config";
import AnimatedSection from "./ui/AnimatedSection";

function ProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative p-6 rounded-2xl bg-surface border border-border cursor-pointer hover:border-accent/50 transition-colors h-full flex flex-col group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
        style={{ transform: "translateZ(-10px)" }} 
      />
      <h3 className="text-xl font-bold font-mono mb-3 text-foreground" style={{ transform: "translateZ(30px)" }}>
        {project.title}
      </h3>
      <p className="text-foreground/70 text-sm line-clamp-3" style={{ transform: "translateZ(20px)" }}>
        {project.description}
      </p>
      <div className="mt-auto pt-4" style={{ transform: "translateZ(10px)" }}>
        <span className="text-accent text-sm font-semibold flex items-center group-hover:underline">
          View Engineering Logic &rarr;
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Stop body scroll when modal is open
  if (typeof document !== "undefined") {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 relative z-10 w-full">
      <AnimatedSection>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering <span className="text-accent">Projects</span></h2>
          <p className="text-foreground/60 max-w-xl">Deep diving into production migrations, optimization schemas, and high-availability solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
          {projects.map((proj, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
              <ProjectCard project={proj} onClick={() => setSelectedProject(proj)} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-background border border-border rounded-2xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface text-foreground/70 transition-colors"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-accent mb-4 pr-10">
                {selectedProject.title}
              </h2>
              
              <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p className="text-base md:text-lg">
                  {selectedProject.description}
                </p>
                {/* For demonstration we can parse out keywords logically or just render the string. */}
                {selectedProject.description.includes('MongoDB') && (
                  <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Technical Overview</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-foreground/70">
                      <li>Cross-platform topology migration.</li>
                      <li>Ensuring replica sets sync state reliably.</li>
                      <li>Datafile consistency validation.</li>
                    </ul>
                  </div>
                )}
                {selectedProject.description.includes('MySQL') && (
                  <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Technical Overview</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-foreground/70">
                      <li>Version upgrade testing (5.x to 8.x).</li>
                      <li>Query profiling and index adjustments.</li>
                      <li>GTID-based replication configurations.</li>
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
