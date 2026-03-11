'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Expertise', id: 'expertise' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSegment(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          onClick={() => scrollToSection('home')}
          className="text-white font-black text-2xl tracking-tighter cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(255,60,60,0.4)]">
            <span className="text-white font-black text-sm">RK</span>
          </div>
          <span className="hidden sm:block uppercase">Kaiwart.</span>
        </motion.div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative ${activeSegment === item.id ? 'text-black' : 'text-white/60 hover:text-white'
                }`}
            >
              {activeSegment === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:ravikaiwart2004@gmail.com"
            className="px-8 py-3 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,60,60,0.3)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
