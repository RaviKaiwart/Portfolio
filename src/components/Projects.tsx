'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  category: string;
  image: string;
  link?: string;
  buttonText?: string;
  features?: string[];
  technologies?: Record<string, string>;
}

const mainProjects: Project[] = [
  {
    title: "RAKSHA",
    subtitle: "Industrial Safety Chatbot",
    category: "Figma · UI/UX · Chatbot · Dashboard",
    description: "AI-powered industrial safety chatbot. Designed flows for safety queries, emergency reporting, document access and emergency contacts, plus chat, voice input, image upload, emergency alerts and an admin dashboard for incident monitoring. Self-initiated UI/UX and development project.",
    fullDescription: "AI-powered industrial safety chatbot. Designed flows for safety queries, emergency reporting, document access and emergency contacts, plus chat, voice input, image upload, emergency alerts and an admin dashboard for incident monitoring. Self-initiated UI/UX and development project.",
    image: "/projects/raksha.png",
    link: "https://safety-chatbot-s4c8.vercel.app/",
    buttonText: "Live Demo",
    features: [
      "Safety query & emergency reporting flows",
      "Chat, voice input & image upload interfaces",
      "Emergency alerts & admin dashboard for incident monitoring"
    ],
    technologies: { "Role": "UI/UX & Development", "Tools": "Figma, React, Tailwind CSS" }
  },
  {
    title: "MoodStream",
    subtitle: "Music Recommendation",
    category: "Figma · UI/UX · Web App",
    description: "AI-based mood music recommendation web app. Designed flows for mood detection, playlist recommendations and music discovery, plus camera, mood result and Spotify/YouTube playlist screens. Self-initiated UI/UX project.",
    fullDescription: "AI-based mood music recommendation web app. Designed flows for mood detection, playlist recommendations and music discovery, plus camera, mood result and Spotify/YouTube playlist screens. Self-initiated UI/UX project.",
    image: "/projects/moodstream.png",
    link: "https://mood-stream-taupe.vercel.app/",
    buttonText: "Live Demo",
    features: [
      "Mood detection & playlist recommendation flows",
      "Camera integration & mood result screens",
      "Spotify and YouTube playlist discovery interfaces"
    ],
    technologies: { "Role": "UI/UX Design", "Tools": "Figma, Prototyping" }
  }
];

const designPractice: Project[] = [
  {
    title: "Glowing Text",
    category: "Design Systems · Component Sets",
    description: "Practiced component sets, variants, component properties, Recordly workflow, and state transitions to build reusable UI systems efficiently.",
    image: "/projects/glowing_text.png",
    link: "https://lnkd.in/p/g4F5y3Fv",
    buttonText: "View on LinkedIn"
  },
  {
    title: "Components & Variants",
    category: "Micro-interactions · Smart Animate",
    description: "Practiced creating reusable components, building component variants, interactive states, transitions, and Smart Animate for smooth interactive prototypes.",
    image: "/projects/components_variants.png",
    link: "https://lnkd.in/p/gbRHNhHV",
    buttonText: "View on LinkedIn"
  },
  {
    title: "Interactive Toggle",
    category: "Micro-interactions · Component Variants",
    description: "Created a reusable component with variants for different toggle states. Added micro-interactions and animation for a smoother user experience.",
    image: "/projects/toggle.png",
    link: "https://lnkd.in/p/gbh_cnyx",
    buttonText: "View on LinkedIn"
  },
  {
    title: "Ice Cream Card",
    category: "UI Practice · Visual Design",
    description: "Designed a clean product interface while practicing color palette selection, linear gradients and visual hierarchy. Created an interactive prototype to explore user flow and basic interactions.",
    image: "/projects/ice_cream.png",
    link: "https://lnkd.in/p/g289Zt4D",
    buttonText: "View on LinkedIn"
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  return (
    <>
      {/* SECTION 1: UI/UX PROJECTS (Horizontal Scroll Showcase) */}
      <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          {/* Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[15vw] font-black text-transparent opacity-[0.03] select-none whitespace-nowrap" style={{ WebkitTextStroke: '2px white' }}>
              PROJECTS
            </h2>
          </div>

          {/* Background Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

          {/* Scroll Indicator */}
          <div className="absolute top-12 left-12 hidden md:block z-10">
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              01 / UI/UX Projects
            </p>
            <div className="w-px h-16 bg-white/10 mt-4 ml-2 overflow-hidden">
              <motion.div
                className="w-full bg-accent origin-top h-full"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
          </div>

          <div className="absolute top-12 right-12 hidden md:block z-10">
            <p className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">
              Scroll to explore <span className="ml-2 inline-block animate-bounce">↓</span>
            </p>
          </div>

          {/* Horizontal Scroll Track */}
          <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-12 md:px-32 relative z-10 w-[300vw]">

            {/* Spacer to show "PROJECTS" text initially before cards slide in */}
            <div className="w-screen flex-shrink-0" />

            {mainProjects.map((project, idx) => (
              <div
                key={idx}
                className="w-[90vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0 flex flex-col justify-center px-12"
              >
                {/* 50/50 layout grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 w-full h-[60vh]">

                  {/* Text Content */}
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-4xl lg:text-6xl font-black text-white leading-none uppercase tracking-tighter">
                      {project.title}
                      {project.subtitle && <span className="block text-xl lg:text-2xl text-white/40 mt-2 font-semibold lowercase tracking-normal">{project.subtitle}</span>}
                    </h3>
                    <p className="text-[#a1a1aa] font-medium text-xs md:text-sm max-w-md mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-tighter rounded-full overflow-hidden transition-all duration-500 hover:pr-12"
                      >
                        <span className="relative z-10">View Details</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </button>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 bg-accent text-white font-black text-xs uppercase tracking-tighter rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,60,60,0.3)]"
                        >
                          {project.buttonText || "Live Demo"}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image / Mockup */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-2xl glass border border-white/10"
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full uppercase tracking-widest text-[10px] font-bold border border-white/20">Click to Open</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FIGMA PRACTICE (Standard Vertical Grid) */}
      <section id="design-practice" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              02 / UI/UX Practice
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]"
            >
              Figma <br /> <span className="text-white/20">Practice</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPractice.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden border border-white/10"
              >
                <div>
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300"
                    >
                      {item.buttonText || "View on LinkedIn"}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-2xl pointer-events-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[95vh]"
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-30 w-12 h-12 bg-white/5 hover:bg-accent text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 backdrop-blur-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto h-72 md:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto">
                <p className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4">
                  {selectedProject.category}
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tighter mb-8">
                  {selectedProject.title}
                </h3>

                <div className="prose prose-invert max-w-none mb-12">
                  <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-12">
                    <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-6 border-b border-white/5 pb-4">
                      Key Highlights & Features
                    </h4>
                    <motion.ul
                      initial="hidden"
                      animate="show"
                      variants={{
                        show: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      className="space-y-4"
                    >
                      {selectedProject.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: { opacity: 1, x: 0 }
                          }}
                          className="flex gap-4 text-[#a1a1aa] font-medium text-sm md:text-base"
                        >
                          <span className="text-accent">▹</span> {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}

                {/* Technical / Project Details */}
                {selectedProject.technologies && (
                  <div className="mb-12">
                    <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-6 border-b border-white/5 pb-4">
                      Overview
                    </h4>
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={{
                        show: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3
                          }
                        }
                      }}
                      className="space-y-4"
                    >
                      {Object.entries(selectedProject.technologies).map(([key, value]) => (
                        <motion.div
                          key={key}
                          variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            show: { opacity: 1, scale: 1 }
                          }}
                          className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                        >
                          <span className="text-accent font-bold min-w-[120px] text-xs uppercase tracking-widest">{key}</span>
                          <span className="text-gray-500 font-medium text-sm">{value}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {selectedProject.link && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 pt-10 border-t border-white/5"
                  >
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-tighter rounded-full overflow-hidden transition-all duration-500 hover:pr-14"
                    >
                      <span className="relative z-10">{selectedProject.buttonText || "Visit Link"}</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </a>
                  </motion.div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
