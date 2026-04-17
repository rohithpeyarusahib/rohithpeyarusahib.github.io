"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
  "FIRMWARE BOOT v9.12.0 ... [OK]",
  "Mounting Root Volumes ... [OK]",
  "Establishing Secure Shard Connect ... [OK]",
  "Allocating Memory Matrix ... [OK]",
  "Decrypting Auth Keys ... [OK]",
  "Restoring Replica Shards ... [OK]",
  "Syncing Telemetry Nodes ... [OK]",
  "WARNING: Unidentified Trace Detected.",
  "Bypassing Security Protocol ... [DONE]",
  "System.Core Online."
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let delay = 300;
    bootLogs.forEach((log, index) => {
      delay += Math.random() * 150 + 100;
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === bootLogs.length - 1) {
          setTimeout(() => setLoading(false), 900);
        }
      }, delay);
    });
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className="fixed inset-0 z-[99999] bg-black text-white/80 font-mono p-8 text-xs md:text-sm flex flex-col justify-end overflow-hidden tracking-widest uppercase pb-[10vh]"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle grid line in background */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:100px_100%] leading-none" />

          <div className="flex flex-col gap-2 w-full max-w-4xl z-10">
             {logs.map((log, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                >
                  &gt;_ {log}
                </motion.span>
             ))}
             <motion.span 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="text-white bg-white w-2 h-4 inline-block mt-2"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
