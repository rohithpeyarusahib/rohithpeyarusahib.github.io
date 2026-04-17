"use client";

import FadeIn from "./ui/FadeIn";
import SystemDiagram from "./SystemDiagram";
import { ShieldCheck, Activity, Server } from "lucide-react";

export default function Architecture() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 blur-[150px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <FadeIn direction="down">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              System <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">Architecture</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg pt-4">
              Designing highly scalable, fault-tolerant infrastructure tailored for massive throughput and zero-downtime.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-20 flex justify-center w-full">
          {/* Interactive Graph Component */}
          <SystemDiagram />
        </FadeIn>

        <FadeIn className="mt-20 flex justify-center gap-8 text-sm font-mono text-accent/80 flex-wrap pb-10" delay={0.4}>
          <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/50 transition-colors">
            <ShieldCheck size={16} /> Disaster Recovery
          </div>
          <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/50 transition-colors">
            <Activity size={16} /> Active Monitoring
          </div>
          <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/50 transition-colors">
            <Server size={16} /> Automated Failover
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
