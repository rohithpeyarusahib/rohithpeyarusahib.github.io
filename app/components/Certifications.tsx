"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../config";

const ScrambleText = ({ text, active }: { text: string, active: boolean }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text, active]);

  return <span>{displayText}</span>;
};

const Certifications = () => {
  const [activeCert, setActiveCert] = useState<number | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSelect = (index: number) => {
    if (activeCert === index) return;
    setIsVerifying(true);
    setActiveCert(index);
    setTimeout(() => setIsVerifying(false), 1200);
  };

  return (
    <section id="certifications" className="py-24 px-4 max-w-7xl mx-auto font-mono mt-12 relative z-10 w-full overflow-hidden">
      <div className="mb-20 flex flex-col items-start border-b border-white/10 pb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mix-blend-difference mb-4">
          Cryptographic <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-white/20 tracking-widest italic">
            [Validations]
          </span>
        </h2>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block">Secure_Ledger_Active</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 min-h-[400px]">
        {/* Left Side: The Ledger Chain */}
        <div className="w-full lg:w-1/3 flex flex-col relative border-l border-dashed border-white/20 pl-6">
          {/* Animated vertical connecting line */}
          <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[#00ffff] via-transparent to-transparent opacity-50" />
          
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="relative mb-6 cursor-pointer group"
              onClick={() => handleSelect(index)}
            >
              {/* Node Dot */}
              <div className={`absolute top-3 -left-[29px] w-3 h-3 border  transition-all duration-300 ${activeCert === index ? 'bg-[#00ffff] border-[#00ffff] shadow-[0_0_10px_#00ffff]' : 'bg-black border-white/40 group-hover:border-white'}`} />
              
              <div className={`border p-4 transition-all duration-500 rounded-none ${activeCert === index ? 'border-[#00ffff] bg-[#00ffff]/10' : 'border-white/10 hover:border-white/40 hover:bg-white/5'}`}>
                <div className="text-[9px] text-white/40 uppercase tracking-widest mb-2 flex justify-between">
                  <span>Block_{index.toString().padStart(3, '0')}</span>
                  {activeCert === index && <span className="text-[#00ffff] animate-pulse">Target Locked</span>}
                </div>
                <h3 className={`text-xs uppercase tracking-widest font-bold ${activeCert === index ? 'text-white' : 'text-white/60'}`}>
                  {activeCert === index ? <ScrambleText text={cert} active={true} /> : cert.length > 20 ? cert.substring(0, 20) + '...' : cert}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: The Validation Readout Terminal */}
        <div className="w-full lg:w-2/3 bg-black border border-white/20 relative shadow-[0_0_30px_rgba(0,255,255,0.05)] flex flex-col">
          <div className="border-b border-white/10 p-3 bg-[#050505] flex justify-between items-center text-[10px] text-white/50 uppercase tracking-widest">
            <span>Terminal // Hash_Validator</span>
            <span className="flex items-center gap-2">
              Status: {isVerifying ? <span className="text-[#ff4400] animate-pulse">Running Math...</span> : <span className="text-[#00ffff]">Idle / Validated</span>}
            </span>
          </div>

          <div className="p-8 flex-1 relative overflow-hidden flex items-center justify-center min-h-[300px]">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2vw_2vw]" />
            
            <AnimatePresence mode="wait">
              {activeCert === null ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-white/20 text-xs tracking-[0.3em] uppercase text-center"
                >
                  <div className="w-16 h-16 border border-white/10 rounded-full mx-auto mb-4 flex items-center justify-center animate-[spin_4s_linear_infinite]">
                    <div className="w-8 h-8 border border-white/10 rounded-full animate-[spin_2s_reverse_linear_infinite]" />
                  </div>
                  Select a Block to decrypt hash payload.
                </motion.div>
              ) : (
                <motion.div 
                  key={activeCert}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  className="w-full"
                >
                  {isVerifying ? (
                    <div className="w-full space-y-4 font-mono text-[10px] text-[#00ffff]/80 uppercase tracking-widest">
                      <p>&gt; Injecting SHA-256 decryption matrices...</p>
                      <p>&gt; Interrogating blockchain vectors [0x{Math.random().toString(16).substring(2, 10)}]...</p>
                      <div className="w-full h-[2px] bg-white/10">
                        <motion.div 
                          className="h-full bg-[#00ffff]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <p className="animate-pulse text-[#ff4400]">&gt; Bypassing localized security...</p>
                    </div>
                  ) : (
                    <div className="text-center relative z-10 w-full flex flex-col items-center">
                      <div className="w-24 h-24 mb-6 border-[0.5px] border-[#00ffff]/50 bg-[#00ffff]/5 shadow-[0_0_30px_rgba(0,255,255,0.1)] flex items-center justify-center rotate-45 relative group">
                        <div className="absolute inset-0 bg-[#00ffff] opacity-0 group-hover:opacity-20 transition-opacity" />
                        <span className="text-[#00ffff] -rotate-45 block font-bold text-2xl tracking-widest">V</span>
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        {certifications[activeCert]}
                      </h3>
                      <div className="mt-8 flex gap-4 text-[9px] uppercase tracking-[0.2em] text-white/50 border-t border-white/20 pt-4 w-full justify-center">
                        <span>Timestamp: {new Date().toISOString().split('T')[0]}</span>
                        <span className="text-[#00ffff]">[ Signature: Valid ]</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scanning Line overlay */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#00ffff]/10 to-transparent animate-[scan_3s_linear_infinite] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
