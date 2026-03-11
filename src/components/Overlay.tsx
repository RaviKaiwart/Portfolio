'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Overlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 lg:p-24 pointer-events-none">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="flex flex-col gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,60,60,0.3)]">
              Developer <span className="text-white/20 mx-2">/</span> AI Architect
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8] mix-blend-difference">
              RAVI <br /> <span className="text-white/30">KUMAR</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex flex-col gap-4"
          >
            <div className="w-20 h-px bg-accent/40" />
            <p className="text-[#a1a1aa] font-medium text-sm md:text-lg max-w-sm lowercase leading-tight tracking-tight">
              Engineering fluid digital experiences <br /> through code & artificial intelligence.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-end gap-6 text-right"
        >
          <div className="space-y-1">
            <p className="text-white/20 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">Based in</p>
            <p className="text-white font-black text-lg md:text-2xl uppercase tracking-tighter leading-none">INDIA</p>
          </div>
          <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group animate-bounce mt-4">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
