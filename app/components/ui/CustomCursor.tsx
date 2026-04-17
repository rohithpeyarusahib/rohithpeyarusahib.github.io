"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfigRing = { damping: 25, stiffness: 150, mass: 0.3 };
  const springConfigDot = { damping: 25, stiffness: 800, mass: 0.1 };

  const cursorXSpring = useSpring(cursorX, springConfigRing);
  const cursorYSpring = useSpring(cursorY, springConfigRing);
  
  const dotXSpring = useSpring(cursorX, springConfigDot);
  const dotYSpring = useSpring(cursorY, springConfigDot);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
      window.addEventListener("mousemove", moveCursor);
    }
    
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `body { cursor: none; } a, button { cursor: none; }`}} />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
      />
    </>
  );
}
