"use client";

import FadeIn from "./ui/FadeIn";
import AnimatedCounter from "./ui/AnimatedCounter";

export default function Metrics() {
  const metrics = [
    { label: "Sys.Node.Active", value: 500, suffix: "+" },
    { label: "Uptime Guaranteed", value: 99, suffix: ".99%" },
    { label: "Query Speed Optimized", value: 60, suffix: "%" },
    { label: "Terabytes Migrated", value: 50, suffix: "TB+" }
  ];

  return (
    <section className="py-24 bg-black border-y border-white/10 relative overflow-hidden flex flex-col">
      {/* Background terminal grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4vw_4vw]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <FadeIn>
          {/* Readout Header */}
          <div className="flex items-center gap-4 mb-10 text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">
            <span className="w-8 h-[1px] bg-white/40" />
            Active Telemetry Readout
            <span className="flex-1 border-b border-dashed border-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#020202]">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-start p-8 group hover:bg-white/5 transition-colors">
                <div className="text-[10px] text-white/50 font-mono uppercase tracking-[0.2em] mb-6 flex justify-between w-full">
                  <span>{metric.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity animate-pulse text-white">&gt;_</span>
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
