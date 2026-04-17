"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Topology", href: "#architecture" },
    { name: "Capabilities", href: "#services" },
    { name: "Protocols", href: "#skills" },
    { name: "Hashes", href: "#certifications" },
    { name: "Ping", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-50 font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold flex items-center gap-2 text-white hover:text-white/80 transition-opacity">
              <span className="w-2 h-2 bg-white animate-pulse" />
              SYS.ADM_<span className="text-white/40">RP</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/50 hover:text-white uppercase tracking-[0.2em] text-[10px] py-2 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 w-full overflow-hidden absolute top-16 left-0 flex flex-col"
          >
            <div className="px-4 py-8 space-y-4 flex-1 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5vw_5vw] pointer-events-none" />
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/60 hover:text-white block px-3 py-4 text-xl font-bold uppercase tracking-widest transition-colors w-full text-center border-b border-white/5 last:border-0"
                >
                  <span className="text-white/20 text-xs mr-4 font-mono select-none">0{i + 1}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
