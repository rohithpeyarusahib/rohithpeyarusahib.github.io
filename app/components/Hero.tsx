"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../config";
import dynamic from "next/dynamic";
import FadeIn from "./ui/FadeIn";

const HeroCanvas = dynamic(() => import("./canvas/HeroCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Canvas Background mapped behind */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen hidden lg:block">
        <HeroCanvas />
      </div>

      <div className="absolute inset-0 -z-10 lg:hidden bg-black" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between h-full pointer-events-none pb-20">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left pt-20 md:pt-0">
          <FadeIn delay={0}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-white/50" />
              <span className="text-white/40 font-mono tracking-[0.4em] uppercase text-xs">Sys.Root_Access</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] font-black tracking-tighter mb-4 text-white uppercase">
              Rohith <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] block mt-2">
                Database Engineer
              </span>
            </h1>
          </FadeIn>
        
          <FadeIn delay={0.2}>
            <p className="text-xs md:text-sm text-white/60 max-w-md font-mono tracking-[0.2em] uppercase mt-8 border-l border-white/20 pl-4 py-1">
              Master Data Architect & Ops Engineer. Designing High-Concurrency Architecture.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-12 pointer-events-auto">
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-none overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs font-mono group-hover:text-white transition-colors">View Topology</span>
                <div className="absolute inset-0 bg-[#111] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-none hover:bg-white/5 transition-all uppercase tracking-widest text-xs backdrop-blur-sm font-mono flex items-center justify-center"
              >
                Initialize Auth
              </a>
            </div>
          </FadeIn>
        </div>
        
        {/* Invisible spacer allowing 3D canvas to exist on the right without overlap */}
        <div className="hidden md:block w-1/2 h-full" />
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none opacity-50">
        <span className="text-[10px] tracking-[0.5em] uppercase mb-4 text-white">Scroll</span>
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" 
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </section>
  );
}
