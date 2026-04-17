"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

interface MetricProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: MetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Metrics() {
  const metrics = [
    { label: "Databases Managed", value: 500, suffix: "+" },
    { label: "Uptime Guaranteed", value: 99, suffix: ".99%" },
    { label: "Query Speed Improved", value: 60, suffix: "%" },
    { label: "Terabytes Migrated", value: 50, suffix: "+" }
  ];

  return (
    <section className="py-20 bg-background/50 border-t border-b border-border relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-mono drop-shadow-md">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-sm md:text-base text-foreground/60 uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
