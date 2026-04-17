"use client";

import { motion } from "framer-motion";
import { Database, Server, Globe, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { useState } from "react";

const nodes = [
  {
    id: "frontend",
    title: "Client & CDN",
    icon: Globe,
    description: "Global edge delivery prioritizing low latency content resolution.",
  },
  {
    id: "api",
    title: "App & API Layer",
    icon: Server,
    description: "Stateless microservices auto-scaling securely behind load balancers.",
  },
  {
    id: "db-primary",
    title: "Primary DB",
    icon: Database,
    description: "High availability writes with sub-millisecond commit latency.",
  },
  {
    id: "db-replica",
    title: "Read Replicas",
    icon: Database,
    description: "Geo-distributed nodes for scalable horizontal read throughput.",
  }
];

export default function Architecture() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">System <span className="text-accent">Architecture</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Designing highly scalable, fault-tolerant infrastructure tailored for massive throughput and zero-downtime.</p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
          
          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;
            
            return (
              <AnimatedSection key={node.id} delay={i * 0.15} direction="up" className="relative z-10 w-full lg:w-1/4 group">
                <div 
                  className="flex flex-col items-center p-6"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center border transition-colors ${isHovered ? 'bg-accent/20 border-accent text-accent' : 'bg-surface border-border text-foreground/70 group-hover:border-accent/50 group-hover:text-foreground'}`}
                    animate={{ y: isHovered ? -10 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold font-mono mb-2">{node.title}</h3>
                    
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0.5,
                        height: isHovered ? 'auto' : 'auto'
                      }}
                      className="text-sm text-foreground/60 transition-opacity"
                    >
                      {node.description}
                    </motion.div>
                  </div>
                  
                  {i < nodes.length - 1 && (
                    <div className="lg:hidden my-4 text-border flex justify-center w-full">
                       <ArrowRight className="transform rotate-90 opacity-50" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-16 flex justify-center gap-8 text-sm font-mono text-foreground/50 flex-wrap" delay={0.6}>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-accent" /> Disaster Recovery
          </div>
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-accent" /> Active Monitoring
          </div>
          <div className="flex items-center gap-2">
            <Server size={16} className="text-accent" /> Automated Failover
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
